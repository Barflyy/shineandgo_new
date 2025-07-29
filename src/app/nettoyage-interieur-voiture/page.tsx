/**
 * Shine&Go - Page nettoyage intérieur voiture
 */

import { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';
import ScrollProgress from '@/shared/components/ScrollProgress';
import HeroSection from '@/shared/sections/HeroSection';
import WhyCleanInteriorSection from '@/shared/sections/WhyCleanInteriorSection';
import BeforeAfterSection from '@/shared/sections/BeforeAfterSection';
import ServicesPricingSection from '@/shared/sections/ServicesPricingSection';
import HowItWorksSection from '@/shared/sections/HowItWorksSection';
import TestimonialsSection from '@/shared/sections/TestimonialsSection';
import FAQInterieurSection from './FAQInterieurSection';
import ContactCTASection from '@/shared/sections/ContactCTASection';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nettoyage intérieur de voiture à domicile – Résultat showroom garanti | Shine&Go",
    description: "Nettoyage intérieur de voiture à domicile en Wallonie. Service rapide avec produits pros pour un habitacle comme neuf. Devis gratuit en 2 min.",
          openGraph: {
      title: "Nettoyage intérieur de voiture à domicile – Résultat showroom garanti | Shine&Go",
      description: "Nettoyage intérieur de voiture à domicile en Wallonie. Service rapide avec produits pros pour un habitacle comme neuf. Devis gratuit en 2 min.",
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
      title: "Nettoyage intérieur de voiture à domicile – Résultat showroom garanti | Shine&Go",
      description: "Nettoyage intérieur de voiture à domicile en Wallonie. Service rapide avec produits pros pour un habitacle comme neuf. Devis gratuit en 2 min.",
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

export default async function NettoyageInterieurPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden touch-optimized">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Header */}
      <Header isNettoyageInterieurPage={true} isHomePage={false} />

      {/* Main content optimized for mobile-first responsive design */}
      <main className="overscroll-contain w-full scroll-mobile">
        
        {/* 1. HERO SECTION */}
        <HeroSection 
          title="Nettoyage intérieur voiture à domicile – Lavage auto premium"
          subtitle="Vous cherchez un nettoyage intérieur voiture rapide et efficace sans vous déplacer ? Shine&Go intervient à domicile pour un lavage auto complet, avec des produits professionnels haut de gamme. ✨ Résultat showroom garanti, quel que soit l'état de votre habitacle."
          primaryCtaText="Recevoir un devis gratuit en 2 min"
          primaryCtaLink="https://tally.so/r/w5POJQ"
          secondaryCtaText="WhatsApp"
          secondaryCtaLink="https://wa.me/32472303701"
        />

        {/* 2. POURQUOI NETTOYER L'INTÉRIEUR */}
        <WhyCleanInteriorSection />

        {/* 3. AVANT/APRÈS */}
        <BeforeAfterSection />

        {/* 4. NOS SERVICES & TARIFS */}
        <ServicesPricingSection />

        {/* 5. COMMENT ÇA FONCTIONNE */}
        <HowItWorksSection />

        {/* 6. AVIS CLIENTS */}
                    <TestimonialsSection serviceType="interieur" />

        {/* 7. FAQ */}
        <FAQInterieurSection />

        {/* 8. CONTACT / CTA FINAL */}
        <ContactCTASection />
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Schema.org JSON-LD */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
                    "@type": "Service",
            "name": "Nettoyage intérieur de voiture à domicile",
            "description": "Service de nettoyage intérieur de voiture à domicile en Wallonie avec produits professionnels et résultat showroom garanti.",
            "provider": {
            "@type": "LocalBusiness",
              "name": "Shine&Go",
            "address": {
              "@type": "PostalAddress",
                "addressRegion": "Wallonie",
                "addressCountry": "BE"
              },
              "telephone": "+32472303701",
              "url": "https://shineandgo.be"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 50.6396,
                "longitude": 5.7947
              },
              "geoRadius": "25000"
            },
            "serviceType": "Nettoyage intérieur voiture",
            "offers": {
                  "@type": "Offer",
                  "price": "39",
                  "priceCurrency": "EUR",
              "description": "Tarifs à partir de 39€ selon le type de véhicule"
            }
          })
        }}
      />
    </div>
  );
} 