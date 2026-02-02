import type { Metadata } from 'next'
import LavageExterieurClient from './LavageExterieurClient'

export const metadata: Metadata = {
  title: 'Lavage Extérieur Voiture à Domicile | Dès 80€ ⭐ 5.0 - Shine&Go',
  description: '🚗 Lavage extérieur voiture à domicile près de Herve, Liège, Verviers. Technique 2 seaux anti-rayures, jantes, cire protection. Dès 80€ !',
  alternates: {
    canonical: 'https://shineandgo.be/lavage-exterieur-voiture',
  },
  openGraph: {
    title: 'Lavage Extérieur Voiture à Domicile | Shine&Go',
    description: 'Lavage extérieur voiture professionnel à domicile. Technique 2 seaux, jantes, cire. Dès 80€.',
    url: 'https://shineandgo.be/lavage-exterieur-voiture',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lavage Extérieur Voiture à Domicile",
  "description": "Lavage extérieur professionnel à la main : technique 2 seaux anti-rayures, nettoyage jantes, dégoudronnage, cire protection hydrophobe.",
  "image": "https://shineandgo.be/images/realisations/lavage-complet-audi-rs3.webp",
  "brand": { "@type": "Brand", "name": "Shine&Go" },
  "offers": {
    "@type": "Offer",
    "price": "80",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31",
    "url": "https://shineandgo.be/lavage-exterieur-voiture"
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "50" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Combien coûte un lavage extérieur voiture à domicile ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos tarifs démarrent à 80€ pour un lavage extérieur complet à la main. Un supplément s'applique selon la taille du véhicule." } },
    { "@type": "Question", "name": "La technique 2 seaux, c'est quoi ?", "acceptedAnswer": { "@type": "Answer", "text": "C'est la méthode professionnelle anti-rayures : un seau pour le shampoing, un pour rincer le gant. Cela évite de remettre les saletés sur la carrosserie et garantit 0 micro-rayure." } },
    { "@type": "Question", "name": "Avez-vous besoin d'eau ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, nous utilisons un nettoyeur haute pression professionnel. Nous avons besoin d'un robinet à moins de 25m." } }
  ]
}

export default function LavageExterieurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LavageExterieurClient />
    </>
  )
}
