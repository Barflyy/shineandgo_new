import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("waimes");

export default function CityPage() {
  return <CityPageTemplate citySlug="waimes" />;
}