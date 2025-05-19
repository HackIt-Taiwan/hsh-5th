import React from 'react';
import { useLanguage, Locale } from '@/i18n/LanguageContext';

function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-2 text-sm">
      <button 
        className={`px-3 py-2 rounded ${locale === 'ch' ? 'bg-white/20 font-bold' : 'opacity-70 hover:opacity-100'}`}
        onClick={() => setLocale('ch')}
      >
        🇹🇼
      </button>
      <button 
        className={`px-3 py-2 rounded ${locale === 'en' ? 'bg-white/20 font-bold' : 'opacity-70 hover:opacity-100'}`}
        onClick={() => setLocale('en')}
      >
        🇺🇸
      </button>
    </div>
  );
}

export default LanguageSwitcher; 