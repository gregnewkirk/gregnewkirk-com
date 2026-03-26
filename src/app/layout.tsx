import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Gregory M. Newkirk, PhD — Molecular Biologist, Science Communicator, Founder",
  description:
    "Personal site of Dr. Gregory M. Newkirk — molecular biologist, science communicator (@drgregshow), and founder of Priori Intelligence and SAFE.",
  openGraph: {
    title: "Dr. Gregory M. Newkirk, PhD",
    description:
      "Molecular biologist. Science communicator. Founder.",
    url: "https://gregnewkirk.com",
    siteName: "Greg Newkirk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Gregory M. Newkirk, PhD",
    description: "Molecular biologist. Science communicator. Founder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
