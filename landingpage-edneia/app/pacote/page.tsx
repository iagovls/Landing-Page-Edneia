import JourneySection from "@/components/JourneySection";
import CommunitySection from "@/components/CommunitySection";
import AboutEdneia from "@/components/AboutEdneia";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroPacote from "@/components/HeroPacote";
import WhatYouGet from "@/components/WhatYouGet";
import HeroMobilePacote from "@/components/HeroMobilePacote";
import WhatYouGetMobile from "@/components/WhatYouGetMobile";
import PricePacote from "@/components/PricePacote";

export default function PacotePage() {
  return (
    <main className="font-sans">
      <div className="md:hidden">
        <HeroMobilePacote />
      </div>
      <div className="hidden md:block">
        <HeroPacote />
      </div>
      <JourneySection />
      <div className="hidden xl:block">
        <WhatYouGet />
      </div>
      <div className="xl:hidden">
        <WhatYouGetMobile />
      </div>
      <PricePacote />
      <CommunitySection />
      <AboutEdneia />
      <TestimonialsSection />
    </main>
  );
}