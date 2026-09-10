import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-4 left-0 right-0 z-50 max-w-[1160px] w-[92%] mx-auto"
    >
      {/* Glass Pill Container per Section 5 & 6 */}
      <div className="h-[76px] px-5 sm:px-7 rounded-full bg-white/[0.08] backdrop-blur-[24px] border border-white/20 flex items-center justify-between transition-colors">
        {/* Left: Wordmark "Solara" with 8px solid Gold circle to its left */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll('hero');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
          id="brand-logo"
        >
          <span
            id="brand-mark-circle"
            className="w-2 h-2 rounded-full bg-[#E8A94A] shrink-0"
            aria-hidden="true"
          />
          <span className="font-serif font-medium text-[22px] sm:text-[24px] tracking-tight text-[#F6F5F1]">
            Solara
          </span>
        </a>

        {/* Center / Right desktop links in IBM Plex Sans, Paper colored at reduced opacity */}
        <div className="hidden min-[900px]:flex items-center gap-9">
          <nav
            id="desktop-nav-links"
            className="flex items-center gap-8"
            aria-label="Primary"
          >
            <button
              type="button"
              id="nav-link-how-it-works"
              onClick={() => handleSmoothScroll('how-it-works')}
              className="font-sans text-[15px] text-[#F6F5F1]/75 hover:text-[#F6F5F1] transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button
              type="button"
              id="nav-link-savings"
              onClick={() => handleSmoothScroll('savings')}
              className="font-sans text-[15px] text-[#F6F5F1]/75 hover:text-[#F6F5F1] transition-colors cursor-pointer"
            >
              Savings
            </button>
            <button
              type="button"
              id="nav-link-reviews"
              onClick={() => handleSmoothScroll('reviews')}
              className="font-sans text-[15px] text-[#F6F5F1]/75 hover:text-[#F6F5F1] transition-colors cursor-pointer"
            >
              Reviews
            </button>
          </nav>

          {/* Solid Gold button per Section 6 */}
          <button
            type="button"
            id="nav-cta-button"
            onClick={() => handleSmoothScroll('hero')}
            className="bg-[#E8A94A] hover:bg-[#d9993c] text-[#151A21] font-sans font-medium text-[14px] px-5 py-2.5 rounded-[12px] transition-colors duration-150 cursor-pointer"
          >
            Get a free quote
          </button>
        </div>

        {/* Mobile View: CTA button stays visible at all times + Hamburger icon */}
        <div className="flex min-[900px]:hidden items-center gap-3">
          <button
            type="button"
            id="mobile-nav-cta-button"
            onClick={() => handleSmoothScroll('hero')}
            className="bg-[#E8A94A] hover:bg-[#d9993c] text-[#151A21] font-sans font-medium text-[13px] px-4 py-2 rounded-[12px] transition-colors duration-150 cursor-pointer"
          >
            Get a free quote
          </button>

          <button
            type="button"
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F6F5F1] focus:outline-none focus:ring-1 focus:ring-white rounded-[8px] cursor-pointer"
          >
            <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span
                className={`block h-0.5 w-full bg-[#F6F5F1] transition-transform duration-150 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#F6F5F1] transition-opacity duration-150 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#F6F5F1] transition-transform duration-150 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Glass Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-panel"
          className="mt-2 w-full bg-white/[0.12] backdrop-blur-[28px] border border-white/20 rounded-[24px] min-[900px]:hidden flex flex-col p-6 text-left shadow-2xl"
        >
          <div className="flex flex-col gap-5">
            <button
              type="button"
              id="mobile-link-how-it-works"
              onClick={() => handleSmoothScroll('how-it-works')}
              className="text-left font-serif text-[22px] font-medium text-[#F6F5F1] hover:text-[#E8A94A] transition-colors"
            >
              How it works
            </button>
            <button
              type="button"
              id="mobile-link-savings"
              onClick={() => handleSmoothScroll('savings')}
              className="text-left font-serif text-[22px] font-medium text-[#F6F5F1] hover:text-[#E8A94A] transition-colors"
            >
              Savings
            </button>
            <button
              type="button"
              id="mobile-link-reviews"
              onClick={() => handleSmoothScroll('reviews')}
              className="text-left font-serif text-[22px] font-medium text-[#F6F5F1] hover:text-[#E8A94A] transition-colors"
            >
              Reviews
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
