import "./globals.css";

import type { Metadata } from "next";
import { Inter, WindSong } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const windsong = WindSong({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-windsong",
});

export const metadata: Metadata = {
  title: "Jet Morano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${inter.variable} ${windsong.variable} bg-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
