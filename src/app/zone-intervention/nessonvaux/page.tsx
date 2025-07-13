import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('nessonvaux');

export default function CityPage() {
  // Générer les données structurées pour Nessonvaux
  const structuredData = generateCityStructuredData('nessonvaux', 'Nessonvaux');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="nessonvaux" />
    </>
  );
}