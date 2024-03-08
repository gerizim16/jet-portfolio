import { loadQuery } from "@root/sanity/lib/store";
import { groq, SanityDocument } from "next-sanity";

import SanityImage from "@/common/components/SanityImage";

import Carousel from "../../components/Carousel";
import Entrance from "./Entrance";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    groq`*[_type == "portfolio"].images[].asset->{...}`,
  );

  const images = initial.data;

  return (
    <Carousel className="h-screen select-none bg-black">
      {images.map((image, idx) => {
        if (image == null) return null;
        return (
          <Entrance className="h-full" key={image._id}>
            <SanityImage
              className="h-full w-auto max-w-[100vw] select-none object-contain sm:max-w-none"
              image={image}
              draggable={false}
              priority={idx <= 2}
              fit
            />
          </Entrance>
        );
      })}
    </Carousel>
  );
}
