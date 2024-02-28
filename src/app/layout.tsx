import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "My Nime 👒",
  description: "Web for listing your fav anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="coffee">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
