export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[640px] flex flex-col justify-center select-none text-left py-16 lg:py-0"
    >
      <div className="w-full max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* First Glass Panel: Visually larger (6 cols on desktop) */}
          <div
            id="benefit-block-financial"
            className="lg:col-span-6 bg-white/[0.09] backdrop-blur-[24px] border border-white/20 rounded-[24px] p-7 sm:p-8 flex flex-col justify-between text-left"
          >
            <div>
              <h3 className="font-serif font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-[#F6F5F1] leading-[1.18] mb-4">
                Direct ownership delivers complete energy value without utility rate escalators.
              </h3>

              <p className="font-sans text-[15px] sm:text-[16px] text-[#F6F5F1]/80 leading-relaxed mb-6 max-w-[54ch]">
                Unlike third party leases with annual rate escalators, direct system ownership locks in your electricity rate permanently. Homeowners retain 100% of their power value, claim the full 30% federal clean energy tax credit, and increase property equity. Solara offers transparent cash bids and fixed 4.99% twenty year financing with zero down payment.
              </p>
            </div>

            <div className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#E8A94A] pt-2">
              $42,600 average twenty-five year net savings.
            </div>
          </div>

          {/* Second Glass Panel: Battery storage (3 cols on desktop) */}
          <div
            id="benefit-block-battery"
            className="lg:col-span-3 bg-white/[0.09] backdrop-blur-[24px] border border-white/20 rounded-[24px] p-6 sm:p-7 flex flex-col justify-between text-left"
          >
            <div>
              <h3 className="font-serif font-semibold text-[19px] sm:text-[22px] text-[#F6F5F1] leading-snug mb-3">
                Battery storage backup
              </h3>

              <p className="font-sans text-[14px] sm:text-[15px] text-[#F6F5F1]/80 leading-relaxed">
                Store surplus daytime generation to keep essential refrigeration, well pumps, and lighting active during regional grid failures. Automatic isolation switches transfer power in 16 milliseconds without system flicker.
              </p>
            </div>
          </div>

          {/* Third Glass Panel: Quantifiable carbon offset (3 cols on desktop) */}
          <div
            id="benefit-block-environmental"
            className="lg:col-span-3 bg-white/[0.09] backdrop-blur-[24px] border border-white/20 rounded-[24px] p-6 sm:p-7 flex flex-col justify-between text-left"
          >
            <div>
              <h3 className="font-serif font-semibold text-[19px] sm:text-[22px] text-[#F6F5F1] leading-snug mb-3">
                Quantifiable carbon offset
              </h3>

              <p className="font-sans text-[14px] sm:text-[15px] text-[#F6F5F1]/80 leading-relaxed">
                A typical 8.4 kW residential installation eliminates 9.2 metric tons of atmospheric carbon dioxide each year. That matches the annual carbon sequestration of 152 mature forest trees across its operating lifetime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
