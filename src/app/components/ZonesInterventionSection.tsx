"use client";

import React from 'react';
import { MapPin } from 'lucide-react';

const ZonesInterventionSection = () => {
  const villesPrincipales = [
    'Herve', 'Liège', 'Verviers', 'Dison', 'Spa', 'Huy', 'Aubel', 'Aywaille'
  ];

  const getVilleSlug = (ville: string) => {
    return ville.toLowerCase()
      .replace(/[éèêë]/g, 'e')
      .replace(/[àâä]/g, 'a')
      .replace(/[ùûü]/g, 'u')
      .replace(/[ôö]/g, 'o')
      .replace(/[îï]/g, 'i')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre et description unifiés */}
        <div className="text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
            <MapPin className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Service mobile</span>
          </div>
          <h2 className="text-[clamp(1.2rem,4vw,1.75rem)] font-semibold text-balance break-words hyphens-auto text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Zones d&apos;intervention
          </h2>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-2xl p-8 md:p-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Service Premium à Domicile
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-200 leading-relaxed text-center">
                <span className="text-green-300 font-semibold">Service premium à domicile</span> dans toute la région. 
                Découvrez les villes où nous intervenons pour <span className="text-emerald-300 font-semibold">redonner l&apos;éclat à votre véhicule</span> 
                avec nos <span className="text-green-300 font-semibold">prestations haut de gamme de nettoyage de véhicule</span>.
              </p>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-400/50 to-emerald-400/50 rounded-full mx-auto"></div>
              
              <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-200 leading-relaxed text-center">
                Nous intervenons dans toute la région pour des prestations de <span className="text-emerald-300 font-semibold">lavage auto</span> et <span className="text-emerald-300 font-semibold">nettoyage voiture à domicile</span>. Que vous soyez à <span className="text-green-300 font-medium">Herve, Spa, Huy, Verviers</span> ou <span className="text-green-300 font-medium">Aubel</span>, <span className="text-emerald-300 font-semibold">Shine&Go</span> se déplace chez vous pour vous faire gagner du temps sans compromis sur la qualité.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-400/30">
                <span className="text-green-300 text-sm font-medium">✨ Qualité garantie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des villes principales avec design moderne */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12 lg:mt-16">
          {villesPrincipales.map((ville, index) => (
            <a
              key={index}
              href={`/zone-intervention/${getVilleSlug(ville)}`}
              className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl min-h-[44px] min-w-[44px]"
              aria-label={`Découvrir notre service de nettoyage voiture à ${ville}`}
            >
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Contenu */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300 break-words hyphens-auto">
                  {ville}
                </h3>
                <p className="text-gray-300 text-sm md:text-base break-words hyphens-auto">
                  Service premium à domicile
                </p>
                <div className="mt-4 inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full border border-green-400/30">
                  <span className="text-green-300 text-xs font-medium">Disponible</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Lien vers toutes les villes avec design moderne */}
        <div className="text-center mt-8 md:mt-12">
          <a
            href="/zone-intervention"
            className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 hover:scale-105 hover:border-emerald-400/50 min-h-[44px] min-w-[44px]"
            aria-label="Voir toutes les villes desservies par notre service de nettoyage voiture"
          >
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <MapPin className="w-5 h-5 mr-3 relative z-10" />
            <span className="relative z-10">Voir toutes les villes desservies</span>
          </a>
        </div>


      </div>
    </section>
  );
};

export default ZonesInterventionSection; 