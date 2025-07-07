import { generateMetadata as _generateMetadata } from '../../components/CityPageTemplate';
import CityPageTemplate from '../../components/CityPageTemplate';

export function generateMetadata() {
  return _generateMetadata({ params: { citySlug: "aix-la-chapelle" } });
}

export default function CityPage() {
  return <CityPageTemplate citySlug="aix-la-chapelle" />;
}
