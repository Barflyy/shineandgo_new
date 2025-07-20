"use client";

import React, { useState, useEffect } from 'react';
import { Star, MapPin, Calendar, Phone, CheckCircle, ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Gift, Clock, Shield, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

// Déclaration TypeScript pour Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        minWidth: string;
        height: string;
      }) => void;
    };
  }
}

interface CityPageTemplateProps {
  citySlug: string;
  cityName: string;
}

// Données de test pour les villes
const getCityData = (citySlug: string) => {
  const cities = {
    'liege': {
      name: 'Liège',
      postalCodes: ['4000', '4020', '4030'],
      population: '200 000+',
      neighborhoods: ['Centre-ville', 'Outremeuse', 'Guillemins', 'Sclessin'],
      testimonials: [
        {
          name: 'Pierre D.',
          vehicle: 'BMW Série 3',
          neighborhood: 'Outremeuse',
          rating: 5,
          text: 'Service impeccable ! Ma BMW est comme neuve. L\'équipe est arrivée à l\'heure et le résultat dépasse mes attentes.',
          date: '2024-01-15'
        },
        {
          name: 'Marie L.',
          vehicle: 'Audi A4',
          neighborhood: 'Guillemins',
          rating: 5,
          text: 'Formidable ! Je recommande vivement. Le nettoyage intérieur est parfait et l\'extérieur brille.',
          date: '2024-01-10'
        }
      ]
    },
    'verviers': {
      name: 'Verviers',
      postalCodes: ['4800', '4801', '4802'],
      population: '55 000+',
      neighborhoods: ['Centre-ville', 'Hodimont', 'Stembert', 'Ensival'],
      testimonials: [
        {
          name: 'Jean-Marc V.',
          vehicle: 'Mercedes Classe C',
          neighborhood: 'Hodimont',
          rating: 5,
          text: 'Excellent service ! Ma Mercedes brille comme au premier jour. Très pro et ponctuel.',
          date: '2024-01-12'
        },
        {
          name: 'Sophie K.',
          vehicle: 'Volkswagen Golf',
          neighborhood: 'Centre-ville',
          rating: 5,
          text: 'Super expérience ! L\'intérieur de ma Golf est impeccable. Je recommande sans hésiter.',
          date: '2024-01-08'
        }
      ]
    },
    'spa': {
      name: 'Spa',
      postalCodes: ['4900'],
      population: '10 000+',
      neighborhoods: ['Centre-ville', 'Annette et Lubin', 'Balmoral'],
      testimonials: [
        {
          name: 'Philippe T.',
          vehicle: 'Porsche Cayenne',
          neighborhood: 'Balmoral',
          rating: 5,
          text: 'Service haut de gamme pour ma Porsche ! Résultat exceptionnel, équipe très professionnelle.',
          date: '2024-01-14'
        },
        {
          name: 'Catherine B.',
          vehicle: 'Tesla Model 3',
          neighborhood: 'Centre-ville',
          rating: 5,
          text: 'Parfait pour ma Tesla ! Ils connaissent bien les spécificités des véhicules électriques.',
          date: '2024-01-09'
        }
      ]
    }
  };

  return cities[citySlug] || cities['liege'];
};

// Composant Hero avec localisation
const CityHero = ({ cityName, cityData }: { cityName: string; cityData: any }) => {
  const handleBooking = () => {
    window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto à ${cityName}`, '_blank');
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      {/* Container principal */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen w-full max-w-none px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Spacer pour le header */}
        <div className="h-14 sm:h-16 md:h-20 flex-shrink-0"></div>
        
        {/* Contenu centré */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              
              {/* Badge Pro certifié */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-green-600/10 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-600/20 mb-4 sm:mb-6">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-600 font-medium text-sm">Pro certifié Koch-Chemie</span>
              </div>

              {/* H1 + Punchline */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-slate-900">
                  <span className="block">Nettoyage voiture</span>
                  <span className="block">à domicile à</span>
                  <span className="block text-blue-600">{cityName}</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-semibold">
                  Showroom en 90 min, sans quitter votre parking
                </p>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Valeting mobile premium • Produits Koch-Chemie
                  <br className="hidden sm:block" />
                  Intervention sous 48h
                </p>
              </div>

              {/* Preuve sociale locale */}
              <div className="inline-flex items-center bg-yellow-50 px-4 sm:px-6 py-3 rounded-full border border-yellow-200">
                <div className="flex items-center mr-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-slate-700 font-semibold text-sm sm:text-base">5,0/5</span>
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm">
                  {cityData.testimonials.length + 30} avis clients
                </span>
              </div>

              {/* CTAs localisés */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 w-full max-w-lg mx-auto">
                
                {/* CTA Principal */}
                <button 
                  onClick={handleBooking}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0 relative"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate">Réserver pour {cityName}</span>
                  {/* Micro-texte sticky */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-500 whitespace-nowrap">
                    Réponse &lt; 5 min
                  </div>
                </button>
                
                {/* CTA Secondaire */}
                <button 
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate">Chat WhatsApp</span>
                </button>

              </div>

              {/* Garantie et informations locales */}
              <div className="text-center pt-8">
                <p className="text-sm sm:text-base text-slate-600 mb-1">
                  <strong>Déplacement offert ≤ 25 km</strong> • Intervention dans tout le {cityData.postalCodes.join(', ')}
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  ✔ Garantie 14 jours "Satisfait ou re-lavage offert"
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Spacer pour équilibrer */}
        <div className="h-6 sm:h-8 lg:h-12 flex-shrink-0"></div>
      </div>
    </section>
  );
};

// Composant Comment ça marche
const HowItWorksLocal = ({ cityName }: { cityName: string }) => {
  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Un processus simple en 3 étapes pour redécouvrir votre voiture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center relative">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              📅
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Je réserve</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              En 3 clics, je choisis mon créneau à {cityName}
            </p>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🚐
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Nous venons</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Notre équipe arrive à l'heure avec tout le matériel
            </p>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              ✨
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">3. Je redécouvre</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Ma voiture retrouve son éclat d'origine
            </p>
          </div>
        </div>

        {/* Rappel déplacement offert */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-700 font-medium text-sm">
              Déplacement offert ≤ 25 km de {cityName}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant Services populaires locaux
const ServicesLocal = ({ cityName }: { cityName: string }) => {
  const handleServiceBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  const services = [
    {
      name: "Intérieur « Fraîcheur »",
      price: "39",
      duration: "45 min",
      description: "Aspiration complète, plastiques, vitres intérieures, protection CarPro Perl.",
      features: [
        "Aspiration sièges & sols",
        "Plastiques + tableau de bord nettoyés",
        "Vitres intérieures sans traces",
        "Protection UV CarPro Perl",
        "Finition soignée des détails"
      ],
      pricing: {
        "Citadine": 39,
        "Berline": 44,
        "Break": 49,
        "SUV/4x4": 54,
        "Monospace": 59,
        "Utilitaire": 64
      },
      popular: false,
      idealFor: "Idéal pour garder un intérieur frais et net.",
      buttonText: "🚗 Réserver ce service"
    },
    {
      name: "Pack « Sérénité »",
      price: "79",
      duration: "90 min",
      description: "Intérieur + Extérieur complets, protection express 2 mois, produits premium.",
      features: [
        "Intérieur + extérieur complets",
        "Mousse active + rinçage haute pression",
        "ProtectorWax Koch-Chemie offert (protection 2 mois)",
        "Plastiques protégés CarPro Perl",
        "Finition showroom premium"
      ],
      pricing: {
        "Citadine": 79,
        "Berline": 89,
        "Break": 99,
        "SUV/4x4": 109,
        "Monospace": 119,
        "Utilitaire": 129
      },
      popular: true,
      idealFor: "Le plus complet, choisi par 9 clients sur 10.",
      buttonText: "🚗 Réserver ce service"
    },
    {
      name: "Extérieur « Brillance »",
      price: "49",
      duration: "45 min",
      description: "Mousse active, lavage main, vitres extérieures, seuils, ProtectorWax offerte.",
      features: [
        "Mousse active dégraissante",
        "Lavage manuel technique pro",
        "Vitres extérieures impeccables",
        "Seuils de porte nettoyés",
        "ProtectorWax Koch-Chemie offert"
      ],
      pricing: {
        "Citadine": 49,
        "Berline": 54,
        "Break": 59,
        "SUV/4x4": 64,
        "Monospace": 69,
        "Utilitaire": 74
      },
      popular: false,
      idealFor: "Une carrosserie éclatante, sans trace.",
      buttonText: "🚗 Réserver ce service"
    }
  ];

  const vehicleTypes = [
    { name: "Citadine", icon: "🚗" },
    { name: "Berline", icon: "🚙" },
    { name: "Break", icon: "🚗" },
    { name: "SUV/4x4", icon: "🚐" },
    { name: "Monospace", icon: "🚐" },
    { name: "Utilitaire", icon: "🚚" }
  ];

  return (
    <section id="services-section" className="w-full py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Services populaires à {cityName}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Nos prestations les plus demandées par les conducteurs {cityName.toLowerCase()}ois
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {services.map((service, index) => (
            <div key={index} className={`group relative ${service.popular ? 'lg:scale-105 lg:z-10' : ''}`}>
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>LE PLUS POPULAIRE</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Service card */}
              <div className={`
                bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full
                ${service.popular ? 'ring-2 ring-green-200 border-green-200' : ''}
              `}>
                <div className="h-full flex flex-col p-8">
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🚗</span>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight text-slate-900">
                      {service.name}
                    </h3>
                    
                    {/* Prix */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-sm text-slate-500 font-medium">À partir de</span>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-center">
                          <span className="text-4xl md:text-5xl font-black text-slate-900">
                            {service.price}€
                          </span>
                          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-slate-100 to-slate-200 px-4 py-2 rounded-full mt-2 shadow-sm">
                            <Clock className="w-4 h-4 text-slate-500" />
                            <span className="text-sm text-slate-600 font-semibold">
                              {service.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed font-medium flex-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Table */}
                  <div className="mb-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-2xl p-4 border border-slate-200/50 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-700 mb-3 text-center">📋 Tarifs selon véhicule</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {vehicleTypes.map((vehicle, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-white/80 rounded-lg px-2 py-2 border border-slate-100 min-h-[2.5rem]">
                          <span className="flex items-center gap-1 text-slate-600 min-w-0 flex-1">
                            <span className="flex-shrink-0">{vehicle.icon}</span>
                            <span className="font-medium truncate">{vehicle.name}</span>
                          </span>
                          <span className="font-bold text-slate-900 flex-shrink-0 ml-2">{service.pricing[vehicle.name as keyof typeof service.pricing]}€</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={handleServiceBooking}
                    className={`
                      w-full py-4 px-6 rounded-xl font-semibold text-white text-sm md:text-base
                      transition-all duration-300 shadow-lg hover:shadow-xl
                      ${service.popular 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-blue-600 hover:bg-blue-700'
                      }
                    `}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span>{service.buttonText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frais de déplacement */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
            <span className="text-blue-600">Transparence totale</span> sur nos frais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zone gratuite */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Zone gratuite</h4>
              </div>
              <p className="text-slate-700 mb-3">
                <span className="font-semibold text-green-600">Gratuit</span> dans un rayon de 25 km de {cityName}
              </p>
              <p className="text-sm text-slate-600">
                Déplacement inclus pour les communes proches
              </p>
            </div>

            {/* Zone payante */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">€</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">Au-delà de 25 km</h4>
              </div>
              <p className="text-slate-700 mb-3">
                <span className="font-semibold text-blue-600">0.60€/km</span> aller-retour
              </p>
              <p className="text-sm text-slate-600">
                Calculé via Google Maps depuis Herve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



// Composant Témoignages locaux avec carousel
const TestimonialsLocal = ({ cityData }: { cityData: any }) => {
  const [current, setCurrent] = useState(0);
  const testimonials = cityData.testimonials;

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials-section" className="w-full py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Témoignages de conducteurs {cityData.name.toLowerCase()}ois
          </h2>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <span className="text-slate-600 text-sm">{testimonials[current].date}</span>
            </div>
            
            <blockquote className="text-lg text-slate-700 mb-6 italic">
              "{testimonials[current].text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900">{testimonials[current].name}</p>
                <p className="text-sm text-slate-600">
                  {testimonials[current].vehicle} • {testimonials[current].neighborhood}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Indicateurs */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



// Composant Widget Calendly intégré
const CalendlyWidget = ({ cityName }: { cityName: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Charger le script Calendly de manière standard
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Réservez votre créneau à {cityName}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Choisissez votre date et heure idéales directement dans notre agenda
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-6 mb-8">
            <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full border border-green-200">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Réponse immédiate</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full border border-blue-200">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Confirmation en 2 min</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          {/* Widget Calendly - Méthode standard */}
          {isClient ? (
            <div 
              dangerouslySetInnerHTML={{
                __html: `
                  <div class="calendly-inline-widget" data-url="https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                `
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-[700px] bg-slate-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-600">Chargement du calendrier...</p>
              </div>
            </div>
          )}
        </div>


      </div>
    </section>
  );
};

// Composant FAQ spécifique ville
const FAQLocal = ({ cityName }: { cityName: string }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Que faire si je n'ai pas de prise extérieure ?",
      answer: "Pas de problème ! Nous disposons de rallonges professionnelles jusqu'à 50m. Seule une prise 230V accessible depuis votre logement est nécessaire."
    },
    {
      question: `Intervenez-vous en centre piéton de ${cityName} ?`,
      answer: `Oui, nous intervenons dans tout ${cityName}, y compris en centre-ville piéton. Nous nous adaptons aux contraintes de stationnement et d'accès.`
    },
    {
      question: "Combien de temps dure un valeting complet ?",
      answer: "Un nettoyage complet intérieur + extérieur dure entre 90 minutes et 2h30 selon l'état du véhicule et les options choisies."
    },
    {
      question: "Faut-il être présent pendant l'intervention ?",
      answer: "Votre présence n'est pas obligatoire. Il suffit de nous donner accès au véhicule et au point d'eau/électricité. Nous vous prévenons en début et fin d'intervention."
    },
    {
      question: "Que se passe-t-il en cas de pluie ?",
      answer: "En cas de pluie légère, l'intervention est maintenue (nous travaillons sous abri si possible). En cas de forte pluie, nous reportons automatiquement sans frais."
    }
  ];

  return (
    <section id="faq-section" className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Questions fréquentes à {cityName}
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-slate-600 transition-transform ${openFAQ === index ? 'rotate-90' : ''}`} />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant Section Parrainage
const ReferralSection = ({ cityName }: { cityName: string }) => {
  const handleShare = () => {
    const message = `🚗 J'ai découvert Shine&Go pour le nettoyage auto à domicile à ${cityName} ! Service top, je recommande 👌`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🎁</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Parrainez et gagnez !
            </h2>
            <p className="text-slate-600 text-lg">
              Invitez un ami de {cityName} et recevez chacun <strong>-10 € de réduction</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">1. Partagez</h4>
              <p className="text-sm text-slate-600">Invitez vos amis via WhatsApp</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">2. Il réserve</h4>
              <p className="text-sm text-slate-600">Votre ami prend RDV à {cityName}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">3. Vous gagnez</h4>
              <p className="text-sm text-slate-600">-10 € chacun sur votre prochain lavage</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-colors duration-200 flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Partager sur WhatsApp
          </button>

          <p className="text-xs text-slate-500 mt-4">
            * Offre valable pour toute première réservation. Réduction appliquée automatiquement.
          </p>
        </div>
      </div>
    </section>
  );
};

// Schéma FAQ pour SEO
const FAQSchema = ({ cityName, faqs }: { cityName: string; faqs: any[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Template principal
export default function CityPageTemplateNew({ citySlug, cityName }: CityPageTemplateProps) {
  const cityData = getCityData(citySlug);
  
  const faqs = [
    {
      question: "Que faire si je n'ai pas de prise extérieure ?",
      answer: "Pas de problème ! Nous disposons de rallonges professionnelles jusqu'à 50m. Seule une prise 230V accessible depuis votre logement est nécessaire."
    },
    {
      question: `Intervenez-vous en centre piéton de ${cityName} ?`,
      answer: `Oui, nous intervenons dans tout ${cityName}, y compris en centre-ville piéton. Nous nous adaptons aux contraintes de stationnement et d'accès.`
    },
    {
      question: "Combien de temps dure un valeting complet ?",
      answer: "Un nettoyage complet intérieur + extérieur dure entre 90 minutes et 2h30 selon l'état du véhicule et les options choisies."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Header />
      
      {/* Schema.org pour FAQ */}
      <FAQSchema cityName={cityName} faqs={faqs} />
      
      {/* 1. Hero avec H1 + promesse (ATTENTION) */}
      <CityHero cityName={cityName} cityData={cityData} />
      
      {/* 2. Témoignages locaux (CONFIANCE) */}
      <TestimonialsLocal cityData={cityData} />
      
      {/* 3. Comment ça marche (INTÉRÊT) */}
      <HowItWorksLocal cityName={cityName} />
      
      {/* 4. Services populaires (DÉSIR) */}
      <ServicesLocal cityName={cityName} />
      

      

      
      {/* 7. Widget Calendly intégré (ACTION) */}
      <CalendlyWidget cityName={cityName} />
      
      {/* 8. FAQ spécifique ville (RASSURANCE) */}
      <FAQLocal cityName={cityName} />
      
      {/* 9. Section parrainage (POST-ACTION) */}
      <ReferralSection cityName={cityName} />
      
      <Footer />
    </div>
  );
}