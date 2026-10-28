import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ManuscriptSelector } from './components/ManuscriptSelector';
import { TopicsOverview } from './components/TopicsOverview';
import { ManifestoPillars } from './components/ManifestoPillars';
import { AboutWork } from './components/AboutWork';
import { ReaderView } from './components/ReaderView';
import { PreparationView } from './components/PreparationView';
import { ComparisonView } from './components/ComparisonView';
import { Footer } from './components/Footer';
import { SupportSection } from './components/SupportSection';
import { getManuscript, manuscripts } from './data/manuscripts';
import { useLanguage } from './i18n/LanguageContext';

export const App: React.FC = () => {
  const { bookLanguage, setBookLanguage, uiLanguage, t } = useLanguage();
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeManuscriptId, setActiveManuscriptId] = useState<string>('gemini');
  const [activeChapterId, setActiveChapterId] = useState<string>('prolog');

  const currentManuscript = getManuscript(activeManuscriptId, bookLanguage) || manuscripts.gemini;

  // Dynamic SEO Page Title & Meta Description update
  useEffect(() => {
    let title = `${t('site.title')} — ${t('site.libraryLabel')} | Waldemar Scheiermann`;
    let desc = t('site.subtitle');

    if (currentView === 'library') {
      const currentChapter = currentManuscript.chapters.find(c => c.code === activeChapterId || c.id === activeChapterId);
      const chapterTitle = currentChapter ? `${currentChapter.title} — ` : '';
      title = `${chapterTitle}${currentManuscript.name} | ${t('site.title')}`;
      desc = currentManuscript.summary || desc;
    } else if (currentView === 'topics') {
      title = `${t('nav.topics')} — ${t('topics.title')} | ${t('site.title')}`;
      desc = t('topics.subtitle') || desc;
    } else if (currentView === 'compare') {
      title = `${t('nav.compare')} — ${t('compare.title')} | ${t('site.title')}`;
      desc = t('compare.subtitle') || desc;
    } else if (currentView === 'about') {
      title = `${t('about.title')} | ${t('site.title')}`;
      desc = t('about.subtitle') || desc;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [currentView, activeManuscriptId, activeChapterId, uiLanguage, currentManuscript, t]);

  // Parse URL hash for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentView('home');
        return;
      }

      const parts = hash.split('/');
      const view = parts[0];

      if (view === 'library') {
        const mId = parts[1] || 'gemini';
        const chId = parts[2];
        setCurrentView('library');
        setActiveManuscriptId(mId);
        if (chId) setActiveChapterId(chId);
      } else if (['home', 'topics', 'about', 'compare'].includes(view)) {
        setCurrentView(view);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: string, manuscriptId?: string, chapterId?: string) => {
    setCurrentView(view);
    if (manuscriptId) setActiveManuscriptId(manuscriptId);
    if (chapterId) setActiveChapterId(chapterId);

    // Update hash
    if (view === 'library') {
      const mId = manuscriptId || activeManuscriptId || 'gemini';
      const cId = chapterId || (mId === activeManuscriptId ? activeChapterId : 'prolog');
      window.location.hash = `library/${mId}/${cId}`;
    } else {
      window.location.hash = view;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface text-ink transition-colors duration-200">
      
      {/* Universal Header */}
      <Header
        currentView={currentView}
        activeManuscriptId={activeManuscriptId}
        onNavigate={(view, mId, chId) => navigateTo(view, mId, chId)}
      />

      {/* Main Body per View */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero
              onStartReading={(mId) => navigateTo('library', mId || 'gemini', 'prolog')}
              onExploreTopics={() => navigateTo('topics')}
              onViewManifesto={() => {
                const el = document.getElementById('manifest');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            
            <ManuscriptSelector
              onSelectManuscript={(mId) => navigateTo('library', mId, 'prolog')}
            />

            <TopicsOverview
              onSelectTopic={(targetChapterId) => navigateTo('library', 'gemini', targetChapterId)}
            />

            <ManifestoPillars
              onGoToEpilog={() => navigateTo('library', 'gemini', 'epilog')}
            />

            <SupportSection />
          </>
        )}

        {currentView === 'library' && (
          <>
            {currentManuscript.status === 'ready' ? (
              <ReaderView
                manuscript={currentManuscript}
                initialChapterId={activeChapterId}
                onSelectManuscript={(mId) => navigateTo('library', mId, 'prolog')}
                bookLanguage={bookLanguage}
                onSelectBookLanguage={(lang) => setBookLanguage(lang)}
              />
            ) : (
              <PreparationView
                manuscript={currentManuscript}
                onSwitchToGemini={() => navigateTo('library', 'gemini', 'prolog')}
                onBackToHome={() => navigateTo('home')}
              />
            )}
          </>
        )}

        {currentView === 'topics' && (
          <TopicsOverview
            onSelectTopic={(targetChapterId) => navigateTo('library', 'gemini', targetChapterId)}
          />
        )}

        {currentView === 'about' && (
          <AboutWork
            onNavigateToChapter={(chapterId) => navigateTo('library', 'gemini', chapterId)}
          />
        )}

        {currentView === 'compare' && (
          <ComparisonView
            onNavigateToChapter={(chapterId, manuscriptId) => navigateTo('library', manuscriptId || 'gemini', chapterId)}
          />
        )}
      </main>

      {/* Universal Non-commercial Footer */}
      <Footer onNavigate={(view, mId) => navigateTo(view, mId, 'prolog')} />

    </div>
  );
};
export default App;
