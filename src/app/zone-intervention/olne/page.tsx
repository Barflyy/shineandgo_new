import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("olne");

export default function CityPage() {
  return <CityPageTemplate citySlug="olne" />;
}