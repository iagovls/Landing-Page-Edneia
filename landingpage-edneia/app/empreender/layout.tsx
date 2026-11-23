import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentoria Individual | A Marca É Você®",
  description: "Mentoria personalizada para mulheres empreendedoras: clareza, organização, posicionamento e estratégia para fortalecer você e seu negócio.",
  alternates: { canonical: "https://landing-page-edneia.vercel.app/empreender" },
  openGraph: {
    title: "Mentoria Individual | A Marca É Você®",
    description: "Mentoria personalizada para mulheres empreendedoras com Ednéia Silva.",
    url: "https://landing-page-edneia.vercel.app/empreender",
    type: "website",
    images: [{ url: "/mentoria individual logo.png", width: 1268, height: 281, alt: "Mentoria Individual — A Marca É Você" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoria Individual | A Marca É Você®",
    description: "Clareza, organização e posicionamento para mulheres empreendedoras.",
    images: ["/mentoria individual logo.png"]
  }
};

export default function EmpreenderLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
