/**
 * Shine&Go - Page d'accueil optimisée selon nouveau contenu
 * 
 * Structure selon nouveau contenu :
 * 1. Header collant (60-72px) - Logo, nav, numéro, bouton Réserver
 * 2. Hero (above-the-fold) - Badge localisation, H1 bénéfice, sous-titre douleur→solution, triple bénéfice, double CTA, urgence, visuel avant/après 16:9
 * 3. Section "Pourquoi choisir Shine&Go ?" - 4 raisons principales
 * 4. Section "Avant/Après : La Transformation" - Slider interactif + témoignages
 * 5. Section "Nos Forfaits Sur-Mesure de Nettoyage Voiture" - 3 cartes avec badges
 * 6. Section "Frais de Déplacement" - Transparence sur les frais
 * 7. Section "Comment fonctionne notre service de lavage auto à domicile ?" - 3 étapes
 * 8. Section "Questions fréquentes – Lavage Auto Mobile" - FAQ condensée
 * 9. Footer - Coordonnées, horaires, liens RGPD, réseaux, pictos paiement
 */

import { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/shared/components/HeaderWrapper';
import Hero from '@/shared/components/Hero';
import SocialProof from '@/shared/components/SocialProof';
import HowItWorks from '@/shared/components/HowItWorks';
import ServicesSection from '@/shared/components/ServicesSection';
import BeforeAfterTestimonials from '@/shared/components/BeforeAfterTestimonials';
import FAQ from '@/shared/components/FAQ';
import Footer from '@/shared/components/Footer';
import ScrollProgress from '@/shared/components/ScrollProgress';


export const metadata: Metadata = {
  title: "Lavage Voiture à Domicile en Wallonie | Shine&Go | Devis Gratuit",
  description: "Shine&Go : lavage voiture à domicile en Wallonie. Intérieur & extérieur à la main, finition showroom en 90 min. Devis gratuit et 10 € offerts.",
  openGraph: {
    title: "Lavage Voiture & Nettoyage Auto à Domicile | Valeting Mobile Professionnel – Shine&Go",
    description: "Shine&Go : lavage voiture à domicile en Wallonie. Intérieur & extérieur à la main, finition showroom en 90 min. Devis gratuit et 10 € offerts.",
    type: "website",
    locale: "fr_BE",
    url: "https://shineandgo.be/",
    siteName: "Shine&Go Premium",
    images: [
      {
        url: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg',
        width: 1200,
        height: 630,
        alt: 'Avant/Après lavage voiture professionnel - Shine&Go Premium',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavage Voiture & Nettoyage Auto à Domicile | Valeting Mobile Professionnel",
    description: "Shine&Go : lavage voiture à domicile en Wallonie. Intérieur & extérieur à la main, finition showroom en 90 min. Devis gratuit et 10 € offerts.",
    images: ['/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg'],
  },
  alternates: {
    canonical: "https://shineandgo.be/",
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
    'DC.subject': 'Lavage voiture, Valeting mobile professionnel, Nettoyage automobile, Car wash, Lavage voiture à domicile, Service mobile',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-surface-light/30 to-hero-bg/40 overflow-x-hidden touch-optimized">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Header */}
      <Header />

      {/* Main content optimized for mobile-first responsive design */}
      <main className="overscroll-contain w-full scroll-mobile">
        
        {/* 1. HERO (above-the-fold) - Optimized for mobile viewport */}
        <section className="snap-start min-h-svh w-full relative">
          <Hero />
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />
        
        {/* 2. SECTION "Pourquoi choisir Shine&Go ?" - Mobile-first spacing */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SocialProof />
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />
        
        {/* 3. SECTION "Avant/Après : La Transformation" - Responsive container */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <BeforeAfterTestimonials />
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />
        
        {/* 4. SECTION "Nos Forfaits Sur-Mesure de Nettoyage Voiture" - Touch-optimized */}
        <section id="services-section" className="w-full py-12 md:py-16 lg:py-20 container-mobile touch-optimized">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ServicesSection />
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />
        
        {/* 5. SECTION "Comment fonctionne notre service de lavage auto à domicile ?" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <HowItWorks />
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />
        
        {/* 6. SECTION "Questions fréquentes – Lavage Auto Mobile" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FAQ />
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Schema.org SiteNavigationElement for Navigation */}
      <Script
        id="navigation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": "Navigation principale Shine&Go",
            "hasPart": [
              {
                "@type": "WebPage",
                "name": "Nettoyage intérieur voiture",
                "url": "https://shineandgo.be/nettoyage-interieur-voiture",
                "description": "Service de nettoyage intérieur voiture à domicile avec aspiration et protection UV"
              },
              {
                "@type": "WebPage",
                "name": "Nettoyage extérieur voiture",
                "url": "https://shineandgo.be/nettoyage-exterieur-voiture",
                "description": "Service de nettoyage extérieur voiture à domicile avec protection hydrophobe"
              },
              {
                "@type": "WebPage",
                "name": "Nettoyage complet voiture",
                "url": "https://shineandgo.be/nettoyage-complet-voiture",
                "description": "Service de nettoyage complet voiture intérieur et extérieur à domicile"
              },
              {
                "@type": "WebPage",
                "name": "Services de nettoyage",
                "url": "https://shineandgo.be/#services",
                "description": "Services de nettoyage voiture à domicile en Wallonie"
              }
            ]
          })
        }}
      />

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
            "description": "Service premium de lavage voiture mobile : valeting mobile professionnel, finition showroom garantie. Leader en Belgique avec produits professionnels Koch Chemie et CarPro.",
            "url": "https://shineandgo.be",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "logo": "https://shineandgo.be/logo.png",
            "image": "https://shineandgo.be/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg",
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
              "name": "Services de lavage voiture premium",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lavage Voiture Intérieur Fraîcheur",
                    "description": "Aspiration complète sièges & sols, nettoyage tableau de bord et plastiques, vitres intérieures sans traces, protection UV avec CarPro Perl",
                    "serviceType": "Car Interior Washing"
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
                    "name": "Lavage Voiture Extérieur Brillance",
                    "description": "Mousse active dégraissante, lavage manuel technique professionnel, vitres extérieures & seuils de porte impeccables, ProtectorWax Koch-Chemie inclus",
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
                    "name": "Pack Sérénité Lavage Voiture Complet",
                    "description": "Lavage voiture intérieur & extérieur complet, mousse active & rinçage haute pression, protection 2 mois ProtectorWax Koch-Chemie, plastiques protégés CarPro Perl",
                    "serviceType": "Complete Car Washing"
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
            "slogan": "Votre voiture comme neuve, directement chez vous"
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
                "name": "Quels sont les prix pour un lavage voiture à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nos tarifs démarrent à 39€ pour un lavage intérieur, 49€ pour un lavage extérieur et 79€ pour le service complet intérieur + extérieur."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps dure un lavage voiture mobile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un lavage voiture mobile dure entre 45 et 90 minutes selon la formule choisie."
                }
              },
              {
                "@type": "Question",
                "name": "Quels produits utilisez-vous pour le nettoyage auto ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous utilisons exclusivement des produits professionnels premium de Koch-Chemie et CarPro."
                }
              },
              {
                "@type": "Question",
                "name": "Dans quelles zones proposez-vous le lavage voiture à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Notre service couvre toute la Wallonie, avec un déplacement gratuit dans un rayon de 25 km autour de Herve."
                }
              }
            ]
          })
        }}
      />

      {/* Schema.org Product Reviews for Rich Snippets */}
      <Script
        id="product-reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Lavage voiture à domicile Shine&Go",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "30",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "39",
              "availability": "https://schema.org/InStock",
              "url": "https://shineandgo.be"
            }
          })
        }}
      />
    </div>
  );
} 