import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('saint-georges');

export default function CityPage() {
  // Générer les données structurées pour Saint-Georges
  const structuredData = generateCityStructuredData('saint-georges', 'Saint-Georges');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="saint-georges" />
    </>
  );
}