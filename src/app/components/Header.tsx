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
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      {/* Header flottant avec design compact */}
      <div className="mx-4 md:mx-8 lg:mx-12">
        <div className="relative">
          {/* Fond glassmorphism flottant */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl"></div>
          
          {/* Effet de brillance subtil */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 rounded-2xl"></div>
          
          {/* Contenu du header */}
          <div className="relative px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo simplifié avec effet */}
              <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('/')}>
                <span className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                  Shine&Go
                </span>
                
                {cityName && (
                  <span className="text-xs text-gray-400 ml-2 font-medium group-hover:text-gray-300 transition-colors duration-300">
                    - {cityName}
                  </span>
                )}
              </div>

              {/* Navigation Desktop - Style moderne compact */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="relative group px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <span className="relative z-10">{item.name}</span>
                  </button>
                ))}
              </nav>

              {/* CTA Desktop - Style premium compact */}
              <div className="hidden lg:flex items-center">
                <button
                  onClick={() => {
                    if (window.Calendly) {
                      window.Calendly.initPopupWidget({
                        url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                      });
                    }
                  }}
                  className="group relative bg-gradient-to-r from-emerald-500/40 to-green-500/40 hover:from-emerald-500/50 hover:to-green-500/50 backdrop-blur-md border border-emerald-400/50 hover:border-emerald-300/70 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center space-x-2 text-emerald-200 hover:text-emerald-100 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <MessageCircle className="w-3 h-3 relative z-10" />
                  <span className="relative z-10">Réserver</span>
                </button>
              </div>

              {/* CTA Mobile - Style moderne compact */}
              <div className="flex lg:hidden items-center">
                <button
                  onClick={() => {
                    if (window.Calendly) {
                      window.Calendly.initPopupWidget({
                        url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                      });
                    }
                  }}
                  className="group relative bg-gradient-to-r from-emerald-500/40 to-green-500/40 hover:from-emerald-500/50 hover:to-green-500/50 backdrop-blur-md border border-emerald-400/50 hover:border-emerald-300/70 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center space-x-2 text-emerald-200 hover:text-emerald-100 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                  aria-label="Réserver maintenant"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <MessageCircle className="w-3 h-3 relative z-10" />
                  <span className="relative z-10">Réserver</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 