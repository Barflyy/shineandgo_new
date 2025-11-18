import { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SpaClientComponent from './SpaClientComponent';

export const metadata: Metadata = {
  title: 'Lavage Voiture Spa 🚗 En 90min dès 65€ | Shine&Go',
  description: '✨ Lavage voiture premium à Spa. Nettoyage mobile professionnel en 90 min. Produits Koch-Chemie. Résultat showroom. ⭐ 4.9/5 sur Google. Devis gratuit ☎ 0472 30 37 01',
  keywords: 'lavage voiture spa, nettoyage voiture spa, detailing spa, nettoyage auto spa, lavage mobile spa, nettoyage voiture 4900',
  openGraph: {
    title: 'Lavage Voiture Spa 🚗 Nettoyage Premium Mobile | Shine&Go',
    description: '✨ Service mobile de nettoyage voiture à Spa. Intérieur & extérieur, produits premium, résultat showroom. ⭐ 4.9/5',
    url: 'https://shineandgo.be/lavage-voiture-spa',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Lavage voiture Spa - Service premium mobile Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-spa',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Spa',
    'geo.position': '50.4833;5.8667',
    'ICBM': '50.4833, 5.8667',
  },
};

export default function LavageVoitureSpaPage() {
  return (
    <>
      <LocalBusinessSchema
        pageName="Shine&Go - Lavage Voiture Spa"
        pageUrl="https://shineandgo.be/lavage-voiture-spa"
        city="Spa"
        postalCode="4900"
        latitude="50.4833"
        longitude="5.8667"
        description="Service mobile de nettoyage voiture premium à Spa"
        areaServed={["Spa", "Stavelot", "Malmedy", "Verviers"]}
      />
      <SpaClientComponent />
    </>
  );
}

