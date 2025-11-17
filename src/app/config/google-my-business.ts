export const googleMyBusinessConfig = {
  // Informations de base
  businessName: "Shine&Go – Nettoyage auto à domicile",
  businessId: "BE1014725710", // Remplacez par votre vrai ID d'entreprise
  website: "https://shineandgo.be",
  
  // Place ID pour l'API Google My Business
  placeId: "0x66682fcc80bbecd1:0xe1f7275cce87435a", // Place ID de Shine&Go
  
  // API Configuration (optionnel)
  api: {
    googleMapsApiKey: "VOTRE_API_KEY_ICI", // Optionnel pour l'API
    enableDynamicData: false, // Mettre à true pour utiliser l'API
  },
  
  // Coordonnées
  address: {
    street: "Rue Moreau 20",
    city: "Herve",
    postalCode: "4650",
    country: "Belgique",
    fullAddress: "Rue Moreau 20, 4650 Herve, Belgique"
  },
  
  // Contact
  phone: "+32 472 30 37 01",
  whatsapp: "+32472303701",
  email: "contact@shinego.be",
  
  // Horaires d'ouverture
  openingHours: "24h/24",
  
  // Évaluations (seront mises à jour dynamiquement si API activée)
  rating: 5.0,
  reviewCount: 8,
  
  // Services
  services: [
    "Nettoyage Voiture Mobile",
    "Auto Detailing", 
    "Interior Cleaning",
    "Exterior Cleaning",
    "Premium Car Care"
  ],
  
  // Zones desservies
  serviceAreas: ["Herve", "Verviers", "Dison", "Spa", "Limbourg"],
  
  // Liens sociaux
  socialLinks: {
    whatsapp: "https://wa.me/32472303701",
    googleMaps: "https://maps.google.com/?q=Rue+Moreau,+20,+4650+Herve,+Belgique",
    googleMyBusiness: "https://www.google.com/maps/place/Shine%26Go+-+Nettoyage+de+v%C3%A9hicule+%C3%A0+domicile/@50.6281936,5.8222362,17z/data=!4m10!1m2!2m1!1sshine%26go!3m6!1s0x66682fcc80bbecd1:0xe1f7275cce87435a!8m2!3d50.6281936!4d5.8222362!15sCghzaGluZSZnb5IBFWNhcl9kZXRhaWxpbmdfc2VydmljZeABAA!16s%2Fg%2F11lw26gty6"
  },
  
  // Configuration SEO
  seo: {
    title: "Shine&Go – Nettoyage voiture premium à domicile à Herve",
    description: "Service premium de nettoyage automobile à Herve et dans la région. Nettoyage voiture haut de gamme, intérieur et extérieur, service mobile à domicile 7j/7.",
    keywords: "nettoyage voiture premium, nettoyage auto, lavage voiture, Herve, Verviers, Dison, Spa, Limbourg, service à domicile"
  }
};

// Fonction pour récupérer les données depuis l'API Google (si configurée)
export const fetchGoogleMyBusinessData = async () => {
  if (!googleMyBusinessConfig.api.enableDynamicData || !googleMyBusinessConfig.placeId) {
    return null;
  }

  try {
    // Exemple d'appel API (nécessite une API Key)
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${googleMyBusinessConfig.placeId}&fields=rating,user_ratings_total,reviews&key=${googleMyBusinessConfig.api.googleMapsApiKey}`
    );
    
    if (!response.ok) {
      throw new Error('Erreur API Google');
    }
    
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Erreur lors de la récupération des données GMB:', error);
    return null;
  }
};

// Fonction pour générer les données structurées Schema.org
export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shineandgo.be/#business",
    "name": googleMyBusinessConfig.businessName,
    "alternateName": "Shine&Go",
    "description": googleMyBusinessConfig.seo.description,
    "url": googleMyBusinessConfig.website,
    "telephone": googleMyBusinessConfig.phone,
    "email": googleMyBusinessConfig.email,
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": googleMyBusinessConfig.address.street,
      "addressLocality": googleMyBusinessConfig.address.city,
      "postalCode": googleMyBusinessConfig.address.postalCode,
      "addressCountry": "BE",
      "addressRegion": "Liège"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6391,
      "longitude": 5.7924
    },
    "openingHours": googleMyBusinessConfig.openingHours,
    "areaServed": googleMyBusinessConfig.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": googleMyBusinessConfig.rating,
      "reviewCount": googleMyBusinessConfig.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "sameAs": [
      googleMyBusinessConfig.socialLinks.whatsapp,
      googleMyBusinessConfig.socialLinks.googleMaps
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": googleMyBusinessConfig.phone,
      "contactType": "customer service",
      "availableLanguage": ["French", "Dutch"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${googleMyBusinessConfig.socialLinks.whatsapp}?text=Bonjour, je souhaite réserver un service de nettoyage automobile.`,
        "inLanguage": "fr",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Réservation service de nettoyage"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de nettoyage automobile",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nettoyage extérieur complet",
            "description": "Lavage carrosserie, vitres, jantes avec produits professionnels Koch Chemie"
          },
          "price": 85,
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nettoyage intérieur premium",
            "description": "Nettoyage complet de l'habitacle avec produits spécialisés"
          },
          "price": 65,
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pack complet",
            "description": "Nettoyage intérieur et extérieur avec traitements de protection"
          },
          "price": 120,
          "priceCurrency": "EUR"
        }
      ]
    },
    "foundingDate": "2024",
    "numberOfEmployees": 2,
    "knowsAbout": [
      "Nettoyage automobile professionnel",
      "Produits Koch Chemie",
      "Traitement hydrophobe",
      "Protection plastiques",
      "Service mobile à domicile"
    ]
  };
}; 