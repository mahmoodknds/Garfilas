import type { Metadata } from "next";
import "./globals.css";
import { cormorantGaramond, greatVibes, notoNaskhArabic, vazirmatn } from "./fonts";
import HeroParticleEngine from "@/components/sections/Hero/HeroParticleEngine";
import { siteUrl } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Garfilaz | Premium Lasagna",
    template: "%s | Garfilaz",
  },
  description:
    "Discover Garfilaz, an Italian-inspired lasagna experience made for memorable meals.",
  applicationName: "Garfilaz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Garfilaz",
    title: "Garfilaz | Premium Lasagna",
    description:
      "Discover Garfilaz, an Italian-inspired lasagna experience made for memorable meals.",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary",
    title: "Garfilaz | Premium Lasagna",
    description:
      "Discover Garfilaz, an Italian-inspired lasagna experience made for memorable meals.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={[cormorantGaramond.variable, greatVibes.variable, notoNaskhArabic.variable, vazirmatn.variable].join(" ")}>
        <HeroParticleEngine />
        {children}
      </body>
    </html>
  );
}
