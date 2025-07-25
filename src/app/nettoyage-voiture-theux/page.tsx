import { Metadata } from 'next';
import { generateVariedContent } from '../utils/spintax';
import CityPageTemplateNew from '../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../utils/cityStructuredData';
import { getCSVCityData } from '../utils/csvCityContent';

// Générer les métadonnées avec les données du CSV
export const generateMetadata = (): Metadata => {
  return {
    title: "Lavage auto mobile à Theux : intérieur & extérieur | Shine&Go",
    description: "Nettoyage auto mobile à Theux : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    alternates: {
      canonical: "https://shineandgo.be/nettoyage-voiture-theux",
    },
    openGraph: {
      title: "Lavage auto mobile à Theux : intérieur & extérieur | Shine&Go",
      description: "Nettoyage auto mobile à Theux : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      images: [
        {
          url: "https://shineandgo.be/images/avant-apres-nettoyage-voiture-theux.jpg",
          width: 1200,
          height: 630,
          alt: "nettoyage voiture domicile Theux",
        },
      ],
      locale: 'fr_BE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Lavage auto mobile à Theux : intérieur & extérieur | Shine&Go",
      description: "Nettoyage auto mobile à Theux : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      images: ["https://shineandgo.be/images/avant-apres-nettoyage-voiture-theux.jpg"],
    },
    other: {
      'geo.latitude': "",
      'geo.longitude': "",
    },
  };
};

export default function TheuxPage() {
  // Générer les données structurées avec toutes les informations du CSV
  const structuredData = generateCityStructuredData('theux', 'Theux', {
    title: "Lavage auto mobile à Theux : intérieur & extérieur | Shine&Go",
    description: "Nettoyage auto mobile à Theux : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
    price: "49",
    currency: "EUR",
    datePublished: "2025-07-01",
    dateModified: "2025-07-24",
    imageDescription: "Nettoyage voiture à domicile à Theux",
    breadcrumb: {
      l1: { name: "Accueil", url: "https://shineandgo.be/" },
      l2: { name: "Nettoyage voiture", url: "https://shineandgo.be/#services" },
      l3: { name: "Nettoyage voiture à Theux", url: "https://shineandgo.be/nettoyage-voiture-theux" },
    },
    faqs: [
      {
        question: "Intervenez-vous réellement dans toute la commune de Theux ?",
        answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve."
      },
      {
        question: "Faut-il prévoir un point d’eau et une prise 230 V ?",
        answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution."
      },
      {
        question: "Pouvez-vous intervenir le week-end ou en soirée ?",
        answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible."
      },
      {
        question: "Quelle est la différence avec un car wash classique ?",
        answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)."
      },
      {
        question: "Acceptez-vous le paiement par virement ou via QR code ?",
        answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)."
      }
    ]
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageTemplateNew 
        citySlug="theux" 
        cityName="Theux"
        csvData={getCSVCityData('nettoyage-voiture-theux')}
      />
    </>
  );
}
