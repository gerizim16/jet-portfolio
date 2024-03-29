import { loadQuery } from "@root/sanity/lib/store";
import { groq, SanityDocument } from "next-sanity";

import SanityImage from "@/common/components/SanityImage";

import Entrance from "./Entrance";

export const revalidate = 60;

export default async function Page() {
  const { data: image } = await loadQuery<SanityDocument>(
    groq`*[_type == "home"][0].image.asset->{...}`,
  );

  // return (
  //   <video
  //     autoPlay
  //     muted
  //     loop
  //     id="myVideo"
  //     className="h-screen w-screen object-cover"
  //   >
  //     <source
  //       src="/pexels_videos_1918465 (2160p) (compressed).mp4"
  //       type="video/mp4"
  //     />
  //   </video>
  // );

  return (
    <Entrance>
      <SanityImage
        className="h-screen w-screen object-cover object-[center_60%]"
        image={image}
        draggable={false}
        sizes="100vw"
        quality={100}
        priority
        fit
      />
    </Entrance>
  );
}
