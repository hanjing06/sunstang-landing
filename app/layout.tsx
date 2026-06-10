import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "./components/motion-provider";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Western Sunstang",
  description: "Sunstang Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
