import { Metadata } from 'next';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import LiegeClientComponent from './LiegeClientComponent';

export const metadata: Metadata = {
  title: 'Lavage Voiture Liège 🚗 90min · dès 65€ | ⭐4.9/5 - Shine&Go',
  description: 'Lavage voiture premium à domicile à Liège et agglomération. Service mobile professionnel en 90 min. Produits Koch-Chemie. Résultat showroom. À partir de 65€. ☎ 0472 30 37 01',
  keywords: 'lavage voiture liege, nettoyage voiture liege, lavage auto domicile liege, nettoyage auto liege, detailing liege, lavage voiture grivegnée, lavage voiture angleur, nettoyage voiture bressoux',
  openGraph: {
    title: 'Lavage Voiture Premium Liège | Service à Domicile dès 65€',
    description: 'Service mobile de lavage voiture dans tout Liège : Centre, Grivegnée, Angleur, Bressoux, Chênée. Résultat showroom garanti en 90 min.',
    url: 'https://shineandgo.be/lavage-voiture-liege',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Lavage voiture Liège - Service mobile professionnel Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-liege',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Liège',
    'geo.position': '50.6326;5.5797',
    'ICBM': '50.6326, 5.5797',
  },
};

export default function LavageVoitureLiegePage() {
  return (
    <>
      <LocalBusinessSchema
        pageName="Shine&Go - Lavage Voiture Liège"
        pageUrl="https://shineandgo.be/lavage-voiture-liege"
        city="Liège"
        postalCode="4000"
        latitude="50.6326"
        longitude="5.5797"
        description="Service mobile de lavage voiture à domicile à Liège et toute l'agglomération"
        areaServed={["Liège", "Grivegnée", "Angleur", "Bressoux", "Chênée", "Sclessin", "Jupille", "Outremeuse"]}
      />
      <LiegeClientComponent />
    </>
  );
}

