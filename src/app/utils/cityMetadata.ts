import { Metadata } from 'next';

interface CityMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
}

const cityMetadata: Record<string, CityMetadata> = {
  'liege': {
    title: 'Nettoyage Auto Liège - Service Premium à Domicile | Shine&Go',
    description: 'Service de nettoyage automobile premium à Liège et environs. Nettoyage intérieur/extérieur, traitement hydrophobe, protection plastiques. Intervention rapide 7j/7.',
    keywords: ['nettoyage auto liège', 'lavage voiture liège', 'détailing liège', 'nettoyage intérieur voiture liège', 'service mobile liège'],
    ogTitle: 'Nettoyage Auto Premium à Liège - Shine&Go',
    ogDescription: 'Service de nettoyage automobile professionnel à Liège. Nettoyage complet intérieur/extérieur avec produits haut de gamme. Intervention à domicile.'
  },
  'verviers': {
    title: 'Nettoyage Auto Verviers - Service Mobile Premium | Shine&Go',
    description: 'Nettoyage automobile professionnel à Verviers et région verviétoise. Service mobile premium avec produits allemands. Résultat showroom garanti.',
    keywords: ['nettoyage auto verviers', 'lavage voiture verviers', 'détailing verviers', 'nettoyage voiture verviers', 'service mobile verviers'],
    ogTitle: 'Nettoyage Auto Premium à Verviers - Shine&Go',
    ogDescription: 'Service de nettoyage automobile professionnel à Verviers. Produits haut de gamme, intervention rapide, satisfaction garantie.'
  },
  'spa': {
    title: 'Nettoyage Auto Spa - Service Premium Région Touristique | Shine&Go',
    description: 'Service de nettoyage auto premium à Spa et environs. Région touristique, produits haut de gamme, intervention flexible. Garantie Wipe-&-Wow.',
    keywords: ['nettoyage auto spa', 'lavage voiture spa', 'détailing spa', 'nettoyage voiture spa', 'service mobile spa'],
    ogTitle: 'Nettoyage Auto Premium à Spa - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Spa. Produits haut de gamme, intervention flexible, garantie satisfaction.'
  },
  'huy': {
    title: 'Nettoyage Auto Huy - Service Mobile Professionnel | Shine&Go',
    description: 'Nettoyage automobile professionnel à Huy et région hutoise. Service mobile premium avec produits Koch Chemie. Satisfaction garantie.',
    keywords: ['nettoyage auto huy', 'lavage voiture huy', 'détailing huy', 'nettoyage voiture huy', 'service mobile huy'],
    ogTitle: 'Nettoyage Auto Premium à Huy - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Huy. Produits professionnels, service 7j/7, satisfaction garantie.'
  },
  'herve': {
    title: 'Nettoyage Auto Herve - Service Local Premium | Shine&Go',
    description: 'Service de nettoyage auto premium à Herve, berceau de Shine&Go. Équipe locale expérimentée, produits allemands, garantie satisfaction totale.',
    keywords: ['nettoyage auto herve', 'lavage voiture herve', 'détailing herve', 'nettoyage voiture herve', 'service mobile herve'],
    ogTitle: 'Nettoyage Auto Premium à Herve - Shine&Go',
    ogDescription: 'Service local de nettoyage automobile à Herve. Équipe expérimentée, produits haut de gamme, satisfaction garantie.'
  },
  'dison': {
    title: 'Nettoyage Auto Dison - Service Mobile Premium | Shine&Go',
    description: 'Nettoyage automobile professionnel à Dison et environs. Service mobile premium avec produits haut de gamme. Intervention rapide et efficace.',
    keywords: ['nettoyage auto dison', 'lavage voiture dison', 'détailing dison', 'nettoyage voiture dison', 'service mobile dison'],
    ogTitle: 'Nettoyage Auto Premium à Dison - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Dison. Produits professionnels, intervention mobile, satisfaction garantie.'
  },
  'aubel': {
    title: 'Nettoyage Auto Aubel - Service Premium à Domicile | Shine&Go',
    description: 'Service de nettoyage auto premium à Aubel et ses environs. Intervention à domicile avec produits professionnels. Résultat exceptionnel garanti.',
    keywords: ['nettoyage auto aubel', 'lavage voiture aubel', 'détailing aubel', 'nettoyage voiture aubel', 'service mobile aubel'],
    ogTitle: 'Nettoyage Auto Premium à Aubel - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Aubel. Intervention à domicile, produits haut de gamme, satisfaction garantie.'
  },
  'aywaille': {
    title: 'Nettoyage Auto Aywaille - Service Mobile Premium | Shine&Go',
    description: 'Nettoyage automobile professionnel à Aywaille et région. Service mobile premium avec produits allemands. Intervention flexible selon vos horaires.',
    keywords: ['nettoyage auto aywaille', 'lavage voiture aywaille', 'détailing aywaille', 'nettoyage voiture aywaille', 'service mobile aywaille'],
    ogTitle: 'Nettoyage Auto Premium à Aywaille - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Aywaille. Service mobile, produits professionnels, intervention flexible.'
  }
};

export const getDefaultCityMetadata = (citySlug: string): CityMetadata => {
  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  
  return {
    title: `Nettoyage Auto ${cityName} - Service Mobile Premium | Shine&Go`,
    description: `Service de nettoyage automobile premium à ${cityName} et ses environs. Intervention mobile avec produits haut de gamme. Satisfaction garantie.`,
    keywords: [
      `nettoyage auto ${cityName.toLowerCase()}`,
      `lavage voiture ${cityName.toLowerCase()}`,
      `détailing ${cityName.toLowerCase()}`,
      `nettoyage voiture ${cityName.toLowerCase()}`,
      `service mobile ${cityName.toLowerCase()}`
    ],
    ogTitle: `Nettoyage Auto Premium à ${cityName} - Shine&Go`,
    ogDescription: `Service de nettoyage automobile à ${cityName}. Produits haut de gamme, intervention mobile, satisfaction garantie.`
  };
};

export const getCityMetadata = (citySlug: string): CityMetadata => {
  return cityMetadata[citySlug] || getDefaultCityMetadata(citySlug);
};

export const generateCityMetadata = (citySlug: string): Metadata => {
  const metadata = getCityMetadata(citySlug);
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.ogTitle || metadata.title,
      description: metadata.ogDescription || metadata.description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Shine&Go',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.ogTitle || metadata.title,
      description: metadata.ogDescription || metadata.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};

// Export pour les pages de villes
export const generateMetadata = generateCityMetadata; 