for slug in aix-la-chapelle amay ans argenteau aubel aywaille baelen battice beaufays berloz blegny chaudfontaine dalhem dison donceel embourg engis esneux eupen flemalle fleron francorchamps gemmenich herve huy jalhay jemeppe kelmis liege limbourg lontzen malmedy marchin montzen mouland nessonvaux olne ovifat pepinster plombieres raeren remicourt remouchamps robertville saint-georges seraing soumagne spa sprimont stavelot theux thimister tilff trois-ponts trooz vaals verlaine verviers vise waimes wanze waremme welkenraedt; do
cat <<EOPAGE > src/app/zone-intervention/$slug/page.tsx
import { generateMetadata as _generateMetadata } from '../../components/CityPageTemplate';
import CityPageTemplate from '../../components/CityPageTemplate';

export function generateMetadata() {
  return _generateMetadata({ params: { citySlug: "$slug" } });
}

export default function CityPage() {
  return <CityPageTemplate citySlug="$slug" />;
}
EOPAGE
done
