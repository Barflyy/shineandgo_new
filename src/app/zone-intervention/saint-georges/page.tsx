import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('saint-georges');
export default function CityPage() {
  return <CityPageTemplate citySlug="saint-georges" />;
}
