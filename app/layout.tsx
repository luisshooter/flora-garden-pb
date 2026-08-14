import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

import { DesignContract } from "@/components/design-contract";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const title = "Flora Garden | Floricultura e Paisagismo em Pato Branco";
const description =
  "Buquês feitos à mão, plantas selecionadas e jardins projetados com calma. Peça pelo WhatsApp ou visite a loja na Av. Tupi, em Pato Branco - PR.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/images/hero-orchids.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <DesignContract />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
