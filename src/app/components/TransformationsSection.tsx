'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useHydration } from '../hooks/useHydration';

export default function TransformationsSection() {
  const isHydrated = useHydration();

  const transformations = [
    {
      id: 1,
      before: '/transformations/webp/berline-familiale-sale-avant-nettoyage-herve.webp',
      after: '/transformations/webp/berline-familiale-propre-apres-nettoyage-herve.webp',
      title: 'Berline Familiale',
      location: 'Herve',
      rating: 5,
      description: 'Nettoyage complet intérieur et extérieur'
    },
    {
      id: 2,
      before: '/transformations/webp/citadine-premium-sale-avant-lavage-aubel.webp',
      after: '/transformations/webp/citadine-premium-propre-apres-lavage-aubel.webp',
      title: 'Citadine Premium',
      location: 'Aubel',
      rating: 5,
      description: 'Lavage extérieur avec traitement hydrophobe'
    },
    {
      id: 3,
      before: '/transformations/webp/interieur-voiture-sale-avant-nettoyage-dison.webp',
      after: '/transformations/webp/interieur-voiture-propre-apres-nettoyage-dison.webp',
      title: 'Intérieur Voiture',
      location: 'Dison',
      rating: 5,
      description: 'Nettoyage intérieur en profondeur'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[clamp(1.5rem,1.25rem+2vw,1.75rem)] font-bold text-text-primary mb-3 sm:mb-4">
            Transformations spectaculaires
          </h2>
          <p className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-text-primary max-w-3xl mx-auto">
            Découvrez les résultats de nos interventions avant/après
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              initial={isHydrated ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isHydrated ? index * 0.1 : 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-2xl bg-white shadow-md p-4 sm:p-6 transition-transform hover:scale-[1.02]">
                {/* Images Before/After */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <Image
                        src={transformation.before}
                        alt={`Avant nettoyage voiture ${transformation.title} ${transformation.location} - Car wash mobile Shine&Go lavage auto professionnel`}
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Avant
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={transformation.after}
                        alt={`Après nettoyage voiture ${transformation.title} ${transformation.location} - Résultat car wash lavage automobile Shine&Go`}
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        Après
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-[clamp(1.25rem,1.1rem+1.3vw,1.375rem)] font-bold text-text-primary mb-2">
                    {transformation.title}
                  </h3>
                  <p className="text-[clamp(0.9375rem,0.8rem+0.5vw,1rem)] text-text-primary mb-3">
                    {transformation.location}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-3">
                    {[...Array(transformation.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-text-primary">
                    {transformation.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isHydrated ? 0.3 : 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 sm:px-6 py-2.5 sm:py-3 text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] font-semibold text-white shadow-md transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent"
          >
            Voir plus de transformations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 