import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('aywaille');

export default function CityPage() {
  // Générer les données structurées pour Aywaille
  const structuredData = generateCityStructuredData('aywaille', 'Aywaille');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplateNew citySlug="aywaille" cityName="Aywaille" />
    </>
  );
}