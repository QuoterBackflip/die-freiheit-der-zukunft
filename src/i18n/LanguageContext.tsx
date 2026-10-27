import React, { createContext, useContext, useState, useEffect } from 'react';
import { UiLanguage, BookLanguage, SUPPORTED_LANGUAGES, LanguageOption } from './types';
import { translations, Translations } from './translations';

interface LanguageContextType {
  uiLanguage: UiLanguage;
  setUiLanguage: (lang: UiLanguage) => void;
  bookLanguage: BookLanguage;
  setBookLanguage: (lang: BookLanguage) => void;
  t: (key: keyof Translations | string, defaultVal?: string) => string;
  isRTL: boolean;
  dir: 'ltr' | 'rtl';
  currentLangMeta: LanguageOption;
  supportedLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uiLanguage, setUiLanguageState] = useState<UiLanguage>(() => {
    const saved = localStorage.getItem('ui-language') as UiLanguage | null;
    if (saved && ['de', 'en', 'es', 'zh-CN', 'ar'].includes(saved)) {
      return saved;
    }
    return 'de';
  });

  const [bookLanguage, setBookLanguageState] = useState<BookLanguage>(() => {
    const saved = localStorage.getItem('book-language') as BookLanguage | null;
    if (saved && ['de', 'en', 'es', 'zh-CN', 'ar'].includes(saved)) {
      return saved;
    }
    return 'de';
  });

  const setUiLanguage = (lang: UiLanguage) => {
    setUiLanguageState(lang);
    localStorage.setItem('ui-language', lang);

    // If switching to Arabic/Chinese/Spanish/English/German and book language not explicitly pinned
    if (lang === 'ar' && !localStorage.getItem('book-language-explicit')) {
      setBookLanguageState('ar');
    } else if (lang === 'zh-CN' && !localStorage.getItem('book-language-explicit')) {
      setBookLanguageState('zh-CN');
    } else if (lang === 'es' && !localStorage.getItem('book-language-explicit')) {
      setBookLanguageState('es');
    } else if (lang === 'en' && !localStorage.getItem('book-language-explicit')) {
      setBookLanguageState('en');
    } else if (lang === 'de' && !localStorage.getItem('book-language-explicit')) {
      setBookLanguageState('de');
    }
  };

  const setBookLanguage = (lang: BookLanguage) => {
    setBookLanguageState(lang);
    localStorage.setItem('book-language', lang);
    localStorage.setItem('book-language-explicit', 'true');
  };

  const isRTL = uiLanguage === 'ar';
  const dir: 'ltr' | 'rtl' = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = uiLanguage;
    root.dir = dir;
    if (isRTL) {
      root.classList.add('rtl-layout');
    } else {
      root.classList.remove('rtl-layout');
    }
  }, [uiLanguage, dir, isRTL]);

  const t = (key: keyof Translations | string, defaultVal?: string): string => {
    const langDict = translations[uiLanguage];
    if (langDict && (key in langDict)) {
      return (langDict as unknown as Record<string, string>)[key];
    }
    // Fallback to German
    const deDict = translations.de;
    if (deDict && (key in deDict)) {
      return (deDict as unknown as Record<string, string>)[key];
    }
    return defaultVal || key;
  };

  const currentLangMeta = SUPPORTED_LANGUAGES.find(l => l.code === uiLanguage) || SUPPORTED_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        uiLanguage,
        setUiLanguage,
        bookLanguage,
        setBookLanguage,
        t,
        isRTL,
        dir,
        currentLangMeta,
        supportedLanguages: SUPPORTED_LANGUAGES
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
