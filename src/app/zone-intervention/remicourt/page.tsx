import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('remicourt');
export default function CityPage() {
  return <CityPageTemplate citySlug="remicourt" />;
}
