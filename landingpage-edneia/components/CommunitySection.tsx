import Image from "next/image";
import Dash from "./Dash";

export default function CommunitySection() {
  return (
    <section className="px-6 pb-12 pt-0 md:pt-10 bg-gradient-to-r from-red-900  to-red-950">
      <div className="w-auto mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col-reverse  md:gap-10 mb-10 ">
          <div className="lg:flex grid grid-cols-2 gap-4 items-center md:justify-center">
            <Image
              src="/elas%20com%20proposito1.png"
              alt="Logo Ednéia"
              width={200}
              height={100}
              priority
              className="justify-self-end shadow-xl/30 md:rotate-6 -rotate-6"
            />
            <Image
              src="/elas%20com%20proposito2.png"
              alt="Logo Ednéia"
              width={200}
              height={100}
              priority
              className="shadow-xl/30 md:-rotate-6 rotate-6"
            />
            <Image
              src="/elas%20com%20proposito3.png"
              alt="Logo Ednéia"
              width={200}
              height={100}
              priority
              className="justify-self-end shadow-xl/30 rotate-6"
            />
            <Image
              src="/elas%20com%20proposito4.png"
              alt="Logo Ednéia"
              width={200}
              height={100}
              priority
              className="shadow-xl/30 -rotate-6"
            />
          </div>
          <div className="flex flex-col gap-2 h-48 items-center justify-center">
            <div className="flex items-end justify-center gap-4">
              <h1 className=" md:text-3xl leading-snug font-light text-white">
                <span className="font-bold">Junte-se</span> à rede
              </h1>
              <div className="w-1/2 md:w-auto">
                <Image
                  src="/Elas%20com%20proposito%20logo%20branca.png"
                  alt="Rede Elas com Propósito"
                  width={300}
                  height={120}
                  priority
                />
              </div>
            </div>
            <div className="flex items-end justify-center gap-4">
              <h1 className="md:text-3xl font-light text-white">
                <span className="font-light tracking-[0.08em]">
                  e <span className="font-bold">participe</span> do
                </span>
              </h1>
              <div className="flex w-1/2 md:w-auto items-center gap-4">
                <Image
                  src="/caf%C3%A9%20com%20prop%C3%B3sito%20logo%20branca.png"
                  alt="Café com Propósito"
                  width={300}
                  height={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <p className="md:mt-8 text-white text-center text-xs md:text-lg xl:max-w-1/2 text-center">
          Se você quer aprender mais, trocar ideias e se conectar com outras
          mulheres empreendedoras, entre para o nosso grupo{" "}
          <span className="font-bold">Rede Elas com Propósito!</span> E
          participe do nosso{" "}
          <span className="font-bold">Café com Propósito</span>, um encontro
          online gratuito onde discutimos estratégias para aumentar o
          faturamento, organizar a vida financeira e muito mais.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#cafe-com-proposito"
            aria-label="Quero participar do Café com Propósito"
            className="inline-flex items-center text-center justify-center rounded-lg bg-gradient-to-r from-[#C53537] to-[#9E3134] text-white px-14 md:px-14 py-8 hover:cursor-pointer text-sm sm:text-xl font-bold transition-transform transition-shadow hover:scale-105 hover:shadow-[0_0_24px_#C73638]"
          >
            Quero participar do <br /> Café com Propósito
          </a>
        </div>
      </div>
      <Dash />
    </section>
  );
}
