"use client";

import { GetIdeas } from "@/actions/idea-actions";
import IdeaCard from "@/components/idea-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const IdeaList = () => {
  const data = useQuery({
    queryKey: ["ideas"],
    queryFn: async () => await GetIdeas(),
  });

  return (
    <section className="mt-24 z-10 w-full space-y-5 px-60">
      <div className="flex items-center justify-end">
        <Link href="/idea/create">
          <Button className="font-semibold">Create Idea</Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {data?.isFetching ? (
          <>
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="w-full h-36" />
            ))}
          </>
        ) : (
          <>
            {data?.data?.map((idea, i) => (
              <IdeaCard key={i} {...idea} author={idea.author.name as string} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default IdeaList;
