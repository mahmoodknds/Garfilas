import type { Metadata } from "next";
import "./globals.css";
import { cormorantGaramond, greatVibes } from "./fonts";

export const metadata: Metadata = {
  title: "Garfilas | Premium Lasagna",
  description:
    "Garfilas premium Italian inspired lasagna experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${cormorantGaramond.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
