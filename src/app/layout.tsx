"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [english, setEnglish] = useState(true);
  const [dark, setDark] = useState(true);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          english={english}
          changeToEnglish={() => setEnglish((prev) => !prev)}
          dark={dark}
          changeToDark={() => setDark((prev) => !prev)}
        />
        {children}
      </body>
    </html>
  );
}
