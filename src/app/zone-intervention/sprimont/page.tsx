import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("sprimont");

export default function CityPage() {
  return <CityPageTemplate citySlug="sprimont" />;
}