import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('soumagne');

export default function CityPage() {
  // Générer les données structurées pour Soumagne
  const structuredData = generateCityStructuredData('soumagne', 'Soumagne');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplateNew citySlug="soumagne" cityName="Soumagne" />
    </>
  );
}