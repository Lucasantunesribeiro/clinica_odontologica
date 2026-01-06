import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { DentistJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} - ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.name}`
  },
  description: BUSINESS.description,
  keywords: ["clínica odontológica", "dentista", "implante dentário", "clareamento dental", "ortodontia", "aparelho ortodôntico", "Rio de Janeiro"],
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} - ${BUSINESS.tagline}`,
    description: BUSINESS.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} - ${BUSINESS.tagline}`,
    description: BUSINESS.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <DentistJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CTAWhatsApp />
      </body>
    </html>
  );
}
