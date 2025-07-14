"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react';

const TransformationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformations = [
    {
      id: 1,
      before: "/transformations/optimized/webp/berline-familiale-sale-avant-nettoyage-herve.webp",
      after: "/transformations/optimized/webp/berline-familiale-propre-apres-nettoyage-herve.webp"
    },
    {
      id: 2,
      before: "/transformations/optimized/webp/citadine-premium-sale-avant-lavage-aubel.webp",
      after: "/transformations/optimized/webp/citadine-premium-propre-apres-lavage-aubel.webp"
    },
    {
      id: 3,
      before: "/transformations/optimized/webp/interieur-voiture-sale-avant-nettoyage-dison.webp",
      after: "/transformations/optimized/webp/interieur-voiture-propre-apres-nettoyage-dison.webp"
    },
    {
      id: 4,
      before: "/transformations/optimized/webp/monospace-familial-sale-avant-nettoyage-huy.webp",
      after: "/transformations/optimized/webp/monospace-familial-propre-apres-nettoyage-huy.webp"
    },
    {
      id: 5,
      before: "/transformations/optimized/webp/utilitaire-commercial-sale-avant-nettoyage-liege.webp",
      after: "/transformations/optimized/webp/utilitaire-commercial-propre-apres-nettoyage-liege.webp"
    },
    {
      id: 6,
      before: "/transformations/optimized/webp/voiture-sport-sale-avant-detailing-spa.webp",
      after: "/transformations/optimized/webp/voiture-sport-propre-apres-detailing-spa.webp"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + transformations.length) % transformations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Titre et description */}
      <div className="text-center mb-2">
        <div className="inline-flex items-center px-2 py-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg border border-purple-400/30">
          <Star className="w-3 h-3 mr-1 text-purple-400" />
          <span className="text-purple-300 text-xs font-medium">Transformations</span>
        </div>
      </div>

      {/* Carrousel de transformations */}
      <div className="relative max-w-xs md:max-w-2xl mx-auto">
        {/* Bouton précédent */}
        <button
          onClick={prevSlide}
          aria-label="Transformation précédente"
          className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-purple-500 shadow-lg hover:shadow-xl border border-purple-200/50 transition-all duration-200"
          style={{transform: 'translateY(-50%)'}}
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
        </button>

        {/* Conteneur principal */}
        <div className="relative mx-auto">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-2 md:p-5 shadow group hover:shadow-md transition-all duration-200 hover:scale-102">
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
            {/* Contenu */}
            <div className="relative z-10">
              {/* Images avant/après */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {/* Image Avant */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg border border-red-400/20 flex items-center justify-center">
                    <span className="text-red-300 font-bold text-xs md:text-sm">AVANT</span>
                  </div>
                  <Image
                    src={transformations[currentIndex].before}
                    alt="Avant nettoyage"
                    width={400}
                    height={300}
                    className="w-full h-24 md:h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                    priority={currentIndex === 0}
                  />
                </div>
                {/* Image Après */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-400/20 flex items-center justify-center">
                    <span className="text-green-300 font-bold text-xs md:text-sm">APRÈS</span>
                  </div>
                  <Image
                    src={transformations[currentIndex].after}
                    alt="Après nettoyage"
                    width={400}
                    height={300}
                    className="w-full h-24 md:h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                    priority={currentIndex === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton suivant */}
        <button
          onClick={nextSlide}
          aria-label="Transformation suivante"
          className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-purple-500 shadow-lg hover:shadow-xl border border-purple-200/50 transition-all duration-200"
          style={{transform: 'translateY(-50%)'}}
        >
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
        </button>
      </div>

      {/* Indicateurs de navigation */}
      <div className="flex justify-center mt-3 md:mt-6 space-x-0.5 md:space-x-2">
        {transformations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 min-h-[8px] min-w-[8px] md:min-h-[12px] md:min-w-[12px] ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Aller à la transformation ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TransformationsSection; 