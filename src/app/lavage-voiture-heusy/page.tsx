import type { Metadata } from 'next'
import HeusyClient from './HeusyClient'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Heusy | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage voiture à domicile à Heusy (Verviers). On vient chez vous ! ✅ Valeting professionnel ✅ Produits Koch-Chemie ✅ Note 5/5. Devis gratuit !',
  keywords: ['lavage voiture heusy', 'nettoyage voiture à domicile heusy', 'lavage auto domicile heusy', 'valeting heusy'],
  alternates: { canonical: 'https://shineandgo.be/lavage-voiture-heusy' },
  openGraph: { title: 'Lavage Voiture à Domicile Heusy | Shine&Go', url: 'https://shineandgo.be/lavage-voiture-heusy', siteName: 'Shine&Go', locale: 'fr_BE', type: 'website' },
}

const schema = { "@context": "https://schema.org", "@type": "AutoWash", "name": "Shine&Go - Lavage voiture Heusy", "url": "https://shineandgo.be/lavage-voiture-heusy", "telephone": "+32472303701", "address": { "@type": "PostalAddress", "addressLocality": "Heusy", "addressRegion": "Liège", "addressCountry": "BE" } }

export default function HeusyPage() { return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><HeusyClient /></>) }
