import type { Metadata } from 'next'
import MelenClient from './MelenClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Melen | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Melen (Soumagne). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture melen', 'nettoyage voiture à domicile melen', 'lavage auto domicile soumagne', 'valeting melen'],
  alternates: { canonical: 'https://shineandgo.be/lavage-voiture-melen' },
  openGraph: { title: 'Lavage Voiture à Domicile Melen | Shine&Go', url: 'https://shineandgo.be/lavage-voiture-melen', siteName: 'Shine&Go', locale: 'fr_BE', type: 'website' },
}

const schema = { "@context": "https://schema.org", "@type": "AutoWash", "name": "Shine&Go - Lavage voiture Melen", "url": "https://shineandgo.be/lavage-voiture-melen", "telephone": "+32472303701", "address": { "@type": "PostalAddress", "addressLocality": "Melen", "addressRegion": "Liège", "addressCountry": "BE" } }

export default function MelenPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><MelenClient /></>) }
