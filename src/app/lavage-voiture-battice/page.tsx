import { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import BatticeClientComponent from './BatticeClientComponent';

export const metadata: Metadata = {
  title: 'Lavage Voiture Battice | Nettoyage Premium Mobile - Shine&Go',
  description: 'Lavage voiture premium à Battice. Nettoyage mobile professionnel en 90 min. Produits Koch-Chemie. Résultat showroom. À partir de 65€. ☎ 0472 30 37 01',
  keywords: 'lavage voiture battice, nettoyage voiture battice, detailing battice, nettoyage auto battice, lavage mobile battice',
  openGraph: {
    title: 'Lavage Voiture Battice | Nettoyage Premium Mobile - Shine&Go',
    description: 'Service mobile de nettoyage voiture à Battice. Intérieur & extérieur, produits premium, résultat showroom.',
    url: 'https://shineandgo.be/lavage-voiture-battice',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Lavage voiture Battice - Service premium mobile Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-battice',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Battice',
    'geo.position': '50.6532;5.8143',
    'ICBM': '50.6532, 5.8143',
  },
};

export default function LavageVoitureBatticePage() {
  return (
    <>
      <LocalBusinessSchema
        pageName="Shine&Go - Lavage Voiture Battice"
        pageUrl="https://shineandgo.be/lavage-voiture-battice"
        city="Battice"
        postalCode="4651"
        latitude="50.6532"
        longitude="5.8143"
        description="Service mobile de nettoyage voiture premium à Battice"
        areaServed={["Battice", "Herve", "Thimister", "Clermont"]}
      />
      <BatticeClientComponent />
    </>
  );
}

