import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('flemalle');

export default function CityPage() {
  // Générer les données structurées pour Flémalle
  const structuredData = generateCityStructuredData('flemalle', 'Flémalle');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="flemalle" />
    </>
  );
}