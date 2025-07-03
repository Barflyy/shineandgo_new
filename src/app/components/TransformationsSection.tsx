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
      {/* Préchargement des images */}
      <div className="hidden">
        {transformations.map((transformation, index) => (
          <div key={index}>
            <Image
              src={transformation.before}
              alt=""
              width={1}
              height={1}
              priority={index < 3} // Priorité pour les 3 premières images
            />
            <Image
              src={transformation.after}
              alt=""
              width={1}
              height={1}
              priority={index < 3} // Priorité pour les 3 premières images
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto">
          {/* Transformation principale */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-6 md:mb-8">
            <div className="relative">
              {/* Images Avant/Après */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={transformations[currentIndex].before}
                    alt="Avant"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 50vw, 300px"
                    priority={currentIndex < 3}
                  />
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-xs font-medium text-white">AVANT</span>
                  </div>
                </div>
                
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={transformations[currentIndex].after}
                    alt="Après"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 50vw, 300px"
                    priority={currentIndex < 3}
                  />
                  <div className="absolute top-2 left-2 bg-green-600/80 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-xs font-medium text-white">APRÈS</span>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevSlide}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300"
                  aria-label="Transformation précédente"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Précédent</span>
                </button>
                
                <div className="text-sm text-gray-400">
                  {currentIndex + 1} / {transformations.length}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300"
                  aria-label="Transformation suivante"
                >
                  <span>Suivant</span>
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