import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { dictionary, siteUrl } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

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
  icons: {
    icon: `${basePath}/favicon.svg`
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: dictionary.en.meta.title,
    description: dictionary.en.meta.description,
    url: "/",
    siteName: "Jay Wu",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary",
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
