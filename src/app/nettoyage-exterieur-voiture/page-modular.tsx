/**
 * Shine&Go - Page nettoyage intérieur voiture (Version Modulaire)
 * Exemple d'utilisation des sections modulaires
 */

import { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/shared/components/HeaderWrapper';
import Footer from '@/shared/components/Footer';
import ScrollProgress from '@/shared/components/ScrollProgress';
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
    title: "Nettoyage intérieur voiture à domicile en Wallonie | Tarifs dès 39 € – Shine&Go",
    description: "Nettoyage intérieur de voiture à domicile en Wallonie. Aspiration complète, plastiques protégés, vitres sans traces. Tarifs dès 39 €. Devis gratuit – 10 € offerts.",
    openGraph: {
      title: "Nettoyage intérieur voiture à domicile en Wallonie | Tarifs dès 39 € – Shine&Go",
      description: "Nettoyage intérieur de voiture à domicile en Wallonie. Aspiration complète, plastiques protégés, vitres sans traces. Tarifs dès 39 €. Devis gratuit – 10 € offerts.",
      type: "website",
      locale: "fr_BE",
      url: "https://shineandgo.be/nettoyage-interieur-voiture",
      siteName: "Shine&Go Premium",
      images: [
        {
          url: '/hero-images/lavage-interieur-voiture.jpeg',
          width: 1200,
          height: 630,
          alt: 'Nettoyage intérieur voiture à domicile - Shine&Go',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nettoyage intérieur voiture à domicile en Wallonie | Tarifs dès 39 € – Shine&Go",
      description: "Nettoyage intérieur de voiture à domicile en Wallonie. Aspiration complète, plastiques protégés, vitres sans traces. Tarifs dès 39 €. Devis gratuit – 10 € offerts.",
      images: ['/hero-images/lavage-interieur-voiture.jpeg'],
    },
    alternates: {
      canonical: "https://shineandgo.be/nettoyage-interieur-voiture",
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
      'DC.subject': 'Nettoyage intérieur voiture, nettoyage voiture intérieur, voiture nettoyage intérieur, nettoyage intérieur voiture tarif, nettoyage voiture à domicile, lavage auto à proximité, lavage voiture à la main, Wallonie, Liège, Verviers, Herve, Soumagne, Battice, Spa',
    },
  };
}

export default async function NettoyageInterieurPageModular() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden touch-optimized">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Header */}
      <Header />

      {/* Main content optimized for mobile-first responsive design */}
      <main className="overscroll-contain w-full scroll-mobile">
        
        {/* 1. HERO SECTION - Personnalisé pour le nettoyage intérieur */}
        <HeroSection 
          title="Nettoyage intérieur voiture à domicile – Wallonie"
          subtitle="Aspiration complète, surfaces désinfectées et protection UV : un intérieur frais et comme neuf, sans vous déplacer. Shine&Go réalise le nettoyage intérieur de votre voiture à domicile partout en Wallonie. Nous intervenons avec du matériel professionnel et des produits premium Koch‑Chemie & CarPro pour un résultat durable. Tarifs dès 39 €, devis gratuit et 10 € offerts pour votre première prestation."
          primaryCtaText="Devis gratuit"
          primaryCtaLink="https://tally.so/r/w5POJQ"
          secondaryCtaText="WhatsApp"
          secondaryCtaLink="https://wa.me/32472303701"
        />

        {/* 2. SERVICES SECTION */}
        <ServicesSectionWrapper />
        
        {/* 3. SERVICE AREAS SECTION */}
        <ServiceAreasSection 
          title="Zones desservies pour le nettoyage intérieur"
          subtitle="Service mobile de nettoyage intérieur à domicile dans un rayon de 25 km autour de Herve."
        />
        
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

      {/* Schema.org scripts restent identiques */}
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
              }
            ]
          })
        }}
      />
    </div>
  );
} 