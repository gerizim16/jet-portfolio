"use client";

import { client } from "@root/sanity/lib/client";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export default function SanityImage({
  image,
  className,
  quality,
  draggable,
}: {
  image: SanityAsset;
  className?: string;
  quality?: number | `${number}`;
  draggable?: boolean;
}) {
  const imageProps = useNextSanityImage(client, image);

  return (
    <Image
      {...imageProps}
      className={className}
      quality={quality}
      alt={`path:${image.path}`}
      placeholder="blur"
      blurDataURL={image.metadata.lqip}
      draggable={draggable}
    />
  );
}
