import { SanityDocument, groq } from "next-sanity";
import { loadQuery } from "@root/sanity/lib/store";
import SanityImage from "@/common/components/SanityImage";

export default async function Page() {
  const initial = await loadQuery<SanityDocument>(
    groq`*[_type == "home"][0].image.asset->{...}`,
  );

  return (
    <SanityImage
      className="h-screen w-screen object-cover"
      image={initial.data}
      draggable={false}
      priority
    />
  );
}
