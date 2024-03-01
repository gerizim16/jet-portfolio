"use client";

import { AnimatePresence, LazyMotion, domMax } from "framer-motion";
import Nav from "../components/Nav";
import { m } from "framer-motion";
import { usePathname } from "next/navigation";

const loadFeatures = () => import("./features").then((res) => res.default);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="overflow-clip">
      <LazyMotion features={loadFeatures} strict>
        <Nav />
        <AnimatePresence initial={false}>
          <m.div
            key={pathname}
            initial={{ x: "-70vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // exit={{ y: "100vh" }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {children}
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
