import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "./components/motion-provider";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Western Sunstang Solar Car Project",
    template: "%s | Western Sunstang",
  },
  description:
    "Western Engineering's student-led solar car team, designing and building vehicles for the Formula Sun Grand Prix and American Solar Challenge.",
  applicationName: "Western Sunstang",
  keywords: [
    "Western University",
    "Western Engineering",
    "solar car",
    "Sunstang",
    "Formula Sun Grand Prix",
    "American Solar Challenge",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Western Sunstang",
    title: "Western Sunstang Solar Car Project",
    description:
      "Meet the student engineers designing and building Western University's solar electric vehicle.",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Sunstang Solar Car Project",
    description:
      "Meet the student engineers designing and building Western University's solar electric vehicle.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
    follow: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-surface px-4 py-3 font-semibold text-ink shadow-sm transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Navbar />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
