import type { Metadata } from "next";
import "./globals.css";
import { AlphaNavbar } from "@/components/ui/alpha-navbar";
import { AlphaFooter } from "@/components/ui/alpha-footer";

export const metadata: Metadata = {
  title: "Alpha Web",
  description: "A modern website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col m-0 p-0 bg-white text-gray-900 antialiased">
        <AlphaNavbar />
        <div className="flex-1">
          {children}
        </div>
        <AlphaFooter />
      </body>
    </html>
  );
}

