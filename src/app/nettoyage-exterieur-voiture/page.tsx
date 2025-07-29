/**
 * Shine&Go - Page nettoyage extérieur voiture
 */

import { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';
import ScrollProgress from '@/shared/components/ScrollProgress';
import HeroSection from '@/shared/sections/HeroSection';
import BeforeAfterSection from '@/shared/sections/BeforeAfterSection';
import ServicesPricingSection from '@/shared/sections/ServicesPricingSection';
import HowItWorksSection from '@/shared/sections/HowItWorksSection';
import TestimonialsSection from '@/shared/sections/TestimonialsSection';
import ContactCTASection from '@/shared/sections/ContactCTASection';
import FAQExterieurSection from './FAQExterieurSection';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nettoyage extérieur de voiture à domicile – Résultat showroom garanti | Shine&Go",
    description: "Nettoyage extérieur de voiture à domicile en Wallonie. Lavage auto premium à la main avec produits pros. Résultat showroom garanti. Devis gratuit.",
    openGraph: {
      title: "Nettoyage extérieur de voiture à domicile – Résultat showroom garanti | Shine&Go",
      description: "Nettoyage extérieur de voiture à domicile en Wallonie. Lavage auto premium à la main avec produits pros. Résultat showroom garanti. Devis gratuit.",
      type: "website",
      locale: "fr_BE",
      url: "https://shineandgo.be/nettoyage-exterieur-voiture",
      siteName: "Shine&Go Premium",
      images: [
        {
          url: '/hero-images/lavage-voiture-exterieur.jpeg',
          width: 1200,
          height: 630,
          alt: 'Nettoyage extérieur voiture à domicile - Shine&Go',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nettoyage extérieur de voiture à domicile – Résultat showroom garanti | Shine&Go",
      description: "Nettoyage extérieur de voiture à domicile en Wallonie. Lavage auto premium à la main avec produits pros. Résultat showroom garanti. Devis gratuit.",
      images: ['/hero-images/lavage-voiture-exterieur.jpeg'],
    },
    alternates: {
      canonical: "https://shineandgo.be/nettoyage-exterieur-voiture",
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
      'DC.subject': 'Nettoyage extérieur voiture, nettoyage voiture extérieur, voiture nettoyage extérieur, nettoyage extérieur voiture tarif, nettoyage voiture à domicile, lavage auto à proximité, lavage voiture à la main, Wallonie, Liège, Verviers, Herve, Soumagne, Battice, Spa',
    },
  };
}

export default async function NettoyageExterieurPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden touch-optimized">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Header */}
      <Header isNettoyageExterieurPage={true} isHomePage={false} />

      {/* Main content optimized for mobile-first responsive design */}
      <main className="overscroll-contain w-full scroll-mobile">
        
        {/* 1. HERO SECTION */}
        <HeroSection 
          title="👉 Nettoyage extérieur voiture à domicile – Lavage auto premium"
          subtitle="Vous cherchez un nettoyage extérieur voiture rapide et efficace sans vous déplacer ? Shine&Go intervient à domicile pour un lavage auto à la main, avec des produits professionnels haut de gamme. ✨ Résultat showroom garanti, quelle que soit l'état de votre carrosserie."
          primaryCtaText="📲 Recevoir un devis gratuit en 2 min – WhatsApp"
          primaryCtaLink="https://wa.me/32472303701"
          secondaryCtaText="Formulaire en ligne"
          secondaryCtaLink="https://tally.so/r/w5POJQ"
        />

        {/* Séparateur */}
        <hr className="section-divider" />

        {/* 2. POURQUOI NETTOYER L'EXTÉRIEUR */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
                Pourquoi un nettoyage extérieur est essentiel pour votre voiture ?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
                Un nettoyage extérieur voiture régulier, réalisé à la main par des professionnels, permet de protéger et d'embellir votre carrosserie.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-6 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Les problèmes que nous résolvons :
                </h3>
                <ul className="space-y-4 text-center">
                  <li className="flex flex-col items-center">
                    <span className="text-blue-500 text-2xl mb-2">🚿</span>
                    <div>
                      <strong className="text-slate-900">Élimine la saleté, insectes et résidus de route</strong>
                      <p className="text-slate-600 mt-1">Un lavage professionnel supprime toutes les contaminations qui abîment votre peinture.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center">
                    <span className="text-green-500 text-2xl mb-2">🛡️</span>
                    <div>
                      <strong className="text-slate-900">Protège la carrosserie des micro-rayures et de l'oxydation</strong>
                      <p className="text-slate-600 mt-1">Grâce à des techniques adaptées, nous préservons l'éclat de votre véhicule.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center">
                    <span className="text-yellow-500 text-2xl mb-2">💎</span>
                    <div>
                      <strong className="text-slate-900">Préserve la valeur de votre véhicule (revente)</strong>
                      <p className="text-slate-600 mt-1">Une peinture entretenue et brillante augmente la valeur de revente.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Les bénéfices d'un extérieur propre :
                </h3>
                <ul className="space-y-4 text-center">
                  <li className="flex flex-col items-center">
                    <span className="text-blue-500 text-2xl mb-2">💎</span>
                    <div>
                      <strong className="text-slate-900">Aspect Showroom</strong>
                      <p className="text-slate-600 mt-1">Votre voiture retrouve sa brillance d'origine.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center">
                    <span className="text-green-500 text-2xl mb-2">🌿</span>
                    <div>
                      <strong className="text-slate-900">Protection durable</strong>
                      <p className="text-slate-600 mt-1">Application d'une protection hydrophobe pour éviter que la saleté n'adhère.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center">
                    <span className="text-yellow-500 text-2xl mb-2">😊</span>
                    <div>
                      <strong className="text-slate-900">Fierté & confort visuel</strong>
                      <p className="text-slate-600 mt-1">Rien de plus agréable que de conduire un véhicule propre et impeccable.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />

        {/* 3. AVANT/APRÈS */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <BeforeAfterSection />
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />

        {/* 4. NOS SERVICES & TARIFS */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
                Quel est le tarif d'un nettoyage extérieur voiture ?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
                Tarifs transparents selon le type de véhicule et l'état de saleté.<br />
                Devis gratuit et personnalisé.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-6 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Niveaux de saleté :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">🟢</span>
                    <span><strong>Léger :</strong> poussière et saletés légères</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-3">🟡</span>
                    <span><strong>Moyen :</strong> traces d'insectes, film routier</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">🔴</span>
                    <span><strong>Encrassé :</strong> boue, résidus tenaces, véhicule négligé</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Tarifs par type de véhicule :
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>🚗 Citadine</span>
                    <span className="font-semibold">49 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>🚙 Berline</span>
                    <span className="font-semibold">54 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>🚗 Break</span>
                    <span className="font-semibold">59 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>🚐 SUV / 4x4</span>
                    <span className="font-semibold">64 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>🚐 Monospace</span>
                    <span className="font-semibold">69 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>🚚 Utilitaire</span>
                    <span className="font-semibold">74 €</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Ce qui est inclus :
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Lavage extérieur complet à la main</li>
                <li>• Prélavage mousse active</li>
                <li>• Nettoyage des jantes et passages de roues</li>
                <li>• Vitres extérieures sans traces</li>
                <li>• Finition hydrophobe CarPro Perl</li>
              </ul>
            </div>

            <div className="text-center">
              <a 
                href="https://wa.me/32472303701"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors text-lg shadow-lg hover:shadow-xl"
              >
                📲 Demander mon tarif personnalisé (gratuit)
              </a>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />

        {/* 5. COMMENT ÇA FONCTIONNE */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
                Un lavage extérieur de voiture simple et rapide
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
                💡 Fini les files au car wash : Shine&Go, c'est un nettoyage voiture à domicile sans perte de temps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">1️⃣</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Vous nous contactez</h3>
                <p className="text-slate-600">Vous remplissez notre formulaire en ligne ou nous contactez sur WhatsApp</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">2️⃣</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Nous confirmons</h3>
                <p className="text-slate-600">Nous confirmons votre devis sous 24h avec un créneau</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">3️⃣</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Nous intervenons</h3>
                <p className="text-slate-600">Nous intervenons chez vous avec tout le matériel professionnel</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Inclus dans le service :
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Déplacement gratuit ≤ 25 km</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Matériel professionnel et produits premium</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Intervention en 30-45 min selon le véhicule</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Paiement après validation du résultat</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Garantie satisfaction ou retouche offerte</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Préparation de votre intervention
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">ℹ️</span>
                  <span>Prévoir un accès à l'eau et à l'électricité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">ℹ️</span>
                  <span>Retirer les objets personnels extérieurs (porte-vélo, aimants, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">ℹ️</span>
                  <span>Intervention possible même par temps de pluie (abri souhaité)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />

        {/* 6. AVIS CLIENTS */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <TestimonialsSection serviceType="exterieur" />
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />

        {/* 7. FAQ */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FAQExterieurSection />
          </div>
        </section>

        {/* Séparateur */}
        <hr className="section-divider" />

        {/* 8. CONTACT / CTA FINAL */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ContactCTASection />
          </div>
        </section>
        
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
            "name": "Nettoyage extérieur de voiture à domicile",
            "description": "Service de nettoyage extérieur de voiture à domicile en Wallonie avec produits professionnels et résultat showroom garanti.",
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
            "serviceType": "Nettoyage extérieur voiture",
            "offers": {
              "@type": "Offer",
              "price": "49",
              "priceCurrency": "EUR",
              "description": "Tarifs à partir de 49€ selon le type de véhicule"
            }
          })
        }}
      />
    </div>
  );
} 