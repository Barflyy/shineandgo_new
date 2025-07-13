import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('trois-ponts');

export default function CityPage() {
  // Générer les données structurées pour Trois-Ponts
  const structuredData = generateCityStructuredData('trois-ponts', 'Trois-Ponts');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="trois-ponts" />
    </>
  );
}