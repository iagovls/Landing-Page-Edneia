import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Pacotes | A Marca é Você",
}

export default function PacoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
