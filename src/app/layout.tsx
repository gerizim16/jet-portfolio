import type { Metadata } from "next";
import { Inter, WindSong } from "next/font/google";
import "./globals.css";

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${inter.variable} ${windsong.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
