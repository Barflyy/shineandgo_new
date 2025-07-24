'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-lg border-b border-ui-border/70 pt-safe ${
        isScrolled 
          ? 'bg-white/80 shadow-sm' 
          : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-shine-blue-dark break-words min-w-0">
              Shine&Go
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onBlur={() => setTimeout(() => setIsServicesDropdownOpen(false), 200)}
                className="flex items-center gap-1 text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/nettoyage-interieur-voiture"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-shine-blue-primary transition-colors duration-200"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <span className="text-lg">🧹</span>
                      <div>
                        <div className="font-medium">Nettoyage intérieur</div>
                        <div className="text-sm text-gray-500">Aspiration & protection UV</div>
                      </div>
                    </Link>
                    <Link
                      href="/nettoyage-exterieur-voiture"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-shine-blue-primary transition-colors duration-200"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <span className="text-lg">🚿</span>
                      <div>
                        <div className="font-medium">Nettoyage extérieur</div>
                        <div className="text-sm text-gray-500">Carrosserie & protection</div>
                      </div>
                    </Link>
                    <Link
                      href="/nettoyage-complet-voiture"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-shine-blue-primary transition-colors duration-200"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <span className="text-lg">✨</span>
                      <div>
                        <div className="font-medium">Nettoyage complet</div>
                        <div className="text-sm text-gray-500">Intérieur + extérieur</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                // Redirection vers la page zones d'intervention
                window.location.href = '/zone-intervention';
              }}
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words"
            >
              Zones
            </button>
            <button
              onClick={() => {
                // Scroll vers la section BeforeAfterTestimonials
                const testimonialsSection = document.getElementById('testimonials-section');
                if (testimonialsSection) {
                  testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words"
            >
              Avis
            </button>
            <button
              onClick={() => {
                // Scroll vers la section FAQ
                const faqSection = document.getElementById('faq-section');
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a 
              href="tel:+32472303701"
              className="flex items-center space-x-2 text-shine-blue-dark hover:text-shine-blue-primary min-w-0"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="font-medium break-words min-w-0 text-sm sm:text-base">0472 30 37 01</span>
            </a>
            <button
              onClick={handleBooking}
              className="inline-flex items-center gap-1 lg:gap-2 rounded-full bg-shine-blue-primary px-2.5 sm:px-3 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-xs lg:text-sm font-semibold text-white shadow-md hover:bg-shine-blue-light focus-visible:outline focus-visible:ring-2 focus-visible:ring-shine-blue-primary min-w-0"
            >
              <span className="break-words min-w-0 hidden lg:inline">Réserver maintenant</span>
              <span className="break-words min-w-0 lg:hidden">Réserver</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1 sm:p-1.5 md:p-2 text-shine-blue-dark hover:text-shine-blue-primary"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-lg z-50">
            <div className="py-3 sm:py-4 md:py-6 px-4 sm:px-6 space-y-3 sm:space-y-4 md:space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Navigation Links */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {/* Services Section */}
                <div className="space-y-1">
                  <div className="px-3 sm:px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Services
                  </div>
                  <Link
                    href="/nettoyage-interieur-voiture"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left block py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-medium text-sm sm:text-base md:text-lg break-words min-w-0"
                  >
                    🧹 Nettoyage intérieur voiture
                  </Link>
                  <Link
                    href="/nettoyage-exterieur-voiture"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left block py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-medium text-sm sm:text-base md:text-lg break-words min-w-0"
                  >
                    🚿 Nettoyage extérieur voiture
                  </Link>
                  <Link
                    href="/nettoyage-complet-voiture"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left block py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-medium text-sm sm:text-base md:text-lg break-words min-w-0"
                  >
                    ✨ Nettoyage complet voiture
                  </Link>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      // Redirection vers la page zones d'intervention
                      window.location.href = '/zone-intervention';
                    }, 100);
                  }}
                  className="w-full text-left block py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-semibold text-sm sm:text-base md:text-lg cursor-pointer break-words min-w-0"
                >
                  Zones d&apos;intervention
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      // Scroll vers la section BeforeAfterTestimonials
                      const testimonialsSection = document.getElementById('testimonials-section');
                      if (testimonialsSection) {
                        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left block py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-semibold text-sm sm:text-base md:text-lg cursor-pointer break-words min-w-0"
                >
                  Avis
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      // Scroll vers la section FAQ
                      const faqSection = document.getElementById('faq-section');
                      if (faqSection) {
                        faqSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left block py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-semibold text-sm sm:text-base md:text-lg cursor-pointer break-words min-w-0"
                >
                  FAQ
                </button>
              </div>

              {/* Contact Section */}
              <div className="pt-3 sm:pt-4 md:pt-6 border-t border-gray-200/50 space-y-2 sm:space-y-3 md:space-y-4">
                <a 
                  href="tel:+32472303701"
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-shine-blue-dark hover:text-shine-blue-primary py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg min-w-0"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base md:text-lg break-words min-w-0">0472 30 37 01</span>
                </a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(handleBooking, 100);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-shine-blue-primary px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-shine-blue-light focus-visible:outline focus-visible:ring-2 focus-visible:ring-shine-blue-primary min-w-0"
                >
                  <span className="break-words min-w-0">Réserver maintenant</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 