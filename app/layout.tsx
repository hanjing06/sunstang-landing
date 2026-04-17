import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
      <body className="min-h-full flex flex-col font-sans">
         <Navbar />
         {children}
      </body>
    </html>
  );
}
