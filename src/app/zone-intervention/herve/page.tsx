import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('herve');
export default function CityPage() {
  return <CityPageTemplate citySlug="herve" />;
}
