import HeroMobile from "@/components/HeroMobile";
import Hero from "@/components/HeroIndividual";
import JourneySection from "@/components/JourneySection";
import Benefits from "@/components/Benefits";
import WhyNow from "@/components/WhyNow";
import WhyNowMobile from "@/components/WhyNowMobile";
import Price from "@/components/Price";

import Target from "@/components/Target";
import CommunitySection from "@/components/CommunitySection";
import AboutEdneia from "@/components/AboutEdneia";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSectionMentoriaIndividual from "@/components/FAQSectionMentoriaIndividual";


export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-r from-red-900 to-red-950">
      <div className="xl:hidden">
        <HeroMobile />
      </div>
      <div className="hidden xl:block">
        <Hero /> 
      </div>
      <JourneySection />
      <Benefits />
      <div className="lg:hidden">
        <WhyNowMobile />
      </div>
      <div className="hidden lg:block">
        <WhyNow />
      </div>
      <Price />
      <Target/>
      <CommunitySection />
      
      <AboutEdneia />
      <TestimonialsSection />
      <FAQSectionMentoriaIndividual />
      
    </div>
  );
}
