import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const TransformationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      before: '/transformations/optimized/berline-familiale-sale-avant-nettoyage-herve.jpeg',
      after: '/transformations/optimized/berline-familiale-propre-apres-nettoyage-herve.jpeg',
      beforeWebP: '/transformations/optimized/webp/berline-familiale-sale-avant-nettoyage-herve.webp',
      afterWebP: '/transformations/optimized/webp/berline-familiale-propre-apres-nettoyage-herve.webp',
      title: 'Berline Familiale - Herve',
      description: 'Transformation complète intérieur/extérieur'
    },
    {
      before: '/transformations/optimized/citadine-premium-sale-avant-lavage-aubel.jpeg',
      after: '/transformations/optimized/citadine-premium-propre-apres-lavage-aubel.jpeg',
      beforeWebP: '/transformations/optimized/webp/citadine-premium-sale-avant-lavage-aubel.webp',
      afterWebP: '/transformations/optimized/webp/citadine-premium-propre-apres-lavage-aubel.webp',
      title: 'Citadine Premium - Aubel',
      description: 'Lavage premium avec traitement hydrophobe'
    },
    {
      before: '/transformations/optimized/interieur-voiture-sale-avant-nettoyage-dison.jpeg',
      after: '/transformations/optimized/interieur-voiture-propre-apres-nettoyage-dison.jpeg',
      beforeWebP: '/transformations/optimized/webp/interieur-voiture-sale-avant-nettoyage-dison.webp',
      afterWebP: '/transformations/optimized/webp/interieur-voiture-propre-apres-nettoyage-dison.webp',
      title: 'Nettoyage Intérieur - Dison',
      description: 'Intérieur comme neuf, détails impeccables'
    },
    {
      before: '/transformations/optimized/suv-premium-sale-avant-lavage-verviers.jpeg',
      after: '/transformations/optimized/suv-premium-propre-apres-lavage-verviers.jpeg',
      beforeWebP: '/transformations/optimized/webp/suv-premium-sale-avant-lavage-verviers.webp',
      afterWebP: '/transformations/optimized/webp/suv-premium-propre-apres-lavage-verviers.webp',
      title: 'SUV Premium - Verviers',
      description: 'SUV transformé en showroom'
    },
    {
      before: '/transformations/optimized/voiture-sport-sale-avant-detailing-spa.jpeg',
      after: '/transformations/optimized/voiture-sport-propre-apres-detailing-spa.jpeg',
      beforeWebP: '/transformations/optimized/webp/voiture-sport-sale-avant-detailing-spa.webp',
      afterWebP: '/transformations/optimized/webp/voiture-sport-propre-apres-detailing-spa.webp',
      title: 'Voiture Sport - Spa',
      description: 'Detailing professionnel, résultat exceptionnel'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Titre et description */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Transformations</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Avant / Après
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Découvrez la magie de nos transformations. Votre véhicule passe de l&apos;état quotidien à l&apos;état showroom en quelques heures.
            </p>
          </div>

          {/* Carrousel moderne */}
          <div className="relative max-w-5xl mx-auto">
            {/* Bouton précédent */}
            <button
              onClick={prevSlide}
              aria-label="Transformation précédente"
              className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
            </button>

            {/* Image principale */}
            <div className="relative mx-12 md:mx-16">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl group">
                {/* Image "Après" en arrière-plan */}
                <picture>
                  <source srcSet={transformations[activeIndex].afterWebP} type="image/webp" />
                  <Image
                    src={transformations[activeIndex].after}
                    alt={`Après transformation - ${transformations[activeIndex].title}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </picture>

                {/* Image "Avant" avec effet de révélation */}
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <picture>
                    <source srcSet={transformations[activeIndex].beforeWebP} type="image/webp" />
                    <Image
                      src={transformations[activeIndex].before}
                      alt={`Avant transformation - ${transformations[activeIndex].title}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 600px"
                    />
                  </picture>
                </div>

                {/* Séparateur interactif */}
                <div className="absolute top-0 left-1/2 h-full w-1 bg-white/80 shadow-lg cursor-col-resize transform -translate-x-1/2">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-500">
                    <div className="w-1 h-4 md:h-5 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Overlay avec informations */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6">
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                    {transformations[activeIndex].title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base">
                    {transformations[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton suivant */}
            <button
              onClick={nextSlide}
              aria-label="Transformation suivante"
              className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
            </button>
          </div>

          {/* Indicateurs de navigation */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Aller à la transformation ${index + 1}`}
              />
            ))}
          </div>

          {/* Statistiques */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">90min</div>
              <div className="text-gray-300 text-sm md:text-base">Temps moyen</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">100%</div>
              <div className="text-gray-300 text-sm md:text-base">Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">50+</div>
              <div className="text-gray-300 text-sm md:text-base">Transformations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection; 