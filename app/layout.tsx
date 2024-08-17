import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Sanghar",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
      <head>
        <link rel="icon" href="/WebLogo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
