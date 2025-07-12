"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const TransformationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const transformations = useMemo(() => [
    {
      before: '/transformations/optimized/berline-familiale-sale-avant-nettoyage-herve.jpeg',
      after: '/transformations/optimized/berline-familiale-propre-apres-nettoyage-herve.jpeg'
    },
    {
      before: '/transformations/optimized/citadine-premium-sale-avant-lavage-aubel.jpeg',
      after: '/transformations/optimized/citadine-premium-propre-apres-lavage-aubel.jpeg'
    },
    {
      before: '/transformations/optimized/interieur-voiture-sale-avant-nettoyage-dison.jpeg',
      after: '/transformations/optimized/interieur-voiture-propre-apres-nettoyage-dison.jpeg'
    },
    {
      before: '/transformations/optimized/monospace-familial-sale-avant-nettoyage-huy.jpeg',
      after: '/transformations/optimized/monospace-familial-propre-apres-nettoyage-huy.jpeg'
    },
    {
      before: '/transformations/optimized/suv-premium-sale-avant-lavage-verviers.jpeg',
      after: '/transformations/optimized/suv-premium-propre-apres-lavage-verviers.jpeg'
    },
    {
      before: '/transformations/optimized/utilitaire-commercial-sale-avant-nettoyage-liege.jpeg',
      after: '/transformations/optimized/utilitaire-commercial-propre-apres-nettoyage-liege.jpeg'
    },
    {
      before: '/transformations/optimized/voiture-sport-sale-avant-detailing-spa.jpeg',
      after: '/transformations/optimized/voiture-sport-propre-apres-detailing-spa.jpeg'
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
          img.onerror = () => {
            console.warn(`Failed to load image: ${src}`);
            resolve(src);
          };
          img.src = src;
        });
      });

      await Promise.all(loadPromises);
      setIsLoading(false);
    };

    setIsLoading(true);
    preloadImages();
  }, [currentIndex, transformations]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Transformation principale */}
          <div className="relative">
            {/* Images Avant/Après */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Image AVANT */}
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
                    <Loader2 className="w-12 h-12 animate-spin text-white/60" />
                  </div>
                )}
                <Image
                  src={transformations[currentIndex].before}
                  alt="Avant transformation"
                  fill
                  className={`object-cover object-center transition-all duration-700 ease-out ${
                    isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  } group-hover:scale-105`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={currentIndex < 2}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                  <span className="text-sm font-medium text-white tracking-wide">AVANT</span>
                </div>
              </div>
              
              {/* Image APRÈS */}
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-800 shadow-2xl">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/80 backdrop-blur-sm">
                    <Loader2 className="w-12 h-12 animate-spin text-white/60" />
                  </div>
                )}
                <Image
                  src={transformations[currentIndex].after}
                  alt="Après transformation"
                  fill
                  className={`object-cover object-center transition-all duration-700 ease-out ${
                    isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  } group-hover:scale-105`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={currentIndex < 2}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-emerald-600/40 backdrop-blur-md rounded-full px-4 py-2 border border-emerald-300/20">
                  <span className="text-sm font-medium text-white tracking-wide">APRÈS</span>
                </div>
              </div>
            </div>
            
            {/* Navigation moderne */}
            <div className="flex justify-center items-center mt-8 md:mt-12 space-x-4">
              <button
                onClick={prevSlide}
                disabled={isLoading}
                className="group flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                aria-label="Transformation précédente"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:text-emerald-300 transition-colors duration-300" />
              </button>
              
              {/* Indicateurs de progression */}
              <div className="flex space-x-2">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-emerald-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Aller à la transformation ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                disabled={isLoading}
                className="group flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                aria-label="Transformation suivante"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:text-emerald-300 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationsSection; 