import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Kevin Roy`,
  description: `Welcome to my safe space on the internet.`,
  openGraph: {
    images:
      "https://drive.google.com/file/d/1ynGhSHaBjYy19qRzzwEm6UDwA_SJuX5I/view?usp=sharing",
  },
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
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/kr-favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/kr-favicon.png"
        />
        <link rel="shortcut icon" href="/kr-favicon.png" />
      </head>
      <body className={`${inter.className}`}>
        <div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
