// Configuration des mots-clés long-tail pour le SEO
export const seoKeywords = {
  // Mots-clés principaux par ville
  cityKeywords: {
    herve: [
      "détailing herve",
      "service mobile nettoyage auto herve",
      "produits koch chemie herve",
      "protectorwax herve",
      "carpro perl herve"
    ],
    verviers: [
      "détailing verviers",
      "service mobile nettoyage auto verviers",
      "produits koch chemie verviers",
      "protectorwax verviers",
      "carpro perl verviers"
    ],
    dison: [
      "détailing dison",
      "service mobile nettoyage auto dison",
      "produits koch chemie dison",
      "protectorwax dison",
      "carpro perl dison"
    ],
    spa: [
      "détailing spa",
      "service mobile nettoyage auto spa",
      "produits koch chemie spa",
      "protectorwax spa",
      "carpro perl spa"
    ],
    liege: [
      "détailing liège",
      "service mobile nettoyage auto liège",
      "produits koch chemie liège",
      "protectorwax liège",
      "carpro perl liège"
    ]
  },

  // Mots-clés par type de service
  serviceKeywords: {
    nettoyageInterieur: [
      "nettoyage habitacle voiture",
      "nettoyage tableau de bord",
      "nettoyage sièges voiture",
      "nettoyage moquettes voiture",
      "aspiration voiture",
      "désinfection voiture",
      "nettoyage plastiques voiture",
      "nettoyage vitres intérieures",
      "traitement anti-odeurs voiture"
    ],
    nettoyageExterieur: [
      "lavage carrosserie",
      "nettoyage vitres extérieures",
      "nettoyage jantes",
      "nettoyage passages de roues",
      "lavage main voiture",
      "mousse active voiture",
      "séchage voiture",
      "nettoyage seuils voiture"
    ],
    traitementHydrophobe: [
      "traitement hydrophobe voiture",
      "protectorwax voiture",
      "protection carrosserie",
      "effet hydrophobe",
      "protection peinture voiture",
      "cire protection voiture",
      "traitement anti-eau",
      "protection durable voiture",
      "produits koch chemie",
      "protection showroom"
    ],
    protectionPlastiques: [
      "protection plastiques voiture",
      "carpro perl",
      "protection uv plastiques",
      "brillance plastiques voiture",
      "protection pare-chocs",
      "protection baguettes voiture",
      "protection rétroviseurs",
      "anti-vieillissement plastiques",
      "protection durable plastiques",
      "finition plastiques voiture"
    ]
  },

  // Mots-clés par type de véhicule
  vehicleKeywords: {
    citadine: [
      "détailing citadine",
      "service mobile citadine"
    ],
    berline: [
      "détailing berline",
      "service mobile berline"
    ],
    suv: [
      "détailing suv",
      "service mobile suv",
      "nettoyage 4x4"
    ],
    utilitaire: [
      "détailing utilitaire",
      "service mobile utilitaire"
    ]
  },

  // Mots-clés questions-réponses
  questionKeywords: [
    "durée nettoyage automobile",
    "temps nettoyage voiture",
    "produits nettoyage auto",
    "garantie nettoyage voiture",
    "villes intervention nettoyage",
    "horaires nettoyage auto",
    "comment réserver nettoyage",
    "que comprend nettoyage complet",
    "produits dangereux nettoyage",
    "services utilitaires nettoyage"
  ],

  // Mots-clés génériques
  genericKeywords: [
    "détailing automobile",
    "service mobile nettoyage",
    "produits professionnels nettoyage",
    "koch chemie",
    "protectorwax",
    "carpro perl",
    "avant après nettoyage",
    "garantie satisfaction nettoyage",
    "devis gratuit nettoyage",
    "service 7j/7 nettoyage",
    "nettoyage showroom"
  ]
};

// Fonction pour générer les mots-clés pour une ville spécifique
export const getCityKeywords = (citySlug: string): string[] => {
  const cityName = citySlug.toLowerCase();
  return seoKeywords.cityKeywords[cityName as keyof typeof seoKeywords.cityKeywords] || 
         seoKeywords.genericKeywords;
};

// Fonction pour générer les mots-clés pour un service spécifique
export const getServiceKeywords = (serviceType: string): string[] => {
  return seoKeywords.serviceKeywords[serviceType as keyof typeof seoKeywords.serviceKeywords] || 
         seoKeywords.genericKeywords;
};

// Fonction pour générer tous les mots-clés optimisés
export const getAllOptimizedKeywords = (): string[] => {
  const allKeywords: string[] = [];
  
  // Ajouter tous les mots-clés par catégorie
  Object.values(seoKeywords.cityKeywords).forEach(keywords => {
    allKeywords.push(...keywords);
  });
  
  Object.values(seoKeywords.serviceKeywords).forEach(keywords => {
    allKeywords.push(...keywords);
  });
  
  Object.values(seoKeywords.vehicleKeywords).forEach(keywords => {
    allKeywords.push(...keywords);
  });
  
  allKeywords.push(...seoKeywords.questionKeywords);
  allKeywords.push(...seoKeywords.genericKeywords);
  
  // Supprimer les doublons
  return [...new Set(allKeywords)];
}; 