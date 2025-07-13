import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('wanze');

export default function CityPage() {
  // Générer les données structurées pour Wanze
  const structuredData = generateCityStructuredData('wanze', 'Wanze');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="wanze" />
    </>
  );
}