import type { Metadata } from 'next'
import SoumagneClient from './SoumagneClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Soumagne | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Soumagne. On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture soumagne', 'nettoyage voiture à domicile soumagne', 'lavage auto domicile soumagne', 'valeting soumagne'],
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-soumagne',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile Soumagne | Shine&Go',
    description: 'Lavage voiture à domicile à Soumagne. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-soumagne',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Soumagne",
  "description": "Service de lavage et detailing automobile à domicile à Soumagne, Melen et Ayeneux.",
  "url": "https://shineandgo.be/lavage-voiture-soumagne",
  "telephone": "+32472303701",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Soumagne",
    "addressRegion": "Liège",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.6167",
    "longitude": "5.7500"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function SoumagnePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <SoumagneClient />
    </>
  )
}
