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

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const updateSliderPosition = (clientX: number) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateSliderPosition(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updateSliderPosition(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  return (
    <section className="py-8 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Transformations Premium
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Découvrez la magie de mes services de nettoyage premium professionnel
          </p>
        </div>
        
        <div className="max-w-lg md:max-w-2xl mx-auto relative">
          {/* Boutons de navigation - Mobile-optimized */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 md:p-2 text-white transition-colors duration-300 z-20 w-10 h-10 md:w-10 md:h-10 flex items-center justify-center"
            aria-label="Transformation précédente"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 md:p-2 text-white transition-colors duration-300 z-20 w-10 h-10 md:w-10 md:h-10 flex items-center justify-center"
            aria-label="Transformation suivante"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Carrousel principal */}
          <div className="mb-4 md:mb-6">
            {/* Image avec slider */}
            <div className="relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-xl">
              <div 
                ref={sliderRef}
                className="relative w-full h-full cursor-ew-resize select-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                {/* Image Avant (toujours visible en arrière-plan) */}
                <div className="absolute inset-0">
                  <Image
                    src={transformations[currentIndex].before}
                    alt="Avant"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 600px"
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
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 600px"
                    />
                  </div>
                </div>
                
                {/* Ligne de séparation */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-10"
                  style={{ left: `${sliderPosition}%` }}
                />
                
                {/* Poignée du slider - Mobile-optimized */}
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-1 h-4 md:h-5 bg-gray-400 rounded-full" />
                </div>
                
                {/* Indicateur de position */}
                <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 md:py-1 text-white text-xs md:text-sm pointer-events-none z-10">
                  {currentIndex + 1} / {transformations.length}
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs de navigation - Mobile-optimized */}
          <div className="flex justify-center gap-1.5 md:gap-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-gray-400'
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