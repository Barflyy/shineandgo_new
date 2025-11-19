'use client'

import { ArrowRight, Check, Star, Phone, Mail, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function NettoyageInterieurPage() {
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navVisible, setNavVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false)
      } else {
        setNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <Head>
        <title>Nettoyage Intérieur Voiture | Habitacle Impeccable dès 65€ - Shine&Go</title>
        <meta name="description" content="Nettoyage intérieur voiture à domicile. Aspiration complète, nettoyage surfaces, vitres, protection UV. Service mobile en 90 min. Produits Koch-Chemie. ☎ 0472 30 37 01" />
      </Head>
      
      <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      } ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Shine<span className="text-blue-600">&</span>Go
            </div>
          </Link>
          <a
            href="tel:+32472303701"
            className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg' 
                : 'bg-white text-slate-900 shadow-sm hover:shadow-md'
            }`}
          >
            <span className="hidden sm:inline mr-2">Appeler le</span>
            0472 30 37 01
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50/0 to-transparent -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-medium text-slate-600 tracking-wide uppercase">4.9/5 sur Google</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Nettoyage intérieur voiture,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 pb-2">
                habitacle impeccable.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
              Service professionnel à domicile. Aspiration complète, nettoyage surfaces, protection UV.
              <span className="block mt-2 text-slate-500 font-medium text-base">Zone : Herve, Battice, Verviers & Liège (25km)</span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un nettoyage intérieur - 65€"
                className="group px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30"
              >
                Réserver intérieur 65€
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                0472 30 37 01
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-500 border-t border-slate-200 pt-8">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span>Intervention en 48h</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Déplacement gratuit</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Paiement après validation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-slate-900">Zones d'intervention</h2>
                <p className="text-slate-500">Service de nettoyage mobile actif dans toute la région.</p>
              </div>
              <a href="tel:+32472303701" className="text-blue-600 font-medium hover:underline text-sm flex items-center gap-1">
                Vérifier ma commune <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { city: 'Herve', href: '/nettoyage-voiture-herve' },
                { city: 'Battice', href: '/nettoyage-voiture-battice' },
                { city: 'Verviers', href: '/nettoyage-voiture-verviers' },
                { city: 'Liège', href: '/nettoyage-voiture-liege' },
                { city: 'Soumagne', href: '/nettoyage-voiture-soumagne' },
                { city: 'Spa', href: '/nettoyage-voiture-spa' }
              ].map((zone) => (
                <Link 
                  key={zone.city} 
                  href={zone.href}
                  className="group block"
                >
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-sm group-hover:bg-blue-50/50">
                    <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">{zone.city}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Tarifs nettoyage à domicile
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Prix tout compris. Déplacement offert <span className="text-blue-600 font-medium">jusqu'à 25km</span> autour de Herve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            
            {/* Intérieur */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Nettoyage Intérieur</h3>
                <p className="text-slate-500 text-sm mt-1">Le plus demandé</p>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">65€</span>
                <span className="text-slate-400 font-normal">/véhicule</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Aspiration complète (sièges, tapis, coffre)',
                  'Dépoussiérage tableau de bord & aérateurs',
                  'Nettoyage vitres intérieures',
                  'Entrées de portes',
                  'Suppression odeurs & taches légères'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur" className="block w-full py-3 rounded-xl border-2 border-slate-100 text-slate-900 font-semibold hover:border-slate-900 hover:bg-slate-50 transition-all text-center">
                Réserver Intérieur
              </a>
            </div>

            {/* Extérieur */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Lavage Extérieur</h3>
                <p className="text-slate-500 text-sm mt-1">Brillance showroom</p>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">85€</span>
                <span className="text-slate-400 font-normal">/véhicule</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Prélavage mousse active (Snow Foam)',
                  'Lavage manuel anti-rayures',
                  'Décontamination carrosserie',
                  'Nettoyage jantes approfondi',
                  'Application cire brillante'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur" className="block w-full py-3 rounded-xl border-2 border-slate-100 text-slate-900 font-semibold hover:border-slate-900 hover:bg-slate-50 transition-all text-center">
                Réserver Extérieur
              </a>
            </div>

            {/* Complet */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative transform lg:-translate-y-4 z-10">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-600 to-blue-700 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                BEST SELLER
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Intérieur + Extérieur</h3>
                <p className="text-slate-400 text-sm mt-1">La rénovation complète</p>
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-white">120€</span>
                <span className="text-slate-400 font-normal">/véhicule</span>
              </div>
              <p className="text-green-400 text-sm font-medium mb-8 bg-green-400/10 inline-block px-3 py-1 rounded-full">
                Formule économique (-30€)
              </p>

              <div className="space-y-6 mb-8 border-t border-slate-800 pt-6">
                <div>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">Lavage Extérieur</p>
                  <ul className="space-y-3">
                    {['Lavage main (Technique 2 seaux)', 'Dégraissage jantes & pneus', 'Cire de protection hydrophobe', 'Séchage sans trace'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">Nettoyage Intérieur</p>
                  <ul className="space-y-3">
                    {['Aspiration profonde habitacle', 'Pressing tapis', 'Soin des cuirs & plastiques', 'Désinfection vapeur'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href="https://wa.me/32472303701?text=Je souhaite la formule complète" className="block w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all text-center shadow-lg shadow-blue-900/50">
                Réserver le Complet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Prêt pour un intérieur impeccable ?
            </h2>
            
            <p className="text-lg text-slate-600 mb-12">
              Réservez en 2 minutes. Intervention sous 48h. Paiement après validation du résultat.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un nettoyage intérieur - 65€"
                className="group px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30"
              >
                Réserver par WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                0472 30 37 01
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 sm:py-16 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
                Shine<span className="text-blue-600">&</span>Go
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Service de lavage auto et detailing professionnel à domicile. Nous nous déplaçons partout en province de Liège.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-700">4.9/5 sur Google</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Nos Prestations</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/nettoyage-interieur-voiture" className="text-slate-500 hover:text-blue-600 transition-colors">Nettoyage Intérieur</Link></li>
                <li><Link href="/nettoyage-exterieur-voiture" className="text-slate-500 hover:text-blue-600 transition-colors">Lavage Extérieur</Link></li>
                <li><Link href="/nettoyage-complet-voiture" className="text-slate-500 hover:text-blue-600 transition-colors">Formule Complète</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Zones Desservies</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/nettoyage-voiture-herve" className="text-slate-500 hover:text-blue-600 transition-colors">Nettoyage voiture Herve</Link></li>
                <li><Link href="/nettoyage-voiture-verviers" className="text-slate-500 hover:text-blue-600 transition-colors">Nettoyage voiture Verviers</Link></li>
                <li><Link href="/nettoyage-voiture-liege" className="text-slate-500 hover:text-blue-600 transition-colors">Lavage auto Liège</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-slate-900 mb-4">Nous Contacter</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-slate-500">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Service Mobile<br/>Herve, Province de Liège</span>
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href="tel:+32472303701" className="hover:text-slate-900 transition-colors">0472 30 37 01</a>
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href="mailto:contact@shineandgo.be" className="hover:text-slate-900 transition-colors">contact@shineandgo.be</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2025 Shine&Go (Shine Auto). Lavage auto professionnel à domicile.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="/mentions-legales" className="hover:text-slate-600 transition-colors">Mentions Légales</a>
              <a href="/confidentialite" className="hover:text-slate-600 transition-colors">Confidentialité</a>
              <a href="/cgv" className="hover:text-slate-600 transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>

      {/* CTA Flottant */}
      {scrolled && (
        <div className="fixed bottom-6 right-6 z-40 animate-in slide-in-from-bottom-4 duration-500">
          <a
            href="https://wa.me/32472303701"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform shadow-green-900/20"
            aria-label="Réserver sur WhatsApp"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      )}
    </main>
    </>
  )
}
