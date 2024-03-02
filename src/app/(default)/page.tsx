import { loadQuery } from "@root/sanity/lib/store";
import { groq, SanityDocument } from "next-sanity";

import SanityImage from "@/common/components/SanityImage";

import Entrance from "./Entrance";

export default async function Page() {
  const initial = await loadQuery<SanityDocument>(
    groq`*[_type == "home"][0].image.asset->{...}`,
  );

  return (
    <Entrance>
      <SanityImage
        className="h-screen w-screen object-cover"
        image={initial.data}
        draggable={false}
        sizes="100vw"
        priority
      />
    </Entrance>
  );
}
