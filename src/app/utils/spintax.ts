// Système de spintax pour varier le contenu des pages
// Format: {option1|option2|option3}

export interface SpintaxVariants {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  cta: string;
  faqQuestions: string[];
  faqAnswers: string[];
  altImages: string[];
  ogTitle: string;
  ogDescription: string;
  longTailKeywords: string[];
}

// Fonction pour parser le spintax et sélectionner une option déterministe
export function parseSpintax(spintax: string, seed: string = ''): string {
  const regex = /\{([^}]+)\}/g;
  return spintax.replace(regex, (match, options) => {
    const variants = options.split('|');
    // Utiliser le seed pour déterminer l'index de manière déterministe
    const hash = seed.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    const index = Math.abs(hash) % variants.length;
    return variants[index].trim();
  });
}

// Fonction pour remplacer les variables dans le spintax
export function replaceVariables(text: string, variables: Record<string, string>): string {
  let result = text;
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  });
  return result;
}

// Fonction pour générer du contenu varié pour une ville
export function generateVariedContent(cityName: string): {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  cta: string;
  faqQuestions: string[];
  faqAnswers: string[];
  altImages: string[];
  ogTitle: string;
  ogDescription: string;
  longTailKeywords: string[];
} {
  const variables = { Ville: cityName };
  
  return {
    title: parseSpintax(replaceVariables(spintaxVariants.title, variables), cityName),
    metaDescription: parseSpintax(replaceVariables(spintaxVariants.metaDescription, variables), cityName + 'meta'),
    h1: parseSpintax(replaceVariables(spintaxVariants.h1, variables), cityName + 'h1'),
    intro: parseSpintax(replaceVariables(spintaxVariants.intro, variables), cityName + 'intro'),
    cta: parseSpintax(replaceVariables(spintaxVariants.cta, variables), cityName + 'cta'),
    faqQuestions: spintaxVariants.faqQuestions.map((q, index) => 
      parseSpintax(replaceVariables(q, variables), cityName + 'faqq' + index)
    ),
    faqAnswers: spintaxVariants.faqAnswers.map((a, index) => 
      parseSpintax(replaceVariables(a, variables), cityName + 'faqa' + index)
    ),
    altImages: spintaxVariants.altImages.map((alt, index) => 
      parseSpintax(replaceVariables(alt, variables), cityName + 'alt' + index)
    ),
    ogTitle: parseSpintax(replaceVariables(spintaxVariants.ogTitle, variables), cityName + 'ogtitle'),
    ogDescription: parseSpintax(replaceVariables(spintaxVariants.ogDescription, variables), cityName + 'ogdesc'),
    longTailKeywords: spintaxVariants.longTailKeywords.map(keyword => 
      replaceVariables(keyword, variables)
    )
  };
}

// Variantes spintax pour chaque bloc commun
export const spintaxVariants: SpintaxVariants = {
  title: "{Nettoyage|Lavage|Detailing} voiture {à domicile|mobile} à {{Ville}} | {Shine&Go|Shine & Go|Expert auto}",
  
  metaDescription: "{Lavage|Nettoyage} {intérieur & extérieur|complet|auto premium} à domicile à {{Ville}}. {Résultat showroom garanti|Finition professionnelle|Service haut de gamme}, {dès 39€|à partir de 49€|formule complète dès 79€}. {Déplacement gratuit ≤ 25 km|Créneau garanti sous 72 h|Produits Koch-Chemie & CarPro}.",
  
  h1: "{Nettoyage|Lavage} voiture {intérieur / extérieur|complet|premium} à domicile à {{Ville}} (Wallonie)",
  
  intro: "À {{Ville}}, Shine&Go {vient chez vous|se déplace à domicile|intervient directement} pour un {nettoyage|lavage} voiture {rapide et professionnel|premium sans déplacement|complet et efficace}. {Fini les files au car wash|Plus besoin de vous déplacer|Gagnez du temps, on vient à vous} !",
  
  cta: "{Réservez|Bloquez} votre {créneau|rendez-vous} de {nettoyage|lavage} voiture à {{Ville}} {dès maintenant|aujourd'hui|cette semaine} – {créneau sous 72 h|devis gratuit|satisfaction garantie}.",
  
  faqQuestions: [
    "Combien coûte un {nettoyage|lavage} voiture à domicile à {{Ville}} ?",
    "Faut-il prévoir un {point d'eau|robinet} et une prise 230 V pour l'intervention ?",
    "Pouvez-vous intervenir {le week-end|en soirée} à {{Ville}} ?",
    "Quelle est la différence avec un car wash classique ?"
  ],
  
  faqAnswers: [
    "Nos formules {démarrent|commencent} à {39€ pour l'intérieur|49€ pour l'extérieur|79€ pour le complet}. Le tarif dépend du type de véhicule (citadine, SUV, utilitaire…).",
    "Oui, un simple {robinet et une prise 230 V|point d'eau + prise} suffisent. Contactez-nous si vous ne pouvez pas en fournir, nous trouverons une solution.",
    "Oui, selon nos disponibilités. Indiquez vos contraintes lors de la réservation pour que nous nous adaptions.",
    "Nous {évitions|remplaçons} les rouleaux agressifs : tout est fait à la main, avec des produits premium pour protéger votre carrosserie et votre habitacle."
  ],
  
  altImages: [
    "nettoyage voiture à domicile {{Ville}}",
    "lavage auto {{Ville}} Shine&Go",
    "detailing auto professionnel {{Ville}}",
    "aspiration habitacle {{Ville}}"
  ],
  
  ogTitle: "{Nettoyage|Lavage} voiture à {{Ville}} - {Shine&Go|Expert auto}",
  
  ogDescription: "{Service de nettoyage|Lavage professionnel} automobile à {{Ville}}. {Nettoyage complet|Lavage premium} intérieur/extérieur avec produits haut de gamme. {Intervention à domicile|Service mobile}.",
  
  longTailKeywords: [
    "nettoyage voiture {{Ville}}",
    "lavage auto {{Ville}}",
    "detailing voiture {{Ville}}",
    "nettoyage intérieur voiture {{Ville}}",
    "lavage extérieur voiture {{Ville}}",
    "valeting voiture {{Ville}}",
    "nettoyage professionnel voiture {{Ville}}",
    "car wash mobile {{Ville}}",
    "nettoyage voiture à domicile {{Ville}}",
    "lavage voiture premium {{Ville}}"
  ]
};



// Fonction pour générer plusieurs variantes (utile pour les tests)
export function generateMultipleVariants(cityName: string, count: number = 5) {
  const variants = [];
  for (let i = 0; i < count; i++) {
    variants.push(generateVariedContent(cityName));
  }
  return variants;
} 