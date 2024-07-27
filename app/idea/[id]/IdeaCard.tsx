"use client";

import { GetIdeaById } from "@/actions/idea-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { Rocket } from "lucide-react";

const StatusBadge = ({ status }: { status: string | undefined }) => {
  let displayText = status || "";
  let bgColour = "bg-gray-500";

  switch (status) {
    case "FRESH_IDEA":
      displayText = "Fresh Idea";
      bgColour = "bg-sky-500";
      break;
    case "ONGOING_WIP":
      displayText = "WIP";
      bgColour = "bg-amber-500";
      break;
    case "BUILT":
      displayText = "Built";
      bgColour = "bg-emerald-500";
      break;
  }

  return (
    <div
      className={`absolute top-[-2px] right-5 rounded-b-lg ${bgColour} px-3 py-1 text-white text-xs sm:text-lg`}
    >
      <span className="flex items-center">
        {displayText}
        <Rocket className="ml-1 w-3 h-3" />
      </span>
    </div>
  );
};

export const IdeaCard = ({ id }: { id: string }) => {
  const { data, isFetching } = useQuery({
    queryKey: ["idea", id],
    queryFn: async () => await GetIdeaById(id),
  });

  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-5 pt-24 sm:px-10 lg:px-10">
      <Card className="relative w-full lg:w-1/2 z-10">
        {!isFetching && data?.status && <StatusBadge status={data.status} />}
        <CardHeader>
          <CardTitle>
            {!isFetching ? data?.title : <Skeleton className="w-1/2 h-10" />}
          </CardTitle>
          {!isFetching ? (
            <CardDescription>{data?.description}</CardDescription>
          ) : (
            <Skeleton className="w-full h-10" />
          )}
        </CardHeader>
        <CardContent>
          <CardDescription className="flex flex-row flex-wrap gap-2">
            {data?.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-sm bg-zinc-500/10 border border-zinc-500 rounded-full text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col items-start justify-center gap-5">
          <h1 className="text-sm text-gray-400">Idea by:</h1>
          <div className="flex flex-row items-center justify-center">
            {!isFetching ? (
              <Avatar>
                <AvatarImage
                  src={data?.author.image as string}
                  alt={data?.author.name as string}
                />
                <AvatarFallback>
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
              </Avatar>
            ) : (
              <Skeleton className="w-10 h-10" />
            )}
            <div className="flex flex-col items-start justify-center">
              {!isFetching ? (
                <CardDescription className="flex flex-col items-start justify-center">
                  <span className="ml-2">{data?.author.name}</span>
                  <span className="ml-2">
                    {`${data?.author.email?.split("@")[0].slice(0, -4)}****${
                      data?.author.email?.split("@")[1]
                    }`}
                  </span>
                </CardDescription>
              ) : (
                <>
                  <Skeleton className="w-20 h-5 ml-2 mb-2" />
                  <Skeleton className="w-20 h-5 ml-2" />
                </>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default IdeaCard;
