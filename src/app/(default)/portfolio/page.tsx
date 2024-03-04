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
    <Carousel className="h-screen bg-black select-none">
      {images.map((image, idx) => (
        <Entrance className="h-full" key={image._id}>
          <SanityImage
            key={image._id}
            className="h-full select-none w-auto max-w-[100vw] object-contain"
            image={image}
            draggable={false}
            priority={idx <= 2}
            fit
          />
        </Entrance>
      ))}
    </Carousel>
  );
}
