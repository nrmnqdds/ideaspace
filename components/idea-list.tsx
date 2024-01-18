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
  });

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => await GetSession(),
  });

  const router = useRouter();

  return (
    <section className="mt-24 z-10 w-full space-y-5 px-60">
      <div className="flex items-center justify-end">
        <Button
          className="font-semibold"
          onClick={async () =>
            session ? router.push("/idea/create") : await signIn("google")
          }
        >
          Create Idea
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {isFetching ? (
          <>
            {[...Array(6)].map((_, i) => (
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
