import React from 'react';
import { Manuscript } from '../data/types';
import { Clock, BookOpen, AlertCircle, FileCode, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface PreparationViewProps {
  manuscript: Manuscript;
  onSwitchToGemini: () => void;
  onBackToHome: () => void;
}

export const PreparationView: React.FC<PreparationViewProps> = ({
  manuscript,
  onSwitchToGemini,
  onBackToHome
}) => {
  const { t } = useLanguage();

  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top navigation link */}
      <button
        onClick={onBackToHome}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/60 hover:text-ink mb-8 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
        <span>{t('prep.back')}</span>
      </button>

      <div className="rounded-3xl p-8 sm:p-12 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-center shadow-xl">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
          <Clock className="w-4 h-4" />
          <span>{t('badge.status')}: {t('badge.inPreparation')}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-3">
          {manuscript.name}
        </h1>

        <div className="text-xs uppercase font-mono tracking-widest text-amber-700 dark:text-amber-400 font-semibold mb-6">
          {manuscript.systemName}
        </div>

        {/* Philosophical lens description */}
        <p className="font-book italic text-lg sm:text-xl text-ink/80 leading-relaxed max-w-2xl mx-auto mb-8">
          „{manuscript.roleDescription}“
        </p>

        <div className="max-w-2xl mx-auto text-sm text-ink/75 leading-relaxed font-sans-ui space-y-4 mb-10 text-left rtl:text-right p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-ink font-semibold mb-1">
                {t('prep.policyTitle')}
              </strong>
              <span>
                {t('prep.policyText')}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-black/10 dark:border-white/10">
            <strong className="block text-ink font-semibold mb-1">Geplante Ausarbeitung:</strong>
            <span>{manuscript.summary}</span>
          </div>
        </div>

        {/* Future Manuscript Integration Architecture info */}
        <div className="max-w-2xl mx-auto text-left rtl:text-right p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
            <FileCode className="w-4 h-4" />
            <span>Technische Import-Schnittstelle</span>
          </div>
          <p className="text-xs text-ink/75 leading-relaxed font-sans-ui">
            Die Software-Architektur dieser Bibliothek ist modular angelegt: Sobald das Manuskript für {manuscript.name} als
            Markdown, DOCX oder PDF vorliegt, wird die entsprechende Datendatei befüllt.
            Die Leseansicht, das Inhaltsverzeichnis und die Synopse aktivieren sich ohne Veränderung des Frontend-Codes.
          </p>
        </div>

        {/* Action Button: Go read Gemini */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onSwitchToGemini}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-200" />
            <span>{t('prep.btnSwitchGemini')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
