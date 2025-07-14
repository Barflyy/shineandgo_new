"use client";

import React, { useState } from 'react';
import { Phone, MessageCircle, Star, Sparkles, MapPin, Menu, X } from 'lucide-react';

interface HeaderProps {
  cityName?: string;
}

const Header: React.FC<HeaderProps> = ({ cityName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '/#accueil' },
    { name: 'Comment ça marche', href: '/#how-it-works' },
    { name: 'Nos services', href: '/#services' },
    { name: 'Avant/Après', href: '/#transformations' },
    { name: 'Avis clients', href: '/#temoignages' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      // Navigation interne sur la page principale
      const element = document.querySelector(href.replace('/#', '#')) as HTMLElement;
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigation vers une autre page
      window.location.href = href;
    }
  };

  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-4">
      {/* Header flottant avec design compact */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Fond glassmorphism flottant */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl"></div>
          
          {/* Effet de brillance subtil */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 rounded-2xl"></div>
          
          {/* Contenu du header */}
          <div className="relative px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo simplifié avec effet */}
              <button 
                onClick={() => handleNavClick('/#accueil')}
                className="flex items-center cursor-pointer group"
                aria-label="Retour à l'accueil"
              >
                <span className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 break-words hyphens-auto">
                  Shine&Go
                </span>
                
                {cityName && (
                  <span className="text-xs text-gray-400 ml-1 sm:ml-2 font-medium group-hover:text-gray-300 transition-colors duration-300 hidden sm:inline break-words hyphens-auto">
                    - {cityName}
                  </span>
                )}
              </button>

              {/* Navigation Desktop - Style moderne compact */}
              <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Navigation principale">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="relative group px-2 sm:px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm min-h-[44px] min-w-[44px]"
                    aria-label={`Aller à la section ${item.name}`}
                  >
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <span className="relative z-10 break-words hyphens-auto">{item.name}</span>
                  </button>
                ))}
              </nav>

              {/* CTA Desktop - Style premium compact */}
              <div className="hidden lg:flex items-center">
                <button
                  onClick={handleCalendlyClick}
                  className="group relative bg-gradient-to-r from-emerald-500/40 to-green-500/40 hover:from-emerald-500/50 hover:to-green-500/50 backdrop-blur-md border border-emerald-400/50 hover:border-emerald-300/70 px-3 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center space-x-2 text-emerald-200 hover:text-emerald-100 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 min-h-[44px] min-w-[44px]"
                  aria-label="Réserver un nettoyage voiture"
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <MessageCircle className="w-3 h-3 relative z-10" />
                  <span className="relative z-10">Réserver</span>
                </button>
              </div>

              {/* Bouton mobile menu */}
              <div className="flex lg:hidden items-center space-x-2">
                <button
                  onClick={handleCalendlyClick}
                  className="group relative bg-gradient-to-r from-emerald-500/40 to-green-500/40 hover:from-emerald-500/50 hover:to-green-500/50 backdrop-blur-md border border-emerald-400/50 hover:border-emerald-300/70 px-2 sm:px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-emerald-200 hover:text-emerald-100 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 min-h-[44px] min-w-[44px]"
                  aria-label="Réserver maintenant"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <MessageCircle className="w-3 h-3 relative z-10" />
                  <span className="relative z-10 hidden sm:inline">Réserver</span>
                </button>
                
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="group relative bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 px-2 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-center hover:scale-105 shadow-lg min-h-[44px] min-w-[44px]"
                  aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-4 h-4 text-white" />
                  ) : (
                    <Menu className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Menu mobile */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl">
                <nav className="space-y-2" role="navigation" aria-label="Menu mobile">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm break-words hyphens-auto min-h-[44px]"
                      aria-label={`Aller à la section ${item.name}`}
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 