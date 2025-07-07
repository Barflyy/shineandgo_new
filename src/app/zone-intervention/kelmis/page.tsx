import { generateMetadata as _generateMetadata } from '../../components/CityPageTemplate';
import CityPageTemplate from '../../components/CityPageTemplate';

export function generateMetadata() {
  return _generateMetadata({ params: { citySlug: "kelmis" } });
}

export default function CityPage() {
  return <CityPageTemplate citySlug="kelmis" />;
}
