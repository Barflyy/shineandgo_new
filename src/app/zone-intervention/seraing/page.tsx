import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('seraing');

export default function CityPage() {
  // Générer les données structurées pour Seraing
  const structuredData = generateCityStructuredData('seraing', 'Seraing');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplateNew citySlug="seraing" cityName="Seraing" />
    </>
  );
}