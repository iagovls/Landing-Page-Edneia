import { CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Price() {
  return (
    <section className="relative px-6 py-10 md:py-20 bg-gradient-to-r from-red-900  to-red-950">
      <div
        className="absolute inset-0 h-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/logo%20marca%20%C3%A9%20voc%C3%AA%20a4_retrato.png')" }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            <span className="font-light">Invista no</span> <br /> Crescimento do Seu Negócio
          </h2>
          <p className="md:w-1/2 w-full text-center mx-auto text-shadow-xs text-shadow-black white md:text-lg">
            Uma oportunidade para acelerar resultados com estratégia, foco e acompanhamento. Mais do que um preço, um passo decisivo.
          </p>
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-[700px] rounded-3xl border flex flex-col items-center justify-center border-zinc-200 bg-white shadow-xl/30 shadow-sm p-8 md:p-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/mentoria%20individual%20logo.png" 
                alt="Mentoria Individual"
                width={220}
                height={68}
                priority
              />
            </div>
            <div className="flex items-baseline justify-center">
              <div>
                <p className="text-sm uppercase tracking-wide text-center text-zinc-500">Investimento</p>
                <p className="mt-1 text-4xl md:text-5xl font-bold text-red-900">
                  R$ 1.497,00
                </p>
              </div>
              <div className="text-right" />
            </div>

            <p className="mt-4 text-zinc-700 text-sm text-center">
              O valor de R$ 1.497,00 é um investimento no futuro do seu negócio — não um custo. Com o plano certo, você amplia o potencial de faturamento com ações práticas, objetivas e personalizadas.
            </p>

            <ul className="mt-6 grid gap-3 grid-cols-1">
              {[
                "Estratégia personalizada",
                "Ações práticas e objetivas",
                "Acompanhamento orientado",
                "Aumento do faturamento",
                "Suporte dedicado",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C73638] mt-0.5" />
                  <span className="text-zinc-800 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center justify-center">
              <a
                href="https://wa.me/5573998181724?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20individual"
                className="inline-flex w-full items-center text-center rounded-lg bg-gradient-to-r from-[#C53537] to-[#9E3134] text-white px-14 py-8 hover:cursor-pointer text-sm sm:text-xl font-bold transition-transform transition-shadow hover:scale-105 hover:shadow-[0_0_24px_#C73638]"
                aria-label="Quero Destravar Meu Crescimento"
              >
                Quero Destravar Meu Crescimento
              </a>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center w-10/12 text-center gap-0 text-zinc-600">
              <ShieldCheck className="md:w-10 md:h-10 text-[#C73638]" />
              <p className="md:text-sm text-xs">Processo validado por diversos empreendedores.</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-zinc-100">
          A decisão que você toma hoje pode transformar o faturamento do seu negócio nos próximos meses.
        </p>
      </div>
    </section>
  );
}