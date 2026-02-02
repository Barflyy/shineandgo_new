import type { Metadata } from 'next'
import MalmedyClient from './MalmedyClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Malmedy | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Malmedy (Ardennes). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture malmedy', 'nettoyage voiture à domicile malmedy', 'lavage auto domicile malmedy', 'valeting malmedy'],
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-malmedy',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile Malmedy | Shine&Go',
    description: 'Lavage voiture à domicile à Malmedy. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-malmedy',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Malmedy",
  "description": "Service de lavage et detailing automobile à domicile à Malmedy et les Hautes Fagnes.",
  "url": "https://shineandgo.be/lavage-voiture-malmedy",
  "telephone": "+32472303701",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Malmedy",
    "addressRegion": "Liège",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.4259",
    "longitude": "6.0285"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
}

export default function MalmedyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <MalmedyClient />
    </>
  )
}
