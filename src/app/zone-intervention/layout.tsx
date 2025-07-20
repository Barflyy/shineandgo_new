import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Nettoyage Voiture à Domicile : 60 Zones d'Intervention Province de Liège – Shine&Go",
  description: "🚗 Service mobile Premium Car Care de nettoyage voiture à domicile dans 60+ villes de la Province de Liège. Valeting auto mobile avec produits Koch Chemie. Déplacement gratuit ≤25km.",
  keywords: [
    'nettoyage voiture domicile',
    'valeting auto mobile',
    'detailing Liège',
    'nettoyage auto province Liège',
    'car wash domicile',
    'service automobile mobile',
    'Premium Car Care',
    'Koch Chemie',
    'zones intervention',
    'Province de Liège',
    'Verviers',
    'Spa',
    'Huy',
    'Herve',
    'Eupen',
    'Chaudfontaine',
    'Seraing',
    'Theux',
    'Aywaille'
  ],
  openGraph: {
    title: "Nettoyage Voiture à Domicile : 60 Zones d'Intervention Province de Liège",
    description: "Service mobile Premium Car Care de nettoyage voiture à domicile dans 60+ villes de la Province de Liège. Valeting auto mobile avec produits Koch Chemie.",
    url: 'https://www.shineandgo.be/zone-intervention',
    siteName: 'Shine&Go Premium Car Care',
    images: [
      {
        url: 'https://www.shineandgo.be/og-zones-intervention.jpg',
        width: 1200,
        height: 630,
        alt: 'Zones d\'intervention Shine&Go - Province de Liège'
      }
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nettoyage Voiture à Domicile : 60 Zones d'Intervention Province de Liège",
    description: "Service mobile Premium Car Care de nettoyage voiture à domicile dans 60+ villes de la Province de Liège.",
    images: ['https://www.shineandgo.be/og-zones-intervention.jpg'],
  },
  alternates: {
    canonical: 'https://www.shineandgo.be/zone-intervention',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'BE-WLX',
    'geo.placename': 'Province de Liège',
    'DC.subject': 'Zones intervention, Nettoyage mobile, Car wash domicile, Service automobile, Premium Car Care',
  },
};

export default function ZonesInterventionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      
      {/* Schema.org LocalBusiness pour zones d'intervention */}
      <Script
        id="zones-intervention-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine&Go Premium - Zones d'Intervention",
            "description": "Service mobile Premium Car Care de nettoyage automobile dans 60+ villes de la Province de Liège : Liège, Verviers, Spa, Huy, Herve et toute la région.",
            "url": "https://www.shineandgo.be/zone-intervention",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rue Moreau, 20",
              "addressLocality": "Herve",
              "postalCode": "4650",
              "addressCountry": "BE",
              "addressRegion": "Province de Liège"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.6391,
              "longitude": 5.7924
            },
            "serviceArea": {
              "@type": "State",
              "name": "Province de Liège"
            },
            "areaServed": [
              { "@type": "City", "name": "Liège" },
              { "@type": "City", "name": "Verviers" },
              { "@type": "City", "name": "Seraing" },
              { "@type": "City", "name": "Herstal" },
              { "@type": "City", "name": "Ans" },
              { "@type": "City", "name": "Saint-Nicolas" },
              { "@type": "City", "name": "Flémalle" },
              { "@type": "City", "name": "Chaudfontaine" },
              { "@type": "City", "name": "Huy" },
              { "@type": "City", "name": "Spa" },
              { "@type": "City", "name": "Theux" },
              { "@type": "City", "name": "Aywaille" },
              { "@type": "City", "name": "Eupen" },
              { "@type": "City", "name": "Herve" },
              { "@type": "City", "name": "Dison" }
            ],
            "openingHours": "Mo-Su 08:00-20:00",
            "priceRange": "39€-149€",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de nettoyage automobile mobile",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage Auto Mobile",
                    "description": "Service de nettoyage automobile à domicile dans toutes nos zones d'intervention"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "30",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Intervenez-vous à Eupen ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, nous intervenons dans toute la Province de Liège, y compris Eupen et les communes germanophones."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps dure l'intervention ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Entre 90 minutes et 3 heures selon la formule choisie et l'état de votre véhicule."
                }
              },
              {
                "@type": "Question",
                "name": "Quels produits utilisez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous utilisons exclusivement les produits professionnels Koch-Chemie, reconnus pour leur qualité et leur respect des peintures."
                }
              },
              {
                "@type": "Question",
                "name": "Comment réserver ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "C'est simple ! Cliquez sur 'Réserver en 3 clics', choisissez votre créneau et votre formule. Ou contactez-nous par WhatsApp pour une réponse immédiate."
                }
              }
            ]
          })
        }}
      />
    </>
  );
} 