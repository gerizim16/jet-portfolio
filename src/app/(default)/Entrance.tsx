"use client";

import { m } from "framer-motion";

export default function Entrance({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </m.div>
  );
}