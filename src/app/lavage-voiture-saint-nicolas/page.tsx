import type { Metadata } from 'next'
import SaintNicolasClient from './SaintNicolasClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Saint-Nicolas | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Saint-Nicolas (Liège). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture saint-nicolas', 'nettoyage voiture à domicile saint-nicolas', 'lavage auto domicile liège', 'valeting saint-nicolas'],
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-saint-nicolas',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile Saint-Nicolas | Shine&Go',
    description: 'Lavage voiture à domicile à Saint-Nicolas. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-saint-nicolas',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Saint-Nicolas",
  "description": "Service de lavage et detailing automobile à domicile à Saint-Nicolas, Montegnée et Tilleur.",
  "url": "https://shineandgo.be/lavage-voiture-saint-nicolas",
  "telephone": "+32472303701",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Saint-Nicolas",
    "addressRegion": "Liège",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.6333",
    "longitude": "5.5333"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function SaintNicolasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <SaintNicolasClient />
    </>
  )
}
