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
        url: "https://opengraph.b-cdn.net/production/documents/43c854fb-72a1-4e1b-b837-3606c7fb8cbc.png?token=L1Uy-36YgwHCa2PLUHHRnpK0xy1wwKhZhT53bpmLGyo&height=591&width=1200&expires=33241606772",
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
      "https://opengraph.b-cdn.net/production/documents/43c854fb-72a1-4e1b-b837-3606c7fb8cbc.png?token=L1Uy-36YgwHCa2PLUHHRnpK0xy1wwKhZhT53bpmLGyo&height=591&width=1200&expires=33241606772",
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
            <div className="fixed -z-10 h-full w-full bg-background bg-[radial-gradient(#a1a1aa,transparent_1px)] dark:bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:16px_16px]" />
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
