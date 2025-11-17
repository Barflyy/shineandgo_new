import { Metadata } from 'next';
import HerveClientComponent from './HerveClientComponent';

export const metadata: Metadata = {
  title: 'Nettoyage Voiture à Domicile Herve | En 90min dès 49€ - Shine&Go',
  description: 'Nettoyage voiture à domicile à Herve et environs (Battice, Thimister, Clermont). Service mobile professionnel en 90 min dès 49€. Produits Koch-Chemie. Résultat showroom garanti. ☎ 0472 30 37 01',
  keywords: 'nettoyage voiture herve, lavage voiture herve, car wash herve, nettoyage auto herve, lavage domicile herve, detailing herve, nettoyage voiture battice, lavage auto herve 4650',
  openGraph: {
    title: 'Nettoyage Voiture Herve | Service à Domicile dès 49€ - Shine&Go',
    description: 'Service mobile de nettoyage voiture à Herve. Intérieur & extérieur, produits premium, résultat showroom garanti en 90 min.',
    url: 'https://shineandgo.be/nettoyage-voiture-herve',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Nettoyage voiture Herve - Résultat professionnel Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/nettoyage-voiture-herve',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Herve',
    'geo.position': '50.6386;5.7942',
    'ICBM': '50.6386, 5.7942',
  },
};

export default function HervePage() {
  return (
    <>
      {/* Schema.org LocalBusiness pour SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine&Go - Nettoyage Voiture Herve",
            "description": "Service mobile de nettoyage voiture à domicile à Herve et environs (Battice, Thimister, Clermont)",
            "url": "https://shineandgo.be/nettoyage-voiture-herve",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "priceRange": "€€",
            "openingHours": "Mo-Su 08:00-20:00",
            "image": "https://shineandgo.be/transformations/optimized/webp/apres01.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "postalCode": "4650",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.6386",
              "longitude": "5.7942"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Herve"
              },
              {
                "@type": "City",
                "name": "Battice"
              },
              {
                "@type": "City",
                "name": "Thimister"
              },
              {
                "@type": "City",
                "name": "Clermont"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "50.6386",
                "longitude": "5.7942"
              },
              "geoRadius": "25000"
            },
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "currenciesAccepted": "EUR",
            "@id": "https://shineandgo.be/nettoyage-voiture-herve",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de nettoyage automobile",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage intérieur voiture",
                    "description": "Nettoyage complet de l'intérieur du véhicule"
                  },
                  "price": "49",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage extérieur voiture",
                    "description": "Lavage et lustrage de la carrosserie"
                  },
                  "price": "45",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage complet voiture",
                    "description": "Nettoyage intérieur et extérieur complet"
                  },
                  "price": "79",
                  "priceCurrency": "EUR"
                }
              ]
            }
          })
        }}
      />
      <HerveClientComponent />
    </>
  );
}
