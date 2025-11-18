import { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SoumagneClientComponent from './SoumagneClientComponent';

export const metadata: Metadata = {
  title: 'Lavage Voiture Soumagne 🚗 90min · dès 65€ | ⭐4.9/5 - Shine&Go',
  description: 'Lavage voiture premium à Soumagne. Nettoyage mobile professionnel en 90 min. Produits Koch-Chemie. Résultat showroom. À partir de 65€. ☎ 0472 30 37 01',
  keywords: 'lavage voiture soumagne, nettoyage voiture soumagne, detailing soumagne, nettoyage auto soumagne, lavage mobile soumagne',
  openGraph: {
    title: 'Lavage Voiture Soumagne | Nettoyage Premium Mobile - Shine&Go',
    description: 'Service mobile de nettoyage voiture à Soumagne. Intérieur & extérieur, produits premium, résultat showroom.',
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
        description="Service mobile de nettoyage voiture premium à Soumagne et environs"
        areaServed={["Soumagne", "Micheroux", "Ayeneux", "Évegnée"]}
      />
      <SoumagneClientComponent />
    </>
  );
}

