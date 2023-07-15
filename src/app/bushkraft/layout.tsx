"use client";
import { Inter } from "next/font/google";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
