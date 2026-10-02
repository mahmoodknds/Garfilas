import { Cormorant_Garamond, Great_Vibes, Noto_Kufi_Arabic, Vazirmatn } from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
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

export const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["500", "600"],
  style: "normal",
  display: "swap",
  variable: "--font-noto-kufi-arabic",
  preload: true,
});

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-vazirmatn",
  preload: true,
});
