import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const IdeaCard = ({ id, title, description, tags, author }: TIdea) => {
	return (
		<Link href={`/idea/${id}`}>
			<Card className="w-full hover:bg-gradient-to-br hover:from-background hover:to-primary-foreground hover:from-60% hover:border-foreground/50 transition-colors duration-100">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent className="space-x-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="px-2 py-1 text-sm bg-zinc-500/10 border border-zinc-500 rounded-full text-zinc-500"
						>
							{tag}
						</span>
					))}
				</CardContent>
				<CardFooter>
					<span className="text-sm text-gray-500">by {author}</span>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default IdeaCard;
