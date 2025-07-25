import { Metadata } from 'next';
import { generateVariedContent } from '../utils/spintax';
import CityPageTemplateNew from '../components/CityPageTemplateNew';
import { generateCityStructuredData } from '../utils/cityStructuredData';
import { getCSVCityData } from '../utils/csvCityContent';

// Générer les métadonnées avec les données du CSV
export const generateMetadata = (): Metadata => {
  return {
    title: "Lavage voiture à Soumagne (Wallonie) – Shine&Go se déplace chez vous",
    description: "Besoin d’un car wash à domicile à Soumagne ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    alternates: {
      canonical: "https://www.shineandgo.be/nettoyage-voiture-soumagne",
    },
    openGraph: {
      title: "Lavage voiture à Soumagne (Wallonie) | Shine&Go se déplace chez vous",
      description: "Besoin d’un car wash à domicile à Soumagne ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      images: [
        {
          url: "https://www.shineandgo.be/images/avant-apres-nettoyage-voiture-soumagne.jpg",
          width: 1200,
          height: 630,
          alt: "nettoyage voiture domicile Soumagne",
        },
      ],
      locale: 'fr_BE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Lavage voiture à Soumagne (Wallonie) | Shine&Go se déplace chez vous",
      description: "Besoin d’un car wash à domicile à Soumagne ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      images: ["https://www.shineandgo.be/images/avant-apres-nettoyage-voiture-soumagne.jpg"],
    },
    other: {
      'geo.latitude': "",
      'geo.longitude': "",
    },
  };
};

export default function SoumagnePage() {
  // Générer les données structurées avec toutes les informations du CSV
  const structuredData = generateCityStructuredData('soumagne', 'Soumagne', {
    title: "Lavage voiture à Soumagne (Wallonie) – Shine&Go se déplace chez vous",
    description: "Besoin d’un car wash à domicile à Soumagne ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
    price: "49",
    currency: "EUR",
    datePublished: "2025-07-01",
    dateModified: "2025-07-24",
    imageDescription: "Nettoyage voiture à domicile à Soumagne",
    breadcrumb: {
      l1: { name: "Accueil", url: "https://www.shineandgo.be/" },
      l2: { name: "Nettoyage voiture", url: "https://www.shineandgo.be/#services" },
      l3: { name: "Nettoyage voiture à Soumagne", url: "https://www.shineandgo.be/nettoyage-voiture-soumagne" },
    },
    faqs: [
      {
        question: "Intervenez-vous réellement dans toute la commune de Soumagne ?",
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
        question: "Puis-je réserver un créneau en urgence ?",
        answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier."
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
        citySlug="soumagne" 
        cityName="Soumagne"
        csvData={getCSVCityData('nettoyage-voiture-soumagne')}
      />
    </>
  );
}
