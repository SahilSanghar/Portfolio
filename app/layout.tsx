import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Sanghar | Freelance Web Developer & UI/UX Designing Specialist",
  description: "Personal portfolio showcasing the work of Sahil Sanghar, a skilled freelance web developer and UI/UX designer.",

  openGraph: {
    title: "Sahil Sanghar | Freelance Web Developer & UI/UX Designing Specialist",
    description: "I am a skilled freelance website developer and UI/UX designer. Specializing in creating custom, responsive websites and applications that deliver exceptional user experiences and drive business success."
,
    images: [
      {
        url: "https://www.sahilsanghar.com/WebLogo.png", // Image URL
        width: 1200,
        height: 630,
        alt: "Sahil Sanghar - Freelance Web Developer & UI/UX Designing Specialist"
      }
    ],
    url: "https://www.sahilsanghar.com/",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Sahil Sanghar | Freelance Web Developer & UI/UX Designing Specialist",
    description: "Discover the portfolio of Sahil Sanghar, a skilled freelance web developer and UI/UX designer. Specializing in creating custom, responsive websites and applications that deliver exceptional user experiences and drive business success.",
    images: [
      {
        url: "https://www.sahilsanghar.com/WebLogo.png", // Image URL
        width: 1200,
        height: 630,
        alt: "Sahil Sanghar - Freelance Web Developer & UI/UX Designing Specialist"
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
      <head>
        <link rel="icon" href="/WebLogo.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          <FloatingNav navItems={navItems} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
