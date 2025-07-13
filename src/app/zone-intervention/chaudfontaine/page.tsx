import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('chaudfontaine');

export default function CityPage() {
  // Générer les données structurées pour Chaudfontaine
  const structuredData = generateCityStructuredData('chaudfontaine', 'Chaudfontaine');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="chaudfontaine" />
    </>
  );
}