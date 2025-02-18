import type { Metadata } from "next";
import {Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal and Bold weights
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Taja sodai",
  description: "A complete solution of gorssaries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `${openSans.className} max-w-[1200px] mx-auto` }
      >
        <div className="relative">
        <Navbar/>
        <div className="pt-[160px]">
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
