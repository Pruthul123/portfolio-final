import type { Metadata } from "next";
import GraphicsCategoryPage from "@/components/graphics-category-page";
import { getGraphicsPageData } from "@/lib/graphics";

export const metadata: Metadata = {
  title: "Food Graphics — Cinematic Menu & Campaign Design",
  description: "Explore premium food graphics and menu design work. Cinematic visuals for restaurants, food launches, and appetite-led brand direction.",
  openGraph: {
    title: "Food Graphics — Cinematic Menu & Campaign Design",
    description: "Explore premium food graphics and menu design work. Cinematic visuals for restaurants, food launches, and appetite-led brand direction.",
    type: "article",
    url: "https://pruthul123.github.io/portfolio-final/food-graphics",
    images: [{ url: "/images/food/1.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Graphics — Cinematic Menu & Campaign Design",
    description: "Explore premium food graphics and menu design work.",
    images: ["/images/food/1.png"]
  }
};

export default function FoodGraphicsPage() {
  return <GraphicsCategoryPage category={getGraphicsPageData("food-graphics")} />;
}
