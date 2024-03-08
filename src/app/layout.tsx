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
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE as string),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${inter.variable} ${windsong.variable} min-h-screen min-w-full bg-black font-sans text-white`}
      >
        {children}
      </body>
    </html>
  );
}
