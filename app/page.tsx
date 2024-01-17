import IdeaList from "@/components/idea-list";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-24 bg-background">
      <ThemeSwitcher className="fixed top-5 right-5" />

      <header className="flex flex-col items-center justify-center z-10 text-foreground">
        <h1 className="font-bold text-8xl">IdeaSpace.</h1>
        <p className="text-4xl font-geistmono">House of ideas.</p>
      </header>

      <IdeaList />
    </main>
  );
}
