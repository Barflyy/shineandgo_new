"use client"

import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export default function ModernFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none"></div>

      {/* Main footer */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div>
            <div className="text-3xl font-display font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Shine&Go
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Nettoyage voiture premium à domicile. Service mobile professionnel. Résultat showroom garanti.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/nettoyage-interieur-voiture" className="text-white/70 hover:text-brand-400 transition-colors">
                  Intérieur Premium · 65€
                </a>
              </li>
              <li>
                <a href="/nettoyage-exterieur-voiture" className="text-white/70 hover:text-brand-400 transition-colors">
                  Extérieur Showroom · 85€
                </a>
              </li>
              <li>
                <a href="/nettoyage-complet-voiture" className="text-white/70 hover:text-brand-400 transition-colors">
                  Formule Complète · 120€
                </a>
              </li>
              <li>
                <a href="/prix-nettoyage-voiture-domicile" className="text-white/70 hover:text-brand-400 transition-colors">
                  Tous nos tarifs
                </a>
              </li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-white font-bold mb-4">Zones d'intervention</h3>
            <ul className="space-y-3">
              <li>
                <a href="/nettoyage-voiture-herve" className="text-white/70 hover:text-brand-400 transition-colors">
                  Herve & environs
                </a>
              </li>
              <li>
                <a href="/nettoyage-voiture-verviers" className="text-white/70 hover:text-brand-400 transition-colors">
                  Verviers
                </a>
              </li>
              <li>
                <a href="/lavage-voiture-liege" className="text-white/70 hover:text-brand-400 transition-colors">
                  Liège & agglomération
                </a>
              </li>
              <li>
                <a href="/lavage-voiture-battice" className="text-white/70 hover:text-brand-400 transition-colors">
                  Battice
                </a>
              </li>
            </ul>
            <p className="text-white/50 text-xs mt-3">Rayon de 25km autour de Herve</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Rayon de 25km autour de Herve</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+32472303701" className="text-white/70 hover:text-brand-400 transition-colors text-sm">
                  0472 30 37 01
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@shineandgo.be" className="text-white/70 hover:text-brand-400 transition-colors text-sm">
                  contact@shineandgo.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/50 text-sm">
              © 2025 Shine&Go. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm">
              <a href="#" className="text-white/50 hover:text-brand-400 transition-colors whitespace-nowrap">Mentions légales</a>
              <span className="text-white/20">·</span>
              <a href="#" className="text-white/50 hover:text-brand-400 transition-colors whitespace-nowrap">CGV</a>
              <span className="text-white/20">·</span>
              <a href="#" className="text-white/50 hover:text-brand-400 transition-colors whitespace-nowrap">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

