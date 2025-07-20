import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
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
      <CityPageTemplateNew citySlug="chaudfontaine" cityName="Chaudfontaine" />
    </>
  );
}