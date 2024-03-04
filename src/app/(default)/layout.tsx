"use client";

import { LazyMotion } from "framer-motion";
import { ReactNode } from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const loadFeatures = () => import("./features").then((res) => res.default);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <LazyMotion features={loadFeatures} strict>
        <Nav />
        {children}
        <Footer />
      </LazyMotion>
    </div>
  );
}
