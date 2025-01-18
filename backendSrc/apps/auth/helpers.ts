import { Env } from "../../../worker-configuration";
import { verifyToken as verifyTokenFirebase } from "./firebase";

export const verifyToken = async (request: Request, env: Env, verifyAuth: boolean = true) => {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
        if (verifyAuth) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }
        return null
    }

    const token = authHeader.split(' ')[1];
    let tokenData;
    try {
        tokenData = await verifyTokenFirebase(token, env);
        if (!tokenData && verifyAuth) {
            return Response.json({ error: 'Invalid token' }, { status: 401 });
        }
    } catch {
        if (verifyAuth) {
            return Response.json({ error: 'Invalid token' }, { status: 401 });
        }
        return null
    }

    return tokenData;
};
