import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('nessonvaux');
export default function CityPage() {
  return <CityPageTemplate citySlug="nessonvaux" />;
}
