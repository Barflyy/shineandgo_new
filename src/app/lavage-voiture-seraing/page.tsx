import type { Metadata } from 'next'
import SeraingClient from './SeraingClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Seraing | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Seraing (Liège). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture seraing', 'nettoyage voiture à domicile seraing', 'lavage auto domicile seraing', 'valeting seraing'],
  alternates: { canonical: 'https://shineandgo.be/lavage-voiture-seraing' },
  openGraph: { title: 'Lavage Voiture à Domicile Seraing | Shine&Go', url: 'https://shineandgo.be/lavage-voiture-seraing', siteName: 'Shine&Go', locale: 'fr_BE', type: 'website' },
}

const schema = { "@context": "https://schema.org", "@type": "AutoWash", "name": "Shine&Go - Lavage voiture Seraing", "url": "https://shineandgo.be/lavage-voiture-seraing", "telephone": "+32472303701", "address": { "@type": "PostalAddress", "addressLocality": "Seraing", "addressRegion": "Liège", "addressCountry": "BE" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "50" } }

export default function SeraingPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SeraingClient /></>)
}
