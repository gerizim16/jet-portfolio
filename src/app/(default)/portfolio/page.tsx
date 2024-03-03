import { loadQuery } from "@root/sanity/lib/store";
import { groq,SanityDocument } from "next-sanity";

import SanityImage from "@/common/components/SanityImage";

import Carousel from "../../components/Carousel";
import Entrance from "./Entrance";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    groq`*[_type == "portfolio"].images[].asset->{...}`,
  );

  const images = initial.data;

  return (
    <Carousel className="h-screen bg-black">
      {images.map((image, idx) => (
        <Entrance key={image._id}>
          <SanityImage
            className="max-w-[100vw] max-h-[100vh] h-auto w-auto"
            image={image}
            draggable={false}
            priority={idx <= 1}
            fit
          />
        </Entrance>
      ))}
    </Carousel>
  );
}
