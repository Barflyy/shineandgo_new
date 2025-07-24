'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Car, Sparkles, Shield, Users, Star, Calendar, Heart, Award, MessageCircle, Clock } from 'lucide-react';

export default function Footer() {
  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <footer className="relative py-16 md:py-24 bg-slate-900">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean CTA Section */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 md:p-12 shadow-lg">
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-600 shadow-lg mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Votre voiture mérite le meilleur
              </h3>
              
              {/* Description */}
              <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Shine&Go – Service Premium Car Care
              </p>
              
              {/* CTA Button */}
              <button
                onClick={handleBooking}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Réserver maintenant
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Clean Contact & Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
            
            {/* Brand */}
            <div className="mb-4">
              <h4 className="font-black text-2xl mb-2 text-white">
                Shine&Go
              </h4>
              <div className="flex items-center gap-2 text-blue-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Service Premium Car Care</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-slate-300 leading-relaxed text-sm">
              Lavage voiture à domicile en Wallonie.
              <br />
              Résultat showroom garanti en 90 min.
            </p>
          </div>

          {/* Services */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
            
            <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-blue-400" />
              Services
            </h4>
            
            <ul className="space-y-3">
              <li>
                <Link
                  href="/nettoyage-interieur-voiture"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🧹</span>
                  </div>
                  <span className="text-sm">Nettoyage intérieur voiture</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/nettoyage-exterieur-voiture"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🚿</span>
                  </div>
                  <span className="text-sm">Nettoyage extérieur voiture</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/nettoyage-complet-voiture"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm">✨</span>
                  </div>
                  <span className="text-sm">Nettoyage complet voiture</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
            
            <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              Contact
            </h4>
            
            <ul className="space-y-4">
              <li>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm">Herve et alentours (déplacement gratuit ≤ 25 km)</span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+32472303701"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-sm">📞 Contact : 0472 30 37 01</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-sm">WhatsApp 7j/7, 8 h – 20 h</span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:nathangodfroid@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm">nathangodfroid@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">⭐ 4,9/5 sur Google – 100% satisfaction clients</span>
            </div>
          </div>
        </div>

        {/* Clean Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  © Shine&Go 2025 – Tous droits réservés
                </p>
              </div>
              
              {/* Status & Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Service mobile à domicile</span>
                </div>
                <span className="hidden md:block">•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>7 j/7 – 8 h à 20 h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs leading-relaxed max-w-4xl mx-auto">
            Shine&Go – Lavage voiture à domicile en Wallonie | Nettoyage auto pro intérieur & extérieur | Intervention rapide en 90 min | Produits Koch-Chemie & CarPro | 0472 30 37 01
          </p>
        </div>

      </div>
    </footer>
  );
} 