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
  },
}

export default function PacoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
