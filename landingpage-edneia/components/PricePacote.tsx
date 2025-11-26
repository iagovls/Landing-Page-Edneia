import { CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Dash from "./Dash";
import PrimaryButton from "./ui/primary-button";
import Link from "next/link";


export default function PricePacote() {
  return (
    <section className="relative px-6 pt-20 bg-gradient-to-r from-red-900  to-red-950">
      <div
        className="absolute inset-0 h-full bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/logo%20marca%20%C3%A9%20voc%C3%AA%20a4_retrato.png')",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            <span className="font-light">Oferta</span> <br /> imperdível
          </h2>
          <p className="md:w-1/2 w-full text-center mx-auto text-white md:text-lg">
            Investir em sua organização financeira é investir no crescimento do
            seu negócio.
          </p>
        </div>

        <div className="mt-10">
          <div className="mx-auto md:max-w-[700px] w-11/12 rounded-3xl border border-zinc-200 bg-white shadow-xl/30 shadow-sm p-8 md:p-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/a-marca-e-voce-vermelho.png"
                alt="Mentoria Individual"
                width={220}
                height={68}
                priority
              />
            </div>
            <div className="flex items-baseline justify-center">
              <div>
                <p className="text-sm uppercase tracking-wide text-center text-zinc-500">
                  Investimento
                </p>
                <p className="mt-1 text-4xl md:text-5xl font-bold text-red-900">
                  R$ 29,90
                </p>
              </div>
              <div className="text-right" />
            </div>

            <ul className="mt-6 grid gap-3 grid-cols-1">
              {["Aulas avulsas", "Metas e Plano de ação"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C73638] mt-0.5" />
                  <span className="text-zinc-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-10">
              <PrimaryButton asChild> 
                <Link href={`https://wa.me/5573998181724?text=Ol%C3%A1.%20Quero%20adquirir%20as%20aulas%20avulsas`} aria-label="Adquirir aulas avulsas">
                  Adquirir aulas avulsas
                </Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="mx-auto md:max-w-[700px] w-11/12 rounded-3xl border border-zinc-200 bg-white shadow-xl/30 shadow-sm p-8 md:p-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/a-marca-e-voce-vermelho.png"
                alt="Mentoria Individual"
                width={220}
                height={68}
                priority
              />
            </div>
            <div className="flex items-baseline justify-center">
              <div>
                <p className="text-sm uppercase tracking-wide text-center text-zinc-500">
                  Investimento
                </p>
                <p className="mt-1 text-4xl md:text-5xl font-bold text-red-900">
                  R$ 49,90
                </p>
              </div>
              <div className="text-right" />
            </div>

            

            <ul className="mt-6 grid gap-3 grid-cols-1">
              {[
                "Todas as aulas",
                "Ferramentas",
                "Bônus",
                
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C73638] mt-0.5" />
                  <span className="text-zinc-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-10">
              <PrimaryButton asChild> 
                <Link href={`https://wa.me/5573998181724?text=Ol%C3%A1.%20Quero%20adquirir%20o%20pacote%20completo`} aria-label="Adquirir o pacote completo">
                  Adquirir o pacote completo
                </Link>
              </PrimaryButton>
            </div>

            
          </div>
        </div>

        <p className="mt-10 md:pb-20 text-center text-zinc-100">
          A decisão que você toma hoje pode transformar o faturamento do seu
          negócio nos próximos meses.
        </p>
      </div>
      <div className="md:hidden">
        <Dash />
      </div>
    </section>
  );
}
