import { SanityDocument, groq } from "next-sanity";

import { loadQuery } from "@root/sanity/lib/store";
import Carousel from "../components/Carousel";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    groq`*[_type == "portfolio"].images[].asset->{...}`,
  );

  return <Carousel className="h-screen bg-black" images={initial.data} />;
}
