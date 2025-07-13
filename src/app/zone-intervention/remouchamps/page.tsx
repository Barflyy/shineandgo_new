import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('remouchamps');

export default function CityPage() {
  // Générer les données structurées pour Remouchamps
  const structuredData = generateCityStructuredData('remouchamps', 'Remouchamps');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="remouchamps" />
    </>
  );
}