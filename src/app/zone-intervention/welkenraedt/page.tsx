import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('welkenraedt');

export default function CityPage() {
  // Générer les données structurées pour Welkenraedt
  const structuredData = generateCityStructuredData('welkenraedt', 'Welkenraedt');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="welkenraedt" />
    </>
  );
}