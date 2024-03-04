import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-20 h-12 bg-opacity-30 bg-gradient-to-t from-black/40 to-transparent px-3 sm:h-20 sm:px-8">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center gap-4">
        <div className="grow" />
        <div className="relative flex gap-4 font-medium *:pointer-events-auto sm:gap-10 md:gap-14">
          <a
            href="https://www.instagram.com/jet_morano_photography/"
            target="_blank"
            className="text-xs sm:text-sm"
          >
            <AiOutlineInstagram className="inline-block size-5" />{" "}
            @jet_morano_photography
          </a>
        </div>
      </div>
    </div>
  );
}
