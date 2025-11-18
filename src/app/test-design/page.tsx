'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Plus, Clock, ShieldCheck, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden">

      {/* NAVIGATION - Glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-lg shadow-slate-200/20' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span>Shine<span className="text-blue-600">Go</span></span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="tel:+32472303701" 
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              0472 30 37 01
            </a>
            <a 
              href="#tarifs"
              className="group relative px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Réserver
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Impact Visuel */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
        {/* Background Abstract Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply animate-pulse" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply" />

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
            <div className="flex -space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-slate-200 border border-white" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-slate-700">4.9/5 (80+ avis)</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            L'excellence du <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Detailing Mobile.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            Nous transformons votre véhicule directement chez vous. 
            <span className="hidden sm:inline"> Plus besoin de vous déplacer, profitez de votre temps libre pendant que nous travaillons.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/32472303701"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Réserver sur WhatsApp
            </a>
            <a
              href="#tarifs"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold text-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              Voir les forfaits
            </a>
          </div>
        </div>
      </section>

      {/* AVANT / APRÈS - Carte Flottante */}
      <section className="py-12 px-6 -mt-10 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-2 sm:p-4 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-4">
              
              {/* Image 1 */}
              <div className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden cursor-crosshair">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full bg-slate-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center font-black text-slate-300/50 text-4xl">AVANT</div>
                    {/* Image Sale ici */}
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">Sale</div>
                  </div>
                  <div className="w-1/2 h-full bg-blue-50 relative border-l-2 border-white">
                    <div className="absolute inset-0 flex items-center justify-center font-black text-blue-200/50 text-4xl">APRÈS</div>
                    {/* Image Propre ici */}
                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Propre</div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Texte Explicatif */}
              <div className="flex flex-col justify-center p-6 sm:p-12 bg-slate-50 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Le résultat "Shine"</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Nos produits Koch-Chemie® et notre technique de lavage à la main garantissent une brillance sans micro-rayures. Regardez la différence.
                </p>
                <ul className="space-y-3">
                  {['Suppression des taches incrustées', 'Brillance miroir carrosserie', 'Plastiques comme neufs'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <Check className="w-5 h-5 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ZONES - Clean Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zone d'intervention gratuite</h2>
            <p className="text-slate-500 text-lg">Nous venons à vous, sans frais de déplacement dans un rayon de 25km.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa', 'Fléron', 'Chaudfontaine', 'Visé'].map((city) => (
              <div key={city} className="group cursor-default px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md transition-all duration-300">
                <span className="font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS - RESPONSIVE GRID FIX */}
      <section id="tarifs" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Formules Simples</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">
              Pas de devis compliqué. Pas de frais cachés. Choisissez votre pack.
            </p>
          </div>

          {/* GRID SYSTEM: 1 col mobile, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            
            {/* CARD 1: INTÉRIEUR */}
            <article className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🛋️</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Intérieur</h3>
              <p className="text-slate-500 text-sm mb-6">Le confort d'une voiture neuve.</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight">65€</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Aspiration en profondeur', 
                  'Shampoing sièges & tapis', 
                  'Dépoussiérage complet',
                  'Vitres intérieures',
                  'Parfum habitacle'
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-4 rounded-xl border-2 border-slate-100 text-slate-900 font-bold text-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                Réserver Intérieur
              </a>
            </article>

            {/* CARD 2: COMPLET (Highlighted) */}
            <article className="relative bg-slate-900 rounded-[2rem] p-8 border border-slate-800 shadow-2xl md:-mt-6 md:mb-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Populaire
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Complet</h3>
              <p className="text-slate-400 text-sm mb-6">L'expérience showroom ultime.</p>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-6xl font-bold tracking-tight text-white">120€</span>
              </div>
              <p className="text-green-400 text-sm font-bold mb-8">Économisez 30€ sur ce pack</p>

              <ul className="space-y-4 mb-8">
                {[
                  'Tout le pack Intérieur',
                  'Lavage carrosserie main',
                  'Cire protection 3 mois',
                  'Décontamination ferreuse',
                  'Dressing pneus & plastiques',
                  'Séchage microfibre'
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-500 shadow-lg shadow-blue-900/50 hover:scale-[1.02] transition-all duration-300">
                Réserver le Complet
              </a>
            </article>

            {/* CARD 3: EXTÉRIEUR */}
            <article className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Extérieur</h3>
              <p className="text-slate-500 text-sm mb-6">Lavage main anti-rayures.</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight">85€</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Prélavage mousse active',
                  'Technique des 2 seaux',
                  'Nettoyage jantes approfondi',
                  'Cire liquide hydrophobe',
                  'Séchage sans traces'
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-4 rounded-xl border-2 border-slate-100 text-slate-900 font-bold text-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                Réserver Extérieur
              </a>
            </article>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Modern Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Comment ça marche ?</h2>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Ligne de connexion (Desktop uniquement) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 z-0" />

            {[
              {
                icon: Phone,
                title: "1. Réservation",
                desc: "WhatsApp ou appel. On fixe le créneau qui vous arrange."
              },
              {
                icon: Clock,
                title: "2. Intervention",
                desc: "On arrive équipé. Il nous faut juste les clés, une prise et un robinet."
              },
              {
                icon: ShieldCheck,
                title: "3. Validation",
                desc: "On fait le tour ensemble. Paiement uniquement si vous êtes satisfait."
              }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-3xl border border-slate-100 shadow-xl flex items-center justify-center mb-6 transition-transform hover:scale-110 duration-300">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Clean Accordion */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Questions fréquentes</h2>
          <div className="grid gap-4">
            {[
              { q: "Faut-il de l'eau et de l'électricité ?", a: "Idéalement oui. Une prise standard et un robinet extérieur. Si vous n'en avez pas (appartement), prévenez-nous." },
              { q: "Combien de temps dure le nettoyage ?", a: "Pour un complet, comptez entre 1h30 et 2h00. Nous prenons le temps nécessaire pour un résultat parfait." },
              { q: "Quels moyens de paiement ?", a: "Payconiq (QR Code), virement instantané ou espèces à la fin de la prestation." },
              { q: "Et s'il pleut ?", a: "Nous disposons d'une tonnelle pour les pluies fines. En cas d'orage violent, nous reportons gratuitement." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-slate-200/60 open:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 font-bold text-slate-900 cursor-pointer list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Pro & SEO */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="space-y-6">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                Shine<span className="text-blue-500">Go</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Le partenaire de confiance pour l'entretien esthétique de votre véhicule en Wallonie. Qualité showroom, service à domicile.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Nettoyage Intérieur</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Lavage Extérieur</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Formule Complète</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Traitement Céramique</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Zones</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Herve</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Verviers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Liège</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Soumagne</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <a href="tel:+32472303701" className="hover:text-white transition-colors">0472 30 37 01</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <span>Province de Liège</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2025 Shine&Go. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className={`fixed bottom-6 left-4 right-4 md:hidden z-50 transition-transform duration-500 ${isScrolled ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <a 
          href="https://wa.me/32472303701"
          className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl shadow-slate-900/50 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          Réserver maintenant
        </a>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoWash",
            "name": "Shine&Go",
            "priceRange": "€€",
            "telephone": "+32472303701",
            "areaServed": "Liège"
          })
        }}
      />

    </main>
  )
}