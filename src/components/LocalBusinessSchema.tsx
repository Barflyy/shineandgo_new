interface LocalBusinessSchemaProps {
  pageName?: string;
  pageUrl: string;
  city: string;
  postalCode: string;
  latitude: string;
  longitude: string;
  description?: string;
  areaServed?: string[];
}

export default function LocalBusinessSchema({
  pageName = "Shine&Go",
  pageUrl,
  city,
  postalCode,
  latitude,
  longitude,
  description = "Service mobile de nettoyage voiture à domicile",
  areaServed = []
}: LocalBusinessSchemaProps) {
  const areaServedArray = areaServed.length > 0 
    ? areaServed.map(area => ({
        "@type": "City",
        "name": area
      }))
    : [
        {
          "@type": "City",
          "name": city
        }
      ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": pageName,
    "description": description,
    "url": pageUrl,
    "telephone": "+32472303701",
    "email": "contact@shineandgo.be",
    "priceRange": "€€",
    "openingHours": "Mo-Su 08:00-20:00",
    "image": "https://shineandgo.be/transformations/optimized/webp/apres01.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "Liège",
      "postalCode": postalCode,
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "areaServed": areaServedArray,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      },
      "geoRadius": "25000"
    },
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "EUR",
    "@id": pageUrl,
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

