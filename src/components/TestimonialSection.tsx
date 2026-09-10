export function TestimonialSection() {
  return (
    <section
      id="reviews"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[600px] flex flex-col justify-center select-none text-left py-16 lg:py-0"
    >
      <div className="w-full max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Single quote in a glass panel, left aligned */}
        <div
          id="testimonial-quote-card"
          className="bg-white/[0.09] backdrop-blur-[24px] border border-white/20 rounded-[24px] p-8 sm:p-10 lg:p-12 max-w-[680px] text-left"
        >
          {/* Quote set in Source Serif 4 at 28px desktop / 22px mobile */}
          <blockquote className="font-serif font-medium text-[20px] sm:text-[24px] lg:text-[28px] text-[#F6F5F1] leading-[1.3] mb-6 max-w-[24ch]">
            Solara showed up with their own crew on Tuesday morning, finished mounting all twenty-four panels by Wednesday afternoon, and our first electric bill dropped from $240 to $13.
          </blockquote>

          {/* Small line of attribution in Sage: name and city, no avatar photo */}
          <div className="font-sans text-[14px] sm:text-[15px] text-[#8A9A8E]">
            Marcus Vance, Bend, Oregon
          </div>
        </div>
      </div>
    </section>
  );
}
