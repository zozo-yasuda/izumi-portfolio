import Navigation from "./components/navigation";
import Footer from "./components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Izumi Yasuda",
  description: "Izumi Yasuda's portfolio website.",
};

export default function RootLayout({children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/lub1ege.css" />
      <link rel="icon" href="/favilight.webp"  media="(prefers-color-scheme: light)" />
      <link rel="icon" href="/favidark.png"  media="(prefers-color-scheme: dark)" />
      </head>
      
      <body className={inter.className}>
        <Navigation />
        {children}
        {<Footer />}
      </body>
    </html>
  );
}
