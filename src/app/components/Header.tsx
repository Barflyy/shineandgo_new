"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  cityName?: string;
}

const Header: React.FC<HeaderProps> = ({ cityName }) => {
  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Devis', href: '/#services' },
    { name: 'Transformations', href: '/#transformations' },
    { name: 'À propos', href: '/#apropos' },
    { name: 'Témoignages', href: '/#temoignages' },
    { name: 'Contact', href: '/#contact' }
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
    <header className="w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo simplifié */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('/')}>
            <span className="text-xl font-bold text-white">
              Shine&Go
            </span>
            {cityName && (
              <span className="text-sm text-gray-400 ml-2">
                - {cityName}
              </span>
            )}
          </div>

          {/* Navigation Desktop - Épurée */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Desktop - Simplifié */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/32472303701"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* CTA Mobile - Icônes à droite */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href="https://wa.me/32472303701"
              className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors duration-300 flex items-center justify-center"
              aria-label="WhatsApp Direct"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
            <a
              href="tel:+32472303701"
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300 flex items-center justify-center"
              aria-label="Appel Direct"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 