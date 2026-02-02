import type { Metadata } from 'next'
import AnsClient from './AnsClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Ans | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Ans (Liège). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture ans', 'nettoyage voiture à domicile ans', 'lavage auto domicile ans', 'valeting ans'],
  alternates: { canonical: 'https://shineandgo.be/lavage-voiture-ans' },
  openGraph: { title: 'Lavage Voiture à Domicile Ans | Shine&Go', url: 'https://shineandgo.be/lavage-voiture-ans', siteName: 'Shine&Go', locale: 'fr_BE', type: 'website' },
}

const schema = { "@context": "https://schema.org", "@type": "AutoWash", "name": "Shine&Go - Lavage voiture Ans", "url": "https://shineandgo.be/lavage-voiture-ans", "telephone": "+32472303701", "address": { "@type": "PostalAddress", "addressLocality": "Ans", "addressRegion": "Liège", "addressCountry": "BE" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "50" } }

export default function AnsPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><AnsClient /></>)
}
