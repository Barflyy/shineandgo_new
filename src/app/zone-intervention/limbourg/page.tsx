import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';






export const generateMetadata = () => generateCityMetadata('limbourg');
export default function CityPage() {
  return <CityPageTemplate citySlug="limbourg" />;
}
