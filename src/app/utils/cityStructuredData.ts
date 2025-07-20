// Données structurées spécifiques pour les pages de villes
export const generateCityStructuredData = (citySlug: string, cityName: string) => {
  const baseUrl = `https://www.shineandgo.be/zone-intervention/${citySlug}`;
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${baseUrl}#service`,
        "name": `Nettoyage Auto ${cityName} - Shine&Go Premium`,
        "description": `Service de nettoyage automobile premium à ${cityName} et ses environs. Intervention mobile avec produits haut de gamme Koch Chemie. ProtectorWax, CarPro Perl inclus. Satisfaction garantie.`,
        "url": baseUrl,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.shineandgo.be/#business",
          "name": "Shine&Go Premium",
          "url": "https://www.shineandgo.be",
          "telephone": "+32472303701",
          "email": "contact@shinego.be",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue Moreau, 20",
            "addressLocality": "Herve",
            "postalCode": "4650",
            "addressCountry": "BE",
            "addressRegion": "Liège"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.6391,
            "longitude": 5.7924
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Monday",
              "opens": "08:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Tuesday",
              "opens": "08:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Wednesday",
              "opens": "08:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Thursday",
              "opens": "08:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Friday",
              "opens": "08:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "08:00",
              "closes": "20:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": cityName
        },
        "serviceType": [
          "Nettoyage automobile",
          "Car wash",
          "Détailing automobile",
          "Nettoyage intérieur voiture",
          "Nettoyage extérieur voiture",
          "Traitement hydrophobe",
          "Protection plastiques"
        ],
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage extérieur complet",
              "description": `Lavage carrosserie, vitres, jantes avec produits professionnels Koch Chemie à ${cityName}`
            },
            "price": "35",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage intérieur premium",
              "description": `Nettoyage complet de l'habitacle avec produits spécialisés à ${cityName}`
            },
            "price": "30",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
                      {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pack complet",
                "description": `Nettoyage intérieur et extérieur avec traitements de protection à ${cityName}`
              },
              "price": "65",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
        ],
        "potentialAction": {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto à ${cityName}`,
            "inLanguage": "fr",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "result": {
            "@type": "Reservation",
            "name": `Réservation service de nettoyage à ${cityName}`
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Services de nettoyage automobile à ${cityName}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Nettoyage extérieur complet",
                "description": `Lavage carrosserie, vitres, jantes avec produits professionnels Koch Chemie à ${cityName}`
              },
              "price": "35",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Nettoyage intérieur premium",
                "description": `Nettoyage complet de l'habitacle avec produits spécialisés à ${cityName}`
              },
              "price": "30",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pack complet",
                "description": `Nettoyage intérieur et extérieur avec traitements de protection à ${cityName}`
              },
              "price": "65",
              "priceCurrency": "EUR"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Combien coûte un nettoyage auto à ${cityName} ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Nos tarifs à ${cityName} varient selon le type de véhicule : 39€ pour une citadine, 44€ pour une berline, 49€ pour un break. Le pack complet (intérieur + extérieur) démarre à 79€.`
            }
          },
          {
            "@type": "Question",
            "name": `Quels sont les horaires d'intervention à ${cityName} ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Nous intervenons 7j/7 à ${cityName} de 8h à 20h, y compris les weekends. Idéal pour les professionnels ou les résidents des quartiers périphériques.`
            }
          },
          {
            "@type": "Question",
            "name": `Faites-vous le nettoyage dans les parkings de ${cityName} ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Oui, nous intervenons dans tous les parkings de ${cityName}, y compris les parkings privés des entreprises et les zones résidentielles.`
            }
          },
          {
            "@type": "Question",
            "name": `Quels produits utilisez-vous à ${cityName} ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Nous utilisons exclusivement des produits professionnels Koch Chemie, ProtectorWax et CarPro Perl pour garantir un résultat durable et professionnel à ${cityName}.`
            }
          },
          {
            "@type": "Question",
            "name": `Proposez-vous une garantie à ${cityName} ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Oui, toutes nos prestations à ${cityName} incluent notre garantie satisfaction. Si vous n'êtes pas satisfait, nous refaisons le nettoyage gratuitement.`
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.shineandgo.be"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Zones d'intervention",
            "item": "https://www.shineandgo.be/zone-intervention"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `Nettoyage auto ${cityName}`,
            "item": baseUrl
          }
        ]
      }
    ]
  };
}; 