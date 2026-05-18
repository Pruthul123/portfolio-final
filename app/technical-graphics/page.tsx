import type { Metadata } from "next";
import GraphicsCategoryPage from "@/components/graphics-category-page";
import { getGraphicsPageData } from "@/lib/graphics";

export const metadata: Metadata = {
  title: "Technical Graphics — System Design & Information Architecture",
  description: "Structured visuals and information design work. System-led layouts, precise interfaces, and editorial-quality technical graphics.",
  openGraph: {
    title: "Technical Graphics — System Design & Information Architecture",
    description: "Structured visuals and information design work. System-led layouts, precise interfaces, and editorial-quality technical graphics.",
    type: "article",
    url: "https://pruthul123.github.io/portfolio-final/technical-graphics",
    images: [{ url: "/images/technical/technical Graphic.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Graphics — System Design & Information Architecture",
    description: "Structured visuals and information design work.",
    images: ["/images/technical/technical Graphic.png"]
  }
};

export default function TechnicalGraphicsPage() {
  return <GraphicsCategoryPage category={getGraphicsPageData("technical-graphics")} />;
}
