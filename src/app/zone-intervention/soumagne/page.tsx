import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
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
      <CityPageTemplate citySlug="soumagne" />
    </>
  );
}