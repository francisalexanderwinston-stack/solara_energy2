export function TrustStatsSection() {
  return (
    <section
      id="savings"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[600px] flex flex-col justify-center select-none text-left py-16 lg:py-0"
    >
      <div className="w-full max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Stat 1: Average review rating */}
          <div id="trust-stat-rating" className="text-left">
            <div className="font-serif font-semibold text-[36px] sm:text-[44px] lg:text-[52px] text-[#F6F5F1] leading-none mb-2.5">
              4.96
            </div>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#8A9A8E] leading-relaxed max-w-[28ch]">
              Average customer rating across 620 verified homeowner reviews.
            </p>
          </div>

          {/* Stat 2: Highlighted Stat in Gold (Warranty length) */}
          <div id="trust-stat-warranty" className="text-left">
            <div className="font-serif font-semibold text-[36px] sm:text-[44px] lg:text-[52px] text-[#E8A94A] leading-none mb-2.5">
              25 Years
            </div>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#8A9A8E] leading-relaxed max-w-[28ch]">
              Direct workmanship and equipment warranty backed in house by Solara.
            </p>
          </div>

          {/* Stat 3: Installer certification */}
          <div id="trust-stat-certification" className="text-left">
            <div className="font-serif font-semibold text-[36px] sm:text-[44px] lg:text-[52px] text-[#F6F5F1] leading-none mb-2.5">
              NABCEP
            </div>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#8A9A8E] leading-relaxed max-w-[28ch]">
              Certified master electricians and solar professionals on every job.
            </p>
          </div>

          {/* Stat 4: Number of states served */}
          <div id="trust-stat-states" className="text-left">
            <div className="font-serif font-semibold text-[36px] sm:text-[44px] lg:text-[52px] text-[#F6F5F1] leading-none mb-2.5">
              4 States
            </div>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#8A9A8E] leading-relaxed max-w-[28ch]">
              Regional installation hubs across Washington, Oregon, Idaho, and Montana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
