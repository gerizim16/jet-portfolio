"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

export default function Entrance({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </m.div>
  );
}
