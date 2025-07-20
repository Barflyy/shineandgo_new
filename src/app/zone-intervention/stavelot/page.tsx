import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('stavelot');

export default function CityPage() {
  // Générer les données structurées pour Stavelot
  const structuredData = generateCityStructuredData('stavelot', 'Stavelot');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplateNew citySlug="stavelot" cityName="Stavelot" />
    </>
  );
}