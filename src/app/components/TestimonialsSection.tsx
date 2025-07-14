"use client";

import React from 'react';
import { Star, ChevronLeft, ChevronRight, Users, CheckCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Jean D.', rating: 5, text: 'Service impeccable, ma voiture n\'a jamais été aussi propre !' },
    { name: 'Sophie L.', rating: 5, text: 'Très pratique à domicile, résultat premium, je recommande.' },
    { name: 'Marc V.', rating: 4, text: 'Ponctuel, efficace et très pro. Merci Shine&Go !' },
    { name: 'Claire P.', rating: 5, text: 'Un vrai souci du détail, intérieur comme neuf.' },
    { name: 'Olivier G.', rating: 5, text: 'Top qualité, produits haut de gamme, super expérience.' }
  ];
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  return (
    <section id="temoignages" className="py-8 md:py-12 lg:py-16 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre et description */}
        <div className="text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium">Avis clients</span>
          </div>
          <h2 className="text-[clamp(1.2rem,4vw,1.75rem)] font-semibold text-balance break-words hyphens-auto text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ce que disent nos clients
          </h2>
          <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos clients satisfaits qui ont transformé leur véhicule avec Shine&Go.
          </p>
        </div>

        {/* Carrousel d'avis moderne */}
        <div className="relative max-w-4xl mx-auto mt-8 md:mt-12">
          {/* Bouton précédent */}
          <button
            onClick={() => setCurrentTestimonial((c) => (c - 1 + testimonials.length) % testimonials.length)}
            aria-label="Avis précédent"
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 min-h-[44px] min-w-[44px]"
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
                  <p className="italic text-gray-200 text-base md:text-lg leading-relaxed relative z-10 break-words hyphens-auto">"{testimonials[currentTestimonial].text}"</p>
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
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 min-h-[44px] min-w-[44px]"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 min-h-[12px] min-w-[12px] ${
                index === currentTestimonial 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">5.0</div>
            <div className="text-gray-300 text-sm md:text-base">Note moyenne</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">100%</div>
            <div className="text-gray-300 text-sm md:text-base">Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">50+</div>
            <div className="text-gray-300 text-sm md:text-base">Clients ravis</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 