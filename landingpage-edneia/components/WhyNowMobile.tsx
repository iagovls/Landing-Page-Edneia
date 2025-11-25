import Image from "next/image";

export default function WhyNowMobile() {
  return (
    <section className=" relative flex flex-col items-center justify-center w-full bg-[url('/montain.jpg')] bg-cover bg-center py-20">
      <div className="relative z-20 -mb-96 flex justify-center ">
        <Image
          src="/edneia4.png"
          alt=""
          width={300}
          height={270}
          className="md:w-96  h-auto object-contain"
          priority
        />
      </div>
      <div className="relative w-11/12 max-w-[800px] bg-gradient-to-r from-red-900  to-red-950 flex flex-col space-y-6 py-16 px-2 rounded-2xl border mt-60 z-30">
        <h2 className="mb-10 text-2xl sm:text-3xl font-normal text-white text-center">Por que você deve <span className="font-bold">investir</span> neste programa <span className="font-bold">agora</span>?</h2>
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="w-auto flex md:justify-start">
            <div className=" flex items-center justify-center gap-1 bg-white text-red-900 px-6 py-4 rounded-r-none rounded-l-full w-full h-24 sm:h-20 shadow-[0_0_12px_rgba(255,255,255,0.7)]">
              <span className="font-normal text-base sm:text-2xl">Resultados </span>
              <span className="font-bold text-base sm:text-2xl">rápidos</span>
            </div>
          </div>
          <p className="text-white text-xs md:text-sm">Este programa de 5 encontros individuais foi desenhado para empreendedores que estão prontos para agir e ver resultados rápidos.</p>
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <p className="text-white text-end text-xs md:text-sm">Se você já tem um negócio, mas sente que não está crescendo o suficiente, ou que não está explorando todo o seu potencial, este é o momento certo para investir no futuro do seu negócio.</p>
          <div className="w-auto flex md:justify-start">
            <div className="flex flex-col xl:flex-row h-28 md:h-24 items-center justify-center gap-0 md:gap-2 bg-white text-red-900 px-6 py-4 rounded-l-none rounded-r-full w-full shadow-[0_0_12px_rgba(255,255,255,0.7)]">
              <span className="font-normal text-sm sm:text-xl">Transformar seu </span>
              <span className="font-bold text-sm sm:text-xl">faturamento</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="w-auto flex md:justify-start">
            <div className=" flex items-center justify-center h-28 md:h-24 gap-1 bg-white text-red-900 px-6 py-4 rounded-r-none rounded-l-full w-full shadow-[0_0_12px_rgba(255,255,255,0.7)]">
              <span className="font-normal text-sm sm:text-2xl">Investir no </span>
              <span className="font-bold text-sm sm:text-2xl">futuro</span>
            </div>
          </div>
          <p className="text-white text-xs md:text-sm">Em até 30 dias, você pode transformar seu faturamento. E o melhor: você não estará sozinho. Eu estarei ao seu lado, passo a passo, garantindo que você tenha todo o apoio necessário para alcançar seus objetivos.</p>
        </div>
        
      </div>
    </section>
  );
}