import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('marchin');
export default function CityPage() {
  return <CityPageTemplate citySlug="marchin" />;
}
