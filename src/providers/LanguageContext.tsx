import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/i18n/i18n';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: DEFAULT_LANGUAGE,
  changeLanguage: () => { },
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentLanguageFromPath = () => {
    const pathParts = location.pathname.split('/');
    const language = pathParts[1];
    if (SUPPORTED_LANGUAGES.includes(language)) {
      return language;
    }
    return null;
  };

  const changeLanguage = (newLanguage: string) => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');

    if (pathParts[1] && SUPPORTED_LANGUAGES.includes(pathParts[1])) {
      pathParts[1] = newLanguage;
    } else {
      pathParts.splice(1, 0, newLanguage);
    }

    const newPath = pathParts.join('/');
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    navigate(newPath);
  };

  useEffect(() => {
    const currentLanguage = getCurrentLanguageFromPath();
    if (!currentLanguage) {
      changeLanguage(DEFAULT_LANGUAGE);
    } else if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
      setLanguage(currentLanguage);
    }
  }, [location.pathname, i18n]);

  const value = {
    currentLanguage: language,
    changeLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
