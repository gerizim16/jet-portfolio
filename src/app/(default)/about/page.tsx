import { loadQuery } from "@root/sanity/lib/store";
import { groq, SanityDocument } from "next-sanity";

import About from "./About";

export default async function Page() {
  const initial = await loadQuery<SanityDocument>(
    groq`*[_type == "about"][0]{content, 'image': image.asset->{...}}`,
  );

  const { data } = initial;

  return <About data={data} />;
}
