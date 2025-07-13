import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplate from '../../components/CityPageTemplate';
import { generateCityStructuredData } from '../../utils/cityStructuredData';

export const generateMetadata = () => generateCityMetadata('gemmenich');

export default function CityPage() {
  // Générer les données structurées pour Gemmenich
  const structuredData = generateCityStructuredData('gemmenich', 'Gemmenich');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplate citySlug="gemmenich" />
    </>
  );
}