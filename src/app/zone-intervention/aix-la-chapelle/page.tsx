import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('aix-la-chapelle');

export default function CityPage() {
  // Générer les données structurées pour Aix-la-Chapelle
  const structuredData = generateCityStructuredData('aix-la-chapelle', 'Aix-la-Chapelle');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="aix-la-chapelle" />
    </>
  );
}