/**
 * Shine&Go - Page d'accueil optimisée
 */

import { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/shared/components/HeaderWrapper';
import Hero from '@/shared/components/Hero';
import SocialProof from '@/shared/components/SocialProof';
import Testimonials from '@/shared/components/Testimonials';
import HowItWorks from '@/shared/components/HowItWorks';
import ServicesSection from '@/shared/components/ServicesSection';
import BeforeAfterTestimonials from '@/shared/components/BeforeAfterTestimonials';
import FAQ from '@/shared/components/FAQ';
import Footer from '@/shared/components/Footer';
import ScrollProgress from '@/shared/components/ScrollProgress';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lavage voiture à domicile en Wallonie | Shine&Go – Devis gratuit",
    description: "Shine&Go : lavage voiture à domicile en Wallonie. Intérieur & extérieur à la main, finition showroom en 90 min. Devis gratuit + 10 € offerts.",
    keywords: "lavage voiture, lavage auto, lavage de véhicule, nettoyage voiture, lavage voiture à domicile, nettoyage voiture à domicile, lavage voiture à la main, lavage auto à proximité, tarif nettoyage intérieur voiture, prix lavage voiture à domicile",
    openGraph: {
      title: "Lavage voiture à domicile en Wallonie | Shine&Go – Devis gratuit",
      description: "Shine&Go : lavage voiture à domicile en Wallonie. Intérieur & extérieur à la main, finition showroom en 90 min. Devis gratuit + 10 € offerts.",
      type: "website",
      locale: "fr_BE",
      url: "https://shineandgo.be/",
      siteName: "Shine&Go Premium",
      images: [
        {
          url: '/hero-images/lavage-interieur-voiture.jpeg',
          width: 1200,
          height: 630,
          alt: 'Lavage voiture à domicile en Wallonie - Shine&Go',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Lavage voiture à domicile en Wallonie | Shine&Go – Devis gratuit",
      description: "Shine&Go : lavage voiture à domicile en Wallonie. Intérieur & extérieur à la main, finition showroom en 90 min. Devis gratuit + 10 € offerts.",
      images: ['/hero-images/lavage-interieur-voiture.jpeg'],
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
      'DC.subject': 'Lavage voiture, Lavage auto, Nettoyage voiture, Lavage voiture à domicile, Lavage voiture à la main, Lavage auto à proximité',
    },
  };
}

export default async function HomePage() {
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
          <div className="relative min-h-screen flex items-center justify-center bg-white">
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Lavage voiture à domicile en Wallonie
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Service mobile professionnel : intérieur & extérieur à la main avec produits Koch-Chemie et CarPro. Résultat showroom en 90 min, garantie satisfaction. Devis gratuit et 10 € offerts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  Devis gratuit
                </a>
                <a
                  href="https://wa.me/32472303701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SECTION "Nos services de lavage auto à domicile" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ServicesSection />
          </div>
        </section>
        
        {/* 3. SECTION "Zones desservies" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Zones desservies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Service mobile à domicile dans un rayon de 25 km autour de Herve. Déplacement gratuit, puis 0,60 €/km A/R.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative z-10" style={{backgroundColor: 'white', opacity: 1}}>
                <div className="h-full flex flex-col p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Villes principales</h3>
                  <ul className="text-gray-600 space-y-2 flex-grow">
                    <li>• Liège</li>
                    <li>• Verviers</li>
                    <li>• Herve</li>
                    <li>• Soumagne</li>
                    <li>• Battice</li>
                    <li>• Spa</li>
                    <li>• Chaudfontaine</li>
                    <li>• Fléron</li>
                    <li>• Aubel</li>
                    <li>• Welkenraedt</li>
                    <li>• Pepinster</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative z-10" style={{backgroundColor: 'white', opacity: 1}}>
                <div className="h-full flex flex-col p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Codes postaux</h3>
                  <ul className="text-gray-600 space-y-2 flex-grow">
                    <li>• 4650 - Herve</li>
                    <li>• 4000 - Liège</li>
                    <li>• 4800 - Verviers</li>
                    <li>• 4630 - Soumagne</li>
                    <li>• 4651 - Battice</li>
                    <li>• 4900 - Spa</li>
                    <li>• 4050 - Chaudfontaine</li>
                    <li>• 4623 - Fléron</li>
                    <li>• 4880 - Aubel</li>
                    <li>• 4840 - Welkenraedt</li>
                    <li>• 4860 - Pepinster</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative z-10" style={{backgroundColor: 'white', opacity: 1}}>
                <div className="h-full flex flex-col p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service mobile</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Intervention à domicile en 90 min selon la formule choisie.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Déplacement gratuit :</strong> 25 km autour de Herve<br/>
                      <strong>Au-delà :</strong> 0,60 €/km aller-retour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 4. SECTION "Avis clients" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Testimonials />
          </div>
        </section>
        
        {/* 4.5. SECTION "Avantages du service" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SocialProof />
          </div>
        </section>
        
        {/* 5. SECTION "Avant/Après : résultats" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <BeforeAfterTestimonials />
          </div>
        </section>
        
        {/* 6. SECTION "Comment ça marche" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <HowItWorks />
          </div>
        </section>
        
        {/* 7. SECTION "FAQ lavage voiture à domicile" */}
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