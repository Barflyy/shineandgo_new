import type { Metadata } from 'next'
import LavageInterieurClient from './LavageInterieurClient'

export const metadata: Metadata = {
  title: 'Lavage Intérieur Voiture à Domicile | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🧹 Lavage intérieur voiture à domicile près de Herve, Liège, Verviers. Aspiration, plastiques, vitres, désodorisation. Produits Koch-Chemie. Dès 80€ !',
  alternates: {
    canonical: 'https://shineandgo.be/lavage-interieur-voiture',
  },
  openGraph: {
    title: 'Lavage Intérieur Voiture à Domicile | Shine&Go',
    description: 'Nettoyage intérieur voiture professionnel à domicile. Aspiration, plastiques, tapis, désodorisation. Dès 80€.',
    url: 'https://shineandgo.be/lavage-interieur-voiture',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lavage Intérieur Voiture à Domicile",
  "description": "Nettoyage complet de l'habitacle : aspiration, tapis, plastiques, tableau de bord, vitres intérieures. Finitions au pinceau et désodorisation.",
  "image": "https://shineandgo.be/images/realisations/lavage-complet-bmw-serie4.webp",
  "brand": { "@type": "Brand", "name": "Shine&Go" },
  "offers": {
    "@type": "Offer",
    "price": "80",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31",
    "url": "https://shineandgo.be/lavage-interieur-voiture"
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "50" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Combien coûte un nettoyage intérieur voiture à domicile ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos tarifs démarrent à 80€ pour un nettoyage intérieur complet. Un supplément s'applique selon la taille du véhicule." } },
    { "@type": "Question", "name": "Que comprend le nettoyage intérieur ?", "acceptedAnswer": { "@type": "Answer", "text": "Aspiration complète, nettoyage des plastiques et tableau de bord, vitres intérieures, tapis et moquettes, désodorisation." } },
    { "@type": "Question", "name": "Combien de temps dure l'intervention ?", "acceptedAnswer": { "@type": "Answer", "text": "Un nettoyage intérieur complet dure environ 1h30 à 2h selon l'état du véhicule." } }
  ]
}

export default function LavageInterieurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LavageInterieurClient />
    </>
  )
}
