import type { Metadata } from "next";
import { Manrope, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrettyMe - Premium Clothing",
  description: "Premium clothing for the modern woman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} ${greatVibes.variable} font-body bg-white text-text-light transition-colors duration-300`}
      >
        <div className="min-h-screen flex flex-col selection:bg-primary/30 bg-white">
          <div className="bg-primary text-white text-[10px] md:text-xs text-center py-2 tracking-widest font-medium uppercase relative z-[60]">
            Complimentary shipping on all orders over $200
          </div>
          {/* Passing empty currentHash initially; will refactor Navbar to manage its own state */}
          <Navbar currentHash="" />
          <main className="flex-grow">{children}</main>
          <Newsletter />
          <Footer />
        </div>
      </body>
    </html>
  );
}
