import cityData from '../../../villes_shineandgo_enrichi.json';

export interface CityInfo {
  ville: string;
  region: string;
  voisines: string[];
  temoignage: {
    auteur: string;
    texte: string;
  };
  accroche: string;
}

export interface CityData {
  [key: string]: CityInfo;
}

export function getCityData(citySlug: string): CityInfo | null {
  const data = cityData as CityData;
  return data[citySlug] || null;
}

export function getAllCities(): string[] {
  const data = cityData as CityData;
  return Object.keys(data);
}

export function getNearbyCities(citySlug: string): string[] {
  const cityInfo = getCityData(citySlug);
  return cityInfo?.voisines || [];
}

export function getCityAccroche(citySlug: string): string {
  const cityInfo = getCityData(citySlug);
  if (!cityInfo) {
    return `À ${citySlug} et ses environs, Shine&Go vous propose un service de nettoyage auto premium directement à domicile.`;
  }

  // Créer des accroches plus uniques selon la ville
  const accrochesVariantes = [
    `Vous cherchez un car wash de qualité à ${cityInfo.ville} ? Shine&Go vous propose un service professionnel de nettoyage auto à domicile. En un clic, demandez votre devis gratuit via WhatsApp.`,
    `Service premium de nettoyage automobile à ${cityInfo.ville} et dans la région. Shine&Go intervient directement chez vous pour redonner l'éclat à votre véhicule.`,
    `À ${cityInfo.ville}, faites confiance à Shine&Go pour un nettoyage auto haut de gamme. Notre équipe se déplace à domicile avec des produits professionnels.`,
    `Nettoyage voiture premium à ${cityInfo.ville} : Shine&Go vous offre un service complet intérieur et extérieur directement chez vous.`,
    `À ${cityInfo.ville} et ses environs, Shine&Go transforme votre véhicule avec un nettoyage auto professionnel à domicile. Résultat garanti !`,
    `Découvrez le service de nettoyage auto premium de Shine&Go à ${cityInfo.ville}. Intervention à domicile avec produits haut de gamme.`,
    `À ${cityInfo.ville}, votre véhicule mérite le meilleur. Shine&Go vous propose un nettoyage auto professionnel directement chez vous.`,
    `Service de car wash mobile à ${cityInfo.ville} : Shine&Go vous garantit un nettoyage auto irréprochable à domicile.`,
    `À ${cityInfo.ville} et dans les environs, Shine&Go redonne l'éclat à votre véhicule avec un nettoyage auto premium à domicile.`,
    `Nettoyage voiture haut de gamme à ${cityInfo.ville} : Shine&Go intervient chez vous pour un résultat professionnel garanti.`
  ];

  // Utiliser le nom de la ville pour déterminer quelle variante utiliser
  const index = cityInfo.ville.length % accrochesVariantes.length;
  return accrochesVariantes[index];
}

// Nouvelle fonction pour générer du contenu personnalisé par ville
export function getCitySpecificContent(citySlug: string, contentType: 'services' | 'why-choose' | 'faq'): string {
  const cityInfo = getCityData(citySlug);
  if (!cityInfo) return '';

  const contentVariants = {
    services: [
      `Nos services de nettoyage auto à ${cityInfo.ville} incluent un lavage complet intérieur et extérieur avec des produits professionnels.`,
      `À ${cityInfo.ville}, nous proposons un service de nettoyage automobile premium avec intervention à domicile.`,
      `Service de car wash mobile à ${cityInfo.ville} : nettoyage intérieur et extérieur avec produits haut de gamme.`,
      `Découvrez nos prestations de nettoyage automobile à ${cityInfo.ville} : service complet intérieur et extérieur.`,
      `À ${cityInfo.ville}, bénéficiez d'un service de nettoyage auto professionnel avec intervention à domicile.`,
      `Service premium de nettoyage automobile à ${cityInfo.ville} : lavage complet avec produits haut de gamme.`,
      `À ${cityInfo.ville}, notre équipe vous propose un nettoyage auto complet intérieur et extérieur.`,
      `Découvrez le service de car wash mobile à ${cityInfo.ville} : nettoyage professionnel à domicile.`
    ],
    'why-choose': [
      `Choisissez Shine&Go à ${cityInfo.ville} pour un service de nettoyage auto professionnel et personnalisé.`,
      `À ${cityInfo.ville}, notre équipe vous garantit un nettoyage automobile de qualité avec intervention à domicile.`,
      `Faites confiance à Shine&Go à ${cityInfo.ville} pour redonner l'éclat à votre véhicule.`,
      `À ${cityInfo.ville}, optez pour un service de nettoyage auto premium avec intervention à domicile.`,
      `Choisissez l'excellence à ${cityInfo.ville} avec Shine&Go : nettoyage automobile professionnel.`,
      `À ${cityInfo.ville}, notre équipe vous assure un service de nettoyage auto de qualité premium.`,
      `Faites confiance à l'expertise de Shine&Go à ${cityInfo.ville} pour votre véhicule.`,
      `À ${cityInfo.ville}, découvrez un service de nettoyage automobile professionnel et personnalisé.`
    ],
    faq: [
      `Découvrez les réponses aux questions fréquentes sur nos services de nettoyage auto à ${cityInfo.ville}.`,
      `Tout savoir sur le nettoyage automobile à ${cityInfo.ville} : horaires, tarifs, zones d'intervention.`,
      `Questions fréquentes sur nos services de car wash mobile à ${cityInfo.ville} et ses environs.`,
      `Informations pratiques sur le nettoyage auto à ${cityInfo.ville} : tout ce que vous devez savoir.`,
      `Réponses aux questions courantes sur nos services de nettoyage automobile à ${cityInfo.ville}.`,
      `Tout savoir sur le car wash mobile à ${cityInfo.ville} : horaires, tarifs et zones d'intervention.`,
      `Questions fréquentes sur le nettoyage auto à ${cityInfo.ville} : service premium à domicile.`,
      `Informations complètes sur nos services de nettoyage automobile à ${cityInfo.ville} et environs.`
    ]
  };

  const variants = contentVariants[contentType];
  const index = cityInfo.ville.length % variants.length;
  return variants[index];
}

// Fonction pour générer du contenu spécifique par ville pour les sections
export function getCitySectionContent(citySlug: string, sectionType: 'why-choose-intro' | 'services-intro' | 'contact-intro'): string {
  const cityInfo = getCityData(citySlug);
  if (!cityInfo) return '';

  const sectionContent = {
    'why-choose-intro': [
      `Découvrez pourquoi les habitants de ${cityInfo.ville} choisissent Shine&Go pour leur nettoyage automobile.`,
      `À ${cityInfo.ville}, faites confiance à l'expertise de Shine&Go pour votre véhicule.`,
      `Les clients de ${cityInfo.ville} apprécient notre service de nettoyage auto premium.`,
      `À ${cityInfo.ville}, votre satisfaction est notre priorité. Découvrez nos avantages.`,
      `Les habitants de ${cityInfo.ville} nous font confiance pour leur nettoyage automobile.`,
      `À ${cityInfo.ville}, nous vous garantissons un service de nettoyage auto exceptionnel.`,
      `Découvrez les raisons de choisir Shine&Go à ${cityInfo.ville} pour votre véhicule.`,
      `À ${cityInfo.ville}, nous nous engageons pour votre satisfaction totale.`
    ],
    'services-intro': [
      `Nos prestations de nettoyage automobile à ${cityInfo.ville} : service complet et professionnel.`,
      `À ${cityInfo.ville}, découvrez notre gamme de services de nettoyage auto premium.`,
      `Service de car wash mobile à ${cityInfo.ville} : prestations complètes et personnalisées.`,
      `À ${cityInfo.ville}, nous vous proposons un service de nettoyage auto sur mesure.`,
      `Découvrez nos services de nettoyage automobile à ${cityInfo.ville} et ses environs.`,
      `À ${cityInfo.ville}, bénéficiez de nos prestations de nettoyage auto professionnelles.`,
      `Service premium de nettoyage automobile à ${cityInfo.ville} : qualité garantie.`,
      `À ${cityInfo.ville}, notre équipe vous propose des services de nettoyage auto complets.`
    ],
    'contact-intro': [
      `Prêt à redonner l'éclat à votre véhicule à ${cityInfo.ville} ? Contactez-nous dès maintenant.`,
      `À ${cityInfo.ville}, obtenez votre devis gratuit pour un nettoyage auto premium.`,
      `Service de nettoyage automobile à ${cityInfo.ville} : contactez-nous pour un devis personnalisé.`,
      `À ${cityInfo.ville}, votre véhicule mérite le meilleur. Contactez Shine&Go aujourd'hui.`,
      `Nettoyage auto à ${cityInfo.ville} : demandez votre devis gratuit et personnalisé.`,
      `À ${cityInfo.ville}, contactez-nous pour un service de nettoyage automobile de qualité.`,
      `Service premium à ${cityInfo.ville} : obtenez votre devis gratuit pour un nettoyage auto.`,
      `À ${cityInfo.ville}, votre satisfaction est garantie. Contactez-nous maintenant.`
    ]
  };

  const variants = sectionContent[sectionType];
  const index = cityInfo.ville.length % variants.length;
  return variants[index];
}

export function getCityTemoignage(citySlug: string): { auteur: string; texte: string } {
  const cityInfo = getCityData(citySlug);
  return cityInfo?.temoignage || { auteur: '', texte: '' };
}

export function getCityDisplayName(slug: string): string {
  if (!slug || typeof slug !== 'string') return '';
  const data = cityData as CityData;
  // On normalise le slug pour éviter les problèmes d'accent
  const normalizedSlug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  // Recherche exacte
  if (data[normalizedSlug]) return data[normalizedSlug].ville;
  // Recherche tolérante (au cas où)
  for (const key in data) {
    if (key.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() === normalizedSlug) {
      return data[key].ville;
    }
  }
  // Si non trouvé, on retourne le slug capitalisé
  return slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : '';
}