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
            <div className="fixed w-full h-full z-0 pointer-events-none">
              {/* <Image
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3cpath d='M -500.9584659137817%2c133 C -443.36%2c198.4 -328.16%2c472.6 -212.9584659137817%2c460 C -97.76%2c447.4 -40.16%2c95.6 75.04153408621829%2c70 C 190.24%2c44.4 247.84%2c331.2 363.0415340862183%2c332 C 478.24%2c332.8 535.84%2c45.6 651.0415340862182%2c74 C 766.24%2c102.4 823.84%2c453 939.0415340862182%2c474 C 1054.24%2c495 1126.85%2c175.8 1227.0415340862182%2c179 C 1327.23%2c182.2 1397.41%2c427.8 1440%2c490' stroke='rgba(24%2c 24%2c 27%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -22.352758481977276%2c375 C 35.25%2c322.8 150.45%2c95.2 265.6472415180227%2c114 C 380.85%2c132.8 438.45%2c459.2 553.6472415180227%2c469 C 668.85%2c478.8 726.45%2c175.4 841.6472415180227%2c163 C 956.85%2c150.6 1014.45%2c417.8 1129.6472415180228%2c407 C 1244.85%2c396.2 1302.45%2c111 1417.6472415180228%2c109 C 1532.85%2c107 1701.18%2c368.8 1705.6472415180228%2c397 C 1710.12%2c425.2 1493.13%2c279.4 1440%2c250' stroke='rgba(24%2c 24%2c 27%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -456.96063880257816%2c87 C -399.36%2c136.4 -284.16%2c305.6 -168.96063880257813%2c334 C -53.76%2c362.4 3.84%2c198.2 119.03936119742187%2c229 C 234.24%2c259.8 291.84%2c488 407.03936119742184%2c488 C 522.24%2c488 579.84%2c242.4 695.0393611974218%2c229 C 810.24%2c215.6 867.84%2c438.2 983.0393611974218%2c421 C 1098.24%2c403.8 1179.65%2c136.8 1271.0393611974218%2c143 C 1362.43%2c149.2 1406.21%2c390.2 1440%2c452' stroke='rgba(24%2c 24%2c 27%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -445.851614007179%2c439 C -388.25%2c382 -273.05%2c185 -157.851614007179%2c154 C -42.65%2c123 14.95%2c267.8 130.148385992821%2c284 C 245.35%2c300.2 302.95%2c191.6 418.148385992821%2c235 C 533.35%2c278.4 590.95%2c503 706.148385992821%2c501 C 821.35%2c499 878.95%2c257.8 994.148385992821%2c225 C 1109.35%2c192.2 1192.98%2c344.2 1282.148385992821%2c337 C 1371.32%2c329.8 1408.43%2c218.6 1440%2c189' stroke='rgba(24%2c 24%2c 27%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"
                alt="background"
                fill
                priority
                className="object-cover w-full h-full dark:invert z-0 opacity-5"
              /> */}
              <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#a1a1aa,transparent_1px)] dark:bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:16px_16px]" />
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
