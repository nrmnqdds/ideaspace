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

const Page = ({ params }: { params: { id: string } }) => {
  const { data, isFetching } = useQuery({
    queryKey: ["idea", params.id],
    queryFn: async () => await GetIdeaById(params.id),
  });

  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-5 pt-24 sm:px-10 lg:px-10 bg-background">
      <Card className="w-full lg:w-1/2 z-10">
        <CardHeader>
          <CardTitle>{data?.title}</CardTitle>
          <CardDescription>{data?.description}</CardDescription>
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
          <CardDescription>
            <div className="flex flex-row items-center justify-center">
              <Avatar>
                <AvatarImage
                  src={data?.author.image as string}
                  alt={data?.author.name as string}
                />
                <AvatarFallback>
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start justify-center">
                <span className="ml-2">{data?.author.name}</span>
                <span className="ml-2">{data?.author.email}</span>
              </div>
            </div>
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Page;
