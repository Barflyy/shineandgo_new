import { generateMetadata as _generateMetadata } from '../../components/CityPageTemplate';
import CityPageTemplate from '../../components/CityPageTemplate';

export function generateMetadata() {
  return _generateMetadata({ params: { citySlug: "donceel" } });
}

export default function CityPage() {
  return <CityPageTemplate citySlug="donceel" />;
}
