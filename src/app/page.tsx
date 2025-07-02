"use client";

import React, { useState } from 'react';
import { Sparkles, Star, Phone, MessageCircle, Clock, MapPin, Shield, Award, Zap, Heart, Users, Info } from 'lucide-react';
import StepByStepDevisSimulator from './components/StepByStepDevisSimulator';
import TransformationsSection from './components/TransformationsSection';

const PremiumCarCleaningLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Marie Dubois",
      text: "Un service absolument exceptionnel ! Ma BMW n'a jamais été ainsi impeccable. Le professionnalisme est remarquable et la ponctualité parfaite.",
      rating: 5,
      car: "BMW Série 5",
      location: "Verviers",
      image: "👩‍💼"
    },
    {
      name: "Pierre Martin",
      text: "Travail extraordinaire sur ma Porsche. Il a littéralement redonné une seconde jeunesse à l'intérieur cuir. Je recommande les yeux fermés !",
      rating: 5,
      car: "Porsche Cayenne",
      location: "Spa",
      image: "👨‍💼"
    },
    {
      name: "Sophie Laurent",
      text: "Enfin un service à la hauteur de mes attentes les plus élevées. Le résultat est tout simplement parfait, je suis absolument conquise !",
      rating: 5,
      car: "Audi Q7",
      location: "Dison",
      image: "👩‍🦱"
    }
  ];

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Témoignages', href: '#temoignages' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Header mobile-first
  const Header = () => {
    return (
      <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo simplifié */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('#accueil')}>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Shine&Go
              </span>
            </div>

            {/* Navigation Desktop - Épurée */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
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

            {/* Menu Mobile - Minimaliste */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Menu mobile"
            >
              <div className="w-5 h-5 relative">
                <span className={`absolute top-1 left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'
                }`}></span>
                <span className={`absolute top-1/2 left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute bottom-1 left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu Mobile - Épuré */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-slate-900/98 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-2 mb-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left text-base font-medium text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              <div className="space-y-3">
                <a
                  href="https://wa.me/32472303701"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-base font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Direct</span>
                </a>
                <a
                  href="tel:+32472303701"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-base font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appel Direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <div className="min-h-screen text-white bg-slate-900">
      {/* Header */}
      <Header />

      {/* Hero Section - Mobile-first */}
      <section id="accueil" className="pt-16 min-h-screen flex items-center justify-center relative">
        {/* Background subtil */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Votre Véhicule
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mérite l&apos;Excellence
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Service premium d&apos;excellence en nettoyage automobile. Votre véhicule mérite le meilleur traitement avec mes prestations haut de gamme à Herve et dans la région.
          </p>

          {/* CTA Buttons - Mobile-first */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
            <a 
              href="https://wa.me/32472303701"
              className="bg-green-500 hover:bg-green-600 px-6 md:px-8 py-4 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Direct</span>
            </a>
            
            <a 
              href="tel:+32472303701"
              className="bg-blue-500 hover:bg-blue-600 px-6 md:px-8 py-4 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>Appel Direct</span>
            </a>
          </div>

          {/* Preuves sociales - Minimalistes */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>50+ clients satisfaits</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>5/5 sur Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section id="transformations" className="py-8 md:py-16">
        <TransformationsSection />
      </section>

      {/* Devis Simulator Section */}
      <section id="services" className="py-8 md:py-16">
        <StepByStepDevisSimulator />
      </section>

      {/* About Section - Mobile-first */}
      <section id="apropos" className="py-8 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-3 md:px-4 py-2 mb-4 md:mb-6">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">À propos de Shine&Go</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Le soin auto <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">haut de gamme</span>
                <br />
                <span className="text-white">directement chez vous</span>
              </h2>
            </div>

            {/* Content Grid - Mobile-first */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Carte 1 - Excellence Premium */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Excellence Premium</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Chez Shine&Go, nous transformons chaque véhicule en véritable vitrine de propreté. 
                  Installés à Herve, nous intervenons chez vous avec des produits haut de gamme (Koch Chemie, CarPro, P&S) et un savoir-faire professionnel.
                </p>
              </div>

              {/* Carte 2 - Confort Total */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-3 rounded-lg mr-4">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Confort Total</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Nous ne faisons pas juste &quot;un lavage&quot;, nous redonnons à votre voiture l&apos;éclat qu&apos;elle mérite, avec un souci du détail qui fait toute la différence. 
                  Que ce soit pour un nettoyage complet ou un entretien régulier, vous êtes entre de bonnes mains.
                </p>
              </div>

              {/* Carte 3 - Notre Mission */}
              <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <span className="text-xl md:text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Notre Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Un résultat irréprochable, sans compromis, sans perte de temps pour vous. 
                  Nous nous engageons à fournir un service premium qui dépasse vos attentes.
                </p>
              </div>

              {/* Carte 4 - Zones Desservies */}
              <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-3 rounded-lg mr-4">
                    <span className="text-xl md:text-2xl">📍</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Zones Desservies</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Herve, Battice, Liège, Verviers, Aubel, Soumagne et alentours. 
                  Service à domicile premium dans toute la région pour votre confort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages - Mobile-first */}
      <section id="temoignages" className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expérience Premium
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Découvrez les témoignages de mes clients satisfaits qui ont vécu l&apos;expérience Shine&Go premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl md:text-3xl mr-3 md:mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-blue-400 text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-gray-400">{testimonial.car}</div>
                    <div className="text-xs text-gray-500 flex items-center mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed text-sm md:text-base">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile-first */}
      <section id="contact" className="py-8 md:py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 md:px-4 py-2 mb-4 md:mb-6">
            <Phone className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Service Premium</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            Prêt à <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Découvrir</span> l&apos;Excellence ?
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Contactez-moi dès maintenant pour un devis personnalisé gratuit et vivez l&apos;expérience Shine&Go premium
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a 
              href="https://wa.me/32472303701"
              className="bg-green-500 hover:bg-green-600 px-6 md:px-8 py-4 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Direct</span>
            </a>
            
            <a 
              href="tel:+32472303701"
              className="bg-blue-500 hover:bg-blue-600 px-6 md:px-8 py-4 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>+32 472 30 37 01</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Mobile-first */}
      <footer className="bg-slate-800 py-8 md:py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            
            {/* Logo et Description */}
            <div>
              <div className="mb-4">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Shine&Go
                </span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Service premium d&apos;excellence en nettoyage automobile. Votre véhicule mérite le meilleur traitement avec mes prestations haut de gamme à Herve et dans la région.
              </p>
              
              <div className="flex items-center space-x-3">
                <a 
                  href="https://wa.me/32472303701"
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="tel:+32472303701"
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Mes Services</span>
              </h3>
              <ul className="space-y-2">
                {[
                  'Deep Clean Premium',
                  'Maintenance Wash',
                  'Détail Extérieur',
                  'Nettoyage Intérieur',
                  'Traitement Hydrophobe'
                ].map((service, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Informations */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Info className="w-4 h-4 text-blue-400" />
                <span>Informations</span>
              </h3>
              <ul className="space-y-2">
                {[
                  { icon: Clock, text: '7j/7 • 8h-20h' },
                  { icon: MapPin, text: 'Herve & Région' },
                  { icon: Shield, text: 'Garantie 100%' },
                  { icon: Zap, text: 'Intervention 2h' },
                  { icon: Award, text: 'Service Premium' }
                ].map((info, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                    <info.icon className="w-4 h-4 text-blue-400" />
                    <span>{info.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Shine&Go Premium • Rue Moreau, 20, 4650 Herve • +32 472 30 37 01
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button - Mobile-optimized */}
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
        <a 
          href="https://wa.me/32472303701"
          className="bg-green-500 hover:bg-green-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
          aria-label="Contact WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </a>
      </div>
    </div>
  );
};

export default PremiumCarCleaningLanding;