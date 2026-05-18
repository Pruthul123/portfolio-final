import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patel Pruthul Ashvinbhai | Graphic Designer / Brand Designer / Creative Director",
  description:
    "A cinematic typography-driven portfolio for Patel Pruthul Ashvinbhai, built as a premium editorial creative experience.",
  metadataBase: new URL("https://pruthul-portfolio.local")
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  );
}
