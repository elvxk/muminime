"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Muminime",
//   description: "Web for listing your fav anime",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="coffee">
      <body className={montserrat.className}>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
