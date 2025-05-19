import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations } from './translations';

export type Locale = 'ch' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.ch;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_COOKIE_NAME = 'preferred_language';

// Get language from cookie or use default
const getDefaultLocale = (): Locale => {
  if (typeof document !== 'undefined') {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${LANGUAGE_COOKIE_NAME}=`))
      ?.split('=')[1];
    
    if (cookieValue === 'en' || cookieValue === 'ch') {
      return cookieValue as Locale;
    }
  }
  
  // You can use browser language or other criteria to determine default
  return 'ch';
};

// Set language cookie with 365 days expiration
const setLanguageCookie = (locale: Locale): void => {
  if (typeof document !== 'undefined') {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 365);
    document.cookie = `${LANGUAGE_COOKIE_NAME}=${locale}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getDefaultLocale());
  
  // Set the cookie when language changes
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setLanguageCookie(newLocale);
    // No URL changes in SPA mode
  };
  
  // Set initial cookie if not already set
  useEffect(() => {
    setLanguageCookie(locale);
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