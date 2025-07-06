import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("waremme");

export default function CityPage() {
  return <CityPageTemplate citySlug="waremme" />;
}