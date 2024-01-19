import IdeaList from "@/components/idea-list";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start px-5 pt-24 sm:px-10 lg:px-10 bg-background">
      <header className="flex flex-col items-center justify-center z-10 text-foreground">
        <h1 className="font-bold text-5xl md:text-8xl">IdeaSpace.</h1>
        <p className="text-xl md:text-4xl font-geistmono text-center">
          Got cool ideas? Dump it here!
        </p>
      </header>

      <IdeaList />
    </main>
  );
}
