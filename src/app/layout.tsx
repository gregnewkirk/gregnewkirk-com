import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gregnewkirk.com"),
  title: "Gregory M. Newkirk, Ph.D. | Molecular Biology, Product Development, Due Diligence",
  description:
    "Professional site of Gregory M. Newkirk, Ph.D., molecular biologist. Product development for science-based startups and scientific due diligence for investors through Priori Intelligence.",
  openGraph: {
    title: "Gregory M. Newkirk, Ph.D.",
    description:
      "Product development for science-based startups and scientific due diligence for investors, from a molecular biologist with a record in plant nanobiotechnology.",
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
    title: "Gregory M. Newkirk, Ph.D.",
    description: "Molecular biology, product development, and scientific due diligence.",
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
