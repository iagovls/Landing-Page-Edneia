import type { Metadata } from "next";

const titulo = "Rede Elas com Propósito | Mulheres que crescem juntas";
const descricao = "Mulheres que se conectam, compartilham experiências e crescem juntas. Faça parte gratuitamente da Rede Elas com Propósito.";
const url = "https://landing-page-edneia.vercel.app/rede-elas";
const imagem = "https://landing-page-edneia.vercel.app/rede-elas/opengraph-image";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: url },
  openGraph: {
    title: titulo,
    description: descricao,
    url,
    siteName: "Rede Elas com Propósito",
    locale: "pt_BR",
    type: "website",
    images: [{ url: imagem, width: 600, height: 315, alt: "Mulheres da Rede Elas com Propósito reunidas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
    images: [imagem],
  },
};

export default function RedeElasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
