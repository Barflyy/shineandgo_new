/**
 * Shine&Go - Page d'accueil moderne
 * 
 * Structure des sections :
 * 1. Hero - Section principale avec CTA
 * 2. SocialProof - Avis clients et statistiques
 * 3. Benefits - Avantages du service
 * 4. Process - Étapes du processus
 * 5. Services - Découverte de l'offre
 * 6. BeforeAfter - Slider avant/après
 * 7. FinalCTA - Call-to-action final
 * 8. FAQ - Questions fréquentes
 */

import { Metadata } from 'next';
import Script from 'next/script';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import ServicesSection from './components/ServicesSection';
import BeforeAfterTestimonials from './components/BeforeAfterTestimonials';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';


export const metadata: Metadata = {
  title: "Nettoyage Voiture à Domicile | Lavage Auto Mobile dès 39€ – Shine&Go",
  description: "🚗 Service nettoyage voiture et lavage auto mobile à domicile dès 39€. Car wash premium avec produits professionnels. Garantie satisfaction 100%.",
  keywords: [
    // Mots-clés principaux génériques
    "nettoyage voiture",
    "lavage auto",
    "nettoyage auto",
    "nettoyage véhicule",
    "lavage voiture",
    "lavage véhicule",
    "car wash",
    "détailing automobile",
    "car detailing",
    
    // Mots-clés avec localisation générale
    "nettoyage voiture à domicile",
    "lavage auto mobile",
    "car wash à domicile",
    "service mobile nettoyage",
    "nettoyage auto domicile",
    "lavage véhicule domicile",
    
    // Mots-clés spécialisés
    "nettoyage intérieur voiture",
    "nettoyage extérieur voiture",
    "lavage intérieur auto",
    "lavage extérieur auto",
    "détailing intérieur",
    "détailing extérieur",
    
    // Mots-clés premium/qualité
    "nettoyage professionnel voiture",
    "lavage professionnel auto",
    "car wash premium",
    "nettoyage voiture professionnel",
    "service premium automobile",
    
    // Mots-clés produits
    "produits Koch Chemie",
    "ProtectorWax",
    "CarPro Perl",
    "produits professionnels auto",
    
    // Mots-clés action/conversion
    "devis nettoyage voiture",
    "réserver nettoyage auto",
    "tarif lavage voiture",
    "prix nettoyage automobile"
  ].join(", "),
  openGraph: {
    title: "Nettoyage Voiture & Lavage Auto à Domicile | Service Mobile Premium – Shine&Go",
    description: "🚗 Service de nettoyage automobile mobile : lavage voiture, car wash, détailing à domicile. Produits premium, résultats garantis. Réservation en ligne 24h/24.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/",
    siteName: "Shine&Go Premium",
    images: [
      {
        url: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg',
        width: 1200,
        height: 630,
        alt: 'Avant/Après nettoyage voiture professionnel - Shine&Go Premium',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Voiture & Lavage Auto à Domicile | Service Mobile Premium",
    description: "🚗 Service de nettoyage automobile mobile : produits premium, résultats garantis. Réservation en ligne 24h/24.",
    images: ['/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg'],
  },
  alternates: {
    canonical: "https://www.shineandgo.be/",
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
  other: {
    'geo.region': 'BE-WLX',
    'geo.placename': 'Wallonie',
    'DC.subject': 'Nettoyage automobile, Car wash, Lavage voiture, Détailing auto, Service mobile',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-surface-light/30 to-hero-bg/40 overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Header */}
      <Header />

      {/* Main content with optimized sales funnel */}
      <main className="overscroll-contain w-full">
        {/* 1. Hero - Promesse + 1er CTA */}
        <section className="snap-start min-h-screen w-full">
          <Hero />
        </section>

        {/* 2. Social Proof condensée - Crédibilité instantanée */}
        <section className="w-full">
          <SocialProof />
        </section>

        {/* 3. Benefits - Désir / différenciation */}
        <section className="w-full">
          <BenefitsSection />
        </section>

        {/* 4. Process 3 étapes - Lever la friction */}
        <section className="w-full">
          <HowItWorks />
        </section>

        {/* 5. Services - Découverte de l'offre */}
        <section id="services-section" className="w-full">
          <ServicesSection />
        </section>

        {/* 6. Avant / Après + Témoignages - Preuve finale */}
        <section className="w-full">
          <BeforeAfterTestimonials />
        </section>

        {/* 7. CTA final - Action */}
        <section className="w-full">
          <FinalCTA />
        </section>

        {/* 8. FAQ Section - Support */}
        <section className="w-full">
          <FAQ />
        </section>
      </main>

      {/* Footer */}
      <Footer />



      {/* Schema.org Organization + Services JSON-LD */}
      <Script
        id="organization-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shine&Go Premium",
            "alternateName": "Shine&Go",
            "description": "Service premium de nettoyage automobile mobile : lavage voiture, car wash, détailing à domicile. Leader en Belgique avec produits professionnels Koch Chemie.",
            "url": "https://www.shineandgo.be",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "logo": "https://www.shineandgo.be/logo.png",
            "image": "https://www.shineandgo.be/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rue Moreau, 20",
              "addressLocality": "Herve",
              "postalCode": "4650",
              "addressCountry": "BE",
              "addressRegion": "Wallonie"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.6391,
              "longitude": 5.7924
            },
            "openingHours": "Mo-Su 08:00-20:00",
            "priceRange": "39€-149€",
            "currenciesAccepted": "EUR",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "serviceArea": {
              "@type": "State",
              "name": "Wallonie"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Liège"
              },
              {
                "@type": "City", 
                "name": "Verviers"
              },
              {
                "@type": "City",
                "name": "Spa"
              },
              {
                "@type": "City",
                "name": "Huy"
              },
              {
                "@type": "City",
                "name": "Herve"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de nettoyage automobile premium",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage Intérieur Fraîcheur",
                    "description": "Aspiration complète, nettoyage plastiques, vitres intérieures, protection CarPro Perl",
                    "serviceType": "Car Interior Cleaning"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "39",
                    "priceCurrency": "EUR",
                    "minPrice": "39",
                    "maxPrice": "64"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Nettoyage Extérieur Brillance",
                    "description": "Mousse active, lavage manuel, vitres extérieures, CarPro offert",
                    "serviceType": "Car Exterior Washing"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "49",
                    "priceCurrency": "EUR",
                    "minPrice": "49",
                    "maxPrice": "74"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pack Sérénité Complet",
                    "description": "Intérieur + Extérieur complets, protection 2 mois, produits premium",
                    "serviceType": "Complete Car Detailing"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification", 
                    "price": "79",
                    "priceCurrency": "EUR",
                    "minPrice": "79",
                    "maxPrice": "129"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "sameAs": [
              "https://www.facebook.com/shineandgo",
              "https://www.instagram.com/shineandgo"
            ],
            "founder": {
              "@type": "Person",
              "name": "Nathan Godfroid"
            },
            "foundingDate": "2023",
            "slogan": "Votre voiture comme neuve, sans bouger de chez vous"
          })
        }}
      />

      {/* Schema.org FAQ for Featured Snippets */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                                 "name": "Quel est le prix d'un nettoyage voiture complet ?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "Le prix d'un nettoyage voiture complet varie de 79€ à 129€ selon le type de véhicule. Notre Pack Sérénité inclut nettoyage intérieur + extérieur avec produits professionnels Koch Chemie et CarPro."
                 }
              },
              {
                "@type": "Question", 
                "name": "Combien de temps dure un lavage auto à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un lavage auto à domicile dure en moyenne 90 minutes pour un nettoyage complet. Le service car wash mobile Shine&Go inclut intérieur, extérieur et protection avec équipement professionnel."
                }
              },
              {
                "@type": "Question",
                                 "name": "Quels produits utilisez-vous pour le car wash mobile ?",
                 "acceptedAnswer": {
                   "@type": "Answer", 
                   "text": "Nous utilisons exclusivement des produits professionnels Koch Chemie et CarPro pour le nettoyage automobile. Ces produits de qualité garantissent un résultat showroom longue durée."
                 }
              },
              {
                "@type": "Question",
                "name": "Comment réserver un nettoyage voiture à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Réservez votre nettoyage voiture en 2 minutes via WhatsApp, téléphone ou formulaire en ligne. Service disponible 7j/7 de 8h à 20h avec confirmation immédiate."
                }
              },
              {
                "@type": "Question",
                "name": "Dans quelles zones faites-vous le lavage auto mobile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Notre service de lavage auto mobile couvre toute la Wallonie : Liège, Verviers, Spa, Huy, Herve et plus de 50 communes. Détailing automobile à domicile avec équipement complet."
                }
              },
                             {
                 "@type": "Question", 
                 "name": "Quelle est la différence entre car wash et nettoyage voiture complet ?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "Le car wash basique est un lavage extérieur, tandis que le nettoyage voiture complet inclut intérieur, extérieur, protection et finition soignée. Shine&Go propose un service complet avec produits professionnels."
                 }
               }
            ]
          })
        }}
      />
    </div>
  );
} 