"use client";

import React from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ZonesInterventionPage = () => {
  const villes = [
    'Herve', 'Liège', 'Verviers', 'Dison', 'Spa', 'Huy', 'Aubel', 'Aywaille', 
    'Battice', 'Blegny', 'Chaudfontaine', 'Dalhem', 'Engis', 'Esneux', 'Eupen', 
    'Fleron', 'Kelmis', 'Limbourg', 'Lontzen', 'Malmedy', 'Olne', 'Pepinster', 
    'Plombieres', 'Raeren', 'Saint-Georges', 'Seraing', 'Soumagne', 'Sprimont', 
    'Stavelot', 'Theux', 'Thimister', 'Trooz', 'Vaals', 'Visé', 'Waimes', 'Waremme', 
    'Welkenraedt', 'Aix-la-Chapelle', 'Argenteau', 'Baelen', 'Beaufays', 'Berloz', 
    'Donceel', 'Embourg', 'Flémalle', 'Francorchamps', 'Gemmenich', 'Jalhay', 
    'Jemeppe', 'Marchin', 'Montzen', 'Mouland', 'Nessonvaux', 'Ovifat', 'Remicourt', 
    'Remouchamps', 'Robertville', 'Tilff', 'Trois-Ponts', 'Verlaine', 'Wanze'
  ];

  const formatVilleForUrl = (ville: string) => {
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
    <div className="min-h-screen text-white bg-slate-900">
      {/* Header */}
      <header className="w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="text-xl font-bold text-white">
                Shine&Go
              </span>
            </Link>

            {/* Bouton retour */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Retour à l&apos;accueil</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Titre et description */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Zones d&apos;intervention
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Service premium à domicile dans toute la région. Découvrez toutes les villes où nous intervenons 
                pour redonner l&apos;éclat à votre véhicule avec nos prestations haut de gamme.
              </p>
              <div className="flex items-center justify-center mt-6 text-blue-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-sm md:text-base">
                  {villes.length} villes desservies dans la région
                </span>
              </div>
            </div>

            {/* Grille des villes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {villes.map((ville, index) => (
                <Link
                  key={index}
                  href={`/zone-intervention/${formatVilleForUrl(ville)}`}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {ville}
                  </span>
                </Link>
              ))}
            </div>

            {/* Section CTA */}
            <div className="text-center mt-12 md:mt-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  Prêt à redonner de l&apos;éclat à votre véhicule ?
                </h2>
                <p className="text-gray-300 mb-6">
                  Contactez-nous dès maintenant pour un devis personnalisé ou une réservation directe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/32472303701"
                    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>WhatsApp Direct</span>
                  </a>
                  <a 
                    href="tel:+32472303701"
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Appel Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="bg-slate-800 py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Shine&Go Premium • Rue Moreau, 20, 4650 Herve • +32 472 30 37 01
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ZonesInterventionPage; 