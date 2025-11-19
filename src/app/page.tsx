'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Clock, Sparkles, ShieldCheck, Calculator, Mail, XCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 20) setScrolled(true)
      else setScrolled(false)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) setNavVisible(false)
      else setNavVisible(true)
      
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('tarifs')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      } ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Shine<span className="text-blue-600">&</span>Go
            </div>
          </div>
          
          <div className="flex items-center gap-4">
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
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50/0 to-transparent -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge Trust */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-medium text-slate-600 tracking-wide uppercase">4.9/5 sur Google</span>
            </div>

            {/* Titre Principal - Mots clés forts : Lavage auto, domicile */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Lavage auto d'exception,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 pb-2">
                directement à domicile.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
              L'alternative premium aux stations de lavage. Nous nous déplaçons pour un soin complet (intérieur & extérieur).
              <span className="block mt-2 text-slate-500 font-medium text-base">Zone : Herve, Battice, Verviers & Liège (25km)</span>
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16">
              <a
                href="#tarifs"
                onClick={handleScrollToPricing}
                className="group px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30"
              >
                Voir les tarifs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="https://wa.me/32472303701"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                WhatsApp direct
              </a>
            </div>

            {/* Features rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-500 border-t border-slate-200 pt-8">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Intervention en 48h</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Finition main (Detailing)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Déplacement gratuit</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>Prix fixes transparents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION - LINKED */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
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
              { city: 'Battice', href: '/lavage-voiture-battice' },
              { city: 'Verviers', href: '/nettoyage-voiture-verviers' },
              { city: 'Liège', href: '/lavage-voiture-liege' },
              { city: 'Soumagne', href: '/lavage-voiture-soumagne' },
              { city: 'Visé', href: '/lavage-voiture-vise' }
            ].map((zone) => (
              <a 
                key={zone.city} 
                href={zone.href}
                className="group block"
                aria-label={`Voir le service à ${zone.city}`}
              >
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-sm group-hover:bg-blue-50/50">
                  <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">{zone.city}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - Cible "Nettoyage intérieur voiture" & "Prix" */}
      <section id="tarifs" className="py-20 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Tarifs nettoyage à domicile
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Prix tout compris. Déplacement offert <span className="text-blue-600 font-medium">jusqu'à 25km</span> autour de Herve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            
            {/* Carte Intérieur - Enrichie pour SEO */}
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

            {/* Carte COMPLET */}
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

            {/* Carte Extérieur */}
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

          </div>
        </div>
      </section>

      {/* ARGUMENTS - Utilisation stratégique du mot-clé "Car-wash" pour le SEO */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                 Mieux qu'un <span className="text-blue-600">car-wash</span> classique.
               </h2>
               <div className="space-y-8">
                 <div className="flex gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-lg font-semibold text-slate-900 mb-2">Zéro micro-rayures</h3>
                     <p className="text-slate-600 leading-relaxed">
                       Contrairement aux <strong>car-wash automatiques</strong> qui abîment le vernis, notre lavage 100% manuel avec gants microfibres préserve la brillance de votre carrosserie.
                     </p>
                   </div>
                 </div>
                 
                 <div className="flex gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                     <Clock className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-lg font-semibold text-slate-900 mb-2">Gain de temps absolu</h3>
                     <p className="text-slate-600 leading-relaxed">
                       Fini la file d'attente en station de lavage. Que vous soyez chez vous ou au bureau, nous nettoyons votre véhicule pendant que vous vaquez à vos occupations.
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                     <Sparkles className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-lg font-semibold text-slate-900 mb-2">Produits Premium</h3>
                     <p className="text-slate-600 leading-relaxed">
                       Nous utilisons la gamme professionnelle Koch-Chemie. Le résultat est incomparable avec les produits grand public : brillance profonde et protection durable.
                     </p>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Visuel abstrait épuré */}
            <div className="md:w-1/2 w-full h-full relative min-h-[400px] bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100"></div>
                <div className="w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 absolute top-10 left-10 animate-pulse"></div>
                <div className="relative z-10 text-center p-8">
                    <div className="inline-block p-4 bg-white rounded-2xl shadow-xl mb-6">
                        <Sparkles className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Résultat Garanti</h3>
                    <p className="text-slate-500">Paiement uniquement après validation du résultat.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions fréquentes</h2>
            <p className="text-slate-500">Tout savoir sur notre service de lavage à domicile.</p>
          </div>
          
          <div className="space-y-4">
             {[
               { q: "Quel est le prix d'un nettoyage voiture à domicile ?", a: "Nos tarifs débutent à 65€ pour l'intérieur et 85€ pour l'extérieur. Le pack complet est à 120€. Le déplacement est inclus dans le prix pour la région de Herve (25km)." },
               { q: "Intervenez-vous à Liège, Verviers ou Battice ?", a: "Oui, nous couvrons toute la province de Liège, notamment Herve, Battice, Verviers, Soumagne, Fléron et Visé. Au-delà de 25km, un petit supplément kilométrique s'applique." },
               { q: "Que comprend le nettoyage intérieur ?", a: "L'aspiration complète (y compris coffre), le dépoussiérage des plastiques et aérateurs, le nettoyage des vitres, et l'application d'un soin pour les plastiques/cuirs." },
               { q: "Avez-vous besoin d'eau ou d'électricité ?", a: "L'accès à une prise et un robinet est idéal, mais nous disposons de solutions pour travailler en autonomie si nécessaire. Précisez-le simplement lors de la réservation." }
             ].map((item, i) => (
               <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                 <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                   <span className="text-blue-600 font-bold">?</span> {item.q}
                 </h4>
                 <p className="text-slate-600 text-sm pl-5">{item.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Optimisé avec les URLs qui rankent déjà */}
      <footer className="py-12 sm:py-16 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
                Shine<span className="text-blue-600">&</span>Go
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Service de lavage auto et detailing professionnel à domicile. Nous nous déplaçons partout en province de Liège pour redonner vie à votre véhicule.
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

            {/* Services */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Nos Prestations</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/nettoyage-interieur-voiture" className="text-slate-500 hover:text-blue-600 transition-colors">Nettoyage Intérieur</a></li>
                <li><a href="/lavage-exterieur-voiture" className="text-slate-500 hover:text-blue-600 transition-colors">Lavage Extérieur</a></li>
                <li><a href="/nettoyage-complet-voiture" className="text-slate-500 hover:text-blue-600 transition-colors">Formule Complète</a></li>
                <li><a href="/detailing" className="text-slate-500 hover:text-blue-600 transition-colors">Polissage & Simonisage</a></li>
                <li><a href="/tarifs" className="text-slate-500 hover:text-blue-600 transition-colors">Tous les tarifs</a></li>
              </ul>
            </div>

            {/* Zones - Remis les URLs exactes de GSC Pages.csv pour ne pas perdre le ranking */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Zones Desservies</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/nettoyage-voiture-herve" className="text-slate-500 hover:text-blue-600 transition-colors">Nettoyage voiture Herve</a></li>
                <li><a href="/nettoyage-voiture-verviers" className="text-slate-500 hover:text-blue-600 transition-colors">Nettoyage voiture Verviers</a></li>
                <li><a href="/lavage-voiture-liege" className="text-slate-500 hover:text-blue-600 transition-colors">Lavage auto Liège</a></li>
                <li><a href="/lavage-voiture-battice" className="text-slate-500 hover:text-blue-600 transition-colors">Lavage voiture Battice</a></li>
                <li><a href="/zones" className="text-slate-500 hover:text-blue-600 transition-colors">Voir toute la zone</a></li>
              </ul>
            </div>

            {/* Contact */}
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

          {/* Bottom Bar */}
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
      
      {/* Schema LocalBusiness + Service - Description enrichie avec les mots-clés GSC */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoCleaning",
            "name": "Shine&Go - Lavage Auto à Domicile",
            "description": "Service mobile de nettoyage voiture intérieur et extérieur (type car-wash à domicile) à Herve, Verviers et Liège. Detailing auto premium.",
            "priceRange": "65€ - 120€",
            "telephone": "+32472303701",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Wallonie",
              "addressCountry": "BE"
            },
            "areaServed": [
              { "@type": "City", "name": "Herve" },
              { "@type": "City", "name": "Verviers" },
              { "@type": "City", "name": "Liège" },
              { "@type": "City", "name": "Battice" }
            ],
            "url": "https://shineandgo.be",
            "image": "https://shineandgo.be/og-image.jpg"
          })
        }}
      />
    </main>
  )
}