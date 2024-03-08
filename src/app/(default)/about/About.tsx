"use client";

import { PortableText } from "@portabletext/react";
import { m } from "framer-motion";
import { SanityDocument } from "next-sanity";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import SanityImage from "@/common/components/SanityImage";

export default function About({ data }: { data: SanityDocument }) {
  return (
    <div className="grid min-h-screen items-center lg:grid-cols-2">
      <div className=" px-10 pb-6 pt-16 text-sm sm:mr-4 sm:pt-28 md:pt-32 lg:max-w-2xl lg:justify-self-end lg:text-xl">
        <m.p
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 text-4xl sm:text-7xl lg:text-8xl"
        >
          Moving.
        </m.p>
        <m.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="space-y-6 lg:space-y-10"
        >
          <PortableText value={data["content"]} />
          <div>
            <a
              href="https://www.instagram.com/jet_morano_photography/"
              target="_blank"
              className="block text-base"
            >
              <AiOutlineInstagram className="inline-block size-5" />{" "}
              @jet_morano_photography
            </a>
            <a
              href="mailto:josepablomorano28@gmail.com?subject=Collaboration"
              target="_top"
              className="mt-2 block text-base"
            >
              <AiOutlineMail className="inline-block size-5" />{" "}
              info@jetmorano.com
            </a>
          </div>
        </m.div>
      </div>
      <div className="h-full overflow-hidden">
        <m.div
          className="h-full"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
        >
          <SanityImage
            image={data["image"]}
            priority
            className="h-full max-h-screen object-cover object-right-bottom"
            fit
          />
        </m.div>
      </div>
    </div>
  );
}
