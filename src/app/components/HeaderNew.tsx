'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function HeaderNew() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  const handleMobileBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg border-b border-ui-border shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S&G</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-text-primary">Shine & Go</div>
              <div className="text-xs text-text-primary">Nettoyage voiture à domicile</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-text-primary hover:text-text-primary transition-colors duration-200 font-medium"
            >
              Services
            </button>
            
            {/* CTA Button */}
            <button 
              onClick={handleBooking}
              className="bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
            >
              Réserver
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-light/50 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-ui-border bg-white/95 backdrop-blur-lg">
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-text-primary hover:text-text-primary hover:bg-surface-light/50 rounded-lg transition-colors duration-200 font-medium"
              >
                Services
              </button>
              
              <button 
                onClick={handleMobileBooking}
                className="w-full bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
              >
                Réserver
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 