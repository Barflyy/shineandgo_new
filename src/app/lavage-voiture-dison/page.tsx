import type { Metadata } from 'next'
import DisonClient from './DisonClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Dison | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Dison (Verviers). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture dison', 'nettoyage voiture à domicile dison', 'lavage auto domicile dison', 'valeting dison'],
  alternates: { canonical: 'https://shineandgo.be/lavage-voiture-dison' },
  openGraph: { title: 'Lavage Voiture à Domicile Dison | Shine&Go', url: 'https://shineandgo.be/lavage-voiture-dison', siteName: 'Shine&Go', locale: 'fr_BE', type: 'website' },
}

const schema = { "@context": "https://schema.org", "@type": "AutoWash", "name": "Shine&Go - Lavage voiture Dison", "url": "https://shineandgo.be/lavage-voiture-dison", "telephone": "+32472303701", "address": { "@type": "PostalAddress", "addressLocality": "Dison", "addressRegion": "Liège", "addressCountry": "BE" } }

export default function DisonPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><DisonClient /></>) }
