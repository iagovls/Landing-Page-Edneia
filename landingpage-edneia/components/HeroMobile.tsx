"use client";
import Link from "next/link";
import Image from "next/image";
import { CTA_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import PrimaryButton from "./ui/primary-button";

export default function HeroMobile() {
  const href = CTA_URL !== "#" ? CTA_URL : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section
      className="flex flex-col items-center justify-center relative px-4 py-1 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      {/* Gradiente mais leve e atrás da imagem */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80  to-black/60 pointer-events-none"></div>

      {/* Imagem agora acima do gradiente */}
      <div className="relative z-20 -mb-96 w-2/3 flex justify-center">
        <Image
          src="/hero-image.png"
          alt=""
          width={360}
          height={270}
          sizes="100vw"
          className="h-auto object-contain"
          priority
        />
      </div>

      {/* Bloco vermelho */}
      <div className="relative p-5 mb-10 w-11/12 mx-auto bg-[#440001] z-30 mt-60 rounded-2xl border">
        <div className="flex justify-center">
          <Image
            src="/mentoria%20individual%20logo%20branca.png"
            alt="A Marca é Você"
            width={220}
            height={68}
            priority
          />
        </div>

        <p className="mt-6 text-2xl text-white text-center">
          Transforme Seu Negócio{" "}
          <span className="font-bold text-[#C73638] whitespace-nowrap">
            em 30 Dias
          </span>
          :{" "}
          <br />
          <span className="font-bold">
            Aumente Seu Faturamento e Destrave Seu Potencial
          </span>
          !
        </p>

        <div className="mt-6 space-y-4 text-white">
          <p>
            Empreender é mais do que ter uma ideia. É sobre transformar essa
            ideia em um negócio próspero.
          </p>
          <p>
            Se você está pronto para aumentar o faturamento do seu negócio em
            até 30 dias e finalmente destravar todo o potencial que você já tem,
            este é o momento para dar o próximo passo.
          </p>
          <p>
            Com 5 encontros individuais totalmente personalizados, vamos
            trabalhar juntos para planejar, executar e alavancar seu negócio de
            forma eficaz.
          </p>
        </div>

        <div className="flex mt-10 justify-center ">
          <PrimaryButton asChild>
            <Link href={href} aria-label="Garantir minha vaga">
              Garantir minha vaga
            </Link>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
