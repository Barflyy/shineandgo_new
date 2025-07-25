"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, MapPin, Calendar, Phone, CheckCircle, ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Gift, Clock, Shield, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import { generateVariedContent } from '../utils/spintax';



interface CityPageTemplateProps {
  citySlug: string;
  cityName: string;
  csvData?: any; // Données complètes du CSV
}

// Données de base pour les villes
const getCityData = (citySlug: string, cityName: string, csvData?: any) => {
  // Données de base communes
  const baseData = {
    postalCodes: ['4000', '4020', '4030'],
    population: '50 000+',
    neighborhoods: ['Centre-ville', 'Quartier résidentiel', 'Zone commerciale', 'Périphérie']
  };

  // Si on a des données CSV, les utiliser en priorité
  if (csvData) {
    return {
      ...baseData,
      name: cityName, // Ajouter le nom de la ville
      // Utiliser le code postal exact du CSV
      postalCodes: csvData.Postal ? [csvData.Postal] : baseData.postalCodes,
      // Données du CSV
      title: csvData.Title || `Nettoyage voiture ${cityName} à domicile`,
      metaDescription: csvData["Meta Description"] || `Lavage voiture ${cityName} à domicile`,
      h1: csvData.H1 || `Nettoyage voiture ${cityName} à domicile`,
      phraseIntro: csvData["Phrase intro (unique)"] || `À ${cityName}, Shine&Go vient chez vous pour un lavage voiture à domicile.`,
      particulariteLocale: csvData["Particularité locale"] || '',
      contrainteLogistique: csvData["Contrainte logistique"] || '',
      accesRoutes: csvData["Accès / Routes"] || '',
      temoignageLocal: csvData["Témoignage local"] || '',
      casClientLocal: csvData["Cas client local"] || '',
      quartiers: csvData["Quartiers / Sections"] || '',
      communesAlentours: csvData["Communes alentours"] || '',
      // FAQ du CSV
      faqs: [
        {
          question: csvData["FAQ1 - Question"] || '',
          answer: csvData["FAQ1 - Réponse"] || ''
        },
        {
          question: csvData["FAQ2 - Question"] || '',
          answer: csvData["FAQ2 - Réponse"] || ''
        },
        {
          question: csvData["FAQ3 - Question"] || '',
          answer: csvData["FAQ3 - Réponse"] || ''
        },
        {
          question: csvData["FAQ4 - Question"] || '',
          answer: csvData["FAQ4 - Réponse"] || ''
        },
        {
          question: csvData["FAQ5 - Question"] || '',
          answer: csvData["FAQ5 - Réponse"] || ''
        }
      ].filter(faq => faq.question && faq.answer), // Filtrer les FAQ vides
      // Témoignages basés sur le CSV
      testimonials: [
        {
          name: csvData["Témoignage local"]?.split('«')[1]?.split('»')[0]?.split(',')[0]?.trim() || 'Client satisfait',
          vehicle: csvData["Cas client local"]?.split(':')[0]?.trim() || 'Véhicule',
          neighborhood: csvData["Quartiers / Sections"]?.split(',')[0]?.trim() || 'Quartier local',
          rating: 5,
          text: csvData["Témoignage local"] || `« Service impeccable à ${cityName} ! »`,
          date: '2024-01-15'
        }
      ]
    };
  }

  // Données des témoignages basées sur le CSV
  const csvTestimonials = {
    'aix-la-chapelle': [
      {
        name: 'Léa',
        vehicle: 'Peugeot 308 qui sentait le tabac froid',
        neighborhood: 'Rothe Erde',
        rating: 5,
        text: '« Intervention rapide à Aix-la-chapelle, ma Peugeot 308 qui sentait le tabac froid a retrouvé un état impeccable ! » – Léa',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Rothe Erde',
        rating: 5,
        text: '« Service impeccable à Aix-la-chapelle, BMW Série 3 remise comme neuve ! » – Pierre D., Aix-la-chapelle',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Burtscheid',
        rating: 5,
        text: '« Service impeccable à Aix-la-chapelle, Audi A4 remise comme neuve ! » – Marie L., Aix-la-chapelle',
        date: '2024-01-17'
      }
    ],
    'amay': [
      {
        name: 'Thomas',
        vehicle: 'Audi A3 couverte d’insectes après un road-trip',
        neighborhood: 'Jehay',
        rating: 5,
        text: '« Intervention rapide à Amay, ma Audi A3 couverte d’insectes après un road-trip a retrouvé un état impeccable ! » – Thomas',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Jehay',
        rating: 5,
        text: '« Service impeccable à Amay, BMW Série 3 remise comme neuve ! » – Pierre D., Amay',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Ombret-Rawsa',
        rating: 5,
        text: '« Service impeccable à Amay, Audi A4 remise comme neuve ! » – Marie L., Amay',
        date: '2024-01-17'
      }
    ],
    'ans': [
      {
        name: 'Philippe',
        vehicle: 'Ford Focus avec des vitres pleines de traces',
        neighborhood: 'Loncin',
        rating: 5,
        text: '« Intervention rapide à Ans, ma Ford Focus avec des vitres pleines de traces a retrouvé un état impeccable ! » – Philippe',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Loncin',
        rating: 5,
        text: '« Service impeccable à Ans, BMW Série 3 remise comme neuve ! » – Pierre D., Ans',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Alleur',
        rating: 5,
        text: '« Service impeccable à Ans, Audi A4 remise comme neuve ! » – Marie L., Ans',
        date: '2024-01-17'
      }
    ],
    'argenteau': [
      {
        name: 'Thomas',
        vehicle: 'Mercedes Classe A qui sentait le tabac froid',
        neighborhood: 'Argenteau-centre',
        rating: 5,
        text: '« Intervention rapide à Argenteau, ma Mercedes Classe A qui sentait le tabac froid a retrouvé un état impeccable ! » – Thomas',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Argenteau-centre',
        rating: 5,
        text: '« Service impeccable à Argenteau, BMW Série 3 remise comme neuve ! » – Pierre D., Argenteau',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Quai des Fermettes',
        rating: 5,
        text: '« Service impeccable à Argenteau, Audi A4 remise comme neuve ! » – Marie L., Argenteau',
        date: '2024-01-17'
      }
    ],
    'aubel': [
      {
        name: 'Damien',
        vehicle: 'Ford Focus utilitaire chargé et très poussiéreux',
        neighborhood: 'Saint-Jean-Sart',
        rating: 5,
        text: '« Intervention rapide à Aubel, ma Ford Focus utilitaire chargé et très poussiéreux a retrouvé un état impeccable ! » – Damien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Saint-Jean-Sart',
        rating: 5,
        text: '« Service impeccable à Aubel, BMW Série 3 remise comme neuve ! » – Pierre D., Aubel',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'La Clouse',
        rating: 5,
        text: '« Service impeccable à Aubel, Audi A4 remise comme neuve ! » – Marie L., Aubel',
        date: '2024-01-17'
      }
    ],
    'aywaille': [
      {
        name: 'Élodie',
        vehicle: 'Porsche Cayman plein de poussière de chantier',
        neighborhood: 'Sougné-Remouchamps',
        rating: 5,
        text: '« Intervention rapide à Aywaille, ma Porsche Cayman plein de poussière de chantier a retrouvé un état impeccable ! » – Élodie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Sougné-Remouchamps',
        rating: 5,
        text: '« Service impeccable à Aywaille, BMW Série 3 remise comme neuve ! » – Pierre D., Aywaille',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Harzé',
        rating: 5,
        text: '« Service impeccable à Aywaille, Audi A4 remise comme neuve ! » – Marie L., Aywaille',
        date: '2024-01-17'
      }
    ],
    'baelen': [
      {
        name: 'Bastien',
        vehicle: 'Kia Ceed tableau de bord collant et poussiéreux',
        neighborhood: 'Membach',
        rating: 5,
        text: '« Intervention rapide à Baelen, ma Kia Ceed tableau de bord collant et poussiéreux a retrouvé un état impeccable ! » – Bastien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Membach',
        rating: 5,
        text: '« Service impeccable à Baelen, BMW Série 3 remise comme neuve ! » – Pierre D., Baelen',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Baelen-centre',
        rating: 5,
        text: '« Service impeccable à Baelen, Audi A4 remise comme neuve ! » – Marie L., Baelen',
        date: '2024-01-17'
      }
    ],
    'battice': [
      {
        name: 'Julien',
        vehicle: 'Porsche Cayman tachée par le pollen et la résine',
        neighborhood: 'Centre',
        rating: 5,
        text: '« Intervention rapide à Battice, ma Porsche Cayman tachée par le pollen et la résine a retrouvé un état impeccable ! » – Julien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Centre',
        rating: 5,
        text: '« Service impeccable à Battice, BMW Série 3 remise comme neuve ! » – Pierre D., Battice',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'La Minerie',
        rating: 5,
        text: '« Service impeccable à Battice, Audi A4 remise comme neuve ! » – Marie L., Battice',
        date: '2024-01-17'
      }
    ],
    'beaufays': [
      {
        name: 'Valérie',
        vehicle: 'Citroën Berlingo marquée par des fientes d’oiseaux',
        neighborhood: 'Beaufays-centre',
        rating: 5,
        text: '« Intervention rapide à Beaufays, ma Citroën Berlingo marquée par des fientes d’oiseaux a retrouvé un état impeccable ! » – Valérie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Beaufays-centre',
        rating: 5,
        text: '« Service impeccable à Beaufays, BMW Série 3 remise comme neuve ! » – Pierre D., Beaufays',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Beaufays-centre',
        rating: 5,
        text: '« Service impeccable à Beaufays, Audi A4 remise comme neuve ! » – Marie L., Beaufays',
        date: '2024-01-17'
      }
    ],
    'berloz': [
      {
        name: 'Lukas',
        vehicle: 'Citroën Berlingo plein de poussière de chantier',
        neighborhood: 'Corswarem',
        rating: 5,
        text: '« Intervention rapide à Berloz, ma Citroën Berlingo plein de poussière de chantier a retrouvé un état impeccable ! » – Lukas',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Corswarem',
        rating: 5,
        text: '« Service impeccable à Berloz, BMW Série 3 remise comme neuve ! » – Pierre D., Berloz',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Rosoux-Crenwick',
        rating: 5,
        text: '« Service impeccable à Berloz, Audi A4 remise comme neuve ! » – Marie L., Berloz',
        date: '2024-01-17'
      }
    ],
    'blegny': [
      {
        name: 'Amandine',
        vehicle: 'Toyota RAV4 avec un voile de sel hivernal',
        neighborhood: 'Blegny-Mine',
        rating: 5,
        text: '« Intervention rapide à Blegny, ma Toyota RAV4 avec un voile de sel hivernal a retrouvé un état impeccable ! » – Amandine',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Blegny-Mine',
        rating: 5,
        text: '« Service impeccable à Blegny, BMW Série 3 remise comme neuve ! » – Pierre D., Blegny',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Housse',
        rating: 5,
        text: '« Service impeccable à Blegny, Audi A4 remise comme neuve ! » – Marie L., Blegny',
        date: '2024-01-17'
      }
    ],
    'chaudfontaine': [
      {
        name: 'Sandra',
        vehicle: 'Volvo XC40 avec un voile de sel hivernal',
        neighborhood: 'Embourg',
        rating: 5,
        text: '« Intervention rapide à Chaudfontaine, ma Volvo XC40 avec un voile de sel hivernal a retrouvé un état impeccable ! » – Sandra',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Embourg',
        rating: 5,
        text: '« Service impeccable à Chaudfontaine, BMW Série 3 remise comme neuve ! » – Pierre D., Chaudfontaine',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Vaux-sous-Chèvremont',
        rating: 5,
        text: '« Service impeccable à Chaudfontaine, Audi A4 remise comme neuve ! » – Marie L., Chaudfontaine',
        date: '2024-01-17'
      }
    ],
    'dalhem': [
      {
        name: 'Damien',
        vehicle: 'Hyundai Tucson salie par la boue des chemins agricoles',
        neighborhood: 'Feneur',
        rating: 5,
        text: '« Intervention rapide à Dalhem, ma Hyundai Tucson salie par la boue des chemins agricoles a retrouvé un état impeccable ! » – Damien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Feneur',
        rating: 5,
        text: '« Service impeccable à Dalhem, BMW Série 3 remise comme neuve ! » – Pierre D., Dalhem',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Mortroux',
        rating: 5,
        text: '« Service impeccable à Dalhem, Audi A4 remise comme neuve ! » – Marie L., Dalhem',
        date: '2024-01-17'
      }
    ],
    'dison': [
      {
        name: 'Nathalie',
        vehicle: 'Citroën Berlingo plein de poussière de chantier',
        neighborhood: 'Andrimont',
        rating: 5,
        text: '« Intervention rapide à Dison, ma Citroën Berlingo plein de poussière de chantier a retrouvé un état impeccable ! » – Nathalie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Andrimont',
        rating: 5,
        text: '« Service impeccable à Dison, BMW Série 3 remise comme neuve ! » – Pierre D., Dison',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Petit-Dison',
        rating: 5,
        text: '« Service impeccable à Dison, Audi A4 remise comme neuve ! » – Marie L., Dison',
        date: '2024-01-17'
      }
    ],
    'donceel': [
      {
        name: 'Didier',
        vehicle: 'Dacia Duster qui sentait le tabac froid',
        neighborhood: 'Haneffe',
        rating: 5,
        text: '« Intervention rapide à Donceel, ma Dacia Duster qui sentait le tabac froid a retrouvé un état impeccable ! » – Didier',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Haneffe',
        rating: 5,
        text: '« Service impeccable à Donceel, BMW Série 3 remise comme neuve ! » – Pierre D., Donceel',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Jeneffe',
        rating: 5,
        text: '« Service impeccable à Donceel, Audi A4 remise comme neuve ! » – Marie L., Donceel',
        date: '2024-01-17'
      }
    ],
    'embourg': [
      {
        name: 'Martin',
        vehicle: 'Nissan Qashqai avec un voile de sel hivernal',
        neighborhood: 'Embourg-centre',
        rating: 5,
        text: '« Intervention rapide à Embourg, ma Nissan Qashqai avec un voile de sel hivernal a retrouvé un état impeccable ! » – Martin',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Embourg-centre',
        rating: 5,
        text: '« Service impeccable à Embourg, BMW Série 3 remise comme neuve ! » – Pierre D., Embourg',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Embourg-centre',
        rating: 5,
        text: '« Service impeccable à Embourg, Audi A4 remise comme neuve ! » – Marie L., Embourg',
        date: '2024-01-17'
      }
    ],
    'engis': [
      {
        name: 'Marc',
        vehicle: 'Ford Focus ternie par la suie industrielle',
        neighborhood: 'Hermalle-sous-Huy',
        rating: 5,
        text: '« Intervention rapide à Engis, ma Ford Focus ternie par la suie industrielle a retrouvé un état impeccable ! » – Marc',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Hermalle-sous-Huy',
        rating: 5,
        text: '« Service impeccable à Engis, BMW Série 3 remise comme neuve ! » – Pierre D., Engis',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Clermont-sous-Huy',
        rating: 5,
        text: '« Service impeccable à Engis, Audi A4 remise comme neuve ! » – Marie L., Engis',
        date: '2024-01-17'
      }
    ],
    'esneux': [
      {
        name: 'Léa',
        vehicle: 'Opel Corsa qui sentait le tabac froid',
        neighborhood: 'Tilff',
        rating: 5,
        text: '« Intervention rapide à Esneux, ma Opel Corsa qui sentait le tabac froid a retrouvé un état impeccable ! » – Léa',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Tilff',
        rating: 5,
        text: '« Service impeccable à Esneux, BMW Série 3 remise comme neuve ! » – Pierre D., Esneux',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Méry',
        rating: 5,
        text: '« Service impeccable à Esneux, Audi A4 remise comme neuve ! » – Marie L., Esneux',
        date: '2024-01-17'
      }
    ],
    'eupen': [
      {
        name: 'Kevin',
        vehicle: 'Renault Clio marquée par des fientes d’oiseaux',
        neighborhood: 'Kettenis',
        rating: 5,
        text: '« Intervention rapide à Eupen, ma Renault Clio marquée par des fientes d’oiseaux a retrouvé un état impeccable ! » – Kevin',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Kettenis',
        rating: 5,
        text: '« Service impeccable à Eupen, BMW Série 3 remise comme neuve ! » – Pierre D., Eupen',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Nispert',
        rating: 5,
        text: '« Service impeccable à Eupen, Audi A4 remise comme neuve ! » – Marie L., Eupen',
        date: '2024-01-17'
      }
    ],
    'flemalle': [
      {
        name: 'Bastien',
        vehicle: 'Mini Cooper utilitaire chargé et très poussiéreux',
        neighborhood: 'Flémalle-Haute',
        rating: 5,
        text: '« Intervention rapide à Flemalle, ma Mini Cooper utilitaire chargé et très poussiéreux a retrouvé un état impeccable ! » – Bastien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Flémalle-Haute',
        rating: 5,
        text: '« Service impeccable à Flemalle, BMW Série 3 remise comme neuve ! » – Pierre D., Flemalle',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Flémalle-Grande',
        rating: 5,
        text: '« Service impeccable à Flemalle, Audi A4 remise comme neuve ! » – Marie L., Flemalle',
        date: '2024-01-17'
      }
    ],
    'fleron': [
      {
        name: 'Clara',
        vehicle: 'Mercedes Classe A utilitaire chargé et très poussiéreux',
        neighborhood: 'Magnée',
        rating: 5,
        text: '« Intervention rapide à Fleron, ma Mercedes Classe A utilitaire chargé et très poussiéreux a retrouvé un état impeccable ! » – Clara',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Magnée',
        rating: 5,
        text: '« Service impeccable à Fleron, BMW Série 3 remise comme neuve ! » – Pierre D., Fleron',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Retinne',
        rating: 5,
        text: '« Service impeccable à Fleron, Audi A4 remise comme neuve ! » – Marie L., Fleron',
        date: '2024-01-17'
      }
    ],
    'francorchamps': [
      {
        name: 'Stéphane',
        vehicle: 'Audi A3 marquée par des fientes d’oiseaux',
        neighborhood: 'Francorchamps-village',
        rating: 5,
        text: '« Intervention rapide à Francorchamps, ma Audi A3 marquée par des fientes d’oiseaux a retrouvé un état impeccable ! » – Stéphane',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Francorchamps-village',
        rating: 5,
        text: '« Service impeccable à Francorchamps, BMW Série 3 remise comme neuve ! » – Pierre D., Francorchamps',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Hockai',
        rating: 5,
        text: '« Service impeccable à Francorchamps, Audi A4 remise comme neuve ! » – Marie L., Francorchamps',
        date: '2024-01-17'
      }
    ],
    'gemmenich': [
      {
        name: 'Aline',
        vehicle: 'Ford Focus qui sentait le tabac froid',
        neighborhood: 'Gemmenich-centre',
        rating: 5,
        text: '« Intervention rapide à Gemmenich, ma Ford Focus qui sentait le tabac froid a retrouvé un état impeccable ! » – Aline',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Gemmenich-centre',
        rating: 5,
        text: '« Service impeccable à Gemmenich, BMW Série 3 remise comme neuve ! » – Pierre D., Gemmenich',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Mont Cheval',
        rating: 5,
        text: '« Service impeccable à Gemmenich, Audi A4 remise comme neuve ! » – Marie L., Gemmenich',
        date: '2024-01-17'
      }
    ],
    'herve': [
      {
        name: 'Nathalie',
        vehicle: 'Fiat 500 tapis de sol saturés de gravillons',
        neighborhood: 'Battice',
        rating: 5,
        text: '« Intervention rapide à Herve, ma Fiat 500 tapis de sol saturés de gravillons a retrouvé un état impeccable ! » – Nathalie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Battice',
        rating: 5,
        text: '« Service impeccable à Herve, BMW Série 3 remise comme neuve ! » – Pierre D., Herve',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Xhendelesse',
        rating: 5,
        text: '« Service impeccable à Herve, Audi A4 remise comme neuve ! » – Marie L., Herve',
        date: '2024-01-17'
      }
    ],
    'huy': [
      {
        name: 'Olivier',
        vehicle: 'Opel Corsa couverte d’insectes après un road-trip',
        neighborhood: 'Tihange',
        rating: 5,
        text: '« Intervention rapide à Huy, ma Opel Corsa couverte d’insectes après un road-trip a retrouvé un état impeccable ! » – Olivier',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Tihange',
        rating: 5,
        text: '« Service impeccable à Huy, BMW Série 3 remise comme neuve ! » – Pierre D., Huy',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Ben-Ahin',
        rating: 5,
        text: '« Service impeccable à Huy, Audi A4 remise comme neuve ! » – Marie L., Huy',
        date: '2024-01-17'
      }
    ],
    'jalhay': [
      {
        name: 'Léa',
        vehicle: 'VW Transporter plein de poussière de chantier',
        neighborhood: 'Sart-lez-Spa',
        rating: 5,
        text: '« Intervention rapide à Jalhay, ma VW Transporter plein de poussière de chantier a retrouvé un état impeccable ! » – Léa',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Sart-lez-Spa',
        rating: 5,
        text: '« Service impeccable à Jalhay, BMW Série 3 remise comme neuve ! » – Pierre D., Jalhay',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Solwaster',
        rating: 5,
        text: '« Service impeccable à Jalhay, Audi A4 remise comme neuve ! » – Marie L., Jalhay',
        date: '2024-01-17'
      }
    ],
    'jemeppe': [
      {
        name: 'Lucie',
        vehicle: 'Opel Corsa utilitaire chargé et très poussiéreux',
        neighborhood: 'Jemeppe-sur-Meuse',
        rating: 5,
        text: '« Intervention rapide à Jemeppe, ma Opel Corsa utilitaire chargé et très poussiéreux a retrouvé un état impeccable ! » – Lucie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Jemeppe-sur-Meuse',
        rating: 5,
        text: '« Service impeccable à Jemeppe, BMW Série 3 remise comme neuve ! » – Pierre D., Jemeppe',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Tilleur',
        rating: 5,
        text: '« Service impeccable à Jemeppe, Audi A4 remise comme neuve ! » – Marie L., Jemeppe',
        date: '2024-01-17'
      }
    ],
    'kelmis': [
      {
        name: 'Aline',
        vehicle: 'Audi A3 qui sentait le tabac froid',
        neighborhood: 'La Calamine',
        rating: 5,
        text: '« Intervention rapide à Kelmis, ma Audi A3 qui sentait le tabac froid a retrouvé un état impeccable ! » – Aline',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'La Calamine',
        rating: 5,
        text: '« Service impeccable à Kelmis, BMW Série 3 remise comme neuve ! » – Pierre D., Kelmis',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Neu-Moresnet',
        rating: 5,
        text: '« Service impeccable à Kelmis, Audi A4 remise comme neuve ! » – Marie L., Kelmis',
        date: '2024-01-17'
      }
    ],
    'liege': [
      {
        name: 'Séverine',
        vehicle: 'Skoda Octavia tachée par le pollen et la résine',
        neighborhood: 'Grivegnée',
        rating: 5,
        text: '« Intervention rapide à Liège, ma Skoda Octavia tachée par le pollen et la résine a retrouvé un état impeccable ! » – Séverine',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Grivegnée',
        rating: 5,
        text: '« Service impeccable à Liège, BMW Série 3 remise comme neuve ! » – Pierre D., Liège',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Outremeuse',
        rating: 5,
        text: '« Service impeccable à Liège, Audi A4 remise comme neuve ! » – Marie L., Liège',
        date: '2024-01-17'
      }
    ],
    'limbourg': [
      {
        name: 'Hugo',
        vehicle: 'BMW Série 3 marquée par des fientes d’oiseaux',
        neighborhood: 'Limbourg-ville',
        rating: 5,
        text: '« Intervention rapide à Limbourg, ma BMW Série 3 marquée par des fientes d’oiseaux a retrouvé un état impeccable ! » – Hugo',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Limbourg-ville',
        rating: 5,
        text: '« Service impeccable à Limbourg, BMW Série 3 remise comme neuve ! » – Pierre D., Limbourg',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Dolhain',
        rating: 5,
        text: '« Service impeccable à Limbourg, Audi A4 remise comme neuve ! » – Marie L., Limbourg',
        date: '2024-01-17'
      }
    ],
    'lontzen': [
      {
        name: 'Hélène',
        vehicle: 'Citroën Berlingo ternie par la suie industrielle',
        neighborhood: 'Walhorn',
        rating: 5,
        text: '« Intervention rapide à Lontzen, ma Citroën Berlingo ternie par la suie industrielle a retrouvé un état impeccable ! » – Hélène',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Walhorn',
        rating: 5,
        text: '« Service impeccable à Lontzen, BMW Série 3 remise comme neuve ! » – Pierre D., Lontzen',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Lontzen-centre',
        rating: 5,
        text: '« Service impeccable à Lontzen, Audi A4 remise comme neuve ! » – Marie L., Lontzen',
        date: '2024-01-17'
      }
    ],
    'malmedy': [
      {
        name: 'Aline',
        vehicle: 'Porsche Cayman avec des poils d’animaux partout',
        neighborhood: 'Bellevaux',
        rating: 5,
        text: '« Intervention rapide à Malmedy, ma Porsche Cayman avec des poils d’animaux partout a retrouvé un état impeccable ! » – Aline',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Bellevaux',
        rating: 5,
        text: '« Service impeccable à Malmedy, BMW Série 3 remise comme neuve ! » – Pierre D., Malmedy',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Bevercé',
        rating: 5,
        text: '« Service impeccable à Malmedy, Audi A4 remise comme neuve ! » – Marie L., Malmedy',
        date: '2024-01-17'
      }
    ],
    'marchin': [
      {
        name: 'Valérie',
        vehicle: 'Skoda Octavia avec des poils d’animaux partout',
        neighborhood: 'Grand-Marchin',
        rating: 5,
        text: '« Intervention rapide à Marchin, ma Skoda Octavia avec des poils d’animaux partout a retrouvé un état impeccable ! » – Valérie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Grand-Marchin',
        rating: 5,
        text: '« Service impeccable à Marchin, BMW Série 3 remise comme neuve ! » – Pierre D., Marchin',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Vyle-et-Tharoul',
        rating: 5,
        text: '« Service impeccable à Marchin, Audi A4 remise comme neuve ! » – Marie L., Marchin',
        date: '2024-01-17'
      }
    ],
    'montzen': [
      {
        name: 'Philippe',
        vehicle: 'VW Transporter qui sentait le tabac froid',
        neighborhood: 'Montzen-centre',
        rating: 5,
        text: '« Intervention rapide à Montzen, ma VW Transporter qui sentait le tabac froid a retrouvé un état impeccable ! » – Philippe',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Montzen-centre',
        rating: 5,
        text: '« Service impeccable à Montzen, BMW Série 3 remise comme neuve ! » – Pierre D., Montzen',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Moresnet',
        rating: 5,
        text: '« Service impeccable à Montzen, Audi A4 remise comme neuve ! » – Marie L., Montzen',
        date: '2024-01-17'
      }
    ],
    'mouland': [
      {
        name: 'Philippe',
        vehicle: 'Dacia Duster salie par la boue des chemins agricoles',
        neighborhood: 'Mouland-centre',
        rating: 5,
        text: '« Intervention rapide à Mouland, ma Dacia Duster salie par la boue des chemins agricoles a retrouvé un état impeccable ! » – Philippe',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Mouland-centre',
        rating: 5,
        text: '« Service impeccable à Mouland, BMW Série 3 remise comme neuve ! » – Pierre D., Mouland',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Loën',
        rating: 5,
        text: '« Service impeccable à Mouland, Audi A4 remise comme neuve ! » – Marie L., Mouland',
        date: '2024-01-17'
      }
    ],
    'nessonvaux': [
      {
        name: 'Olivier',
        vehicle: 'Peugeot 308 tableau de bord collant et poussiéreux',
        neighborhood: 'Nessonvaux',
        rating: 5,
        text: '« Intervention rapide à Nessonvaux, ma Peugeot 308 tableau de bord collant et poussiéreux a retrouvé un état impeccable ! » – Olivier',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Nessonvaux',
        rating: 5,
        text: '« Service impeccable à Nessonvaux, BMW Série 3 remise comme neuve ! » – Pierre D., Nessonvaux',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Fraipont',
        rating: 5,
        text: '« Service impeccable à Nessonvaux, Audi A4 remise comme neuve ! » – Marie L., Nessonvaux',
        date: '2024-01-17'
      }
    ],
    'olne': [
      {
        name: 'Martin',
        vehicle: 'Kia Ceed plein de poussière de chantier',
        neighborhood: 'Saint-Hadelin',
        rating: 5,
        text: '« Intervention rapide à Olne, ma Kia Ceed plein de poussière de chantier a retrouvé un état impeccable ! » – Martin',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Saint-Hadelin',
        rating: 5,
        text: '« Service impeccable à Olne, BMW Série 3 remise comme neuve ! » – Pierre D., Olne',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Gelivau',
        rating: 5,
        text: '« Service impeccable à Olne, Audi A4 remise comme neuve ! » – Marie L., Olne',
        date: '2024-01-17'
      }
    ],
    'ovifat': [
      {
        name: 'Fanny',
        vehicle: 'Mercedes Classe A tapis de sol saturés de gravillons',
        neighborhood: 'Ovifat (station de ski)',
        rating: 5,
        text: '« Intervention rapide à Ovifat, ma Mercedes Classe A tapis de sol saturés de gravillons a retrouvé un état impeccable ! » – Fanny',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Ovifat (station de ski)',
        rating: 5,
        text: '« Service impeccable à Ovifat, BMW Série 3 remise comme neuve ! » – Pierre D., Ovifat',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Longfaye',
        rating: 5,
        text: '« Service impeccable à Ovifat, Audi A4 remise comme neuve ! » – Marie L., Ovifat',
        date: '2024-01-17'
      }
    ],
    'pepinster': [
      {
        name: 'Noémie',
        vehicle: 'BMW Série 3 salie par la boue des chemins agricoles',
        neighborhood: 'Cornesse',
        rating: 5,
        text: '« Intervention rapide à Pepinster, ma BMW Série 3 salie par la boue des chemins agricoles a retrouvé un état impeccable ! » – Noémie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Cornesse',
        rating: 5,
        text: '« Service impeccable à Pepinster, BMW Série 3 remise comme neuve ! » – Pierre D., Pepinster',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Wegnez',
        rating: 5,
        text: '« Service impeccable à Pepinster, Audi A4 remise comme neuve ! » – Marie L., Pepinster',
        date: '2024-01-17'
      }
    ],
    'plombieres': [
      {
        name: 'Didier',
        vehicle: 'Porsche Cayman plein de poussière de chantier',
        neighborhood: 'Montzen',
        rating: 5,
        text: '« Intervention rapide à Plombieres, ma Porsche Cayman plein de poussière de chantier a retrouvé un état impeccable ! » – Didier',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Montzen',
        rating: 5,
        text: '« Service impeccable à Plombieres, BMW Série 3 remise comme neuve ! » – Pierre D., Plombieres',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Gemmenich',
        rating: 5,
        text: '« Service impeccable à Plombieres, Audi A4 remise comme neuve ! » – Marie L., Plombieres',
        date: '2024-01-17'
      }
    ],
    'raeren': [
      {
        name: 'Hélène',
        vehicle: 'Mini Cooper tapis de sol saturés de gravillons',
        neighborhood: 'Eynatten',
        rating: 5,
        text: '« Intervention rapide à Raeren, ma Mini Cooper tapis de sol saturés de gravillons a retrouvé un état impeccable ! » – Hélène',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Eynatten',
        rating: 5,
        text: '« Service impeccable à Raeren, BMW Série 3 remise comme neuve ! » – Pierre D., Raeren',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Hauset',
        rating: 5,
        text: '« Service impeccable à Raeren, Audi A4 remise comme neuve ! » – Marie L., Raeren',
        date: '2024-01-17'
      }
    ],
    'remicourt': [
      {
        name: 'Didier',
        vehicle: 'BMW Série 3 avec des vitres pleines de traces',
        neighborhood: 'Hodeige',
        rating: 5,
        text: '« Intervention rapide à Remicourt, ma BMW Série 3 avec des vitres pleines de traces a retrouvé un état impeccable ! » – Didier',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Hodeige',
        rating: 5,
        text: '« Service impeccable à Remicourt, BMW Série 3 remise comme neuve ! » – Pierre D., Remicourt',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Pousset',
        rating: 5,
        text: '« Service impeccable à Remicourt, Audi A4 remise comme neuve ! » – Marie L., Remicourt',
        date: '2024-01-17'
      }
    ],
    'remouchamps': [
      {
        name: 'Laura',
        vehicle: 'Nissan Qashqai tapis de sol saturés de gravillons',
        neighborhood: 'Sougné-Remouchamps',
        rating: 5,
        text: '« Intervention rapide à Remouchamps, ma Nissan Qashqai tapis de sol saturés de gravillons a retrouvé un état impeccable ! » – Laura',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Sougné-Remouchamps',
        rating: 5,
        text: '« Service impeccable à Remouchamps, BMW Série 3 remise comme neuve ! » – Pierre D., Remouchamps',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Deigné',
        rating: 5,
        text: '« Service impeccable à Remouchamps, Audi A4 remise comme neuve ! » – Marie L., Remouchamps',
        date: '2024-01-17'
      }
    ],
    'robertville': [
      {
        name: 'Chloé',
        vehicle: 'Nissan Qashqai salie par la boue des chemins agricoles',
        neighborhood: 'Robertville-centre',
        rating: 5,
        text: '« Intervention rapide à Robertville, ma Nissan Qashqai salie par la boue des chemins agricoles a retrouvé un état impeccable ! » – Chloé',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Robertville-centre',
        rating: 5,
        text: '« Service impeccable à Robertville, BMW Série 3 remise comme neuve ! » – Pierre D., Robertville',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Sourbrodt',
        rating: 5,
        text: '« Service impeccable à Robertville, Audi A4 remise comme neuve ! » – Marie L., Robertville',
        date: '2024-01-17'
      }
    ],
    'saint-georges': [
      {
        name: 'Marc',
        vehicle: 'Mercedes Classe A marquée par des fientes d’oiseaux',
        neighborhood: 'Stockay',
        rating: 5,
        text: '« Intervention rapide à Saint-georges, ma Mercedes Classe A marquée par des fientes d’oiseaux a retrouvé un état impeccable ! » – Marc',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Stockay',
        rating: 5,
        text: '« Service impeccable à Saint-georges, BMW Série 3 remise comme neuve ! » – Pierre D., Saint-georges',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Sur-les-Bois',
        rating: 5,
        text: '« Service impeccable à Saint-georges, Audi A4 remise comme neuve ! » – Marie L., Saint-georges',
        date: '2024-01-17'
      }
    ],
    'seraing': [
      {
        name: 'Didier',
        vehicle: 'VW Transporter remplie de poussière d’atelier',
        neighborhood: 'Ougrée',
        rating: 5,
        text: '« Intervention rapide à Seraing, ma VW Transporter remplie de poussière d’atelier a retrouvé un état impeccable ! » – Didier',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Ougrée',
        rating: 5,
        text: '« Service impeccable à Seraing, BMW Série 3 remise comme neuve ! » – Pierre D., Seraing',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Jemeppe',
        rating: 5,
        text: '« Service impeccable à Seraing, Audi A4 remise comme neuve ! » – Marie L., Seraing',
        date: '2024-01-17'
      }
    ],
    'soumagne': [
      {
        name: 'Émilie',
        vehicle: 'Volvo XC40 tapis de sol saturés de gravillons',
        neighborhood: 'Micheroux',
        rating: 5,
        text: '« Intervention rapide à Soumagne, ma Volvo XC40 tapis de sol saturés de gravillons a retrouvé un état impeccable ! » – Émilie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Micheroux',
        rating: 5,
        text: '« Service impeccable à Soumagne, BMW Série 3 remise comme neuve ! » – Pierre D., Soumagne',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Evegnée',
        rating: 5,
        text: '« Service impeccable à Soumagne, Audi A4 remise comme neuve ! » – Marie L., Soumagne',
        date: '2024-01-17'
      }
    ],
    'spa': [
      {
        name: 'Sandra',
        vehicle: 'Hyundai Tucson couverte d’insectes après un road-trip',
        neighborhood: 'Nivezé',
        rating: 5,
        text: '« Intervention rapide à Spa, ma Hyundai Tucson couverte d’insectes après un road-trip a retrouvé un état impeccable ! » – Sandra',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Nivezé',
        rating: 5,
        text: '« Service impeccable à Spa, BMW Série 3 remise comme neuve ! » – Pierre D., Spa',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Creppe',
        rating: 5,
        text: '« Service impeccable à Spa, Audi A4 remise comme neuve ! » – Marie L., Spa',
        date: '2024-01-17'
      }
    ],
    'sprimont': [
      {
        name: 'Jérôme',
        vehicle: 'Mercedes Classe A plein de poussière de chantier',
        neighborhood: 'Dolembreux',
        rating: 5,
        text: '« Intervention rapide à Sprimont, ma Mercedes Classe A plein de poussière de chantier a retrouvé un état impeccable ! » – Jérôme',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Dolembreux',
        rating: 5,
        text: '« Service impeccable à Sprimont, BMW Série 3 remise comme neuve ! » – Pierre D., Sprimont',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Gomzé-Andoumont',
        rating: 5,
        text: '« Service impeccable à Sprimont, Audi A4 remise comme neuve ! » – Marie L., Sprimont',
        date: '2024-01-17'
      }
    ],
    'stavelot': [
      {
        name: 'Anaïs',
        vehicle: 'Volvo XC40 plein de poussière de chantier',
        neighborhood: 'Coo',
        rating: 5,
        text: '« Intervention rapide à Stavelot, ma Volvo XC40 plein de poussière de chantier a retrouvé un état impeccable ! » – Anaïs',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Coo',
        rating: 5,
        text: '« Service impeccable à Stavelot, BMW Série 3 remise comme neuve ! » – Pierre D., Stavelot',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Francorchamps',
        rating: 5,
        text: '« Service impeccable à Stavelot, Audi A4 remise comme neuve ! » – Marie L., Stavelot',
        date: '2024-01-17'
      }
    ],
    'theux': [
      {
        name: 'Julien',
        vehicle: 'Renault Clio tachée par le pollen et la résine',
        neighborhood: 'La Reid',
        rating: 5,
        text: '« Intervention rapide à Theux, ma Renault Clio tachée par le pollen et la résine a retrouvé un état impeccable ! » – Julien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'La Reid',
        rating: 5,
        text: '« Service impeccable à Theux, BMW Série 3 remise comme neuve ! » – Pierre D., Theux',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Polleur',
        rating: 5,
        text: '« Service impeccable à Theux, Audi A4 remise comme neuve ! » – Marie L., Theux',
        date: '2024-01-17'
      }
    ],
    'thimister': [
      {
        name: 'Lucie',
        vehicle: 'Toyota RAV4 salie par la boue des chemins agricoles',
        neighborhood: 'Thimister',
        rating: 5,
        text: '« Intervention rapide à Thimister, ma Toyota RAV4 salie par la boue des chemins agricoles a retrouvé un état impeccable ! » – Lucie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Thimister',
        rating: 5,
        text: '« Service impeccable à Thimister, BMW Série 3 remise comme neuve ! » – Pierre D., Thimister',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Clermont-sur-Berwinne',
        rating: 5,
        text: '« Service impeccable à Thimister, Audi A4 remise comme neuve ! » – Marie L., Thimister',
        date: '2024-01-17'
      }
    ],
    'tilff': [
      {
        name: 'Julien',
        vehicle: 'Hyundai Tucson plein de poussière de chantier',
        neighborhood: 'Tilff-centre',
        rating: 5,
        text: '« Intervention rapide à Tilff, ma Hyundai Tucson plein de poussière de chantier a retrouvé un état impeccable ! » – Julien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Tilff-centre',
        rating: 5,
        text: '« Service impeccable à Tilff, BMW Série 3 remise comme neuve ! » – Pierre D., Tilff',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Méry',
        rating: 5,
        text: '« Service impeccable à Tilff, Audi A4 remise comme neuve ! » – Marie L., Tilff',
        date: '2024-01-17'
      }
    ],
    'trois-ponts': [
      {
        name: 'Julien',
        vehicle: 'VW Golf remplie de poussière d’atelier',
        neighborhood: 'Wanne',
        rating: 5,
        text: '« Intervention rapide à Trois-ponts, ma VW Golf remplie de poussière d’atelier a retrouvé un état impeccable ! » – Julien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Wanne',
        rating: 5,
        text: '« Service impeccable à Trois-ponts, BMW Série 3 remise comme neuve ! » – Pierre D., Trois-ponts',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Fosse',
        rating: 5,
        text: '« Service impeccable à Trois-ponts, Audi A4 remise comme neuve ! » – Marie L., Trois-ponts',
        date: '2024-01-17'
      }
    ],
    'trooz': [
      {
        name: 'Valérie',
        vehicle: 'Ford Focus couverte d’insectes après un road-trip',
        neighborhood: 'Fraipont',
        rating: 5,
        text: '« Intervention rapide à Trooz, ma Ford Focus couverte d’insectes après un road-trip a retrouvé un état impeccable ! » – Valérie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Fraipont',
        rating: 5,
        text: '« Service impeccable à Trooz, BMW Série 3 remise comme neuve ! » – Pierre D., Trooz',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Nessonvaux',
        rating: 5,
        text: '« Service impeccable à Trooz, Audi A4 remise comme neuve ! » – Marie L., Trooz',
        date: '2024-01-17'
      }
    ],
    'vaals': [
      {
        name: 'Chloé',
        vehicle: 'BMW Série 3 utilitaire chargé et très poussiéreux',
        neighborhood: 'Vaals-centre',
        rating: 5,
        text: '« Intervention rapide à Vaals, ma BMW Série 3 utilitaire chargé et très poussiéreux a retrouvé un état impeccable ! » – Chloé',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Vaals-centre',
        rating: 5,
        text: '« Service impeccable à Vaals, BMW Série 3 remise comme neuve ! » – Pierre D., Vaals',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Holset',
        rating: 5,
        text: '« Service impeccable à Vaals, Audi A4 remise comme neuve ! » – Marie L., Vaals',
        date: '2024-01-17'
      }
    ],
    'verlaine': [
      {
        name: 'Hugo',
        vehicle: 'Dacia Duster avec des poils d’animaux partout',
        neighborhood: 'Chapon-Seraing',
        rating: 5,
        text: '« Intervention rapide à Verlaine, ma Dacia Duster avec des poils d’animaux partout a retrouvé un état impeccable ! » – Hugo',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Chapon-Seraing',
        rating: 5,
        text: '« Service impeccable à Verlaine, BMW Série 3 remise comme neuve ! » – Pierre D., Verlaine',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Seraing-le-Château',
        rating: 5,
        text: '« Service impeccable à Verlaine, Audi A4 remise comme neuve ! » – Marie L., Verlaine',
        date: '2024-01-17'
      }
    ],
    'verviers': [
      {
        name: 'Chloé',
        vehicle: 'Hyundai Tucson marquée par des fientes d’oiseaux',
        neighborhood: 'Heusy',
        rating: 5,
        text: '« Intervention rapide à Verviers, ma Hyundai Tucson marquée par des fientes d’oiseaux a retrouvé un état impeccable ! » – Chloé',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Heusy',
        rating: 5,
        text: '« Service impeccable à Verviers, BMW Série 3 remise comme neuve ! » – Pierre D., Verviers',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Stembert',
        rating: 5,
        text: '« Service impeccable à Verviers, Audi A4 remise comme neuve ! » – Marie L., Verviers',
        date: '2024-01-17'
      }
    ],
    'vise': [
      {
        name: 'Jérôme',
        vehicle: 'Kia Ceed marquée par des fientes d’oiseaux',
        neighborhood: 'Cheratte',
        rating: 5,
        text: '« Intervention rapide à Vise, ma Kia Ceed marquée par des fientes d’oiseaux a retrouvé un état impeccable ! » – Jérôme',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Cheratte',
        rating: 5,
        text: '« Service impeccable à Vise, BMW Série 3 remise comme neuve ! » – Pierre D., Vise',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Lixhe',
        rating: 5,
        text: '« Service impeccable à Vise, Audi A4 remise comme neuve ! » – Marie L., Vise',
        date: '2024-01-17'
      }
    ],
    'waimes': [
      {
        name: 'Damien',
        vehicle: 'Nissan Qashqai utilitaire chargé et très poussiéreux',
        neighborhood: 'Robertville',
        rating: 5,
        text: '« Intervention rapide à Waimes, ma Nissan Qashqai utilitaire chargé et très poussiéreux a retrouvé un état impeccable ! » – Damien',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Robertville',
        rating: 5,
        text: '« Service impeccable à Waimes, BMW Série 3 remise comme neuve ! » – Pierre D., Waimes',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Ovifat',
        rating: 5,
        text: '« Service impeccable à Waimes, Audi A4 remise comme neuve ! » – Marie L., Waimes',
        date: '2024-01-17'
      }
    ],
    'wanze': [
      {
        name: 'Lucie',
        vehicle: 'Toyota RAV4 marquée par des fientes d’oiseaux',
        neighborhood: 'Antheit',
        rating: 5,
        text: '« Intervention rapide à Wanze, ma Toyota RAV4 marquée par des fientes d’oiseaux a retrouvé un état impeccable ! » – Lucie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Antheit',
        rating: 5,
        text: '« Service impeccable à Wanze, BMW Série 3 remise comme neuve ! » – Pierre D., Wanze',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Vinalmont',
        rating: 5,
        text: '« Service impeccable à Wanze, Audi A4 remise comme neuve ! » – Marie L., Wanze',
        date: '2024-01-17'
      }
    ],
    'waremme': [
      {
        name: 'Martin',
        vehicle: 'Mercedes Classe A qui sentait le tabac froid',
        neighborhood: 'Bleret',
        rating: 5,
        text: '« Intervention rapide à Waremme, ma Mercedes Classe A qui sentait le tabac froid a retrouvé un état impeccable ! » – Martin',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Bleret',
        rating: 5,
        text: '« Service impeccable à Waremme, BMW Série 3 remise comme neuve ! » – Pierre D., Waremme',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Grand-Axhe',
        rating: 5,
        text: '« Service impeccable à Waremme, Audi A4 remise comme neuve ! » – Marie L., Waremme',
        date: '2024-01-17'
      }
    ],
    'welkenraedt': [
      {
        name: 'Élodie',
        vehicle: 'Skoda Octavia tachée par le pollen et la résine',
        neighborhood: 'Henri-Chapelle',
        rating: 5,
        text: '« Intervention rapide à Welkenraedt, ma Skoda Octavia tachée par le pollen et la résine a retrouvé un état impeccable ! » – Élodie',
        date: '2024-01-15'
      },
      {
        name: 'Pierre D.',
        vehicle: 'BMW Série 3',
        neighborhood: 'Henri-Chapelle',
        rating: 5,
        text: '« Service impeccable à Welkenraedt, BMW Série 3 remise comme neuve ! » – Pierre D., Welkenraedt',
        date: '2024-01-16'
      },
      {
        name: 'Marie L.',
        vehicle: 'Audi A4',
        neighborhood: 'Membach',
        rating: 5,
        text: '« Service impeccable à Welkenraedt, Audi A4 remise comme neuve ! » – Marie L., Welkenraedt',
        date: '2024-01-17'
      }
    ]
  };

  // Données complètes du CSV pour chaque ville
  const csvCityData = {
    'aix-la-chapelle': {
      title: "Nettoyage voiture à domicile à Aix-la-chapelle – Shine&Go (service premium)",
      metaDescription: "Lavage voiture Aix-la-chapelle à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage auto à domicile à Aix-la-chapelle – Intérieur & extérieur",
      intro: "À Aix-la-chapelle, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Région germanophone : les hivers rudes et le sel abîment la carrosserie Service bilingue FR/DE/NL possible sur demande Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Région germanophone : les hivers rudes et le sel abîment la carrosserie",
      contrainteLogistique: "Service bilingue FR/DE/NL possible sur demande",
      accesRoutes: "E40/A4 et routes transfrontalières très accessibles",
      quartiers: "Rothe Erde, Burtscheid",
      communesAlentours: "Kelmis, Raeren, Plombières",
      ctaLocalise: "Créneaux limités à Aix-la-chapelle : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Aix-la-chapelle ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'amay': {
      title: "Nettoyage voiture à domicile à Amay – Shine&Go (service premium)",
      metaDescription: "Lavage et nettoyage voiture à domicile à Amay. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Lavage & nettoyage auto premium à Amay",
      intro: "À Amay, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. La proximité d’industries laisse souvent un voile de suie sur la carrosserie Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      particulariteLocale: "La proximité d’industries laisse souvent un voile de suie sur la carrosserie",
      contrainteLogistique: "Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      accesRoutes: "Routes fréquentées par les camions, poussières fréquentes",
      quartiers: "Jehay, Ombret-Rawsa",
      communesAlentours: "Huy, Wanze, Engis",
      ctaLocalise: "Créneaux limités à Amay : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Amay ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'ans': {
      title: "Nettoyage voiture Ans à domicile – Résultat showroom garanti",
      metaDescription: "Lavage et nettoyage voiture à domicile à Ans. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Service mobile : nettoyage voiture à Ans",
      intro: "À Ans, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Les fientes d’oiseaux et la pollution urbaine marquent la peinture Horaires adaptables aux contraintes de stationnement urbain Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Les fientes d’oiseaux et la pollution urbaine marquent la peinture",
      contrainteLogistique: "Horaires adaptables aux contraintes de stationnement urbain",
      accesRoutes: "Quais de Meuse et rocades facilitent l’accès",
      quartiers: "Loncin, Alleur, Xhendremael",
      communesAlentours: "Liège, Awans, Seraing",
      ctaLocalise: "Besoin d’un nettoyage auto à Ans ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Ans ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'argenteau': {
      title: "Nettoyage voiture à domicile à Argenteau – Shine&Go (service premium)",
      metaDescription: "Lavage et nettoyage voiture à domicile à Argenteau. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Service mobile : nettoyage voiture à Argenteau",
      intro: "Besoin d’un nettoyage voiture à domicile à Argenteau ? Shine&Go se déplace avec tout le matériel pro. Les poids lourds et la poussière industrielle encrassent rapidement les véhicules Nous pouvons intervenir sur sites d’entreprises (avec autorisation préalable) Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les poids lourds et la poussière industrielle encrassent rapidement les véhicules",
      contrainteLogistique: "Nous pouvons intervenir sur sites d’entreprises (avec autorisation préalable)",
      accesRoutes: "Routes fréquentées par les camions, poussières fréquentes",
      quartiers: "Argenteau-centre, Quai des Fermettes",
      communesAlentours: "Visé, Cheratte, Wandre",
      ctaLocalise: "Créneaux limités à Argenteau : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Argenteau ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'aubel': {
      title: "Lavage auto mobile à Aubel : intérieur & extérieur | Shine&Go",
      metaDescription: "Lavage et nettoyage voiture à domicile à Aubel. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Lavage auto à domicile à Aubel – Intérieur & extérieur",
      intro: "Besoin d’un nettoyage voiture à domicile à Aubel ? Shine&Go se déplace avec tout le matériel pro. Les passages agricoles projettent gravillons et terre sur les bas de caisse Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les passages agricoles projettent gravillons et terre sur les bas de caisse",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Proximité des axes régionaux menant à Liège",
      quartiers: "Saint-Jean-Sart, La Clouse",
      communesAlentours: "Thimister-Clermont, Plombières, Clermont",
      ctaLocalise: "Créneaux limités à Aubel : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Aubel ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'aywaille': {
      title: "Nettoyage voiture Aywaille à domicile – Résultat showroom garanti",
      metaDescription: "Lavage et nettoyage voiture à domicile à Aywaille. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Lavage auto à domicile à Aywaille – Intérieur & extérieur",
      intro: "Besoin d’un nettoyage voiture à domicile à Aywaille ? Shine&Go se déplace avec tout le matériel pro. Les routes sinueuses et forestières projettent boue, feuilles et débris Intervention possible sous carport/garage en cas de pluie ou neige Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les routes sinueuses et forestières projettent boue, feuilles et débris",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Sougné-Remouchamps, Harzé",
      communesAlentours: "Esneux, Sprimont, Stoumont",
      ctaLocalise: "Besoin d’un nettoyage auto à Aywaille ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Aywaille ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'baelen': {
      title: "Lavage voiture à Baelen (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage voiture Baelen à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage & nettoyage auto premium à Baelen",
      intro: "À Baelen, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Région germanophone : les hivers rudes et le sel abîment la carrosserie Service bilingue FR/DE/NL possible sur demande Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Région germanophone : les hivers rudes et le sel abîment la carrosserie",
      contrainteLogistique: "Service bilingue FR/DE/NL possible sur demande",
      accesRoutes: "Liaisons rapides vers Maastricht, Aachen et Vaals",
      quartiers: "Membach, Baelen-centre",
      communesAlentours: "Eupen, Welkenraedt, Lontzen",
      ctaLocalise: "Besoin d’un nettoyage auto à Baelen ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Baelen ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'battice': {
      title: "Nettoyage voiture à domicile à Battice – Shine&Go (service premium)",
      metaDescription: "Nettoyage auto mobile à Battice : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Lavage & nettoyage auto premium à Battice",
      intro: "À Battice, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les passages agricoles projettent gravillons et terre sur les bas de caisse Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      particulariteLocale: "Les passages agricoles projettent gravillons et terre sur les bas de caisse",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Accès rapide via la N3 et les routes secondaires de Hesbaye",
      quartiers: "Centre, La Minerie",
      communesAlentours: "Herve, Thimister-Clermont, Soumagne",
      ctaLocalise: "Besoin d’un nettoyage auto à Battice ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Battice ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'beaufays': {
      title: "Lavage auto mobile à Beaufays : intérieur & extérieur | Shine&Go",
      metaDescription: "Lavage voiture Beaufays à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage auto à domicile à Beaufays – Intérieur & extérieur",
      intro: "À Beaufays, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. En hiver, le sel des routes de montagne ternit vite la peinture Intervention possible sous carport/garage en cas de pluie ou neige",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Accès via E42 et nationales reliant les sites touristiques",
      quartiers: "Beaufays-centre",
      communesAlentours: "Chaudfontaine, Embourg, Liège",
      ctaLocalise: "Votre voiture mérite un vrai soin à Beaufays : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Beaufays ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'berloz': {
      title: "Nettoyage voiture à domicile à Berloz – Shine&Go (service premium)",
      metaDescription: "Nettoyage auto mobile à Berloz : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Nettoyage voiture à domicile à Berloz (Wallonie)",
      intro: "À Berloz, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Les passages agricoles projettent gravillons et terre sur les bas de caisse Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Les passages agricoles projettent gravillons et terre sur les bas de caisse",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Accès rapide via la N3 et les routes secondaires de Hesbaye",
      quartiers: "Corswarem, Rosoux-Crenwick",
      communesAlentours: "Waremme, Remicourt, Verlaine",
      ctaLocalise: "Votre voiture mérite un vrai soin à Berloz : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Berloz ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'blegny': {
      title: "Lavage voiture à Blegny (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Nettoyage auto mobile à Blegny : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Lavage & nettoyage auto premium à Blegny",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Blegny, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Les poids lourds et la poussière industrielle encrassent rapidement les véhicules Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      particulariteLocale: "Les poids lourds et la poussière industrielle encrassent rapidement les véhicules",
      contrainteLogistique: "Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      accesRoutes: "Voies rapides N90/E42 le long de la Meuse",
      quartiers: "Blegny-Mine, Housse, Saive",
      communesAlentours: "Dalhem, Visé, Soumagne",
      ctaLocalise: "Votre voiture mérite un vrai soin à Blegny : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Blegny ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'chaudfontaine': {
      title: "Nettoyage voiture à domicile à Chaudfontaine – Shine&Go (service premium)",
      metaDescription: "Lavage voiture Chaudfontaine à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage auto à domicile à Chaudfontaine – Intérieur & extérieur",
      intro: "À Chaudfontaine, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les routes sinueuses et forestières projettent boue, feuilles et débris Intervention possible sous carport/garage en cas de pluie ou neige",
      particulariteLocale: "Les routes sinueuses et forestières projettent boue, feuilles et débris",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Embourg, Vaux-sous-Chèvremont, Beaufays",
      communesAlentours: "Liège, Esneux, Sprimont",
      ctaLocalise: "Besoin d’un nettoyage auto à Chaudfontaine ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Chaudfontaine ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'dalhem': {
      title: "Nettoyage voiture à domicile à Dalhem – Shine&Go (service premium)",
      metaDescription: "Lavage voiture Dalhem à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage auto à domicile à Dalhem – Intérieur & extérieur",
      intro: "Besoin d’un nettoyage voiture à domicile à Dalhem ? Shine&Go se déplace avec tout le matériel pro. Les passages agricoles projettent gravillons et terre sur les bas de caisse Un simple point d’eau et une prise 230 V suffisent, nous fournissons le reste Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les passages agricoles projettent gravillons et terre sur les bas de caisse",
      contrainteLogistique: "Un simple point d’eau et une prise 230 V suffisent, nous fournissons le reste",
      accesRoutes: "Accès rapide via la N3 et les routes secondaires de Hesbaye",
      quartiers: "Feneur, Mortroux, Warsage",
      communesAlentours: "Visé, Blegny, Aubel",
      ctaLocalise: "Créneaux limités à Dalhem : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Dalhem ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'dison': {
      title: "Lavage voiture à Dison (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage voiture Dison à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage auto à domicile à Dison – Intérieur & extérieur",
      intro: "À Dison, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Les fientes d’oiseaux et la pollution urbaine marquent la peinture Pensez à réserver une place de parking et un accès à une prise 230 V Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Les fientes d’oiseaux et la pollution urbaine marquent la peinture",
      contrainteLogistique: "Pensez à réserver une place de parking et un accès à une prise 230 V",
      accesRoutes: "Lignes de bus et parkings relais nombreux autour",
      quartiers: "Andrimont, Petit-Dison",
      communesAlentours: "Verviers, Pepinster, Limbourg",
      ctaLocalise: "Votre voiture mérite un vrai soin à Dison : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Dison ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'donceel': {
      title: "Nettoyage voiture à domicile à Donceel – Shine&Go (service premium)",
      metaDescription: "Lavage voiture Donceel à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Service mobile : nettoyage voiture à Donceel",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Donceel, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Les passages agricoles projettent gravillons et terre sur les bas de caisse Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      particulariteLocale: "Les passages agricoles projettent gravillons et terre sur les bas de caisse",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Relief léger, routes de campagne parfois étroites",
      quartiers: "Haneffe, Jeneffe, Limont",
      communesAlentours: "Waremme, Verlaine, Remicourt",
      ctaLocalise: "Besoin d’un nettoyage auto à Donceel ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Donceel ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'embourg': {
      title: "Lavage voiture à Embourg (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage et nettoyage voiture à domicile à Embourg. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Service mobile : nettoyage voiture à Embourg",
      intro: "À Embourg, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Les fientes d’oiseaux et la pollution urbaine marquent la peinture Nous pouvons intervenir en parking privé si autorisé par le propriétaire Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Les fientes d’oiseaux et la pollution urbaine marquent la peinture",
      contrainteLogistique: "Nous pouvons intervenir en parking privé si autorisé par le propriétaire",
      accesRoutes: "Lignes de bus et parkings relais nombreux autour",
      quartiers: "Embourg-centre",
      communesAlentours: "Chaudfontaine, Beaufays, Liège",
      ctaLocalise: "Besoin d’un nettoyage auto à Embourg ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Embourg ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'engis': {
      title: "Nettoyage voiture Engis à domicile – Résultat showroom garanti",
      metaDescription: "Besoin d’un car wash à domicile à Engis ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Lavage & nettoyage auto premium à Engis",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Engis, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Les poids lourds et la poussière industrielle encrassent rapidement les véhicules Nous pouvons intervenir sur sites d’entreprises (avec autorisation préalable)",
      particulariteLocale: "Les poids lourds et la poussière industrielle encrassent rapidement les véhicules",
      contrainteLogistique: "Nous pouvons intervenir sur sites d’entreprises (avec autorisation préalable)",
      accesRoutes: "Zones logistiques et échangeurs autoroutiers à proximité",
      quartiers: "Hermalle-sous-Huy, Clermont-sous-Huy",
      communesAlentours: "Amay, Huy, Flémalle",
      ctaLocalise: "Créneaux limités à Engis : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Engis ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'esneux': {
      title: "Lavage auto mobile à Esneux : intérieur & extérieur | Shine&Go",
      metaDescription: "Nettoyage auto mobile à Esneux : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Lavage & nettoyage auto premium à Esneux",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Esneux, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. En hiver, le sel des routes de montagne ternit vite la peinture Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      accesRoutes: "Routes N62/N68 vers Spa-Francorchamps et l’Ardenne",
      quartiers: "Tilff, Méry, Hony",
      communesAlentours: "Chaudfontaine, Sprimont, Liège",
      ctaLocalise: "Votre voiture mérite un vrai soin à Esneux : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Esneux ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'eupen': {
      title: "Nettoyage voiture à domicile à Eupen – Shine&Go (service premium)",
      metaDescription: "Nettoyage auto mobile à Eupen : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Service mobile : nettoyage voiture à Eupen",
      intro: "À Eupen, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Entre Belgique, Allemagne et Pays-Bas, les véhicules subissent des conditions variées Service bilingue FR/DE/NL possible sur demande",
      particulariteLocale: "Entre Belgique, Allemagne et Pays-Bas, les véhicules subissent des conditions variées",
      contrainteLogistique: "Service bilingue FR/DE/NL possible sur demande",
      accesRoutes: "Carrefour de frontières, trafic mixte et varié",
      quartiers: "Kettenis, Nispert",
      communesAlentours: "Raeren, Lontzen, Baelen",
      ctaLocalise: "Besoin d’un nettoyage auto à Eupen ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Eupen ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'flemalle': {
      title: "Nettoyage voiture Flemalle à domicile – Résultat showroom garanti",
      metaDescription: "Lavage et nettoyage voiture à domicile à Flemalle. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Lavage auto à domicile à Flemalle – Intérieur & extérieur",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Flemalle, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Les poids lourds et la poussière industrielle encrassent rapidement les véhicules Le stationnement est généralement aisé dans les zones résidentielles voisines",
      particulariteLocale: "Les poids lourds et la poussière industrielle encrassent rapidement les véhicules",
      contrainteLogistique: "Le stationnement est généralement aisé dans les zones résidentielles voisines",
      accesRoutes: "Routes fréquentées par les camions, poussières fréquentes",
      quartiers: "Flémalle-Haute, Flémalle-Grande, Mons-lez-Liège",
      communesAlentours: "Seraing, Engis, Saint-Georges",
      ctaLocalise: "Besoin d’un nettoyage auto à Flemalle ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Flemalle ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'fleron': {
      title: "Lavage auto mobile à Fleron : intérieur & extérieur | Shine&Go",
      metaDescription: "Lavage voiture Fleron à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Service mobile : nettoyage voiture à Fleron",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Fleron, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Les parkings souterrains et zones bleues compliquent parfois l’accès à l’eau Nous pouvons intervenir en parking privé si autorisé par le propriétaire",
      particulariteLocale: "Les parkings souterrains et zones bleues compliquent parfois l’accès à l’eau",
      contrainteLogistique: "Nous pouvons intervenir en parking privé si autorisé par le propriétaire",
      accesRoutes: "Quais de Meuse et rocades facilitent l’accès",
      quartiers: "Magnée, Retinne",
      communesAlentours: "Soumagne, Chaudfontaine, Liège",
      ctaLocalise: "Créneaux limités à Fleron : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Fleron ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'francorchamps': {
      title: "Lavage voiture à Francorchamps (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage et nettoyage voiture à domicile à Francorchamps. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Service mobile : nettoyage voiture à Francorchamps",
      intro: "À Francorchamps, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Les routes sinueuses et forestières projettent boue, feuilles et débris Intervention possible sous carport/garage en cas de pluie ou neige Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Les routes sinueuses et forestières projettent boue, feuilles et débris",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Francorchamps-village, Hockai",
      communesAlentours: "Stavelot, Spa, Malmedy",
      ctaLocalise: "Besoin d’un nettoyage auto à Francorchamps ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Francorchamps ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'gemmenich': {
      title: "Nettoyage voiture Gemmenich à domicile – Résultat showroom garanti",
      metaDescription: "Nettoyage auto mobile à Gemmenich : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Lavage auto à domicile à Gemmenich – Intérieur & extérieur",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Gemmenich, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Région germanophone : les hivers rudes et le sel abîment la carrosserie Stationnement souvent payant : nous nous adaptons à la réglementation locale",
      particulariteLocale: "Région germanophone : les hivers rudes et le sel abîment la carrosserie",
      contrainteLogistique: "Stationnement souvent payant : nous nous adaptons à la réglementation locale",
      accesRoutes: "E40/A4 et routes transfrontalières très accessibles",
      quartiers: "Gemmenich-centre, Mont Cheval",
      communesAlentours: "Plombières, Montzen, Vaals",
      ctaLocalise: "Besoin d’un nettoyage auto à Gemmenich ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Gemmenich ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'herve': {
      title: "Lavage auto mobile à Herve : intérieur & extérieur | Shine&Go",
      metaDescription: "Besoin d’un car wash à domicile à Herve ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Service mobile : nettoyage voiture à Herve",
      intro: "À Herve, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Après les moissons, un film de poussière recouvre fréquemment les véhicules Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Après les moissons, un film de poussière recouvre fréquemment les véhicules",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Accès rapide via la N3 et les routes secondaires de Hesbaye",
      quartiers: "Battice, Xhendelesse, Julémont",
      communesAlentours: "Thimister-Clermont, Soumagne, Dison",
      ctaLocalise: "Créneaux limités à Herve : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Herve ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'huy': {
      title: "Lavage voiture à Huy (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage et nettoyage voiture à domicile à Huy. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Nettoyage voiture à domicile à Huy (Wallonie)",
      intro: "À Huy, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les zones logistiques apportent poussière, boue et dépôts sur les jantes Le stationnement est généralement aisé dans les zones résidentielles voisines",
      particulariteLocale: "Les zones logistiques apportent poussière, boue et dépôts sur les jantes",
      contrainteLogistique: "Le stationnement est généralement aisé dans les zones résidentielles voisines",
      accesRoutes: "Routes fréquentées par les camions, poussières fréquentes",
      quartiers: "Tihange, Ben-Ahin",
      communesAlentours: "Amay, Wanze, Marchin",
      ctaLocalise: "Besoin d’un nettoyage auto à Huy ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Huy ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'jalhay': {
      title: "Lavage voiture à Jalhay (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage et nettoyage voiture à domicile à Jalhay. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Service mobile : nettoyage voiture à Jalhay",
      intro: "À Jalhay, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. En hiver, le sel des routes de montagne ternit vite la peinture Intervention possible sous carport/garage en cas de pluie ou neige",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Accès via E42 et nationales reliant les sites touristiques",
      quartiers: "Sart-lez-Spa, Solwaster",
      communesAlentours: "Spa, Theux, Stavelot",
      ctaLocalise: "Besoin d’un nettoyage auto à Jalhay ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Jalhay ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'jemeppe': {
      title: "Lavage voiture à Jemeppe (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Nettoyage auto mobile à Jemeppe : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Nettoyage voiture à domicile à Jemeppe (Wallonie)",
      intro: "Besoin d’un nettoyage voiture à domicile à Jemeppe ? Shine&Go se déplace avec tout le matériel pro. La proximité d’industries laisse souvent un voile de suie sur la carrosserie Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "La proximité d’industries laisse souvent un voile de suie sur la carrosserie",
      contrainteLogistique: "Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      accesRoutes: "Routes fréquentées par les camions, poussières fréquentes",
      quartiers: "Jemeppe-sur-Meuse, Tilleur",
      communesAlentours: "Seraing, Flémalle, Liège",
      ctaLocalise: "Votre voiture mérite un vrai soin à Jemeppe : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Jemeppe ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'kelmis': {
      title: "Nettoyage voiture à domicile à Kelmis – Shine&Go (service premium)",
      metaDescription: "Besoin d’un car wash à domicile à Kelmis ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Service mobile : nettoyage voiture à Kelmis",
      intro: "Besoin d’un nettoyage voiture à domicile à Kelmis ? Shine&Go se déplace avec tout le matériel pro. Les trajets transfrontaliers laissent insectes et poussières d’autoroute Service bilingue FR/DE/NL possible sur demande Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les trajets transfrontaliers laissent insectes et poussières d’autoroute",
      contrainteLogistique: "Service bilingue FR/DE/NL possible sur demande",
      accesRoutes: "Carrefour de frontières, trafic mixte et varié",
      quartiers: "La Calamine, Neu-Moresnet, Hergenrath",
      communesAlentours: "Lontzen, Raeren, Plombières",
      ctaLocalise: "Votre voiture mérite un vrai soin à Kelmis : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Kelmis ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'liege': {
      title: "Nettoyage voiture Liège à domicile – Résultat showroom garanti",
      metaDescription: "Lavage voiture Liège à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Nettoyage voiture à domicile à Liège (Wallonie)",
      intro: "À Liège, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les parkings souterrains et zones bleues compliquent parfois l’accès à l’eau Nous pouvons intervenir en parking privé si autorisé par le propriétaire",
      particulariteLocale: "Les parkings souterrains et zones bleues compliquent parfois l’accès à l’eau",
      contrainteLogistique: "Nous pouvons intervenir en parking privé si autorisé par le propriétaire",
      accesRoutes: "Quais de Meuse et rocades facilitent l’accès",
      quartiers: "Grivegnée, Outremeuse, Sclessin, Chênée",
      communesAlentours: "Ans, Seraing, Chaudfontaine",
      ctaLocalise: "Votre voiture mérite un vrai soin à Liège : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Liège ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'limbourg': {
      title: "Nettoyage voiture Limbourg à domicile – Résultat showroom garanti",
      metaDescription: "Lavage voiture Limbourg à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage auto à domicile à Limbourg – Intérieur & extérieur",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Limbourg, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Pollen, résine et insectes sont fréquents sur les carrosseries en zone boisée Intervention possible sous carport/garage en cas de pluie ou neige",
      particulariteLocale: "Pollen, résine et insectes sont fréquents sur les carrosseries en zone boisée",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Limbourg-ville, Dolhain, Goé",
      communesAlentours: "Verviers, Baelen, Eupen",
      ctaLocalise: "Besoin d’un nettoyage auto à Limbourg ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Limbourg ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'lontzen': {
      title: "Lavage auto mobile à Lontzen : intérieur & extérieur | Shine&Go",
      metaDescription: "Lavage voiture Lontzen à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage & nettoyage auto premium à Lontzen",
      intro: "À Lontzen, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les trajets transfrontaliers laissent insectes et poussières d’autoroute Stationnement souvent payant : nous nous adaptons à la réglementation locale",
      particulariteLocale: "Les trajets transfrontaliers laissent insectes et poussières d’autoroute",
      contrainteLogistique: "Stationnement souvent payant : nous nous adaptons à la réglementation locale",
      accesRoutes: "Carrefour de frontières, trafic mixte et varié",
      quartiers: "Walhorn, Lontzen-centre",
      communesAlentours: "Eupen, Raeren, Baelen",
      ctaLocalise: "Votre voiture mérite un vrai soin à Lontzen : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Lontzen ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'malmedy': {
      title: "Nettoyage voiture à domicile à Malmedy – Shine&Go (service premium)",
      metaDescription: "Besoin d’un car wash à domicile à Malmedy ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Lavage auto à domicile à Malmedy – Intérieur & extérieur",
      intro: "À Malmedy, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. En hiver, le sel des routes de montagne ternit vite la peinture Prévoir un créneau adapté aux routes sinueuses et au trafic touristique",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Prévoir un créneau adapté aux routes sinueuses et au trafic touristique",
      accesRoutes: "Accès via E42 et nationales reliant les sites touristiques",
      quartiers: "Bellevaux, Bevercé, Ligneuville",
      communesAlentours: "Waimes, Stavelot, Trois-Ponts",
      ctaLocalise: "Créneaux limités à Malmedy : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Malmedy ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'marchin': {
      title: "Nettoyage voiture Marchin à domicile – Résultat showroom garanti",
      metaDescription: "Besoin d’un car wash à domicile à Marchin ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Service mobile : nettoyage voiture à Marchin",
      intro: "Besoin d’un nettoyage voiture à domicile à Marchin ? Shine&Go se déplace avec tout le matériel pro. Les passages agricoles projettent gravillons et terre sur les bas de caisse Stationnement facile devant chez vous : idéal pour notre karcher et aspirateur Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les passages agricoles projettent gravillons et terre sur les bas de caisse",
      contrainteLogistique: "Stationnement facile devant chez vous : idéal pour notre karcher et aspirateur",
      accesRoutes: "Relief léger, routes de campagne parfois étroites",
      quartiers: "Grand-Marchin, Vyle-et-Tharoul",
      communesAlentours: "Huy, Modave, Clavier",
      ctaLocalise: "Votre voiture mérite un vrai soin à Marchin : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Marchin ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'montzen': {
      title: "Nettoyage voiture Montzen à domicile – Résultat showroom garanti",
      metaDescription: "Besoin d’un car wash à domicile à Montzen ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Nettoyage voiture à domicile à Montzen (Wallonie)",
      intro: "Besoin d’un nettoyage voiture à domicile à Montzen ? Shine&Go se déplace avec tout le matériel pro. Région germanophone : les hivers rudes et le sel abîment la carrosserie Déplacement avec supplément selon la distance transfrontalière Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Région germanophone : les hivers rudes et le sel abîment la carrosserie",
      contrainteLogistique: "Déplacement avec supplément selon la distance transfrontalière",
      accesRoutes: "Carrefour de frontières, trafic mixte et varié",
      quartiers: "Montzen-centre, Moresnet",
      communesAlentours: "Plombières, Welkenraedt, Gemmenich",
      ctaLocalise: "Votre voiture mérite un vrai soin à Montzen : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Montzen ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'mouland': {
      title: "Nettoyage voiture Mouland à domicile – Résultat showroom garanti",
      metaDescription: "Nettoyage auto mobile à Mouland : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Service mobile : nettoyage voiture à Mouland",
      intro: "Besoin d’un nettoyage voiture à domicile à Mouland ? Shine&Go se déplace avec tout le matériel pro. Les trajets transfrontaliers laissent insectes et poussières d’autoroute Service bilingue FR/DE/NL possible sur demande Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les trajets transfrontaliers laissent insectes et poussières d’autoroute",
      contrainteLogistique: "Service bilingue FR/DE/NL possible sur demande",
      accesRoutes: "E40/A4 et routes transfrontalières très accessibles",
      quartiers: "Mouland-centre, Loën",
      communesAlentours: "Visé, Dalhem, Fourons",
      ctaLocalise: "Créneaux limités à Mouland : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Mouland ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'nessonvaux': {
      title: "Lavage voiture à Nessonvaux (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage voiture Nessonvaux à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Service mobile : nettoyage voiture à Nessonvaux",
      intro: "À Nessonvaux, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. En hiver, le sel des routes de montagne ternit vite la peinture Nous couvrons aussi les gîtes/chalets pour des interventions groupées Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Nessonvaux, Fraipont",
      communesAlentours: "Trooz, Olne, Chaudfontaine",
      ctaLocalise: "Besoin d’un nettoyage auto à Nessonvaux ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Nessonvaux ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'olne': {
      title: "Nettoyage voiture Olne à domicile – Résultat showroom garanti",
      metaDescription: "Lavage voiture Olne à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage auto à domicile à Olne – Intérieur & extérieur",
      intro: "Besoin d’un nettoyage voiture à domicile à Olne ? Shine&Go se déplace avec tout le matériel pro. Les passages agricoles projettent gravillons et terre sur les bas de caisse Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les passages agricoles projettent gravillons et terre sur les bas de caisse",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Relief léger, routes de campagne parfois étroites",
      quartiers: "Saint-Hadelin, Gelivau",
      communesAlentours: "Soumagne, Trooz, Pepinster",
      ctaLocalise: "Créneaux limités à Olne : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Olne ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'ovifat': {
      title: "Nettoyage voiture Ovifat à domicile – Résultat showroom garanti",
      metaDescription: "Besoin d’un car wash à domicile à Ovifat ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Lavage & nettoyage auto premium à Ovifat",
      intro: "À Ovifat, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. En hiver, le sel des routes de montagne ternit vite la peinture Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Ovifat (station de ski), Longfaye",
      communesAlentours: "Waimes, Robertville, Malmedy",
      ctaLocalise: "Besoin d’un nettoyage auto à Ovifat ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Ovifat ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'pepinster': {
      title: "Lavage auto mobile à Pepinster : intérieur & extérieur | Shine&Go",
      metaDescription: "Lavage et nettoyage voiture à domicile à Pepinster. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Lavage auto à domicile à Pepinster – Intérieur & extérieur",
      intro: "Besoin d’un nettoyage voiture à domicile à Pepinster ? Shine&Go se déplace avec tout le matériel pro. En hiver, le sel des routes de montagne ternit vite la peinture Nous couvrons aussi les gîtes/chalets pour des interventions groupées Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      accesRoutes: "Accès via E42 et nationales reliant les sites touristiques",
      quartiers: "Cornesse, Wegnez",
      communesAlentours: "Verviers, Theux, Jalhay",
      ctaLocalise: "Votre voiture mérite un vrai soin à Pepinster : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Pepinster ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'plombieres': {
      title: "Nettoyage voiture à domicile à Plombieres – Shine&Go (service premium)",
      metaDescription: "Lavage et nettoyage voiture à domicile à Plombieres. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Nettoyage voiture à domicile à Plombieres (Wallonie)",
      intro: "Besoin d’un nettoyage voiture à domicile à Plombieres ? Shine&Go se déplace avec tout le matériel pro. Région germanophone : les hivers rudes et le sel abîment la carrosserie Stationnement souvent payant : nous nous adaptons à la réglementation locale Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Région germanophone : les hivers rudes et le sel abîment la carrosserie",
      contrainteLogistique: "Stationnement souvent payant : nous nous adaptons à la réglementation locale",
      accesRoutes: "Carrefour de frontières, trafic mixte et varié",
      quartiers: "Montzen, Gemmenich, Moresnet",
      communesAlentours: "Welkenraedt, Aubel, Dalhem",
      ctaLocalise: "Créneaux limités à Plombieres : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Plombieres ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'raeren': {
      title: "Lavage voiture à Raeren (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage et nettoyage voiture à domicile à Raeren. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Service mobile : nettoyage voiture à Raeren",
      intro: "À Raeren, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Région germanophone : les hivers rudes et le sel abîment la carrosserie Stationnement souvent payant : nous nous adaptons à la réglementation locale",
      particulariteLocale: "Région germanophone : les hivers rudes et le sel abîment la carrosserie",
      contrainteLogistique: "Stationnement souvent payant : nous nous adaptons à la réglementation locale",
      accesRoutes: "Liaisons rapides vers Maastricht, Aachen et Vaals",
      quartiers: "Eynatten, Hauset",
      communesAlentours: "Eupen, Lontzen, Kelmis",
      ctaLocalise: "Créneaux limités à Raeren : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Raeren ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'remicourt': {
      title: "Nettoyage voiture Remicourt à domicile – Résultat showroom garanti",
      metaDescription: "Lavage et nettoyage voiture à domicile à Remicourt. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Lavage & nettoyage auto premium à Remicourt",
      intro: "À Remicourt, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les routes de campagne laissent souvent boue et poussière sur la carrosserie Stationnement facile devant chez vous : idéal pour notre karcher et aspirateur",
      particulariteLocale: "Les routes de campagne laissent souvent boue et poussière sur la carrosserie",
      contrainteLogistique: "Stationnement facile devant chez vous : idéal pour notre karcher et aspirateur",
      accesRoutes: "Accès rapide via la N3 et les routes secondaires de Hesbaye",
      quartiers: "Hodeige, Pousset, Lamine",
      communesAlentours: "Waremme, Donceel, Crisnée",
      ctaLocalise: "Votre voiture mérite un vrai soin à Remicourt : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Remicourt ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'remouchamps': {
      title: "Lavage auto mobile à Remouchamps : intérieur & extérieur | Shine&Go",
      metaDescription: "Lavage et nettoyage voiture à domicile à Remouchamps. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Lavage & nettoyage auto premium à Remouchamps",
      intro: "À Remouchamps, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. En hiver, le sel des routes de montagne ternit vite la peinture Intervention possible sous carport/garage en cas de pluie ou neige",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Accès via E42 et nationales reliant les sites touristiques",
      quartiers: "Sougné-Remouchamps, Deigné",
      communesAlentours: "Aywaille, Sprimont, Esneux",
      ctaLocalise: "Créneaux limités à Remouchamps : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Remouchamps ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'robertville': {
      title: "Lavage auto mobile à Robertville : intérieur & extérieur | Shine&Go",
      metaDescription: "Nettoyage auto mobile à Robertville : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Lavage auto à domicile à Robertville – Intérieur & extérieur",
      intro: "Besoin d’un nettoyage voiture à domicile à Robertville ? Shine&Go se déplace avec tout le matériel pro. Pollen, résine et insectes sont fréquents sur les carrosseries en zone boisée Intervention possible sous carport/garage en cas de pluie ou neige Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Pollen, résine et insectes sont fréquents sur les carrosseries en zone boisée",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Accès via E42 et nationales reliant les sites touristiques",
      quartiers: "Robertville-centre, Sourbrodt",
      communesAlentours: "Waimes, Malmedy, Bütgenbach",
      ctaLocalise: "Créneaux limités à Robertville : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Robertville ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'saint-georges': {
      title: "Lavage auto mobile à Saint-georges : intérieur & extérieur | Shine&Go",
      metaDescription: "Lavage et nettoyage voiture à domicile à Saint-georges. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Nettoyage voiture à domicile à Saint-georges (Wallonie)",
      intro: "À Saint-georges, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les zones logistiques apportent poussière, boue et dépôts sur les jantes Le stationnement est généralement aisé dans les zones résidentielles voisines",
      particulariteLocale: "Les zones logistiques apportent poussière, boue et dépôts sur les jantes",
      contrainteLogistique: "Le stationnement est généralement aisé dans les zones résidentielles voisines",
      accesRoutes: "Routes fréquentées par les camions, poussières fréquentes",
      quartiers: "Stockay, Sur-les-Bois",
      communesAlentours: "Waremme, Verlaine, Amay",
      ctaLocalise: "Besoin d’un nettoyage auto à Saint-georges ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Saint-georges ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'seraing': {
      title: "Lavage auto mobile à Seraing : intérieur & extérieur | Shine&Go",
      metaDescription: "Besoin d’un car wash à domicile à Seraing ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Service mobile : nettoyage voiture à Seraing",
      intro: "À Seraing, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. La proximité d’industries laisse souvent un voile de suie sur la carrosserie Le stationnement est généralement aisé dans les zones résidentielles voisines",
      particulariteLocale: "La proximité d’industries laisse souvent un voile de suie sur la carrosserie",
      contrainteLogistique: "Le stationnement est généralement aisé dans les zones résidentielles voisines",
      accesRoutes: "Voies rapides N90/E42 le long de la Meuse",
      quartiers: "Ougrée, Jemeppe, Boncelles",
      communesAlentours: "Liège, Flémalle, Neupré",
      ctaLocalise: "Besoin d’un nettoyage auto à Seraing ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Seraing ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'soumagne': {
      title: "Lavage voiture à Soumagne (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Besoin d’un car wash à domicile à Soumagne ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Lavage auto à domicile à Soumagne – Intérieur & extérieur",
      intro: "À Soumagne, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Les routes de campagne laissent souvent boue et poussière sur la carrosserie Stationnement facile devant chez vous : idéal pour notre karcher et aspirateur Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Les routes de campagne laissent souvent boue et poussière sur la carrosserie",
      contrainteLogistique: "Stationnement facile devant chez vous : idéal pour notre karcher et aspirateur",
      accesRoutes: "Proximité des axes régionaux menant à Liège",
      quartiers: "Micheroux, Evegnée, Ayeneux",
      communesAlentours: "Fléron, Herve, Chaudfontaine",
      ctaLocalise: "Créneaux limités à Soumagne : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Soumagne ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'spa': {
      title: "Lavage auto mobile à Spa : intérieur & extérieur | Shine&Go",
      metaDescription: "Nettoyage auto mobile à Spa : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Nettoyage voiture à domicile à Spa (Wallonie)",
      intro: "Besoin d’un nettoyage voiture à domicile à Spa ? Shine&Go se déplace avec tout le matériel pro. Les routes sinueuses et forestières projettent boue, feuilles et débris Intervention possible sous carport/garage en cas de pluie ou neige Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les routes sinueuses et forestières projettent boue, feuilles et débris",
      contrainteLogistique: "Intervention possible sous carport/garage en cas de pluie ou neige",
      accesRoutes: "Accès via E42 et nationales reliant les sites touristiques",
      quartiers: "Nivezé, Creppe, Winamplanche",
      communesAlentours: "Theux, Stavelot, Jalhay",
      ctaLocalise: "Votre voiture mérite un vrai soin à Spa : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Spa ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'sprimont': {
      title: "Nettoyage voiture à domicile à Sprimont – Shine&Go (service premium)",
      metaDescription: "Lavage et nettoyage voiture à domicile à Sprimont. Service complet intérieur/extérieur, produits premium, résultat showroom. Devis gratuit.",
      h1: "Lavage & nettoyage auto premium à Sprimont",
      intro: "À Sprimont, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. Les routes de campagne laissent souvent boue et poussière sur la carrosserie Stationnement facile devant chez vous : idéal pour notre karcher et aspirateur Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "Les routes de campagne laissent souvent boue et poussière sur la carrosserie",
      contrainteLogistique: "Stationnement facile devant chez vous : idéal pour notre karcher et aspirateur",
      accesRoutes: "Proximité des axes régionaux menant à Liège",
      quartiers: "Dolembreux, Gomzé-Andoumont, Louveigné",
      communesAlentours: "Esneux, Aywaille, Chaudfontaine",
      ctaLocalise: "Besoin d’un nettoyage auto à Sprimont ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Sprimont ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'stavelot': {
      title: "Lavage auto mobile à Stavelot : intérieur & extérieur | Shine&Go",
      metaDescription: "Besoin d’un car wash à domicile à Stavelot ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Lavage & nettoyage auto premium à Stavelot",
      intro: "Besoin d’un nettoyage voiture à domicile à Stavelot ? Shine&Go se déplace avec tout le matériel pro. En hiver, le sel des routes de montagne ternit vite la peinture Nous couvrons aussi les gîtes/chalets pour des interventions groupées Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      accesRoutes: "Routes N62/N68 vers Spa-Francorchamps et l’Ardenne",
      quartiers: "Coo, Francorchamps, Ster",
      communesAlentours: "Malmedy, Trois-Ponts, Waimes",
      ctaLocalise: "Créneaux limités à Stavelot : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Stavelot ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'theux': {
      title: "Lavage auto mobile à Theux : intérieur & extérieur | Shine&Go",
      metaDescription: "Nettoyage auto mobile à Theux : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Nettoyage voiture à domicile à Theux (Wallonie)",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Theux, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Pollen, résine et insectes sont fréquents sur les carrosseries en zone boisée Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      particulariteLocale: "Pollen, résine et insectes sont fréquents sur les carrosseries en zone boisée",
      contrainteLogistique: "Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "La Reid, Polleur, Juslenville",
      communesAlentours: "Spa, Pepinster, Jalhay",
      ctaLocalise: "Votre voiture mérite un vrai soin à Theux : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Theux ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Acceptez-vous le paiement par virement ou via QR code ?", answer: "Oui, nous acceptons espèces, virement et paiement mobile (QR Payconiq / Bancontact)." }
      ]
    },
    'thimister': {
      title: "Nettoyage voiture Thimister à domicile – Résultat showroom garanti",
      metaDescription: "Lavage voiture Thimister à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Nettoyage voiture à domicile à Thimister (Wallonie)",
      intro: "À Thimister, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Après les moissons, un film de poussière recouvre fréquemment les véhicules Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      particulariteLocale: "Après les moissons, un film de poussière recouvre fréquemment les véhicules",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Relief léger, routes de campagne parfois étroites",
      quartiers: "Thimister, Clermont-sur-Berwinne",
      communesAlentours: "Herve, Aubel, Dalhem",
      ctaLocalise: "Créneaux limités à Thimister : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Thimister ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'tilff': {
      title: "Lavage voiture à Tilff (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Nettoyage auto mobile à Tilff : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Lavage & nettoyage auto premium à Tilff",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Tilff, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. En hiver, le sel des routes de montagne ternit vite la peinture Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Tilff-centre, Méry",
      communesAlentours: "Esneux, Chaudfontaine, Liège",
      ctaLocalise: "Créneaux limités à Tilff : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Tilff ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'trois-ponts': {
      title: "Nettoyage voiture Trois-ponts à domicile – Résultat showroom garanti",
      metaDescription: "Nettoyage auto mobile à Trois-ponts : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Nettoyage voiture à domicile à Trois-ponts (Wallonie)",
      intro: "Besoin d’un nettoyage voiture à domicile à Trois-ponts ? Shine&Go se déplace avec tout le matériel pro. En hiver, le sel des routes de montagne ternit vite la peinture Nous couvrons aussi les gîtes/chalets pour des interventions groupées Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Nous couvrons aussi les gîtes/chalets pour des interventions groupées",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Wanne, Fosse",
      communesAlentours: "Stavelot, Vielsalm, Lierneux",
      ctaLocalise: "Votre voiture mérite un vrai soin à Trois-ponts : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Trois-ponts ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'trooz': {
      title: "Nettoyage voiture à domicile à Trooz – Shine&Go (service premium)",
      metaDescription: "Lavage voiture Trooz à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Nettoyage voiture à domicile à Trooz (Wallonie)",
      intro: "À Trooz, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les routes sinueuses et forestières projettent boue, feuilles et débris Prévoir un créneau adapté aux routes sinueuses et au trafic touristique",
      particulariteLocale: "Les routes sinueuses et forestières projettent boue, feuilles et débris",
      contrainteLogistique: "Prévoir un créneau adapté aux routes sinueuses et au trafic touristique",
      accesRoutes: "Routes sinueuses de forêt : prévoir parfois un peu plus de temps",
      quartiers: "Fraipont, Nessonvaux",
      communesAlentours: "Chaudfontaine, Olne, Soumagne",
      ctaLocalise: "Votre voiture mérite un vrai soin à Trooz : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Trooz ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'vaals': {
      title: "Nettoyage voiture Vaals à domicile – Résultat showroom garanti",
      metaDescription: "Besoin d’un car wash à domicile à Vaals ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Service mobile : nettoyage voiture à Vaals",
      intro: "À Vaals, nos clients gagnent du temps : Shine&Go lave leur voiture à domicile avec des produits haut de gamme. Les trajets transfrontaliers laissent insectes et poussières d’autoroute Service bilingue FR/DE/NL possible sur demande",
      particulariteLocale: "Les trajets transfrontaliers laissent insectes et poussières d’autoroute",
      contrainteLogistique: "Service bilingue FR/DE/NL possible sur demande",
      accesRoutes: "Carrefour de frontières, trafic mixte et varié",
      quartiers: "Vaals-centre, Holset",
      communesAlentours: "Aix-la-Chapelle, Gemmenich, Plombières",
      ctaLocalise: "Votre voiture mérite un vrai soin à Vaals : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Vaals ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'verlaine': {
      title: "Nettoyage voiture à domicile à Verlaine – Shine&Go (service premium)",
      metaDescription: "Nettoyage auto mobile à Verlaine : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Nettoyage voiture à domicile à Verlaine (Wallonie)",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Verlaine, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Les routes de campagne laissent souvent boue et poussière sur la carrosserie Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      particulariteLocale: "Les routes de campagne laissent souvent boue et poussière sur la carrosserie",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Relief léger, routes de campagne parfois étroites",
      quartiers: "Chapon-Seraing, Seraing-le-Château",
      communesAlentours: "Waremme, Donceel, Saint-Georges",
      ctaLocalise: "Besoin d’un nettoyage auto à Verlaine ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Verlaine ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'verviers': {
      title: "Nettoyage voiture à domicile à Verviers – Shine&Go (service premium)",
      metaDescription: "Besoin d’un car wash à domicile à Verviers ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Lavage & nettoyage auto premium à Verviers",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Verviers, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Le trafic dense et le stationnement en voirie salissent vite les carrosseries Pensez à réserver une place de parking et un accès à une prise 230 V",
      particulariteLocale: "Le trafic dense et le stationnement en voirie salissent vite les carrosseries",
      contrainteLogistique: "Pensez à réserver une place de parking et un accès à une prise 230 V",
      accesRoutes: "Axes E25/E40 tout proches et boulevards urbains principaux",
      quartiers: "Heusy, Stembert, Ensival",
      communesAlentours: "Pepinster, Dison, Theux",
      ctaLocalise: "Créneaux limités à Verviers : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Verviers ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'vise': {
      title: "Nettoyage voiture à domicile à Vise – Shine&Go (service premium)",
      metaDescription: "Nettoyage auto mobile à Vise : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Lavage auto à domicile à Vise – Intérieur & extérieur",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Vise, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. La proximité d’industries laisse souvent un voile de suie sur la carrosserie Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      particulariteLocale: "La proximité d’industries laisse souvent un voile de suie sur la carrosserie",
      contrainteLogistique: "Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      accesRoutes: "Routes fréquentées par les camions, poussières fréquentes",
      quartiers: "Cheratte, Lixhe, Lanaye",
      communesAlentours: "Herstal, Dalhem, Oupeye",
      ctaLocalise: "Besoin d’un nettoyage auto à Vise ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Vise ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Proposez-vous un forfait spécial pour plusieurs voitures au même endroit ?", answer: "Oui, nous appliquons une remise groupée dès 2 véhicules sur le même site. Idéal pour les familles ou collègues !" }
      ]
    },
    'waimes': {
      title: "Nettoyage voiture à domicile à Waimes – Shine&Go (service premium)",
      metaDescription: "Lavage voiture Waimes à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Lavage & nettoyage auto premium à Waimes",
      intro: "À Waimes, Shine&Go intervient directement chez vous pour un lavage auto mobile premium. En hiver, le sel des routes de montagne ternit vite la peinture Prévoir un créneau adapté aux routes sinueuses et au trafic touristique Résultat showroom garanti, sans file d’attente.",
      particulariteLocale: "En hiver, le sel des routes de montagne ternit vite la peinture",
      contrainteLogistique: "Prévoir un créneau adapté aux routes sinueuses et au trafic touristique",
      accesRoutes: "Routes N62/N68 vers Spa-Francorchamps et l’Ardenne",
      quartiers: "Robertville, Ovifat, Faymonville",
      communesAlentours: "Malmedy, Bütgenbach, Stavelot",
      ctaLocalise: "Votre voiture mérite un vrai soin à Waimes : contactez Shine&Go maintenant.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Waimes ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'wanze': {
      title: "Lavage auto mobile à Wanze : intérieur & extérieur | Shine&Go",
      metaDescription: "Nettoyage auto mobile à Wanze : intérieur, extérieur, pack complet. Déplacement gratuit ≤25 km. Réservez votre créneau en ligne.",
      h1: "Lavage & nettoyage auto premium à Wanze",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Wanze, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Les zones logistiques apportent poussière, boue et dépôts sur les jantes Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      particulariteLocale: "Les zones logistiques apportent poussière, boue et dépôts sur les jantes",
      contrainteLogistique: "Accès à l’eau nécessaire : robinet extérieur ou intérieur à prévoir",
      accesRoutes: "Routes fréquentées par les camions, poussières fréquentes",
      quartiers: "Antheit, Vinalmont, Bas-Oha",
      communesAlentours: "Huy, Amay, Braives",
      ctaLocalise: "Créneaux limités à Wanze : réservez votre lavage voiture aujourd’hui !",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Wanze ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    },
    'waremme': {
      title: "Lavage voiture à Waremme (Wallonie) – Shine&Go se déplace chez vous",
      metaDescription: "Lavage voiture Waremme à domicile : aspirateur, mousse active, protection cire. Formules dès 39€. Satisfaction garantie !",
      h1: "Service mobile : nettoyage voiture à Waremme",
      intro: "Besoin d’un nettoyage voiture à domicile à Waremme ? Shine&Go se déplace avec tout le matériel pro. Les passages agricoles projettent gravillons et terre sur les bas de caisse Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité Profitez d’un habitacle et d’une carrosserie impeccables.",
      particulariteLocale: "Les passages agricoles projettent gravillons et terre sur les bas de caisse",
      contrainteLogistique: "Les maisons 4 façades nous permettent d’installer le matériel en toute simplicité",
      accesRoutes: "Proximité des axes régionaux menant à Liège",
      quartiers: "Bleret, Grand-Axhe, Lantremange",
      communesAlentours: "Remicourt, Berloz, Crisnée",
      ctaLocalise: "Besoin d’un nettoyage auto à Waremme ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Waremme ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Nettoyez-vous aussi les utilitaires ou vans ?", answer: "Absolument, nos formules s’adaptent aux utilitaires, vans et petits camions légers (tarifs sur demande)." }
      ]
    },
    'welkenraedt': {
      title: "Lavage auto mobile à Welkenraedt : intérieur & extérieur | Shine&Go",
      metaDescription: "Besoin d’un car wash à domicile à Welkenraedt ? Shine&Go vient chez vous : nettoyage intérieur & extérieur, finition pro, sans file d’attente.",
      h1: "Nettoyage voiture à domicile à Welkenraedt (Wallonie)",
      intro: "Votre voiture mérite mieux qu’un car wash automatique : à Welkenraedt, notre équipe Shine&Go réalise un nettoyage auto complet chez vous. Région germanophone : les hivers rudes et le sel abîment la carrosserie Service bilingue FR/DE/NL possible sur demande",
      particulariteLocale: "Région germanophone : les hivers rudes et le sel abîment la carrosserie",
      contrainteLogistique: "Service bilingue FR/DE/NL possible sur demande",
      accesRoutes: "Carrefour de frontières, trafic mixte et varié",
      quartiers: "Henri-Chapelle, Membach",
      communesAlentours: "Eupen, Baelen, Lontzen",
      ctaLocalise: "Besoin d’un nettoyage auto à Welkenraedt ? Bloquez votre rendez-vous en quelques clics.",
      faqs: [
        { question: "Intervenez-vous réellement dans toute la commune de Welkenraedt ?", answer: "Oui, nous couvrons toute la commune ainsi que les sections voisines, sans supplément dans un rayon de 25 km autour de Herve." },
        { question: "Faut-il prévoir un point d’eau et une prise 230 V ?", answer: "Oui, un robinet et une prise suffisent. Si ce n’est pas possible, indiquez-le nous : nous trouverons une solution." },
        { question: "Pouvez-vous intervenir le week-end ou en soirée ?", answer: "Oui, selon nos disponibilités. Mentionnez vos contraintes lors de la réservation, nous nous adaptons autant que possible." },
        { question: "Quelle est la différence avec un car wash classique ?", answer: "Notre service est manuel, sur-mesure, avec des produits premium. Pas de rouleaux agressifs et une finition détaillée (jantes, plastiques, vitres...)." },
        { question: "Puis-je réserver un créneau en urgence ?", answer: "Selon nos disponibilités, nous pouvons parfois intervenir sous 24 h. Contactez-nous pour vérifier." }
      ]
    }
  };

  // Retourner les témoignages du CSV si disponibles, sinon générer des témoignages par défaut
  const testimonials = (csvTestimonials as any)[citySlug] || [
    {
      name: 'Client',
      vehicle: 'véhicule',
      neighborhood: 'Centre-ville',
      rating: 5,
      text: `« Service impeccable à ${cityName}, véhicule remis comme neuf ! » – Client, ${cityName}`,
      date: '2024-01-15'
    },
    {
      name: 'Pierre D.',
      vehicle: 'BMW Série 3',
      neighborhood: 'Quartier résidentiel',
      rating: 5,
      text: `« Service impeccable à ${cityName}, BMW Série 3 remise comme neuve ! » – Pierre D., ${cityName}`,
      date: '2024-01-10'
    },
    {
      name: 'Marie L.',
      vehicle: 'Audi A4',
      neighborhood: 'Zone commerciale',
      rating: 5,
      text: `« Service impeccable à ${cityName}, Audi A4 remise comme neuve ! » – Marie L., ${cityName}`,
      date: '2024-01-12'
    }
  ];
  // Récupérer les données spécifiques à la ville
  const citySpecificData = (csvCityData as any)[citySlug] || {};
  return {
    name: cityName,
    ...baseData,
    testimonials: testimonials,
    // Données spécifiques du CSV
    title: citySpecificData.title || `Nettoyage voiture à domicile à ${cityName} – Shine&Go`,
    metaDescription: citySpecificData.metaDescription || `Lavage voiture ${cityName} à domicile : service complet, produits premium, résultat showroom.`,
    h1: citySpecificData.h1 || `Lavage auto à domicile à ${cityName}`,
    intro: citySpecificData.intro || `À ${cityName}, Shine&Go intervient directement chez vous pour un lavage auto mobile premium.`,
    particulariteLocale: citySpecificData.particulariteLocale || '',
    contrainteLogistique: citySpecificData.contrainteLogistique || '',
    accesRoutes: citySpecificData.accesRoutes || '',
    quartiers: citySpecificData.quartiers || '',
    communesAlentours: citySpecificData.communesAlentours || '',
    ctaLocalise: citySpecificData.ctaLocalise || `Réservez votre lavage voiture à ${cityName}`,
    faqs: citySpecificData.faqs || []
  };
  return {
    name: cityName,
    ...baseData,
    testimonials: testimonials,
    faqs: [] // Ajouter la propriété faqs manquante
  };
};

// Composant Hero avec localisation
const CityHero = ({ cityName, cityData }: { cityName: string; cityData: any }) => {
  // Utiliser les données CSV
  const csvContent = {
    h1: cityData.h1 || `Lavage auto à domicile à ${cityName}`,
    intro: cityData.phraseIntro || `À ${cityName}, Shine&Go intervient directement chez vous pour un lavage auto mobile premium.`,
    cta: "Réservez votre lavage voiture"
  };
  
  const handleBooking = () => {
    window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto à ${cityName}`, '_blank');
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      {/* Container principal */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen w-full max-w-none px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Spacer pour le header */}
        <div className="h-14 sm:h-16 md:h-20 flex-shrink-0"></div>
        
        {/* Contenu centré */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              
              {/* Badge Service Premium */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-green-600/10 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-600/20 mb-4 sm:mb-6">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-600 font-medium text-sm">Service Premium de Nettoyage & Lavage Voiture à Domicile en Wallonie</span>
              </div>

              {/* H1 + Punchline */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-slate-900">
                  <span className="block">{csvContent.h1}</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-semibold">
                  {csvContent.intro}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Valeting mobile premium • Produits Koch-Chemie
                  <br className="hidden sm:block" />
                  Intervention sous 48h
                </p>
              </div>

              {/* Preuve sociale locale */}
              <div className="inline-flex items-center bg-yellow-50 px-4 sm:px-6 py-3 rounded-full border border-yellow-200">
                <div className="flex items-center mr-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-slate-700 font-semibold text-sm sm:text-base">4,9/5</span>
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm">
                  {cityData.testimonials.length + 30} avis clients
                </span>
              </div>

              {/* CTAs localisés */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 w-full max-w-lg mx-auto">
                
                {/* CTA Principal */}
                <button 
                  onClick={handleBooking}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate">{csvContent.cta}</span>
                </button>
                
                {/* CTA Secondaire */}
                <button 
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate">Chat WhatsApp</span>
                </button>

              </div>

              {/* Informations de déplacement */}
              <div className="text-center pt-8">
                <p className="text-sm sm:text-base text-slate-600 mb-1">
                  <strong>Déplacement offert ≤ 25 km à partir de Herve</strong> • Intervention dans tout le {cityData.postalCodes.join(', ')}
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Spacer pour équilibrer */}
        <div className="h-6 sm:h-8 lg:h-12 flex-shrink-0"></div>
      </div>
    </section>
  );
};

// Composant Comment ça marche
const HowItWorksLocal = ({ cityName }: { cityName: string }) => {
  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Un processus simple en 3 étapes pour redécouvrir votre voiture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center relative">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              📅
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Je réserve</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              En 3 clics, je choisis mon créneau à {cityName}
            </p>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🚐
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Nous venons</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Notre équipe arrive à l'heure avec tout le matériel
            </p>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              ✨
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">3. Je redécouvre</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Ma voiture retrouve son éclat d'origine
            </p>
          </div>
        </div>

        {/* Rappel déplacement offert */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-700 font-medium text-sm">
              Déplacement offert ≤ 25 km de Herve
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant Services populaires locaux
const ServicesLocal = ({ cityName }: { cityName: string }) => {
  const handleServiceBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  const services = [
    {
      name: "Intérieur « Fraîcheur »",
      price: "39",
      duration: "45 min",
      description: "Aspiration complète, plastiques, vitres intérieures, protection CarPro Perl.",
      features: [
        "Aspiration sièges & sols",
        "Plastiques + tableau de bord nettoyés",
        "Vitres intérieures sans traces",
        "Protection UV CarPro Perl",
        "Finition soignée des détails"
      ],
      pricing: {
        "Citadine": 39,
        "Berline": 44,
        "Break": 49,
        "SUV/4x4": 54,
        "Monospace": 59,
        "Utilitaire": 64
      },
      popular: false,
      idealFor: "Idéal pour garder un intérieur frais et net.",
      buttonText: "🚗 Réserver ce service"
    },
    {
      name: "Pack « Sérénité »",
      price: "79",
      duration: "90 min",
      description: "Intérieur + Extérieur complets, protection express 2 mois, produits premium.",
      features: [
        "Intérieur + extérieur complets",
        "Mousse active + rinçage haute pression",
        "ProtectorWax Koch-Chemie offert (protection 2 mois)",
        "Plastiques protégés CarPro Perl",
        "Finition showroom premium"
      ],
      pricing: {
        "Citadine": 79,
        "Berline": 89,
        "Break": 99,
        "SUV/4x4": 109,
        "Monospace": 119,
        "Utilitaire": 129
      },
      popular: true,
      idealFor: "Le plus complet, choisi par 9 clients sur 10.",
      buttonText: "🚗 Réserver ce service"
    },
    {
      name: "Extérieur « Brillance »",
      price: "49",
      duration: "45 min",
      description: "Mousse active, lavage main, vitres extérieures, seuils, ProtectorWax offerte.",
      features: [
        "Mousse active dégraissante",
        "Lavage manuel technique pro",
        "Vitres extérieures impeccables",
        "Seuils de porte nettoyés",
        "ProtectorWax Koch-Chemie offert"
      ],
      pricing: {
        "Citadine": 49,
        "Berline": 54,
        "Break": 59,
        "SUV/4x4": 64,
        "Monospace": 69,
        "Utilitaire": 74
      },
      popular: false,
      idealFor: "Une carrosserie éclatante, sans trace.",
      buttonText: "🚗 Réserver ce service"
    }
  ];

  const vehicleTypes = [
    { name: "Citadine", icon: "🚗" },
    { name: "Berline", icon: "🚙" },
    { name: "Break", icon: "🚗" },
    { name: "SUV/4x4", icon: "🚐" },
    { name: "Monospace", icon: "🚐" },
    { name: "Utilitaire", icon: "🚚" }
  ];

  return (
    <section id="services-section" className="w-full py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Services populaires à {cityName}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Nos prestations les plus demandées par les conducteurs {cityName.toLowerCase()}ois
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {services.map((service, index) => (
            <div key={index} className={`group relative ${service.popular ? 'lg:scale-105 lg:z-10' : ''}`}>
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>LE PLUS POPULAIRE</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Service card */}
              <div className={`
                bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full
                ${service.popular ? 'ring-2 ring-green-200 border-green-200' : ''}
              `}>
                <div className="h-full flex flex-col p-8">
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🚗</span>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight text-slate-900">
                      {service.name === "Intérieur « Fraîcheur »" ? (
                        <Link href="/nettoyage-interieur-voiture" className="hover:text-blue-600 transition-colors duration-200">
                          Intérieur Fraîcheur
                        </Link>
                      ) : service.name === "Pack « Sérénité »" ? (
                        <Link href="/nettoyage-complet-voiture" className="hover:text-blue-600 transition-colors duration-200">
                          Pack Sérénité
                        </Link>
                      ) : service.name === "Extérieur « Brillance »" ? (
                        <Link href="/nettoyage-exterieur-voiture" className="hover:text-blue-600 transition-colors duration-200">
                          Extérieur Brillance
                        </Link>
                      ) : service.name}
                    </h3>
                    
                    {/* Prix */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-sm text-slate-500 font-medium">À partir de</span>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-center">
                          <span className="text-4xl md:text-5xl font-black text-slate-900">
                            {service.price}€
                          </span>
                          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-slate-100 to-slate-200 px-4 py-2 rounded-full mt-2 shadow-sm">
                            <Clock className="w-4 h-4 text-slate-500" />
                            <span className="text-sm text-slate-600 font-semibold">
                              {service.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed font-medium flex-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Table */}
                  <div className="mb-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-2xl p-4 border border-slate-200/50 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-700 mb-3 text-center">📋 Tarifs selon véhicule</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {vehicleTypes.map((vehicle, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-white/80 rounded-lg px-2 py-2 border border-slate-100 min-h-[2.5rem]">
                          <span className="flex items-center gap-1 text-slate-600 min-w-0 flex-1">
                            <span className="flex-shrink-0">{vehicle.icon}</span>
                            <span className="font-medium truncate">{vehicle.name}</span>
                          </span>
                          <span className="font-bold text-slate-900 flex-shrink-0 ml-2">{service.pricing[vehicle.name as keyof typeof service.pricing]}€</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={handleServiceBooking}
                    className={`
                      w-full py-4 px-6 rounded-xl font-semibold text-white text-sm md:text-base
                      transition-all duration-300 shadow-lg hover:shadow-xl
                      ${service.popular 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-blue-600 hover:bg-blue-700'
                      }
                    `}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span>{service.buttonText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frais de déplacement */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
            <span className="text-blue-600">Transparence totale</span> sur nos frais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zone gratuite */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Zone gratuite</h4>
              </div>
              <p className="text-slate-700 mb-3">
                <span className="font-semibold text-green-600">Gratuit</span> dans un rayon de 25 km de Herve
              </p>
              <p className="text-sm text-slate-600">
                Déplacement inclus pour les communes proches
              </p>
            </div>

            {/* Zone payante */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">€</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">Au-delà de 25 km</h4>
              </div>
              <p className="text-slate-700 mb-3">
                <span className="font-semibold text-blue-600">0.60€/km</span> aller-retour
              </p>
              <p className="text-sm text-slate-600">
                Calculé via Google Maps depuis Herve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



// Composant Témoignages locaux avec carousel
const TestimonialsLocal = ({ cityData }: { cityData: any }) => {
  const [current, setCurrent] = useState(0);
  const testimonials = cityData.testimonials || [];

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  // Si pas de témoignages, ne pas afficher la section
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials-section" className="w-full py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Témoignages de conducteurs {(cityData.name || 'locaux').toLowerCase()}ois
          </h2>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <span className="text-slate-600 text-sm">{testimonials[current].date}</span>
            </div>
            
            <blockquote className="text-lg text-slate-700 mb-6 italic">
              "{testimonials[current].text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900">{testimonials[current].name}</p>
                <p className="text-sm text-slate-600">
                  {testimonials[current].vehicle} • {testimonials[current].neighborhood}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Indicateurs */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



// Composant Widget Calendly intégré
const CalendlyWidget = ({ cityName }: { cityName: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Charger le script Calendly de manière standard
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Réservez votre créneau à {cityName}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Choisissez votre date et heure idéales directement dans notre agenda
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-6 mb-8">
            <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full border border-green-200">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Réponse immédiate</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full border border-blue-200">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Confirmation en 2 min</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          {/* Widget Calendly - Méthode standard */}
          {isClient ? (
            <div 
              dangerouslySetInnerHTML={{
                __html: `
                  <div class="calendly-inline-widget" data-url="https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                `
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-[700px] bg-slate-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-600">Chargement du calendrier...</p>
              </div>
            </div>
          )}
        </div>


      </div>
    </section>
  );
};

// Composant FAQ spécifique ville
const FAQLocal = ({ cityName, faqs }: { cityName: string; faqs: any[] }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = faqs || [
    {
      question: "Que faire si je n'ai pas de prise extérieure ?",
      answer: "Pas de problème ! Nous disposons de rallonges professionnelles jusqu'à 50m. Seule une prise 230V accessible depuis votre logement est nécessaire."
    },
    {
      question: `Intervenez-vous en centre piéton de ${cityName} ?`,
      answer: `Oui, nous intervenons dans tout ${cityName}, y compris en centre-ville piéton. Nous nous adaptons aux contraintes de stationnement et d'accès.`
    },
    {
      question: "Combien de temps dure un valeting complet ?",
      answer: "Un nettoyage complet intérieur + extérieur dure entre 90 minutes et 2h30 selon l'état du véhicule et les options choisies."
    },
    {
      question: "Faut-il être présent pendant l'intervention ?",
      answer: "Votre présence n'est pas obligatoire. Il suffit de nous donner accès au véhicule et au point d'eau/électricité. Nous vous prévenons en début et fin d'intervention."
    },
    {
      question: "Que se passe-t-il en cas de pluie ?",
      answer: "En cas de pluie légère, l'intervention est maintenue (nous travaillons sous abri si possible). En cas de forte pluie, nous reportons automatiquement sans frais."
    }
  ];

  return (
    <section id="faq-section" className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Questions fréquentes à {cityName}
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-slate-600 transition-transform ${openFAQ === index ? 'rotate-90' : ''}`} />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant Section Parrainage
const ReferralSection = ({ cityName }: { cityName: string }) => {
  const handleShare = () => {
    const message = `🚗 J'ai découvert Shine&Go pour le nettoyage auto à domicile à ${cityName} ! Service top, je recommande 👌`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🎁</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Parrainez et gagnez !
            </h2>
            <p className="text-slate-600 text-lg">
              Invitez un ami de {cityName} et recevez chacun <strong>-10 € de réduction</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">1. Partagez</h4>
              <p className="text-sm text-slate-600">Invitez vos amis via WhatsApp</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">2. Il réserve</h4>
              <p className="text-sm text-slate-600">Votre ami prend RDV à {cityName}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">3. Vous gagnez</h4>
              <p className="text-sm text-slate-600">-10 € chacun sur votre prochain lavage</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-colors duration-200 flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Partager sur WhatsApp
          </button>

          <p className="text-xs text-slate-500 mt-4">
            * Offre valable pour toute première réservation. Réduction appliquée automatiquement.
          </p>
        </div>
      </div>
    </section>
  );
};

// Schéma FAQ pour SEO


// Template principal
export default function CityPageTemplateNew({ citySlug, cityName, csvData }: CityPageTemplateProps) {
  const cityData = getCityData(citySlug, cityName, csvData);
  
  // Utiliser les FAQ du CSV si disponibles, sinon générer avec spintax
  const faqs = cityData.faqs && cityData.faqs.length > 0 
    ? cityData.faqs 
    : (() => {
        const variedContent = generateVariedContent(cityName);
        return [
          {
            question: variedContent.faqQuestions[0],
            answer: variedContent.faqAnswers[0]
          },
          {
            question: variedContent.faqQuestions[1],
            answer: variedContent.faqAnswers[1]
          },
          {
            question: variedContent.faqQuestions[2],
            answer: variedContent.faqAnswers[2]
          },
          {
            question: variedContent.faqQuestions[3],
            answer: variedContent.faqAnswers[3]
          }
        ];
      })();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Header />
      

      
      {/* 1. Hero avec H1 + promesse (ATTENTION) */}
      <CityHero cityName={cityName} cityData={cityData} />
      
      {/* 2. Témoignages locaux (CONFIANCE) */}
      <TestimonialsLocal cityData={cityData} />
      {/* Particularités locales */}
      {(cityData as any).particulariteLocale && (
        <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Spécificités locales à {cityName}
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {(cityData as any).particulariteLocale || 'Informations locales spécifiques'}
                </p>
                {(cityData as any).contrainteLogistique && (
                  <p className="text-base text-slate-600 mt-4 leading-relaxed">
                    <strong>Note logistique :</strong> {(cityData as any).contrainteLogistique}
                  </p>
                )}
                {(cityData as any).accesRoutes && (
                  <p className="text-base text-slate-600 mt-2 leading-relaxed">
                    <strong>Accès :</strong> {(cityData as any).accesRoutes}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Zones d'intervention */}
      {((cityData as any).quartiers || (cityData as any).communesAlentours) && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Zones d'intervention à {cityName}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {(cityData as any).quartiers && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      Quartiers et sections
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {(cityData as any).quartiers}
                    </p>
                  </div>
                )}
                {(cityData as any).communesAlentours && (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      Communes alentours
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {(cityData as any).communesAlentours}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      
      
      
      {/* 3. Comment ça marche (INTÉRÊT) */}
      <HowItWorksLocal cityName={cityName} />
      
      {/* 4. Services populaires (DÉSIR) */}
      <ServicesLocal cityName={cityName} />
      

      

      
      {/* 7. Widget Calendly intégré (ACTION) */}
      <CalendlyWidget cityName={cityName} />
      
      {/* 8. FAQ spécifique ville (RASSURANCE) */}
      <FAQLocal cityName={cityName} faqs={faqs} />
      
      {/* 9. Section parrainage (POST-ACTION) */}
      <ReferralSection cityName={cityName} />
      
      <Footer />
    </div>
  );
}