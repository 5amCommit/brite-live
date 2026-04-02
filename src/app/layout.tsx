import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import StructuredData from "./structured-data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BRITE | Bio-Identical Hormone Replacement Therapy",
    template: "%s | BRITE",
  },
  description:
    "Expert-guided bio-identical hormone replacement therapy backed by a world-class Medical Board of 18 physicians, pharmacists, and scientists. Serving patients since 2009.",
  keywords: [
    "bio-identical hormones",
    "BHRT",
    "cBHRT",
    "hormone replacement therapy",
    "organic hormones",
    "menopause treatment",
    "testosterone therapy",
    "compounded hormones",
    "BRITE",
    "hormone health",
  ],
  authors: [{ name: "BRITE.Live" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brite.live",
    siteName: "BRITE",
    title: "BRITE | Bio-Identical Hormone Replacement Therapy",
    description:
      "Expert-guided bio-identical hormone replacement therapy backed by a world-class Medical Board of 18 physicians, pharmacists, and scientists.",
    images: [{ url: "/brand-assets/brite-logo-green.png", width: 415, height: 110, alt: "BRITE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRITE | Bio-Identical Hormone Replacement Therapy",
    description:
      "Expert-guided bio-identical hormone replacement therapy backed by 18 world-class experts. Serving patients since 2009.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://brite-live.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brite-teal focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
