import HeroMobile from "@/components/HeroMobile";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import Benefits from "@/components/Benefits";
import WhyNow from "@/components/WhyNow";
import WhyNowMobile from "@/components/WhyNowMobile";
import Price from "@/components/Price";
import WhatYouGet from "@/components/WhatYouGet";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Target from "@/components/Target";
import CommunitySection from "@/components/CommunitySection";
import AboutEdneia from "@/components/AboutEdneia";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";


export default function Home() {
  return (
    <div className="font-sans bg-red-950">
      <div className="md:hidden">
        <HeroMobile />
      </div>
      <div className="hidden md:block">
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
      <FAQSection />
      
      <Footer />
    </div>
  );
}
