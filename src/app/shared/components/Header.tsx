'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  isNettoyageInterieurPage?: boolean;
  isNettoyageExterieurPage?: boolean;
  isNettoyageCompletPage?: boolean;
  isHomePage?: boolean;
}

export default function Header({
  isNettoyageInterieurPage = false,
  isNettoyageExterieurPage = false,
  isNettoyageCompletPage = false,
  isHomePage = false
}: HeaderProps) {
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
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-lg border-b border-slate-200/70 pt-4 ${
        isScrolled 
          ? 'bg-white/80 shadow-sm' 
          : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0" aria-label="Retour à l'accueil - Shine&Go">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-700 break-words min-w-0">
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsServicesDropdownOpen(!isServicesDropdownOpen);
                  }
                  if (e.key === 'Escape') {
                    setIsServicesDropdownOpen(false);
                  }
                }}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
                aria-label="Menu des services"
                className="flex items-center gap-1 text-blue-700 hover:text-blue-600 font-medium cursor-pointer break-words focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50"
                  role="menu"
                  aria-label="Services disponibles"
                >
                  <div className="py-2">
                    <Link
                      href="/nettoyage-interieur-voiture"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      role="menuitem"
                      aria-label="Nettoyage intérieur voiture - Aspiration et protection UV"
                    >
                      <span className="text-lg" aria-hidden="true">🧹</span>
                      <div>
                        <div className="font-medium">Nettoyage intérieur</div>
                        <div className="text-sm text-gray-500">Aspiration & protection UV</div>
                      </div>
                    </Link>
                    <Link
                      href="/nettoyage-exterieur-voiture"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      role="menuitem"
                      aria-label="Nettoyage extérieur voiture - Carrosserie et protection"
                    >
                      <span className="text-lg" aria-hidden="true">🚿</span>
                      <div>
                        <div className="font-medium">Nettoyage extérieur</div>
                        <div className="text-sm text-gray-500">Carrosserie & protection</div>
                      </div>
                    </Link>
                    <Link
                      href="/nettoyage-complet-voiture"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      role="menuitem"
                      aria-label="Nettoyage complet voiture - Intérieur et extérieur"
                    >
                      <span className="text-lg" aria-hidden="true">✨</span>
                      <div>
                        <div className="font-medium">Nettoyage complet</div>
                        <div className="text-sm text-gray-500">Intérieur + extérieur</div>
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>
            {isHomePage && (
              <>
                <button
                  onClick={() => {
                    // Scroll vers la section BeforeAfterTestimonials
                    const testimonialsSection = document.getElementById('testimonials-section');
                    if (testimonialsSection) {
                      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const testimonialsSection = document.getElementById('testimonials-section');
                      if (testimonialsSection) {
                        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  aria-label="Aller à la section avis clients"
                  className="text-blue-700 hover:text-blue-600 font-medium cursor-pointer break-words focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const faqSection = document.getElementById('faq-section');
                      if (faqSection) {
                        faqSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  aria-label="Aller à la section questions fréquentes"
                  className="text-blue-700 hover:text-blue-600 font-medium cursor-pointer break-words focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  FAQ
                </button>
              </>
            )}
            {!isHomePage && (
              <>
                <button
                  onClick={() => {
                    // Scroll vers la section avis clients sur les pages de services
                    const testimonialsSection = document.getElementById('testimonials-section');
                    if (testimonialsSection) {
                      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const testimonialsSection = document.getElementById('testimonials-section');
                      if (testimonialsSection) {
                        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  aria-label="Aller à la section avis clients"
                  className="text-blue-700 hover:text-blue-600 font-medium cursor-pointer break-words focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  Avis
                </button>
                <button
                  onClick={() => {
                    // Scroll vers la section FAQ sur les pages de services
                    const faqSection = document.getElementById('faq-section');
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const faqSection = document.getElementById('faq-section');
                      if (faqSection) {
                        faqSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  aria-label="Aller à la section questions fréquentes"
                  className="text-blue-700 hover:text-blue-600 font-medium cursor-pointer break-words focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  FAQ
                </button>
              </>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a 
              href="tel:+32472303701"
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-600 min-w-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Appeler Shine&Go au 0472 30 37 01"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
              <span className="font-medium break-words min-w-0 text-sm sm:text-base">0472 30 37 01</span>
            </a>
            <button
              onClick={handleBooking}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleBooking();
                }
              }}
              aria-label="Réserver un nettoyage voiture maintenant"
              className="inline-flex items-center gap-1 lg:gap-2 rounded-full bg-blue-600 px-2.5 sm:px-3 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-xs lg:text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 min-w-0"
            >
              <span className="break-words min-w-0 hidden lg:inline">Réserver maintenant</span>
              <span className="break-words min-w-0 lg:hidden">Réserver</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }
            }}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu mobile" : "Ouvrir le menu mobile"}
            className="lg:hidden p-1 sm:p-1.5 md:p-2 text-blue-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-lg z-50">
            <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 space-y-4 sm:space-y-6 md:space-y-8 max-h-[85vh] overflow-y-auto">
              {/* Navigation Links */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {/* Services Section */}
                <div className="space-y-2">
                  <div className="px-3 sm:px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Services
                  </div>
                  <Link
                    href="/nettoyage-interieur-voiture"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left block py-4 px-4 text-blue-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium text-base break-words min-w-0 min-h-[52px] flex items-center transition-colors duration-200"
                  >
                    🧹 Nettoyage intérieur voiture
                  </Link>
                  <Link
                    href="/nettoyage-exterieur-voiture"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left block py-4 px-4 text-blue-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium text-base break-words min-w-0 min-h-[52px] flex items-center transition-colors duration-200"
                  >
                    🚿 Nettoyage extérieur voiture
                  </Link>
                  <Link
                    href="/nettoyage-complet-voiture"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left block py-4 px-4 text-blue-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium text-base break-words min-w-0 min-h-[52px] flex items-center transition-colors duration-200"
                  >
                    ✨ Nettoyage complet voiture
                  </Link>

                </div>
                {isHomePage && (
                  <>
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
                      className="w-full text-left block py-4 px-4 text-blue-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-semibold text-base cursor-pointer break-words min-w-0 min-h-[52px] flex items-center transition-colors duration-200"
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
                      className="w-full text-left block py-4 px-4 text-blue-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-semibold text-base cursor-pointer break-words min-w-0 min-h-[52px] flex items-center transition-colors duration-200"
                    >
                      FAQ
                    </button>
                  </>
                )}
                {!isHomePage && (
                  <>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setTimeout(() => {
                          // Scroll vers la section avis clients sur les pages de services
                          const testimonialsSection = document.getElementById('testimonials-section');
                          if (testimonialsSection) {
                            testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className="w-full text-left block py-4 px-4 text-blue-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-semibold text-base cursor-pointer break-words min-w-0 min-h-[52px] flex items-center transition-colors duration-200"
                    >
                      Avis
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setTimeout(() => {
                          // Scroll vers la section FAQ sur les pages de services
                          const faqSection = document.getElementById('faq-section');
                          if (faqSection) {
                            faqSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className="w-full text-left block py-4 px-4 text-blue-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-semibold text-base cursor-pointer break-words min-w-0 min-h-[52px] flex items-center transition-colors duration-200"
                    >
                      FAQ
                    </button>
                  </>
                )}
              </div>

              {/* Contact Section */}
              <div className="pt-4 sm:pt-6 md:pt-8 border-t border-gray-200/50 space-y-3 sm:space-y-4 md:space-y-5">
                <a 
                  href="tel:+32472303701"
                  className="flex items-center justify-center space-x-3 text-blue-700 hover:text-blue-600 py-4 px-4 bg-gray-50 rounded-lg min-w-0 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-base sm:text-lg break-words min-w-0">0472 30 37 01</span>
                </a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(handleBooking, 100);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 sm:px-6 md:px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500 min-w-0 transition-colors duration-200"
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