"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
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
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Nav />
        {children}
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
