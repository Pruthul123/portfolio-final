import type { Metadata } from "next";
import GraphicsCategoryPage from "@/components/graphics-category-page";
import { getGraphicsPageData } from "@/lib/graphics";

export const metadata: Metadata = {
  title: "Other Graphics — Experimental & Cultural Design",
  description: "Experimental graphics, cultural pieces, and visual essays. Flexible, curated studies in contemporary design and visual culture.",
  openGraph: {
    title: "Other Graphics — Experimental & Cultural Design",
    description: "Experimental graphics, cultural pieces, and visual essays. Flexible, curated studies in contemporary design and visual culture.",
    type: "article",
    url: "https://pruthul123.github.io/portfolio-final/other-graphics",
    images: [{ url: "/images/other/1.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Graphics — Experimental & Cultural Design",
    description: "Experimental graphics and cultural visual studies.",
    images: ["/images/other/1.png"]
  }
}; 

export default function OtherGraphicsPage() {
  return <GraphicsCategoryPage category={getGraphicsPageData("other-graphics")} />;
}
