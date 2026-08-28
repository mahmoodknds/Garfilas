import { Cormorant_Garamond, Great_Vibes } from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "300",
  style: "normal",
  display: "swap",
  variable: "--font-cormorant-garamond",
  preload: true,
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-great-vibes",
  preload: true,
});
