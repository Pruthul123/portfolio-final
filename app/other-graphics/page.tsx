import type { Metadata } from "next";
import GraphicsCategoryPage from "@/components/graphics-category-page";
import { getGraphicsPageData } from "@/lib/graphics";

export const metadata: Metadata = {
  title: "Other Graphics | Patel Pruthul Ashvinbhai"
};

export default function OtherGraphicsPage() {
  return <GraphicsCategoryPage category={getGraphicsPageData("other-graphics")} />;
}
