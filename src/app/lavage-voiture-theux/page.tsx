import type { Metadata } from 'next'
import TheuxClient from './TheuxClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Theux | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Theux (Spa). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture theux', 'nettoyage voiture à domicile theux', 'lavage auto domicile theux', 'valeting theux'],
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-theux',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile Theux | Shine&Go',
    description: 'Lavage voiture à domicile à Theux. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-theux',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Theux",
  "description": "Service de lavage et detailing automobile à domicile à Theux et le pays des Franchimontois.",
  "url": "https://shineandgo.be/lavage-voiture-theux",
  "telephone": "+32472303701",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Theux",
    "addressRegion": "Liège",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.5333",
    "longitude": "5.8167"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function TheuxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <TheuxClient />
    </>
  )
}
