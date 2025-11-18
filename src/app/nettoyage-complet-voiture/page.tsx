import { Metadata } from 'next'
import NettoyageCompletClient from './NettoyageCompletClient'

// ✅ MÉTADONNÉES OPTIMISÉES POUR LE CTR (Server Component)
export const metadata: Metadata = {
  title: 'Nettoyage Complet Voiture 🚗 En 90min dès 120€ | Shine&Go',
  description: '✨ Nettoyage complet voiture à domicile (intérieur + extérieur). Résultat showroom garanti. ⭐ 4.9/5 sur Google. Devis gratuit ☎ 0472 30 37 01',
  keywords: 'nettoyage complet voiture, lavage intérieur extérieur voiture, nettoyage voiture domicile, lavage voiture complet, detailing voiture, nettoyage auto complet, lavage voiture wallonie',
  openGraph: {
    title: 'Nettoyage Complet Voiture 🚗 Résultat Showroom | Shine&Go',
    description: '✨ Nettoyage complet voiture à domicile. Intérieur + Extérieur. Produits professionnels. ⭐ 4.9/5 - Devis gratuit',
    url: 'https://shineandgo.be/nettoyage-complet-voiture',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
    images: [
      {
        url: 'https://shineandgo.be/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Nettoyage complet voiture avant après - Shine&Go',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nettoyage Complet Voiture 🚗 En 90min dès 120€',
    description: '✨ Résultat showroom garanti. ⭐ 4.9/5 sur Google. Devis gratuit',
    images: ['https://shineandgo.be/transformations/optimized/webp/apres01.webp'],
  },
  alternates: {
    canonical: 'https://shineandgo.be/nettoyage-complet-voiture',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Herve, Verviers, Liège, Wallonie',
  },
};

// ✅ SERVER COMPONENT - Métadonnées indexées par Google
export default function Page() {
  return (
    <>
      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Nettoyage complet voiture",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Shine&Go",
              "image": "https://shineandgo.be/transformations/optimized/webp/apres01.webp",
              "telephone": "+32472303701",
              "email": "contact@shineandgo.be",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rue Moreau 20",
                "addressLocality": "Herve",
                "postalCode": "4650",
                "addressCountry": "BE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.6386",
                "longitude": "5.7942"
              },
              "url": "https://shineandgo.be",
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "87",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Herve"
              },
              {
                "@type": "City",
                "name": "Verviers"
              },
              {
                "@type": "City",
                "name": "Liège"
              },
              {
                "@type": "City",
                "name": "Battice"
              },
              {
                "@type": "City",
                "name": "Soumagne"
              }
            ],
            "offers": {
              "@type": "Offer",
              "price": "120",
              "priceCurrency": "EUR",
              "description": "Nettoyage complet voiture à domicile - Intérieur + Extérieur",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      
      {/* Client Component avec toute l'interactivité */}
      <NettoyageCompletClient />
    </>
  )
}
