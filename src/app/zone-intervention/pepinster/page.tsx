import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('pepinster');

export default function CityPage() {
  // Générer les données structurées pour Pepinster
  const structuredData = generateCityStructuredData('pepinster', 'Pepinster');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplateNew citySlug="pepinster" cityName="Pepinster" />
    </>
  );
}