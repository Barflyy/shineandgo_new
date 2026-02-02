import type { Metadata } from 'next'
import SpaClient from './SpaClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Spa | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Spa (Ardennes). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture spa', 'nettoyage voiture à domicile spa', 'lavage auto domicile spa', 'valeting spa'],
  alternates: { canonical: 'https://shineandgo.be/lavage-voiture-spa' },
  openGraph: {
    title: 'Lavage Voiture à Domicile Spa | Shine&Go',
    description: 'Lavage voiture à domicile à Spa. Service mobile de qualité. Nous venons chez vous pour un lavage complet. Devis gratuit.',
    url: 'https://shineandgo.be/lavage-voiture-spa',
    siteName: 'Shine&Go', locale: 'fr_BE', type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "AutoWash",
  "name": "Shine&Go - Lavage voiture Spa",
  "description": "Service de lavage et detailing automobile à domicile à Spa.",
  "url": "https://shineandgo.be/lavage-voiture-spa", "telephone": "+32472303701",
  "address": { "@type": "PostalAddress", "addressLocality": "Spa", "addressRegion": "Liège", "addressCountry": "BE" },
  "geo": { "@type": "GeoCoordinates", "latitude": "50.4942", "longitude": "5.8665" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "50" }
}

export default function SpaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <SpaClient />
    </>
  )
}
