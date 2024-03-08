import { imageBuilder } from "@root/sanity/lib/image";
import { loadQuery } from "@root/sanity/lib/store";
import { ImageResponse } from "next/og";
import { groq, SanityDocument } from "next-sanity";

// export const runtime = "edge";

export const alt = "Jet Morano";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  const { data: image } = await loadQuery<SanityDocument>(
    groq`*[_type == "home"][0].image.asset->{...}`,
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={alt}
          src={imageBuilder
            .image(image)
            .auto("format")
            .fit("clip")
            .height(size.height)
            .width(size.width)
            .url()}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
