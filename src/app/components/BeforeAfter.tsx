'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useHydration } from '../hooks/useHydration';

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHydrated = useHydration();

  const transformations = [
    {
      id: 1,
      before: '/transformations/berline-familiale-sale-avant-nettoyage-herve.jpeg',
      after: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg'
    },
    {
      id: 2,
      before: '/transformations/citadine-premium-sale-avant-lavage-aubel.jpeg',
      after: '/transformations/citadine-premium-propre-apres-lavage-aubel.jpeg'
    },
    {
      id: 3,
      before: '/transformations/voiture-sport-sale-avant-detailing-spa.jpeg',
      after: '/transformations/voiture-sport-propre-apres-detailing-spa.jpeg'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[clamp(1.5rem,1.25rem+2vw,1.75rem)] font-bold text-gray-900 mb-3 sm:mb-4">
            Transformations spectaculaires
          </h2>
          <p className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-gray-600 max-w-3xl mx-auto">
            Découvrez les résultats de nos services de nettoyage automobile
          </p>
        </motion.div>

        <motion.div
          initial={isHydrated ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isHydrated ? 0.1 : 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-80 sm:h-96 md:h-[500px]">
              <Image
                src={transformations[currentIndex].before}
                alt={`Avant nettoyage voiture - Transformation ${currentIndex + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              
              {/* After Image Overlay */}
              <div className="absolute inset-0 w-1/2 overflow-hidden">
                <Image
                  src={transformations[currentIndex].after}
                  alt={`Après nettoyage voiture - Transformation ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Divider Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2"></div>
              
              {/* Labels */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                AVANT
              </div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                APRÈS
              </div>
            </div>


          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isHydrated ? 0.2 : 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            onClick={handleBooking}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Réserver ma transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 