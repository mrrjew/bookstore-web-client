import type { Metadata } from "next";
import localFont from "next/font/local";
import {Libre_Bodoni} from "next/font/google"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const libre = Libre_Bodoni({
  weight:["400","500"],
  subsets:["latin"],
  variable:"--font-libre"
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const kathen = localFont({
  src:"./fonts/Kathen.otf",
  variable:"--font-kathen",
  weight:"100 900"
})

export const metadata: Metadata = {
  title: "Kojo's Bookhub",
  description: "Reading is fascinating",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${kathen.variable} ${libre.variable} ${geistMono.variable} scrollbar bg-light font-geistSans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
