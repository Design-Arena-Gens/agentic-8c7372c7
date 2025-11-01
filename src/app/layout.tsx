import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-8c7372c7.vercel.app"),
  title: {
    default: "AI Automation Expert ? Portfolio",
    template: "%s ? AI Automation Expert",
  },
  description:
    "I design and ship AI-powered automations, agents, and end-to-end workflows that save teams hours every week.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "AI Automation Expert",
    title: "AI Automation Expert ? Portfolio",
    description:
      "I design and ship AI-powered automations, agents, and end-to-end workflows that save teams hours every week.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Expert ? Portfolio",
    description:
      "I design and ship AI-powered automations, agents, and end-to-end workflows that save teams hours every week.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
