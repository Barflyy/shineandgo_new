import { Metadata } from 'next';
import CityPageTemplate from '../shared/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Nettoyage Voiture à Domicile Verviers | En 90min dès 65€ - Shine&Go',
  description: 'Nettoyage voiture premium à Verviers et environs. Service mobile professionnel en 90 min. Produits Koch-Chemie. Résultat showroom. À partir de 65€. ☎ 0472 30 37 01',
  keywords: 'nettoyage voiture verviers, lavage voiture verviers, nettoyage auto verviers, lavage domicile verviers, detailing verviers, nettoyage voiture dison, lavage auto verviers 4800',
  openGraph: {
    title: 'Nettoyage Voiture Premium Verviers | Service à Domicile dès 65€ - Shine&Go',
    description: 'Service mobile de nettoyage voiture à Verviers. Intérieur & extérieur, produits premium, résultat showroom garanti en 90 min.',
    url: 'https://shineandgo.be/nettoyage-voiture-verviers',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Nettoyage voiture Verviers - Résultat professionnel Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/nettoyage-voiture-verviers',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Verviers',
    'geo.position': '50.5894;5.8632',
    'ICBM': '50.5894, 5.8632',
  },
};

export default function VerviersPage() {
  return (
    <CityPageTemplate
      cityName="Verviers"
      citySlug="verviers"
      nearbyCities={['Dison', 'Pepinster', 'Theux', 'Spa', 'Jalhay', 'Limbourg']}
      postalCode="4800"
      coordinates={{ lat: '50.5894', lng: '5.8632' }}
    />
  );
}
