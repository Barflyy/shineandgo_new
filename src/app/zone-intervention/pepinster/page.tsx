import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('pepinster');
export default function CityPage() {
  return <CityPageTemplate citySlug="pepinster" />;
}
