import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("stavelot");

export default function CityPage() {
  return <CityPageTemplate citySlug="stavelot" />;
}