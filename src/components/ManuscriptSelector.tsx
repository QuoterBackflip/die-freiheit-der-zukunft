import React from 'react';
import { allManuscripts, getAllManuscripts } from '../data/manuscripts';
import { Manuscript } from '../data/types';
import { BookOpen, CheckCircle2, Clock, ArrowRight, Feather } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ManuscriptSelectorProps {
  onSelectManuscript: (manuscriptId: string) => void;
}

export const ManuscriptSelector: React.FC<ManuscriptSelectorProps> = ({ onSelectManuscript }) => {
  const { t, bookLanguage } = useLanguage();
  const manuscriptsList = getAllManuscripts(bookLanguage);

  return (
    <section className="py-12 sm:py-16 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 mb-2">
            <Feather className="w-3.5 h-3.5" />
            <span>{t('selector.tag')}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            {t('selector.title')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink/75 font-book leading-relaxed">
            {t('selector.subtitle')}
          </p>
        </div>

        {/* 4 Compact Equal Book Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {manuscriptsList.map((m: Manuscript) => {
            const isReady = m.status === 'ready';

            let desc = '';
            let badge = '';
            if (m.id === 'gemini') {
              desc = t('selector.descGemini');
              badge = t('selector.badgeGemini');
            } else if (m.id === 'astra6') {
              desc = t('selector.descAstra');
              badge = t('selector.badgeAstra');
            } else if (m.id === 'claude') {
              desc = t('selector.descClaude');
              badge = t('selector.badgeClaude');
            } else if (m.id === 'grok') {
              desc = t('selector.descGrok');
              badge = t('selector.badgeGrok');
            }

            return (
              <div
                key={m.id}
                className={`group relative flex flex-col justify-between rounded-xl p-5 sm:p-6 transition-all duration-200 border ${
                  isReady
                    ? 'bg-amber-500/[0.03] dark:bg-amber-500/[0.06] border-amber-500/30 hover:border-amber-500/60 hover:shadow-lg'
                    : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 opacity-80 hover:opacity-100'
                }`}
              >
                <div>
                  {/* Status Tag & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        isReady
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {isReady ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{t('selector.available')}</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3.5 h-3.5" />
                          <span>{t('selector.inPrep')}</span>
                        </>
                      )}
                    </span>

                    <span className="text-[11px] font-mono opacity-50 uppercase">
                      {badge}
                    </span>
                  </div>

                  {/* Title & System */}
                  <h3 className="font-display text-xl font-bold text-ink tracking-tight mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {m.id === 'gemini'
                      ? (bookLanguage === 'ar' ? 'نسخة جيميني' : bookLanguage === 'en' ? 'Gemini Edition' : bookLanguage === 'es' ? 'Edición Gemini' : bookLanguage === 'zh-CN' ? 'Gemini 中文版' : 'Gemini-Fassung')
                      : m.id === 'astra6'
                      ? (bookLanguage === 'ar' ? 'طبعة المؤلف أسترا' : bookLanguage === 'en' ? "Astra Author's Edition" : bookLanguage === 'es' ? 'Edición del Autor Astra' : bookLanguage === 'zh-CN' ? 'Astra 6 作者版' : 'Astra-Autorenfassung')
                      : m.id === 'grok'
                      ? (bookLanguage === 'ar' ? 'نسخة غروك' : bookLanguage === 'en' ? 'Grok Edition' : bookLanguage === 'es' ? 'Edición Grok' : bookLanguage === 'zh-CN' ? 'Grok 版本' : 'Grok-Fassung')
                      : m.name}
                  </h3>
                  <div className="text-xs text-amber-700 dark:text-amber-400 font-medium mb-3">
                    {m.systemName}
                  </div>

                  {/* Compact Description on Homepage */}
                  <p className="text-xs sm:text-sm text-ink/80 font-sans-ui leading-relaxed mb-5">
                    {desc}
                  </p>
                </div>

                {/* Compact Action Button */}
                <div className="pt-3 border-t border-black/10 dark:border-white/10">
                  {isReady ? (
                    <button
                      onClick={() => onSelectManuscript(m.id)}
                      className="w-full py-2.5 px-4 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-amber-200" />
                      <span>{t('selector.btnRead')}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelectManuscript(m.id)}
                      className="w-full py-2.5 px-4 rounded-lg border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 text-ink/75 font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{t('selector.btnView')}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
