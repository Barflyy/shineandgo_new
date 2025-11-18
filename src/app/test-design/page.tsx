'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Plus, Mail, Clock, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-5 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Shine<span className="text-blue-600">&</span>Go
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:+32472303701" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              0472 30 37 01
            </a>
            <a 
              href="#tarifs"
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${isScrolled ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
            >
              Réserver
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-5 sm:pt-40 sm:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6">
            <Star className="w-3.5 h-3.5 fill-blue-700" />
            4.9/5 sur Google
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Le detailing <br className="sm:hidden" />
            <span className="text-blue-600">à votre porte.</span>
          </h1>
          
          <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg mx-auto">
            Service de nettoyage automobile haut de gamme à domicile. 
            Nous nous déplaçons avec notre matériel, vous gagnez du temps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/32472303701"
              className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95"
            >
              Réserver par WhatsApp
            </a>
            <a
              href="#tarifs"
              className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-slate-50 text-slate-900 font-medium flex items-center justify-center hover:bg-slate-100 transition-all border border-slate-100"
            >
              Voir les tarifs
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-xs font-medium text-slate-400 uppercase tracking-wider">
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-600" /> Mobile</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-600" /> 7j/7</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-blue-600" /> Assuré</span>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-10 border-t border-slate-50">
        <div className="container mx-auto px-5 text-center">
          <p className="text-sm text-slate-400 mb-4">Nous intervenons chez vous à :</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa', 'Fléron'].map((city) => (
              <a key={city} href={`/nettoyage-voiture-${city.toLowerCase()}`} className="px-4 py-2 rounded-full bg-white border border-slate-100 text-slate-600 text-sm shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors">
                {city}
              </a>
            ))}
            <span className="px-4 py-2 text-sm text-slate-400">+ 25km alentours</span>
          </div>
        </div>
      </section>

      {/* AVANT / APRÈS (Section Visuelle) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl font-bold mb-8 text-center">Résultats concrets</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {/* Cas 1 : Intérieur */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider text-center sm:text-left">Sièges tachés</div>
              <div className="relative h-64 rounded-3xl overflow-hidden flex shadow-sm border border-slate-100">
                <div className="w-1/2 h-full bg-slate-200 relative border-r border-white/20">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-bold bg-slate-100">
                     AVANT
                   </div>
                </div>
                <div className="w-1/2 h-full bg-blue-50 relative">
                   <div className="absolute inset-0 flex items-center justify-center text-blue-600 text-xs font-bold bg-blue-50">
                     APRÈS
                   </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold text-slate-800 z-10">
                  VS
                </div>
              </div>
            </div>

            {/* Cas 2 : Extérieur */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider text-center sm:text-left">Carrosserie terne</div>
              <div className="relative h-64 rounded-3xl overflow-hidden flex shadow-sm border border-slate-100">
                <div className="w-1/2 h-full bg-slate-200 relative border-r border-white/20">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-bold bg-slate-100">
                     AVANT
                   </div>
                </div>
                <div className="w-1/2 h-full bg-blue-50 relative">
                   <div className="absolute inset-0 flex items-center justify-center text-blue-600 text-xs font-bold bg-blue-50">
                     APRÈS
                   </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold text-slate-800 z-10">
                  VS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-20 bg-slate-50">
        <div className="container mx-auto px-5">
          <div className="max-w-md mx-auto space-y-6">
            
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Nos Formules</h2>
              <p className="text-slate-500">Simples. Transparentes. Sans surprise.</p>
            </div>

            {/* Carte Intérieur */}
            <article className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.01]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">Intérieur</h3>
                  <p className="text-slate-500 text-sm">Remise à neuf habitacle</p>
                </div>
                <div className="text-xl font-bold text-blue-600">65€</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" /> Aspiration complète
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" /> Shampoing sièges & tapis
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" /> Vitres & Plastiques
                </li>
              </ul>
              <a href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage Intérieur" className="block w-full py-3 text-center rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">
                Choisir Intérieur
              </a>
            </article>

            {/* Carte Complet (Mise en avant) */}
            <article className="relative bg-white p-6 rounded-3xl shadow-xl border-2 border-blue-600 transform scale-105 z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                Le plus populaire
              </div>
              <div className="flex justify-between items-start mb-4 mt-2">
                <div>
                  <h3 className="text-lg font-bold">Complet</h3>
                  <p className="text-slate-500 text-sm">Intérieur + Extérieur</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">120€</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" /> Pack Intérieur inclus
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" /> Lavage main carrosserie
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" /> Cire de protection 3 mois
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" /> Dressing pneus & jantes
                </div>
              </div>
              <a href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage Complet" className="block w-full py-3 text-center rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
                Réserver le Complet
              </a>
            </article>

            {/* Carte Extérieur */}
            <article className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.01]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">Extérieur</h3>
                  <p className="text-slate-500 text-sm">Lavage main & Brillance</p>
                </div>
                <div className="text-xl font-bold text-blue-600">85€</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" /> Lavage manuel 2 seaux
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" /> Décontamination ferreuse
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" /> Séchage microfibre
                </li>
              </ul>
              <a href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage Extérieur" className="block w-full py-3 text-center rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors">
                Choisir Extérieur
              </a>
            </article>

          </div>
        </div>
      </section>

      {/* DÉROULEMENT (Section Logistique) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-2xl font-bold mb-10 text-center">Déroulement simple</h2>
          
          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
            
            {/* Étape 1 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center font-bold text-blue-600 shadow-sm z-10">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Réservation rapide</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                Envoyez-nous votre adresse et le type de véhicule sur WhatsApp. On fixe l'heure de passage.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-slate-400 shadow-sm z-10">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Intervention (90 min)</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                On arrive avec l'équipement. Il nous faut juste les clés, une prise électrique et un robinet.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-slate-400 shadow-sm z-10">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Validation & Paiement</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                On fait le tour du véhicule ensemble. Vous ne payez que si le résultat vous convient (Payconiq ou Cash).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5 max-w-2xl mx-auto bg-slate-50 rounded-3xl my-10 mx-5">
        <h2 className="text-2xl font-bold mb-8 text-center">Questions fréquentes</h2>
        <div className="space-y-4">
          <details className="group bg-white rounded-2xl border border-slate-100 open:bg-white shadow-sm transition-all duration-200">
            <summary className="flex items-center justify-between p-5 font-medium cursor-pointer list-none">
              <span>Il faut une arrivée d'eau ?</span>
              <Plus className="w-4 h-4 text-slate-400 group-open:rotate-45 transition-transform" />
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
              Idéalement oui, ainsi qu'une prise électrique. Si ce n'est pas possible (appartement, parking), prévenez-nous lors de la réservation, nous adapterons le matériel.
            </div>
          </details>
          
          <details className="group bg-white rounded-2xl border border-slate-100 open:bg-white shadow-sm transition-all duration-200">
            <summary className="flex items-center justify-between p-5 font-medium cursor-pointer list-none">
              <span>Comment je paie ?</span>
              <Plus className="w-4 h-4 text-slate-400 group-open:rotate-45 transition-transform" />
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
              Le paiement s'effectue une fois le travail terminé et validé par vos soins. Nous acceptons l'application Payconiq, les virements instantanés ou les espèces.
            </div>
          </details>

          <details className="group bg-white rounded-2xl border border-slate-100 open:bg-white shadow-sm transition-all duration-200">
            <summary className="flex items-center justify-between p-5 font-medium cursor-pointer list-none">
              <span>Quelle est la zone de gratuité ?</span>
              <Plus className="w-4 h-4 text-slate-400 group-open:rotate-45 transition-transform" />
            </summary>
            <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
              Le déplacement est 100% gratuit dans un rayon de 25km autour de Herve. Au-delà, nous demandons une petite participation de 0,50€/km.
            </div>
          </details>
        </div>
      </section>

      {/* FOOTER COMPLET */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl font-bold text-slate-900 mb-4">
                Shine<span className="text-blue-600">&</span>Go
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Le spécialiste du nettoyage automobile à domicile en province de Liège. Qualité artisanale, produits professionnels, service client irréprochable.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-600" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-900">4.9/5</span>
              </div>
            </div>

            {/* Services - Maillage interne */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Nos Services</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li>
                  <a href="/nettoyage-interieur-voiture" className="hover:text-blue-600 transition-colors block py-1">
                    Nettoyage intérieur voiture
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-exterieur-voiture" className="hover:text-blue-600 transition-colors block py-1">
                    Lavage extérieur manuel
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-complet-voiture" className="hover:text-blue-600 transition-colors block py-1">
                    Formule Complète (Int+Ext)
                  </a>
                </li>
                <li>
                  <a href="/prix-nettoyage-voiture-domicile" className="hover:text-blue-600 transition-colors block py-1">
                    Tarifs et devis
                  </a>
                </li>
              </ul>
            </div>

            {/* Zones - SEO Local */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Zones d'intervention</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="/nettoyage-voiture-herve" className="hover:text-blue-600 transition-colors block py-1">Nettoyage voiture Herve</a></li>
                <li><a href="/nettoyage-voiture-verviers" className="hover:text-blue-600 transition-colors block py-1">Lavage auto Verviers</a></li>
                <li><a href="/lavage-voiture-liege" className="hover:text-blue-600 transition-colors block py-1">Nettoyage domicile Liège</a></li>
                <li><a href="/lavage-voiture-battice" className="hover:text-blue-600 transition-colors block py-1">Lavage auto Battice</a></li>
                <li><a href="/lavage-voiture-spa" className="hover:text-blue-600 transition-colors block py-1">Nettoyage auto Spa</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href="tel:+32472303701" className="hover:text-slate-900 transition-colors">0472 30 37 01</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href="mailto:contact@shineandgo.be" className="hover:text-slate-900 transition-colors">contact@shineandgo.be</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <span>Service Mobile<br/>Herve, Belgique</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Lun-Sam: 08h - 19h</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2025 Shine&Go. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="/mentions-legales" className="hover:text-slate-600 transition-colors">Mentions légales</a>
              <a href="/politique-confidentialite" className="hover:text-slate-600 transition-colors">Confidentialité</a>
              <a href="/cgv" className="hover:text-slate-600 transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>

      {/* BARRE D'ACTION MOBILE (Sticky Bottom) */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 transition-transform duration-300 z-50 sm:hidden ${isScrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <a 
          href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver"
          className="flex items-center justify-center gap-2 w-full h-12 bg-blue-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          Réserver maintenant
        </a>
      </div>

      {/* Schema.org SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoWash",
            "name": "Shine&Go",
            "description": "Service de nettoyage automobile à domicile en province de Liège.",
            "image": "https://shineandgo.be/og-image.jpg",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "addressCountry": "BE"
            },
            "telephone": "+32472303701",
            "areaServed": ["Herve", "Verviers", "Liège", "Battice", "Spa"],
            "openingHours": "Mo-Sa 08:00-19:00"
          })
        }}
      />

    </main>
  )
}
