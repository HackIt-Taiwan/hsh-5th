import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations } from './translations';

export type Locale = 'ch' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.ch;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getLocaleFromPath = (): Locale => {
  const path = window.location.pathname;
  if (path.startsWith('/en')) {
    return 'en';
  }
  return 'ch';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getLocaleFromPath());
  
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    
    const currentPath = window.location.pathname;
    const currentPathWithoutLocale = currentPath.replace(/^\/(en|ch)?/, '');
    
    const newPath = newLocale === 'ch' 
      ? `${currentPathWithoutLocale}` 
      : `/${newLocale}${currentPathWithoutLocale}`;
    
    window.history.pushState({}, '', newPath || '/');
  };
  
  useEffect(() => {
    const handlePopState = () => {
      setLocaleState(getLocaleFromPath());
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  const t = translations[locale];
  
  const value = { locale, setLocale, t };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}