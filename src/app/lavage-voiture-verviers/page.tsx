import type { Metadata } from 'next'
import VerviersClient from './VerviersClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Verviers | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Verviers. On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5 Google. Intérieur 80€, extérieur 80€, complet 150€. Devis gratuit !',
  keywords: ['lavage voiture verviers', 'nettoyage voiture à domicile verviers', 'lavage auto domicile verviers', 'valeting verviers'],
  alternates: { canonical: 'https://shineandgo.be/lavage-voiture-verviers' },
  openGraph: {
    title: 'Lavage Voiture à Domicile Verviers | Shine&Go',
    description: 'Lavage voiture à domicile à Verviers. Valeting professionnel, on vient chez vous pour un résultat showroom. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-verviers',
    siteName: 'Shine&Go', locale: 'fr_BE', type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Verviers",
  "description": "Service de lavage et detailing automobile à domicile à Verviers.",
  "url": "https://shineandgo.be/lavage-voiture-verviers", "telephone": "+32472303701",
  "address": { "@type": "PostalAddress", "addressLocality": "Verviers", "addressRegion": "Liège", "addressCountry": "BE" },
  "geo": { "@type": "GeoCoordinates", "latitude": "50.5891", "longitude": "5.8575" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "50" }
}

export default function VerviersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <VerviersClient />
    </>
  )
}
