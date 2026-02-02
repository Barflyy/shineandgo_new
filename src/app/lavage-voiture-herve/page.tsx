import type { Metadata } from 'next'
import HerveClient from './HerveClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Herve | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Herve. On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5 Google. Intérieur 80€, extérieur 80€, complet 150€. Devis gratuit !',
  keywords: ['lavage voiture herve', 'nettoyage voiture à domicile herve', 'lavage auto domicile herve', 'valeting herve', 'detailing herve'],
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-herve',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile Herve | Shine&Go',
    description: 'Lavage voiture à domicile à Herve. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-herve',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Herve",
  "description": "Service de lavage et detailing automobile à domicile à Herve.",
  "url": "https://shineandgo.be/lavage-voiture-herve",
  "telephone": "+32472303701",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Herve",
    "addressRegion": "Liège",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.6386",
    "longitude": "5.7942"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function HervePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <HerveClient />
    </>
  )
}
