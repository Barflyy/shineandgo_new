import type { Metadata } from 'next'
import PrixClient from './PrixClient'

export const metadata: Metadata = {
  title: 'Prix Lavage Voiture à Domicile | Tarifs 2026 - Shine&Go',
  description: '💰 Tarifs lavage voiture à domicile : Intérieur 80€, Extérieur 80€, Complet 150€. Déplacement gratuit près de Herve, Liège, Verviers. Devis gratuit !',
  keywords: ['prix lavage voiture domicile', 'tarif nettoyage voiture', 'cout lavage auto', 'prix detailing voiture'],
  alternates: {
    canonical: 'https://shineandgo.be/prix-lavage-voiture-domicile',
  },
  openGraph: {
    title: 'Prix Lavage Voiture à Domicile | Shine&Go',
    description: 'Tarifs transparents : Intérieur 80€, Extérieur 80€, Complet 150€. Déplacement gratuit.',
    url: 'https://shineandgo.be/prix-lavage-voiture-domicile',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const priceSchema = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  "name": "Tarifs Lavage Voiture à Domicile Shine&Go",
  "description": "Grille tarifaire des services de lavage automobile à domicile",
  "priceCurrency": "EUR"
}

export default function PrixPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }} />
      <PrixClient />
    </>
  )
}
