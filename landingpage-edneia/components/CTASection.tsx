import Link from "next/link";
import { CTA_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function CTASection() {
  const href = CTA_URL !== "#" ? CTA_URL : `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold">Garanta Sua Vaga Agora!</h2>
        <p className="mt-4 text-zinc-700">As vagas são limitadas para garantir que cada cliente tenha a atenção exclusiva que merece. Não perca a chance de transformar o seu negócio em até 30 dias.</p>
        <div className="mt-8">
          <Link href={href} aria-label="Garantir minha vaga" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-base sm:text-lg font-medium">
            GARANTIR MINHA VAGA
          </Link>
        </div>
      </div>
    </section>
  );
}