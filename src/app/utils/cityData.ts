import cityData from '../../../villes_shineandgo_personnalise.json';

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
    `À ${cityInfo.ville} et ses environs, Shine&Go transforme votre véhicule avec un nettoyage auto professionnel à domicile. Résultat garanti !`
  ];

  // Utiliser le nom de la ville pour déterminer quelle variante utiliser
  const index = cityInfo.ville.length % accrochesVariantes.length;
  return accrochesVariantes[index];
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