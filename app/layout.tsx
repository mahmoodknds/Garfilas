import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}