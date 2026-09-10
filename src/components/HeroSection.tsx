import { useEffect, useState } from 'react';
import { QuoteForm } from './QuoteForm';
import { HomeownerDashboard } from './HomeownerDashboard';

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    if (motionQuery.matches) {
      setLoaded(true);
    } else {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, []);

  const loadStyle = prefersReducedMotion
    ? {}
    : {
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(12px)',
      };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:min-h-[740px] flex flex-col justify-center pt-[116px] lg:pt-[120px] pb-10 select-none text-left"
    >
      <div className="w-full max-w-[1160px] mx-auto px-5 sm:px-8 pt-4 sm:pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left Column: Headline, Subheadline sitting directly on video, and Quote Form in glass panel */}
          <div
            className="lg:col-span-6 flex flex-col justify-end"
            style={loadStyle}
          >
            {/* Headline per Section 3 & 7: Source Serif 4, 56px desktop, Paper colored */}
            <h1 className="font-serif font-semibold text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-tight text-[#F6F5F1] mb-3">
              Cut your power bill before winter does.
            </h1>

            {/* Subheadline per Section 7: IBM Plex Sans, 18px, Paper colored at reduced opacity */}
            <p className="font-sans text-[16px] sm:text-[18px] text-[#F6F5F1]/80 leading-relaxed max-w-[56ch] mb-6">
              Solara installs residential solar systems directly, with one dedicated crew handling site assessment through final inspection. No subcontractors and complete end to end ownership of your installation.
            </p>

            {/* Quote Request Form in glass panel per Section 5 */}
            <QuoteForm idPrefix="hero" />
          </div>

          {/* Right Column: Homeowner Monitoring Dashboard moved down to align with the quote form (Section 8) */}
          <div
            className="lg:col-span-6 flex flex-col justify-end lg:self-end w-full"
            style={loadStyle}
          >
            <HomeownerDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
