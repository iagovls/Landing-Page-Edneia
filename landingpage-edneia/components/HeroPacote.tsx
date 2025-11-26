"use client";
import Link from "next/link";
import Image from "next/image";
import { CTA_URL } from "@/lib/constants";
import PrimaryButton from "@/components/ui/primary-button";

export default function Hero() {
  const href = CTA_URL !== "#" ? CTA_URL : `https://wa.me/5573998181724?text=Quero%20empreender%2C%20planejar%20e%20faturar`;
  return (
    <section
      className="relative px-6 py-0 bg-cover bg-center h-dvh flex flex-col justify-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      <div className="absolute inset-0 h-full bg-gradient-to-r from-black/85 to-black/60" />
      <div className="relative max-w-6xl h-full mx-auto flex gap-8 items-center justify-center">
        <div className="w-1/2">
          <Image
            src="/a-marca-e-voce-branco.png"
            alt="A Marca é Você"
            width={260}
            height={80}
            priority
          />
          <p className="mt-6 text-xl lg:text-3xl text-white font-light">
            <span className="font-bold text-[#C73638] whitespace-nowrap">
              A Marca É Você Empreender
            </span>
            <span className="font-light whitespace-nowrap">
              : <br /> O método que vai{" "}
            </span>
            <span className="font-bold">
              organizar e aumentar o faturamento do seu negócio
            </span>
            !
          </p>
          <div className="mt-6 space-y-4 text-sm md:text-base text-white">
            <p className="">Chegou o momento de transformar seu negócio.</p> 
            
            <p className="">
              Com o método A Marca É Você Empreender, você vai aprender a organizar suas finanças e a criar um plano estratégico para aumentar seu faturamento de forma
              sustentável e assertiva.
            </p>
            
             <p className="">Pronta para começar?</p>
          </div>
          <div className="mt-10">
            <PrimaryButton asChild>
              <Link href={href} aria-label="Adquirir agora">Adquira agora</Link>
            </PrimaryButton>
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
