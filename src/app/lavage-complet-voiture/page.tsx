import type { Metadata } from 'next'
import LavageCompletClient from './LavageCompletClient'

export const metadata: Metadata = {
  title: 'Lavage Complet Voiture à Domicile | Dès 150€ ⭐ 5.0 - Shine&Go',
  description: '✨ Lavage complet intérieur + extérieur à domicile près de Herve, Liège, Verviers. Formule tout-en-un. Économisez 10€. Résultat showroom !',
  alternates: {
    canonical: 'https://shineandgo.be/lavage-complet-voiture',
  },
  openGraph: {
    title: 'Lavage Complet Voiture à Domicile | Shine&Go',
    description: 'Lavage complet intérieur + extérieur à domicile. Formule économique. Dès 150€.',
    url: 'https://shineandgo.be/lavage-complet-voiture',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lavage Complet Voiture à Domicile",
  "description": "Lavage complet intérieur + extérieur : aspiration, plastiques, lavage main 2 seaux, jantes, cire hydrophobe. Service tout-en-un à domicile.",
  "image": "https://shineandgo.be/images/realisations/lavage-complet-bmw-x5.webp",
  "brand": { "@type": "Brand", "name": "Shine&Go" },
  "offers": {
    "@type": "Offer",
    "price": "150",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31",
    "url": "https://shineandgo.be/lavage-complet-voiture"
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "50" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Combien coûte un lavage complet à domicile ?", "acceptedAnswer": { "@type": "Answer", "text": "Dès 150€ pour intérieur + extérieur. Économisez 10€ par rapport aux formules séparées." } },
    { "@type": "Question", "name": "Combien de temps dure un lavage complet ?", "acceptedAnswer": { "@type": "Answer", "text": "Environ 2h à 2h30 selon l'état du véhicule." } },
    { "@type": "Question", "name": "Que comprend la formule complète ?", "acceptedAnswer": { "@type": "Answer", "text": "Tout l'intérieur (aspiration, plastiques, vitres, désodo) + tout l'extérieur (lavage main, jantes, cire)." } }
  ]
}

export default function LavageCompletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LavageCompletClient />
    </>
  )
}
