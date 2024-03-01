"use client";

import { m } from "framer-motion";

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.7 },
};

export default function Entrance({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <m.div
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </m.div>
  );
}
