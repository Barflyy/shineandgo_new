'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Clock, Sparkles, ShieldCheck, Calculator, Mail, Menu, X, Car, Droplets } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMenu = () => setMobileMenuOpen(false)

  const scrollToSection = (id: string) => {
    closeMenu()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 lg:py-6'
      }`}>
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 z-50">
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900" onClick={closeMenu}>
              Shine<span className="text-brand-600">&</span>Go
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Prestations</button>
            <button onClick={() => scrollToSection('tarifs')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Tarifs</button>
            <button onClick={() => scrollToSection('zones')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Zones</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">FAQ</button>
            <a
              href="tel:+32472303701"
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md' 
                  : 'bg-white text-slate-900 shadow-sm hover:shadow-md'
              }`}
            >
              <Phone className="w-4 h-4 inline-block mr-2 mb-0.5" />
              0472 30 37 01
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden z-50 p-2 text-slate-900"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden flex flex-col items-center justify-center gap-8 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <button onClick={() => scrollToSection('services')} className="text-2xl font-bold text-slate-900">Prestations</button>
          <button onClick={() => scrollToSection('tarifs')} className="text-2xl font-bold text-slate-900">Tarifs</button>
          <button onClick={() => scrollToSection('zones')} className="text-2xl font-bold text-slate-900">Zones</button>
          <button onClick={() => scrollToSection('faq')} className="text-2xl font-bold text-slate-900">FAQ</button>
          <a href="tel:+32472303701" className="mt-4 px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg shadow-lg shadow-brand-600/30">
            Appeler maintenant
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/50 via-slate-50/0 to-transparent -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-6 lg:mb-8 animate-fade-in-up">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Le lavage auto n°1 à domicile</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Lavage auto
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-800 block">
                  Directement chez vous
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 lg:mb-10 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ne perdez plus votre temps en station. Nous transformons votre véhicule à domicile ou au bureau. <strong className="text-slate-900">Intérieur & Extérieur.</strong>
                <span className="block mt-3 text-slate-500 text-base flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-500" /> Zone : Herve, Verviers, Liège & alentours
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection('tarifs')}
                  className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-brand-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 hover:shadow-brand-600/30"
                >
                  Voir les tarifs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="https://wa.me/32472303701"
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-full hover:border-brand-200 hover:bg-brand-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-5 h-5 text-brand-500" /> Déplacement Gratuit*
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Check className="w-5 h-5 text-brand-500" /> Produits Premium
                </div>
                <div className="hidden lg:flex items-center gap-2">
                  <Check className="w-5 h-5 text-brand-500" /> Eau & Élec autonomes
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full relative max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                <Image 
                  src="/transformations/optimized/webp/apres01.webp"
                  alt="Résultat lavage auto domicile Shine and Go"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-white/50 flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full text-green-600">
                     <Sparkles className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-semibold uppercase">Résultat</p>
                     <p className="text-slate-900 font-bold">Showroom Garanti</p>
                   </div>
                </div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-400/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-8 lg:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Logos de confiance ou arguments clés format logo */}
              <div className="flex items-center gap-2 font-bold text-slate-400 text-xl">
                <ShieldCheck className="w-8 h-8" /> Assuré
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-400 text-xl">
                <Star className="w-8 h-8" /> 5.0 Google
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-400 text-xl">
                <Car className="w-8 h-8" /> Tous véhicules
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-400 text-xl">
                <Clock className="w-8 h-8" /> 7j/7
              </div>
           </div>
        </div>
      </section>

      {/* AVANT / APRÈS */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Plus qu'un simple lavage.</h2>
            <p className="text-lg text-slate-600">
              Le detailing est l'art de rénover un véhicule dans ses moindres détails. Voyez la différence par vous-même.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
             <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-video">
               <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-bold z-10">AVANT</div>
               <Image 
                  src="/transformations/optimized/webp/avant01.webp"
                  alt="Voiture sale avant nettoyage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
             </div>
             <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-video ring-4 ring-brand-100">
               <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-md text-sm font-bold z-10">APRÈS SHINE&GO</div>
               <Image 
                  src="/transformations/optimized/webp/apres01.webp"
                  alt="Voiture propre après detailing"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
             </div>
          </div>
        </div>
      </section>

      {/* SERVICES & PRICING */}
      <section id="tarifs" className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Tarifs Transparents</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Pas de surprise. Déplacement inclus jusqu'à 25km autour de Herve.
              <br/>Pour tous types de véhicules (Citadine, SUV, Berline).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Card 1: Intérieur */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 text-brand-400">
                   <Car className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Intérieur Deep Clean</h3>
                <p className="text-slate-400 text-sm mt-2 h-10">Pour un habitacle sain, sans poussière ni mauvaises odeurs.</p>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">65€</span>
                <span className="text-slate-400 font-normal">/auto</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0" /> Aspiration complète (coffre inclus)
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0" /> Pressing tapis & moquettes
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0" /> Nettoyage plastiques & tableau de bord
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0" /> Vitres intérieures
                </li>
              </ul>
              <a href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur" className="block w-full py-3 rounded-xl bg-slate-700 text-white font-semibold hover:bg-slate-600 transition-all text-center border border-slate-600">
                Réserver Intérieur
              </a>
            </div>

            {/* Card 2: COMPLET (Pop) */}
            <div className="bg-brand-600 rounded-3xl p-8 border border-brand-500 shadow-2xl shadow-brand-900/50 transform lg:-translate-y-6 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-white text-brand-700 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                Recommandé
              </div>
              <div className="mb-6">
                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 text-white">
                   <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Full Detailing</h3>
                <p className="text-brand-100 text-sm mt-2 h-10">La rénovation totale. Votre voiture comme au premier jour.</p>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-white">120€</span>
                <span className="text-brand-200 font-normal">/auto</span>
              </div>
              <p className="text-sm font-medium text-brand-100 mb-8 bg-brand-700/30 inline-block px-3 py-1 rounded-full self-start">
                Économisez 30€ sur le pack
              </p>

              <div className="space-y-6 mb-8 border-t border-brand-500 pt-6 flex-1">
                 <div className="flex items-start gap-3 text-white text-sm font-semibold">
                    <Check className="w-5 h-5 text-white flex-shrink-0" /> 
                    <span>Formule Intérieur Complète</span>
                 </div>
                 <div className="flex items-center gap-3 text-brand-200 text-sm justify-center">
                    <span className="h-px bg-brand-400 w-full"></span> + <span className="h-px bg-brand-400 w-full"></span>
                 </div>
                 <div className="flex items-start gap-3 text-white text-sm font-semibold">
                    <Check className="w-5 h-5 text-white flex-shrink-0" /> 
                    <span>Lavage Extérieur Manuel</span>
                 </div>
                 <ul className="space-y-2 pl-8 text-brand-100 text-sm">
                    <li>• Cire de protection</li>
                    <li>• Nettoyage jantes approfondi</li>
                    <li>• Dégraissage pneus & dressing</li>
                 </ul>
              </div>

              <a href="https://wa.me/32472303701?text=Je souhaite la formule complète" className="block w-full py-4 rounded-xl bg-white text-brand-700 font-bold hover:bg-brand-50 transition-all text-center shadow-lg">
                Réserver le Complet
              </a>
            </div>

            {/* Card 3: Extérieur */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-500 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                 <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 text-brand-400">
                   <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Extérieur Manuel</h3>
                <p className="text-slate-400 text-sm mt-2 h-10">Technique des 2 seaux pour éviter toute micro-rayure.</p>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">85€</span>
                <span className="text-slate-400 font-normal">/auto</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0" /> Prélavage mousse (Snow Foam)
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0" /> Nettoyage manuel gant microfibre
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0" /> Décontamination ferreuse jantes
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0" /> Séchage air pulsé (sans trace)
                </li>
              </ul>
              <a href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur" className="block w-full py-3 rounded-xl bg-slate-700 text-white font-semibold hover:bg-slate-600 transition-all text-center border border-slate-600">
                Réserver Extérieur
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SEO TEXT SECTION - "WHY CHOOSE US" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir Shine&Go ?</h2>
              <p className="text-slate-500">
                Spécialiste du nettoyage voiture à domicile en région liégeoise.
              </p>
            </div>
            
            <div className="prose prose-slate lg:prose-lg mx-auto text-slate-600 leading-relaxed">
              <p>
                Vous cherchez un <strong>lavage auto à domicile</strong> de qualité supérieure ? Shine&Go vous apporte le service de detailing directement chez vous, que vous habitiez à <strong>Herve</strong>, <strong>Battice</strong>, <strong>Verviers</strong> ou <strong>Liège</strong>.
              </p>
              <p>
                Contrairement aux stations de lavage automatique qui peuvent rayer votre carrosserie avec leurs brosses, nous utilisons des techniques manuelles respectueuses de votre véhicule (technique des deux seaux, gants microfibres haute densité). Nos produits professionnels <strong className="text-brand-600">Koch-Chemie</strong> garantissent une brillance et une protection longue durée.
              </p>
              <p>
                Notre camionnette est entièrement équipée. Pour la plupart des interventions, nous avons juste besoin d'un accès facile à votre véhicule. Que ce soit pour un nettoyage de sièges tachés, une préparation avant vente ou un entretien régulier, nous sommes la solution mobile de référence en Province de Liège.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES SECTION */}
      <section id="zones" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Nos zones d'intervention</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { city: 'Herve', href: '/nettoyage-voiture-herve' },
              { city: 'Battice', href: '/lavage-voiture-battice' },
              { city: 'Verviers', href: '/nettoyage-voiture-verviers' },
              { city: 'Liège', href: '/lavage-voiture-liege' },
              { city: 'Soumagne', href: '/lavage-voiture-soumagne' },
              { city: 'Fléron', href: '/lavage-voiture-fleron' },
              { city: 'Visé', href: '/lavage-voiture-vise' },
              { city: 'Chaudfontaine', href: '/lavage-voiture-chaudfontaine' }
            ].map((zone) => (
              <Link 
                key={zone.city} 
                href={zone.href}
                className="px-5 py-3 bg-white rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-brand-500 hover:text-brand-600 hover:shadow-sm transition-all text-sm"
              >
                Nettoyage {zone.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Questions Fréquentes</h2>
          <div className="space-y-4">
             {[
               { q: "Avez-vous besoin d'eau et d'électricité ?", a: "Idéalement oui (une prise et un robinet à moins de 25m). Si ce n'est pas possible, prévenez-nous, nous avons des solutions autonomes." },
               { q: "Combien de temps dure le nettoyage ?", a: "Comptez environ 1h30 pour un intérieur simple, et jusqu'à 3h30 pour une formule complète Detailing." },
               { q: "Faites-vous le shampouinage des sièges ?", a: "Oui, le nettoyage intérieur comprend le traitement des taches légères. Pour des sièges très encrassés, nous utilisons un injecteur-extracteur (optionnel)." },
               { q: "Quels moyens de paiement acceptez-vous ?", a: "Vous pouvez payer en espèces, via l'application Payconiq ou par virement instantané une fois le travail terminé et validé." }
             ].map((item, i) => (
               <div key={i} className="bg-slate-50 rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-slate-100 transition-colors">
                 <h4 className="font-bold text-slate-900 mb-3 text-lg">{item.q}</h4>
                 <p className="text-slate-600 leading-relaxed">{item.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">Shine&Go</div>
              <p className="mb-6">Lavage auto à domicile premium. Nous prenons soin de votre véhicule avec passion et minutie.</p>
              <div className="flex items-center gap-2">
                 <div className="flex text-amber-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                 <span className="text-white font-medium">Excellent</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/nettoyage-interieur-voiture" className="hover:text-brand-400 transition-colors">Nettoyage Intérieur</Link></li>
                <li><Link href="/lavage-exterieur-voiture" className="hover:text-brand-400 transition-colors">Lavage Extérieur</Link></li>
                <li><Link href="/nettoyage-complet-voiture" className="hover:text-brand-400 transition-colors">Formule Complète</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Légal</h4>
              <ul className="space-y-3">
                <li><Link href="/mentions-legales" className="hover:text-brand-400 transition-colors">Mentions Légales</Link></li>
                <li><Link href="/cgv" className="hover:text-brand-400 transition-colors">Conditions Générales</Link></li>
                <li><Link href="/confidentialite" className="hover:text-brand-400 transition-colors">Confidentialité</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-500" /> 
                  <a href="tel:+32472303701" className="hover:text-white">0472 30 37 01</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-500" /> 
                  <a href="mailto:contact@shineandgo.be" className="hover:text-white">contact@shineandgo.be</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-500" /> 
                  <span>Herve, Belgique</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 Shine&Go. Tous droits réservés.</p>
            <p className="text-xs text-slate-600">Site réalisé avec passion pour l'automobile.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <a
          href="https://wa.me/32472303701"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform shadow-green-900/20 border-2 border-white"
          aria-label="Contacter sur WhatsApp"
        >
          <Phone className="w-6 h-6 fill-current" />
        </a>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoCleaning",
            "name": "Shine&Go - Lavage Auto à Domicile",
            "description": "Service de nettoyage voiture à domicile de haute qualité à Herve, Verviers et Liège. Intérieur et extérieur.",
            "priceRange": "65€ - 120€",
            "telephone": "+32472303701",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Wallonie",
              "addressCountry": "BE"
            },
            "areaServed": ["Herve", "Verviers", "Liège", "Battice", "Soumagne", "Visé"],
            "url": "https://shineandgo.be",
            "image": "https://shineandgo.be/transformations/optimized/webp/apres01.webp"
          })
        }}
      />
    </main>
  )
}
