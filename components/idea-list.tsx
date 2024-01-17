import IdeaCard from "@/components/idea-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fakeData = [
  {
    title: "First title",
    description: "First description",
    tags: ["tag1", "tag2"],
    author: "First author",
  },
  {
    title: "Second title",
    description: "Second description",
    tags: ["tag1", "tag2"],
    author: "Second author",
  },
  {
    title: "Third title",
    description: "Third description",
    tags: ["tag1", "tag2"],
    author: "Third author",
  },
];

const IdeaList = () => {
  return (
    <section className="mt-24 z-10 w-full space-y-5 px-60">
      <div className="flex items-center justify-end">
        <Link href="/idea/create">
          <Button className="font-semibold">Create Idea</Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {fakeData.map((idea, i) => (
          <IdeaCard key={i} {...idea} />
        ))}
      </div>
    </section>
  );
};

export default IdeaList;
