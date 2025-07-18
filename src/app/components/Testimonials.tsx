'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useHydration } from '../hooks/useHydration';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHydrated = useHydration();

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      location: 'Herve',
      rating: 5,
      text: 'Service exceptionnel ! Ma voiture n\'a jamais été aussi propre. Rapide, professionnel et très attentionné. Je recommande vivement !',
      vehicle: 'Berline familiale'
    },
    {
      id: 2,
      name: 'Pierre Martin',
      location: 'Verviers',
      rating: 5,
      text: 'Excellent travail ! Le nettoyage intérieur était parfait et l\'extérieur brille comme au premier jour. Service ponctuel et professionnel.',
      vehicle: 'SUV Premium'
    },
    {
      id: 3,
      name: 'Sophie Lambert',
      location: 'Spa',
      rating: 5,
      text: 'Je suis bluffée par le résultat ! Ma voiture a retrouvé son éclat d\'origine. Le detailing est vraiment professionnel. Merci !',
      vehicle: 'Voiture sport'
    },
    {
      id: 4,
      name: 'Jean Dupont',
      location: 'Liège',
      rating: 5,
      text: 'Service de qualité premium. Les produits utilisés sont excellents et le résultat est durable. Je recommande sans hésitation.',
      vehicle: 'Citadine'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[clamp(1.5rem,1.25rem+2vw,1.75rem)] font-bold text-text-primary mb-3 sm:mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-text-primary max-w-3xl mx-auto">
            Découvrez les avis de nos clients satisfaits
          </p>
        </motion.div>

        <motion.div
          initial={isHydrated ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isHydrated ? 0.1 : 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Testimonial Card */}
          <div className="rounded-2xl bg-white shadow-md p-4 sm:p-6 max-w-4xl mx-auto relative">
            <Quote className="absolute top-4 sm:top-6 left-4 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 text-accent/30" />
            
            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-text-primary mb-6 sm:mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-text-primary">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[clamp(0.9375rem,0.8rem+0.5vw,1rem)] text-text-primary">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].vehicle}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-accent' : 'bg-ui-border'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Google Reviews Link */}
        <motion.div
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isHydrated ? 0.2 : 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a 
            href="https://www.google.com/search?q=shine+and+go+herve+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[clamp(0.75rem,0.7rem+0.3vw,0.875rem)] font-medium text-text-primary hover:text-accent transition-colors"
          >
            <span>Voir tous les avis Google</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 