import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';




export const generateMetadata = () => generateCityMetadata('aix-la-chapelle');
export default function CityPage() {
  return <CityPageTemplate citySlug="aix-la-chapelle" />;
}
