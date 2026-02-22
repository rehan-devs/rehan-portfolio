import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Rehan — Front End Developer",
  description:
    "Designing fast, responsive web experiences from concept to code. Specialized in React, Next.js, and Tailwind CSS.",
  openGraph: {
    title: "Muhammad Rehan — Front End Developer",
    description:
      "Designing fast, responsive web experiences from concept to code. Specialized in React, Next.js, and Tailwind CSS.",
    type: "website",
    locale: "en_US",
    url: "https://rehan.dev",
    siteName: "Muhammad Rehan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rehan — Front End Developer",
    description:
      "Designing fast, responsive web experiences from concept to code. Specialized in React, Next.js, and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}