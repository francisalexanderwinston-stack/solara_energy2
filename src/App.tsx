import { BackgroundVideo } from './components/BackgroundVideo';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustStatsSection } from './components/TrustStatsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#151A21] text-[#F6F5F1] overflow-x-hidden selection:bg-[#E8A94A] selection:text-[#151A21]">
      {/* Fixed continuous video background with 60% Ink overlay */}
      <BackgroundVideo />

      {/* Global Navigation Pill */}
      <Navigation />

      {/* Main Content Sections: Each 100vh on desktop floating over the continuous video */}
      <main id="main-content" className="relative z-10 w-full">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Trust Stats */}
        <TrustStatsSection />

        {/* Section 3: How It Works */}
        <HowItWorksSection />

        {/* Section 4: Benefits */}
        <BenefitsSection />

        {/* Section 5: Testimonial */}
        <TestimonialSection />

        {/* Section 6: Final Call to Action */}
        <FinalCTASection />
      </main>

      {/* Footer: Natural height floating over the continuous video */}
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}
