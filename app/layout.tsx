import type { Metadata } from "next";
import localFont from "next/font/local";
import {Libre_Bodoni} from "next/font/google"
import "./globals.css";

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
        className={`${geistSans.variable} ${libre.variable} ${geistMono.variable} font-geistSans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
