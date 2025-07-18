'use client';

import { motion } from 'framer-motion';
import { MapPin, Car, Clock } from 'lucide-react';
import { cities } from '@/lib/packs';
import { useHydration } from '../hooks/useHydration';

export default function LocalSEO() {
  const isHydrated = useHydration();
  const mainCities = cities.slice(0, 8);
  const otherCities = cities.slice(8);

  return (
    <section id="zones-section" className="py-20 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[clamp(1.5rem,1.25rem+2vw,1.75rem)] font-bold text-gray-900 mb-3 sm:mb-4 break-words hyphens-auto">
            Service de nettoyage voiture à domicile
          </h2>
          <p className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-gray-600 max-w-3xl mx-auto break-words hyphens-auto">
            Disponible dans toute la province de Liège et ses environs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={isHydrated ? { opacity: 0, x: -30 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: isHydrated ? 0.1 : 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-[clamp(1.25rem,1.1rem+1.3vw,1.375rem)] font-bold text-gray-900 mb-3 sm:mb-4 break-words hyphens-auto">
                Zones d'intervention
              </h3>
              <p className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-gray-600 leading-relaxed mb-4 sm:mb-6 break-words hyphens-auto">
                Shine&Go propose ses services de nettoyage automobile à domicile dans toute la province de Liège. 
                Notre service mobile nous permet de nous déplacer chez vous avec tout l'équipement professionnel nécessaire.
              </p>
            </div>

            {/* Main Cities */}
            <div>
              <h4 className="text-[clamp(1.125rem,1rem+1vw,1.25rem)] font-semibold text-gray-900 mb-3 sm:mb-4 break-words hyphens-auto">Villes principales :</h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {mainCities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={isHydrated ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: isHydrated ? 0.2 + index * 0.1 : 0 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-gray-100 min-w-0"
                  >
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-[clamp(0.9375rem,0.8rem+0.5vw,1rem)] text-gray-700 font-medium break-words min-w-0">{city}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Service Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <Car className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-gray-700 break-words min-w-0">Service mobile inclus</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-gray-700 break-words min-w-0">Créneaux flexibles 7j/7</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] text-gray-700 break-words min-w-0">Rayon d'intervention : 30km</span>
              </div>
            </div>
          </motion.div>

          {/* Cities Grid */}
          <motion.div
            initial={isHydrated ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: isHydrated ? 0.2 : 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100"
          >
            <h4 className="text-[clamp(1.125rem,1rem+1vw,1.25rem)] font-semibold text-gray-900 mb-4 sm:mb-6 text-center break-words hyphens-auto">
              Toutes nos zones d'intervention
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={isHydrated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: isHydrated ? 0.3 + index * 0.05 : 0 }}
                  viewport={{ once: true }}
                  className="text-center p-2 rounded-lg hover:bg-sky-50 transition-colors duration-200"
                >
                  <span className="text-[clamp(0.9375rem,0.8rem+0.5vw,1rem)] text-gray-700 font-medium">{city}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-4 sm:mt-6">
              <p className="text-[clamp(0.75rem,0.7rem+0.3vw,0.875rem)] text-gray-600">
                Service disponible dans un rayon de 30km autour de Herve
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isHydrated ? 0.4 : 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-[clamp(1.5rem,1.25rem+2vw,1.75rem)] font-bold mb-3 sm:mb-4">
              Votre ville n'est pas listée ?
            </h3>
            <p className="text-[clamp(1.125rem,1rem+1vw,1.25rem)] mb-6 sm:mb-8 opacity-90">
              Contactez-nous pour vérifier notre disponibilité dans votre zone
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] transition-colors duration-200 shadow-lg"
              >
                Vérifier la disponibilité
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] transition-colors duration-200"
              >
                Nous contacter
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 