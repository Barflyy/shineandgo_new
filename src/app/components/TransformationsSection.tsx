import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const TransformationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const transformations = useMemo(() => [
    {
      before: '/transformations/optimized/before1.jpeg',
      after: '/transformations/optimized/after1.jpeg',
      title: 'BMW Série 5',
      description: 'Nettoyage complet intérieur et extérieur'
    },
    {
      before: '/transformations/optimized/before2.jpeg',
      after: '/transformations/optimized/after2.jpeg',
      title: 'Porsche Cayenne',
      description: 'Restauration intérieur cuir premium'
    },
    {
      before: '/transformations/optimized/before3.jpeg',
      after: '/transformations/optimized/after3.jpeg',
      title: 'Audi Q7',
      description: 'Nettoyage intensif complet'
    },
    {
      before: '/transformations/optimized/before4.jpeg',
      after: '/transformations/optimized/after4.jpeg',
      title: 'Mercedes Classe C',
      description: 'Entretien régulier premium'
    },
    {
      before: '/transformations/optimized/before5.jpeg',
      after: '/transformations/optimized/after5.jpeg',
      title: 'Range Rover',
      description: 'Nettoyage haut de gamme SUV'
    },
    {
      before: '/transformations/optimized/before6.jpeg',
      after: '/transformations/optimized/after6.jpeg',
      title: 'Volkswagen Golf',
      description: 'Transformation complète'
    },
    {
      before: '/transformations/optimized/before7.jpeg',
      after: '/transformations/optimized/after7.jpeg',
      title: 'Peugeot 3008',
      description: 'Nettoyage professionnel'
    },
  ], []);

  // Précharger les images intelligemment
  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = [];
      
      // Image actuelle
      imagesToPreload.push(transformations[currentIndex].before);
      imagesToPreload.push(transformations[currentIndex].after);
      
      // Image suivante
      const nextIndex = (currentIndex + 1) % transformations.length;
      imagesToPreload.push(transformations[nextIndex].before);
      imagesToPreload.push(transformations[nextIndex].after);
      
      // Image précédente
      const prevIndex = (currentIndex - 1 + transformations.length) % transformations.length;
      imagesToPreload.push(transformations[prevIndex].before);
      imagesToPreload.push(transformations[prevIndex].after);

      const loadPromises = imagesToPreload.map((src) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve(src);
          img.onerror = () => resolve(src);
          img.src = src;
        });
      });

      await Promise.all(loadPromises);
      setIsLoading(false);
    };

    setIsLoading(true);
    preloadImages();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };



  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Transformation principale */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-8 mb-6 md:mb-8">
            <div className="relative">
              {/* Images Avant/Après */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                {/* Image AVANT */}
                <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <Loader2 className="w-8 h-8 animate-spin text-white" />
                    </div>
                  )}
                  <Image
                    src={transformations[currentIndex].before}
                    alt="Avant"
                    fill
                    className={`object-cover object-center transition-opacity duration-300 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    priority={currentIndex < 2}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm md:text-xs font-semibold text-white">AVANT</span>
                  </div>
                </div>
                
                {/* Image APRÈS */}
                <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <Loader2 className="w-8 h-8 animate-spin text-white" />
                    </div>
                  )}
                  <Image
                    src={transformations[currentIndex].after}
                    alt="Après"
                    fill
                    className={`object-cover object-center transition-opacity duration-300 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    priority={currentIndex < 2}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
                  disabled={isLoading}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isLoading}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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