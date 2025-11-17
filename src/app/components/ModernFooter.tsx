"use client"

import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export default function ModernFooter() {
  return (
    <footer className="relative bg-dark-950 text-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500"></div>

      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-3xl font-display font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Shine&Go
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Service mobile premium de detailing automobile. Résultat showroom garanti.
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
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {['Nettoyage intérieur', 'Nettoyage extérieur', 'Formule complète', 'Detailing premium'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/70 hover:text-brand-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-white font-bold mb-4">Zones d'intervention</h3>
            <ul className="space-y-3">
              {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne'].map((city) => (
                <li key={city}>
                  <a href="#" className="text-white/70 hover:text-brand-400 transition-colors">
                    {city}
                  </a>
                </li>
              ))}
            </ul>
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
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2025 Shine&Go. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">CGV</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

