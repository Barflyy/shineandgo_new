import { ArrowRight, Check, Star, Clock, Sparkles, Car, Armchair, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Nettoyage Intérieur Voiture à Domicile | Tapis & Plastiques - Shine&Go',
  description: 'Spécialiste du nettoyage intérieur voiture à domicile. Nettoyage tapis, plastiques, désinfection habitacle. Élimination taches et odeurs. Dès 65€ à Liège & Verviers.',
  alternates: {
    canonical: 'https://shineandgo.be/nettoyage-interieur-voiture',
  },
  openGraph: {
    title: 'Nettoyage Intérieur Voiture à Domicile | Tapis & Plastiques - Shine&Go',
    description: 'Spécialiste du nettoyage intérieur voiture à domicile. Nettoyage tapis, plastiques, désinfection habitacle. Élimination taches et odeurs. Dès 65€ à Liège & Verviers.',
    url: 'https://shineandgo.be/nettoyage-interieur-voiture',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Nettoyage intérieur voiture domicile Shine and Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
}

export default function NettoyageInterieurPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100">
      <Breadcrumbs 
        items={[
          { 'label': 'Services', 'href': '/#services' }, 
          { 'label': 'Nettoyage Intérieur' }
        ]} 
      />

      {/* HERO */}
      <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50 rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="text-sm font-medium text-blue-900">4.9/5 sur Google</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Nettoyage intérieur voiture
              <span className="block font-semibold mt-2 text-gray-900">Plastiques & Tapis</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed px-4 animate-fade-in-up text-pretty max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
              Service mobile professionnel en Wallonie
              <span className="block mt-2 text-base text-gray-400 font-normal">Élimination odeurs • Tapis & Plastiques • Dès 65€</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un nettoyage intérieur - 65€"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                Réserver intérieur dès 65€
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Service en 3h</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Déplacement gratuit</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Paiement après validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="py-12 md:py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Zones d'intervention
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Service mobile dans toute la région
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
          </div>
        </div>
      </section>

      {/* DÉTAIL DES SERVICES (NOUVEAU) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Tout ce qui est inclus
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Un nettoyage intérieur complet, dans les moindres détails
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Armchair className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Aspiration & Tapis</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Aspiration complète de l'habitacle et du coffre. Injection-extraction des tapis de sols (si nécessaire) pour éliminer la saleté incrustée.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Plastiques & Tableau de bord</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Nettoyage méticuleux du tableau de bord, de la console centrale, des panneaux de portes et de tous les autres plastiques intérieurs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-100 transition-transform duration-300">
                  <ShieldCheck className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Désodorisation</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Application d'un désodorisant professionnel en fin de prestation pour laisser une odeur fraîche et agréable dans votre véhicule.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Finitions</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Nous n'oublions rien : nettoyage des vitres intérieures, des passages de portes et des moindres recoins pour un résultat parfait.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 text-balance">
              Tarifs nettoyage intérieur
            </h2>
            <p className="text-lg text-gray-600 text-pretty">
              Prix adaptés à la taille de votre véhicule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Intérieur */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6">
                  <Armchair className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">Intérieur Premium</h3>
                <p className="text-sm text-gray-500">Rénovation habitacle</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Citadine</span>
                  <span className="font-semibold text-xl text-gray-900">65€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Berline</span>
                  <span className="font-semibold text-xl text-gray-900">75€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Break</span>
                  <span className="font-semibold text-xl text-gray-900">85€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">SUV / 4x4</span>
                  <span className="font-semibold text-xl text-gray-900">95€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Monospace</span>
                  <span className="font-semibold text-xl text-gray-900">110€</span>
                </div>
              </div>

              <a
                href="https://wa.me/32472303701?text=Je souhaite réserver un nettoyage intérieur"
                className="w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 transition-colors"
              >
                Réserver Intérieur
              </a>
            </div>

            {/* Complet Upsell */}
            <div className="relative bg-slate-900 p-8 rounded-3xl border border-slate-900 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Recommandé
                </span>
              </div>
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-blue-400 mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">Formule Complète</h3>
                <p className="text-sm text-slate-400">Intérieur + Extérieur</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-gray-400">Citadine</span>
                  <div className="text-right">
                    <span className="block font-semibold text-xl text-white">120€</span>
                    <span className="text-xs text-green-400">Économisez 30€</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-gray-400">Berline</span>
                  <span className="font-semibold text-xl text-white">140€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-gray-400">Break</span>
                  <span className="font-semibold text-xl text-white">160€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-gray-400">SUV / 4x4</span>
                  <span className="font-semibold text-xl text-white">170€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-gray-400">Monospace</span>
                  <span className="font-semibold text-xl text-white">190€</span>
                </div>
              </div>

              <a
                href="https://wa.me/32472303701?text=Je souhaite réserver la formule complète"
                className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl text-center hover:bg-slate-100 transition-colors"
              >
                Voir le complet
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES (NOUVEAU) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Ce que disent nos&nbsp;clients
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Ils ont retrouvé une voiture comme neuve
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Julie D.',
                  location: 'Herve',
                  text: 'Avec deux enfants en bas âge, ma voiture était dans un état catastrophique. Après le passage de Shine&Go, toutes les taches sur les sièges ont disparu. Magique !',
                  rating: 5
                },
                {
                  name: 'Pierre W.',
                  location: 'Liège',
                  text: 'Ponctuel, super équipé et très sympa. Le nettoyage intérieur est vraiment minutieux, même entre les sièges. Je recommande.',
                  rating: 5
                },
                {
                  name: 'Sarah L.',
                  location: 'Verviers',
                  text: 'Je pensais que mes sièges beiges étaient fichus. Ils sont revenus comme neufs ! Le rapport qualité/prix est excellent pour le travail fourni.',
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
          </div>
        </div>
      </section>

      {/* FAQ (NOUVEAU) */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center text-balance">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                { q: "Faut-il vider la voiture avant ?", a: "Oui, merci de retirer vos effets personnels (lunettes, câbles, papiers, sièges auto si possible) pour nous permettre d'aller dans les moindres recoins." },
                { q: "Les tapis seront-ils mouillés ?", a: "Ils seront légèrement humides après le shampouinage. En été, ils sèchent en 1h. En hiver, comptez quelques heures avec le chauffage. Nous utilisons une aspiration puissante pour extraire 90% de l'eau." },
                { q: "Enlevez-vous les poils de chien ?", a: "Oui, nous avons des brosses spéciales pour les poils d'animaux. Un supplément peut s'appliquer si la quantité est très importante." },
                { q: "Besoin d'électricité ?", a: "Oui, une prise classique à moins de 25m est idéale. Si ce n'est pas possible, prévenez-nous !" }
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

      {/* CTA FINAL */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              Réservez votre nettoyage intérieur
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              Intervention sous 48h • Déplacement gratuit • Paiement après validation
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un nettoyage intérieur - 65€"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                Réserver par WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                0472 30 37 01
              </a>
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
        "name": "Nettoyage Intérieur Voiture à Domicile",
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
        "description": "Service professionnel de nettoyage intérieur voiture à domicile partout en province de Liège."
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Faut-il vider la voiture avant ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, merci de retirer vos effets personnels (lunettes, câbles, papiers, sièges auto si possible) pour nous permettre d'aller dans les moindres recoins."
                }
            },
            {
                "@type": "Question",
                "name": "Les tapis seront-ils mouillés ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ils seront légèrement humides après le shampouinage. En été, ils sèchent en 1h. En hiver, comptez quelques heures avec le chauffage. Nous utilisons une aspiration puissante pour extraire 90% de l'eau."
                }
            },
            {
                "@type": "Question",
                "name": "Enlevez-vous les poils de chien ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, nous avons des brosses spéciales pour les poils d'animaux. Un supplément peut s'appliquer si la quantité est très importante."
                }
            },
            {
                "@type": "Question",
                "name": "Besoin d'électricité ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, une prise classique à moins de 25m est idéale. Si ce n'est pas possible, prévenez-nous !"
                }
            }
        ]
    },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Nettoyage Intérieur",
                "item": "https://shineandgo.be/nettoyage-interieur-voiture"
            }
        ]
    }
])
        }}
      />

    </main>
  )
}
