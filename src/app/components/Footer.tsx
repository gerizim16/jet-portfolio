"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function MotionLink({ href, children }: { href: string; children: ReactNode }) {
  const active = usePathname() === href;

  return (
    <Link className="relative" href={href}>
      {children}
      {active && (
        <m.div
          className="absolute h-0.5 w-full bg-white"
          layoutId="activeUnderline"
        />
      )}
    </Link>
  );
}

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 h-16 bg-opacity-30 bg-gradient-to-b from-black/40 to-transparent px-3 sm:h-32 sm:px-8">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center gap-4">
        <Link
          href="/"
          className="whitespace-nowrap font-handwriting text-2xl sm:text-6xl"
        >
          Jet morano
        </Link>
        <div className="grow" />
        <div className="relative flex gap-4 font-medium sm:gap-10 md:gap-14">
          <MotionLink href="/">Home</MotionLink>
          <MotionLink href="/portfolio">Portfolio</MotionLink>
          <MotionLink href="/about">About</MotionLink>
          <a
            href="https://www.instagram.com/jet_morano_photography/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}
