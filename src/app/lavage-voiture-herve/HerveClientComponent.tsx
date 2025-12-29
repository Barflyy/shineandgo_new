'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function HerveClientComponent() {
  // --- ÉTATS GLOBAUX ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openItems, setOpenItems] = useState<number[]>([]); // Pour la FAQ

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    try {
      window.open('https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20r%C3%A9server%20un%20nettoyage%20voiture%20%C3%A0%20Herve', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture WhatsApp:', error);
    }
  };

  // --- DATA FAQ ---
  const faqItems = [
    {
      question: "Quel est le tarif d'un nettoyage voiture à Herve ?",
      answer: "Nos tarifs démarrent à 65€ pour un nettoyage intérieur. Un supplément s'applique selon la taille du véhicule. Devis gratuit et personnalisé disponible."
    },
    {
      question: "Combien de temps dure un nettoyage voiture ?",
      answer: "La durée varie selon le type de véhicule et l'état de saleté. En général, une intervention prend entre 45 et 90 minutes. Nous prenons le temps nécessaire pour un résultat optimal."
    },
    {
      question: "Quels produits utilisez-vous ?",
      answer: "Nous utilisons exclusivement des produits professionnels haut de gamme Koch-Chemie pour garantir un résultat optimal et protéger votre véhicule. Tous nos produits sont respectueux de l'environnement et de vos matériaux."
    },
    {
      question: "Faut-il que je sois présent pendant l'intervention ?",
      answer: "Non, vous pouvez nous confier vos clés et vaquer à vos occupations. Nous vous prévenons dès que le travail est terminé et vous pouvez vérifier le résultat."
    },
    {
      question: "Intervenez-vous dans toute la région de Herve ?",
      answer: "Oui, nous intervenons dans toute la région de Herve (Battice, Thimister, Clermont, etc.) avec un déplacement gratuit jusqu'à 25 km. Au-delà, un supplément peut s'appliquer selon la distance. Contactez-nous pour vérifier la disponibilité dans votre zone."
    },
    {
      question: "Que faire si je ne suis pas satisfait ?",
      answer: "Votre satisfaction est notre priorité. Si le résultat ne vous convient pas, nous effectuons gratuitement les retouches nécessaires jusqu'à votre entière satisfaction."
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
    <div className="bg-white">
      {/* --- SCROLL PROGRESS --- */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* --- HEADER --- */}
      <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur-lg border-b border-slate-200/70 pt-4 ${isScrolled ? 'bg-white/80 shadow-sm' : 'bg-white/95'}`}>
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
                        href="/lavage-interieur-voiture"
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
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md"
                        onClick={() => setIsServicesDropdownOpen(false)}
                        role="menuitem"
                        aria-label="Nettoyage complet voiture - Intérieur + Extérieur"
                      >
                        <span className="text-lg" aria-hidden="true">✨</span>
                        <div>
                          <div className="font-medium">Nettoyage complet</div>
                          <div className="text-sm text-gray-500">Intérieur + Extérieur</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
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
                    href="/lavage-interieur-voiture"
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
                    className="flex items-center gap-3 py-2 text-slate-700 hover:text-blue-600"
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

      {/* --- MAIN --- */}
      <main>
        {/* --- HERO SECTION --- */}
        <section className="snap-start min-h-svh w-full relative">
          <div className="relative min-h-screen flex items-center justify-center bg-white">
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Nettoyage Voiture Premium Herve | En 90min dès 65€
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Vous cherchez un <strong>nettoyage voiture à Herve</strong> ? Shine&Go, spécialiste du 
                <strong> lavage voiture mobile</strong>, intervient chez vous à Herve, Battice, Thimister et Clermont. 
                Notre <strong>service mobile premium</strong> à domicile utilise des produits exclusifs Koch-Chemie. 
                ✨ Résultat showroom garanti.
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
                  href="https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20un%20devis%20gratuit%20pour%20un%20nettoyage%20voiture%20%C3%A0%20Herve"
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

        {/* --- FAQ SECTION --- */}
        <section id="faq-section" className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-4">
                FAQ – Nettoyage voiture Herve
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Questions fréquentes sur notre service de nettoyage voiture à domicile à Herve
              </p>
            </div>

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
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="relative py-16 md:py-24 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 footer-cta">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 md:p-12 shadow-lg">
                
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-600 shadow-lg mb-6">
                  <div className="text-2xl">🚗</div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Votre voiture mérite le meilleur
                </h3>
                
                <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Shine&Go – Service Premium Car Care
                </p>
                
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
              
              <div className="mb-4">
                <h4 className="font-black text-2xl mb-2 text-white">
                  Shine&Go
                </h4>
                <div className="flex items-center gap-2 text-blue-400">
                  <div className="text-xl">✨</div>
                  <span className="text-sm font-medium">Service Premium Car Care</span>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-sm">
                Lavage voiture à domicile en Wallonie.
                <br />
                Résultat showroom garanti en 90 min.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
              
              <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                <div className="text-xl">🚗</div>
                Services
              </h4>
              
              <ul className="space-y-3">
                <li>
                  <a
                    href="/lavage-interieur-voiture"
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
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-sm">✨</span>
                    </div>
                    <span className="text-sm">Nettoyage complet voiture</span>
                  </a>
                </li>
              </ul>
            </div>

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

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 Shine&Go. Tous droits réservés.
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
    </div>
  );
}

