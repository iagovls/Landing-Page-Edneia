"use client";
import Link from "next/link";
import Image from "next/image";
import { CTA_URL } from "@/lib/constants";
import PrimaryButton from "./ui/primary-button";

export default function HeroMobile() {
  const href = CTA_URL !== "#" ? CTA_URL : `https://wa.me/5573998181724?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20individual`;

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
        <p className="mt-3 text-sm text-white text-center">Desenvolvendo pessoas, fortalecendo empresas e transformando histórias.</p>

        <p className="mt-6 text-xl text-white text-center">
          Você trabalha muito pelo seu negócio, mas sente que os resultados não acompanham seu esforço?
        </p>

        <div className="mt-6 space-y-4 text-sm text-white">
          <p>
            Você não precisa continuar resolvendo tudo sozinha. Clareza, organização e estratégia começam com um plano que considera a sua realidade.</p>
          <p>
            Unimos desenvolvimento pessoal, diagnóstico do negócio e ações práticas para você tomar decisões com mais segurança.</p>
          <p>
            Com 5 encontros individuais totalmente personalizados, vamos
            trabalhar juntas para planejar, executar e alavancar seu negócio de
            forma eficaz.
          </p>
        </div>

        <div className="flex mt-10 justify-center ">
          <PrimaryButton asChild>
            <Link href={href} aria-label="Quero conversar sobre minha mentoria">
              Garantir minha vaga
            </Link>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
