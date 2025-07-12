import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('thimister');
export default function CityPage() {
  return <CityPageTemplate citySlug="thimister" />;
}
