import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/contexts/query-provider";
import { ThemeProvider } from "@/contexts/theme-provider";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "IdeaSpace | House of ideas",
  description: "Dump your ideas here and let them grow.",
  metadataBase: new URL("https://ideaspace.nrmnqdds.com/"),
  openGraph: {
    type: "website",
    url: "https://ideaspace.nrmnqdds.com",
    title: "IdeaSpace | House of ideas",
    description: "Dump your ideas here and let them grow.",
    siteName: "IdeaSpace",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/b45237de-851d-4dd7-a5da-bebb068e92eb.png?token=AnUK33GS-jGHvH1IwJV3y2rGq91lW00yg0C87L3F2kA&height=750&width=1200&expires=33241599150",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nrmnqdds",
    creator: "@nrmnqdds",
    title: "IdeaSpace | House of ideas",
    description: "Dump your ideas here and let them grow.",
    images:
      "https://opengraph.b-cdn.net/production/documents/b45237de-851d-4dd7-a5da-bebb068e92eb.png?token=AnUK33GS-jGHvH1IwJV3y2rGq91lW00yg0C87L3F2kA&height=750&width=1200&expires=33241599150",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-geist antialiased scroll-smooth">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <QueryProvider>
            <div className="fixed w-full h-full pointer-events-none">
              <Image
                src="/bg.svg"
                alt="background"
                fill
                priority
                className="object-cover w-full h-full dark:invert z-0 opacity-50 dark:opacity-30"
              />
            </div>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </QueryProvider>
        </ThemeProvider>

        <Script>
          console.log("
          ██╗██████╗░███████╗░█████╗░░██████╗██████╗░░█████╗░░█████╗░███████╗░░░
          ██║██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝░░░
          ██║██║░░██║█████╗░░███████║╚█████╗░██████╔╝███████║██║░░╚═╝█████╗░░░░░
          ██║██║░░██║██╔══╝░░██╔══██║░╚═══██╗██╔═══╝░██╔══██║██║░░██╗██╔══╝░░░░░
          ██║██████╔╝███████╗██║░░██║██████╔╝██║░░░░░██║░░██║╚█████╔╝███████╗██╗
          ╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚═╝");
          console.log("Like this project? Star it on GitHub!");
          console.log("--&gt; https://github.com/nrmnqdds/ideaspace");
        </Script>
      </body>
    </html>
  );
}
