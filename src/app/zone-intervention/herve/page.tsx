import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("herve");

export default function CityPage() {
  return <CityPageTemplate citySlug="herve" />;
}