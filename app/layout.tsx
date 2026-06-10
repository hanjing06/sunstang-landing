import type { Metadata } from "next";
import "./globals.css";
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
         <Navbar />
         {children}
      </body>
    </html>
  );
}
