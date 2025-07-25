// Données structurées spécifiques pour les pages de villes
export const generateCityStructuredData = (
  citySlug: string, 
  cityName: string, 
  additionalData?: {
    title?: string;
    description?: string;
    price?: string;
    currency?: string;
    datePublished?: string;
    dateModified?: string;
    imageDescription?: string;
    breadcrumb?: {
      l1: { name: string; url: string };
      l2: { name: string; url: string };
      l3: { name: string; url: string };
    };
    faqs?: Array<{ question: string; answer: string }>;
  }
) => {
  const baseUrl = `https://www.shineandgo.be/nettoyage-voiture-${citySlug}`;
  
  // Utiliser les données du CSV ou les valeurs par défaut
  const title = additionalData?.title || `Nettoyage Auto ${cityName} - Shine&Go Premium`;
  const description = additionalData?.description || `Service de nettoyage automobile premium à ${cityName} et ses environs. Intervention mobile avec produits haut de gamme Koch Chemie.`;
  const price = additionalData?.price || "39";
  const currency = additionalData?.currency || "EUR";
  const datePublished = additionalData?.datePublished || "2025-01-01";
  const dateModified = additionalData?.dateModified || "2025-01-24";
  
  // FAQ personnalisées du CSV ou par défaut
  const faqs = additionalData?.faqs || [
    {
      question: `Combien coûte un nettoyage auto à ${cityName} ?`,
      answer: `Nos tarifs à ${cityName} varient selon le type de véhicule : 39€ pour une citadine, 44€ pour une berline, 49€ pour un break. Le pack complet (intérieur + extérieur) démarre à 79€.`
    },
    {
      question: `Quels sont les horaires d'intervention à ${cityName} ?`,
      answer: `Nous intervenons 7j/7 à ${cityName} de 8h à 20h, y compris les weekends. Idéal pour les professionnels ou les résidents des quartiers périphériques.`
    },
    {
      question: `Faites-vous le nettoyage dans les parkings de ${cityName} ?`,
      answer: `Oui, nous intervenons dans tous les parkings de ${cityName}, y compris les parkings privés des entreprises et les zones résidentielles.`
    },
    {
      question: `Quels produits utilisez-vous à ${cityName} ?`,
      answer: `Nous utilisons exclusivement des produits professionnels Koch Chemie, ProtectorWax et CarPro Perl pour garantir un résultat durable et professionnel à ${cityName}.`
    },
    {
      question: `Proposez-vous une garantie à ${cityName} ?`,
      answer: `Oui, toutes nos prestations à ${cityName} incluent notre garantie satisfaction. Si vous n'êtes pas satisfait, nous refaisons le nettoyage gratuitement.`
    }
  ];
  
  // Fil d'Ariane personnalisé du CSV ou par défaut
  const breadcrumb = additionalData?.breadcrumb || {
    l1: { name: "Accueil", url: "https://www.shineandgo.be" },
    l2: { name: "Nettoyage voiture", url: "https://www.shineandgo.be/#services" },
    l3: { name: `Nettoyage voiture à ${cityName}`, url: baseUrl }
  };
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": baseUrl,
        "name": title,
        "description": description,
        "url": baseUrl,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "publisher": {
          "@type": "Organization",
          "name": "Shine&Go Premium",
          "url": "https://www.shineandgo.be"
        },
        "mainEntity": {
          "@type": "Service",
          "@id": `${baseUrl}#service`,
          "name": title,
          "description": description,
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
              "price": price,
              "priceCurrency": currency,
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
              "priceCurrency": currency,
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
              "priceCurrency": currency,
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
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}#faq`,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": breadcrumb.l1.name,
            "item": breadcrumb.l1.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": breadcrumb.l2.name,
            "item": breadcrumb.l2.url
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": breadcrumb.l3.name,
            "item": breadcrumb.l3.url
          }
        ]
      }
    ]
  };
}; 