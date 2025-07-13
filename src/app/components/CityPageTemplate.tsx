"use client";

import React from 'react';
import { Sparkles, Star, MapPin, ChevronLeft, ChevronRight, MessageCircle, Phone, Gift, Users, CheckCircle } from 'lucide-react';
import TransformationsSection from './TransformationsSection';
import Hero from './Hero';
import PricingTable from './PricingTable';
import Header from './Header';
import HowItWorks from './HowItWorks';
import CalendlyPopup from './CalendlyPopup';
import { getCityContent } from '../utils/cityContent';
import { getNearbyCities } from '../utils/cityData';

// Déclaration de type pour Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget: (options: any) => void;
    };
  }
}

interface CityPageTemplateProps {
  citySlug: string;
}

export default function CityPageTemplate({ citySlug }: CityPageTemplateProps) {
  const cityContent = getCityContent(citySlug);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  // Fonction pour générer des descriptions d'avantages dynamiques
  const getAvantageDescription = (avantage: string, index: number) => {
    if (avantage.includes('Intervention')) return "Notre équipe mobile se déplace chez vous pour un service pratique et efficace.";
    if (avantage.includes('Produits professionnels')) return "Utilisation exclusive de produits Koch Chemie pour un résultat durable.";
    if (avantage.includes('Service 7j/7')) return "Disponible tous les jours de la semaine pour s'adapter à vos horaires.";
    if (avantage.includes('Garantie satisfaction')) return "Satisfaction garantie ou retouche gratuite incluse dans nos prestations.";
    if (avantage.includes('Connaissance locale')) return "Notre équipe connaît parfaitement la région et ses spécificités.";
    if (avantage.includes('Service adapté')) return "Horaires flexibles adaptés aux besoins de votre région.";
    if (avantage.includes('Intervention dans les villages')) return "Service disponible même dans les plus petits villages de la région.";
    if (avantage.includes('Prix compétitifs')) return "Tarifs transparents et compétitifs pour un service premium.";
    return "Service premium garanti pour votre satisfaction totale.";
  };

  // Fonction pour générer des descriptions de services dynamiques
  const getServiceDescription = (service: string, index: number) => {
    if (service.includes('Nettoyage complet')) return "Intérieur et extérieur soigneusement nettoyés avec des produits professionnels.";
    if (service.includes('Traitement hydrophobe')) return "Protection ProtectorWax pour une résistance aux intempéries durable.";
    if (service.includes('Protection plastiques')) return "CarPro Perl pour protéger et faire briller tous les plastiques.";
    if (service.includes('Nettoyage jantes')) return "Nettoyage en profondeur des jantes et passages de roues.";
    if (service.includes('Traitement anti-statique')) return "Évite l'accumulation de poussière après le nettoyage.";
    if (service.includes('Séchage professionnel')) return "Séchage soigneux pour un résultat showroom parfait.";
    if (service.includes('Finition showroom')) return "Attention aux détails pour un résultat exceptionnel.";
    return "Service professionnel avec produits haut de gamme.";
  };

  return (
    <div className="min-h-screen text-white bg-slate-900 relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Header */}
      <Header cityName={cityContent.ville} />

      {/* Hero Section */}
      <Hero />

      {/* AUTO-CONTENT-START */}
      {/* Contenu unique par ville : description, avantages, services, témoignages, statistiques */}

      {/* Transformations Section */}
      <section id="transformations" className="py-16 md:py-24 relative">
        <div className="relative z-10">
          <TransformationsSection />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Pricing Table Section */}
      <section id="services">
        <PricingTable />
      </section>

      {/* Section Avantages spécifiques à la ville */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
                <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Avantages locaux</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pourquoi choisir Shine&Go à {cityContent.ville} ?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {cityContent.description}
              </p>
            </div>
            
            {/* Grille des avantages avec design amélioré */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cityContent.avantages.slice(0, 6).map((avantage, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-6 h-6 text-blue-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{avantage}</h3>
                    </div>
                    <div className="h-px bg-gradient-to-r from-blue-500/20 to-transparent mb-4"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {getAvantageDescription(avantage, index)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistiques rapides */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{cityContent.statistiques.noteMoyenne}</div>
                <div className="text-gray-300 text-sm md:text-base">Note moyenne</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">{cityContent.statistiques.satisfaction}</div>
                <div className="text-gray-300 text-sm md:text-base">Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">{cityContent.statistiques.clientsRavis}</div>
                <div className="text-gray-300 text-sm md:text-base">Clients ravis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services spécifiques */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-green-300 text-sm font-medium">Nos prestations</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Services à {cityContent.ville}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Découvrez notre gamme complète de services de nettoyage automobile premium, adaptés aux besoins spécifiques de {cityContent.ville} et sa région.
              </p>
            </div>
            
            {/* Grille des services avec design amélioré */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cityContent.servicesSpecifiques.map((service, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-6 h-6 text-green-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">{service}</h3>
                    </div>
                    <div className="h-px bg-gradient-to-r from-green-500/20 to-transparent mb-4"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {getServiceDescription(service, index)}
                    </p>
                    <div className="mt-4 inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full border border-green-400/30">
                      <span className="text-green-300 text-xs font-medium">Inclus</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-action pour les services */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Prêt à redonner l'éclat à votre véhicule ?
                </h3>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                  Contactez-nous dès maintenant pour un devis personnalisé et profitez de nos services premium à {cityContent.ville}.
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
                    className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-400/30 hover:scale-105 hover:border-pink-400/50"
                  >
                    <Sparkles className="w-5 h-5 mr-3 relative z-10" />
                    <span className="relative z-10">Réserver maintenant</span>
                  </button>
                  <a
                    href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto à domicile"
                    className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 hover:scale-105 hover:border-emerald-400/50"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
                    <span className="relative z-10">Devis gratuit WhatsApp</span>
                  </a>
                  <a
                    href="tel:+32472303701"
                    className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-400/30 hover:scale-105 hover:border-cyan-400/50"
                  >
                    <Phone className="w-5 h-5 mr-3 relative z-10" />
                    <span className="relative z-10">Appeler maintenant</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages spécifiques à la ville */}
      <section id="temoignages" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Titre et description */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 mb-6">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-medium">Avis clients {cityContent.ville}</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ce que disent nos clients à {cityContent.ville}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Découvrez les témoignages de nos clients satisfaits qui ont transformé leur véhicule avec Shine&Go dans la région de {cityContent.ville}.
              </p>
            </div>

            {/* Carrousel d'avis moderne */}
            <div className="relative max-w-4xl mx-auto">
              {/* Bouton précédent */}
              <button
                onClick={() => setCurrentTestimonial((c) => (c - 1 + cityContent.temoignages.length) % cityContent.temoignages.length)}
                aria-label="Avis précédent"
                className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                style={{transform: 'translateY(-50%)'}}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
              </button>

              {/* Carte d'avis principale */}
              <div className="relative mx-12 md:mx-16">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl text-center group hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Avatar et nom */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-blue-300" />
                      </div>
                      <div className="font-bold text-blue-300 text-lg md:text-xl mb-2">{cityContent.temoignages[currentTestimonial].name}</div>
                      <div className="text-gray-400 text-sm">
                        {cityContent.temoignages[currentTestimonial].localisation === "Région" 
                          ? `${cityContent.ville} et environs`
                          : cityContent.temoignages[currentTestimonial].localisation}
                      </div>
                    </div>

                    {/* Étoiles */}
                    <div className="flex justify-center mb-6">
                      {[...Array(cityContent.temoignages[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current mx-1 group-hover:scale-110 transition-transform duration-300" />
                      ))}
                    </div>

                    {/* Citation */}
                    <div className="relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl text-blue-400/30">"</div>
                      <p className="italic text-gray-200 text-base md:text-lg leading-relaxed relative z-10">"{cityContent.temoignages[currentTestimonial].text}"</p>
                    </div>

                    {/* Badge de satisfaction */}
                    <div className="mt-6">
                      <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-400/30">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        <span className="text-green-300 text-sm font-medium">Client satisfait</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton suivant */}
              <button
                onClick={() => setCurrentTestimonial((c) => (c + 1) % cityContent.temoignages.length)}
                aria-label="Avis suivant"
                className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                style={{transform: 'translateY(-50%)'}}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
              </button>
            </div>

            {/* Indicateurs de navigation */}
            <div className="flex justify-center mt-8 md:mt-12 space-x-2">
              {cityContent.temoignages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Aller à l'avis ${index + 1}`}
                />
              ))}
            </div>

            {/* Statistiques spécifiques à la ville */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{cityContent.statistiques.noteMoyenne}</div>
                <div className="text-gray-300 text-sm md:text-base">Note moyenne</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">{cityContent.statistiques.satisfaction}</div>
                <div className="text-gray-300 text-sm md:text-base">Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">{cityContent.statistiques.clientsRavis}</div>
                <div className="text-gray-300 text-sm md:text-base">Clients ravis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Anecdotes et Infos Locales */}
      {(cityContent.anecdotes.length > 0 || cityContent.population) && (
        <section className="py-12 md:py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Anecdotes */}
                {cityContent.anecdotes.length > 0 && (
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-6 md:p-8 shadow-lg">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Anecdotes locales</h3>
                    <ul className="list-disc list-inside text-gray-200 space-y-2">
                      {cityContent.anecdotes.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Infos locales */}
                {(cityContent.population || cityContent.typeVille || cityContent.particularites || cityContent.clienteleType) && (
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 md:p-8 shadow-lg">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Infos locales</h3>
                    <ul className="text-gray-200 space-y-2">
                      {cityContent.population && <li><span className="font-semibold text-blue-300">Population :</span> {cityContent.population}</li>}
                      {cityContent.typeVille && <li><span className="font-semibold text-blue-300">Type :</span> {cityContent.typeVille.replace(/_/g, ' ')}</li>}
                      {cityContent.particularites && cityContent.particularites.length > 0 && <li><span className="font-semibold text-blue-300">Particularités :</span> {cityContent.particularites.join(', ')}</li>}
                      {cityContent.clienteleType && <li><span className="font-semibold text-blue-300">Clientèle :</span> {cityContent.clienteleType.replace(/_/g, ' ')}</li>}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* AUTO-CONTENT-END */}

      {/* Section À proximité */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Titre et description */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-6">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-green-300 text-sm font-medium">Service mobile</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                À proximité
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Nous intervenons également dans les villes voisines de {cityContent.ville}. Service premium à domicile dans toute la région.
              </p>
            </div>

            {/* Grille des villes voisines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {getNearbyCities(citySlug).slice(0, 3).map((ville: string, index: number) => (
                <a
                  key={index}
                  href={`/zone-intervention/${ville.toLowerCase().replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[ùûü]/g, 'u').replace(/[ôö]/g, 'o').replace(/[îï]/g, 'i').replace(/[ç]/g, 'c').replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                  className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
                </a>
              ))}
            </div>

            {/* Lien vers toutes les villes */}
            <div className="text-center">
              <a
                href="/zone-intervention"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 hover:scale-105 hover:border-emerald-400/50"
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <MapPin className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Voir toutes les villes desservies</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendly Popup en bas à droite */}
      <CalendlyPopup />
    </div>
  );
} 