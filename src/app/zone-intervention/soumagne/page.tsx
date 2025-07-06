import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("soumagne");

export default function CityPage() {
  return <CityPageTemplate citySlug="soumagne" />;
}