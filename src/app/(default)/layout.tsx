"use client";

import { LazyMotion } from "framer-motion";
import Nav from "../components/Nav";
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
        {children}
      </LazyMotion>
    </div>
  );
}
