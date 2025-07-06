import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("trois-ponts");

export default function CityPage() {
  return <CityPageTemplate citySlug="trois-ponts" />;
}