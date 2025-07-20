import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('trooz');

export default function CityPage() {
  // Générer les données structurées pour Trooz
  const structuredData = generateCityStructuredData('trooz', 'Trooz');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplateNew citySlug="trooz" cityName="Trooz" />
    </>
  );
}