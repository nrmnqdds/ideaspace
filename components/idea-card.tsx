import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type TIdea = {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  authorId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const IdeaCard = (props: TIdea) => {
  return (
    <Link href={`/idea/${props.id}`}>
      <Card className="w-full h-full hover:bg-gradient-to-br hover:from-background hover:to-primary-foreground hover:from-60% hover:border-foreground/50 transition-colors duration-100 flex flex-col justify-between">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-x-2">
          {props.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-zinc-500/10 border border-zinc-500 rounded-full text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </CardContent>
        <CardFooter>
          <span className="text-sm text-gray-500">by {props.author}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default IdeaCard;
