import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('spa');
export default function CityPage() {
  return <CityPageTemplate citySlug="spa" />;
}
