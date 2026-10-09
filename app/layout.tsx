import type { Metadata } from "next";
import "./globals.css";
import { cormorantGaramond, greatVibes, vazirmatn } from "./fonts";
import HeroParticleEngine from "@/components/sections/Hero/HeroParticleEngine";
import { siteUrl } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Garfilas | Premium Lasagna",
    template: "%s | Garfilas",
  },
  description:
    "Discover Garfilas, an Italian-inspired lasagna experience made for memorable meals.",
  applicationName: "Garfilas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Garfilas",
    title: "Garfilas | Premium Lasagna",
    description:
      "Discover Garfilas, an Italian-inspired lasagna experience made for memorable meals.",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary",
    title: "Garfilas | Premium Lasagna",
    description:
      "Discover Garfilas, an Italian-inspired lasagna experience made for memorable meals.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={[cormorantGaramond.variable, greatVibes.variable, vazirmatn.variable].join(" ")}>
        <HeroParticleEngine />
        {children}
      </body>
    </html>
  );
}
