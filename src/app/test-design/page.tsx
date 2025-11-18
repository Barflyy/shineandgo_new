'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Clock, Sparkles, ShieldCheck, ChevronDown, Car } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-blue-600 selection:text-white font-sans">
      
      {/* NAVIGATION - Floating Pill Design */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <nav className={`
          w-full max-w-5xl transition-all duration-300 ease-out
          ${scrolled ? 'bg-white/90 shadow-xl backdrop-blur-lg py-3' : 'bg-transparent py-5'}
          rounded-2xl px-6 flex items-center justify-between border border-transparent
          ${scrolled && 'border-gray-200/50'}
        `}>
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
               <Car className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              Shine<span className="text-blue-600">Go</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#tarifs" className="hover:text-blue-500 transition-colors">Tarifs</a>
            <a href="#zones" className="hover:text-blue-500 transition-colors">Zones</a>
            <a href="#avis" className="hover:text-blue-500 transition-colors">Avis</a>
          </div>

          <a
            href="tel:+32472303701"
            className={`
              hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all
              ${scrolled 
                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                : 'bg-white text-slate-900 hover:bg-blue-50'}
            `}
          >
            <Phone className="w-4 h-4" />
            <span>0472 30 37 01</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </nav>
      </div>

      {/* HERO SECTION - Dark Premium Look */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-200">4.9/5 • +500 voitures nettoyées</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Le <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Detailing</span> Mobile
              <br />
              <span className="font-light text-slate-300">Directement chez vous.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Service de nettoyage haut de gamme en Wallonie. Nous transformons votre véhicule pendant que vous restez confortablement à la maison.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://wa.me/32472303701"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group"
              >
                Réserver maintenant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#tarifs"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white rounded-xl font-semibold transition-all flex items-center justify-center"
              >
                Voir les tarifs
              </a>
            </div>

            {/* Features Pill */}
            <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-400 border-t border-white/10 pt-8">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" /> 90 min d'intervention
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" /> Produits Koch-Chemie®
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" /> Déplacement Gratuit 25km
              </span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ZONES - Bento Grid Style */}
      <section id="zones" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Zones d'intervention</h2>
              <p className="text-slate-500">Nous nous déplaçons dans toute la province de Liège.</p>
            </div>
            <a href="tel:+32472303701" className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Vérifier mon adresse <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { city: 'Herve', main: true },
              { city: 'Verviers', main: true },
              { city: 'Liège', main: true },
              { city: 'Battice', main: false },
              { city: 'Soumagne', main: false },
              { city: 'Spa', main: false },
            ].map((zone, idx) => (
              <a
                key={zone.city}
                href={`/nettoyage-voiture-${zone.city.toLowerCase()}`}
                className={`
                  group relative overflow-hidden rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-lg border border-slate-100
                  ${zone.main ? 'col-span-2 bg-slate-50' : 'col-span-1 bg-white'}
                `}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-xl group-hover:scale-110 transition-transform duration-300">
                    📍
                  </div>
                  <h3 className="font-bold text-slate-900">{zone.city}</h3>
                  <p className="text-xs text-slate-500 mt-1">Service à domicile</p>
                </div>
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - Modern Cards */}
      <section id="tarifs" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Formules</h2>
            <p className="text-slate-600 text-lg">Transparence totale. Pas de frais cachés. Paiement après résultat.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            
            {/* Standard Card: Interior */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Intérieur</h3>
                <p className="text-sm text-slate-500 mt-1">Remise à neuf de l'habitacle</p>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-slate-900">65€</span>
                <span className="text-slate-500">/ véhicule</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Aspiration en profondeur', 'Dépoussiérage plastiques', 'Vitres intérieures', 'Parfum habitacle'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701?text=Rdv Intérieur" className="block w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-semibold text-center hover:bg-slate-50 transition-colors">
                Choisir Intérieur
              </a>
            </div>

            {/* Premium Card: Complete */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-600 to-transparent w-24 h-24 opacity-50" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAIRE
              </div>
              
              <div className="mb-6 relative">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Complet
                </h3>
                <p className="text-sm text-slate-400 mt-1">L'expérience showroom ultime</p>
              </div>
              
              <div className="flex items-baseline gap-1 mb-8 relative">
                <span className="text-5xl font-bold text-white">120€</span>
                <span className="text-slate-400">/ complet</span>
              </div>
              <p className="text-green-400 text-sm font-medium mb-6 bg-green-400/10 inline-block px-3 py-1 rounded-lg">
                Économisez 30€ sur ce pack
              </p>
              
              <ul className="space-y-4 mb-8 relative">
                {['Tout le pack Intérieur', 'Tout le pack Extérieur', 'Cire de protection 3 mois', 'Traitement des cuirs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="https://wa.me/32472303701?text=Rdv Complet" className="block w-full py-4 rounded-xl bg-blue-600 text-white font-semibold text-center hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50">
                Réserver le Complet
              </a>
            </div>

            {/* Standard Card: Exterior */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Extérieur</h3>
                <p className="text-sm text-slate-500 mt-1">Lavage main & Brillance</p>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-slate-900">85€</span>
                <span className="text-slate-500">/ véhicule</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Lavage main 2 seaux', 'Décontamination carrosserie', 'Dressing pneus & jantes', 'Séchage sans traces'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701?text=Rdv Extérieur" className="block w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-semibold text-center hover:bg-slate-50 transition-colors">
                Choisir Extérieur
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Masonry vibe */}
      <section id="avis" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Ils nous font confiance</h2>
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="text-2xl font-bold">4.9</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <a href="#" className="text-blue-600 underline underline-offset-4 text-sm ml-2">Voir les 87 avis Google</a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sophie L.', city: 'Herve', text: "Incroyable ! Je pensais que mes sièges étaient fichus. Nathan a fait des miracles." },
              { name: 'Marc D.', city: 'Liège', text: "Super pratique le service à domicile pendant que je suis en télétravail. Résultat pro." },
              { name: 'Thomas W.', city: 'Verviers', text: "Rien à voir avec un car wash automatique. Ma voiture brille comme jamais." },
            ].map((avis, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-4">"{avis.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    {avis.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-900">{avis.name}</div>
                    <div className="text-xs text-slate-500">{avis.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Simple & Clean */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Faut-il de l'eau ou de l'électricité ?", a: "Idéalement oui, une prise et un robinet. Si ce n'est pas possible, prévenez-nous, nous avons des solutions autonomes." },
              { q: "Combien de temps ça dure ?", a: "Comptez environ 1h30 pour un complet. Nous prenons le temps nécessaire pour la perfection." },
              { q: "Acceptez-vous la carte ?", a: "Oui, nous acceptons Payconiq, les virements instantanés ou le liquide." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-900 hover:bg-slate-50 transition-colors marker:content-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Minimal */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="text-2xl font-bold text-white mb-4">
                Shine<span className="text-blue-500">Go</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Le spécialiste du nettoyage automobile à domicile en province de Liège. Qualité artisanale, produits professionnels.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Nettoyage Intérieur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lavage Extérieur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Formule Complète</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 0472 30 37 01
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Herve, Belgique
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2025 Shine&Go. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA for Mobile */}
      <div className={`
        fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden transition-transform duration-300 z-40
        ${scrolled ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <a 
          href="tel:+32472303701"
          className="flex items-center justify-center w-full py-3.5 bg-blue-600 text-white rounded-xl font-semibold shadow-lg"
        >
          Appeler maintenant
        </a>
      </div>

      {/* Schema.org Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoWash",
            "name": "Shine&Go",
            "image": "https://shineandgo.be/og.jpg",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "addressCountry": "BE"
            },
            "telephone": "+32472303701"
          })
        }}
      />
    </main>
  )
}
