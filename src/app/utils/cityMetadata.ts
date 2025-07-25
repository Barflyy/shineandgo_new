import { Metadata } from 'next';
import { generateVariedContent } from './spintax';

interface CityMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
}

const cityMetadata: Record<string, CityMetadata> = {
  'liege': {
    title: 'Nettoyage voiture à domicile à Liège – Shine&Go',
    description: 'Showroom en 90 min, sans quitter votre parking. Valeting mobile premium à Liège. Réservation < 5 min ✨',
    keywords: [
      'nettoyage voiture liège',
      'nettoyage auto liège',
      'lavage voiture liège',
      'lavage auto liège',
      'nettoyage véhicule à domicile liège',
      'lavage voiture à liège',
      'nettoyage voiture à liège',
      'service mobile liège',
      'car wash liège',
      'produits koch chemie liège',
      'protectorwax liège',
      'carpro perl liège',
      'prix nettoyage voiture liège',
      'durée nettoyage automobile liège',
      'garantie nettoyage voiture liège',
      'nettoyage professionnel voiture liège',
      'avant après nettoyage liège'
    ],
    ogTitle: 'Nettoyage voiture à Liège - Shine&Go',
    ogDescription: 'Service de nettoyage automobile professionnel à Liège. Nettoyage complet intérieur/extérieur avec produits haut de gamme. Intervention à domicile.'
  },
  'verviers': {
    title: 'Shine&Go – Nettoyage voiture à Verviers | Lavage auto à domicile',
    description: 'Nettoyage auto et lavage voiture à domicile à Verviers, Dison, Pepinster & Limbourg. Service 100 % mobile, résultat showroom garanti. Réservez en ligne !',
    keywords: [
      'nettoyage voiture verviers',
      'nettoyage auto verviers',
      'lavage voiture verviers',
      'lavage auto verviers',
      'nettoyage véhicule à domicile verviers',
      'lavage voiture à verviers',
      'nettoyage voiture à verviers',
      'service mobile verviers',
      'car wash verviers',
      'produits koch chemie verviers',
      'protectorwax verviers',
      'carpro perl verviers',
      'prix nettoyage voiture verviers',
      'durée nettoyage automobile verviers',
      'garantie nettoyage voiture verviers',
      'nettoyage professionnel voiture verviers',
      'avant après nettoyage verviers'
    ],
    ogTitle: 'Nettoyage voiture à Verviers - Shine&Go',
    ogDescription: 'Service de nettoyage automobile professionnel à Verviers. Produits haut de gamme, intervention rapide, satisfaction garantie.'
  },
  'spa': {
    title: 'Shine&Go – Nettoyage voiture à Spa | Lavage auto à domicile',
    description: 'Nettoyage auto et lavage voiture à domicile à Spa, Stavelot, Malmedy & Theux. Service 100 % mobile, résultat showroom garanti. Réservez en ligne !',
    keywords: [
      'nettoyage voiture spa',
      'nettoyage auto spa',
      'lavage voiture spa',
      'lavage auto spa',
      'nettoyage véhicule à domicile spa',
      'lavage voiture à spa',
      'nettoyage voiture à spa',
      'service mobile spa',
      'car wash spa',
      'produits koch chemie spa',
      'protectorwax spa',
      'carpro perl spa',
      'prix nettoyage voiture spa',
      'durée nettoyage automobile spa',
      'garantie nettoyage voiture spa',
      'nettoyage professionnel voiture spa',
      'avant après nettoyage spa'
    ],
    ogTitle: 'Nettoyage voiture à Spa - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Spa. Produits haut de gamme, intervention flexible, garantie satisfaction.'
  },
  'huy': {
    title: 'Shine&Go – Nettoyage voiture à Huy | Lavage auto à domicile',
    description: 'Nettoyage auto et lavage voiture à domicile à Huy, Wanze, Marchin & Amay. Service 100 % mobile, résultat showroom garanti. Réservez en ligne !',
    keywords: [
      'nettoyage voiture huy',
      'nettoyage auto huy',
      'lavage voiture huy',
      'lavage auto huy',
      'nettoyage véhicule à domicile huy',
      'lavage voiture à huy',
      'nettoyage voiture à huy',
      'service mobile huy',
      'car wash huy',
      'produits koch chemie huy',
      'protectorwax huy',
      'carpro perl huy',
      'prix nettoyage voiture huy',
      'durée nettoyage automobile huy',
      'garantie nettoyage voiture huy',
      'nettoyage professionnel voiture huy',
      'avant après nettoyage huy'
    ],
    ogTitle: 'Nettoyage voiture à Huy - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Huy. Produits professionnels, service 7j/7, satisfaction garantie.'
  },
  'herve': {
    title: 'Shine&Go – Nettoyage voiture à Herve | Lavage auto à domicile',
    description: 'Nettoyage auto et lavage voiture à domicile à Herve, Battice, Thimister, Soumagne & Olne. Service 100 % mobile, résultat showroom garanti. Réservez en ligne !',
    keywords: [
      'nettoyage voiture herve',
      'nettoyage auto herve',
      'lavage voiture herve',
      'lavage auto herve',
      'nettoyage véhicule à domicile herve',
      'lavage voiture à herve',
      'nettoyage voiture à herve',
      'service mobile herve',
      'car wash herve',
      'produits koch chemie herve',
      'protectorwax herve',
      'carpro perl herve',
      'prix nettoyage voiture herve',
      'durée nettoyage automobile herve',
      'garantie nettoyage voiture herve',
      'nettoyage professionnel voiture herve',
      'avant après nettoyage herve'
    ],
    ogTitle: 'Nettoyage voiture à Herve - Shine&Go',
    ogDescription: 'Service local de nettoyage automobile à Herve. Équipe expérimentée, produits haut de gamme, satisfaction garantie.'
  },
  'dison': {
    title: 'Shine&Go – Nettoyage voiture à Dison | Lavage auto à domicile',
    description: 'Nettoyage auto et lavage voiture à domicile à Dison, Verviers, Pepinster & Limbourg. Service 100 % mobile, résultat showroom garanti. Réservez en ligne !',
    keywords: [
      'nettoyage voiture dison',
      'nettoyage auto dison',
      'lavage voiture dison',
      'lavage auto dison',
      'nettoyage véhicule à domicile dison',
      'lavage voiture à dison',
      'nettoyage voiture à dison',
      'service mobile dison',
      'car wash dison',
      'produits koch chemie dison',
      'protectorwax dison',
      'carpro perl dison',
      'prix nettoyage voiture dison',
      'durée nettoyage automobile dison',
      'garantie nettoyage voiture dison',
      'nettoyage professionnel voiture dison',
      'avant après nettoyage dison'
    ],
    ogTitle: 'Nettoyage voiture à Dison - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Dison. Produits professionnels, intervention mobile, satisfaction garantie.'
  },
  'aubel': {
    title: 'Shine&Go – Nettoyage voiture à Aubel | Lavage auto à domicile',
    description: 'Nettoyage auto et lavage voiture à domicile à Aubel, Herve, Thimister & Battice. Service 100 % mobile, résultat showroom garanti. Réservez en ligne !',
    keywords: [
      'nettoyage voiture aubel',
      'nettoyage auto aubel',
      'lavage voiture aubel',
      'lavage auto aubel',
      'nettoyage véhicule à domicile aubel',
      'lavage voiture à aubel',
      'nettoyage voiture à aubel',
      'service mobile aubel',
      'car wash aubel',
      'produits koch chemie aubel',
      'protectorwax aubel',
      'carpro perl aubel',
      'prix nettoyage voiture aubel',
      'durée nettoyage automobile aubel',
      'garantie nettoyage voiture aubel',
      'nettoyage professionnel voiture aubel',
      'avant après nettoyage aubel'
    ],
    ogTitle: 'Nettoyage voiture à Aubel - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Aubel. Intervention à domicile, produits haut de gamme, satisfaction garantie.'
  },
  'aywaille': {
    title: 'Shine&Go – Nettoyage voiture à Aywaille | Lavage auto à domicile',
    description: 'Nettoyage auto et lavage voiture à domicile à Aywaille, Sprimont, Esneux & Chaudfontaine. Service 100 % mobile, résultat showroom garanti. Réservez en ligne !',
    keywords: [
      'nettoyage voiture aywaille',
      'nettoyage auto aywaille',
      'lavage voiture aywaille',
      'lavage auto aywaille',
      'nettoyage véhicule à domicile aywaille',
      'lavage voiture à aywaille',
      'nettoyage voiture à aywaille',
      'service mobile aywaille',
      'car wash aywaille',
      'produits koch chemie aywaille',
      'protectorwax aywaille',
      'carpro perl aywaille',
      'prix nettoyage voiture aywaille',
      'durée nettoyage automobile aywaille',
      'garantie nettoyage voiture aywaille',
      'nettoyage professionnel voiture aywaille',
      'avant après nettoyage aywaille'
    ],
    ogTitle: 'Nettoyage voiture à Aywaille - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Aywaille. Service mobile, produits professionnels, intervention flexible.'
  }
};

export const getDefaultCityMetadata = (citySlug: string): CityMetadata => {
  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  
  // Mapping des villes voisines pour les villes non définies explicitement
  const nearbyCitiesMap: Record<string, string[]> = {
    'sprimont': ['Aywaille', 'Esneux', 'Chaudfontaine'],
    'esneux': ['Aywaille', 'Sprimont', 'Chaudfontaine'],
    'chaudfontaine': ['Aywaille', 'Sprimont', 'Esneux'],
    'battice': ['Herve', 'Thimister', 'Aubel'],
    'thimister': ['Herve', 'Battice', 'Aubel'],
    'soumagne': ['Herve', 'Olne', 'Battice'],
    'olne': ['Herve', 'Soumagne', 'Battice'],
    'pepinster': ['Verviers', 'Dison', 'Limbourg'],
    'limbourg': ['Verviers', 'Dison', 'Pepinster'],
    'stavelot': ['Spa', 'Malmedy', 'Theux'],
    'malmedy': ['Spa', 'Stavelot', 'Theux'],
    'theux': ['Spa', 'Stavelot', 'Malmedy'],
    'wanze': ['Huy', 'Marchin', 'Amay'],
    'marchin': ['Huy', 'Wanze', 'Amay'],
    'amay': ['Huy', 'Wanze', 'Marchin'],
    'herstal': ['Liège', 'Seraing', 'Ans'],
    'seraing': ['Liège', 'Herstal', 'Ans'],
    'ans': ['Liège', 'Herstal', 'Seraing']
  };
  
  const nearbyCities = nearbyCitiesMap[citySlug] || ['Herve', 'Verviers', 'Liège'];
  const nearbyCitiesText = nearbyCities.length >= 4 
    ? nearbyCities.slice(0, 3).join(', ') + ' & ' + nearbyCities[3]
    : nearbyCities.join(' & ');
  
  return {
    title: `Shine&Go – Nettoyage voiture à ${cityName} | Lavage auto à domicile`,
    description: `Nettoyage auto et lavage voiture à domicile à ${cityName}, ${nearbyCitiesText}. Service 100 % mobile, résultat showroom garanti. Réservez en ligne !`,
    keywords: [
      `nettoyage voiture ${cityName.toLowerCase()}`,
      `nettoyage auto ${cityName.toLowerCase()}`,
      `lavage voiture ${cityName.toLowerCase()}`,
      `lavage auto ${cityName.toLowerCase()}`,
      `nettoyage véhicule à domicile ${cityName.toLowerCase()}`,
      `lavage voiture à ${cityName.toLowerCase()}`,
      `nettoyage voiture à ${cityName.toLowerCase()}`,
      `service mobile ${cityName.toLowerCase()}`,
      `car wash ${cityName.toLowerCase()}`,
      `produits koch chemie ${cityName.toLowerCase()}`,
      `protectorwax ${cityName.toLowerCase()}`,
      `carpro perl ${cityName.toLowerCase()}`,
      `prix nettoyage voiture ${cityName.toLowerCase()}`,
      `durée nettoyage automobile ${cityName.toLowerCase()}`,
      `garantie nettoyage voiture ${cityName.toLowerCase()}`,
      `nettoyage professionnel voiture ${cityName.toLowerCase()}`,
      `avant après nettoyage ${cityName.toLowerCase()}`
    ],
    ogTitle: `Nettoyage voiture à ${cityName} - Shine&Go`,
    ogDescription: `Service de nettoyage automobile à ${cityName}. Produits haut de gamme, intervention mobile, satisfaction garantie.`
  };
};

export const getCityMetadata = (citySlug: string): CityMetadata => {
  const defaultMetadata = cityMetadata[citySlug] || getDefaultCityMetadata(citySlug);
  
  // Générer du contenu varié avec spintax
  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const variedContent = generateVariedContent(cityName);
  
  return {
    title: variedContent.title,
    description: variedContent.metaDescription,
    keywords: defaultMetadata.keywords,
    ogTitle: variedContent.ogTitle,
    ogDescription: variedContent.ogDescription
  };
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
      url: `https://shineandgo.be/nettoyage-voiture-${citySlug}`,
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
    alternates: {
      canonical: `https://shineandgo.be/nettoyage-voiture-${citySlug}`,
    },
  };
};

// Export pour les pages de villes
export const generateMetadata = generateCityMetadata; 