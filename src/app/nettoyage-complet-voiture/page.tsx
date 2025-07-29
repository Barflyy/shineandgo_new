import { Metadata } from 'next'
import Header from '../shared/components/Header'
import Footer from '../shared/components/Footer'
import ScrollProgress from '../shared/components/ScrollProgress'
import HeroSection from '../shared/sections/HeroSection'
import TestimonialsSection from '../shared/sections/TestimonialsSection'
import FAQCompletSection from './FAQCompletSection'
import ContactCTASection from '../shared/sections/ContactCTASection'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nettoyage complet voiture à domicile – Résultat showroom garanti | Shine&Go',
    description: 'Nettoyage complet voiture à domicile en Wallonie. Lavage intérieur & extérieur premium avec produits pros. Résultat showroom garanti. Devis gratuit.',
    openGraph: {
      title: 'Nettoyage complet voiture à domicile – Résultat showroom garanti | Shine&Go',
      description: 'Nettoyage complet voiture à domicile en Wallonie. Lavage intérieur & extérieur premium avec produits pros. Résultat showroom garanti. Devis gratuit.',
      url: 'https://shine-go.be/nettoyage-complet-voiture',
      siteName: 'Shine&Go',
      locale: 'fr_BE',
      type: 'website',
      images: [
        {
          url: 'https://shine-go.be/hero-images/lavage-interieur-voiture.jpeg',
          width: 1200,
          height: 630,
          alt: 'Nettoyage complet voiture à domicile',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Nettoyage complet voiture à domicile – Résultat showroom garanti | Shine&Go',
      description: 'Nettoyage complet voiture à domicile en Wallonie. Lavage intérieur & extérieur premium avec produits pros. Résultat showroom garanti. Devis gratuit.',
      images: ['https://shine-go.be/hero-images/lavage-interieur-voiture.jpeg'],
    },
    alternates: {
      canonical: 'https://shine-go.be/nettoyage-complet-voiture',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'DC.subject': 'Nettoyage complet voiture',
    },
  }
}

export default function NettoyageCompletPage() {
  return (
    <div className="bg-white">
      <Header isNettoyageCompletPage={true} />
      <ScrollProgress />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          title="👉 Nettoyage complet voiture à domicile – Lavage auto premium"
          subtitle="Votre véhicule a besoin d'un lavage intérieur et extérieur de qualité ? Shine&Go vous propose un nettoyage complet de voiture, directement chez vous, avec des produits professionnels haut de gamme. ✨ Résultat showroom garanti en une seule intervention."
          primaryCtaText="📲 Recevoir un devis gratuit en 2 minutes – WhatsApp"
          primaryCtaLink="https://wa.me/32472303701"
        />

        <hr className="section-divider" />

        {/* Pourquoi choisir un nettoyage complet */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Pourquoi choisir un nettoyage complet voiture ?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Un nettoyage complet voiture combine le meilleur des deux mondes : intérieur sain, sans poussière ni mauvaises odeurs et extérieur éclatant, carrosserie protégée et brillante.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20">
                <div className="text-center">
                  <div className="text-3xl mb-3">😊</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Plus de confort au quotidien</h3>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20">
                <div className="text-center">
                  <div className="text-3xl mb-3">✨</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Meilleure image et fierté de conduire</h3>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20">
                <div className="text-center">
                  <div className="text-3xl mb-3">💎</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Valeur de revente préservée</h3>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20">
                <div className="text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Gain de temps (tout est fait en 1 passage à domicile)</h3>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-slate-700 italic">
                Un nettoyage intérieur et extérieur voiture régulier, effectué à la main par des professionnels, permet de prolonger la durée de vie de votre véhicule.
              </p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Avant/Après Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Avant/Après : La transformation
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Chaque voiture est métamorphosée grâce à notre lavage complet intérieur + extérieur.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 relative z-20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">🚗 AVANT</h3>
                  <p className="text-slate-600">Habitacle sale, carrosserie terne</p>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Intérieur poussiéreux et malodorant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Carrosserie terne et sans éclat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Vitres sales et ternes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Jantes encrassées</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 relative z-20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">✨ APRÈS</h3>
                  <p className="text-slate-600">Intérieur frais et désinfecté, extérieur brillant comme neuf</p>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Habitacle frais et désinfecté</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Carrosserie brillante et éclatante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Vitres nettes et transparentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Jantes impeccables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Tarifs Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Tarifs – Nettoyage complet voiture
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Tarifs transparents selon le type de véhicule et l'état de saleté. Devis gratuit et personnalisé.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 mb-8 relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Niveaux de saleté :</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-white border border-green-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🟢</span>
                  <p className="font-semibold">Léger</p>
                  <p className="text-sm text-slate-600">Entretien régulier</p>
                </div>
                <div className="text-center p-3 bg-white border border-yellow-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🟡</span>
                  <p className="font-semibold">Moyen</p>
                  <p className="text-sm text-slate-600">Quelques taches, salissures visibles</p>
                </div>
                <div className="text-center p-3 bg-white border border-red-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🔴</span>
                  <p className="font-semibold">Encrassé</p>
                  <p className="text-sm text-slate-600">Véhicule négligé, préparation vente</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Tarifs par type de véhicule :</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🚗</span>
                  <p className="font-bold">Citadine</p>
                  <p className="text-lg font-semibold text-blue-600">79 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🚙</span>
                  <p className="font-bold">Berline</p>
                  <p className="text-lg font-semibold text-blue-600">89 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🚗</span>
                  <p className="font-bold">Break</p>
                  <p className="text-lg font-semibold text-blue-600">99 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🚐</span>
                  <p className="font-bold">SUV / 4x4</p>
                  <p className="text-lg font-semibold text-blue-600">109 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🚐</span>
                  <p className="font-bold">Monospace</p>
                  <p className="text-lg font-semibold text-blue-600">119 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                  <span className="text-2xl">🚚</span>
                  <p className="font-bold">Utilitaire</p>
                  <p className="text-lg font-semibold text-blue-600">129 €</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                <h4 className="text-lg font-bold text-slate-900 mb-4">Ce qui est inclus :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Intérieur :</h5>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Aspiration complète</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Nettoyage plastiques + dressing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Vitres intérieures</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Extérieur :</h5>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Prélavage mousse active</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Lavage à la main</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Vitres extérieures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Jantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Protection hydrophobe</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                  📲 Demander mon tarif personnalisé (gratuit)
                </button>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Comment ça se passe */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Comment ça se passe ?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                💡 Fini les déplacements au car wash : Shine&Go, c'est un service mobile rapide et pratique.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 mb-8 relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Vous faites votre demande</h3>
                  <p className="text-slate-600">En ligne ou par WhatsApp</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nous vous confirmons</h3>
                  <p className="text-slate-600">Un devis et un créneau sous 24h</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nous intervenons</h3>
                  <p className="text-slate-600">À domicile avec tout le matériel nécessaire</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                <h4 className="text-lg font-bold text-slate-900 mb-4">Inclus dans le service :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Déplacement gratuit ≤ 25 km</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Produits professionnels haut de gamme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Intervention en 60-90 min selon le véhicule</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Paiement uniquement après validation du résultat</span>
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

        {/* Testimonials Section */}
        <TestimonialsSection serviceType="complet" />

        <hr className="section-divider" />

        {/* FAQ Section */}
        <FAQCompletSection />

        <hr className="section-divider" />

        {/* Contact CTA Section */}
        <ContactCTASection />
      </main>

      <Footer />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Nettoyage complet de voiture à domicile",
            "description": "Service de nettoyage complet intérieur et extérieur de voiture à domicile en Wallonie",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Shine&Go",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Wallonie",
                "addressCountry": "BE"
              },
              "telephone": "+32472303701"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Wallonie"
            },
            "offers": {
              "@type": "Offer",
              "price": "79",
              "priceCurrency": "EUR",
              "description": "Nettoyage complet voiture à domicile"
            }
          })
        }}
      />
    </div>
  )
} 