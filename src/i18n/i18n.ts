import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

export enum SupportedLanguages {
  EN = "en",
  RU = "ru",
}
export const DEFAULT_LANGUAGE = SupportedLanguages.EN;

const resources = {
  [SupportedLanguages.EN]: {
    translation: enTranslation
  },
  [SupportedLanguages.RU]: {
    translation: ruTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
    }
  });

export default i18n; 