// Configuration des mots-clés long-tail pour le SEO
export const seoKeywords = {
  // Mots-clés principaux par ville
  cityKeywords: {
    herve: [
      "nettoyage auto herve",
      "lavage voiture herve",
      "détailing herve",
      "nettoyage intérieur voiture herve",
      "nettoyage extérieur voiture herve",
      "service mobile nettoyage auto herve",
      "car wash herve",
      "nettoyage voiture domicile herve",
      "produits koch chemie herve",
      "protectorwax herve",
      "carpro perl herve"
    ],
    verviers: [
      "nettoyage auto verviers",
      "lavage voiture verviers",
      "détailing verviers",
      "nettoyage intérieur voiture verviers",
      "nettoyage extérieur voiture verviers",
      "service mobile nettoyage auto verviers",
      "car wash verviers",
      "nettoyage voiture domicile verviers",
      "produits koch chemie verviers",
      "protectorwax verviers",
      "carpro perl verviers"
    ],
    dison: [
      "nettoyage auto dison",
      "lavage voiture dison",
      "détailing dison",
      "nettoyage intérieur voiture dison",
      "nettoyage extérieur voiture dison",
      "service mobile nettoyage auto dison",
      "car wash dison",
      "nettoyage voiture domicile dison",
      "produits koch chemie dison",
      "protectorwax dison",
      "carpro perl dison"
    ],
    spa: [
      "nettoyage auto spa",
      "lavage voiture spa",
      "détailing spa",
      "nettoyage intérieur voiture spa",
      "nettoyage extérieur voiture spa",
      "service mobile nettoyage auto spa",
      "car wash spa",
      "nettoyage voiture domicile spa",
      "produits koch chemie spa",
      "protectorwax spa",
      "carpro perl spa"
    ],
    liege: [
      "nettoyage auto liège",
      "lavage voiture liège",
      "détailing liège",
      "nettoyage intérieur voiture liège",
      "nettoyage extérieur voiture liège",
      "service mobile nettoyage auto liège",
      "car wash liège",
      "nettoyage voiture domicile liège",
      "produits koch chemie liège",
      "protectorwax liège",
      "carpro perl liège"
    ]
  },

  // Mots-clés par type de service
  serviceKeywords: {
    nettoyageInterieur: [
      "nettoyage intérieur voiture",
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
      "nettoyage extérieur voiture",
      "lavage carrosserie",
      "nettoyage vitres extérieures",
      "nettoyage jantes",
      "nettoyage passages de roues",
      "lavage main voiture",
      "mousse active voiture",
      "séchage voiture",
      "nettoyage seuils voiture",
      "lavage professionnel voiture"
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
      "nettoyage citadine",
      "lavage citadine",
      "détailing citadine",
      "nettoyage voiture citadine",
      "service mobile citadine",
      "nettoyage intérieur citadine",
      "nettoyage extérieur citadine"
    ],
    berline: [
      "nettoyage berline",
      "lavage berline",
      "détailing berline",
      "nettoyage voiture berline",
      "service mobile berline",
      "nettoyage intérieur berline",
      "nettoyage extérieur berline"
    ],
    suv: [
      "nettoyage suv",
      "lavage suv",
      "détailing suv",
      "nettoyage voiture suv",
      "service mobile suv",
      "nettoyage intérieur suv",
      "nettoyage extérieur suv",
      "nettoyage 4x4"
    ],
    utilitaire: [
      "nettoyage utilitaire",
      "lavage utilitaire",
      "détailing utilitaire",
      "nettoyage fourgon",
      "service mobile utilitaire",
      "nettoyage intérieur utilitaire",
      "nettoyage extérieur utilitaire"
    ]
  },

  // Mots-clés questions-réponses
  questionKeywords: [
    "combien coûte nettoyage auto",
    "prix nettoyage voiture",
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
    "nettoyage automobile",
    "car wash",
    "détailing automobile",
    "service mobile nettoyage",
    "nettoyage voiture domicile",
    "produits professionnels nettoyage",
    "koch chemie",
    "protectorwax",
    "carpro perl",
    "nettoyage professionnel voiture",
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