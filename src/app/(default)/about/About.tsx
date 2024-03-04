"use client";

import { PortableText } from "@portabletext/react";
import { m } from "framer-motion";
import { SanityDocument } from "next-sanity";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import SanityImage from "@/common/components/SanityImage";

export default function About({ data }: { data: SanityDocument }) {
  return (
    <div className="grid min-h-svh items-center lg:grid-cols-2">
      <div className="space-y-6 px-10 pb-6 pt-16 text-sm sm:space-y-10 sm:pt-28 md:pt-32 lg:max-w-2xl lg:justify-self-end lg:text-xl">
        <div>
          <p className="mb-3 text-4xl sm:text-7xl lg:text-8xl">Moving.</p>
          <p className="mb-10">
            No word would be better suited to describe Jet as a photographer.
          </p>
        </div>
        <PortableText value={data["content"]} />
        <div>
          <p className="mb-4">
            Join Jet in his journey to telling more stories. For inquiries and
            collaborations, you may contact him through
          </p>
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
            josepablomorano28@gmail.com
          </a>
        </div>
      </div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <SanityImage
          image={data["image"]}
          priority
          className="h-full max-h-svh object-cover object-right-bottom"
        />
      </m.div>
    </div>
  );
}
