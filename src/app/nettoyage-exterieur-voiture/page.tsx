import { ArrowRight, Check, Star, Clock, Sparkles, Car, Droplets, Shield } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Nettoyage Extérieur Voiture à Domicile | Lavage Main & Cire - Shine&Go',
  description: 'Spécialiste du lavage extérieur voiture à la main à domicile. Technique 2 seaux, nettoyage jantes, dégoudronnage, cire de protection. Dès 85€.',
  alternates: {
    canonical: 'https://shineandgo.be/nettoyage-exterieur-voiture',
  },
  openGraph: {
    title: 'Nettoyage Extérieur Voiture à Domicile | Lavage Main & Cire - Shine&Go',
    description: 'Spécialiste du lavage extérieur voiture à la main à domicile. Technique 2 seaux, nettoyage jantes, dégoudronnage, cire de protection. Dès 85€.',
    url: 'https://shineandgo.be/nettoyage-exterieur-voiture',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Lavage extérieur voiture domicile Shine and Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
}

export default function NettoyageExterieurPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100">
      <Breadcrumbs 
        items={[
          { 'label': 'Services', 'href': '/#services' }, 
          { 'label': 'Nettoyage Extérieur' }
        ]} 
      />

      {/* HERO - Minimaliste épuré */}
      <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge discret */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50 rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="text-sm font-medium text-blue-900">4.9/5 sur Google</span>
            </div>

            {/* Titre épuré */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Nettoyage extérieur voiture
              <span className="block font-semibold mt-2 text-gray-900">Lavage main & Protection</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed px-4 animate-fade-in-up text-pretty max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
              Service mobile professionnel en Wallonie
              <span className="block mt-2 text-base text-gray-400 font-normal">Anti-micro rayures • Jantes • Cire • Dès 85€</span>
            </p>

            {/* CTA simple */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un nettoyage extérieur - 85€"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                Réserver extérieur dès 85€
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>

            {/* Info clés */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Service en 3h</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Déplacement gratuit</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Paiement après validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ZONES */}
      <section className="py-12 md:py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Intervention partout en région liégeoise
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                À domicile ou sur votre lieu de travail
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { ville: 'Herve', href: '/nettoyage-voiture-herve' },
                { ville: 'Verviers', href: '/nettoyage-voiture-verviers' },
                { ville: 'Liège', href: '/nettoyage-voiture-liege' },
                { ville: 'Battice', href: '/nettoyage-voiture-battice' },
                { ville: 'Soumagne', href: '/nettoyage-voiture-soumagne' },
                { ville: 'Spa', href: '/nettoyage-voiture-spa' },
                { ville: 'Fléron', href: '/nettoyage-voiture-fleron' },
                { ville: 'Visé', href: '/nettoyage-voiture-vise' },
              ].map((zone) => (
                <Link
                  key={zone.ville}
                  href={zone.href}
                  className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 text-center border border-transparent hover:border-gray-100"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    📍
                  </div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {zone.ville}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="tel:+32472303701"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all group"
              >
                Vérifier ma zone gratuitement
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS - Badges de confiance */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Pourquoi choisir Shine&Go ?
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Le seul service de nettoyage mobile qui garantit un résultat showroom
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Satisfait ou remboursé</h3>
                <p className="text-sm text-gray-600 text-pretty">Si le résultat ne vous convient pas, on vous rembourse intégralement</p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Produits professionnels</h3>
                <p className="text-sm text-gray-600 text-pretty">Koch-Chemie exclusivement, la référence des concessions premium</p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Service 5 étoiles</h3>
                <p className="text-sm text-gray-600 text-pretty">La référence du nettoyage mobile en région liégeoise</p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexibilité totale</h3>
                <p className="text-sm text-gray-600 text-pretty">Nous venons quand cela vous arrange, à domicile ou au bureau</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS FORMULES */}
      <section id="tarifs" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 text-balance tracking-tight">
              Tarifs Nettoyage Extérieur
            </h2>
            <p className="text-lg text-gray-600 text-pretty font-light">
              Déplacement inclus partout en région liégeoise.
              <br className="hidden md:block" />
              Une formule unique pour un résultat parfait.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">

            {/* Extérieur - Main */}
            <article className="relative group bg-white p-8 md:p-12 rounded-3xl border border-gray-100 hover:border-blue-100 shadow-xl hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="px-6 py-2 bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider rounded-full shadow-md border border-blue-100 flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Extérieur Showroom
                </span>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Lavage Main & Cire</h3>
                <p className="text-gray-500 text-lg">Zéro micro-rayure • Protection durable</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-600 text-lg">Citadine</span>
                    <span className="font-semibold text-2xl text-gray-900">85€</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-600 text-lg">Berline</span>
                    <span className="font-semibold text-2xl text-gray-900">95€</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-600 text-lg">Break</span>
                    <span className="font-semibold text-2xl text-gray-900">105€</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-600 text-lg">SUV / 4x4</span>
                    <span className="font-semibold text-2xl text-gray-900">115€</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-600 text-lg">Monospace</span>
                    <span className="font-semibold text-2xl text-gray-900">130€</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    'Nettoyage jantes, pneus & passages de roues',
                    'Pré-lavage & Lavage manuel carrosserie',
                    'Nettoyage passages de portes',
                    'Séchage microfibre + soufflage (0 gouttes)',
                    'Dressing pneus (noir profond)',
                    'Protection hydrophobe (si carrosserie saine)',
                    'Nettoyage vitres extérieures'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="https://wa.me/32472303701?text=Je souhaite réserver un nettoyage extérieur"
                  className="inline-flex items-center justify-center px-12 py-5 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-all gap-2 group shadow-xl"
                >
                  Réserver maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-gray-400 text-sm mt-4">Paiement sur place • Satisfaction garantie</p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* SERVICE DETAIL - Pour les plus exigeants */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Tout ce qui est inclus
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Un lavage extérieur méticuleux, sans risque de rayures
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Lavage Main "2 Seaux"</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    La seule technique qui garantit 0 micro-rayures. Un seau pour le shampoing, un pour rincer le gant. Votre carrosserie est respectée.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Jantes & Pneus</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Décontamination ferreuse des jantes (poussière de freins) et dressing des pneus pour un noir profond et durable.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-100 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Dégoudronnage</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Élimination des points de goudron, résine et insectes collés sur la carrosserie et les bas de caisse.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Cire de Protection</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Application d'une cire synthétique hydrophobe. Votre voiture reste propre plus longtemps et brille intensément.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE REALISATIONS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Nos dernières réalisations
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Découvrez le résultat de nos formules sur différents véhicules
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  image: '/images/realisations/lavage-complet-bmw-x5.webp', 
                  title: 'BMW X5', 
                  subtitle: 'Formule Complète',
                  tags: ['Extérieur', 'Intérieur', 'Cuir'] 
                },
                { 
                  image: '/images/realisations/lavage-complet-bmw-z4.webp', 
                  title: 'BMW Z4', 
                  subtitle: 'Préparation à la vente',
                  tags: ['Capote', 'Polissage', 'Céramique'] 
                },
                { 
                  image: '/images/realisations/lavage-complet-audi-rs3.webp', 
                  title: 'Audi RS3', 
                  subtitle: 'Entretien Premium',
                  tags: ['Lavage Main', 'Jantes', 'Cire'] 
                },
                { 
                  image: '/images/realisations/lavage-complet-bmw-serie4.webp', 
                  title: 'BMW Série 4', 
                  subtitle: 'Remise à neuf',
                  tags: ['Intérieur', 'Moquettes', 'Plastiques'] 
                },
              ].map((item, i) => (
                <div key={i} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-8 bg-white border-t border-gray-100 flex-1 flex flex-col justify-center text-center">
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 mb-6">{item.subtitle}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.instagram.com/shineandgo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Suivez-nous sur Instagram
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES CLIENTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Ce que disent nos clients
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Une carrosserie qui brille comme au premier jour
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Laurent B.',
                  location: 'Soumagne',
                  text: 'J\'avais peur des rayures avec un lavage à domicile, mais la technique est top. Ma voiture noire est impeccable, pas une trace de tourbillon. Bravo !',
                  rating: 5
                },
                {
                  name: 'Michel J.',
                  location: 'Verviers',
                  text: 'Le nettoyage des jantes est impressionnant. Elles étaient noires de poussière de freins, elles sont revenues comme neuves. Très satisfait.',
                  rating: 5
                },
                {
                  name: 'Isabelle K.',
                  location: 'Spa',
                  text: 'Super pratique qu\'il vienne au bureau. Quand je sors, ma voiture brille de mille feux. La cire tient vraiment longtemps, l\'eau perle dessus.',
                  rating: 5
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 flex-1 leading-relaxed text-pretty">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.google.com/search?q=shine+and+go+herve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all group"
              >
                Voir tous les avis Google
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center text-balance">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                { q: "Utilisez-vous de l'eau ?", a: "Oui, nous utilisons un nettoyeur haute pression professionnel avec un débit maîtrisé pour rincer. Nous avons besoin d'un robinet à moins de 25m. Si ce n'est pas possible, nous avons une réserve d'eau (à préciser à la réservation)." },
                { q: "Risque de rayures ?", a: "Aucun. Nous n'utilisons pas de rouleaux, mais des gants microfibres et la technique des deux seaux. C'est la méthode la plus sûre pour votre peinture." },
                { q: "Et s'il pleut ?", a: "Si vous n'avez pas de carport ou de garage où nous pouvons travailler à l'abri, nous devrons reporter le rendez-vous. Nous vous contacterons la veille si la météo est mauvaise." },
                { q: "La cire dure combien de temps ?", a: "La cire de protection incluse dans la formule dure environ 2 à 3 mois selon l'utilisation du véhicule et son stationnement (garage ou extérieur)." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <h3 className="font-medium text-gray-900 mb-2 text-pretty">{item.q}</h3>
                  <p className="text-gray-600 text-pretty">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Nettoyage Extérieur Voiture à Domicile",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Shine&Go",
            "image": "https://shineandgo.be/transformations/optimized/webp/apres01.webp",
            "telephone": "+32472303701",
            "priceRange": "65€ - 190€",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rue de la Station 15",
                "addressLocality": "Herve",
                "postalCode": "4650",
                "addressRegion": "Liège",
                "addressCountry": "BE"
            }
        },
        "areaServed": [
            "Herve",
            "Verviers",
            "Liège",
            "Battice",
            "Soumagne",
            "Spa",
            "Fléron",
            "Visé"
        ],
        "description": "Service professionnel de nettoyage extérieur voiture à domicile partout en province de Liège."
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Utilisez-vous de l'eau ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, nous utilisons un nettoyeur haute pression professionnel avec un débit maîtrisé pour rincer. Nous avons besoin d'un robinet à moins de 25m. Si ce n'est pas possible, nous avons une réserve d'eau (à préciser à la réservation)."
                }
            },
            {
                "@type": "Question",
                "name": "Risque de rayures ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aucun. Nous n'utilisons pas de rouleaux, mais des gants microfibres et la technique des deux seaux. C'est la méthode la plus sûre pour votre peinture."
                }
            },
            {
                "@type": "Question",
                "name": "Et s'il pleut ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Si vous n'avez pas de carport ou de garage où nous pouvons travailler à l'abri, nous devrons reporter le rendez-vous. Nous vous contacterons la veille si la météo est mauvaise."
                }
            },
            {
                "@type": "Question",
                "name": "La cire dure combien de temps ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La cire de protection incluse dans la formule dure environ 2 à 3 mois selon l'utilisation du véhicule et son stationnement (garage ou extérieur)."
                }
            }
        ]
    },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Nettoyage Extérieur",
                "item": "https://shineandgo.be/nettoyage-exterieur-voiture"
            }
        ]
    }
])
        }}
      />

    </main>
  )
}
