import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { UiLanguage } from '../i18n/types';

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  compact = false,
  className = ''
}) => {
  const { uiLanguage, setUiLanguage, supportedLanguages, currentLangMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (code: UiLanguage) => {
    setUiLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-ink focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title="Sprache wählen / Select language"
      >
        <Globe className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span className="font-sans-ui">{currentLangMeta.name}</span>
        <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 rounded-xl shadow-2xl border border-black/15 dark:border-white/15 py-1.5 z-[100] focus:outline-none bg-white dark:bg-[#10192A]"
          style={{ backgroundColor: 'var(--color-bg-surface, #FFFFFF)' }}
          role="listbox"
          aria-label="Website-Sprache auswählen"
        >
          <div className="px-3.5 py-1.5 text-[10px] uppercase font-mono tracking-wider font-semibold text-gray-500 dark:text-gray-400 border-b border-black/10 dark:border-white/10 mb-1">
            Website-Sprache
          </div>
          {supportedLanguages.map((lang) => {
            const isSelected = lang.code === uiLanguage;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full text-left rtl:text-right px-3.5 py-2 text-xs font-sans-ui flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 font-semibold ring-1 ring-inset ring-amber-500/30'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
                role="option"
                aria-selected={isSelected}
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-ink">{lang.name}</span>
                  <span className="text-[11px] text-ink/60">{lang.englishName}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 font-bold" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
