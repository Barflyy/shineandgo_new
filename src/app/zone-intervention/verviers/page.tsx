import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('verviers');

export default function CityPage() {
  // Générer les données structurées pour Verviers
  const structuredData = generateCityStructuredData('verviers', 'Verviers');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="verviers" />
    </>
  );
}