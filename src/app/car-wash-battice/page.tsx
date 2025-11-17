import { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import BatticeClientComponent from './BatticeClientComponent';

export const metadata: Metadata = {
  title: 'Car Wash Battice | Lavage Voiture Mobile à Domicile dès 49€ - Shine&Go',
  description: 'Car wash mobile à Battice. Nettoyage complet voiture à domicile en 90 min dès 49€. Produits Koch-Chemie professionnels. Service mobile, déplacement gratuit, résultat showroom. ☎ 0472 30 37 01',
  keywords: 'car wash battice, lavage voiture battice, nettoyage voiture battice, car wash mobile battice, lavage auto battice, detailing battice, nettoyage auto battice 4651',
  openGraph: {
    title: 'Car Wash Battice | Nettoyage Voiture à Domicile dès 49€',
    description: 'Service mobile de car wash à Battice. Intérieur & extérieur, résultat showroom en 90 min, garantie satisfaction.',
    url: 'https://shineandgo.be/car-wash-battice',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Car wash Battice - Service mobile professionnel Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/car-wash-battice',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Battice',
    'geo.position': '50.6532;5.8143',
    'ICBM': '50.6532, 5.8143',
  },
};

export default function CarWashBatticePage() {
  return (
    <>
      <LocalBusinessSchema
        pageName="Shine&Go - Car Wash Battice"
        pageUrl="https://shineandgo.be/car-wash-battice"
        city="Battice"
        postalCode="4651"
        latitude="50.6532"
        longitude="5.8143"
        description="Service mobile de car wash à domicile à Battice"
        areaServed={["Battice", "Herve", "Thimister", "Clermont"]}
      />
      <BatticeClientComponent />
    </>
  );
}

