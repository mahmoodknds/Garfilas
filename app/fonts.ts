import { Cormorant_Garamond, Great_Vibes, Noto_Naskh_Arabic, Vazirmatn } from "next/font/google";

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

export const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-noto-naskh",
  preload: false,
});

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-vazirmatn",
  preload: true,
});
