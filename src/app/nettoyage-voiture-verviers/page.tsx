import { Metadata } from 'next'
import Header from '../shared/components/Header'
import Footer from '../shared/components/Footer'
import ScrollProgress from '../shared/components/ScrollProgress'
import HeroSection from '../shared/sections/HeroSection'
import ServicesSection from '../shared/components/ServicesSection'
import FAQCompletSection from './FAQCompletSection'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nettoyage voiture à domicile Verviers – Lavage auto premium Shine&Go',
    description: 'Lavage voiture à domicile à Verviers et alentours (Ensival, Heusy). Intérieur & extérieur à la main, finition showroom garantie en 90 min. Devis gratuit.',
    openGraph: {
      title: 'Nettoyage voiture à domicile Verviers – Lavage auto premium Shine&Go',
      description: 'Lavage voiture à domicile à Verviers et alentours (Ensival, Heusy). Intérieur & extérieur à la main, finition showroom garantie en 90 min. Devis gratuit.',
      url: 'https://shine-go.be/nettoyage-voiture-verviers',
      siteName: 'Shine&Go',
      locale: 'fr_BE',
      type: 'website',
      images: [
        {
          url: 'https://shine-go.be/transformations/optimized/webp/apres01.webp',
          width: 1200,
          height: 630,
          alt: 'Nettoyage voiture à domicile à Verviers',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Nettoyage voiture à domicile Verviers – Lavage auto premium Shine&Go',
      description: 'Lavage voiture à domicile à Verviers et alentours (Ensival, Heusy). Intérieur & extérieur à la main, finition showroom garantie en 90 min. Devis gratuit.',
      images: ['https://shine-go.be/transformations/optimized/webp/apres01.webp'],
    },
    alternates: {
      canonical: 'https://shine-go.be/nettoyage-voiture-verviers',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'DC.subject': 'Nettoyage voiture Verviers',
    },
  }
}

export default function LavageVoitureVerviersPage() {
  return (
    <div className="bg-white">
      <Header />
      <ScrollProgress />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          title="👉 Nettoyage voiture à domicile à Verviers – Finition showroom garantie"
          subtitle="Vous souhaitez redonner un éclat neuf à votre voiture sans vous déplacer ? Shine&Go se déplace dans tout Verviers et ses environs pour un nettoyage complet de votre véhicule, intérieur et extérieur, réalisé entièrement à la main avec des produits professionnels haut de gamme. ✨ Votre voiture comme neuve en moins de 90 minutes."
          primaryCtaText="📲 Demandez votre devis gratuit dès maintenant – WhatsApp"
          primaryCtaLink="https://wa.me/32472303701"
        />

        <hr className="section-divider" />

        {/* Pourquoi choisir Shine&Go à Verviers */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Pourquoi choisir Shine&Go à Verviers ?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Notre lavage voiture à domicile à Verviers est pensé pour ceux qui veulent un résultat irréprochable sans perdre de temps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" >
                <div className="text-center">
                  <div className="text-3xl mb-3">🚗</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Intervention directement à domicile</h3>
                  <p className="text-sm text-slate-600">Ou sur votre lieu de travail dans Verviers et alentours</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" >
                <div className="text-center">
                  <div className="text-3xl mb-3">✨</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Produits haut de gamme</h3>
                  <p className="text-sm text-slate-600">Koch Chemie, CarPro, P&S respectueux des matériaux</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" >
                <div className="text-center">
                  <div className="text-3xl mb-3">⏰</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Gain de temps</h3>
                  <p className="text-sm text-slate-600">Plus besoin de faire la file au car wash, tout est fait chez vous</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" >
                <div className="text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Satisfaction garantie</h3>
                  <p className="text-sm text-slate-600">Vous validez le résultat avant de payer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Nos services dans la région de Verviers */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Nos services dans la région de Verviers
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">🧹 Lavage intérieur voiture</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Aspiration profonde (sièges, moquettes, tapis, coffre)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Nettoyage des plastiques et tableau de bord + finition satinée</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Vitres intérieures sans traces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>Neutralisation des mauvaises odeurs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">🚿 Lavage extérieur voiture</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>Prélavage mousse active et lavage manuel sans rayures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>Jantes et passages de roues dégraissés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>Vitres extérieures impeccables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>Application d'un traitement hydrophobe de protection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-purple-600 mb-4">✨ Nettoyage complet (intérieur + extérieur)</h3>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">•</span>
                    <span>La prestation la plus complète pour retrouver un véhicule comme à sa livraison</span>
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
                📲 Recevoir mon tarif personnalisé gratuitement
              </a>
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

        {/* Avis clients de Verviers */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Avis clients de Verviers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-slate-700 mb-4">
                  "Intervention rapide et soignée, mon utilitaire est méconnaissable. Service pratique à domicile à Verviers, je recommande Shine&Go."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    PL
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Pierre L.</p>
                    <p className="text-sm text-slate-600">Verviers</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-20" >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-slate-700 mb-4">
                  "J'ai fait appel à Shine&Go pour un nettoyage complet avant la vente de ma voiture. Résultat parfait, acheteur trouvé le lendemain !"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    JR
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Julie R.</p>
                    <p className="text-sm text-slate-600">Ensival (Verviers)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Zones couvertes autour de Verviers */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Zones couvertes autour de Verviers
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Nous intervenons dans tous les quartiers de Verviers et les communes voisines
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 relative z-20" >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Ensival</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Heusy</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Stembert</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Lambermont</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Hodimont</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Pepinster</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Dison</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Theux</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Limbourg</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Dolhain</p>
                </div>
                <div className="text-center p-4 bg-white border border-slate-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🏘️</span>
                  <p className="font-bold">Chaineux</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    💡 Déplacement gratuit dans un rayon de 25 km autour de Verviers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Comment se déroule le nettoyage */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Comment se déroule le nettoyage ?
              </h2>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 mb-8 relative z-20" >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Vous demandez un devis</h3>
                  <p className="text-slate-600">Par WhatsApp ou via le formulaire en ligne</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nous vous envoyons un tarif clair</h3>
                  <p className="text-slate-600">Et fixons un créneau</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nous venons chez vous</h3>
                  <p className="text-slate-600">Ou sur votre lieu de travail à Verviers avec tout le matériel nécessaire</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm relative z-20" >
                <h4 className="text-lg font-bold text-slate-900 mb-4">Inclus dans chaque prestation :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Déplacement gratuit ≤ 25 km autour de Verviers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Produits premium adaptés à chaque surface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Intervention rapide (45 à 90 minutes)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Paiement après validation du résultat</span>
                    </li>
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
        <FAQCompletSection />

        <hr className="section-divider" />

        {/* CTA final */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Prêt à redonner vie à votre voiture à Verviers ?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Demandez votre devis gratuit en 2 minutes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <a
                  href="https://wa.me/32472303701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 text-center"
                >
                  📱 WhatsApp
                </a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                  📋 Formulaire en ligne – Devis gratuit
                </button>
                <a
                  href="tel:0472303701"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 text-center"
                >
                  📞 Appel direct – 0472 30 37 01
                </a>
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
            "name": "Nettoyage voiture à domicile à Verviers",
            "description": "Service de nettoyage voiture à domicile à Verviers, intérieur et extérieur",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Shine&Go",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Verviers",
                "addressRegion": "Wallonie",
                "addressCountry": "BE"
              },
              "telephone": "+32472303701"
            },
            "areaServed": {
              "@type": "City",
              "name": "Verviers"
            },
            "offers": {
              "@type": "Offer",
              "price": "49",
              "priceCurrency": "EUR",
              "description": "Nettoyage voiture à domicile à Verviers"
            }
          })
        }}
      />
    </div>
  )
}