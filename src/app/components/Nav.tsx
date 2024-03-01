import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 h-32 bg-opacity-30 bg-gradient-to-b from-black/40 to-transparent px-3 text-white sm:px-8">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center gap-4">
        <Link
          href="/" 
          className="font-handwriting whitespace-nowrap text-2xl sm:text-6xl"
        >
          Jet morano
        </Link>
        <div className="grow" />
        <div className="flex gap-6 font-bold sm:gap-10 md:gap-20">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
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
