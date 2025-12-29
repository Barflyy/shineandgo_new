import { ArrowRight, Check, Star, MapPin, Sparkles, Car, Armchair, Clock } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Lavage Voiture Limbourg à Domicile - Intérieur & Extérieur | Shine&Go',
  description: 'Lavage voiture à domicile à Limbourg. Service de lavage auto professionnel, nettoyage véhicule intérieur/extérieur. Prix clairs dès 65€. Déplacement gratuit. ☎ 0472 30 37 01',
  alternates: {
    canonical: 'https://shineandgo.be/lavage-voiture-limbourg',
  },
  openGraph: {
    title: 'Lavage Voiture Limbourg à Domicile - Intérieur & Extérieur | Shine&Go',
    description: 'Lavage voiture à domicile à Limbourg. Service de lavage auto professionnel, nettoyage véhicule intérieur/extérieur. Prix clairs dès 65€. Déplacement gratuit. ☎ 0472 30 37 01',
    url: 'https://shineandgo.be/lavage-voiture-limbourg',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Lavage voiture domicile Limbourg - Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
}

export default function LimbourgPage() {
  
  return (
    <>
      
      <main className="bg-white dark:bg-slate-950 min-h-screen font-sans selection:bg-blue-100">
      <Breadcrumbs 
        items={[
          { 'label': 'Lavage voiture', 'href': '/zones' }, 
          { 'label': 'Limbourg' }
        ]} 
      />

      {/* HERO */}
      <section className="relative pt-16 pb-6 sm:pt-20 sm:pb-10 md:pt-28 md:pb-12 overflow-hidden bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50 dark:bg-blue-500/10 border border-transparent dark:border-blue-500/20 rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600 dark:fill-blue-400 dark:text-blue-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-blue-900 dark:text-blue-300">4.9/5 sur Google</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">Lavage auto professionnel chez vous à Limbourg</h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light leading-relaxed px-4 animate-fade-in-up text-pretty max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
              Lavage voiture professionnel directement chez vous à Limbourg. Profitez d'un service premium avec les meilleurs produits du marché.
              <span className="block mt-2 text-base text-gray-400 dark:text-gray-500 font-normal">Intervention sous 48h • Dès 65€ • Satisfaction Garantie</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à Limbourg"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                Réserver à Limbourg
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="w-full sm:w-auto px-8 py-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-full hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Lavage main anti-rayures</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Déplacement gratuit</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Paiement après validation</span>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION DESCRIPTIVE UNIQUE */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900 border-y border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6">
              Expert en lavage voiture à <span className="font-semibold">Limbourg</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">
              Shine&Go s'occupe de votre voiture à Limbourg. Profitez d'un service professionnel méticuleux avec les produits Koch-Chemie. Nous couvrons l'ensemble des codes postaux de Limbourg, apportant notre savoir-faire de detailer professionnel directement dans votre garage ou sur votre allée.
            </p>
          </div>
        </div>
      </section>


      
      {/* SECTION LOCALISEE UNIQUE */}
      <section className="py-16 bg-blue-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8 text-center">
              Lavage auto dans la ville historique
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Limbourg et sa place fortifiée... L'accès n'est pas toujours simple mais notre équipement mobile passe partout. Nous prenons soin des voitures des Dolhaintois et Limbourgeois.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Un polissage ou un lustrage fera briller votre auto autant que les pavés de la vieille ville.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Zone Limbourg</h3>
                        <p className="text-sm text-gray-500">Déplacement inclus</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Disponibilité</h3>
                        <p className="text-sm text-gray-500">Du lundi au samedi</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* VILLES PROCHES */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-950 border-y border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4 text-balance">
                Nous intervenons aussi près de Limbourg
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-pretty">
                Service mobile dans toute la région
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'Chaudfontaine', href: '/lavage-voiture-chaudfontaine' },
                { name: 'Embourg', href: '/lavage-voiture-embourg' },
                { name: 'Fléron', href: '/lavage-voiture-fleron' },
                { name: 'Beyne-Heusay', href: '/lavage-voiture-beyne-heusay' },
                { name: 'Herstal', href: '/lavage-voiture-herstal' },
                { name: 'Ans', href: '/lavage-voiture-ans' },
              ].map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 text-center border border-transparent hover:border-gray-100 block"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📍</div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</div>
                  <div className="text-xs text-gray-500 mt-1">Déplacement gratuit</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* POURQUOI NOUS - Badges de confiance */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4 text-balance">
                Pourquoi choisir Shine&Go&nbsp;?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-pretty">
                Le seul service de&nbsp;nettoyage mobile qui garantit un&nbsp;résultat&nbsp;showroom
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Satisfait ou remboursé</h3>
                <p className="text-sm text-gray-600 text-pretty">Si le résultat ne vous convient pas, on vous rembourse&nbsp;intégralement</p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Produits professionnels</h3>
                <p className="text-sm text-gray-600 text-pretty">Koch-Chemie exclusivement, la référence des&nbsp;concessions&nbsp;premium</p>
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
                <p className="text-sm text-gray-600 text-pretty">Nous venons à Limbourg quand cela vous arrange, à domicile ou au bureau</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* NOS FORMULES */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 text-balance">
              Nos formules à Limbourg</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-pretty">
              Prix fixes et transparents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-start">

            {/* Intérieur */}
            <article className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Armchair className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Intérieur</h3>
                <p className="text-gray-500 text-sm">Pour un habitacle comme neuf</p>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-50">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-light text-gray-900">65€</span>
                  <span className="text-gray-400 font-light">/ voiture</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 font-medium uppercase tracking-wide">Durée approx. 3h</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Aspiration complète (habitacle + coffre)',
                  'Nettoyage plastiques (tableau de bord, portes...)',
                  'Shampooing tapis (si nécessaire)',
                  'Vitres intérieures',
                  'Désodorisant'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur à Limbourg - 65€"
                className="block w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Réserver
              </a>
            </article>

            {/* Complet - Best Seller */}
            <article className="relative group bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 md:-mt-4 md:mb-4 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-600/30">
                  <Star className="w-3 h-3 fill-current" /> Best Seller
                </span>
              </div>

              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Complet</h3>
                <p className="text-slate-400 text-sm">L'expérience ultime Shine&Go</p>
              </div>

              <div className="mb-8 pb-8 border-b border-slate-800">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-light text-white">120€</span>
                  <span className="text-slate-500 font-light">/ voiture</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wide">Économisez 30€</span>
                  <span className="text-xs text-slate-500 line-through">150€</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Intérieur détaillé (Plastiques, Tapis...)',
                  'Extérieur manuel (Jantes, Passages roues...)',
                  'Séchage souffleur & Protection',
                  'Résultat Showroom'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/32472303701?text=Je souhaite le nettoyage complet à Limbourg - 120€"
                className="block w-full py-4 bg-white text-gray-900 font-bold rounded-xl text-center hover:bg-gray-100 transition-all shadow-lg"
              >
                Réserver le complet
              </a>
            </article>

            {/* Extérieur */}
            <article className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Extérieur</h3>
                <p className="text-gray-500 text-sm">Lavage & Protection carrosserie</p>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-50">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-light text-gray-900">85€</span>
                  <span className="text-gray-400 font-light">/ voiture</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 font-medium uppercase tracking-wide">Durée approx. 3h</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Nettoyage jantes, pneus & passages de roues',
                  'Pré-lavage & Lavage manuel',
                  'Nettoyage passages de portes',
                  'Séchage microfibre & soufflage',
                  'Dressing pneus & Protection hydrophobe'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur à Limbourg - 85€"
                className="block w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Réserver
              </a>
            </article>
          </div>
        </div>
      </section>

      
      {/* SERVICES DETAILLÉS */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4 text-balance">
                Car Wash & Detailing Mobile
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-pretty">
                Une expertise professionnelle directement chez&nbsp;vous
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Lavage manuel anti-rayures</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Fini les rouleaux qui abîment votre peinture. Nous utilisons la technique des deux seaux et des gants microfibres haute densité pour un lavage en douceur qui préserve l'éclat de votre carrosserie.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Nettoyage Tapis & Moquettes</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Poussière et saletés ? Notre aspiration minutieuse et puissante élimine tout ce qui traîne sur vos tapis et moquettes pour un habitacle parfaitement propre.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Gain de temps</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Ne perdez plus votre samedi matin au car-wash. Nous intervenons pendant que vous travaillez ou profitez de votre temps libre. Autonomie totale en eau et électricité si besoin.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Produits Koch-Chemie</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Nous n'utilisons que le meilleur. La gamme allemande Koch-Chemie est la référence mondiale du detailing, approuvée par les plus grands constructeurs (Mercedes, BMW, Audi).
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
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4 text-balance">
                Nos dernières réalisations
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-pretty">
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
                      alt={`${item.title} - Lavage voiture Limbourg`}
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-0.5"
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
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4 text-balance">
                Ce que disent nos&nbsp;clients
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-pretty">
                Plus de 150&nbsp;avis 5&nbsp;étoiles sur&nbsp;Google
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sophie L.',
                  location: 'Verviers',
                  text: 'Très pratique d\'avoir le service à domicile. Professionnel, ponctuel et le résultat est bluffant. Les produits Koch-Chemie font vraiment la différence.',
                  rating: 5
                },
                {
                  name: 'Thomas M.',
                  location: 'Herve',
                  text: 'Service impeccable ! Ma voiture n\'avait jamais été aussi propre. Le detailing intérieur a fait des miracles : plastiques brillants, tapis impeccables. Je recommande à 100%.',
                  rating: 5
                },
                {
                  name: 'Marc D.',
                  location: 'Limbourg',
                  text: 'J\'ai testé la formule complète sur ma BMW et je suis scotché du résultat. On dirait qu\'elle sort du concession. Prix très correct pour la qualité du travail.',
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
                href="https://www.google.com/search?q=shine+and+go+limbourg"
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
                { q: "Comment payer ?", a: "Le paiement se fait une fois la prestation terminée et validée par vos soins. Nous acceptons les espèces, Payconiq ou virement instantané." },
                { q: "Et s'il pleut ?", a: "Pour l'extérieur, nous devrons reporter si vous n'avez pas d'abri (carport/garage). Pour l'intérieur, nous pouvons travailler sous une pluie fine." },
                { q: "Combien de temps ça dure ?", a: "Comptez environ 3h pour une prestation complète. Nous prenons le temps nécessaire pour un résultat parfait." },
                { q: "Besoin d'eau ou d'électricité ?", a: "Idéalement oui, une prise et un robinet à moins de 25m. Si ce n'est pas possible, prévenez-nous, nous avons des solutions autonomes." }
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
      
      {/* MAILLAGE INTERNE */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            Besoin d'un devis spécifique ? <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contactez-nous</Link> ou consultez <Link href="/services" className="text-blue-600 font-medium hover:underline">tous nos services</Link>.
            <span className="block mt-2 text-sm text-gray-500">Service disponible à <Link href="/zones" className="hover:text-gray-800">Namur</Link>, <Link href="/zones" className="hover:text-gray-800">Limbourg</Link> et partout en Wallonie.</span>
          </p>
        </div>
      </section>

<section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              Votre voiture propre à Limbourg ?
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              Intervention sous 48h • Déplacement gratuit • Paiement après validation
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à Limbourg"
                className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                Réserver par WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-full hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
        "@context": "https://schema.org",
        "@type": "AutoWash",
        "name": "Shine&Go - Lavage voiture Limbourg",
        "description": "Service de nettoyage et detailing automobile à domicile à Limbourg.",
        "url": "https://shineandgo.be/lavage-voiture-limbourg",
        "telephone": "+32472303701",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Limbourg",
            "addressRegion": "Limbourg",
            "addressCountry": "BE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.6386",
            "longitude": "5.7942"
        },
        "provider": {
            "@type": "LocalBusiness",
            "name": "Shine&Go",
            "image": "/transformations/optimized/webp/apres01.webp"
        },
        "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
}
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Besoin d'eau ou d'électricité ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Idéalement oui, une prise et un robinet à moins de 25m. Si ce n'est pas possible, prévenez-nous, nous avons des solutions autonomes."
                }
            },
            {
                "@type": "Question",
                "name": "Combien de temps ça dure ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Comptez environ 3h pour une prestation complète. Nous prenons le temps nécessaire pour un résultat parfait."
                }
            },
            {
                "@type": "Question",
                "name": "Comment payer ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le paiement se fait une fois la prestation terminée et validée par vos soins. Nous acceptons les espèces, Payconiq ou virement instantané."
                }
            },
            {
                "@type": "Question",
                "name": "Et s'il pleut ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pour l'extérieur, nous devrons reporter si vous n'avez pas d'abri (carport/garage). Pour l'intérieur, nous pouvons travailler sous une pluie fine."
                }
            }
        ]

            }

        ]) }}
      />
    </main>
    </>
  )
}
