import React, { useState, useEffect, useRef } from 'react';
import { Chapter, ChapterSection, Manuscript, CalloutBlock } from '../data/types';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  List,
  AlignLeft,
  Download,
  Share2,
  Check,
  ShieldAlert,
  X,
  Printer,
  Sparkles,
  Quote,
  Scale,
  Award,
  Globe
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ReaderViewProps {
  manuscript: Manuscript;
  initialChapterId?: string;
  onNavigateToTopic?: (topicId: string) => void;
  onSelectManuscript: (manuscriptId: string) => void;
  bookLanguage?: 'de' | 'en' | 'es' | 'zh-CN' | 'ar';
  onSelectBookLanguage?: (lang: 'de' | 'en' | 'es' | 'zh-CN' | 'ar') => void;
}

type FontSizeOption = 'sm' | 'base' | 'lg' | 'xl';
type ContentWidthOption = 'narrow' | 'normal' | 'wide';

export const ReaderView: React.FC<ReaderViewProps> = ({
  manuscript,
  initialChapterId,
  onSelectManuscript,
  bookLanguage: propBookLang,
  onSelectBookLanguage
}) => {
  const { t, uiLanguage, bookLanguage: ctxBookLang, setBookLanguage: ctxSetBookLang } = useLanguage();
  const activeBookLang = propBookLang || ctxBookLang;
  const setBookLang = onSelectBookLanguage || ctxSetBookLang;

  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [tocOpen, setTocOpen] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<FontSizeOption>('base');
  const [contentWidth, setContentWidth] = useState<ContentWidthOption>('normal');
  const [highlightSensitive, setHighlightSensitive] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const articleRef = useRef<HTMLElement>(null);

  // Synchronize initial chapter
  useEffect(() => {
    if (initialChapterId && manuscript.chapters.length > 0) {
      const idx = manuscript.chapters.findIndex(c => c.id === initialChapterId || c.code === initialChapterId);
      if (idx !== -1) {
        setCurrentChapterIndex(idx);
      }
    }
  }, [initialChapterId, manuscript.id]);

  // Keep index within bounds if chapters change
  useEffect(() => {
    if (currentChapterIndex >= manuscript.chapters.length && manuscript.chapters.length > 0) {
      setCurrentChapterIndex(manuscript.chapters.length - 1);
    }
  }, [manuscript.chapters.length]);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentChapterIndex]);

  // Scroll to top on chapter change
  const changeChapter = (index: number) => {
    setCurrentChapterIndex(index);
    setTocOpen(false);
    const targetCh = manuscript.chapters[index];
    if (targetCh) {
      window.location.hash = `library/${manuscript.id}/${targetCh.code || targetCh.id}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentChapter: Chapter = manuscript.chapters[currentChapterIndex] || manuscript.chapters[0];

  // Font size classes
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-base sm:text-lg leading-relaxed';
      case 'base':
        return 'text-lg sm:text-xl leading-relaxed sm:leading-loose';
      case 'lg':
        return 'text-xl sm:text-2xl leading-relaxed sm:leading-loose';
      case 'xl':
        return 'text-2xl sm:text-3xl leading-relaxed sm:leading-loose';
      default:
        return 'text-lg sm:text-xl leading-relaxed';
    }
  };

  // Max width classes
  const getContentWidthClass = () => {
    switch (contentWidth) {
      case 'narrow':
        return 'max-w-xl';
      case 'normal':
        return 'max-w-3xl';
      case 'wide':
        return 'max-w-4xl';
      default:
        return 'max-w-3xl';
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrintOrPdf = () => {
    if (manuscript.hasPdf && manuscript.pdfFilename) {
      const link = document.createElement('a');
      link.href = `/${manuscript.pdfFilename}`;
      link.download = manuscript.pdfDownloadName || manuscript.pdfFilename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.print();
    }
  };

  // Render Callout Blocks
  const renderCallout = (callout: CalloutBlock) => {
    switch (callout.type) {
      case 'image-metaphor':
        return (
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-amber-500/[0.04] dark:bg-amber-500/[0.08] border-l-4 rtl:border-l-0 rtl:border-r-4 border-amber-500 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{callout.title}</span>
            </div>
            {callout.subtitle && (
              <h4 className="font-display font-bold text-lg sm:text-xl text-ink mb-2">
                {callout.subtitle}
              </h4>
            )}
            <p className="font-book text-base sm:text-lg text-ink/90 leading-relaxed">
              {callout.content as string}
            </p>
          </div>
        );

      case 'dialog-quote':
      case 'moral-statement':
      case 'warning':
      case 'future-vision':
      case 'resonance-law':
        return (
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 relative">
            <Quote className="w-8 h-8 text-amber-500/30 absolute top-4 right-4 rtl:right-auto rtl:left-4" />
            <div className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold mb-2">
              {callout.title}
            </div>
            <blockquote className="font-book italic text-lg sm:text-xl text-ink leading-relaxed mb-3">
              {callout.quote}
            </blockquote>
            {callout.attribution && (
              <div className="text-xs font-sans-ui uppercase tracking-wider text-ink/60 font-medium">
                — {callout.attribution}
              </div>
            )}
          </div>
        );

      case 'core-thesis':
        return (
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r rtl:bg-gradient-to-l from-amber-500/15 via-amber-500/10 to-transparent border border-amber-500/30 shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-2">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{callout.title}</span>
            </div>
            <p className="font-sans-ui font-medium text-base sm:text-lg text-ink leading-relaxed">
              {callout.content as string}
            </p>
          </div>
        );

      case 'analogy':
        return (
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border-l-4 rtl:border-l-0 rtl:border-r-4 border-slate-500 dark:border-slate-400">
            <div className="text-xs font-mono uppercase tracking-widest text-ink/60 font-semibold mb-2">
              {callout.title}
            </div>
            <p className="font-book text-base sm:text-lg text-ink/90 leading-relaxed">
              {callout.content as string}
            </p>
          </div>
        );

      case 'comparison-table':
        return (
          <div className="my-8 overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10 shadow-sm">
            <div className="p-4 bg-amber-500/10 border-b border-black/10 dark:border-white/10 font-display font-bold text-sm text-ink">
              {callout.title}
            </div>
            {callout.tableData && (
              <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm font-sans-ui">
                <thead>
                  <tr className="bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10">
                    {callout.tableData.headers.map((h, i) => (
                      <th key={i} className="p-3 sm:p-4 font-semibold text-ink">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5">
                  {callout.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02]">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`p-3 sm:p-4 align-top leading-relaxed ${
                            cIdx === 0 ? 'font-semibold text-ink' : 'text-ink/80'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      case 'manifesto':
        return (
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-amber-500/[0.05] border border-amber-500/30">
            <div className="text-center max-w-xl mx-auto mb-6">
              <div className="text-xs uppercase font-mono tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-1">
                {t('reader.manifesto')}
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                {callout.title}
              </h3>
              {callout.subtitle && (
                <p className="text-xs font-serif italic text-ink/70 mt-1">{callout.subtitle}</p>
              )}
            </div>
            <div className="space-y-4">
              {Array.isArray(callout.content) &&
                callout.content.map((point, pIdx) => {
                  const [numTitle, ...rest] = point.split(': ');
                  return (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-display font-bold text-xs shrink-0 mt-0.5">
                        {pIdx + 1}
                      </span>
                      <div className="text-xs sm:text-sm font-sans-ui">
                        <strong className="text-ink font-semibold">{numTitle}: </strong>
                        <span className="text-ink/85">{rest.join(': ')}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!currentChapter) {
    return <div className="p-8 text-center text-ink/70">Keine Kapitel geladen.</div>;
  }

  return (
    <div className="min-h-screen pb-24 relative">
      
      {/* Top Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/10 dark:bg-white/10 z-50 pointer-events-none">
        <div
          className="h-full bg-amber-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Reading Controls Toolbar */}
      <div className="sticky top-16 sm:top-20 z-40 backdrop-blur-md bg-opacity-90 border-b border-black/10 dark:border-white/10 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Chapter Selector Pill */}
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={t('reader.toc')}
          >
            <List className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="font-display font-semibold hidden sm:inline">{t('reader.toc')}:</span>
            <span className="truncate max-w-[150px] sm:max-w-[280px]">
              {currentChapter.title}
            </span>
            <span className="text-xs opacity-50 font-mono shrink-0">
              ({currentChapterIndex + 1}/{manuscript.chapters.length})
            </span>
          </button>

          {/* Reading Actions & Adjustments */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Book Edition Language Switcher [DE | EN | ES | 中文 | العربية] */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-lg p-0.5 border border-black/5 dark:border-white/5">
              <button
                onClick={() => setBookLang('de')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeBookLang === 'de'
                    ? 'bg-amber-600 text-white shadow-sm font-bold'
                    : 'text-ink/60 hover:text-ink'
                }`}
                title="Deutsche Buchfassung lesen"
              >
                DE
              </button>
              <button
                onClick={() => setBookLang('en')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeBookLang === 'en'
                    ? 'bg-amber-600 text-white shadow-sm font-bold'
                    : 'text-ink/60 hover:text-ink'
                }`}
                title="Read English Edition"
              >
                EN
              </button>
              <button
                onClick={() => setBookLang('es')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeBookLang === 'es'
                    ? 'bg-amber-600 text-white shadow-sm font-bold'
                    : 'text-ink/60 hover:text-ink'
                }`}
                title="Leer edición en español"
              >
                ES
              </button>
              <button
                onClick={() => setBookLang('zh-CN')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeBookLang === 'zh-CN'
                    ? 'bg-amber-600 text-white shadow-sm font-bold'
                    : 'text-ink/60 hover:text-ink'
                }`}
                title="阅读中文版"
              >
                中文
              </button>
              <button
                onClick={() => setBookLang('ar')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeBookLang === 'ar'
                    ? 'bg-amber-600 text-white shadow-sm font-bold'
                    : 'text-ink/60 hover:text-ink'
                }`}
                title="قراءة النسخة العربية"
              >
                العربية
              </button>
            </div>

            {/* Font Size Toggle Button */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-lg p-0.5 border border-black/5 dark:border-white/5">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 text-xs font-serif rounded ${
                  fontSize === 'sm' ? 'bg-amber-500 text-white font-bold' : 'opacity-60 hover:opacity-100'
                }`}
                title="Kleinere Schrift"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 text-sm font-serif rounded ${
                  fontSize === 'base' ? 'bg-amber-500 text-white font-bold' : 'opacity-60 hover:opacity-100'
                }`}
                title="Standard-Schriftgröße"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 text-base font-serif rounded ${
                  fontSize === 'lg' ? 'bg-amber-500 text-white font-bold' : 'opacity-60 hover:opacity-100'
                }`}
                title="Größere Schrift"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`hidden sm:inline px-2 py-1 text-lg font-serif rounded ${
                  fontSize === 'xl' ? 'bg-amber-500 text-white font-bold' : 'opacity-60 hover:opacity-100'
                }`}
                title="Sehr große Schrift"
              >
                A++
              </button>
            </div>

            {/* Column Width Toggle */}
            <button
              onClick={() => {
                if (contentWidth === 'narrow') setContentWidth('normal');
                else if (contentWidth === 'normal') setContentWidth('wide');
                else setContentWidth('narrow');
              }}
              className="hidden md:flex items-center gap-1.5 p-2 rounded-lg bg-black/5 dark:bg-white/5 text-xs font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title={t('reader.width')}
            >
              <AlignLeft className="w-4 h-4 text-amber-500" />
              <span className="capitalize">{contentWidth}</span>
            </button>

            {/* Sensitive Passages Toggle */}
            <button
              onClick={() => setHighlightSensitive(!highlightSensitive)}
              className={`p-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                highlightSensitive
                  ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                  : 'bg-black/5 dark:bg-white/5 opacity-60 hover:opacity-100'
              }`}
              title={t('reader.clearanceNotes')}
            >
              <ShieldAlert className="w-4 h-4" />
              <span className="hidden lg:inline">{t('reader.clearanceNotes')}</span>
            </button>

            {/* Print / PDF Download */}
            <button
              onClick={handlePrintOrPdf}
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title={t('reader.print')}
              aria-label={t('reader.print')}
            >
              <Printer className="w-4 h-4 text-amber-500" />
            </button>

            {/* Share / Copy URL */}
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title={t('reader.copyLink')}
              aria-label={t('reader.copyLink')}
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Table of Contents Drawer */}
      {tocOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-start rtl:justify-end">
          <div className="w-full max-w-md bg-surface border-r rtl:border-r-0 rtl:border-l border-black/10 dark:border-white/10 h-full overflow-y-auto p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-500" />
                <h3 className="font-display font-bold text-lg text-ink">{t('reader.toc')}</h3>
              </div>
              <button
                onClick={() => setTocOpen(false)}
                className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                aria-label={t('reader.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Edition & Book Language Switcher in TOC */}
            <div className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 text-xs space-y-3">
              <div>
                <div className="text-[10px] uppercase font-mono tracking-widest opacity-60 mb-1">
                  {t('reader.currentVersion')}
                </div>
                <div className="font-semibold text-ink">{manuscript.name}</div>
              </div>

              {/* Manuscript selection */}
              <div className="flex gap-2">
                <button
                  onClick={() => { onSelectManuscript('gemini'); setTocOpen(false); }}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    manuscript.id === 'gemini'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                  }`}
                >
                  Gemini
                </button>
                <button
                  onClick={() => { onSelectManuscript('astra6'); setTocOpen(false); }}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    manuscript.id === 'astra6'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                  }`}
                >
                  Astra 6
                </button>
                <button
                  onClick={() => { onSelectManuscript('claude'); setTocOpen(false); }}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    manuscript.id === 'claude'
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                  }`}
                >
                  Claude
                </button>
                <button
                  onClick={() => { onSelectManuscript('grok'); setTocOpen(false); }}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    manuscript.id === 'grok'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                  }`}
                >
                  Grok
                </button>
              </div>

              {/* Book Language Switch */}
              <div className="pt-2 border-t border-black/5 dark:border-white/5">
                <div className="text-[10px] uppercase font-mono tracking-widest opacity-60 mb-1.5">
                  {t('reader.bookLanguage')}
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setBookLang('de')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      activeBookLang === 'de'
                        ? 'bg-amber-600 text-white font-semibold'
                        : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                    }`}
                  >
                    Deutsch
                  </button>
                  <button
                    onClick={() => setBookLang('en')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      activeBookLang === 'en'
                        ? 'bg-amber-600 text-white font-semibold'
                        : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setBookLang('es')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      activeBookLang === 'es'
                        ? 'bg-amber-600 text-white font-semibold'
                        : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => setBookLang('zh-CN')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      activeBookLang === 'zh-CN'
                        ? 'bg-amber-600 text-white font-semibold'
                        : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                    }`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => setBookLang('ar')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      activeBookLang === 'ar'
                        ? 'bg-amber-600 text-white font-semibold'
                        : 'bg-black/5 dark:bg-white/5 text-ink/70 hover:text-ink'
                    }`}
                  >
                    العربية
                  </button>
                </div>
              </div>
            </div>

            {/* Chapter List */}
            <div className="space-y-1">
              {manuscript.chapters.map((ch, idx) => {
                const badgeLabel = ch.code === 'prolog'
                  ? 'P'
                  : ch.code === 'epilog'
                  ? 'E'
                  : ch.code === 'schluss'
                  ? 'S'
                  : ch.code === 'zur-entstehung'
                  ? 'A'
                  : `0${ch.number}`;

                return (
                  <button
                    key={ch.id}
                    onClick={() => changeChapter(idx)}
                    className={`w-full text-left rtl:text-right p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer ${
                      idx === currentChapterIndex
                        ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold'
                        : 'hover:bg-black/5 dark:hover:bg-white/5 text-ink/80'
                    }`}
                  >
                    <span className="font-mono text-xs opacity-60 pt-0.5 shrink-0">
                      {badgeLabel}
                    </span>
                    <div>
                      <div className="text-sm font-display leading-tight">{ch.title}</div>
                      <div className="text-xs font-serif opacity-60 mt-0.5">{ch.pageRange} · ~{ch.estimatedReadTimeMinutes} {t('reader.minutes')}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* PDF Download in TOC */}
            <div className="pt-4 border-t border-black/10 dark:border-white/10">
              <button
                onClick={handlePrintOrPdf}
                className="w-full py-2.5 px-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{manuscript.name} ({activeBookLang.toUpperCase()}) {t('reader.print')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Book Reader Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <article
          ref={articleRef}
          className={`mx-auto ${getContentWidthClass()} font-book ${getFontSizeClass()} text-ink/90`}
        >
          {/* Switch to Arabic edition prompt if Arabic UI reader is viewing another language */}
          {uiLanguage === 'ar' && activeBookLang !== 'ar' && (
            <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-xs sm:text-sm text-ink/85 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-500 shrink-0" />
                <span>النسخة العربية الكاملة للكتاب متاحة الآن بالكامل للقراءة والتحميل.</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => setBookLang('ar')}
                  className="px-3 py-1 rounded text-xs font-semibold bg-amber-600 text-white transition-colors cursor-pointer hover:bg-amber-700 shadow-sm"
                >
                  التبديل إلى النسخة العربية
                </button>
              </div>
            </div>
          )}

          {/* Chapter Header Meta */}
          <header className="mb-10 sm:mb-14 pb-8 border-b border-black/10 dark:border-white/10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-3">
              <span>Waldemar Scheiermann</span>
              <span>·</span>
              <span>{t('site.title')}</span>
              <span>·</span>
              <span className="font-semibold text-ink/75">{manuscript.name}</span>
              <span>·</span>
              <span>{currentChapter.pageRange}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4 leading-tight">
              {currentChapter.title}
            </h1>

            {currentChapter.subtitle && (
              <p className="font-serif italic text-base sm:text-xl text-ink/75 max-w-2xl mx-auto leading-relaxed">
                {currentChapter.subtitle}
              </p>
            )}

            {/* Preface banner for chapter 0 (Prolog / Prologue) */}
            {currentChapter.number === 0 && manuscript.preface && (
              <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-amber-500/[0.04] dark:bg-amber-500/[0.08] border border-amber-500/25 text-left rtl:text-right text-sm sm:text-base font-sans-ui leading-relaxed">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-2">
                  {manuscript.preface.title}
                </div>
                <p className="text-ink/85">{manuscript.preface.text}</p>
              </div>
            )}
          </header>

          {/* Chapter Sections */}
          <div className="space-y-6 sm:space-y-8 font-book">
            {currentChapter.sections.map((sec: ChapterSection, sIdx: number) => {
              if (sec.type === 'paragraph') {
                return (
                  <p key={sIdx} className="leading-relaxed sm:leading-loose">
                    {sec.text}
                  </p>
                );
              }

              if (sec.type === 'quote') {
                return (
                  <blockquote
                    key={sIdx}
                    className="my-6 pl-4 sm:pl-6 rtl:pl-0 rtl:pr-4 rtl:sm:pr-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-amber-500 font-book italic text-lg sm:text-xl text-ink leading-relaxed"
                  >
                    {sec.text}
                  </blockquote>
                );
              }

              if (sec.type === 'subheading') {
                return (
                  <h2
                    key={sIdx}
                    className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-ink pt-6 pb-2 border-b border-black/5 dark:border-white/5"
                  >
                    {sec.text}
                  </h2>
                );
              }

              if (sec.type === 'callout' && sec.callout) {
                return <div key={sIdx}>{renderCallout(sec.callout)}</div>;
              }

              if (sec.type === 'sensitive' && sec.sensitive) {
                return (
                  <div
                    key={sIdx}
                    className={`my-8 p-6 sm:p-8 rounded-2xl transition-all ${
                      highlightSensitive
                        ? 'bg-amber-500/[0.06] dark:bg-amber-500/[0.1] border-2 border-amber-500/40 shadow-md ring-1 ring-amber-500/20'
                        : 'bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10'
                    }`}
                  >
                    {highlightSensitive && (
                      <div className="mb-4 pb-3 border-b border-amber-500/30 flex items-start gap-2.5">
                        <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs uppercase font-mono font-bold tracking-wider text-amber-700 dark:text-amber-400">
                            {sec.sensitive.topic}
                          </div>
                          <div className="text-xs text-ink/75 font-sans-ui mt-0.5">
                            {sec.sensitive.contextNote}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="space-y-4">
                      {sec.sensitive.text.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx} className="leading-relaxed sm:leading-loose">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }

              if (sec.type === 'bullet-list' && sec.items) {
                return (
                  <ul key={sIdx} className="space-y-3 my-6 pl-4 rtl:pl-0 rtl:pr-4 list-disc list-outside marker:text-amber-500">
                    {sec.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-ink/90 leading-relaxed font-sans-ui text-base sm:text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>

          {/* Chapter Footer Navigation */}
          <footer className="mt-16 sm:mt-24 pt-8 border-t border-black/10 dark:border-white/10 no-print">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans-ui">
              
              {/* Previous Chapter */}
              {currentChapterIndex > 0 ? (
                <button
                  onClick={() => changeChapter(currentChapterIndex - 1)}
                  className="w-full sm:w-auto p-4 rounded-xl border border-black/10 dark:border-white/10 hover:border-amber-500/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-left rtl:text-right flex items-center gap-3 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 text-amber-500 shrink-0 rtl:rotate-180" />
                  <div>
                    <div className="text-[10px] uppercase font-mono opacity-50">{t('reader.prevChapter')}</div>
                    <div className="text-sm font-semibold text-ink line-clamp-1">
                      {manuscript.chapters[currentChapterIndex - 1].title}
                    </div>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {/* Next Chapter */}
              {currentChapterIndex < manuscript.chapters.length - 1 ? (
                <button
                  onClick={() => changeChapter(currentChapterIndex + 1)}
                  className="w-full sm:w-auto p-4 rounded-xl border border-black/10 dark:border-white/10 hover:border-amber-500/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-right rtl:text-left flex items-center justify-end rtl:justify-start gap-3 cursor-pointer"
                >
                  <div>
                    <div className="text-[10px] uppercase font-mono opacity-50">{t('reader.nextChapter')}</div>
                    <div className="text-sm font-semibold text-ink line-clamp-1">
                      {manuscript.chapters[currentChapterIndex + 1].title}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 rtl:rotate-180" />
                </button>
              ) : (
                <div className="text-center sm:text-right rtl:sm:text-left text-xs text-ink/60 font-serif italic">
                  — {t('badge.complete')} —
                </div>
              )}
            </div>
          </footer>

        </article>
      </main>

    </div>
  );
};
