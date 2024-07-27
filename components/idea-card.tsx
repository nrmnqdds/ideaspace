import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
import { Rocket } from "lucide-react";

type TIdea = {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  authorId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
};

type StatusBadgeProps = {
  status: TIdea["status"];
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
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
      className={`inline-flex items-center absolute top-[-2px] right-3 rounded-b-lg ${bgColour} px-3 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
    >
      <span className="flex items-center">
        {displayText}
        <Rocket className="ml-1 w-3 h-3" />
      </span>
    </div>
  );
};

const IdeaCard = (props: TIdea) => {
  return (
    <Link href={`/idea/${props.id}`}>
      <Card className="relative group w-full h-full hover:bg-primary-foreground hover:border-foreground/50 transition-colors duration-100 flex flex-col justify-between">
        <StatusBadge status={props.status} />
        {/* <span className="relative bottom-5 right-5 overflow-hidden"> */}
        <ImArrowUpRight2 className=" text-2xl text-gray-500 text-dim absolute right-5 bottom-5 h-5 w-5 opacity-0 transition-[opacity_transform] duration-0 group-hover:translate-x-2 group-hover:opacity-100 group-hover:duration-300" />
        {/* </span> */}
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {props.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap items-center justify-start gap-2">
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
          <span className="relative overflow-hidden text-sm text-gray-500">
            <p className="text-dim transition-transform group-hover:translate-y-6">
              by {props.author}
            </p>
            <p className="text-blue-500 dark:text-primary-dark absolute -bottom-6 whitespace-nowrap transition-transform group-hover:-translate-y-6 group-hover:duration-300">
              Click to explore
            </p>
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default IdeaCard;
