import { SanityDocument, groq } from "next-sanity";

import { loadQuery } from "@root/sanity/lib/store";
import Carousel from "../../components/Carousel";
import SanityImage from "@/common/components/SanityImage";
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
            className="h-auto max-h-full w-auto max-w-fit"
            image={image}
            draggable={false}
            priority={idx <= 1}
          />
        </Entrance>
      ))}
    </Carousel>
  );
}
