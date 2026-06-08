import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gregnewkirk.com"),
  title: "Gregory M. Newkirk, PhD | Molecular Biology, Biotech IP, Science Communication",
  description:
    "Professional site of Gregory M. Newkirk, PhD, molecular biologist, biotech IP consultant, science communicator, and founder of Priori Intelligence.",
  openGraph: {
    title: "Gregory M. Newkirk, PhD",
    description:
      "Molecular biology, biotech IP, and science communication with a record in plant nanobiotechnology.",
    url: "https://gregnewkirk.com",
    siteName: "Greg Newkirk",
    type: "website",
    images: [
      {
        url: "/images/greg-newkirk-expert.jpg",
        width: 2160,
        height: 1440,
        alt: "Gregory M. Newkirk professional portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregory M. Newkirk, PhD",
    description: "Molecular biology, biotech IP, and science communication.",
    images: ["/images/greg-newkirk-expert.jpg"],
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
