import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("battice");

export default function CityPage() {
  return <CityPageTemplate citySlug="battice" />;
}