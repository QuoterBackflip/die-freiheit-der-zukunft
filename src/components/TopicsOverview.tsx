import React, { useState } from 'react';
import { philosophicalTopics } from '../data/topics';
import { PhilosophicalTopic } from '../data/types';
import {
  FinitudeDoorIllustration,
  DigitalIntermediaryIllustration,
  SeparationOfPowersIllustration,
  LivingSynapsesIllustration
} from './AbstractIllustrations';
import {
  Compass,
  ArrowRight,
  BookOpen,
  Quote,
  Sparkles,
  Scale
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface TopicsOverviewProps {
  onSelectTopic: (targetChapterId: string) => void;
}

export const TopicsOverview: React.FC<TopicsOverviewProps> = ({ onSelectTopic }) => {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('topics.filterAll') },
    { id: 'Existenzphilosophie & Theologie', label: 'Endlichkeit & Gott' },
    { id: 'Ethik & Metaphysik', label: 'Moral & Gesetz' },
    { id: 'KI-Philosophie & Anthropologie', label: 'KI-Macht & Zwischenwirt' },
    { id: 'Rechts- & Staatsphilosophie', label: 'Individuelle Gerechtigkeit' },
    { id: 'Institutionenlehre & KI-Architektur', label: 'Menschen-KI' },
    { id: 'Zukunftsforschung & Sozialpsychologie', label: 'Zukunft der Arbeit (2070)' }
  ];

  const filteredTopics = selectedFilter === 'all'
    ? philosophicalTopics
    : philosophicalTopics.filter(t => t.category === selectedFilter);

  // Helper to render topic illustration icon
  const renderTopicIllustration = (id: string) => {
    switch (id) {
      case 'endlichkeit-parameter':
        return <FinitudeDoorIllustration className="w-14 h-14" />;
      case 'moral-selbstbindung':
        return <Scale className="w-12 h-12 text-amber-500/80 stroke-1" />;
      case 'digitaler-zwischenwirt':
        return <DigitalIntermediaryIllustration className="w-14 h-14" />;
      case 'individuelle-gerechtigkeit':
        return <Compass className="w-12 h-12 text-amber-500/80 stroke-1" />;
      case 'menschen-ki-gewaltenteilung':
        return <SeparationOfPowersIllustration className="w-14 h-14" />;
      case 'arbeit-tatendrang-2070':
        return <LivingSynapsesIllustration className="w-14 h-14" />;
      default:
        return <Sparkles className="w-10 h-10 text-amber-500" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 border-b border-black/10 dark:border-white/10" id="themen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('topics.tag')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {t('topics.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink/75 font-book leading-relaxed">
            {t('topics.subtitle')}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedFilter(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === c.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-ink/75'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTopics.map((topic: PhilosophicalTopic) => (
            <div
              key={topic.id}
              className="flex flex-col justify-between rounded-2xl p-6 sm:p-8 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 hover:border-amber-500/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Top illustration & category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
                    {renderTopicIllustration(topic.id)}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-mono opacity-60 text-right rtl:text-left max-w-[150px] leading-tight">
                    {topic.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {topic.title}
                </h3>
                <div className="font-book italic text-xs text-ink/70 mb-4 pb-3 border-b border-black/10 dark:border-white/10">
                  {topic.subtitle}
                </div>

                {/* Summary */}
                <p className="text-sm text-ink/80 leading-relaxed font-sans-ui mb-6">
                  {topic.summary}
                </p>

                {/* Key Quote Callout */}
                <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border-l-2 rtl:border-l-0 rtl:border-r-2 border-amber-500 mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase text-amber-700 dark:text-amber-400 mb-1">
                    <Quote className="w-3 h-3" />
                    <span>{t('topics.thesisLabel')}</span>
                  </div>
                  <p className="font-book italic text-xs sm:text-sm text-ink/90 leading-relaxed">
                    {topic.keyThesis}
                  </p>
                </div>
              </div>

              {/* Bottom Jump-to-Chapter button */}
              <button
                onClick={() => onSelectTopic(topic.targetChapterId)}
                className="w-full pt-4 mt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{t('topics.readInText')}: {topic.targetChapterTitle.split(':')[0]}</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
