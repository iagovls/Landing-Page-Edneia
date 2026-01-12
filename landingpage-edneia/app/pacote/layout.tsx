import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Pacotes | A Marca é Você",
  description: "Conheça nossos pacotes para fortalecer sua marca pessoal.",

  openGraph: {
    title: "Pacotes | A Marca é Você",
    description: "Conheça nossos pacotes para fortalecer sua marca pessoal.",
    url: "https://amarcaevoce.com.br/pacote",
    siteName: "A Marca é Você",
    
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "\logo marca é você a4_retrato.png",
        width: 724,
        height: 1024,
        alt: "Pacotes - A Marca é Você",
      },
    ],
  },
}

export default function PacoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
