import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('ovifat');
export default function CityPage() {
  return <CityPageTemplate citySlug="ovifat" />;
}
