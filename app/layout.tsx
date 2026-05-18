import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pruthul — Graphic & Brand Designer",
  description: "A cinematic, typography-driven portfolio showcasing graphic and brand work by Pruthul.",
  metadataBase: new URL("https://pruthul123.github.io/portfolio-final"),
  applicationName: "Pruthul Portfolio",
  keywords: ["graphic design", "brand design", "portfolio", "Pruthul"],
  authors: [{ name: "Patel Pruthul Ashvinbhai" }],
  openGraph: {
    title: "Pruthul — Graphic & Brand Designer",
    description: "A cinematic, typography-driven portfolio showcasing graphic and brand work by Pruthul.",
    url: "https://pruthul123.github.io/portfolio-final",
    siteName: "Pruthul Portfolio",
    images: ["/images/other/1.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pruthul — Graphic & Brand Designer",
    description: "A cinematic, typography-driven portfolio showcasing graphic and brand work by Pruthul.",
    images: ["/images/other/1.png"]
  },
  icons: {
    icon: "/images/other/1.png",
    shortcut: "/images/other/1.png",
    apple: "/images/other/1.png"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  }
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b0b0b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <script
          key="ld"
          dangerouslySetInnerHTML={{ __html: `{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Patel Pruthul Ashvinbhai",
            "url": "https://pruthul123.github.io/portfolio-final",
            "sameAs": [
              "https://github.com/Pruthul123"
            ],
            "jobTitle": "Graphic Designer / Brand Designer / Creative Director",
            "worksFor": { "@type": "Organization", "name": "Pruthul Portfolio" }
          }` }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
