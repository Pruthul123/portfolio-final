import type { Metadata } from "next";
import GraphicsCategoryPage from "@/components/graphics-category-page";
import { getGraphicsPageData } from "@/lib/graphics";

export const metadata: Metadata = {
  title: "Food Graphics | Patel Pruthul Ashvinbhai"
};

export default function FoodGraphicsPage() {
  return <GraphicsCategoryPage category={getGraphicsPageData("food-graphics")} />;
}
