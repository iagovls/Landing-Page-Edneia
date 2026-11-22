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
      <section aria-label="Conheça as frentes da A Marca É Você" className="px-5 py-12 text-white md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">A Marca É Você®</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            Desenvolvimento humano que fortalece negócios e transforma histórias.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-rose-100 md:text-lg">
            A virada começa em você. Conheça nossas soluções para empreendedoras e empresas.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8">
              <h2 className="text-2xl font-bold">A Marca É Você® Empreender</h2>
              <p className="mt-3 leading-relaxed text-rose-100">
                Mentorias e desenvolvimento para mulheres que desejam empreender com clareza, direção e resultados.
              </p>
              <a href="#mentoria-individual" className="mt-6 inline-block rounded-lg bg-rose-300 px-5 py-3 font-semibold text-red-950 transition hover:bg-rose-200">
                Conhecer as mentorias
              </a>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8">
              <h2 className="text-2xl font-bold">A Marca É Você® Business</h2>
              <p className="mt-3 leading-relaxed text-rose-100">
                Cultura organizacional, desenvolvimento de líderes e equipes, atendimento e soluções que unem pessoas e resultados empresariais.
              </p>
              <a href="/raio-x-empresarial-360" className="mt-6 inline-block rounded-lg bg-[#E8C37A] px-5 py-3 font-semibold text-[#70283F] transition hover:bg-[#F6DFA8]">
                Fazer pré-diagnóstico gratuito
              </a>
              <p className="mt-4 text-sm text-rose-100">
                Em cerca de 2 minutos, descubra quais áreas da sua empresa merecem atenção.
              </p>
              <a href="https://wa.me/5573998181724?text=Ol%C3%A1%21%20Quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20A%20Marca%20%C3%89%20Voc%C3%AA%20Business." target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#F6DFA8] underline underline-offset-4 hover:text-white">
                Prefiro conversar diretamente
              </a>
            </div>
          </div>
        </div>
      </section>
      <div id="mentoria-individual">
        <div className="xl:hidden">
        <HeroMobile />
      </div>
      <div className="hidden xl:block">
        <Hero /> 
      </div>
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
