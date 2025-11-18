import { Metadata } from 'next';
import CityPageTemplate from '../shared/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Nettoyage Voiture à Domicile Herve | En 90min dès 65€ - Shine&Go',
  description: 'Nettoyage voiture premium à Herve et environs. Service mobile professionnel en 90 min. Produits Koch-Chemie. Résultat showroom. À partir de 65€. ☎ 0472 30 37 01',
  keywords: 'nettoyage voiture herve, lavage voiture herve, nettoyage auto herve, lavage domicile herve, detailing herve, nettoyage voiture battice, lavage auto herve 4650',
  openGraph: {
    title: 'Nettoyage Voiture Premium Herve | Service à Domicile dès 65€ - Shine&Go',
    description: 'Service mobile de nettoyage voiture à Herve. Intérieur & extérieur, produits premium, résultat showroom garanti en 90 min.',
    url: 'https://shineandgo.be/nettoyage-voiture-herve',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Nettoyage voiture Herve - Résultat professionnel Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/nettoyage-voiture-herve',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Herve',
    'geo.position': '50.6386;5.7942',
    'ICBM': '50.6386, 5.7942',
  },
};

export default function HervePage() {
  return (
    <CityPageTemplate
      cityName="Herve"
      citySlug="herve"
      nearbyCities={['Battice', 'Thimister', 'Clermont', 'Xhendelesse', 'Charneux', 'Bolland']}
      postalCode="4650"
      coordinates={{ lat: '50.6386', lng: '5.7942' }}
    />
  );
}
