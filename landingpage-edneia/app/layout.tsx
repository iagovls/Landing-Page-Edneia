import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mentoria Individual | A Marca é Você",
  description:
    "Aumente seu faturamento em até 30 dias com 5 encontros individuais, plano estratégico e suporte contínuo.",
  alternates: { canonical: "https://amarcaevoce.com.br" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mentoria Individual | A Marca é Você",
    description:
      "Aumente seu faturamento em até 30 dias com 5 encontros individuais, plano estratégico e suporte contínuo.",
    url: "https://amarcaevoce.com.br",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoria Individual | A Marca é Você",
    description:
      "Aumente seu faturamento em até 30 dias com 5 encontros individuais, plano estratégico e suporte contínuo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} antialiased `}>
        {children}
              <Footer />

      </body>
    </html>
  );
}
