import React, { useState, useEffect } from 'react';
import { Heart, ExternalLink, ShieldCheck, Sparkles, QrCode } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

import { STRIPE_SUPPORT_URL } from '../data/support.ts';

export { STRIPE_SUPPORT_URL };

export const SupportSection: React.FC = () => {
  const { t } = useLanguage();
  const [visitorCount, setVisitorCount] = useState<number>(1);

  // Discrete privacy-preserving visitor counter using localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('fdz_visitor_count');
      const current = stored ? parseInt(stored, 10) : 0;
      const sessionMark = sessionStorage.getItem('fdz_session_counted');
      if (!sessionMark) {
        const next = current + 1;
        localStorage.setItem('fdz_visitor_count', next.toString());
        sessionStorage.setItem('fdz_session_counted', 'true');
        setVisitorCount(next);
      } else {
        setVisitorCount(current || 1);
      }
    } catch {
      setVisitorCount(1);
    }
  }, []);

  return (
    <section id="support" className="py-16 sm:py-20 border-b border-black/10 dark:border-white/10 relative overflow-hidden bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Support Card */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 lg:p-12 bg-surface border border-amber-500/25 shadow-lg shadow-amber-500/5 relative">
          
          {/* Subtle Ambient Decorative Sparkle */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 rtl:right-auto rtl:left-4 rtl:sm:left-6 opacity-20 pointer-events-none">
            <Sparkles className="w-8 h-8 text-amber-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 Cols) */}
            <div className="md:col-span-8 space-y-4 sm:space-y-5 text-left rtl:text-right">
              
              {/* Badge & Free Promise */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                  <span>{t('support.tag')}</span>
                </span>
                
                <span className="inline-flex items-center gap-1 text-[11px] font-sans-ui text-emerald-700 dark:text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('support.freePromise')}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                {t('support.title')}
              </h2>

              {/* Description */}
              <p className="font-book text-sm sm:text-base text-ink/80 leading-relaxed">
                {t('support.description')}
              </p>

              {/* Support Button & Security Note */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={STRIPE_SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans-ui font-semibold text-sm sm:text-base bg-amber-600 hover:bg-amber-500 text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white/30" />
                  <span>{t('support.button')}</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                <div className="text-[11px] font-sans-ui text-ink/60 leading-tight">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{t('support.securityNote')}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right QR-Code Card (4 Cols) */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
              
              <div className="mb-3 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">
                <QrCode className="w-4 h-4 text-amber-500" />
                <span>{t('support.qrTitle')}</span>
              </div>

              {/* Verified QR Code linking to exactly https://buy.stripe.com/dRmcN7gjYduocKy42C7bW01 */}
              <a
                href={STRIPE_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={STRIPE_SUPPORT_URL}
                className="group relative block p-3 rounded-2xl bg-white shadow-sm border border-black/10 hover:border-amber-500/50 transition-all hover:scale-102"
              >
                <img
                  src="/stripe-qr-code.svg"
                  alt="QR Code Stripe Support - Die Freiheit der Zukunft"
                  width={160}
                  height={160}
                  className="w-36 h-36 sm:w-40 sm:h-40 object-contain rounded-lg"
                  loading="lazy"
                />
                <span className="sr-only">Stripe Payment Link QR Code</span>
              </a>

              <p className="mt-3 text-[11px] font-sans-ui text-ink/65 leading-tight max-w-[200px]">
                {t('support.qrHint')}
              </p>

              {/* Privacy-Preserving Visitor Indicator */}
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 w-full flex items-center justify-center gap-1.5 text-[10px] font-mono text-ink/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t('support.visitorCounter')}</span>
                {visitorCount > 0 && (
                  <span className="opacity-75">· #{visitorCount}</span>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
