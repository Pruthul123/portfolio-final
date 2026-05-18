import type { Metadata } from "next";
import PortfolioExperience from "@/components/portfolio-experience";
import { getShowcaseCategories } from "@/lib/graphics";

export const metadata: Metadata = {
  title: "Pruthul — Graphic & Brand Designer",
  description: "Award-winning graphic and brand designer. Cinematic portfolio showcasing food, technical, and experimental graphics.",
  openGraph: {
    title: "Pruthul — Graphic & Brand Designer",
    description: "Award-winning graphic and brand designer. Cinematic portfolio showcasing food, technical, and experimental graphics.",
    type: "website",
    url: "https://pruthul123.github.io/portfolio-final",
    images: [{ url: "/images/other/1.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pruthul — Graphic & Brand Designer",
    description: "Award-winning graphic and brand designer. Cinematic portfolio showcasing food, technical, and experimental graphics.",
    images: ["/images/other/1.png"]
  }
};

export default function Home() {
  const showcaseCategories = getShowcaseCategories();

  return <PortfolioExperience showcaseCategories={showcaseCategories} />;
}
