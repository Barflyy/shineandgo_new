import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('dison');
export default function CityPage() {
  return <CityPageTemplate citySlug="dison" />;
}
