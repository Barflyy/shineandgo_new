'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

// Header Component intégré
function NettoyageCompletHeader() {
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
                        <div className="text-sm text-gray-500">Aspiration et protection UV</div>
                      </div>
                    </Link>
                    <Link
                      href="/nettoyage-exterieur-voiture"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      role="menuitem"
                      aria-label="Nettoyage extérieur voiture - Lavage à la main"
                    >
                      <span className="text-lg" aria-hidden="true">🚗</span>
                      <div>
                        <div className="font-medium">Nettoyage extérieur</div>
                        <div className="text-sm text-gray-500">Lavage à la main</div>
                      </div>
                    </Link>
                    <Link
                      href="/nettoyage-complet-voiture"
                      className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      role="menuitem"
                      aria-label="Nettoyage complet voiture - Intérieur + Extérieur"
                    >
                      <span className="text-lg" aria-hidden="true">✨</span>
                      <div>
                        <div className="font-medium">Nettoyage complet</div>
                        <div className="text-sm text-blue-500">Intérieur + Extérieur</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-expanded={isMobileMenuOpen}
            aria-label="Menu mobile"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Services</h3>
                <Link
                  href="/nettoyage-interieur-voiture"
                  className="flex items-center gap-3 py-2 text-slate-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg">🧹</span>
                  <span>Nettoyage intérieur</span>
                </Link>
                <Link
                  href="/nettoyage-exterieur-voiture"
                  className="flex items-center gap-3 py-2 text-slate-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg">🚗</span>
                  <span>Nettoyage extérieur</span>
                </Link>
                <Link
                  href="/nettoyage-complet-voiture"
                  className="flex items-center gap-3 py-2 text-blue-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg">✨</span>
                  <span>Nettoyage complet</span>
                </Link>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Navigation</h3>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const testimonialsSection = document.getElementById('testimonials-section');
                    if (testimonialsSection) {
                      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center gap-3 py-2 text-slate-700 hover:text-blue-600 w-full text-left"
                >
                  <span>Avis</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const faqSection = document.getElementById('faq-section');
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center gap-3 py-2 text-slate-700 hover:text-blue-600 w-full text-left"
                >
                  <span>FAQ</span>
                </button>
              </div>
              


              <div className="pt-4">
                <button
                  onClick={handleBooking}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Phone className="w-4 h-4" />
                  Réserver maintenant
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ScrollProgress Component intégré
function NettoyageCompletScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

// Footer Component intégré
function NettoyageCompletFooter() {
  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go', '_blank', 'noopener,noreferrer');
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
        <div className="text-center mb-16 footer-cta">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 md:p-12 shadow-lg">
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-600 shadow-lg mb-6">
                <div className="text-2xl">🚗</div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Votre voiture mérite le meilleur
              </h3>
              
              {/* Description */}
              <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Shine&Go – Service Premium Car Care
              </p>
              
              {/* CTA Button - Mobile Optimized */}
              <button
                onClick={handleBooking}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="text-xl">📅</div>
                Réserver maintenant
                <div className="text-xl">→</div>
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
                <div className="text-xl">✨</div>
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
              <div className="text-xl">🚗</div>
              Services
            </h4>
            
            <ul className="space-y-3">
              <li>
                <a
                  href="/nettoyage-interieur-voiture"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🧹</span>
                  </div>
                  <span className="text-sm">Nettoyage intérieur voiture</span>
                </a>
              </li>
              <li>
                <a
                  href="/nettoyage-exterieur-voiture"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🚗</span>
                  </div>
                  <span className="text-sm">Nettoyage extérieur voiture</span>
                </a>
              </li>
              <li>
                <a
                  href="/nettoyage-complet-voiture"
                  className="flex items-center gap-3 text-blue-400 font-medium"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm">✨</span>
                  </div>
                  <span className="text-sm">Nettoyage complet voiture</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
            
            <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
              <div className="text-xl">📞</div>
              Contact
            </h4>
            
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+32472303701"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <div className="text-sm">📞</div>
                  </div>
                  <span className="text-sm">+32 472 30 37 01</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/32472303701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <div className="text-sm">📱</div>
                  </div>
                  <span className="text-sm">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@shineandgo.be"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <div className="text-sm">📧</div>
                  </div>
                    <span className="text-sm">contact@shineandgo.be</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2026 Shine&Go. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FAQCompletSectionInline() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "Quel est le tarif d'un nettoyage intérieur et extérieur voiture ?",
      answer: "Nos tarifs varient selon le type de véhicule et l'état de saleté. À partir de 120€ pour une citadine, 140€ pour une berline, 160€ pour un break, 170€ pour un SUV/4x4, 190€ pour un monospace et 220€ pour un utilitaire. Devis gratuit et personnalisé disponible."
    },
    {
      question: "Combien de temps dure un lavage complet voiture ?",
      answer: "La durée varie selon le type de véhicule et l'état de saleté. En général, une intervention complète prend entre 60 et 90 minutes. Nous prenons le temps nécessaire pour un résultat showroom garanti."
    },
    {
      question: "Intervenez-vous sur tous types de véhicules (SUV, utilitaires, 7 places) ?",
      answer: "Oui, nous intervenons sur tous types de véhicules : citadines, berlines, breaks, SUV, 4x4, monospaces, utilitaires et véhicules 7 places. Nos tarifs s'adaptent au type de véhicule."
    },
    {
      question: "Quels produits utilisez-vous ?",
      answer: "Nous utilisons exclusivement des produits professionnels haut de gamme Koch-Chemie pour garantir un résultat optimal et protéger votre véhicule. Tous nos produits sont respectueux de l'environnement et de votre carrosserie."
    },
    {
      question: "Proposez-vous un lavage voiture à la main ou avec rouleaux ?",
      answer: "Nous utilisons exclusivement un lavage à la main pour préserver votre carrosserie et garantir un résultat optimal. Aucun rouleau ou machine automatique n'est utilisé, uniquement des techniques manuelles professionnelles."
    },
    {
      question: "Intervenez-vous dans toute la Wallonie ?",
      answer: "Oui, nous intervenons dans toute la Wallonie avec un déplacement gratuit jusqu'à 25 km. Au-delà, un supplément peut s'appliquer selon la distance. Contactez-nous pour vérifier la disponibilité dans votre zone."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20"
            aria-expanded={openItems.includes(index)}
            aria-controls={`faq-answer-${index}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-900 pr-4">
                {item.question}
              </h3>
              <span className="text-slate-400 text-2xl font-light">
                {openItems.includes(index) ? '−' : '+'}
              </span>
            </div>
          </button>
          {openItems.includes(index) && (
            <div
              id={`faq-answer-${index}`}
              className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 mt-2 shadow-lg relative z-20"
            >
              <p className="text-slate-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function NettoyageCompletClient() {
  return (
    <div className="bg-white">
      <NettoyageCompletHeader />
      <NettoyageCompletScrollProgress />
      
      <main>
        {/* Hero Section */}
        <section className="snap-start min-h-svh w-full relative">
          <div className="relative min-h-screen flex items-center justify-center bg-white">
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                👉 Nettoyage complet voiture à domicile – Lavage auto premium
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Votre véhicule a besoin d'un lavage intérieur et extérieur de qualité ? Shine&Go vous propose un nettoyage complet de voiture, directement chez vous, avec des produits professionnels haut de gamme. ✨ Résultat showroom garanti en une seule intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/32472303701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  📲 Recevoir un devis gratuit en 2 minutes – WhatsApp
                </a>
                <a
                  href="https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20un%20devis%20gratuit%20pour%20un%20nettoyage%20complet%20voiture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  Devis gratuit
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Pourquoi choisir un nettoyage complet */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Pourquoi choisir un nettoyage complet voiture ?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Un nettoyage complet voiture combine le meilleur des deux mondes : intérieur sain, sans poussière ni mauvaises odeurs et extérieur éclatant, carrosserie protégée et brillante.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20">
                <div className="text-center">
                  <div className="text-3xl mb-3">😊</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Plus de confort au quotidien</h3>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20">
                <div className="text-center">
                  <div className="text-3xl mb-3">✨</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Meilleure image et fierté de conduire</h3>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20">
                <div className="text-center">
                  <div className="text-3xl mb-3">💎</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Valeur de revente préservée</h3>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20">
                <div className="text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Gain de temps (tout est fait en 1 passage à domicile)</h3>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-slate-700 italic">
                Un nettoyage intérieur et extérieur voiture régulier, effectué à la main par des professionnels, permet de prolonger la durée de vie de votre véhicule.
              </p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Avant/Après Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Avant/Après : La transformation
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Chaque voiture est métamorphosée grâce à notre lavage complet intérieur + extérieur.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 relative z-20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">🚗 AVANT</h3>
                  <p className="text-slate-600">Habitacle sale, carrosserie terne</p>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Intérieur poussiéreux et malodorant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Carrosserie terne et sans éclat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Vitres sales et ternes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Jantes encrassées</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 relative z-20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">✨ APRÈS</h3>
                  <p className="text-slate-600">Intérieur frais et désinfecté, extérieur brillant comme neuf</p>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Habitacle frais et désinfecté</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Carrosserie brillante et éclatante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Vitres nettes et transparentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Jantes impeccables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Tarifs Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Tarifs – Nettoyage complet voiture
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Tarifs transparents selon le type de véhicule et l'état de saleté. Devis gratuit et personnalisé.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 mb-8 relative z-20" >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Niveaux de saleté :</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-white border border-green-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🟢</span>
                  <p className="font-semibold">Léger</p>
                  <p className="text-sm text-slate-600">Entretien régulier</p>
                </div>
                <div className="text-center p-3 bg-white border border-yellow-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🟡</span>
                  <p className="font-semibold">Moyen</p>
                  <p className="text-sm text-slate-600">Quelques taches, salissures visibles</p>
                </div>
                <div className="text-center p-3 bg-white border border-red-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🔴</span>
                  <p className="font-semibold">Encrassé</p>
                  <p className="text-sm text-slate-600">Véhicule négligé, préparation vente</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Tarifs par type de véhicule :</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🚗</span>
                  <p className="font-bold">Citadine</p>
                  <p className="text-lg font-semibold text-blue-600">79 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🚙</span>
                  <p className="font-bold">Berline</p>
                  <p className="text-lg font-semibold text-blue-600">89 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🚗</span>
                  <p className="font-bold">Break</p>
                  <p className="text-lg font-semibold text-blue-600">99 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🚐</span>
                  <p className="font-bold">SUV / 4x4</p>
                  <p className="text-lg font-semibold text-blue-600">109 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🚐</span>
                  <p className="font-bold">Monospace</p>
                  <p className="text-lg font-semibold text-blue-600">119 €</p>
                </div>
                <div className="text-center p-4 bg-white border border-blue-200 rounded-lg relative z-20" >
                  <span className="text-2xl">🚚</span>
                  <p className="font-bold">Utilitaire</p>
                  <p className="text-lg font-semibold text-blue-600">129 €</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 relative z-20" >
                <h4 className="text-lg font-bold text-slate-900 mb-4">Ce qui est inclus :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Intérieur :</h5>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Aspiration complète</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Nettoyage plastiques + dressing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Vitres intérieures</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Extérieur :</h5>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Prélavage mousse active</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Lavage à la main</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Vitres extérieures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Jantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Protection hydrophobe</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                  📲 Demander mon tarif personnalisé (gratuit)
                </button>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Comment ça se passe */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Comment ça se passe ?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                💡 Fini les déplacements en station : Shine&Go, c'est un service mobile premium rapide et pratique.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 mb-8 relative z-20" >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Vous faites votre demande</h3>
                  <p className="text-slate-600">En ligne ou par WhatsApp</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nous vous confirmons</h3>
                  <p className="text-slate-600">Un devis et un créneau sous 24h</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nous intervenons</h3>
                  <p className="text-slate-600">À domicile avec tout le matériel nécessaire</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm relative z-20" >
                <h4 className="text-lg font-bold text-slate-900 mb-4">Inclus dans le service :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Déplacement gratuit ≤ 25 km</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Produits professionnels haut de gamme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Intervention en 60-90 min selon le véhicule</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Paiement uniquement après validation du résultat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Garantie satisfaction ou retouche offerte</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Testimonials Section */}
        <section id="testimonials-section" className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
                Avis clients
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
                Découvrez ce que nos clients disent de notre service de nettoyage complet.
              </p>
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-2xl">★★★★★</span>
                  <span className="ml-2 text-lg font-semibold text-slate-900">4.9</span>
                  <span className="ml-1 text-slate-600">/5 sur Google</span>
                </div>
              </div>
            </div>

            {/* Avis clients */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  stars: "★★★★★",
                  time: "Il y a 2 semaines",
                  text: "Mon SUV n'avait jamais été aussi propre. L'intérieur est impeccable et l'extérieur brille comme au premier jour. Service super pratique et pro !",
                  name: "Julie K.",
                  city: "Liège",
                  initial: "J",
                  color: "blue"
                },
                {
                  stars: "★★★★★",
                  time: "Il y a 1 mois",
                  text: "Nettoyage complet parfait, ponctuels et très soignés. L'intérieur et l'extérieur sont comme neufs. Je recommande sans hésiter.",
                  name: "Alexandre T.",
                  city: "Verviers",
                  initial: "A",
                  color: "green"
                },
                {
                  stars: "★★★★★",
                  time: "Il y a 3 semaines",
                  text: "Parfait pour préparer la vente de ma voiture. Intérieur et extérieur étaient négligés, maintenant c'est un véhicule de showroom. Service mobile très pratique.",
                  name: "Caroline F.",
                  city: "Herve",
                  initial: "C",
                  color: "purple"
                },
                {
                  stars: "★★★★★",
                  time: "Il y a 2 mois",
                  text: "Équipe ponctuelle et professionnelle. Mon break familial était sale partout. Maintenant c'est propre et brillant de partout. Je recommande !",
                  name: "Guillaume H.",
                  city: "Soumagne",
                  initial: "G",
                  color: "orange"
                },
                {
                  stars: "★★★★★",
                  time: "Il y a 1 semaine",
                  text: "Résultat impressionnant sur mon SUV. Intérieur frais et désinfecté, extérieur brillant avec protection hydrophobe. Très satisfait !",
                  name: "Émilie V.",
                  city: "Battice",
                  initial: "É",
                  color: "red"
                },
                {
                  stars: "★★★★★",
                  time: "Il y a 3 jours",
                  text: "Service rapide et efficace. Mon utilitaire était sale partout après des travaux. Maintenant il est comme neuf. Excellent rapport qualité-prix.",
                  name: "Raphaël S.",
                  city: "Spa",
                  initial: "R",
                  color: "indigo"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <span>{testimonial.stars}</span>
                    </div>
                    <span className="ml-2 text-sm text-slate-500">{testimonial.time}</span>
                  </div>
                  <p className="text-slate-700 mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 bg-${testimonial.color}-100 rounded-full flex items-center justify-center mr-3`}>
                      <span className={`text-${testimonial.color}-600 font-semibold`}>{testimonial.initial}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-lg text-slate-700 mb-4">
                📲 Rejoignez nos 500+ clients satisfaits – Recevez votre devis gratuit aujourd'hui.
              </p>
              <a
                href="https://wa.me/32472303701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl"
              >
                📱 Recevoir mon devis gratuit
              </a>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile" id="faq-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-4">
                FAQ – Nettoyage complet voiture
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Questions fréquentes sur notre service de nettoyage complet voiture à domicile
              </p>
            </div>

            <FAQCompletSectionInline />
          </div>
        </section>
      </main>

      <NettoyageCompletFooter />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Nettoyage complet de voiture à domicile",
            "description": "Service de nettoyage complet intérieur et extérieur de voiture à domicile en Wallonie",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Shine&Go",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Wallonie",
                "addressCountry": "BE"
              },
              "telephone": "+32472303701"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Wallonie"
            },
            "offers": {
              "@type": "Offer",
              "price": "120",
              "priceCurrency": "EUR",
              "description": "Nettoyage complet voiture à domicile"
            }
          })
        }}
      />
    </div>
  )
} 