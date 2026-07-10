import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { dictionary, siteUrl } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: dictionary.en.meta.title,
  description: dictionary.en.meta.description,
  applicationName: "Jay Wu",
  authors: [{ name: "Jay Wu" }],
  keywords: [
    "Jay Wu",
    "AI Native Builder",
    "AI products",
    "MVP",
    "Founder",
    "Product Engineer"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: dictionary.en.meta.title,
    description: dictionary.en.meta.description,
    url: "/",
    siteName: "Jay Wu",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: dictionary.en.meta.title,
    description: dictionary.en.meta.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
