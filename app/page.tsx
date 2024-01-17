import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-24 bg-background relative">
      <Image
        src="/bg.svg"
        alt="background"
        fill
        className="absolute w-full h-full dark:invert z-0 pointer-events-none opacity-50 dark:opacity-30"
      />

      <ThemeSwitcher className="fixed top-4 right-4" />

      <header className="flex flex-col items-center justify-center z-10 text-foreground">
        <h1 className="font-bold text-8xl">IdeaSpace.</h1>
        <p className="text-4xl font-geistmono">House of ideas.</p>
      </header>

      <section className="flex flex-col items-center justify-center z-10 mt-24 w-full">
        <p className="text-2xl font-geistmono">Coming soon...</p>
      </section>
    </main>
  );
}
