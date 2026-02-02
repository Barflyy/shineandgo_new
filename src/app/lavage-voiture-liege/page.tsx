import type { Metadata } from 'next'
import LiegeClient from './LiegeClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Liège | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Liège. On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5 Google. Intérieur 80€, extérieur 80€, complet 150€. Devis gratuit !',
  keywords: ['lavage voiture liège', 'nettoyage voiture à domicile liège', 'lavage auto domicile liège', 'valeting liège', 'detailing liège'],
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-liege',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile Liège | Shine&Go',
    description: 'Lavage voiture à domicile à Liège. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-liege',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Liège",
  "description": "Service de lavage et detailing automobile à domicile à Liège.",
  "url": "https://shineandgo.be/lavage-voiture-liege",
  "telephone": "+32472303701",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liège",
    "addressRegion": "Liège",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.6326",
    "longitude": "5.5797"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function LiegePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <LiegeClient />
    </>
  )
}
