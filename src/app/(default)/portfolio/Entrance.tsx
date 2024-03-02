"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

export default function Entrance({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </m.div>
  );
}
