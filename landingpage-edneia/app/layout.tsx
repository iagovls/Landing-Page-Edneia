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
  title: "Mentoria Individual | A Marca É Você®",
  description:
    "Mentoria personalizada para mulheres empreendedoras: clareza, organização, posicionamento e estratégia para fortalecer você e seu negócio.",
  alternates: { canonical: "https://landing-page-edneia.vercel.app/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mentoria Individual | A Marca É Você®",
    description:
      "Mentoria personalizada para mulheres empreendedoras: clareza, organização, posicionamento e estratégia para fortalecer você e seu negócio.",
    url: "https://landing-page-edneia.vercel.app/",
    type: "website",
    images: [
      {
        url: "/mentoria individual logo.png",
        width: 1268,
        height: 281,
        alt: "Mentoria Individual - A Marca é Você",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoria Individual | A Marca É Você®",
    description:
      "Mentoria personalizada para mulheres empreendedoras: clareza, organização, posicionamento e estratégia para fortalecer você e seu negócio.",
    images: ["/mentoria individual logo.png"],
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
