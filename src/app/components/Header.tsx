"use client";

import React from 'react';
import { Phone, MessageCircle, Star, Sparkles, MapPin } from 'lucide-react';

interface HeaderProps {
  cityName?: string;
}

const Header: React.FC<HeaderProps> = ({ cityName }) => {
  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Comment ça marche', href: '/#how-it-works' },
    { name: 'Nos services', href: '/#services' },
    { name: 'Avant/Après', href: '/#transformations' },
    { name: 'Avis clients', href: '/#temoignages' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // Navigation interne sur la page principale
      window.location.href = href;
    } else {
      // Navigation vers une autre page
      window.location.href = href;
    }
  };

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Section navigation avec fond amélioré - Version mise à jour */}
      <div className="relative">
        {/* Fond glassmorphism moderne avec plus de transparence */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-xl border-b border-white/10"></div>
        
        {/* Effet de brillance subtil amélioré */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40"></div>
        
        {/* Effet de profondeur supplémentaire */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20"></div>
        
        {/* Contenu du header */}
        <div className="relative container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo simplifié avec effet */}
            <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('/')}>
              <span className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                Shine&Go
              </span>
              
              {cityName && (
                <span className="text-sm text-gray-400 ml-2 font-medium group-hover:text-gray-300 transition-colors duration-300">
                  - {cityName}
                </span>
              )}
            </div>

            {/* Navigation Desktop - Style moderne amélioré */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="relative group px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  {/* Effet de brillance au hover amélioré */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
            </nav>

            {/* CTA Desktop - Style premium amélioré */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                    });
                  }
                }}
                className="group relative bg-gradient-to-r from-emerald-500/30 to-green-500/30 hover:from-emerald-500/40 hover:to-green-500/40 backdrop-blur-md border border-emerald-400/40 hover:border-emerald-300/60 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 text-emerald-200 hover:text-emerald-100 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                {/* Effet de brillance amélioré */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Réserver</span>
              </button>
            </div>

            {/* CTA Mobile - Style moderne amélioré */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                    });
                  }
                }}
                className="group relative bg-gradient-to-r from-emerald-500/30 to-green-500/30 hover:from-emerald-500/40 hover:to-green-500/40 backdrop-blur-md border border-emerald-400/40 hover:border-emerald-300/60 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 text-emerald-200 hover:text-emerald-100 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                aria-label="Réserver maintenant"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Réserver</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 