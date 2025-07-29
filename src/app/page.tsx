/**
 * Shine&Go - Page d'accueil optimisée
 */

import { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/shared/components/HeaderWrapper';
import ScrollProgress from '@/shared/components/ScrollProgress';
import Footer from '@/shared/components/Footer';
import {
  HeroSection,
  ServicesSectionWrapper,
  ServiceAreasSection,
  TestimonialsSectionWrapper,
  SocialProofSectionWrapper,
  BeforeAfterSectionWrapper,
  HowItWorksSectionWrapper,
  FAQSectionWrapper
} from '@/shared/sections';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lavage voiture à domicile en Wallonie | Shine&Go – Devis gratuit",
    description: "Shine&Go : lavage voiture à domicile en Wallonie. Intérieur & extérieur à la main, finition showroom en 90 min. Devis gratuit + 10 € offerts.",
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
        
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. SERVICES SECTION */}
        <ServicesSectionWrapper />
        
        {/* 3. SERVICE AREAS SECTION */}
        <ServiceAreasSection />
        
        {/* 4. TESTIMONIALS SECTION */}
        <TestimonialsSectionWrapper />
        
        {/* 5. SOCIAL PROOF SECTION */}
        <SocialProofSectionWrapper />
        
        {/* 6. BEFORE/AFTER SECTION */}
        <BeforeAfterSectionWrapper />
        
        {/* 7. HOW IT WORKS SECTION */}
        <HowItWorksSectionWrapper />
        
        {/* 8. FAQ SECTION */}
        <FAQSectionWrapper />
        
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
              "name": "Wallonie",
              "addressCountry": "BE"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de nettoyage voiture",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage intérieur voiture",
                    "description": "Service complet de nettoyage intérieur avec aspiration et protection UV",
                    "provider": {
                      "@type": "Organization",
                      "name": "Shine&Go Premium"
                    }
                  },
                  "price": "39",
                  "priceCurrency": "EUR",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "39",
                    "priceCurrency": "EUR",
                    "minPrice": "39",
                    "maxPrice": "79"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Lavage extérieur voiture",
                    "description": "Lavage extérieur professionnel avec protection hydrophobe",
                    "provider": {
                      "@type": "Organization",
                      "name": "Shine&Go Premium"
                    }
                  },
                  "price": "49",
                  "priceCurrency": "EUR",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "49",
                    "priceCurrency": "EUR",
                    "minPrice": "49",
                    "maxPrice": "99"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pack Sérénité - Lavage complet",
                    "description": "Service complet intérieur et extérieur avec protection longue durée",
                    "provider": {
                      "@type": "Organization",
                      "name": "Shine&Go Premium"
                    }
                  },
                  "price": "79",
                  "priceCurrency": "EUR",
                  "priceSpecification": {
                    "@type": "PriceSpecification", 
                    "price": "79",
                    "priceCurrency": "EUR",
                    "minPrice": "79",
                    "maxPrice": "149"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Marie Dubois"
                },
                "reviewBody": "Service exceptionnel ! Ma voiture n'a jamais été aussi propre. L'équipe est professionnelle et ponctuelle."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
              "@type": "Person",
                  "name": "Pierre Martin"
                },
                "reviewBody": "Très satisfait du nettoyage intérieur. Résultat showroom garanti, je recommande !"
              }
            ]
          })
        }}
      />

      {/* Schema.org LocalBusiness for Google My Business */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine&Go Premium",
            "description": "Service premium de lavage voiture mobile en Wallonie",
            "url": "https://shineandgo.be",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
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
            "areaServed": {
              "@type": "State",
              "name": "Wallonie",
              "addressCountry": "BE"
            },
            "serviceArea": {
              "@type": "State",
              "name": "Wallonie",
              "addressCountry": "BE"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de nettoyage voiture",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage intérieur voiture",
                    "description": "Service complet de nettoyage intérieur avec aspiration et protection UV"
                  },
                  "price": "39",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lavage extérieur voiture",
                    "description": "Lavage extérieur professionnel avec protection hydrophobe"
                  },
                  "price": "49",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pack Sérénité - Lavage complet",
                    "description": "Service complet intérieur et extérieur avec protection longue durée"
                  },
                  "price": "79",
                  "priceCurrency": "EUR"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />

      {/* Schema.org FAQPage for FAQ Section */}
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
                "name": "Combien coûte un lavage voiture à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nos tarifs commencent à 39€ pour le nettoyage intérieur, 49€ pour l'extérieur, et 79€ pour le pack complet. Le prix varie selon la taille du véhicule."
                }
              },
              {
                "@type": "Question",
                "name": "Dans quelles zones intervenez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous intervenons dans un rayon de 25 km autour de Herve, incluant Liège, Verviers, Spa, et les environs. Déplacement gratuit dans cette zone."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps dure une intervention ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Une intervention complète dure environ 90 minutes selon la formule choisie et la taille du véhicule."
                }
              },
              {
                "@type": "Question",
                "name": "Quels produits utilisez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous utilisons exclusivement des produits professionnels Koch-Chemie et CarPro pour garantir un résultat showroom et une protection durable."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous une garantie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, nous garantissons satisfaction. Vous payez après validation du résultat et nous proposons une retouche gratuite si nécessaire."
                }
              }
            ]
          })
        }}
      />

      {/* Schema.org BreadcrumbList for Navigation */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://shineandgo.be/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Lavage voiture à domicile",
                "item": "https://shineandgo.be/#services"
              }
            ]
          })
        }}
      />
    </div>
  );
} 