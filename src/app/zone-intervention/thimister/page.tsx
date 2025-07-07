import { generateMetadata as _generateMetadata } from '../../components/CityPageTemplate';
import CityPageTemplate from '../../components/CityPageTemplate';

export function generateMetadata() {
  return _generateMetadata({ params: { citySlug: "thimister" } });
}

export default function CityPage() {
  return <CityPageTemplate citySlug="thimister" />;
}
