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
    description: 'Service de nettoyage automobile premium à Liège et environs. Nettoyage intérieur/extérieur, traitement hydrophobe, protection plastiques. Intervention rapide 7j/7. Produits Koch Chemie, ProtectorWax, CarPro Perl. Devis gratuit.',
    keywords: [
      'nettoyage auto liège',
      'lavage voiture liège', 
      'détailing liège',
      'nettoyage intérieur voiture liège',
      'nettoyage extérieur voiture liège',
      'service mobile liège',
      'car wash liège',
      'nettoyage voiture domicile liège',
      'produits koch chemie liège',
      'protectorwax liège',
      'carpro perl liège',
      'combien coûte nettoyage auto liège',
      'prix nettoyage voiture liège',
      'durée nettoyage automobile liège',
      'garantie nettoyage voiture liège',
      'nettoyage professionnel voiture liège',
      'avant après nettoyage liège'
    ],
    ogTitle: 'Nettoyage Auto Premium à Liège - Shine&Go',
    ogDescription: 'Service de nettoyage automobile professionnel à Liège. Nettoyage complet intérieur/extérieur avec produits haut de gamme. Intervention à domicile.'
  },
  'verviers': {
    title: 'Nettoyage Auto Verviers - Service Mobile Premium | Shine&Go',
    description: 'Nettoyage automobile professionnel à Verviers et région verviétoise. Service mobile premium avec produits allemands Koch Chemie. Résultat showroom garanti. ProtectorWax, CarPro Perl inclus. Devis gratuit.',
    keywords: [
      'nettoyage auto verviers',
      'lavage voiture verviers', 
      'détailing verviers',
      'nettoyage intérieur voiture verviers',
      'nettoyage extérieur voiture verviers',
      'service mobile verviers',
      'car wash verviers',
      'nettoyage voiture domicile verviers',
      'produits koch chemie verviers',
      'protectorwax verviers',
      'carpro perl verviers',
      'combien coûte nettoyage auto verviers',
      'prix nettoyage voiture verviers',
      'durée nettoyage automobile verviers',
      'garantie nettoyage voiture verviers',
      'nettoyage professionnel voiture verviers',
      'avant après nettoyage verviers'
    ],
    ogTitle: 'Nettoyage Auto Premium à Verviers - Shine&Go',
    ogDescription: 'Service de nettoyage automobile professionnel à Verviers. Produits haut de gamme, intervention rapide, satisfaction garantie.'
  },
  'spa': {
    title: 'Nettoyage Auto Spa - Service Premium Région Touristique | Shine&Go',
    description: 'Service de nettoyage auto premium à Spa et environs. Région touristique, produits haut de gamme Koch Chemie, intervention flexible. ProtectorWax, CarPro Perl inclus. Garantie satisfaction totale.',
    keywords: [
      'nettoyage auto spa',
      'lavage voiture spa', 
      'détailing spa',
      'nettoyage intérieur voiture spa',
      'nettoyage extérieur voiture spa',
      'service mobile spa',
      'car wash spa',
      'nettoyage voiture domicile spa',
      'produits koch chemie spa',
      'protectorwax spa',
      'carpro perl spa',
      'combien coûte nettoyage auto spa',
      'prix nettoyage voiture spa',
      'durée nettoyage automobile spa',
      'garantie nettoyage voiture spa',
      'nettoyage professionnel voiture spa',
      'avant après nettoyage spa'
    ],
    ogTitle: 'Nettoyage Auto Premium à Spa - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Spa. Produits haut de gamme, intervention flexible, garantie satisfaction.'
  },
  'huy': {
    title: 'Nettoyage Auto Huy - Service Mobile Professionnel | Shine&Go',
    description: 'Nettoyage automobile professionnel à Huy et région hutoise. Service mobile premium avec produits Koch Chemie. ProtectorWax, CarPro Perl inclus. Satisfaction garantie. Devis gratuit.',
    keywords: [
      'nettoyage auto huy',
      'lavage voiture huy', 
      'détailing huy',
      'nettoyage intérieur voiture huy',
      'nettoyage extérieur voiture huy',
      'service mobile huy',
      'car wash huy',
      'nettoyage voiture domicile huy',
      'produits koch chemie huy',
      'protectorwax huy',
      'carpro perl huy',
      'combien coûte nettoyage auto huy',
      'prix nettoyage voiture huy',
      'durée nettoyage automobile huy',
      'garantie nettoyage voiture huy',
      'nettoyage professionnel voiture huy',
      'avant après nettoyage huy'
    ],
    ogTitle: 'Nettoyage Auto Premium à Huy - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Huy. Produits professionnels, service 7j/7, satisfaction garantie.'
  },
  'herve': {
    title: 'Nettoyage Auto Herve - Service Local Premium | Shine&Go',
    description: 'Service de nettoyage auto premium à Herve, berceau de Shine&Go. Équipe locale expérimentée, produits allemands Koch Chemie. ProtectorWax, CarPro Perl inclus. Garantie satisfaction totale. Devis gratuit.',
    keywords: [
      'nettoyage auto herve',
      'lavage voiture herve', 
      'détailing herve',
      'nettoyage intérieur voiture herve',
      'nettoyage extérieur voiture herve',
      'service mobile herve',
      'car wash herve',
      'nettoyage voiture domicile herve',
      'produits koch chemie herve',
      'protectorwax herve',
      'carpro perl herve',
      'combien coûte nettoyage auto herve',
      'prix nettoyage voiture herve',
      'durée nettoyage automobile herve',
      'garantie nettoyage voiture herve',
      'nettoyage professionnel voiture herve',
      'avant après nettoyage herve'
    ],
    ogTitle: 'Nettoyage Auto Premium à Herve - Shine&Go',
    ogDescription: 'Service local de nettoyage automobile à Herve. Équipe expérimentée, produits haut de gamme, satisfaction garantie.'
  },
  'dison': {
    title: 'Nettoyage Auto Dison - Service Mobile Premium | Shine&Go',
    description: 'Nettoyage automobile professionnel à Dison et environs. Service mobile premium avec produits haut de gamme Koch Chemie. ProtectorWax, CarPro Perl inclus. Intervention rapide et efficace. Devis gratuit.',
    keywords: [
      'nettoyage auto dison',
      'lavage voiture dison', 
      'détailing dison',
      'nettoyage intérieur voiture dison',
      'nettoyage extérieur voiture dison',
      'service mobile dison',
      'car wash dison',
      'nettoyage voiture domicile dison',
      'produits koch chemie dison',
      'protectorwax dison',
      'carpro perl dison',
      'combien coûte nettoyage auto dison',
      'prix nettoyage voiture dison',
      'durée nettoyage automobile dison',
      'garantie nettoyage voiture dison',
      'nettoyage professionnel voiture dison',
      'avant après nettoyage dison'
    ],
    ogTitle: 'Nettoyage Auto Premium à Dison - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Dison. Produits professionnels, intervention mobile, satisfaction garantie.'
  },
  'aubel': {
    title: 'Nettoyage Auto Aubel - Service Premium à Domicile | Shine&Go',
    description: 'Service de nettoyage auto premium à Aubel et ses environs. Intervention à domicile avec produits professionnels Koch Chemie. ProtectorWax, CarPro Perl inclus. Résultat exceptionnel garanti. Devis gratuit.',
    keywords: [
      'nettoyage auto aubel',
      'lavage voiture aubel', 
      'détailing aubel',
      'nettoyage intérieur voiture aubel',
      'nettoyage extérieur voiture aubel',
      'service mobile aubel',
      'car wash aubel',
      'nettoyage voiture domicile aubel',
      'produits koch chemie aubel',
      'protectorwax aubel',
      'carpro perl aubel',
      'combien coûte nettoyage auto aubel',
      'prix nettoyage voiture aubel',
      'durée nettoyage automobile aubel',
      'garantie nettoyage voiture aubel',
      'nettoyage professionnel voiture aubel',
      'avant après nettoyage aubel'
    ],
    ogTitle: 'Nettoyage Auto Premium à Aubel - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Aubel. Intervention à domicile, produits haut de gamme, satisfaction garantie.'
  },
  'aywaille': {
    title: 'Nettoyage Auto Aywaille - Service Mobile Premium | Shine&Go',
    description: 'Nettoyage automobile professionnel à Aywaille et région. Service mobile premium avec produits allemands Koch Chemie. ProtectorWax, CarPro Perl inclus. Intervention flexible selon vos horaires. Devis gratuit.',
    keywords: [
      'nettoyage auto aywaille',
      'lavage voiture aywaille', 
      'détailing aywaille',
      'nettoyage intérieur voiture aywaille',
      'nettoyage extérieur voiture aywaille',
      'service mobile aywaille',
      'car wash aywaille',
      'nettoyage voiture domicile aywaille',
      'produits koch chemie aywaille',
      'protectorwax aywaille',
      'carpro perl aywaille',
      'combien coûte nettoyage auto aywaille',
      'prix nettoyage voiture aywaille',
      'durée nettoyage automobile aywaille',
      'garantie nettoyage voiture aywaille',
      'nettoyage professionnel voiture aywaille',
      'avant après nettoyage aywaille'
    ],
    ogTitle: 'Nettoyage Auto Premium à Aywaille - Shine&Go',
    ogDescription: 'Service de nettoyage automobile à Aywaille. Service mobile, produits professionnels, intervention flexible.'
  }
};

export const getDefaultCityMetadata = (citySlug: string): CityMetadata => {
  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  
  return {
    title: `Nettoyage Auto ${cityName} - Service Mobile Premium | Shine&Go`,
    description: `Service de nettoyage automobile premium à ${cityName} et ses environs. Intervention mobile avec produits haut de gamme Koch Chemie. ProtectorWax, CarPro Perl inclus. Satisfaction garantie. Devis gratuit.`,
    keywords: [
      `nettoyage auto ${cityName.toLowerCase()}`,
      `lavage voiture ${cityName.toLowerCase()}`,
      `détailing ${cityName.toLowerCase()}`,
      `nettoyage intérieur voiture ${cityName.toLowerCase()}`,
      `nettoyage extérieur voiture ${cityName.toLowerCase()}`,
      `service mobile ${cityName.toLowerCase()}`,
      `car wash ${cityName.toLowerCase()}`,
      `nettoyage voiture domicile ${cityName.toLowerCase()}`,
      `produits koch chemie ${cityName.toLowerCase()}`,
      `protectorwax ${cityName.toLowerCase()}`,
      `carpro perl ${cityName.toLowerCase()}`,
      `combien coûte nettoyage auto ${cityName.toLowerCase()}`,
      `prix nettoyage voiture ${cityName.toLowerCase()}`,
      `durée nettoyage automobile ${cityName.toLowerCase()}`,
      `garantie nettoyage voiture ${cityName.toLowerCase()}`,
      `nettoyage professionnel voiture ${cityName.toLowerCase()}`,
      `avant après nettoyage ${cityName.toLowerCase()}`
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
      url: `https://www.shineandgo.be/zone-intervention/${citySlug}`,
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
      canonical: `https://www.shineandgo.be/zone-intervention/${citySlug}`,
    },
  };
};

// Export pour les pages de villes
export const generateMetadata = generateCityMetadata; 