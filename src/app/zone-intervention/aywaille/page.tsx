import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';




export const generateMetadata = () => generateCityMetadata('aywaille');
export default function CityPage() {
  return <CityPageTemplate citySlug="aywaille" />;
}
