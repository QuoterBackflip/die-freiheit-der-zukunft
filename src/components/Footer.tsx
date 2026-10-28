import React from 'react';
import { BookOpen, Feather } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onNavigate: (view: string, manuscriptId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] pt-16 pb-12 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Authorship */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-ink">
                {t('site.title')}
              </span>
            </div>

            <p className="font-book italic text-sm text-ink/75 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-sans-ui text-ink/80">
              <Feather className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{t('footer.authorLabel')}</span>
              <strong className="font-semibold text-ink">{t('site.author')}</strong>
            </div>

            <p className="text-xs text-ink/60 font-sans-ui leading-relaxed max-w-md">
              {t('footer.nonCommercial')}
            </p>
          </div>

          {/* Nav: Bibliothek */}
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-4">
              {t('footer.colLibrary')}
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans-ui">
              <li>
                <button
                  onClick={() => onNavigate('library', 'gemini')}
                  className="hover:text-amber-500 transition-colors flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer"
                >
                  <span>{t('nav.gemini')}</span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    {t('badge.complete')}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library', 'astra6')}
                  className="hover:text-amber-500 transition-colors flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer"
                >
                  <span>{t('nav.astra6')}</span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    {t('badge.complete')}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library', 'grok')}
                  className="hover:text-amber-500 transition-colors flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer"
                >
                  <span>{t('nav.grok')}</span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    {t('badge.complete')}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library', 'claude')}
                  className="hover:text-amber-500 transition-colors flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer"
                >
                  <span>{t('nav.claude')}</span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    {t('badge.complete')}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('compare')}
                  className="hover:text-amber-500 transition-colors opacity-80 hover:opacity-100 cursor-pointer"
                >
                  {t('nav.compare')} ({t('nav.synopsisBadge')})
                </button>
              </li>
            </ul>
          </div>

          {/* Nav: Philosophie & Werk */}
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-4">
              {t('footer.colWork')}
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans-ui">
              <li>
                <button
                  onClick={() => onNavigate('topics')}
                  className="hover:text-amber-500 transition-colors opacity-80 hover:opacity-100 cursor-pointer"
                >
                  {t('footer.topicsLink')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-500 transition-colors opacity-80 hover:opacity-100 cursor-pointer"
                >
                  {t('footer.historyLink')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-500 transition-colors opacity-80 hover:opacity-100 cursor-pointer"
                >
                  {t('footer.clearanceLink')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-500 transition-colors opacity-80 hover:opacity-100 cursor-pointer"
                >
                  {t('footer.manifestoLink')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('support');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-amber-500 transition-colors opacity-80 hover:opacity-100 cursor-pointer inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium"
                >
                  {t('support.tag')}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-ui opacity-60">
          <div>
            {t('footer.rights')}
          </div>
          <div className="flex items-center gap-4">
            <span>{t('footer.noShop')}</span>
            <span>·</span>
            <span>{t('footer.noCookies')}</span>
            <span>·</span>
            <span>{t('footer.noTracking')}</span>
            <span>·</span>
            <span>{t('footer.culturalHeritage')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
