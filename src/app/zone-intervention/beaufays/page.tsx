import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("beaufays");

export default function CityPage() {
  return <CityPageTemplate citySlug="beaufays" />;
}