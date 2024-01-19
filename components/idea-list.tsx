"use client";

import { GetAllIdeas } from "@/actions/idea-actions";
import { GetSession } from "@/actions/session-action";
import IdeaCard from "@/components/idea-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const IdeaList = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["ideas"],
    queryFn: async () => await GetAllIdeas(),
    retry: true,
  });

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => await GetSession(),
    retry: true,
  });

  const router = useRouter();

  return (
    <section className="mt-24 z-10 w-full space-y-5 px-2 lg:px-60">
      <div className="flex items-center justify-end gap-5">
        <div>
          <h1>Total ideas:</h1>
          <h1 className="font-semibold text-2xl">
            {isFetching ? <Skeleton className="w-1/2 h-10" /> : data?.length}
          </h1>
        </div>
        <Button
          className="font-semibold"
          onClick={async () =>
            session ? router.push("/idea/create") : await signIn("google")
          }
        >
          Create Idea
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {isFetching ? (
          <>
            {[...Array(12)].map((_, i) => (
              <Skeleton key={i} className="w-full h-36" />
            ))}
          </>
        ) : (
          <>
            {data?.toReversed().map((idea, i) => (
              <IdeaCard key={i} {...idea} author={idea.author.name as string} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default IdeaList;
