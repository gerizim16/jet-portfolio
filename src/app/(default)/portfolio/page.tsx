import { SanityDocument, groq } from "next-sanity";

import { loadQuery } from "@root/sanity/lib/store";
import Carousel from "../../components/Carousel";
import SanityImage from "@/common/components/SanityImage";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    groq`*[_type == "portfolio"].images[].asset->{...}`,
  );

  const images = initial.data;

  return (
    <Carousel className="h-screen bg-black">
      {images.map((image) => (
        <SanityImage
          className="h-auto max-h-full w-auto max-w-fit"
          key={image._id}
          image={image}
          draggable={false}
        />
      ))}
    </Carousel>
  );
}
