"use client";

import React from 'react';
import { Sparkles, Star, MapPin, ChevronLeft, ChevronRight, MessageCircle, Phone, Gift, Users, CheckCircle } from 'lucide-react';
import TransformationsSection from './TransformationsSection';
import Hero from './Hero';
import PricingTable from './PricingTable';
import Header from './Header';
import HowItWorks from './HowItWorks';
import CalendlyPopup from './CalendlyPopup';
import { getCityContent, getNearbyTestimonials } from '../utils/cityContent';
import { getNearbyCities, getCityData } from '../utils/cityData';

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

// Composant pour générer le JSON-LD FAQPage schema.org
const FAQSchema = ({ cityName, nearbyCities }: { cityName: string; nearbyCities: string[] }) => {
  const faqData = [
    {
      question: `Quel est le prix d'un nettoyage voiture complet à ${cityName} ?`,
      answer: `Le tarif d'un nettoyage voiture complet à ${cityName} dépend du type de véhicule et des options choisies. Contactez-nous pour un devis personnalisé ou consultez notre simulateur en ligne.`
    },
    {
      question: `Combien de temps dure un nettoyage auto à ${cityName} avec Shine&Go ?`,
      answer: `Un nettoyage auto à ${cityName} dure en moyenne 90 minutes, selon l'état du véhicule et la formule choisie. Notre équipe s'assure d'un résultat showroom à chaque intervention.`
    },
    {
      question: `Faites-vous du lavage auto à domicile à ${cityName} ?`,
      answer: `Oui, Shine&Go propose le lavage auto à domicile à ${cityName} et dans toute la région. Notre service mobile se déplace chez vous pour un nettoyage voiture professionnel.`
    },
    {
      question: `Quels produits utilisez-vous pour le nettoyage voiture à ${cityName} ?`,
      answer: `Nous utilisons exclusivement des produits professionnels Koch Chemie et CarPro pour le nettoyage voiture à ${cityName}. ProtectorWax et CarPro Perl sont inclus dans nos prestations.`
    },
    {
      question: `Proposez-vous un nettoyage complet intérieur/extérieur à domicile à ${cityName} ?`,
      answer: `Oui, notre service de nettoyage complet intérieur/extérieur à domicile à ${cityName} inclut l'aspiration, le nettoyage des plastiques, des vitres et le traitement hydrophobe.`
    },
    ...(nearbyCities.length > 0 ? [{
      question: `Intervenez-vous aussi à ${nearbyCities[0]} pour le nettoyage voiture ?`,
      answer: `Oui, Shine&Go propose le nettoyage voiture à ${nearbyCities[0]} et dans toute la région de ${cityName}. Notre service mobile couvre les villes voisines.`
    }] : [])
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function CityPageTemplate({ citySlug }: CityPageTemplateProps) {
  // Obtenir le nom de la ville à partir du slug
  const cityName = citySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const cityContent = getCityContent(citySlug, cityName);
  const cityData = getCityData(citySlug);
  const nearbyCities = cityData?.voisines || [];
  const region = cityData?.region || 'province de Liège';
  const nearbyTestimonials = getNearbyTestimonials(cityName, nearbyCities);
  
  // Fonction pour obtenir les quartiers de la ville (pour l'instant, on utilise les communes voisines
  // mais on pourrait créer une vraie base de données de quartiers)
  const getNeighborhoods = (cityName: string) => {
    // Pour l'instant, on retourne les communes voisines mais on pourrait
    // avoir une vraie base de données de quartiers par ville
    return nearbyCities;
  };
  
  const neighborhoods = getNeighborhoods(cityName);
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
    if (service.includes('Nettoyage complet')) return "Nettoyage voiture complet intérieur et extérieur soigneusement réalisé avec des produits professionnels.";
    if (service.includes('Traitement hydrophobe')) return "Protection ProtectorWax pour une résistance aux intempéries durable sur votre lavage voiture.";
    if (service.includes('Protection plastiques')) return "CarPro Perl pour protéger et faire briller tous les plastiques lors du nettoyage auto.";
    if (service.includes('Nettoyage jantes')) return "Nettoyage voiture en profondeur des jantes et passages de roues.";
    if (service.includes('Traitement anti-statique')) return "Évite l'accumulation de poussière après le lavage voiture.";
    if (service.includes('Séchage professionnel')) return "Séchage soigneux pour un résultat showroom parfait sur votre nettoyage auto.";
    if (service.includes('Finition showroom')) return "Attention aux détails pour un résultat exceptionnel sur votre lavage voiture.";
    return "Service professionnel de nettoyage voiture avec produits haut de gamme.";
  };

  // Fonction pour générer des anecdotes locales
  const getCityAnecdote = (cityName: string) => {
    const anecdotes: Record<string, string> = {
      'Liège': 'Liège est célèbre pour sa cathédrale Saint-Lambert et son carnaval traditionnel. Notre équipe connaît parfaitement les quartiers historiques et les parkings de la ville.',
      'Verviers': 'Verviers était autrefois la capitale mondiale de la laine, avec un riche patrimoine industriel. Nous intervenons dans tous les quartiers, y compris les zones résidentielles.',
      'Spa': 'Spa est mondialement connue pour ses eaux thermales et son circuit de Formule 1. Notre service mobile couvre toute la région, y compris les villages environnants.',
      'Huy': 'Huy abrite la célèbre Collégiale Notre-Dame, un joyau de l\'architecture mosane. Nous proposons un service de nettoyage voiture premium dans toute la ville.',
      'Herve': 'Herve est la capitale du fromage du même nom, un fromage à pâte molle typique de la région. Notre équipe locale connaît tous les quartiers et parkings.',
      'Dison': 'Dison est une ville dynamique située entre Verviers et Liège, avec un riche passé industriel. Nous intervenons dans tous les quartiers pour un service mobile.',
      'Aubel': 'Aubel est réputée pour son sirop de Liège et ses produits du terroir. Notre service de nettoyage voiture couvre toute la commune et les villages voisins.',
      'Aywaille': 'Aywaille est entourée de forêts et de rivières, parfaite pour les activités nature. Nous proposons un service mobile dans tous les quartiers de la ville.',
      'Sprimont': 'Sprimont est connue pour ses carrières de pierre bleue et ses paysages verdoyants. Notre équipe intervient dans tous les quartiers pour un nettoyage premium.',
      'Esneux': 'Esneux est située sur les rives de l\'Ourthe, offrant un cadre idyllique. Nous proposons un service de nettoyage voiture mobile dans toute la commune.',
      'Chaudfontaine': 'Chaudfontaine est célèbre pour ses sources thermales et son casino. Notre service mobile couvre tous les quartiers de cette ville touristique.',
      'Battice': 'Battice est un village paisible près de Herve, connu pour son calme et sa qualité de vie. Notre équipe propose un service de nettoyage voiture à domicile.',
      'Thimister': 'Thimister est un village typique du Pays de Herve, entouré de prairies et de vergers. Nous intervenons pour un nettoyage voiture premium à domicile.',
      'Soumagne': 'Soumagne est une commune dynamique avec un riche passé industriel. Notre service mobile couvre tous les quartiers pour un nettoyage voiture professionnel.',
      'Olne': 'Olne est un village pittoresque du Pays de Herve, connu pour son calme et ses paysages. Nous proposons un service de nettoyage voiture à domicile.',
      'Pepinster': 'Pepinster est une ville industrielle située entre Verviers et Liège. Notre équipe intervient dans tous les quartiers pour un nettoyage voiture premium.',
      'Limbourg': 'Limbourg est une ville historique avec un riche patrimoine architectural. Nous proposons un service mobile de nettoyage voiture dans toute la commune.',
      'Stavelot': 'Stavelot est célèbre pour son abbaye et son carnaval de la Laetare. Notre service mobile couvre toute la ville et les villages environnants.',
      'Malmedy': 'Malmedy est une ville culturelle avec un riche patrimoine historique. Nous intervenons dans tous les quartiers pour un nettoyage voiture professionnel.',
      'Theux': 'Theux est une ville dynamique entourée de forêts et de rivières. Notre équipe propose un service de nettoyage voiture mobile dans toute la commune.',
      'Wanze': 'Wanze est une commune rurale avec un riche patrimoine agricole. Nous proposons un service de nettoyage voiture à domicile dans tous les villages.',
      'Marchin': 'Marchin est un village paisible sur les rives de l\'Ourthe. Notre équipe intervient pour un nettoyage voiture premium à domicile.',
      'Amay': 'Amay est une ville industrielle avec un riche passé minier. Nous proposons un service mobile de nettoyage voiture dans tous les quartiers.',
      'Herstal': 'Herstal est célèbre pour son industrie d\'armement et son patrimoine industriel. Notre service mobile couvre toute la ville pour un nettoyage premium.',
      'Seraing': 'Seraing est une ville industrielle avec un riche passé sidérurgique. Nous intervenons dans tous les quartiers pour un nettoyage voiture professionnel.',
      'Ans': 'Ans est une commune dynamique de l\'agglomération liégeoise. Notre équipe propose un service de nettoyage voiture mobile dans toute la ville.'
    };
    
    return anecdotes[cityName] || `${cityName} est une ville dynamique de la province de Liège, où nous proposons nos services de nettoyage voiture premium. Notre équipe locale connaît parfaitement tous les quartiers et parkings de la ville.`;
  };

  // Fonction pour générer des témoignages locaux uniques
  const getLocalTestimonials = (cityName: string) => {
    const testimonials: Record<string, Array<{name: string, rating: number, text: string, location: string}>> = {
      'Liège': [
        { name: 'Marie L.', rating: 5, text: 'Service impeccable à Liège, ma voiture n\'a jamais été aussi propre ! Très ponctuel et professionnel.', location: 'Quartier Saint-Lambert' },
        { name: 'Pierre D.', rating: 5, text: 'Intervention rapide et efficace dans le centre de Liège. Résultat showroom garanti !', location: 'Centre-ville' },
        { name: 'Sophie M.', rating: 5, text: 'Excellent service mobile à Liège, très pratique à domicile. Je recommande vivement !', location: 'Quartier Outremeuse' }
      ],
      'Verviers': [
        { name: 'Jean P.', rating: 5, text: 'Service exceptionnel à Verviers, très professionnel et ponctuel. Ma voiture brille !', location: 'Centre de Verviers' },
        { name: 'Claire V.', rating: 5, text: 'Intervention rapide et efficace à Verviers. Résultat au-delà de mes attentes !', location: 'Quartier résidentiel' },
        { name: 'Marc L.', rating: 5, text: 'Service mobile parfait à Verviers, très pratique et professionnel.', location: 'Zone industrielle' }
      ],
      'Spa': [
        { name: 'Anne S.', rating: 5, text: 'Service premium à Spa, très professionnel et attentionné. Résultat exceptionnel !', location: 'Centre thermal' },
        { name: 'Paul M.', rating: 5, text: 'Intervention rapide et efficace à Spa. Service mobile très pratique !', location: 'Quartier résidentiel' },
        { name: 'Lucie D.', rating: 5, text: 'Excellent service à Spa, très ponctuel et professionnel. Je recommande !', location: 'Zone touristique' }
      ],
      'Huy': [
        { name: 'Thomas H.', rating: 5, text: 'Service impeccable à Huy, très professionnel et ponctuel. Résultat showroom !', location: 'Centre historique' },
        { name: 'Isabelle P.', rating: 5, text: 'Intervention rapide et efficace à Huy. Service mobile très pratique !', location: 'Quartier résidentiel' },
        { name: 'François L.', rating: 5, text: 'Excellent service à Huy, très attentionné et professionnel.', location: 'Zone commerciale' }
      ],
      'Herve': [
        { name: 'Nathalie H.', rating: 5, text: 'Service premium à Herve, très professionnel et ponctuel. Résultat exceptionnel !', location: 'Centre de Herve' },
        { name: 'Michel D.', rating: 5, text: 'Intervention rapide et efficace à Herve. Service mobile parfait !', location: 'Quartier résidentiel' },
        { name: 'Caroline L.', rating: 5, text: 'Excellent service à Herve, très attentionné et professionnel. Je recommande !', location: 'Zone rurale' }
      ]
    };
    
    return testimonials[cityName] || [
      { name: 'Client satisfait', rating: 5, text: 'Service exceptionnel dans la région, très professionnel et ponctuel. Résultat showroom garanti !', location: cityName },
      { name: 'Client local', rating: 5, text: 'Intervention rapide et efficace. Service mobile très pratique et professionnel.', location: cityName },
      { name: 'Client régulier', rating: 5, text: 'Excellent service, très attentionné et professionnel. Je recommande vivement !', location: cityName }
    ];
  };

  // Fonction pour générer des informations locales spécifiques
  const getLocalInfo = (cityName: string) => {
    const localInfo: Record<string, {parkings: string[], zones: string[], horaires: string}> = {
      'Liège': {
        parkings: ['Parking Saint-Lambert', 'Parking Opéra', 'Parking Cathédrale', 'Parking Gare', 'Parking Médiacité'],
        zones: ['Centre-ville', 'Outremeuse', 'Saint-Lambert', 'Droixhe', 'Bressoux'],
        horaires: 'Intervention 7j/7 de 8h à 20h, y compris les weekends'
      },
      'Verviers': {
        parkings: ['Parking Centre', 'Parking Gare', 'Parking Grand Place', 'Parking Commercial', 'Parking Résidentiel'],
        zones: ['Centre-ville', 'Quartier de la Gare', 'Zone commerciale', 'Quartiers résidentiels', 'Zone industrielle'],
        horaires: 'Service disponible 7j/7 de 8h à 20h'
      },
      'Spa': {
        parkings: ['Parking Thermal', 'Parking Centre', 'Parking Casino', 'Parking Circuit', 'Parking Résidentiel'],
        zones: ['Centre thermal', 'Zone touristique', 'Quartiers résidentiels', 'Zone du circuit', 'Villages environnants'],
        horaires: 'Intervention flexible 7j/7 de 8h à 20h'
      },
      'Huy': {
        parkings: ['Parking Collégiale', 'Parking Centre', 'Parking Gare', 'Parking Commercial', 'Parking Résidentiel'],
        zones: ['Centre historique', 'Quartiers résidentiels', 'Zone commerciale', 'Rives de la Meuse', 'Villages voisins'],
        horaires: 'Service mobile 7j/7 de 8h à 20h'
      },
      'Herve': {
        parkings: ['Parking Centre', 'Parking Commercial', 'Parking Gare', 'Parking Place', 'Parking Résidentiel'],
        zones: ['Centre de Herve', 'Quartiers résidentiels', 'Zone rurale', 'Villages voisins', 'Zone commerciale'],
        horaires: 'Intervention 7j/7 de 8h à 20h, service local'
      }
    };
    
    return localInfo[cityName] || {
      parkings: ['Parking Centre', 'Parking Commercial', 'Parking Gare', 'Parking Résidentiel', 'Parking Public'],
      zones: ['Centre-ville', 'Quartiers résidentiels', 'Zone commerciale', 'Villages voisins', 'Zone rurale'],
      horaires: 'Service mobile 7j/7 de 8h à 20h'
    };
  };

  const localTestimonials = getLocalTestimonials(cityName);
  const localInfo = getLocalInfo(cityName);

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <FAQSchema cityName={cityName} nearbyCities={nearbyCities} />
      
      <div className="min-h-screen text-white bg-slate-900 relative overflow-hidden">
        {/* Global Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Header */}
      <Header cityName={cityName} />

      {/* Hero Section */}
      <Hero cityName={cityName} neighborhoods={neighborhoods} region={region} />

      {/* AUTO-CONTENT-START */}
      {/* Contenu unique par ville : description, avantages, services, témoignages, statistiques */}

      {/* Transformations Section */}
      <section id="transformations" className="py-8 md:py-12 lg:py-16 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      {/* Section Contenu unique par ville - Design amélioré */}
      <section className="py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section principale - Nettoyage voiture à domicile */}
          <div className="text-center space-y-8 md:space-y-12">
            {/* Badge premium avec animation */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-full border border-blue-400/30 shadow-lg hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <CheckCircle className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-300 text-sm font-semibold tracking-wide">Service Premium Local</span>
            </div>
            
            {/* Titre principal avec effet de gradient animé */}
            <div className="relative">
              <h1 className="text-[clamp(2rem,7vw,3.5rem)] font-bold text-center text-balance hyphens-auto leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  Nettoyage voiture à {cityName}
                </span>
                <br />
                <span className="text-white">
                  Service à domicile
                </span>
              </h1>
              
              {/* Effet de brillance sous le titre */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full opacity-60"></div>
            </div>

            {/* Paragraphe d'intro avec design amélioré */}
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10">
                <p className="text-[clamp(1.1rem,3.5vw,1.3rem)] break-words hyphens-auto text-center leading-relaxed">
                  Shine&Go est spécialisé dans le <strong className="text-emerald-300">nettoyage voiture</strong> à domicile à {cityName}{neighborhoods.length > 0 ? `, ${neighborhoods.join(', ')}` : ''} et dans toute la {region}. Notre service 100% mobile réalise un <strong className="text-cyan-300">lavage voiture</strong> complet (intérieur+extérieur) avec des produits pro (Koch Chemie, CarPro). Que vous cherchiez un <strong className="text-blue-300">nettoyage auto</strong> rapide ou un traitement showroom complet, nous nous adaptons à vos besoins.
                </p>
                
                {/* Anecdote locale avec design distinctif */}
                <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-400/20">
                  <p className="italic text-sm text-center text-emerald-200">
                    📍 {getCityAnecdote(cityName)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section "Pourquoi choisir" avec design harmonisé */}
          <div className="mt-16 md:mt-20">
            <div className="text-center space-y-8 md:space-y-12">
              {/* Badge "Pourquoi nous choisir" */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-purple-400/30 shadow-lg hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                <Star className="w-5 h-5 mr-2 text-purple-400" />
                <span className="text-purple-300 text-sm font-semibold tracking-wide">Excellence Garantie</span>
              </div>
              
              {/* Titre H2 avec design cohérent */}
              <div className="relative">
                <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-center text-balance hyphens-auto leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                    Pourquoi choisir Shine&Go
                  </span>
                  <br />
                  <span className="text-white">
                    pour votre lavage voiture à {cityName} ?
                  </span>
                </h2>
                
                {/* Effet de brillance sous le titre */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full opacity-60"></div>
              </div>

              {/* Liste des arguments clés avec design moderne */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-8 md:p-10">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {[
                      "Nettoyage voiture à domicile (intérieur & extérieur)",
                      "Lavage auto complet avec produits professionnels",
                      "Nettoyage véhicule à domicile en 90 min",
                      "40 € de traitements Pro offerts : ProtectorWax & CarPro Perl"
                    ].map((argument, index) => (
                      <li key={index} className="flex items-start space-x-3 group">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-4 h-4 text-purple-300" />
                        </div>
                        <span className="text-gray-200 text-base md:text-lg leading-relaxed group-hover:text-purple-200 transition-colors duration-300">
                          {argument}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grille des avantages avec design premium */}
          <div className="mt-16 md:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                "Intervention mobile à domicile",
                "Produits professionnels Koch Chemie",
                "Service 7j/7 disponible",
                "Garantie satisfaction",
                "Connaissance locale",
                "Service adapté",
                "Intervention dans les villages",
                "Prix compétitifs"
              ].map((avantage, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-8 h-8 text-purple-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 break-words hyphens-auto text-center">
                      {avantage}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base text-center break-words hyphens-auto leading-relaxed">
                      {getAvantageDescription(avantage, index)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Zones desservies - Design amélioré */}
      <section className="py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 md:space-y-12">
            {/* Badge "Zones desservies" avec animation */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 backdrop-blur-xl rounded-full border border-orange-400/30 shadow-lg hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
              <MapPin className="w-5 h-5 mr-2 text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold tracking-wide">Zones d'Intervention</span>
            </div>
            
            {/* Titre avec effet de gradient animé */}
            <div className="relative">
              <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-center text-balance hyphens-auto leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                  Intervention dans tous les quartiers
                </span>
                <br />
                <span className="text-white">
                  de {cityName}
                </span>
              </h2>
              
              {/* Effet de brillance sous le titre */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full opacity-60"></div>
            </div>

            {/* Contenu avec design amélioré */}
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 backdrop-blur-xl border border-orange-400/20 rounded-2xl p-8 md:p-10">
                <p className="text-[clamp(1.1rem,3.5vw,1.3rem)] break-words hyphens-auto text-center leading-relaxed mb-6">
                  Shine&Go intervient dans tous les quartiers de <strong className="text-orange-300">{cityName}</strong>{neighborhoods.length > 0 ? `, dont ` : ''}{neighborhoods.length > 0 ? <strong className="text-amber-300">{neighborhoods.join(', ')}</strong> : ''}{neighborhoods.length > 0 ? `, ` : ''}pour un <strong className="text-orange-300">lavage auto premium</strong> à domicile.
                </p>
                
                <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 leading-relaxed text-center">
                  Notre service mobile nous permet de vous proposer un <strong className="text-amber-300">nettoyage voiture professionnel</strong> partout dans la région, sans que vous ayez à vous déplacer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services - Design amélioré */}
      <section className="py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 md:space-y-12">
            {/* Badge "Services premium" avec animation */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-400/30 shadow-lg hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <Sparkles className="w-5 h-5 mr-2 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-semibold tracking-wide">Services Premium</span>
            </div>
            
            {/* Titre avec effet de gradient animé */}
            <div className="relative">
              <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-center text-balance hyphens-auto leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                  Nos prestations de nettoyage auto
                </span>
                <br />
                <span className="text-white">
                  à {cityName}
                </span>
              </h2>
              
              {/* Effet de brillance sous le titre */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full opacity-60"></div>
            </div>

            {/* Description avec design amélioré */}
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-2xl p-8 md:p-10">
                <p className="text-[clamp(1.1rem,3.5vw,1.3rem)] break-words hyphens-auto text-center leading-relaxed mb-6">
                  Découvrez notre gamme complète de services de <strong className="text-emerald-300">nettoyage automobile</strong>, adaptés aux besoins spécifiques de <strong className="text-green-300">{cityName}</strong> et de sa région.
                </p>
                
                <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 leading-relaxed text-center">
                  Chaque service est réalisé avec des <strong className="text-emerald-300">produits professionnels</strong> pour garantir un <strong className="text-green-300">résultat showroom durable</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Grille des services avec design premium */}
          <div className="mt-16 md:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                "Nettoyage complet intérieur/extérieur",
                "Traitement hydrophobe ProtectorWax",
                "Protection plastiques CarPro Perl",
                "Nettoyage jantes en profondeur",
                "Traitement anti-statique",
                "Séchage professionnel",
                "Finition showroom",
                "Protection longue durée"
              ].map((service, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-emerald-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300 break-words hyphens-auto text-center">
                      {service}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base text-center break-words hyphens-auto leading-relaxed">
                      {getServiceDescription(service, index)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages locaux - Design amélioré */}
      {localTestimonials.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 relative">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8 md:space-y-12">
              {/* Badge "Avis locaux" avec animation */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 backdrop-blur-xl rounded-full border border-yellow-400/30 shadow-lg hover:shadow-yellow-500/25 transition-all duration-500 hover:scale-105">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-semibold tracking-wide">Avis Locaux</span>
              </div>
              
              {/* Titre avec effet de gradient animé */}
              <div className="relative">
                <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-center text-balance hyphens-auto leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                    Ce que disent nos clients
                  </span>
                  <br />
                  <span className="text-white">
                    à {cityName}
                  </span>
                </h2>
                
                {/* Effet de brillance sous le titre */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-60"></div>
              </div>

              {/* Description avec design amélioré */}
              <div className="max-w-5xl mx-auto space-y-6">
                <div className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 md:p-10">
                  <p className="text-[clamp(1.1rem,3.5vw,1.3rem)] break-words hyphens-auto text-center leading-relaxed mb-6">
                    Découvrez les témoignages de nos clients satisfaits dans la région de <strong className="text-yellow-300">{cityName}</strong>.
                  </p>
                  
                  <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 leading-relaxed text-center">
                    Ils témoignent de la qualité de notre <strong className="text-orange-300">service mobile</strong> et de leur <strong className="text-yellow-300">satisfaction</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Carrousel de témoignages avec design premium */}
            <div className="relative max-w-4xl mx-auto mt-16 md:mt-20">
              {/* Bouton précédent */}
              <button
                onClick={() => setCurrentTestimonial((c) => (c - 1 + localTestimonials.length) % localTestimonials.length)}
                aria-label="Témoignage précédent"
                className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 min-h-[44px] min-w-[44px]"
                style={{transform: 'translateY(-50%)'}}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
              </button>

              {/* Carte de témoignage principale */}
              <div className="relative mx-12 md:mx-16">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl text-center group hover:shadow-3xl hover:shadow-yellow-500/25 transition-all duration-500 hover:scale-105">
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Avatar et nom */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-yellow-300" />
                      </div>
                      <div className="font-bold text-yellow-300 text-lg md:text-xl mb-2 break-words hyphens-auto">{localTestimonials[currentTestimonial]?.name || 'Client satisfait'}</div>
                      <div className="text-sm text-orange-200 mb-2 break-words hyphens-auto">{localTestimonials[currentTestimonial]?.location || cityName}</div>
                    </div>

                    {/* Étoiles */}
                    <div className="flex justify-center mb-6">
                      {[...Array(localTestimonials[currentTestimonial]?.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current mx-1 group-hover:scale-110 transition-transform duration-300" />
                      ))}
                    </div>

                    {/* Citation */}
                    <div className="relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl text-yellow-400/30">"</div>
                      <p className="italic text-gray-200 text-base md:text-lg leading-relaxed relative z-10 break-words hyphens-auto">"{localTestimonials[currentTestimonial]?.text || 'Service exceptionnel, je recommande vivement !'}"</p>
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
                onClick={() => setCurrentTestimonial((c) => (c + 1) % localTestimonials.length)}
                aria-label="Témoignage suivant"
                className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 min-h-[44px] min-w-[44px]"
                style={{transform: 'translateY(-50%)'}}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
              </button>
            </div>

            {/* Indicateurs de navigation */}
            <div className="flex justify-center mt-8 md:mt-12 space-x-2">
              {localTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 min-h-[12px] min-w-[12px] ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section FAQ - Design amélioré */}
      <section className="py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 md:space-y-12 mb-12 md:mb-16">
            {/* Badge "FAQ" avec animation */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-full border border-indigo-400/30 shadow-lg hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 animate-pulse"></div>
              <MessageCircle className="w-5 h-5 mr-2 text-indigo-400" />
              <span className="text-indigo-300 text-sm font-semibold tracking-wide">Questions Fréquentes</span>
            </div>
            
            {/* Titre avec effet de gradient animé */}
            <div className="relative">
              <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-center text-balance hyphens-auto leading-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
                  FAQ – Nettoyage voiture
                </span>
                <br />
                <span className="text-white">
                  à {cityName}
                </span>
              </h2>
              
              {/* Effet de brillance sous le titre */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full opacity-60"></div>
            </div>

            {/* Description avec design amélioré */}
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl border border-indigo-400/20 rounded-2xl p-8 md:p-10">
                <p className="text-[clamp(1.1rem,3.5vw,1.3rem)] break-words hyphens-auto text-center leading-relaxed">
                  Réponses aux questions les plus fréquentes sur nos services de <strong className="text-indigo-300">nettoyage automobile</strong> à <strong className="text-purple-300">{cityName}</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Questions avec design premium */}
          <div className="space-y-8 md:space-y-10">
            <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="font-semibold text-lg md:text-xl text-indigo-300 mb-4 break-words hyphens-auto">Quel est le prix d'un nettoyage voiture complet à {cityName} ?</div>
                <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 leading-relaxed">Le tarif d'un nettoyage voiture complet à {cityName} dépend du type de véhicule et des options choisies. Contactez-nous pour un devis personnalisé ou consultez notre simulateur en ligne.</p>
              </div>
            </div>
            
            {nearbyCities.length > 0 ? (
              <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="font-semibold text-lg md:text-xl text-indigo-300 mb-4 break-words hyphens-auto">Faites-vous du lavage auto à domicile à {nearbyCities[0]} ?</div>
                  <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 leading-relaxed">Oui, Shine&Go propose le lavage auto à domicile à {nearbyCities[0]} et dans toute la région de {cityName}. Profitez d'un service mobile, rapide et professionnel.</p>
                </div>
              </div>
            ) : null}
            
            <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="font-semibold text-lg md:text-xl text-indigo-300 mb-4 break-words hyphens-auto">Combien de temps dure un nettoyage auto à {cityName} avec Shine&Go ?</div>
                <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 leading-relaxed">Un nettoyage auto à {cityName} dure en moyenne 90 minutes, selon l'état du véhicule et la formule choisie. Notre équipe s'assure d'un résultat showroom à chaque intervention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Maillage interne - Design amélioré */}
      <section className="py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 md:space-y-12">
            {/* Badge "Villes voisines" avec animation */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 backdrop-blur-xl rounded-full border border-teal-400/30 shadow-lg hover:shadow-teal-500/25 transition-all duration-500 hover:scale-105">
              <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
              <MapPin className="w-5 h-5 mr-2 text-teal-400" />
              <span className="text-teal-300 text-sm font-semibold tracking-wide">Villes Voisines</span>
            </div>
            
            {/* Titre avec effet de gradient animé */}
            <div className="relative">
              <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-center text-balance hyphens-auto leading-tight">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                  Découvrez aussi notre service
                </span>
                <br />
                <span className="text-white">
                  dans les villes voisines
                </span>
              </h2>
              
              {/* Effet de brillance sous le titre */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full opacity-60"></div>
            </div>

            {/* Description avec design amélioré */}
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-xl border border-teal-400/20 rounded-2xl p-8 md:p-10">
                <p className="text-[clamp(1.1rem,3.5vw,1.3rem)] break-words hyphens-auto text-center leading-relaxed">
                  Notre service mobile couvre toute la région. Découvrez nos prestations dans les <strong className="text-teal-300">villes voisines</strong> de <strong className="text-cyan-300">{cityName}</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Grille des villes voisines avec design premium */}
          <div className="mt-16 md:mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {nearbyCities.slice(0, 10).map((city, index) => (
                <a
                  key={index}
                  href={`/zone-intervention/${city.toLowerCase().replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[ùûü]/g, 'u').replace(/[ôö]/g, 'o').replace(/[îï]/g, 'i').replace(/[ç]/g, 'c').replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                  className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 min-h-[44px] min-w-[44px]"
                  aria-label={`Service de nettoyage voiture à ${city}`}
                >
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-teal-300" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300 break-words hyphens-auto">
                      {city}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm break-words hyphens-auto">
                      Service mobile
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Informations locales spécifiques avec design amélioré */}
          <div className="mt-16 md:mt-20">
            <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-2xl p-8 md:p-10">
              <h3 className="text-lg md:text-xl font-semibold text-emerald-200 mb-6 text-center">Informations locales pour {cityName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
                  <h4 className="text-emerald-300 font-medium mb-3 text-center">Parkings principaux</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {localInfo.parkings.map((parking, index) => (
                      <li key={index} className="break-words hyphens-auto flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                        {parking}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
                  <h4 className="text-emerald-300 font-medium mb-3 text-center">Zones desservies</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {localInfo.zones.map((zone, index) => (
                      <li key={index} className="break-words hyphens-auto flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                        {zone}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
                  <h4 className="text-emerald-300 font-medium mb-3 text-center">Horaires d'intervention</h4>
                  <p className="text-sm text-gray-300 break-words hyphens-auto text-center">{localInfo.horaires}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lien vers toutes les zones d'intervention avec design amélioré */}
          <div className="text-center mt-16 md:mt-20">
            <a
              href="/zone-intervention"
              className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 border-2 border-teal-400/30 hover:scale-105 hover:border-cyan-400/50 min-h-[44px] min-w-[44px]"
              aria-label="Voir toutes nos zones d'intervention"
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <MapPin className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">Voir toutes nos zones d'intervention</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Mobile-first */}
      <footer className="bg-slate-800/80 backdrop-blur-xl text-white pt-8 md:pt-12 pb-4 border-t border-white/10 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Bloc action */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg mr-3">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-xl text-white">Prêt à briller ?</h4>
              </div>
              <div className="mb-6">
                <div className="inline-flex items-center bg-emerald-500/20 px-3 py-2 rounded-full border border-emerald-400/30 mb-3">
                  <Gift className="w-4 h-4 mr-2 text-emerald-300" />
                  <span className="text-emerald-200 text-sm font-medium">ProtectorWax + CarPro Perl offerts</span>
                </div>
                <p className="text-emerald-300 font-semibold text-sm">Valeur : 40 €</p>
              </div>
              <button 
                onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                    });
                  }
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 border-2 border-emerald-400/30"
              >
                <span className="text-sm sm:text-base md:text-lg">Réserver un nettoyage voiture à {cityName}</span>
              </button>
              <div className="mt-4 text-center">
                <a href="#devis" className="text-blue-600 underline">
                  Obtenir un devis pour un lavage auto à {cityName}
                </a>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-lg">📞</span>
                  <a href="tel:+32472303701" className="text-gray-300 hover:text-white transition-colors duration-300">0472 30 37 01</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-lg">✉️</span>
                  <a href="mailto:nathangodfroid@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">nathangodfroid@gmail.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-lg">🚐</span>
                  <span className="text-gray-300">Mobile 25 km autour de Herve</span>
                </li>
              </ul>
            </div>

            {/* Liens rapides */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Accueil</a></li>
                <li><a href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300">Comment ça marche</a></li>
                <li><a href="/#services" className="text-gray-300 hover:text-white transition-colors duration-300">Nos services</a></li>
                <li><a href="/#transformations" className="text-gray-300 hover:text-white transition-colors duration-300">Avant/Après</a></li>
                <li><a href="/#temoignages" className="text-gray-300 hover:text-white transition-colors duration-300">Avis clients</a></li>
              </ul>
            </div>

            {/* Légal */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Mentions légales</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300">BE1014725710 – Shine & Go</li>
                <li><a href="/legal" className="text-gray-300 hover:text-white transition-colors duration-300">Mentions légales</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">Confidentialité & cookies</a></li>
                <li><a href="/cgv" className="text-gray-300 hover:text-white transition-colors duration-300">Conditions générales</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-xs mt-6 text-gray-400 border-t border-white/10 pt-4">
            © 2025 Shine & Go – Tous droits réservés
          </div>
        </div>
      </footer>

      {/* Calendly Popup en bas à droite */}
      <CalendlyPopup />

    </div>
    </>
  );
} 