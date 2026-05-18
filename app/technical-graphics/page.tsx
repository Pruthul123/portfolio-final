import type { Metadata } from "next";
import GraphicsCategoryPage from "@/components/graphics-category-page";
import { getGraphicsPageData } from "@/lib/graphics";

export const metadata: Metadata = {
  title: "Technical Graphics | Patel Pruthul Ashvinbhai"
};

export default function TechnicalGraphicsPage() {
  return <GraphicsCategoryPage category={getGraphicsPageData("technical-graphics")} />;
}
