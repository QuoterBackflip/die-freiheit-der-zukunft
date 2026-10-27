import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ManifestoPillarsProps {
  onGoToEpilog: () => void;
}

export const ManifestoPillars: React.FC<ManifestoPillarsProps> = ({ onGoToEpilog }) => {
  const { t } = useLanguage();

  const pillars = [
    {
      num: 1,
      title: 'Bewusstsein der Endlichkeit',
      text: 'Der Tod ist keine Einladung zur Lähmung, sondern der Maßstab, der unserer begrenzten Zeit im Hier und Jetzt ihren wahren Wert verleiht.'
    },
    {
      num: 2,
      title: 'Verlässlichkeit der Moral',
      text: 'Das Gute ist nicht gut, weil ein Mächtiger es willkürlich befiehlt, sondern weil es dem Menschen und seinem Nächsten dient. Wahre Autorität beweist sich in freiwilliger Selbstbindung an die eigenen Gesetze.'
    },
    {
      num: 3,
      title: 'Kein digitaler Götze',
      text: 'Künstliche Intelligenz darf niemals als unfehlbarer „Zwischenwirt“ an die Stelle Gottes oder des menschlichen Gewissens treten. Höhere Rechenleistung verleiht kein höheres Recht, über Menschen zu herrschen.'
    },
    {
      num: 4,
      title: 'Freiheit mit Ausnahmepuffern',
      text: 'Wo Freiheit nur als Deckmantel für rücksichtslose Zerstörung missbraucht wird, braucht sie Grenzen. Doch jedes Regelsystem muss menschliche Ausnahmen kennen, in denen Barmherzigkeit vor bloßer Berechnung geht.'
    },
    {
      num: 5,
      title: 'Individuelle Gerechtigkeit',
      text: 'Gleiche Würde und gleiche Grundrechte sind das unantastbare Fundament für alle. Innerhalb dieses Rahmens aber muss der Staat den Menschen in seiner konkreten Lage fördern, statt alle über denselben Kamm zu scheren.'
    },
    {
      num: 6,
      title: 'Digitale Gewaltenteilung (Menschen-KI)',
      text: 'Einer auf Effizienz getrimmten Wirtschafts-KI muss immer eine unabhängige Menschen-KI gegenüberstehen, die als loyaler Anwalt die Bedürfnisse und Rechte des Einzelnen verteidigt.'
    },
    {
      num: 7,
      title: 'Freiwillige Symbiose & Tatendrang',
      text: 'In einer automatisierten Welt ohne Arbeitszwang braucht der Mensch offene Räume für kreatives Schaffen – und die volle Entscheidungsfreiheit, wann er die Stille sucht und wann er seine Synapsen mit anderen Menschen verbindet.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-black/10 dark:border-white/10" id="manifest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t('manifesto.tag')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {t('manifesto.title')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink/75 font-book leading-relaxed">
            {t('manifesto.subtitle')}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.slice(0, 6).map((p) => (
            <div
              key={p.num}
              className="relative p-6 sm:p-7 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-display font-bold text-sm text-amber-600 dark:text-amber-400">
                    0{p.num}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest opacity-50">
                    Leitplanke
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-ink/80 font-sans-ui leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          ))}

          {/* 7th Pillar featured full width */}
          <div className="md:col-span-2 lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/[0.08] via-amber-500/[0.04] to-transparent border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 shrink-0 rounded-xl bg-amber-500 text-white flex items-center justify-center font-display font-bold text-base shadow-md">
                07
              </span>
              <div>
                <div className="text-xs uppercase font-mono tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-1">
                  Abschlussprinzip & Höchster Wert
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-2">
                  {pillars[6].title}
                </h3>
                <p className="text-sm sm:text-base text-ink/85 font-sans-ui leading-relaxed max-w-3xl">
                  {pillars[6].text}
                </p>
              </div>
            </div>

            <button
              onClick={onGoToEpilog}
              className="shrink-0 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>{t('manifesto.readInEpilogue')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
