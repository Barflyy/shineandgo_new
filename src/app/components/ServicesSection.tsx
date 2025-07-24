'use client';

import { Check, Sparkles, Car, Shield, Star, ArrowRight, Award, Zap, Clock, CheckCircle, Brush } from 'lucide-react';
import Link from 'next/link';

const vehicleTypes = [
  { name: "Citadine", icon: "🚗" },
  { name: "Berline", icon: "🚙" },
  { name: "Break", icon: "🚗" },
  { name: "SUV/4x4", icon: "🚐" },
  { name: "Monospace", icon: "🚐" },
  { name: "Utilitaire", icon: "🚚" }
];

const services = [
  {
    name: "Intérieur « Fraîcheur »",
    price: "39",
    duration: "45 min",
    description: "Aspiration complète sièges & sols, nettoyage tableau de bord et plastiques, vitres intérieures sans traces, protection UV avec CarPro Perl.",
    features: [
      "Aspiration complète sièges & sols",
      "Nettoyage tableau de bord et plastiques",
      "Vitres intérieures sans traces",
      "Protection UV avec CarPro Perl"
    ],
    pricing: {
      "Citadine": 39,
      "Berline": 44,
      "Break": 49,
      "SUV/4x4": 54,
      "Monospace": 59,
      "Utilitaire": 64
    },
    icon: Brush,
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-500/5",
    iconBg: "from-blue-500 to-indigo-600",
    glowColor: "from-blue-500 to-indigo-600",
    checkColor: "bg-blue-100 text-blue-600",
    popular: false,
    idealFor: "Idéal pour garder un intérieur frais et net.",
    buttonText: "🚗 Réserver ce service"
  },
  {
    name: "Pack « Sérénité »",
    price: "79",
    duration: "90 min",
    description: "Lavage voiture intérieur & extérieur complet, mousse active & rinçage haute pression, protection 2 mois ProtectorWax Koch-Chemie, plastiques protégés CarPro Perl.",
    features: [
      "Lavage voiture intérieur & extérieur complet",
      "Mousse active & rinçage haute pression",
      "Protection 2 mois ProtectorWax Koch-Chemie",
      "Plastiques protégés CarPro Perl"
    ],
    pricing: {
      "Citadine": 79,
      "Berline": 89,
      "Break": 99,
      "SUV/4x4": 109,
      "Monospace": 119,
      "Utilitaire": 129
    },
    icon: Shield,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-500/5",
    iconBg: "from-purple-500 to-pink-600",
    glowColor: "from-purple-500 to-pink-600",
    checkColor: "bg-purple-100 text-purple-600",
    popular: true,
    idealFor: "Le plus complet, choisi par 9 clients sur 10.",
    buttonText: "🚗 Réserver ce service"
  },
  {
    name: "Extérieur « Brillance »",
    price: "49",
    duration: "45 min",
    description: "Mousse active dégraissante, lavage manuel technique professionnel, vitres extérieures & seuils de porte impeccables, ProtectorWax Koch-Chemie inclus.",
    features: [
      "Mousse active dégraissante",
      "Lavage manuel technique professionnel",
      "Vitres extérieures & seuils de porte impeccables",
      "ProtectorWax Koch-Chemie inclus"
    ],
    pricing: {
      "Citadine": 49,
      "Berline": 54,
      "Break": 59,
      "SUV/4x4": 64,
      "Monospace": 69,
      "Utilitaire": 74
    },
    icon: Car,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
    iconBg: "from-emerald-500 to-teal-600",
    glowColor: "from-emerald-500 to-teal-600",
    checkColor: "bg-emerald-100 text-emerald-600",
    popular: false,
    idealFor: "Une carrosserie éclatante, sans trace.",
    buttonText: "🚗 Réserver ce service"
  }
];

export default function ServicesSection() {
  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  const handleServiceBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-white">
      {/* Clean background like Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean header like Hero */}
        <div className="text-center mb-12 md:mb-20">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-slate-700">Nos services</span>
            <Zap className="w-4 h-4 text-blue-600" />
          </div>

          {/* Clean typography like Hero */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            Nos forfaits sur-mesure de lavage voiture
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            <span className="font-semibold text-slate-900">Tarifs adaptés</span> selon le type de votre véhicule
          </p>
        </div>

        {/* Services Grid 2025 - Modern redesign */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 min-w-0">
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

              {/* Clean service card like Hero */}
              <div className={`
                bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full
                ${service.popular ? 'ring-2 ring-green-200 border-green-200' : ''}
              `}>

                {/* Content */}
                <div className="h-full flex flex-col p-8">
                  
                  {/* Simple icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
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
                    
                    {/* Prix moderne avec "à partir de" */}
                    <div className="mb-4 min-w-0">
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-sm text-slate-500 font-medium">À partir de</span>
                      </div>
                      <div className="flex items-center justify-center gap-4 min-w-0">
                        <div className="text-center">
                          <span className="text-4xl md:text-5xl font-black text-slate-900 break-words hyphens-auto">
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

                  {/* Clean features list */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed font-medium flex-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Table par véhicule */}
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

                  {/* Clean CTA Button */}
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

        {/* Frais de déplacement Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
                <Car className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-slate-700">Frais de Déplacement</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
                <span className="text-blue-600">Transparence totale</span> sur nos frais
              </h3>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Zone gratuite */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Zone gratuite</h4>
                  </div>
                  <p className="text-slate-700 mb-3">
                    <span className="font-semibold text-green-600">Gratuit</span> dans un rayon de 25 km autour de Herve
                  </p>
                  <p className="text-sm text-slate-600">
                    Codes postaux : <span className="font-mono font-semibold">4650–4850</span>
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
                    Calculé via Google Maps depuis <span className="font-semibold">"Shine&Go, Herve"</span>
                  </p>
                </div>
              </div>

              {/* Note importante */}
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">i</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 font-medium">
                      <span className="font-semibold text-slate-900">Transparence garantie :</span> Le calcul des frais de déplacement se fera par message lors de la confirmation du rendez-vous (rendez-vous pris via Calendly au préalable).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean CTA Section like Hero */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 md:p-12 shadow-lg">
              {/* Simple badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
                <Award className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-slate-700">Qualité premium</span>
              </div>

              {/* CTA Title */}
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                <span className="text-blue-600">
                  Prêt pour votre nettoyage voiture à domicile ?
                </span>
              </h3>

              {/* CTA Description */}
              <p className="text-slate-600 mb-8 text-lg">
                Nettoyage voiture avec produits <span className="font-semibold text-slate-900">Koch Chemie</span> • <span className="font-semibold text-slate-900">CarPro Perl</span> • <span className="font-semibold text-blue-600">Résultat garanti</span>
              </p>

              {/* CTA Button */}
              <button 
                onClick={handleBooking}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
              >
                  <span>📞 Réserver maintenant</span>
                  <ArrowRight className="w-5 h-5" />
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Award, text: "Produits premium", color: "text-blue-500" },
                  { icon: Shield, text: "Protection garantie", color: "text-green-500" },
                  { icon: Star, text: "Service 5 étoiles", color: "text-yellow-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-lg">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
} 