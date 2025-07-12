"use client";

import React from 'react';
import { MapPin, MessageCircle, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import CalendlyPopup from '../components/CalendlyPopup';

// Déclaration de type pour Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget: (options: any) => void;
    };
  }
}

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

const ZonesInterventionPage = () => {
  return (
    <div className="min-h-screen text-white bg-slate-900 relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Titre et description */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-6">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-green-300 text-sm font-medium">Service mobile premium</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Zones d&apos;intervention
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Service premium à domicile dans toute la région. Découvrez toutes les villes où nous intervenons pour redonner l&apos;éclat à votre véhicule avec nos prestations haut de gamme.
              </p>
              <div className="flex items-center justify-center mt-6 text-green-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-sm md:text-base">
                  {villes.length} villes desservies dans la région
                </span>
              </div>
            </div>

            {/* Grille des villes avec design moderne */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-16">
              {villes.map((ville, index) => (
                <Link
                  key={index}
                  href={`/zone-intervention/${formatVilleForUrl(ville)}`}
                  className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-green-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                      {ville}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Service premium à domicile
                    </p>
                    <div className="mt-4 inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full border border-green-400/30">
                      <span className="text-green-300 text-xs font-medium">Disponible</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Section CTA avec design moderne */}
            <div className="text-center mt-12 md:mt-16">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Prêt à redonner de l&apos;éclat à votre véhicule ?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Contactez-nous dès maintenant pour un devis personnalisé ou une réservation directe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      if (window.Calendly) {
                        window.Calendly.initPopupWidget({
                          url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                        });
                      }
                    }}
                    className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-purple-400/20"
                  >
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <Calendar className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Réserver maintenant</span>
                  </button>
                  <a 
                    href="https://wa.me/32472303701"
                    className="group relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-green-400/20"
                  >
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <MessageCircle className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">WhatsApp Direct</span>
                  </a>
                  <a 
                    href="tel:+32472303701"
                    className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-blue-400/20"
                  >
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <Phone className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Appel Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer simple modernisé */}
      <footer className="bg-slate-800/80 py-8 border-t border-white/10 backdrop-blur-xl">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Shine&Go Premium • Rue Moreau, 20, 4650 Herve • +32 472 30 37 01
          </p>
        </div>
      </footer>

      {/* Calendly Popup en bas à droite */}
      <CalendlyPopup />
    </div>
  );
};

export default ZonesInterventionPage;
