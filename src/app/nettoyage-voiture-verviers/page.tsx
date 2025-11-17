import { Metadata } from 'next';
import VerviersClientComponent from './VerviersClientComponent';

export const metadata: Metadata = {
  title: 'Nettoyage Voiture à Domicile Verviers | En 90min dès 49€ - Shine&Go',
  description: 'Nettoyage voiture à domicile à Verviers et environs (Dison, Pepinster, Jalhay, Spa). Service mobile professionnel en 90 min dès 49€. Produits Koch-Chemie. Résultat showroom garanti. ☎ 0472 30 37 01',
  keywords: 'nettoyage voiture verviers, lavage voiture verviers, car wash verviers, nettoyage auto verviers, lavage domicile verviers, detailing verviers, nettoyage voiture dison, lavage auto verviers 4800',
  openGraph: {
    title: 'Nettoyage Voiture Verviers | Service à Domicile dès 49€ - Shine&Go',
    description: 'Service mobile de nettoyage voiture à Verviers. Intérieur & extérieur, produits premium, résultat showroom garanti en 90 min.',
    url: 'https://shineandgo.be/nettoyage-voiture-verviers',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Nettoyage voiture Verviers - Résultat professionnel Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shineandgo.be/nettoyage-voiture-verviers',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Verviers',
    'geo.position': '50.5894;5.8632',
    'ICBM': '50.5894, 5.8632',
  },
};

export default function VerviersPage() {
  return (
    <>
      {/* Schema.org LocalBusiness pour SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine&Go - Nettoyage Voiture Verviers",
            "description": "Service mobile de nettoyage voiture à domicile à Verviers et environs (Dison, Pepinster, Jalhay, Spa)",
            "url": "https://shineandgo.be/nettoyage-voiture-verviers",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "priceRange": "€€",
            "openingHours": "Mo-Su 08:00-20:00",
            "image": "https://shineandgo.be/transformations/optimized/webp/apres01.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Verviers",
              "addressRegion": "Liège",
              "postalCode": "4800",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.5894",
              "longitude": "5.8632"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Verviers"
              },
              {
                "@type": "City",
                "name": "Dison"
              },
              {
                "@type": "City",
                "name": "Pepinster"
              },
              {
                "@type": "City",
                "name": "Jalhay"
              },
              {
                "@type": "City",
                "name": "Spa"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "50.5894",
                "longitude": "5.8632"
              },
              "geoRadius": "25000"
            },
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "currenciesAccepted": "EUR",
            "@id": "https://shineandgo.be/nettoyage-voiture-verviers",
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
      <VerviersClientComponent />
    </>
  );
}
