import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative w-full pt-10 sm:pt-16 pb-8 sm:pb-12 text-left"
    >
      <div className="w-full max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Layered Glass Card per Section 12 */}
        {/* Outer Wrapper: subtle glass frame at 6-8% opacity, 32px rounded corners */}
        <div
          id="footer-outer-card"
          className="w-full bg-white/[0.07] backdrop-blur-[24px] border border-white/20 rounded-[32px] p-3 sm:p-5 lg:p-6 mb-6 sm:mb-10 select-none"
        >
          {/* Inner Content Box: nested glass panel at 11% opacity, 24px rounded corners */}
          <div
            id="footer-inner-box"
            className="w-full bg-white/[0.11] backdrop-blur-[24px] border border-white/20 rounded-[24px] p-6 sm:p-8 lg:p-10 mb-4 sm:mb-6"
          >
            {/* 5-Column Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
              {/* Brand Column (spans 2 columns on desktop) */}
              <div className="lg:col-span-2 space-y-4">
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll('hero');
                  }}
                  className="inline-flex items-center gap-2.5 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  id="footer-brand-logo"
                >
                  <span
                    id="footer-brand-mark-circle"
                    className="w-2 h-2 rounded-full bg-[#E8A94A] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-serif font-medium text-[24px] tracking-tight text-[#F6F5F1]">
                    Solara
                  </span>
                </a>

                <p className="font-sans text-[14px] sm:text-[15px] text-[#8A9A8E] leading-relaxed max-w-[340px]">
                  Direct residential solar installation with one dedicated crew handling site assessment through final inspection.
                </p>

                {/* Social Links Row: Scoped icon exception per Hard Rule 4 & Section 12 */}
                <div className="flex items-center gap-2.5 pt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Solara on LinkedIn"
                    id="footer-social-linkedin"
                    className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 flex items-center justify-center text-[#F6F5F1] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Solara on X"
                    id="footer-social-twitter"
                    className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 flex items-center justify-center text-[#F6F5F1] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Solara on Instagram"
                    id="footer-social-instagram"
                    className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 flex items-center justify-center text-[#F6F5F1] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Solar Column */}
              <div className="lg:col-span-1 space-y-3">
                <div className="font-sans text-[13px] sm:text-[14px] font-medium text-[#8A9A8E]">
                  Solar
                </div>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('how-it-works')}
                    id="footer-nav-how-it-works"
                    className="block text-left font-sans text-[14px] text-[#F6F5F1] hover:text-[#E8A94A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    How it works
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('savings')}
                    id="footer-nav-savings"
                    className="block text-left font-sans text-[14px] text-[#F6F5F1] hover:text-[#E8A94A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    Savings
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('benefits')}
                    id="footer-nav-financing"
                    className="block text-left font-sans text-[14px] text-[#F6F5F1] hover:text-[#E8A94A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    Financing
                  </button>
                </div>
              </div>

              {/* Company Column */}
              <div className="lg:col-span-1 space-y-3">
                <div className="font-sans text-[13px] sm:text-[14px] font-medium text-[#8A9A8E]">
                  Company
                </div>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('hero')}
                    id="footer-nav-about"
                    className="block text-left font-sans text-[14px] text-[#F6F5F1] hover:text-[#E8A94A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    About Us
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('reviews')}
                    id="footer-nav-careers"
                    className="block text-left font-sans text-[14px] text-[#F6F5F1] hover:text-[#E8A94A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    Careers
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('quote')}
                    id="footer-nav-contact"
                    className="block text-left font-sans text-[14px] text-[#F6F5F1] hover:text-[#E8A94A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Service Areas Column (Plain text list, not styled as links) */}
              <div className="lg:col-span-1 space-y-3">
                <div className="font-sans text-[13px] sm:text-[14px] font-medium text-[#8A9A8E]">
                  Service Areas
                </div>
                <div className="space-y-1.5 font-sans text-[14px] text-[#F6F5F1]/70 leading-relaxed">
                  <div>California</div>
                  <div>Arizona</div>
                  <div>Nevada</div>
                  <div>Texas</div>
                  <div>Florida</div>
                  <div>North Carolina</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Bar: Inside outer glass panel below inner box, no section divider */}
          <div className="pt-2 pb-1 px-2 sm:px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] font-sans text-[#8A9A8E]">
            <div>
              © {new Date().getFullYear()} Solara Energy Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                id="footer-legal-center"
                className="text-[#8A9A8E] hover:text-[#F6F5F1] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
              >
                Legal Center
              </button>
              {/* Single thin 1px vertical micro-divider inside component */}
              <span className="inline-block w-px h-3.5 bg-white/20" aria-hidden="true" />
              <button
                type="button"
                id="footer-user-agreement"
                className="text-[#8A9A8E] hover:text-[#F6F5F1] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
              >
                User Agreement
              </button>
            </div>
          </div>
        </div>

        {/* Oversized Background Wordmark per Section 12 */}
        {/* Sits directly on video and overlay beneath layered glass card, hand-built SVG embossed glass filter */}
        <div
          id="footer-oversized-wordmark"
          className="relative w-full overflow-hidden select-none pointer-events-none pb-4 pt-2 flex items-center justify-center text-center"
        >
          {/* SVG filter definition in DOM */}
          <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true" focusable="false">
            <defs>
              {/* Hand-built SVG embossed glass filter per Section 12: flat White and Ink floods, no gradient */}
              <filter id="glass-effect" x="-20%" y="-20%" width="140%" height="140%">
                {/* Soft outer drop shadow for elevation and depth */}
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="8"
                  floodColor="#151A21"
                  floodOpacity="0.6"
                  result="outerShadow"
                />

                {/* Normalize alpha to 1.0 for edge detection if input text is translucent */}
                <feComponentTransfer in="SourceAlpha" result="normalizedAlpha">
                  <feFuncA type="linear" slope="5" />
                </feComponentTransfer>

                {/* Alpha-based inner highlight along top edge for thicker, softer glass rim reflection */}
                <feOffset dx="0" dy="2.5" in="normalizedAlpha" result="offsetAlphaHighlight" />
                <feComposite in="normalizedAlpha" in2="offsetAlphaHighlight" operator="out" result="topEdge" />
                <feGaussianBlur in="topEdge" stdDeviation="2.5" result="blurHighlight" />
                <feFlood floodColor="#FFFFFF" floodOpacity="0.85" result="whiteFlood" />
                <feComposite in="whiteFlood" in2="blurHighlight" operator="in" result="innerHighlight" />

                {/* Alpha-based inner shadow along bottom edge for rounded depth */}
                <feOffset dx="0" dy="-2.5" in="normalizedAlpha" result="offsetAlphaShadow" />
                <feComposite in="normalizedAlpha" in2="offsetAlphaShadow" operator="out" result="bottomEdge" />
                <feGaussianBlur in="bottomEdge" stdDeviation="3.5" result="blurShadow" />
                <feFlood floodColor="#151A21" floodOpacity="0.45" result="blackFlood" />
                <feComposite in="blackFlood" in2="blurShadow" operator="in" result="innerShadow" />

                {/* Merge static glass layers with the translucent SourceGraphic */}
                <feMerge>
                  <feMergeNode in="outerShadow" />
                  <feMergeNode in="SourceGraphic" />
                  <feMergeNode in="innerShadow" />
                  <feMergeNode in="innerHighlight" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Wordmark rendered directly as translucent text with SVG glass filter, no background-clip or backdrop-filter box */}
          <h1
            className="font-serif font-semibold text-[clamp(4.25rem,15vw,11.5rem)] leading-none tracking-[-0.03em] whitespace-nowrap select-none m-0 p-0 text-center"
            style={{
              color: 'rgba(255, 255, 255, 0.20)',
              filter: 'url(#glass-effect)',
            }}
          >
            Solara
          </h1>
        </div>
      </div>
    </footer>
  );
}
