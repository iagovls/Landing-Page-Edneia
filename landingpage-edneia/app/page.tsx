import Image from "next/image";
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
      <section aria-label="Conheça as frentes da A Marca É Você" className="relative overflow-hidden bg-cover bg-center px-5 py-12 text-white md:px-10 md:py-16" style={{ backgroundImage: "linear-gradient(90deg, rgba(61,14,31,.94), rgba(61,14,31,.83)), url(\'/bg-hero.jpg\')" }}>
        <div className="mx-auto max-w-6xl">
          <Image src="/a-marca-e-voce-branco.png" alt="Logo A Marca É Você" width={190} height={85} className="mb-7 h-auto w-44 object-contain" /><p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">A Marca É Você®</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            Desenvolvimento humano que fortalece negócios e transforma histórias.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-rose-100 md:text-lg">
            A virada começa em você. Conheça nossas soluções para empreendedoras e empresas.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8">
              <div className="mb-5 flex h-40 items-end justify-center overflow-hidden rounded-xl bg-white/5"><Image src="/hero-image.png" alt="Ednéia Silva — mentorias" width={280} height={200} className="h-full w-auto object-contain" /></div><h2 className="text-2xl font-bold">A Marca É Você® Empreender</h2>
              <p className="mt-3 leading-relaxed text-rose-100">
                Mentorias e desenvolvimento para mulheres que desejam empreender com clareza, direção e resultados.
              </p>
              <a href="/empreender" className="mt-6 inline-block rounded-lg bg-rose-300 px-5 py-3 font-semibold text-red-950 transition hover:bg-rose-200">
                Conhecer a mentoria individual
              </a>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8">
              <div className="mb-5 flex h-40 items-end justify-center overflow-hidden rounded-xl bg-white/5"><Image src="/imagem%20quem%20%C3%A9%20Edneia.png" alt="Ednéia Silva — consultoria empresarial" width={280} height={200} className="h-full w-auto object-contain" /></div><h2 className="text-2xl font-bold">A Marca É Você® Business</h2>
              <p className="mt-3 leading-relaxed text-rose-100">
                Sua empresa só funciona quando você está presente? Consultoria personalizada para fortalecer a gestão, desenvolver lideranças e construir equipes que assumem responsabilidades.
              </p>
              <a href="/business" className="mt-6 inline-block rounded-lg bg-[#E8C37A] px-5 py-3 font-semibold text-[#70283F] transition hover:bg-[#F6DFA8]">
                Conhecer a consultoria Business
              </a>
              <p className="mt-4 text-sm text-rose-100">
                O gestor pode não estar presente, mas a cultura está.
              </p>
              <a href="https://wa.me/5573998181724?text=Ol%C3%A1%21%20Quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20A%20Marca%20%C3%89%20Voc%C3%AA%20Business." target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#F6DFA8] underline underline-offset-4 hover:text-white">
                Falar sobre minha empresa
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
