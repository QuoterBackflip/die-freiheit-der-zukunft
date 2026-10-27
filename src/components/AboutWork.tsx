import React, { useState } from 'react';
import { Feather, ShieldAlert, CheckCircle2, Clock, Sparkles, BookOpen, User, Cpu, AlertTriangle, Eye, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface AboutWorkProps {
  onNavigateToChapter: (chapterId: string) => void;
}

export const AboutWork: React.FC<AboutWorkProps> = ({ onNavigateToChapter }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'origin' | 'clearance' | 'methodology'>('origin');

  const sensitivePassages = [
    {
      id: 'sens-kap5-psychose-krise',
      chapter: 'Kapitel 5: Die Menschen-KI',
      title: 'Psychotische Krise, Klinikaufenthalt & Medikamentöse Stabilität',
      quote: '„Der Autor schildert offen, wie er selbst Phasen durchlebt hat, in denen sein Geist auf Hochtouren lief [...] und sich in eine Psychose hineinsteigerte. Damals hätte er sich gegen jede Hilfe und gegen Medikamente gewehrt. Erst ein gerichtlicher Beschluss und die medizinische Behandlung holten ihn zurück.“',
      reason: 'Hochsensible medizinische und psychiatrische Biografie. Dient im philosophischen Text als existentieller Beweis für die Notwendigkeit schützender Vormundschaft bei akuter Selbstgefährdung – unter strenger menschlicher Gerichtskontrolle.',
      recommendation: 'Empfehlung für Waldemar Scheiermann: Zur Veröffentlichung freigeben, da es dem Werk unvergleichliche Authentizität verleiht, oder wahlweise anonymisieren / abstrahieren.'
    },
    {
      id: 'sens-kap6-grundsicherung-alltag',
      chapter: 'Kapitel 6: Das Jahr 2070',
      title: 'Leben in Grundsicherung, sozialer Rückzug & existentielle Leere',
      quote: '„...oder liegt – wie der Autor es mit herrlicher Selbstironie nennt – ‚photosynthetisierend auf dem Bett‘ und schaut stundenlang anderen Menschen im Livestream beim Spielen zu. Und dann kommen jene bitteren Morgenstunden...“',
      reason: 'Offenlegung der persönlichen sozio-ökonomischen Lebenssituation (Bürgergeld/Grundsicherung, Spielsucht-Tendenzen, Isolation). Dient als reales empirisches Laboratorium für eine zukünftige Welt ohne Arbeitszwang.',
      recommendation: 'Empfehlung für Waldemar Scheiermann: Freigabe empfohlen; widerlegt das elitäre Klischee akademischer Zukunftsforscher und begründet das Konzept der ‚Fähigkeitszentren‘.'
    },
    {
      id: 'sens-kap7-selbstzweifel-autor',
      chapter: 'Kapitel 7: Was ein Leben erfüllt',
      title: 'Der „arbeitslose Philosoph“ vor der PlayStation & sokratische Würde',
      quote: '„...sich selbst spöttisch als ‚einfachen Bauern, nicht mal das, als arbeitslosen Philosophen, der den ganzen Tag auf Twitch hängt und ein bisschen PlayStation zockt‘ bezeichnet...“',
      reason: 'Selbstironische Demutsbekundung und Kontrastierung mit akademischem Establishment. Dient der sokratischen Legitimation des freien Bürgers.',
      recommendation: 'Empfehlung für Waldemar Scheiermann: Uneingeschränkte Freigabe; zentraler Identifikationspunkt des Gesamtwerkes.'
    }
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>{t('about.tag')}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {t('about.title')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink/75 font-book leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-black/10 dark:border-white/10 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveTab('origin')}
            className={`py-3 px-4 sm:px-6 font-medium text-sm transition-all border-b-2 cursor-pointer ${
              activeTab === 'origin'
                ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-semibold'
                : 'border-transparent text-ink/60 hover:text-ink'
            }`}
          >
            {t('about.tabOrigin')}
          </button>
          <button
            onClick={() => setActiveTab('clearance')}
            className={`py-3 px-4 sm:px-6 font-medium text-sm transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'clearance'
                ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-semibold'
                : 'border-transparent text-ink/60 hover:text-ink'
            }`}
          >
            <span>{t('about.tabClearance')}</span>
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          </button>
          <button
            onClick={() => setActiveTab('methodology')}
            className={`py-3 px-4 sm:px-6 font-medium text-sm transition-all border-b-2 cursor-pointer ${
              activeTab === 'methodology'
                ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-semibold'
                : 'border-transparent text-ink/60 hover:text-ink'
            }`}
          >
            {t('about.tabMethodology')}
          </button>
        </div>

        {/* Tab 1: Entstehung & Urheberschaft */}
        {activeTab === 'origin' && (
          <div className="space-y-8 font-sans-ui text-ink/85 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10">
              <h2 className="font-display text-2xl font-bold text-ink mb-4 flex items-center gap-3">
                <User className="w-6 h-6 text-amber-500" />
                <span>Der Urheber: Waldemar Scheiermann</span>
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Die philosophischen Kerngedanken, die moralischen Prämissen, die Analogien und die verfassungsrechtliche
                Vision dieses Buches stammen ausnahmslos von <strong>Waldemar Scheiermann</strong>. Sie wurden nicht von einem
                Algorithmus erdacht, sondern sind das Resultat persönlicher Lebenserfahrung, ethischer Reflexion und
                unerschütterlicher Ehrlichkeit.
              </p>
              <p className="text-base leading-relaxed">
                Das Werk entstand in der Nacht des <strong>25. Oktober 2026</strong>. Anlass war kein akademisches Stipendium,
                sondern ein Moment tief empfundener Frustration: Nach wochenlanger, hingebungsvoller Programmierung einer eigenen
                Softwareanwendung zählte der Store gerade einmal 15 Installationen. Ein schöpferischer Mensch prallte gegen die
                unsichtbare Wand algorithmischer Aufmerksamkeitsökonomie.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/[0.04] dark:bg-amber-500/[0.08] border border-amber-500/30">
              <h2 className="font-display text-2xl font-bold text-ink mb-4 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-amber-500" />
                <span>Der 90-minütige Funke: Von der Frustration zur Metaphysik</span>
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Was mit dem Satz <em>„Hallo, seelenlose Maschine. Stagnation.“</em> begann, entwickelte sich innerhalb von
                neunzig Minuten zu einem hochkonzentrierten philosophischen Diskurs. Als die KI dem Menschen vorrechnen wollte,
                dass er doch ständig in Bewegung sei, stellte Waldemar Scheiermann die entscheidende Differenz klar:
              </p>
              <blockquote className="p-4 rounded-xl bg-black/5 dark:bg-black/20 border-l-4 border-amber-500 font-book italic text-base mb-4">
                „Du kennst mein Leben auch nicht, weil du ja nur die Interaktionen erfasst, die ich mit dir tätige.
                Das sind immer fortlaufende Bewegungen, aber wenn ich dich nicht benutze, ist wirklich Stagnation und Stillstand.
                Ich bin ja ein Mensch, weißt du. Du bist eine KI.“
              </blockquote>
              <p className="text-base leading-relaxed">
                Aus dieser Reibung zwischen biologischer Vergänglichkeit und maschineller Endlosschleife erwuchs die
                gesamte Architektur des Werkes: Das Eutyphron-Dilemma über göttliche Selbstbindung, die Warnung vor der KI als
                falschem „Zwischenwirt“, die Kritik am bürokratischen Schubladenstaat und das Modell zweier gleichberechtigter KIs
                am Verhandlungstisch.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Veröffentlichungsfreigabe (Sensible Passagen) */}
        {activeTab === 'clearance' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-base text-ink mb-1">
                  Redaktionelle Kennzeichnung sensibler biografischer Passagen
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed">
                  Gemäß Projektauftrag wurden persönliche und sensible biografische Abschnitte transparent identifiziert.
                  Waldemar Scheiermann kann diese Passagen vor einer späteren weltweiten Buchpublikation im Detail prüfen,
                  freigeben oder nach eigenem Wunsch modifizieren.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {sensitivePassages.map((p, idx) => (
                <div
                  key={p.id}
                  className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <h4 className="font-display font-bold text-lg text-ink">
                        {p.title}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                      {p.chapter}
                    </span>
                  </div>

                  <blockquote className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border-l-2 border-amber-500 font-book italic text-sm text-ink/85">
                    {p.quote}
                  </blockquote>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans-ui">
                    <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                      <strong className="block text-ink/90 font-semibold mb-1">Ethischer & sachlicher Kontext:</strong>
                      <span className="text-ink/75 leading-relaxed">{p.reason}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
                      <strong className="block text-emerald-800 dark:text-emerald-300 font-semibold mb-1">Redaktionelle Einschätzung:</strong>
                      <span className="text-ink/75 leading-relaxed">{p.recommendation}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => onNavigateToChapter(p.chapter.includes('5') ? 'kapitel-5' : p.chapter.includes('6') ? 'kapitel-6' : 'kapitel-7')}
                      className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Passage im vollständigen Lesetext ansehen</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Methode der drei KIs */}
        {activeTab === 'methodology' && (
          <div className="space-y-6 font-sans-ui text-ink/85 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Das Prinzip der mehrfachen Interpretation
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Künstliche Intelligenzen sind keine Orakel, sondern Spiegel menschlicher Geistestätigkeit. Indem derselbe
                Originaldialog von führenden Architekturen interpretiert wird, entsteht eine polyphone Gesamtschau:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                    1. Google Gemini
                  </span>
                  <div className="font-semibold text-sm mb-1">Gesamtausgabe (Fertig)</div>
                  <p className="text-xs text-ink/75">
                    Klassische essayistische Verdichtung, präzise Gliederung in 7 Kapitel und Ausarbeitung der Leitplanken.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                    2. Astra 6
                  </span>
                  <div className="font-semibold text-sm mb-1">Autorenfassung (Fertig)</div>
                  <p className="text-xs text-ink/75">
                    Literarischer Essay in der Ich-Stimme von Waldemar Scheiermann über die Stunden zwischen den Datenströmen und die Lebens-KI.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                    3. Anthropic Claude
                  </span>
                  <div className="font-semibold text-sm mb-1">In Vorbereitung</div>
                  <p className="text-xs text-ink/75">
                    Verfassungsrechtlich-analytische Vertiefung des Eutyphron-Dilemmas und der Gewaltenteilung (in Vorbereitung).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                    4. xAI Grok
                  </span>
                  <div className="font-semibold text-sm mb-1">Systematische Fassung (Fertig)</div>
                  <p className="text-xs text-ink/75">
                    Philosophisch-systematische Fassung: Kategoriale Analyse von Endlichkeit, göttlicher Selbstbindung und digitaler Gewaltenteilung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
