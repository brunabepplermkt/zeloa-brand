import type { Metadata } from "next";
import { Schibsted_Grotesk, Instrument_Serif, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { brand } from "@/content/site";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} · Presença digital para hospedagens`,
  description: `${brand.positioning} ${brand.signature}`,
  openGraph: {
    title: `${brand.name} · Presença digital para hospedagens`,
    description: `${brand.positioning} ${brand.signature}`,
    url: brand.url,
    siteName: brand.name,
    locale: brand.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${schibsted.variable} ${instrument.variable} ${geistMono.variable}`}
    >
      <body className="antialiased selection:bg-noite selection:text-nevoa">
        <RevealObserver />
        <Header />
        {children}
        <MobileCtaBar />
      </body>
    </html>
  );
}
