import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TransformationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const transformations = [
    {
      before: '/transformations/before1.jpeg',
      after: '/transformations/after1.jpeg',
    },
    {
      before: '/transformations/before2.jpeg',
      after: '/transformations/after2.jpeg',
    },
    {
      before: '/transformations/before3.jpeg',
      after: '/transformations/after3.jpeg',
    },
    {
      before: '/transformations/before4.jpeg',
      after: '/transformations/after4.jpeg',
    },
    {
      before: '/transformations/before5.jpeg',
      after: '/transformations/after5.jpeg',
    },
    {
      before: '/transformations/before6.jpeg',
      after: '/transformations/after6.jpeg',
    },
    {
      before: '/transformations/before7.jpeg',
      after: '/transformations/after7.jpeg',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (clientX: number) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <section className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]/30 backdrop-blur-xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Transformations Premium
        </h2>
        <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Découvrez la magie de mes services de nettoyage premium professionnel
        </p>
        
        <div className="max-w-lg sm:max-w-xl mx-auto relative">
          {/* Boutons de navigation - Vraiment à l'extérieur */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 sm:-translate-x-16 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white transition-all duration-300 hover:scale-110 z-20"
            aria-label="Transformation précédente"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 sm:translate-x-16 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white transition-all duration-300 hover:scale-110 z-20"
            aria-label="Transformation suivante"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Carrousel principal */}
          <div className="mb-4 sm:mb-6">
            {/* Image avec slider */}
            <div className="relative aspect-[3/2] sm:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <div 
                ref={sliderRef}
                className="relative w-full h-full cursor-ew-resize select-none"
                onMouseDown={handleMouseDown}
              >
                {/* Image Avant (toujours visible en arrière-plan) */}
                <div className="absolute inset-0">
                  <Image
                    src={transformations[currentIndex].before}
                    alt="Avant"
                    fill
                    className="object-contain sm:object-cover pointer-events-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 400px"
                  />
                </div>
                
                {/* Image Après (superposée, révélée par le masque) */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ 
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                  >
                    <Image
                      src={transformations[currentIndex].after}
                      alt="Après"
                      fill
                      className="object-contain sm:object-cover pointer-events-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 400px"
                    />
                  </div>
                </div>
                
                {/* Ligne de séparation */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-10"
                  style={{ left: `${sliderPosition}%` }}
                />
                
                {/* Poignée du slider */}
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-1 h-4 bg-gray-400 rounded-full" />
                </div>
                
                {/* Indicateur de position */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-2 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm pointer-events-none z-10">
                  {currentIndex + 1} / {transformations.length}
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs de navigation */}
          <div className="flex justify-center gap-2 sm:gap-3">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Aller à la transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection; 