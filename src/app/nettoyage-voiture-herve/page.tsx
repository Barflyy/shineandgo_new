import { Metadata } from 'next'
import Header from '../shared/components/Header'
import Footer from '../shared/components/Footer'
import ScrollProgress from '../shared/components/ScrollProgress'
import HeroSection from '../shared/sections/HeroSection'
import ServicesSection from '../shared/components/ServicesSection'
import FAQHerveSection from './FAQHerveSection'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nettoyage voiture à domicile Herve – Shine&Go lavage auto premium',
    description: 'Nettoyage voiture à domicile à Herve et alentours (Battice, Thimister). Intérieur & extérieur à la main, résultat showroom garanti. Devis gratuit et rapide.',
    openGraph: {
      title: 'Nettoyage voiture à domicile Herve – Shine&Go lavage auto premium',
      description: 'Nettoyage voiture à domicile à Herve et alentours (Battice, Thimister). Intérieur & extérieur à la main, résultat showroom garanti. Devis gratuit et rapide.',
      url: 'https://shine-go.be/nettoyage-voiture-herve',
      siteName: 'Shine&Go',
      locale: 'fr_BE',
      type: 'website',
      images: [
        {
          url: 'https://shine-go.be/transformations/optimized/webp/apres01.webp',
          width: 1200,
          height: 630,
          alt: 'Nettoyage voiture à domicile à Herve',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Nettoyage voiture à domicile Herve – Shine&Go lavage auto premium',
      description: 'Nettoyage voiture à domicile à Herve et alentours (Battice, Thimister). Intérieur & extérieur à la main, résultat showroom garanti. Devis gratuit et rapide.',
      images: ['https://shine-go.be/transformations/optimized/webp/apres01.webp'],
    },
    alternates: {
      canonical: 'https://shine-go.be/nettoyage-voiture-herve',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'DC.subject': 'Nettoyage voiture Herve',
    },
  }
}

export default function LavageVoitureHervePage() {
  return (
    <div className="bg-white">
      <Header />
      <ScrollProgress />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          title="👉 Nettoyage voiture à domicile à Herve – Lavage auto premium"
          subtitle="Vous cherchez un nettoyage voiture à domicile à Herve pour retrouver un habitacle impeccable et une carrosserie éclatante ? Shine&Go intervient directement chez vous ou sur votre lieu de travail pour un lavage auto à la main avec des produits professionnels haut de gamme. ✨ Résultat showroom garanti en 90 minutes, sans déplacement."
          primaryCtaText="📲 Demandez votre devis gratuit en 2 minutes – WhatsApp"
          primaryCtaLink="https://wa.me/32472303701"
        />

        <hr className="section-divider" />

        {/* Pourquoi choisir Shine&Go à Herve */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Pourquoi choisir Shine&Go à Herve ?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Avec Shine&Go, bénéficiez d'un lavage voiture à domicile à Herve qui combine praticité, qualité et protection de votre véhicule.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" >
                <div className="text-center">
                  <div className="text-3xl mb-3">🚗</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Service 100 % mobile et flexible</h3>
                  <p className="text-sm text-slate-600">Nous nous déplaçons à Herve, Battice, Thimister-Clermont, Charneux et alentours</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" >
                <div className="text-center">
                  <div className="text-3xl mb-3">✨</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Produits professionnels premium</h3>
                  <p className="text-sm text-slate-600">Koch Chemie, CarPro, P&S respectueux des surfaces</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" >
                <div className="text-center">
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Expertise reconnue</h3>
                  <p className="text-sm text-slate-600">Plus de 500 véhicules déjà nettoyés en Wallonie</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" >
                <div className="text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Satisfaction garantie</h3>
                  <p className="text-sm text-slate-600">Paiement uniquement après validation du résultat</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Nos prestations locales */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Nos prestations locales
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">🧹 Nettoyage intérieur voiture à Herve</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Aspiration complète sièges, tapis et coffres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Nettoyage des plastiques + dressing satiné ou mat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Vitres intérieures sans traces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Désodorisation et habitacle sain</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">🚿 Nettoyage extérieur voiture à Herve</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>Prélavage mousse active et lavage à la main</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>Nettoyage des jantes et passages de roues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>Vitres extérieures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>Protection hydrophobe et finition showroom</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-purple-600 mb-4">✨ Nettoyage complet voiture</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">•</span>
                    <span>Intérieur + extérieur en une seule intervention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">•</span>
                    <span>Idéal pour un résultat comme neuf</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">•</span>
                    <span>Ou préparer la vente d'un véhicule</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://wa.me/32472303701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                📲 Recevoir mon tarif personnalisé (gratuit)
              </a>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Zones desservies autour de Herve */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Zones desservies autour de Herve
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Nous intervenons gratuitement dans un rayon de 25 km autour de Herve
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 relative z-20" >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Battice</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Thimister-Clermont</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Charneux</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Olne</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Aubel</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Soumagne</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-slate-600 mb-4">
                  Et toute la région de Verviers à Liège
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    💡 Au-delà de 25 km, un petit supplément de déplacement peut s'appliquer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Services Section - Tarifs partagés */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ServicesSection />
          </div>
        </section>

        <hr className="section-divider" />

        {/* Avis clients de Herve */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Preuves sociales – Avis clients de Herve
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-slate-700 mb-4">
                  "Nathan a fait un travail exceptionnel sur mon break familial à Herve. Plus besoin de faire la file au car wash, tout est fait à domicile. Service parfait !"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    LB
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Laurent B.</p>
                    <p className="text-sm text-slate-600">Herve</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-slate-700 mb-4">
                  "Nettoyage complet impeccable, mon SUV est comme neuf. Je recommande Shine&Go à 100 %."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Sophie M.</p>
                    <p className="text-sm text-slate-600">Charneux (Herve)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Comment se déroule l'intervention */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Comment se déroule l'intervention à Herve ?
              </h2>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 mb-8 relative z-20" >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Vous demandez un devis</h3>
                  <p className="text-slate-600">Via WhatsApp ou formulaire en ligne</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nous validons le tarif</h3>
                  <p className="text-slate-600">Et un créneau sous 24h</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nous venons chez vous</h3>
                  <p className="text-slate-600">Ou sur votre lieu de travail à Herve avec tout le matériel</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm relative z-20" >
                <h4 className="text-lg font-bold text-slate-900 mb-4">Inclus dans le service :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Déplacement gratuit à Herve et alentours (≤ 25 km)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Produits professionnels adaptés à chaque surface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Intervention rapide (45 à 90 min selon le véhicule)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Garantie satisfaction ou retouche offerte</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* FAQ locale */}
        <FAQHerveSection />

        <hr className="section-divider" />

        {/* CTA final */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Envie de retrouver une voiture comme neuve sans bouger de chez vous ?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Demandez votre devis gratuit dès maintenant.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                  📱 WhatsApp
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                  📋 Formulaire en ligne
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                  📞 0472 30 37 01
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Nettoyage voiture à domicile à Herve",
            "description": "Service de nettoyage voiture à domicile à Herve, intérieur et extérieur",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Shine&Go",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Herve",
                "addressRegion": "Wallonie",
                "addressCountry": "BE"
              },
              "telephone": "+32472303701"
            },
            "areaServed": {
              "@type": "City",
              "name": "Herve"
            },
            "offers": {
              "@type": "Offer",
              "price": "49",
              "priceCurrency": "EUR",
              "description": "Nettoyage voiture à domicile à Herve"
            }
          })
        }}
      />
    </div>
  )
}