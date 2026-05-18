import PortfolioExperience from "@/components/portfolio-experience";
import { getShowcaseCategories } from "@/lib/graphics";

export default function Home() {
  const showcaseCategories = getShowcaseCategories();

  return <PortfolioExperience showcaseCategories={showcaseCategories} />;
}
