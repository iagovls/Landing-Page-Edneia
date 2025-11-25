"use client";
import Link from "next/link";
import Image from "next/image";
import { CTA_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Hero() {
  const href = CTA_URL !== "#" ? CTA_URL : `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <section
      className="relative px-6 py-0 bg-cover bg-center h-dvh flex flex-col justify-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      <div className="absolute inset-0 h-full bg-gradient-to-r from-black/85 to-black/60" />
      <div className="relative max-w-6xl h-full mx-auto flex gap-8 items-center justify-center">
        
        <div className="w-1/2">
          
          <Image
            src="/mentoria%20individual%20logo%20branca.png"
            alt="A Marca é Você"
            width={260}
            height={80}
            priority
          />
          <p className="mt-6 text-xl lg:text-2xl text-white">
            Transforme Seu Negócio <span className="font-bold text-[#C73638] whitespace-nowrap">em 30 Dias</span>: <span className="font-bold">Aumente Seu Faturamento e Destrave Seu Potencial</span>!
          </p>
          <div className="mt-6 space-y-4 text-sm text-white">
            <p>Empreender é mais do que ter uma ideia. É sobre transformar essa ideia em um negócio próspero.</p>
            <p>Se você está pronto para aumentar o faturamento do seu negócio em até 30 dias e finalmente destravar todo o potencial que você já tem, este é o momento para dar o próximo passo.</p>
            <p>Com 5 encontros individuais totalmente personalizados, vamos trabalhar juntos para planejar, executar e alavancar seu negócio de forma eficaz.</p>
          </div>
          <div className="mt-10">
            <Link href={href} aria-label="Garantir minha vaga" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#C53537] to-[#9E3134] text-white px-14 py-8 hover:cursor-pointer text-lg sm:text-xl font-bold transition-transform transition-shadow hover:scale-105 hover:shadow-[0_0_24px_#C73638]">
              Garantir minha vaga
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center items-end h-full w-1/2">
          <Image
            src="/hero-image.png"
            alt="Mentoria em ação"
            width={480}
            height={360}
            sizes="(min-width: 640px) 480px, 100vw"
            className="w-auto h-11/12"
            priority
          />
        </div>
      </div>
    </section>
  );
}