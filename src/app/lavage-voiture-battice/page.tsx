import type { Metadata } from 'next'
import BatticeClient from './BatticeClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Battice | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Battice. On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5 Google. Intérieur 80€, extérieur 80€, complet 150€. Devis gratuit !',
  keywords: ['lavage voiture battice', 'nettoyage voiture à domicile battice', 'lavage auto domicile battice', 'valeting battice'],
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-battice',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile Battice | Shine&Go',
    description: 'Lavage voiture à domicile à Battice. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-battice',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Battice",
  "description": "Service de lavage et detailing automobile à domicile à Battice.",
  "url": "https://shineandgo.be/lavage-voiture-battice",
  "telephone": "+32472303701",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Battice",
    "addressRegion": "Liège",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.6428",
    "longitude": "5.8225"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function BatticePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <BatticeClient />
    </>
  )
}
