"use client";

import { client } from "@root/sanity/lib/client";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

export default function SanityImage({
  image,
  width,
  className,
  quality,
  draggable,
  priority,
  fit,
  sizes,
}: {
  image: SanityAsset;
  width?: number | `${number}`;
  className?: string;
  quality?: number | `${number}`;
  draggable?: boolean;
  priority?: boolean;
  fit?: boolean;
  sizes?: string;
}) {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: (imageUrlBuilder, options) => {
      return imageUrlBuilder
        .width(
          fit
            ? Math.round(Math.min(
                options.originalImageDimensions.width,
                1440 *
                  (options.originalImageDimensions.width /
                    options.originalImageDimensions.height),
              ))
            : options.width ||
                Math.min(options.originalImageDimensions.width, 2560),
        )
        .quality(options.quality || 80)
        .fit("clip");
    },
  });

  return (
    <Image
      {...imageProps}
      alt={`path:${image.path}`}
      placeholder="blur"
      blurDataURL={image.metadata.lqip}
      {...(width ? { width } : {})}
      className={className}
      quality={quality}
      draggable={draggable}
      priority={priority}
      sizes={sizes}
    />
  );
}
