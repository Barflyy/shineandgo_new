import type { Metadata } from "next";
import CityPageTemplate, { generateMetadata } from "../../components/CityPageTemplate";

export const metadata: Metadata = generateMetadata("aix-la-chapelle");

export default function CityPage() {
  return <CityPageTemplate citySlug="aix-la-chapelle" />;
}