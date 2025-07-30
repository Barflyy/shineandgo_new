'use client';

import { Star, Shield, Clock, MapPin, Users, Award, CheckCircle, Sparkles } from 'lucide-react';

export default function SocialProof() {
  const reasons = [
    {
      icon: MapPin,
      title: "Lavage voiture à domicile",
      description: "Sans déplacement, nous venons chez vous avec tout le matériel professionnel"
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description: "45 à 90 min selon la formule choisie pour un résultat impeccable"
    },
    {
      icon: Award,
      title: "Produits professionnels premium",
      description: "Koch-Chemie & CarPro pour une finition showroom garantie"
    },
    {
      icon: Shield,
      title: "Satisfaction garantie",
      description: "Paiement après prestation – 100 % satisfait ou retouche offerte"
    },
    {
      icon: Award,
      title: "Lavage voiture à la main sans micro-rayures",
      description: "Technique manuelle professionnelle pour préserver votre carrosserie"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white">
      {/* Clean background like Hero */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean header like Hero */}
        <div className="text-center mb-12 md:mb-20">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">Avantages exclusifs</span>
            <Award className="w-4 h-4 text-green-500" />
          </div>

          {/* Clean typography like Hero */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Le Car-Wash à Domicile, Sans les Contraintes
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            Choisir Shine&Go, c'est opter pour un lavage auto professionnel qui s'adapte à votre emploi du temps, pas l'inverse.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10" >
              
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-slate-700">4,9/5 sur Google</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-slate-700">30+ avis clients</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-slate-700">100% satisfaction</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
} 