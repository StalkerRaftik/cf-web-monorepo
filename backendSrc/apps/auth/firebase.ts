import { Env } from '../../../worker-configuration';

export interface DecodedToken {
  uid: string;
  email: string;
}

export async function verifyToken(token: string, env: Env): Promise<DecodedToken> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Google certificates');
    }

    const certs = await response.json();

    // Декодируем JWT токен (он разделен на 3 части точками)
    const [headerB64, payloadB64, _] = token.split('.');

    // Декодируем header из base64
    const header = JSON.parse(atob(headerB64));

    // Проверяем наличие kid в заголовке
    if (!header.kid) {
      throw new Error('No kid in token header');
    }

    // Проверяем, что kid соответствует одному из сертификатов
    if (!certs[header.kid]) {
      throw new Error('Invalid kid');
    }

    // Декодируем payload из base64
    const payload = JSON.parse(atob(payloadB64));

    // Проверяем основные claims
    const now = Math.floor(Date.now() / 1000);

    if (payload.aud !== env.FIREBASE_PROJECT_ID) {
      throw new Error('Invalid audience');
    }

    if (payload.iss !== `https://securetoken.google.com/${env.FIREBASE_PROJECT_ID}`) {
      throw new Error('Invalid issuer');
    }

    if (payload.exp < now) {
      throw new Error('Token expired');
    }

    if (!payload.email) {
      throw new Error('No email in token');
    }

    return {
      uid: payload.user_id || payload.sub,
      email: payload.email,
    };
  } catch (error) {
    console.error('Token verification error:', error);
    throw new Error('Invalid token');
  }
} 