export function HowItWorksSection() {
  const steps = [
    {
      numeral: '01',
      title: 'Site assessment',
      description:
        'Our structural engineer surveys your rafter dimensions, electrical service panel capacity, and roof plane pitch in person.',
    },
    {
      numeral: '02',
      title: 'System design',
      description:
        'We engineer a high efficiency layout tuned to your annual kWh usage, produce structural drawings, and file county permits.',
    },
    {
      numeral: '03',
      title: 'Installation',
      description:
        'Our direct Solara crew completes racking, panel placement, inverter cabling, and conduit runs in two days.',
    },
    {
      numeral: '04',
      title: 'Monitoring and savings',
      description:
        'We guide municipal inspection, coordinate bidirectional utility meter swap, and turn on production tracking.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[600px] flex flex-col justify-center select-none text-left py-16 lg:py-0"
    >
      <div className="w-full max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Headline and supporting copy. NO label text above headline per Rule 3! */}
        <div className="max-w-[65ch] mb-12 lg:mb-16">
          <h2 className="font-serif font-semibold text-[28px] sm:text-[34px] lg:text-[40px] text-[#F6F5F1] leading-[1.15] mb-3">
            How it works
          </h2>
          <p className="font-sans text-[16px] sm:text-[18px] text-[#F6F5F1]/80 leading-relaxed">
            Four sequential engineering stages managed by one continuous installation crew from day one to grid activation.
          </p>
        </div>

        {/* Four steps in a single row on desktop, stacked on mobile. Separated by whitespace only, never a divider line. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, idx) => (
            <div key={idx} id={`process-step-${step.numeral}`} className="text-left">
              <div className="font-serif font-semibold text-[24px] sm:text-[28px] text-[#E8A94A] leading-none mb-3">
                {step.numeral}
              </div>
              <h3 className="font-serif font-semibold text-[19px] sm:text-[22px] text-[#F6F5F1] leading-snug mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#F6F5F1]/75 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
