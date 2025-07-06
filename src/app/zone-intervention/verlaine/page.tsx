import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("verlaine");

export default function CityPage() {
  return <CityPageTemplate citySlug="verlaine" />;
}