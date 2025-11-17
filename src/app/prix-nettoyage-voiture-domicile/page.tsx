import { Metadata } from 'next';
import PrixClientComponent from './PrixClientComponent';

export const metadata: Metadata = {
  title: 'Prix Nettoyage Voiture Premium | Tarifs 2025 Transparents - Shine&Go',
  description: 'Prix nettoyage voiture premium à domicile : 65€ intérieur, 85€ extérieur, 120€ complet. Tarifs tout compris. Devis gratuit. ☎ 0472 30 37 01',
  keywords: 'prix nettoyage voiture, tarif lavage voiture, cout nettoyage auto, prix detailing',
  alternates: {
    canonical: 'https://shineandgo.be/prix-nettoyage-voiture-domicile'
  }
};

export default function PrixPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Nettoyage Voiture Premium à Domicile",
          "provider": { 
            "@type": "LocalBusiness", 
            "name": "Shine&Go" 
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Intérieur Premium - Citadine",
              "price": "65",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Intérieur Premium - Berline",
              "price": "75",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Intérieur Premium - SUV",
              "price": "95",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Extérieur Showroom - Citadine",
              "price": "85",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Extérieur Showroom - Berline",
              "price": "95",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Extérieur Showroom - SUV",
              "price": "115",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Formule Complète - Citadine",
              "price": "120",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Formule Complète - Berline",
              "price": "140",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Formule Complète - SUV",
              "price": "170",
              "priceCurrency": "EUR"
            }
          ]
        })
      }} />
      <PrixClientComponent />
    </>
  );
}

