import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('francorchamps');

export default function CityPage() {
  // Générer les données structurées pour Francorchamps
  const structuredData = generateCityStructuredData('francorchamps', 'Francorchamps');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="francorchamps" />
    </>
  );
}