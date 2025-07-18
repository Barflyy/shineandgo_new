export interface ServicePack {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  popular?: boolean;
  duration: string;
  image: string;
  buttonText: string;
  savings: number;
}

export const servicePacks: ServicePack[] = [
  {
    id: 'basic',
    name: 'Pack Essentiel',
    price: 44,
    originalPrice: 49,
    description: 'Nettoyage complet intérieur et extérieur',
    features: [
      'Lavage extérieur complet',
      'Nettoyage intérieur basique',
      'Aspiration des sols',
      'Nettoyage des vitres',
      'Durée: 60 minutes'
    ],
    duration: '60 min',
    image: '/transformations/citadine-premium-propre-apres-lavage-aubel.jpeg',
    buttonText: 'Choisir Essentiel',
    savings: 5
  },
  {
    id: 'premium',
    name: 'Pack Premium',
    price: 80,
    originalPrice: 89,
    description: 'Nettoyage approfondi avec produits professionnels',
    features: [
      'Tout du Pack Essentiel',
      'Nettoyage approfondi des sièges',
      'Traitement des plastiques',
      'Cirage des pneus',
      'Durée: 90 minutes'
    ],
    popular: true,
    duration: '90 min',
    image: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg',
    buttonText: 'Choisir Premium',
    savings: 9
  },
  {
    id: 'detailing',
    name: 'Pack Détailing',
    price: 143,
    originalPrice: 159,
    description: 'Détailing complet showroom',
    features: [
      'Tout du Pack Premium',
      'Détailing complet intérieur',
      'Traitement cuir et textiles',
      'Protection cire longue durée',
      'Durée: 120 minutes'
    ],
    duration: '120 min',
    image: '/transformations/voiture-sport-propre-apres-detailing-spa.jpeg',
    buttonText: 'Choisir Détailing',
    savings: 16
  }
];

export const cities = [
  'Herve', 'Liège', 'Verviers', 'Spa', 'Dison', 'Aubel', 'Aywaille', 'Huy',
  'Chaudfontaine', 'Esneux', 'Seraing', 'Flemalle', 'Waremme', 'Visé',
  'Limbourg', 'Malmedy', 'Stavelot', 'Theux', 'Pepinster', 'Olne'
]; 