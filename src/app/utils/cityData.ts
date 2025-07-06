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
  return cityInfo?.accroche || `À ${citySlug} et ses environs, Shine&Go vous propose un service de nettoyage auto premium directement à domicile.`;
}

export function getCityTemoignage(citySlug: string): { auteur: string; texte: string } {
  const cityInfo = getCityData(citySlug);
  return cityInfo?.temoignage || { auteur: '', texte: '' };
}

export function getCityDisplayName(slug: string): string {
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
  return slug.charAt(0).toUpperCase() + slug.slice(1);
} 