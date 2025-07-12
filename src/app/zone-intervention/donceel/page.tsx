import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('donceel');
export default function CityPage() {
  return <CityPageTemplate citySlug="donceel" />;
}
