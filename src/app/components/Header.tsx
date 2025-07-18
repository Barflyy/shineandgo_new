'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-shine-blue-dark break-words min-w-0">
              Shine&Go
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services-section');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words"
            >
              Services
            </button>
            <button
              onClick={() => {
                const pricingSection = document.getElementById('pricing-section');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words"
            >
              Tarifs
            </button>
            <button
              onClick={() => {
                const zonesSection = document.getElementById('zones-section');
                if (zonesSection) {
                  zonesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words"
            >
              Zones
            </button>
            <button
              onClick={() => {
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
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium break-words min-w-0">0472 30 37 01</span>
            </a>
            <button
              onClick={handleBooking}
              className="inline-flex items-center gap-1 lg:gap-2 rounded-full bg-shine-blue-primary px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm font-semibold text-white shadow-md hover:bg-shine-blue-light focus-visible:outline focus-visible:ring-2 focus-visible:ring-shine-blue-primary min-w-0"
            >
              <span className="break-words min-w-0 hidden lg:inline">Réserver maintenant</span>
              <span className="break-words min-w-0 lg:hidden">Réserver</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-shine-blue-dark hover:text-shine-blue-primary"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-lg z-50">
            <div className="py-4 sm:py-6 px-4 sm:px-6 space-y-4 sm:space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Navigation Links */}
              <div className="space-y-3 sm:space-y-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const servicesSection = document.getElementById('services-section');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left block py-2.5 sm:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-semibold text-base sm:text-lg cursor-pointer break-words min-w-0"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left block py-2.5 sm:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-semibold text-base sm:text-lg cursor-pointer break-words min-w-0"
                >
                  Tarifs
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const zonesSection = document.getElementById('zones-section');
                      if (zonesSection) {
                        zonesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left block py-2.5 sm:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-semibold text-base sm:text-lg cursor-pointer break-words min-w-0"
                >
                  Zones d&apos;intervention
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const testimonialsSection = document.getElementById('testimonials-section');
                      if (testimonialsSection) {
                        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left block py-2.5 sm:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-semibold text-base sm:text-lg cursor-pointer break-words min-w-0"
                >
                  Avis
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const faqSection = document.getElementById('faq-section');
                      if (faqSection) {
                        faqSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left block py-2.5 sm:py-3 px-3 sm:px-4 text-shine-blue-dark hover:text-shine-blue-primary hover:bg-gray-50 rounded-lg font-semibold text-base sm:text-lg cursor-pointer break-words min-w-0"
                >
                  FAQ
                </button>
              </div>

              {/* Contact Section */}
              <div className="pt-4 sm:pt-6 border-t border-gray-200/50 space-y-3 sm:space-y-4">
                <a 
                  href="tel:+32472303701"
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-shine-blue-dark hover:text-shine-blue-primary py-2.5 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg min-w-0"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-base sm:text-lg break-words min-w-0">0472 30 37 01</span>
                </a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(handleBooking, 100);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-shine-blue-primary px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-shine-blue-light focus-visible:outline focus-visible:ring-2 focus-visible:ring-shine-blue-primary min-w-0"
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