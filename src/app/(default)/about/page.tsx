import { loadQuery } from "@root/sanity/lib/store";
import { groq, SanityDocument } from "next-sanity";

import About from "./About";

export const revalidate = 60;

export default async function Page() {
  const { data } = await loadQuery<SanityDocument>(
    groq`*[_type == "about"][0]{content, 'image': image.asset->{...}}`,
  );

  return <About data={data} />;
}
