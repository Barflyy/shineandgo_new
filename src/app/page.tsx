"use client";

import React from 'react';
import { Sparkles, Star, Phone, MessageCircle, Clock, MapPin, Shield, Award, Zap, Heart, Users, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import StepByStepDevisSimulator from './components/StepByStepDevisSimulator';
import TransformationsSection from './components/TransformationsSection';

const PremiumCarCleaningLanding = () => {
  const testimonials = [
    { name: 'Jean D.', rating: 5, text: 'Service impeccable, ma voiture n’a jamais été aussi propre !' },
    { name: 'Sophie L.', rating: 5, text: 'Très pratique à domicile, résultat premium, je recommande.' },
    { name: 'Marc V.', rating: 4, text: 'Ponctuel, efficace et très pro. Merci Shine&Go !' },
    { name: 'Claire P.', rating: 5, text: 'Un vrai souci du détail, intérieur comme neuf.' },
    { name: 'Olivier G.', rating: 5, text: 'Top qualité, produits haut de gamme, super expérience.' }
  ];
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  
  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Devis', href: '#services' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Témoignages', href: '#temoignages' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
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
      <header className="w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo simplifié */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('#accueil')}>
              <span className="text-xl font-bold text-white">
                Shine&Go
              </span>
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

            {/* Menu Mobile - Amélioré */}
            {/* SUPPRIMÉ : Pas de menu mobile */}
          </div>
        </div>

        {/* Menu Mobile - Amélioré */}
        {/* SUPPRIMÉ : Pas de menu mobile */}
      </header>
    );
  };

  return (
    <div className="min-h-screen text-white bg-slate-900">
      {/* Header */}
      <Header />

      {/* Hero Section - Mobile-first */}
      <section id="accueil" className="min-h-[80vh] md:min-h-[85vh] flex items-center justify-center relative">
        {/* Background subtil */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight text-white">
            Votre Véhicule<br />
            Mérite l&apos;Excellence
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Service premium d&apos;excellence en nettoyage automobile. Votre véhicule mérite le meilleur traitement avec mes prestations haut de gamme à Herve et dans la région.
          </p>

          {/* CTA Buttons - Mobile-first */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-10">
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


            {/* Content Grid - Mobile-first */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Carte 1 - Excellence Premium */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                <div className="flex items-center mb-6">
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
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                <div className="flex items-center mb-6">
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
              <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-500/20">
                <div className="flex items-center mb-6">
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
              <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-green-500/20">
                <div className="flex items-center mb-6">
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
          {/* Carrousel d'avis */}
          <div className="relative max-w-lg mx-auto">
            {/* Bouton précédent */}
            <button
              onClick={() => setCurrentTestimonial((c) => (c - 1 + testimonials.length) % testimonials.length)}
              aria-label="Avis précédent"
              className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 shadow-lg transition-colors duration-200 flex items-center justify-center"
              style={{transform: 'translateY(-50%)'}}
            >
              <ChevronLeft className="w-6 h-6 text-blue-400" />
            </button>
            {/* Carte d'avis */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-xl text-center mx-8 animate-fade-in h-60 md:h-56 flex flex-col justify-center overflow-y-auto">
              <div className="font-bold text-blue-400 text-base md:text-lg mb-1">{testimonials[currentTestimonial].name}</div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="italic text-gray-300 text-sm md:text-base">“{testimonials[currentTestimonial].text}”</p>
            </div>
            {/* Bouton suivant */}
            <button
              onClick={() => setCurrentTestimonial((c) => (c + 1) % testimonials.length)}
              aria-label="Avis suivant"
              className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 shadow-lg transition-colors duration-200 flex items-center justify-center"
              style={{transform: 'translateY(-50%)'}}
            >
              <ChevronRight className="w-6 h-6 text-blue-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile-first */}
      <section id="contact" className="py-8 md:py-16 relative">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="contact-section w-full flex flex-col items-center justify-center gap-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Prêt à redonner de l’éclat à votre véhicule&nbsp;?</h2>
              <p className="text-gray-300 text-base md:text-lg mb-2">Contactez-moi dès maintenant pour un devis rapide ou une réservation directe.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <a 
                href="https://wa.me/32472303701"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-green-400/20"
                aria-label="WhatsApp Direct"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Direct</span>
              </a>
              <a 
                href="tel:+32472303701"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-blue-400/20"
                aria-label="Appel Direct"
              >
                <Phone className="w-6 h-6" />
                <span>Appel Direct</span>
              </a>
              <a 
                href="#services"
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-purple-400/20"
                aria-label="Simulateur de devis"
              >
                <Sparkles className="w-6 h-6" />
                <span>Simulateur de devis</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile-first */}
      <footer className="bg-slate-800 py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12">
            
            {/* Logo et Description */}
            <div>
              <div className="mb-4">
                <span className="text-xl md:text-2xl font-bold text-white">
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
          <div className="border-t border-white/10 pt-8 md:pt-10 text-center">
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