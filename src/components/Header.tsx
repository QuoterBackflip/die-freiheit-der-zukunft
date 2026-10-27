import React, { useState, useEffect } from 'react';
import { BookOpen, Sun, Moon, Coffee, Menu, X, Compass, Layers, ShieldCheck, Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export type ThemeMode = 'light' | 'sepia' | 'dark';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, manuscriptId?: string, chapterId?: string) => void;
  activeManuscriptId?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, activeManuscriptId = 'gemini' }) => {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode') as ThemeMode | null;
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
      } else {
        applyTheme('dark');
      }
    }
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    setTheme(mode);
    localStorage.setItem('theme-mode', mode);
    const root = document.documentElement;
    root.classList.remove('dark', 'sepia');

    const metaScheme = document.querySelector('meta[name="color-scheme"]');

    if (mode === 'dark') {
      root.classList.add('dark');
      if (metaScheme) metaScheme.setAttribute('content', 'dark');
    } else if (mode === 'sepia') {
      root.classList.add('sepia');
      if (metaScheme) metaScheme.setAttribute('content', 'light');
    } else {
      if (metaScheme) metaScheme.setAttribute('content', 'light');
    }
  };

  const cycleTheme = () => {
    if (theme === 'dark') applyTheme('light');
    else if (theme === 'light') applyTheme('sepia');
    else applyTheme('dark');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b transition-colors duration-200"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(11, 17, 30, 0.92)' : theme === 'sepia' ? 'rgba(245, 239, 224, 0.95)' : 'rgba(250, 248, 245, 0.95)',
        borderColor: theme === 'dark' ? '#1E2D48' : theme === 'sepia' ? '#DFD5C0' : '#E8DFD5'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Werk-Titel */}
          <button
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 text-left rtl:text-right group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-all shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-medium text-ink/60">
                {t('site.libraryLabel')}
              </div>
              <div className="font-display font-bold text-base sm:text-lg tracking-wide text-ink group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {t('site.title')}
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 rtl:space-x-reverse" aria-label="Hauptnavigation">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
                currentView === 'home'
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-500/15 font-semibold ring-1 ring-amber-500/30'
                  : 'text-ink/80 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {t('nav.home')}
            </button>

            <button
              onClick={() => onNavigate('library', 'gemini')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
                currentView === 'library' && activeManuscriptId === 'gemini'
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-500/15 font-semibold ring-1 ring-amber-500/30'
                  : 'text-ink/80 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span>{t('nav.gemini')}</span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                {t('badge.pdf')}
              </span>
            </button>

            <button
              onClick={() => onNavigate('library', 'astra6')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
                currentView === 'library' && activeManuscriptId === 'astra6'
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-500/15 font-semibold ring-1 ring-amber-500/30'
                  : 'text-ink/80 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span>{t('nav.astra6')}</span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                {t('badge.pdf')}
              </span>
            </button>

            <button
              onClick={() => onNavigate('library', 'grok')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
                currentView === 'library' && activeManuscriptId === 'grok'
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-500/15 font-semibold ring-1 ring-amber-500/30'
                  : 'text-ink/80 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span>{t('nav.grok')}</span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                {t('badge.pdf')}
              </span>
            </button>

            <button
              onClick={() => onNavigate('topics')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
                currentView === 'topics'
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-500/15 font-semibold ring-1 ring-amber-500/30'
                  : 'text-ink/80 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {t('nav.topics')}
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
                currentView === 'about'
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-500/15 font-semibold ring-1 ring-amber-500/30'
                  : 'text-ink/80 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {t('nav.about')}
            </button>

            <button
              onClick={() => onNavigate('compare')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
                currentView === 'compare'
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-500/15 font-semibold ring-1 ring-amber-500/30'
                  : 'text-ink/80 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span>{t('nav.compare')}</span>
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-400">
                {t('nav.synopsisBadge')}
              </span>
            </button>
          </nav>

          {/* Controls: Language, Theme & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* 5-Language Switcher */}
            <LanguageSwitcher />

            {/* Theme switcher button */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/10 dark:border-white/10">
              <button
                onClick={() => applyTheme('light')}
                title={t('theme.light')}
                aria-label={t('theme.light')}
                className={`p-1.5 rounded-full text-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  theme === 'light' ? 'bg-amber-500 text-white shadow-sm' : 'text-ink/60 hover:text-ink hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => applyTheme('sepia')}
                title={t('theme.sepia')}
                aria-label={t('theme.sepia')}
                className={`p-1.5 rounded-full text-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  theme === 'sepia' ? 'bg-amber-600 text-white shadow-sm' : 'text-ink/60 hover:text-ink hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <Coffee className="w-4 h-4" />
              </button>
              <button
                onClick={() => applyTheme('dark')}
                title={t('theme.dark')}
                aria-label={t('theme.dark')}
                className={`p-1.5 rounded-full text-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  theme === 'dark' ? 'bg-slate-800 text-amber-400 shadow-sm ring-1 ring-amber-500/30' : 'text-ink/60 hover:text-ink hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-ink hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
              aria-label={mobileMenuOpen ? t('nav.close') : t('nav.menu')}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 border-t"
          style={{
            borderColor: theme === 'dark' ? '#1E2D48' : theme === 'sepia' ? '#DFD5C0' : '#E8DFD5'
          }}
        >
          <div className="pb-2 pt-1 flex items-center justify-between border-b border-black/5 dark:border-white/5">
            <span className="text-xs font-mono uppercase tracking-wider text-ink/70">Sprache / Language:</span>
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className={`w-full text-left rtl:text-right px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
              currentView === 'home'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold ring-1 ring-amber-500/30'
                : 'text-ink hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{t('nav.home')}</span>
          </button>

          <button
            onClick={() => { onNavigate('library', 'gemini'); setMobileMenuOpen(false); }}
            className={`w-full text-left rtl:text-right px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
              currentView === 'library' && activeManuscriptId === 'gemini'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold ring-1 ring-amber-500/30'
                : 'text-ink hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{t('nav.gemini')}</span>
            <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
              {t('badge.complete')}
            </span>
          </button>

          <button
            onClick={() => { onNavigate('library', 'astra6'); setMobileMenuOpen(false); }}
            className={`w-full text-left rtl:text-right px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
              currentView === 'library' && activeManuscriptId === 'astra6'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold ring-1 ring-amber-500/30'
                : 'text-ink hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{t('nav.astra6')}</span>
            <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
              {t('badge.complete')}
            </span>
          </button>

          <button
            onClick={() => { onNavigate('library', 'grok'); setMobileMenuOpen(false); }}
            className={`w-full text-left rtl:text-right px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
              currentView === 'library' && activeManuscriptId === 'grok'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold ring-1 ring-amber-500/30'
                : 'text-ink hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{t('nav.grok')}</span>
            <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
              {t('badge.complete')}
            </span>
          </button>

          <button
            onClick={() => { onNavigate('library', 'claude'); setMobileMenuOpen(false); }}
            className="w-full text-left rtl:text-right px-4 py-2.5 rounded-lg text-sm text-ink/70 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 pl-8 rtl:pr-8 rtl:pl-4 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer transition-colors"
          >
            <span>{t('nav.claude')}</span>
            <span className="text-[11px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
              {t('badge.inPreparation')}
            </span>
          </button>

          <button
            onClick={() => { onNavigate('topics'); setMobileMenuOpen(false); }}
            className={`w-full text-left rtl:text-right px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
              currentView === 'topics'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold ring-1 ring-amber-500/30'
                : 'text-ink hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{t('nav.topics')}</span>
          </button>

          <button
            onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
            className={`w-full text-left rtl:text-right px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
              currentView === 'about'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold ring-1 ring-amber-500/30'
                : 'text-ink hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{t('nav.about')}</span>
          </button>

          <button
            onClick={() => { onNavigate('compare'); setMobileMenuOpen(false); }}
            className={`w-full text-left rtl:text-right px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
              currentView === 'compare'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold ring-1 ring-amber-500/30'
                : 'text-ink hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{t('nav.compare')}</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-400 font-semibold">
              {t('nav.synopsisBadge')}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
