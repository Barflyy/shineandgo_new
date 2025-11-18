'use client'

import { ArrowRight, Check, Star, Phone, Mail, MapPin, Clock, Shield, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/10 blur-[120px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-amber-400 text-sm font-medium">4.9/5 • Service Premium</span>
            </div>

            {/* Titre */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="block text-white mb-2">Detailing</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Premium
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed">
              Service de nettoyage automobile haut de gamme à domicile.
              <span className="block mt-2 text-amber-400">Résultat showroom garanti • Produits Koch-Chemie</span>
            </p>

            {/* Prix */}
            <div className="inline-block mb-12 px-8 py-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-2xl">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                À partir de 65€
              </div>
              <div className="text-sm text-zinc-400 mt-2">Herve • Verviers • Liège • Battice</div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701"
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/50 transition-all flex items-center gap-2"
              >
                Réserver Maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                📞 0472 30 37 01
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-12 mt-16 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-400">30+</div>
                <div className="text-sm text-zinc-500">Clients/mois</div>
              </div>
              <div className="h-12 w-px bg-zinc-800"></div>
              <div>
                <div className="text-3xl font-bold text-amber-400">90min</div>
                <div className="text-sm text-zinc-500">Service complet</div>
              </div>
              <div className="h-12 w-px bg-zinc-800"></div>
              <div>
                <div className="text-3xl font-bold text-amber-400">4.9/5</div>
                <div className="text-sm text-zinc-500">Note Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS FORMULES */}
      <section className="relative py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Nos Formules</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Choisissez votre
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Formule</span>
            </h2>
            <p className="text-xl text-zinc-400">Déplacement gratuit • Produits professionnels • Garantie satisfaction</p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Intérieur */}
            <div className="relative p-8 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl hover:border-amber-500/30 transition-all group">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🧹</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Intérieur Premium</h3>
              <p className="text-zinc-500 mb-6">45-60 minutes</p>
              
              <div className="mb-8 pb-8 border-b border-zinc-800">
                <div className="text-5xl font-bold text-white mb-2">65€</div>
                <p className="text-sm text-zinc-500">Tout compris</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {['Aspiration complète', 'Nettoyage sièges & tapis', 'Vitres intérieures', 'Protection UV tableau de bord', 'Désodorisation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite réserver la formule Intérieur Premium"
                className="block w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl text-center transition-all group-hover:border-amber-500/50"
              >
                Réserver
              </a>
            </div>

            {/* Extérieur */}
            <div className="relative p-8 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl hover:border-amber-500/30 transition-all group">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🚗</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Extérieur Showroom</h3>
              <p className="text-zinc-500 mb-6">60-75 minutes</p>
              
              <div className="mb-8 pb-8 border-b border-zinc-800">
                <div className="text-5xl font-bold text-white mb-2">85€</div>
                <p className="text-sm text-zinc-500">Tout compris</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {['Lavage 2 seaux pH neutre', 'Décontamination clay bar', 'Polish léger', 'Cire protection 3 mois', 'Jantes & pneus brillance'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite réserver la formule Extérieur Showroom"
                className="block w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl text-center transition-all group-hover:border-amber-500/50"
              >
                Réserver
              </a>
            </div>

            {/* Complet - POPULAIRE */}
            <div className="relative p-8 bg-gradient-to-b from-amber-900/20 to-zinc-950 border-2 border-amber-500/50 rounded-3xl hover:border-amber-500 transition-all group">
              {/* Badge Populaire */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-sm font-bold rounded-full">
                  ⭐ POPULAIRE
                </div>
              </div>
              
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Formule Complète</h3>
              <p className="text-zinc-500 mb-6">90-120 minutes</p>
              
              <div className="mb-8 pb-8 border-b border-amber-500/30">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-2">120€</div>
                <p className="text-sm text-amber-400/80">Meilleur rapport qualité/prix</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {['Tout Intérieur Premium', 'Tout Extérieur Showroom', 'Traitement cuirs & plastiques', 'Jantes & pneus brillance profonde', 'Garantie satisfaction 7 jours'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite réserver la Formule Complète"
                className="block w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-xl text-center hover:shadow-xl hover:shadow-amber-500/50 transition-all"
              >
                Réserver Maintenant
              </a>
            </div>
          </div>

          {/* Info supplémentaire */}
          <div className="text-center mt-12">
            <p className="text-zinc-400 mb-6">
              ✓ Déplacement gratuit 25km • ✓ Paiement après validation • ✓ Garantie satisfaction
            </p>
            <a
              href="https://wa.me/32472303701?text=Je souhaite un devis personnalisé"
              className="inline-flex items-center gap-2 px-6 py-3 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-all"
            >
              Devis personnalisé
            </a>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Pourquoi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Shine&Go ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Garantie Satisfait</h3>
              <p className="text-zinc-400">ou remboursé sous 7 jours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Produits Pro</h3>
              <p className="text-zinc-400">Koch-Chemie exclusivement</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Service Rapide</h3>
              <p className="text-zinc-400">90 minutes chrono</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">À Domicile</h3>
              <p className="text-zinc-400">On vient chez vous</p>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="relative py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Ils nous font
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Confiance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Sophie L.', note: 5, text: 'Service impeccable ! Ma voiture n\'a jamais été aussi propre. L\'équipe est professionnelle et ponctuelle.' },
              { name: 'Marc D.', note: 5, text: 'Excellent rapport qualité/prix. Les produits utilisés sont vraiment haut de gamme. Je recommande !' },
              { name: 'Julie K.', note: 5, text: 'Mon SUV avait 3 ans sans detailing. Le résultat est bluffant, on dirait qu\'il sort du showroom.' }
            ].map((temoignage, i) => (
              <div key={i} className="p-8 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(temoignage.note)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed">{temoignage.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                    {temoignage.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{temoignage.name}</div>
                    <div className="text-sm text-zinc-500">Client vérifié</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              Voir tous les avis Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 bg-gradient-to-br from-amber-950/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Prêt à redonner vie à
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">votre véhicule ?</span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-12">
              Réservez votre créneau en 2 minutes. Service à domicile dans les 48h.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701"
                className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all flex items-center gap-3"
              >
                📲 Réserver sur WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-10 py-5 bg-white/10 border-2 border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                📞 Appeler Maintenant
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Réponse rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Devis gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-4">
                Shine&Go
              </div>
              <p className="text-zinc-500 leading-relaxed">
                Service premium de nettoyage automobile à domicile en Wallonie.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-zinc-500">
                <li><a href="/nettoyage-interieur-voiture" className="hover:text-amber-400 transition-colors">Intérieur Premium</a></li>
                <li><a href="/nettoyage-exterieur-voiture" className="hover:text-amber-400 transition-colors">Extérieur Showroom</a></li>
                <li><a href="/nettoyage-complet-voiture" className="hover:text-amber-400 transition-colors">Formule Complète</a></li>
              </ul>
            </div>

            {/* Zones */}
            <div>
              <h4 className="text-white font-bold mb-4">Zones</h4>
              <ul className="space-y-2 text-zinc-500">
                <li><a href="/nettoyage-voiture-herve" className="hover:text-amber-400 transition-colors">Herve</a></li>
                <li><a href="/nettoyage-voiture-verviers" className="hover:text-amber-400 transition-colors">Verviers</a></li>
                <li><a href="/lavage-voiture-liege" className="hover:text-amber-400 transition-colors">Liège</a></li>
                <li><a href="/lavage-voiture-battice" className="hover:text-amber-400 transition-colors">Battice</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-500">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <a href="tel:+32472303701" className="hover:text-amber-400 transition-colors">0472 30 37 01</a>
                </li>
                <li className="flex items-center gap-2 text-zinc-500">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <a href="mailto:contact@shineandgo.be" className="hover:text-amber-400 transition-colors">contact@shineandgo.be</a>
                </li>
                <li className="flex items-center gap-2 text-zinc-500">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Herve, Wallonie</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-zinc-500 text-sm">
              © 2025 Shine&Go. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-amber-400 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-amber-400 transition-colors">CGV</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Confidentialité</a>
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
