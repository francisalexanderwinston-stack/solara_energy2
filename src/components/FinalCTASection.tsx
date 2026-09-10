import { QuoteForm } from './QuoteForm';

export function FinalCTASection() {
  return (
    <section
      id="quote"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[600px] flex flex-col justify-center select-none text-left py-16 lg:py-0"
    >
      <div className="w-full max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Direct on video, no panel */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <h2 className="font-serif font-semibold text-[30px] sm:text-[38px] lg:text-[46px] text-[#F6F5F1] leading-[1.12] mb-4">
              Lock in your clean power rate before utility prices increase.
            </h2>
            <p className="font-sans text-[16px] sm:text-[18px] text-[#F6F5F1]/80 leading-relaxed max-w-[54ch]">
              Request your free engineering assessment today. We provide an exact panel layout, production modeling, and guaranteed pricing within one business day.
            </p>
          </div>

          {/* Right Column: Quote Form structured as a glass panel */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <QuoteForm idPrefix="final-cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
