"use server";

import { GetIdeaById } from "@/actions/idea-actions";
import { Metadata } from "next";
import IdeaCard from "./IdeaCard";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata | undefined> {
  const data = await GetIdeaById(params.id);
  const tags = data?.tags.join(",");
  const ogImage = `https://ideaspace.nrmnqdds.com/og?title=${data?.title}&description=${data?.description}&authorName=${data?.author.name}&authorImage=${data?.author.image}&authorEmail=${data?.author.email}&tags=${tags}`;
  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      title: data?.title,
      description: data?.description,
      type: "website",
      url: `https://ideaspace.nrmnqdds.com/idea/${params.id}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.description,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <IdeaCard id={params.id} />
    </>
  );
};

export default Page;
