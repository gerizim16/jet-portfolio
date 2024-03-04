"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

export default function Entrance({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={"overflow-clip " + className}
      initial={{ opacity: 0, scale: 0.7, borderRadius: 500 }}
      whileInView={{ opacity: 1, scale: 1, borderRadius: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </m.div>
  );
}
