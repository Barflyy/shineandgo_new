'use client'

import { ArrowRight, Check, Star, Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Shine<span className="text-blue-600">&</span>Go
          </div>
          <a
            href="tel:+32472303701"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
          >
            0472 30 37 01
          </a>
        </div>
      </nav>

      {/* HERO - MINIMALISTE */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge discret */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-50 rounded-full">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.9/5 sur Google</span>
            </div>

            {/* Titre épuré */}
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Detailing automobile
              <span className="block font-normal mt-2">à domicile</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed">
              Service premium mobile en Wallonie
              <span className="block mt-2 text-gray-400">Herve · Verviers · Liège · Battice</span>
            </p>

            {/* CTA simple */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://wa.me/32472303701"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                Réserver en ligne
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                0472 30 37 01
              </a>
            </div>

            {/* Info clés en une ligne */}
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <span>✓ Service en 90 min</span>
              <span className="hidden sm:inline">·</span>
              <span>✓ Produits Koch-Chemie</span>
              <span className="hidden sm:inline">·</span>
              <span>✓ Garantie satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* NOS FORMULES - GRILLE ÉPURÉE */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* Header minimaliste */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Nos formules
            </h2>
            <p className="text-lg text-gray-600">Prix transparents, résultat garanti</p>
          </div>

          {/* Cards épurées */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Intérieur */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-normal text-gray-900 mb-1">Intérieur</h3>
                <p className="text-sm text-gray-500">45-60 minutes</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-gray-100">
                <div className="text-5xl font-light text-gray-900 mb-1">65€</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Aspiration complète',
                  'Nettoyage surfaces',
                  'Vitres intérieures',
                  'Protection UV',
                  'Désodorisation'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Formule Intérieur - 65€"
                className="block w-full py-3 border border-gray-900 text-gray-900 font-medium rounded-full text-center hover:bg-gray-900 hover:text-white transition-all"
              >
                Réserver
              </a>
            </div>

            {/* Extérieur */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-normal text-gray-900 mb-1">Extérieur</h3>
                <p className="text-sm text-gray-500">60-75 minutes</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-gray-100">
                <div className="text-5xl font-light text-gray-900 mb-1">85€</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Lavage 2 seaux',
                  'Décontamination',
                  'Polish léger',
                  'Cire protection',
                  'Jantes & pneus'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Formule Extérieur - 85€"
                className="block w-full py-3 border border-gray-900 text-gray-900 font-medium rounded-full text-center hover:bg-gray-900 hover:text-white transition-all"
              >
                Réserver
              </a>
            </div>

            {/* Complet - RECOMMANDÉ */}
            <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-900">
              {/* Badge discret */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  Recommandé
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-normal text-white mb-1">Complet</h3>
                <p className="text-sm text-gray-400">90-120 minutes</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-gray-800">
                <div className="text-5xl font-light text-white mb-1">120€</div>
                <p className="text-sm text-gray-500">Économisez 30€</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Intérieur complet',
                  'Extérieur complet',
                  'Traitement cuirs',
                  'Protection 3 mois',
                  'Garantie 7 jours'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Formule Complète - 120€"
                className="block w-full py-3 bg-white text-gray-900 font-medium rounded-full text-center hover:bg-gray-100 transition-all"
              >
                Réserver
              </a>
            </div>
          </div>

          {/* Info additionnelle discrète */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              Déplacement gratuit jusqu'à 25km · Paiement après validation
            </p>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS - MINIMALISTE */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              
              {/* Gauche - Texte */}
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                  Excellence et
                  <span className="block">simplicité</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Nous utilisons exclusivement des produits professionnels Koch-Chemie pour garantir un résultat digne d'un showroom, directement chez vous.
                </p>
                <a
                  href="https://wa.me/32472303701"
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
                >
                  Réserver maintenant
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Droite - Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-2">90min</div>
                  <div className="text-sm text-gray-600">Service complet</div>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-2">4.9/5</div>
                  <div className="text-sm text-gray-600">Note Google</div>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-2">30+</div>
                  <div className="text-sm text-gray-600">Clients par mois</div>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-2">25km</div>
                  <div className="text-sm text-gray-600">Rayon gratuit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES - ÉPURÉ */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Témoignages
            </h2>
            <p className="text-lg text-gray-600">Ce que disent nos clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sophie Laurent',
                location: 'Herve',
                text: 'Service impeccable ! Ma voiture n\'a jamais été aussi propre. L\'équipe est professionnelle et ponctuelle.'
              },
              {
                name: 'Marc Dubois',
                location: 'Verviers',
                text: 'Excellent rapport qualité/prix. Les produits utilisés sont vraiment haut de gamme. Je recommande vivement.'
              },
              {
                name: 'Julie Klein',
                location: 'Liège',
                text: 'Mon SUV avait 3 ans sans detailing. Le résultat est bluffant, on dirait qu\'il sort du showroom.'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gray-900 text-gray-900" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL - SOBRE */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Réservez votre créneau
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              Intervention à domicile dans les 48h
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://wa.me/32472303701"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                0472 30 37 01
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Réponse en moins de 2h · Sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER - MINIMAL */}
      <footer className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
          
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                Shine<span className="text-blue-600">&</span>Go
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Detailing automobile premium à domicile en Wallonie
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/nettoyage-interieur-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">Intérieur</a></li>
                <li><a href="/nettoyage-exterieur-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">Extérieur</a></li>
                <li><a href="/nettoyage-complet-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">Complet</a></li>
              </ul>
            </div>

            {/* Zones */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Zones</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/nettoyage-voiture-herve" className="text-gray-600 hover:text-gray-900 transition-colors">Herve</a></li>
                <li><a href="/nettoyage-voiture-verviers" className="text-gray-600 hover:text-gray-900 transition-colors">Verviers</a></li>
                <li><a href="/lavage-voiture-liege" className="text-gray-600 hover:text-gray-900 transition-colors">Liège</a></li>
                <li><a href="/lavage-voiture-battice" className="text-gray-600 hover:text-gray-900 transition-colors">Battice</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+32472303701" className="hover:text-gray-900 transition-colors">0472 30 37 01</a>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@shineandgo.be" className="hover:text-gray-900 transition-colors">contact@shineandgo.be</a>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Herve, Wallonie</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © 2025 Shine&Go. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine&Go",
            "description": "Service premium de nettoyage automobile à domicile",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "postalCode": "4650",
              "addressCountry": "BE"
            },
            "priceRange": "€€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            }
          })
        }}
      />
    </main>
  )
}