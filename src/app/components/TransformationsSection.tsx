import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TransformationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformations = [
    {
      before: '/transformations/before1.jpeg',
      after: '/transformations/after1.jpeg',
      title: 'BMW Série 5',
      description: 'Nettoyage complet intérieur et extérieur'
    },
    {
      before: '/transformations/before2.jpeg',
      after: '/transformations/after2.jpeg',
      title: 'Porsche Cayenne',
      description: 'Restauration intérieur cuir premium'
    },
    {
      before: '/transformations/before3.jpeg',
      after: '/transformations/after3.jpeg',
      title: 'Audi Q7',
      description: 'Nettoyage intensif complet'
    },
    {
      before: '/transformations/before4.jpeg',
      after: '/transformations/after4.jpeg',
      title: 'Mercedes Classe C',
      description: 'Entretien régulier premium'
    },
    {
      before: '/transformations/before5.jpeg',
      after: '/transformations/after5.jpeg',
      title: 'Range Rover',
      description: 'Nettoyage haut de gamme SUV'
    },
    {
      before: '/transformations/before6.jpeg',
      after: '/transformations/after6.jpeg',
      title: 'Volkswagen Golf',
      description: 'Transformation complète'
    },
    {
      before: '/transformations/before7.jpeg',
      after: '/transformations/after7.jpeg',
      title: 'Peugeot 3008',
      description: 'Nettoyage professionnel'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };



  return (
    <div className="relative">
      {/* Préchargement des images suivantes */}
      <div className="hidden">
        {transformations.map((transformation, index) => {
          // Précharger seulement les 3 prochaines transformations
          const shouldPreload = index >= currentIndex && index <= currentIndex + 2;
          if (!shouldPreload) return null;
          
          return (
            <div key={index}>
              <Image
                src={transformation.before}
                alt=""
                width={1}
                height={1}
                priority={index === currentIndex}
              />
              <Image
                src={transformation.after}
                alt=""
                width={1}
                height={1}
                priority={index === currentIndex}
              />
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto">
          {/* Transformation principale */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-8 mb-6 md:mb-8">
            <div className="relative">
              {/* Images Avant/Après */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={transformations[currentIndex].before}
                    alt="Avant"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    priority={currentIndex < 3}
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm md:text-xs font-semibold text-white">AVANT</span>
                  </div>
                </div>
                
                <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={transformations[currentIndex].after}
                    alt="Après"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    priority={currentIndex < 3}
                  />
                  <div className="absolute top-3 left-3 bg-green-600/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm md:text-xs font-semibold text-white">APRÈS</span>
                  </div>
                </div>
              </div>
              

              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevSlide}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300"
                  aria-label="Transformation précédente"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Précédent</span>
                </button>
                
                <div className="text-sm text-gray-400 px-4">
                  {currentIndex + 1} / {transformations.length}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300"
                  aria-label="Transformation suivante"
                >
                  <span className="hidden sm:inline">Suivant</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationsSection; 