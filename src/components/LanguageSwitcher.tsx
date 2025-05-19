import React from 'react';
import { useLanguage, Locale } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';

function LanguageSwitcher() {
  const { locale } = useLanguage();

  return (
    <div className="flex gap-2 text-sm">
      <Link
        to="/"
        className={`px-3 py-2 rounded ${locale === 'ch' ? 'bg-white/20 font-bold' : 'opacity-70 hover:opacity-100'}`}
        onClick={(e) => {
          e.preventDefault();
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
      >
        🇹🇼
      </Link>
      <Link
        to="/en"
        className={`px-3 py-2 rounded ${locale === 'en' ? 'bg-white/20 font-bold' : 'opacity-70 hover:opacity-100'}`}
        onClick={(e) => {
          e.preventDefault();
          window.history.pushState({}, '', '/en');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
      >
        🇺🇸
      </Link>
    </div>
  );
}

export default LanguageSwitcher; 