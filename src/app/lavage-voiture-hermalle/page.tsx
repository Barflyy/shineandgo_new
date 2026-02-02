import type { Metadata } from 'next'
import HermalleClient from './HermalleClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Hermalle | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Hermalle-sous-Argenteau. On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture hermalle', 'nettoyage voiture à domicile hermalle', 'lavage auto domicile argenteau', 'valeting hermalle'],
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-hermalle',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile Hermalle | Shine&Go',
    description: 'Lavage voiture à domicile à Hermalle. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-hermalle',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Hermalle",
  "description": "Service de lavage et detailing automobile à domicile à Hermalle-sous-Argenteau et Basse-Meuse.",
  "url": "https://shineandgo.be/lavage-voiture-hermalle",
  "telephone": "+32472303701",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hermalle-sous-Argenteau",
    "addressRegion": "Liège",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.7167",
    "longitude": "5.6833"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function HermallePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <HermalleClient />
    </>
  )
}
