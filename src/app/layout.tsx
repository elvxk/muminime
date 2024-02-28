import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Muminime",
  description: "Web for listing your fav anime",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="coffee" className={montserrat.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
