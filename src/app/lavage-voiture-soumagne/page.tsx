import { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SoumagneClientComponent from './SoumagneClientComponent';

export const metadata: Metadata = {
  title: 'Lavage Voiture Soumagne 🚗 En 90min dès 65€ | Shine&Go',
  description: '✨ Lavage voiture premium à Soumagne. Nettoyage mobile professionnel en 90 min. Produits Koch-Chemie. Résultat showroom. ⭐ 4.9/5 sur Google. Devis gratuit ☎ 0472 30 37 01',
  keywords: 'lavage voiture soumagne, nettoyage voiture soumagne, detailing soumagne, nettoyage auto soumagne, lavage mobile soumagne, nettoyage voiture 4630',
  openGraph: {
    title: 'Lavage Voiture Soumagne 🚗 Nettoyage Premium Mobile | Shine&Go',
    description: '✨ Service mobile de nettoyage voiture à Soumagne. Intérieur & extérieur, produits premium, résultat showroom. ⭐ 4.9/5',
    url: 'https://shineandgo.be/lavage-voiture-soumagne',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Lavage voiture Soumagne - Service premium mobile Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-soumagne',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Soumagne',
    'geo.position': '50.6167;5.7333',
    'ICBM': '50.6167, 5.7333',
  },
};

export default function LavageVoitureSoumagnePage() {
  return (
    <>
      <LocalBusinessSchema
        pageName="Shine&Go - Lavage Voiture Soumagne"
        pageUrl="https://shineandgo.be/lavage-voiture-soumagne"
        city="Soumagne"
        postalCode="4630"
        latitude="50.6167"
        longitude="5.7333"
        description="Service mobile de nettoyage voiture premium à Soumagne"
        areaServed={["Soumagne", "Herve", "Fléron", "Olne"]}
      />
      <SoumagneClientComponent />
    </>
  );
}

