import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IdeaCardProps {
  title: string;
  description: string;
  tags: string[];
  author: string;
}

const IdeaCard = ({ title, description, tags, author }: IdeaCardProps) => {
  return <div>IdeaCard</div>;
};

export default IdeaCard;
