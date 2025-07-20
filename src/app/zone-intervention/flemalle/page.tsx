import { generateMetadata as generateCityMetadata } from '../../utils/cityMetadata';
import CityPageTemplateNew from '../../components/CityPageTemplateNew';
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
      <CityPageTemplateNew citySlug="flemalle" cityName="Flémalle" />
    </>
  );
}