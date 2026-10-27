import React from 'react';
import { HeroSparkIllustration } from './AbstractIllustrations';
import { BookOpen, Sparkles, Feather, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  onStartReading: (manuscriptId?: string) => void;
  onExploreTopics: () => void;
  onViewManifesto: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartReading, onExploreTopics, onViewManifesto }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 border-b border-black/10 dark:border-white/10">
      {/* Subtle radial ambient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Author Attribution */}
            <div className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-2 text-sm sm:text-base font-medium opacity-80">
              <Feather className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{t('hero.authorLabel')}</span>
              <strong className="font-semibold text-ink underline decoration-amber-500/40 underline-offset-4">
                {t('site.author')}
              </strong>
            </div>

            {/* Main Book Title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink leading-[1.12]">
              {t('hero.titleLine1')} <br className="hidden sm:inline" />
              <span className="text-amber-600 dark:text-amber-400">{t('hero.titleLine2')}</span>
            </h1>

            {/* Subtitle */}
            <p className="font-book italic text-lg sm:text-xl lg:text-2xl text-ink/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* Literary introductory text */}
            <p className="text-sm sm:text-base text-ink/75 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans-ui">
              {t('hero.intro')}
            </p>

            {/* Core Values Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 pt-2 text-xs opacity-75">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {t('hero.valueFree')}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                {t('hero.valueNoShop')}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {t('hero.valueNoTracking')}
              </span>
            </div>

            {/* Call To Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => onStartReading('gemini')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-200" />
                <span>{t('hero.btnReadGemini')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onStartReading('astra6')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-medium text-sm sm:text-base shadow-lg shadow-emerald-700/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-emerald-200" />
                <span>{t('hero.btnReadAstra')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onStartReading('grok')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-700/80 hover:bg-amber-600 text-white font-medium text-sm sm:text-base shadow-lg shadow-amber-700/20 hover:shadow-amber-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-200" />
                <span>{t('hero.btnReadGrok')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreTopics}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('hero.btnExploreTopics')}</span>
              </button>

              <button
                onClick={onViewManifesto}
                className="w-full sm:w-auto px-4 py-3.5 text-sm font-medium text-amber-700 dark:text-amber-400 hover:underline flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t('hero.btnManifesto')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Philosophical Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-sm max-w-sm sm:max-w-md w-full text-center">
              <HeroSparkIllustration className="w-full h-auto max-h-[300px] sm:max-h-[340px]" />
              
              <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10">
                <div className="text-xs uppercase tracking-widest font-mono text-amber-700 dark:text-amber-400 font-semibold">
                  {t('hero.visualDate')}
                </div>
                <div className="font-book italic text-sm mt-1 text-ink/80">
                  {t('hero.visualQuote')}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
