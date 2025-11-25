import { Search, ListChecks, BicepsFlexed, Route, ChartNoAxesCombined } from "lucide-react";

export default function Benefits() {
  return (
    <section
      className="relative px-6 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/logo marca é você a4_retrato.png')" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center ">
        <h2 className="mt-3 text-center text-2xl md:text-4xl font-normal text-white lg:w-6/12 text-shadow-xs text-shadow-black">O que você vai <span className="font-bold">conquistar</span> com este programa de <span className="font-bold">5 encontros individuais</span>:</h2>
        <ol className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 list-none">
          <li className="group relative overflow-hidden hover:scale-102 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-5 md:p-6 shadow-sm hover:shadow-lg transition">
            <div className="absolute left-0 top-0 h-full w-1 bg-white" />
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center p-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#C53537] to-[#9E3134] text-white">
                <Search className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <h3 className="font-semibold text-white text-lg md:text-2xl text-shadow-xs text-shadow-zinc-900">Diagnóstico Completo e Planejamento Estratégico:</h3>
            </div>
            <p className="mt-3 text-zinc-300 text-base md:text-lg text-shadow-xs text-shadow-zinc-900">Avaliamos juntos e, a partir disso, criamos um plano estratégico personalizado para aumentar suas vendas.</p>
          </li>

          <li className="group relative overflow-hidden hover:scale-102 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-5 md:p-6 shadow-sm hover:shadow-lg transition">
            <div className="absolute left-0 top-0 h-full w-1 bg-white" />
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center p-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#C53537] to-[#9E3134] text-white">
                <ListChecks className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <h3 className="font-semibold text-white text-lg md:text-2xl text-shadow-xs text-shadow-zinc-900">Definição de Metas Claras e KPIs:</h3>
            </div>
            <p className="mt-3 text-zinc-300 text-base md:text-lg text-shadow-xs text-shadow-zinc-900">Definimos metas de faturamento e KPIs para os próximos 30 dias com acompanhamento direto.</p>
          </li>

          <li className="group relative overflow-hidden hover:scale-102 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-5 md:p-6 shadow-sm hover:shadow-lg transition">
            <div className="absolute left-0 top-0 h-full w-1 bg-white" />
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center p-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#C53537] to-[#9E3134] text-white">
                <BicepsFlexed className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <h3 className="font-semibold text-white text-lg md:text-2xl text-shadow-xs text-shadow-zinc-900">Desbloqueio de Potencial Pessoal e Profissional:</h3>
            </div>
            <p className="mt-3 text-zinc-300 text-base md:text-lg text-shadow-xs text-shadow-zinc-900">Trabalhamos crenças limitantes, fortalecemos confiança e capacidade de decisão para o sucesso.</p>
          </li>

          <li className="group relative overflow-hidden hover:scale-102 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-5 md:p-6 shadow-sm hover:shadow-lg transition">
            <div className="absolute left-0 top-0 h-full w-1 bg-white" />
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center p-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#C53537] to-[#9E3134] text-white">
                <Route className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <h3 className="font-semibold text-white text-lg md:text-2xl text-shadow-xs text-shadow-zinc-900">Estratégias de Crescimento e Ações Práticas para Faturar Mais:</h3>
            </div>
            <p className="mt-3 text-zinc-300 text-base md:text-lg text-shadow-xs text-shadow-zinc-900">Implementamos ações práticas para aumentar vendas e expandir presença com resultados rápidos.</p>
          </li>

          <li className="group relative overflow-hidden hover:scale-102 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-5 md:p-6 shadow-sm hover:shadow-lg transition sm:col-span-2 xl:col-span-1">
            <div className="absolute left-0 top-0 h-full w-1 bg-white" />
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center p-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#C53537] to-[#9E3134] text-white">
                <ChartNoAxesCombined className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <h3 className="font-semibold text-white text-lg md:text-2xl text-shadow-xs text-shadow-zinc-900">Planejamento de Longo Prazo e Escalabilidade:</h3>
            </div>
            <p className="mt-3 text-zinc-300 text-base md:text-lg text-shadow-xs text-shadow-zinc-900">Criamos plano sustentável para crescer e escalar seu negócio com visão clara de futuro.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}