import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('malmedy');

export default function CityPage() {
  // Générer les données structurées pour Malmedy
  const structuredData = generateCityStructuredData('malmedy', 'Malmedy');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplateNew citySlug="malmedy" cityName="Malmedy" />
    </>
  );
}