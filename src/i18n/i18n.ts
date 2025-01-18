import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

export const SUPPORTED_LANGUAGES = ['en', 'ru'];
export const DEFAULT_LANGUAGE = 'en';

const resources = {
  en: {
    translation: enTranslation
  },
  ru: {
    translation: ruTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
    }
  });

export default i18n; 