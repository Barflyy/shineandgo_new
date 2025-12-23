'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Sparkles, ShieldCheck, Menu, X, Droplets, Plug, Key } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 font-sans">
      
      {/* BACKGROUND ACCENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/60 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gray-50/60 blur-[100px]" />
      </div>

      {/* NAVIGATION - Mobile First Optimization */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-4 sm:py-6'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Shine<span className="text-blue-600">&</span>Go
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#concept" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Concept</a>
            <a href="#tarifs" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Tarifs</a>
            <a href="#zones" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Zones (Herve/Verviers)</a>
            <a
              href="tel:+32472303701"
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
            >
              0472 30 37 01
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-800 z-50 bg-white/50 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-24 px-6 animate-in slide-in-from-top-10">
            <div className="flex flex-col gap-6 text-lg font-medium">
              <a href="#concept" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">Comment ça marche ?</a>
              <a href="#tarifs" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">Nos Tarifs</a>
              <a href="#zones" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">Zones d'intervention</a>
              <a href="tel:+32472303701" className="px-6 py-4 bg-blue-600 text-white text-center rounded-xl font-bold shadow-lg shadow-blue-600/20">
                Appeler le 0472 30 37 01
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO - Optimisé pour "Lavage auto domicile" + Prise en charge */}
      <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* SEO Location Tag */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full animate-fade-in-up">
              <MapPin className="w-3 h-3 text-blue-600" />
              <span className="text-xs sm:text-sm font-bold text-blue-800 uppercase tracking-wide">
                Herve · Verviers · Liège · Battice
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up delay-100">
              Lavage auto à domicile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Prise en charge totale
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
              Ne vous déplacez plus. Confiez-nous vos clés, nous nous occupons de tout directement chez vous. <span className="font-medium text-gray-900">Service de detailing premium.</span>
            </p>

            {/* Mobile Conversion Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300 px-4 sm:px-0">
              <a
                href="tel:+32472303701"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
              <a
                href="https://wa.me/32472303701"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                Réserver par WhatsApp
              </a>
            </div>
            
            <p className="mt-6 text-sm text-gray-500 animate-fade-in-up delay-500">
              Déplacement gratuit rayon 25km • Réponse immédiate
            </p>
          </div>
        </div>
      </section>

      {/* CONCEPT - "Comment ça marche" (Pour gérer la contrainte eau/élec) */}
      <section id="concept" className="py-16 sm:py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">La prise en charge Shine&Go</h2>
            <p className="text-gray-600">Service clé en main, vous ne levez pas le petit doigt.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="absolute -top-4 left-8 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" /> On vient à vous
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                À domicile ou au travail. Plus besoin de faire la file au car-wash ou de perdre votre pause midi.
              </p>
            </div>

            {/* Step 2 - Constraint Handling */}
            <div className="relative p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <div className="absolute -top-4 left-8 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-600/20">2</div>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 flex items-center gap-2">
                <Plug className="w-5 h-5 text-blue-600" /> Installation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous apportons le matériel professionnel (produits Koch-Chemie®). <span className="font-semibold text-blue-800">Nous avons juste besoin d'un accès à l'eau et une prise électrique.</span>
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="absolute -top-4 left-8 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-blue-600" /> Résultat Showroom
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Remettez-nous les clés, on s'occupe du reste. Retrouvez votre véhicule transformé en 1h30 environ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS - Focus sur "Intérieur" (Data GSC) */}
      <section id="tarifs" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nos Formules</h2>
            <p className="text-gray-600">Produits professionnels Koch-Chemie® • Zéro micro-rayures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* INTÉRIEUR - POPULAIRE (GSC Data) */}
            <div className="relative bg-white p-8 rounded-3xl shadow-lg shadow-blue-900/5 border-2 border-blue-100 md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Le plus demandé
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Intérieur Profond</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold tracking-tight text-blue-600">65€</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Idéal pour remettre à neuf l'habitacle (tâches, poils, poussières).</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Aspiration complète (sièges, tapis, coffre)',
                  'Dépoussiérage minutieux plastiques',
                  'Nettoyage vitres intérieures',
                  'Pressing des tapis',
                  'Désodorisation habitacle'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701?text=Je veux le nettoyage intérieur à 65€" className="block w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                Réserver l'Intérieur
              </a>
            </div>

            {/* EXTÉRIEUR */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Extérieur Detailing</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold tracking-tight text-gray-900">85€</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Lavage à la main "2 seaux" pour éviter les rayures des stations automatiques.</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Prélavage mousse active',
                  'Lavage main pH neutre',
                  'Nettoyage Jantes & Pneus',
                  'Séchage microfibre douce',
                  'Cire de protection (3 mois)'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-3.5 rounded-xl bg-gray-50 text-gray-900 font-bold text-center hover:bg-gray-100 transition-colors">
                Réserver l'Extérieur
              </a>
            </div>

            {/* COMPLET */}
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 text-white">
              <h3 className="text-xl font-bold mb-2">Le Grand Complet</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">120€</span>
              </div>
              <p className="text-green-400 text-sm font-medium mb-6">Économie de 30€</p>
              <p className="text-sm text-gray-400 mb-6">La totale. Votre voiture ressort comme neuve.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white font-medium text-sm">
                  <Sparkles className="w-4 h-4 text-yellow-400" /> Formule Intérieur incluse
                </li>
                <li className="flex items-center gap-3 text-white font-medium text-sm">
                  <Sparkles className="w-4 h-4 text-yellow-400" /> Formule Extérieur incluse
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Check className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  Traitement plastiques UV
                </li>
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-3.5 rounded-xl bg-white text-gray-900 font-bold text-center hover:bg-gray-100 transition-colors">
                Réserver le Complet
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ZONES - SEO Local Boost (Basé sur CSV: Herve, Verviers, Liège) */}
      <section id="zones" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Zone d'intervention gratuite</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous nous déplaçons gratuitement dans un rayon de 25km autour de Herve.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa', 'Fléron', 'Visé', 'Thimister'].map((city) => (
                  <span key={city} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
              <a href="tel:+32472303701" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                Vérifier ma commune <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex-1 w-full max-w-sm bg-gray-50 rounded-2xl p-6 border border-gray-100">
               <div className="space-y-4">
                 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                   <span className="text-gray-600">Herve</span>
                   <span className="text-green-600 font-bold text-sm">Déplacement offert</span>
                 </div>
                 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                   <span className="text-gray-600">Verviers</span>
                   <span className="text-green-600 font-bold text-sm">Déplacement offert</span>
                 </div>
                 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                   <span className="text-gray-600">Liège Centre</span>
                   <span className="text-green-600 font-bold text-sm">Déplacement offert</span>
                 </div>
                 <div className="pt-2 text-xs text-gray-500 text-center">
                   Au-delà de 25km : +0,50€/km
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-2">
                Shine<span className="text-blue-500">&</span>Go
              </div>
              <p className="text-sm max-w-xs mx-auto sm:mx-0">
                Service de lavage et nettoyage voiture à domicile sur Liège, Herve et Verviers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
              <a href="#concept" className="hover:text-white transition-colors">Concept</a>
              <a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a>
              <a href="tel:+32472303701" className="hover:text-white transition-colors">0472 30 37 01</a>
            </div>
          </div>
          <div className="text-xs border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Shine&Go Belgique.</p>
            <p>Service nécessitant un accès eau & électricité.</p>
          </div>
        </div>
      </footer>

      {/* Schema.org Optimisé pour les résultats locaux */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoWash",
            "name": "Shine&Go - Lavage Auto à Domicile",
            "description": "Service de nettoyage voiture à domicile (intérieur et extérieur). Intervention sur Herve, Verviers, Liège. Prise en charge complète.",
            "url": "https://shineandgo.be",
            "telephone": "+32472303701",
            "priceRange": "65€ - 120€",
            "areaServed": ["Herve", "Verviers", "Liège", "Battice", "Soumagne"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "addressCountry": "BE"
            },
            "image": "/transformations/optimized/webp/apres01.webp"
          })
        }}
      />

      {/* STICKY CTA MOBILE - Essentiel car 65% du trafic est mobile */}
      <div className={`fixed bottom-4 left-4 right-4 z-40 md:hidden transition-all duration-500 ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <a
          href="tel:+32472303701"
          className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white font-bold rounded-xl shadow-2xl"
        >
          <Phone className="w-5 h-5" />
          Réserver (0472 30 37 01)
        </a>
      </div>
    </main>
  )
}