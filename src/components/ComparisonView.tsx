import React, { useState } from 'react';
import { comparisonMatrix } from '../data/topics';
import { Layers, Clock, CheckCircle2, ArrowRight, BookOpen, Quote, Info } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ComparisonViewProps {
  onNavigateToChapter: (chapterId: string, manuscriptId?: string) => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ onNavigateToChapter }) => {
  const { t } = useLanguage();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(comparisonMatrix[0].id);

  const activeTopic = comparisonMatrix.find(t => t.id === selectedTopicId) || comparisonMatrix[0];

  return (
    <div className="py-12 sm:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('compare.tag')}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink break-words hyphens-auto">
            {t('compare.title')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink/75 font-book leading-relaxed break-words">
            {t('compare.subtitle')}
          </p>
        </div>

        {/* Feature Status Note */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-4">
          <Info className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-ink/80 leading-relaxed font-sans-ui">
            <strong className="text-emerald-800 dark:text-emerald-300">{t('compare.noticeActive')} </strong>
            {t('compare.noticeText')}
          </div>
        </div>

        {/* Topic Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {comparisonMatrix.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedTopicId(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                selectedTopicId === item.id
                  ? 'bg-amber-600 text-white shadow-md font-semibold ring-1 ring-amber-500/30'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-ink/80'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Question Box */}
        <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-center">
          <div className="text-xs uppercase font-mono tracking-widest text-ink/60 mb-2">
            Zentrale philosophische Fragestellung
          </div>
          <div className="font-display font-bold text-lg sm:text-2xl text-ink break-words">
            {activeTopic.question}
          </div>
        </div>

        {/* 4 Columns Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          
          {/* Column 1: Gemini (Ready) */}
          <div className="rounded-2xl p-6 bg-amber-500/[0.05] dark:bg-amber-500/[0.08] border border-amber-500/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('compare.colGemini')}</span>
                </span>
                <span className="text-[11px] font-mono opacity-60 text-ink">{t('badge.complete')}</span>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-3">
                Systematische Ausarbeitung
              </h3>

              <p className="text-xs sm:text-sm text-ink/85 font-sans-ui leading-relaxed mb-5">
                {activeTopic.geminiPerspective.coreArgument}
              </p>

              <blockquote className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-amber-500 font-book italic text-xs sm:text-sm text-ink/90 leading-relaxed mb-6">
                <Quote className="w-3.5 h-3.5 text-amber-500 mb-1 opacity-70" />
                {activeTopic.geminiPerspective.quote}
              </blockquote>
            </div>

            <button
              onClick={() => onNavigateToChapter(activeTopic.geminiPerspective.chapterRef, 'gemini')}
              className="w-full pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-600 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-b-lg"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t('compare.openChapter')} (Gemini)</span>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Column 2: Astra 6 (Ready) */}
          <div className="rounded-2xl p-6 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.07] border border-emerald-500/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('compare.colAstra')}</span>
                </span>
                <span className="text-[11px] font-mono opacity-60 text-ink">{t('badge.complete')}</span>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-3">
                Literarische Ich-Stimme
              </h3>

              <p className="text-xs sm:text-sm text-ink/85 font-sans-ui leading-relaxed mb-5">
                {activeTopic.astra6Perspective.coreArgument}
              </p>

              <blockquote className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-500 font-book italic text-xs sm:text-sm text-ink/90 leading-relaxed mb-6">
                <Quote className="w-3.5 h-3.5 text-emerald-500 mb-1 opacity-70" />
                {activeTopic.astra6Perspective.quote}
              </blockquote>
            </div>

            <button
              onClick={() => onNavigateToChapter(activeTopic.astra6Perspective.chapterRef || 'prolog', 'astra6')}
              className="w-full pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-b-lg"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t('compare.openChapter')} (Astra 6)</span>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Column 3: Grok (Ready) */}
          <div className="rounded-2xl p-6 bg-blue-500/[0.04] dark:bg-blue-500/[0.07] border border-blue-500/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('compare.colGrok')}</span>
                </span>
                <span className="text-[11px] font-mono opacity-60 text-ink">{t('badge.complete')}</span>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-3">
                Systematisch-analytische Fassung
              </h3>

              <p className="text-xs sm:text-sm text-ink/85 font-sans-ui leading-relaxed mb-5">
                {activeTopic.grokPerspective?.coreArgument}
              </p>

              {activeTopic.grokPerspective?.quote && (
                <blockquote className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-blue-500 font-book italic text-xs sm:text-sm text-ink/90 leading-relaxed mb-6">
                  <Quote className="w-3.5 h-3.5 text-blue-500 mb-1 opacity-70" />
                  {activeTopic.grokPerspective.quote}
                </blockquote>
              )}
            </div>

            <button
              onClick={() => onNavigateToChapter(activeTopic.grokPerspective?.chapterRef || 'kapitel-1', 'grok')}
              className="w-full pt-4 border-t border-blue-500/20 flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-600 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-b-lg"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{t('compare.openChapter')} (Grok)</span>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Column 4: Claude */}
          <div className="rounded-2xl p-6 bg-white dark:bg-[#1a2234] border border-purple-500/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('compare.colClaude')}</span>
                </span>
                <span className="text-[11px] font-mono opacity-60 text-ink">{t('badge.complete')}</span>
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-3">
                Verfassungsphilosophische Fassung
              </h3>

              <p className="text-xs sm:text-sm text-ink/85 font-sans-ui leading-relaxed mb-5">
                {activeTopic.claudePerspective?.coreArgument}
              </p>

              {activeTopic.claudePerspective?.quote && (
                <blockquote className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border-l-2 rtl:border-l-0 rtl:border-r-2 border-purple-500 font-book italic text-xs sm:text-sm text-ink/90 leading-relaxed mb-6">
                  <Quote className="w-3.5 h-3.5 text-purple-500 mb-1 opacity-70" />
                  {activeTopic.claudePerspective.quote}
                </blockquote>
              )}
            </div>

            <button
              onClick={() => onNavigateToChapter(activeTopic.claudePerspective?.chapterRef || 'kapitel-1', 'claude')}
              className="w-full pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-600 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-b-lg"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-purple-500 shrink-0" />
                <span>{t('compare.openChapter')} (Claude)</span>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
