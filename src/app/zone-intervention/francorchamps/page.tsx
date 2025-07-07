import { generateMetadata as _generateMetadata } from '../../components/CityPageTemplate';
import CityPageTemplate from '../../components/CityPageTemplate';

export function generateMetadata() {
  return _generateMetadata({ params: { citySlug: "francorchamps" } });
}

export default function CityPage() {
  return <CityPageTemplate citySlug="francorchamps" />;
}
