import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zones d\'intervention - Service Mobile Premium | Shine&Go',
  description: 'Découvrez toutes les villes desservies par Shine&Go. Service de nettoyage automobile premium à domicile dans plus de 60 villes de la région. Intervention rapide avec produits haut de gamme.',
  keywords: [
    'zones intervention shine&go',
    'villes desservies nettoyage auto',
    'service mobile nettoyage voiture',
    'nettoyage auto domicile région liège',
    'lavage voiture mobile belgique'
  ],
  openGraph: {
    title: 'Zones d\'intervention - Service Mobile Premium | Shine&Go',
    description: 'Service de nettoyage automobile premium à domicile dans plus de 60 villes de la région. Intervention rapide avec produits haut de gamme.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Shine&Go',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zones d\'intervention - Service Mobile Premium | Shine&Go',
    description: 'Service de nettoyage automobile premium à domicile dans plus de 60 villes de la région.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ZonesInterventionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 