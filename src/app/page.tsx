"use client";

import React from 'react';
import { Sparkles, Star, Clock, MapPin, Shield, Award, Zap, Heart, Info, ChevronLeft, ChevronRight, MessageCircle, Phone, Gift, Users, CheckCircle } from 'lucide-react';
import TransformationsSection from './components/TransformationsSection';
import Hero from './components/Hero';
import PricingTable from './components/PricingTable';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import CalendlyPopup from './components/CalendlyPopup';

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
    { name: 'Comment ça marche', href: '#how-it-works' },
    { name: 'Nos services', href: '#services' },
    { name: 'Avant/Après', href: '#transformations' },
    { name: 'Avis clients', href: '#temoignages' }
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



  return (
    <div className="min-h-screen text-white bg-slate-900 relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Transformations Section */}
      <section id="transformations" className="py-16 md:py-24 relative">
        <div className="relative z-10">
          <TransformationsSection />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Pricing Table Section */}
      <section id="services">
        <PricingTable />
      </section>





      {/* Section Témoignages - Design moderne */}
      <section id="temoignages" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Titre et description */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 mb-6">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-medium">Avis clients</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ce que disent nos clients
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Découvrez les témoignages de nos clients satisfaits qui ont transformé leur véhicule avec Shine&Go.
              </p>
            </div>

            {/* Carrousel d'avis moderne */}
            <div className="relative max-w-4xl mx-auto">
              {/* Bouton précédent */}
              <button
                onClick={() => setCurrentTestimonial((c) => (c - 1 + testimonials.length) % testimonials.length)}
                aria-label="Avis précédent"
                className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                style={{transform: 'translateY(-50%)'}}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
              </button>

              {/* Carte d'avis principale */}
              <div className="relative mx-12 md:mx-16">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl text-center group hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Avatar et nom */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-blue-300" />
                      </div>
                      <div className="font-bold text-blue-300 text-lg md:text-xl mb-2">{testimonials[currentTestimonial].name}</div>
                    </div>

                    {/* Étoiles */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current mx-1 group-hover:scale-110 transition-transform duration-300" />
                      ))}
                    </div>

                    {/* Citation */}
                    <div className="relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl text-blue-400/30">"</div>
                      <p className="italic text-gray-200 text-base md:text-lg leading-relaxed relative z-10">"{testimonials[currentTestimonial].text}"</p>
                    </div>

                    {/* Badge de satisfaction */}
                    <div className="mt-6">
                      <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-400/30">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        <span className="text-green-300 text-sm font-medium">Client satisfait</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton suivant */}
              <button
                onClick={() => setCurrentTestimonial((c) => (c + 1) % testimonials.length)}
                aria-label="Avis suivant"
                className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                style={{transform: 'translateY(-50%)'}}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
              </button>
            </div>

            {/* Indicateurs de navigation */}
            <div className="flex justify-center mt-8 md:mt-12 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Aller à l'avis ${index + 1}`}
                />
              ))}
            </div>

            {/* Statistiques */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">5.0</div>
                <div className="text-gray-300 text-sm md:text-base">Note moyenne</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">100%</div>
                <div className="text-gray-300 text-sm md:text-base">Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">50+</div>
                <div className="text-gray-300 text-sm md:text-base">Clients ravis</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Zones d'intervention Section - Style artistique moderne */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Titre et description */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-6">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-green-300 text-sm font-medium">Service mobile</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Zones d&apos;intervention
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Service premium à domicile dans toute la région. Découvrez les villes où nous intervenons pour redonner l&apos;éclat à votre véhicule avec nos prestations haut de gamme.
              </p>
            </div>

            {/* Grille des villes principales avec design moderne */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                'Herve', 'Liège', 'Verviers', 'Dison', 'Spa', 'Huy', 'Aubel', 'Aywaille'
              ].map((ville, index) => (
                <a
                  key={index}
                  href={`/zone-intervention/${ville.toLowerCase().replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[ùûü]/g, 'u').replace(/[ôö]/g, 'o').replace(/[îï]/g, 'i').replace(/[ç]/g, 'c').replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                  className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-green-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                      {ville}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Service premium à domicile
                    </p>
                    <div className="mt-4 inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full border border-green-400/30">
                      <span className="text-green-300 text-xs font-medium">Disponible</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Lien vers toutes les villes avec design moderne */}
            <div className="text-center">
              <a
                href="/zone-intervention"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 hover:scale-105 hover:border-emerald-400/50"
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <MapPin className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Voir toutes les villes desservies</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile-first */}
      <footer className="bg-slate-800/80 backdrop-blur-xl text-white pt-8 md:pt-12 pb-4 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Bloc action */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg mr-3">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white">Prêt à briller ?</h3>
              </div>
              <div className="mb-6">
                <div className="inline-flex items-center bg-emerald-500/20 px-3 py-2 rounded-full border border-emerald-400/30 mb-3">
                  <Gift className="w-4 h-4 mr-2 text-emerald-300" />
                  <span className="text-emerald-200 text-sm font-medium">ProtectorWax + CarPro Perl offerts</span>
                </div>
                <p className="text-emerald-300 font-semibold text-sm">Valeur : 40 €</p>
              </div>
              <button 
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                    });
                  }
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 border-2 border-emerald-400/30"
              >
                ✨ Réserver mon créneau
              </button>
            </div>

            {/* Coordonnées */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-lg">📞</span>
                  <a href="tel:+32472303701" className="text-gray-300 hover:text-white transition-colors duration-300">0472 30 37 01</a>
                </li>
                                  <li className="flex items-center space-x-2">
                    <span className="text-lg">✉️</span>
                    <a href="mailto:nathangodfroid@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">nathangodfroid@gmail.com</a>
                  </li>
                <li className="flex items-center space-x-2">
                  <span className="text-lg">🚐</span>
                  <span className="text-gray-300">Mobile 25 km autour de Herve</span>
                </li>
              </ul>
            </div>

            {/* Liens rapides */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Navigation</h4>
                              <ul className="space-y-3 text-sm">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Accueil</a></li>
                  <li><a href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300">Comment ça marche</a></li>
                  <li><a href="/#services" className="text-gray-300 hover:text-white transition-colors duration-300">Nos services</a></li>
                  <li><a href="/#transformations" className="text-gray-300 hover:text-white transition-colors duration-300">Avant/Après</a></li>
                  <li><a href="/#temoignages" className="text-gray-300 hover:text-white transition-colors duration-300">Avis clients</a></li>
                </ul>
            </div>

            {/* Légal */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Mentions légales</h4>
                              <ul className="space-y-3 text-sm">
                  <li className="text-gray-300">BE1014725710 – Shine & Go</li>
                  <li><a href="/legal" className="text-gray-300 hover:text-white transition-colors duration-300">Mentions légales</a></li>
                  <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">Confidentialité & cookies</a></li>
                  <li><a href="/cgv" className="text-gray-300 hover:text-white transition-colors duration-300">Conditions générales</a></li>
                </ul>
            </div>
          </div>

          <div className="text-center text-xs mt-6 text-gray-400 border-t border-white/10 pt-4">
            © 2025 Shine & Go – Tous droits réservés
          </div>
        </div>
      </footer>

      {/* Calendly Popup en bas à droite */}
      <CalendlyPopup />

    </div>
  );
};

export default PremiumCarCleaningLanding;