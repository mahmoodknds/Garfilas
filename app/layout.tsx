import type { Metadata } from "next";
import "./globals.css";
import { cormorantGaramond, greatVibes, vazirmatn } from "./fonts";
import HeroParticleEngine from "@/components/sections/Hero/HeroParticleEngine";

export const metadata: Metadata = {
  title: "Garfilas | Premium Lasagna",
  description: "Garfilas premium Italian inspired lasagna experience",
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
