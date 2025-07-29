'use client';

import { Calendar, Truck, Sparkles, ArrowRight, Clock, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Réservez en 2 minutes",
      subtitle: "",
      description: "Contactez-nous par WhatsApp, téléphone ou formulaire. Nous fixons ensemble un créneau qui vous arrange.",
      features: [],
      gradient: "from-emerald-500 to-blue-600",
      bgGradient: "from-emerald-500/10 to-blue-500/5",
      iconBg: "from-emerald-500 to-blue-600",
      glowColor: "from-emerald-500 to-blue-600"
    },
    {
      number: "2",
      icon: Truck,
      title: "Nous arrivons chez vous",
      subtitle: "",
      description: "Le jour J, nous arrivons avec tout notre équipement. Nous avons juste besoin d'un accès à l'eau et l'électricité.",
      features: [],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-500/5",
      iconBg: "from-blue-500 to-purple-600",
      glowColor: "from-blue-500 to-purple-600"
    },
    {
      number: "3",
      icon: Sparkles,
      title: "Admirez le résultat",
      subtitle: "",
      description: "Votre voiture est comme neuve. Vous validez le travail, et procédez au paiement en toute sérénité.",
      features: [],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/5",
      iconBg: "from-purple-500 to-pink-600",
      glowColor: "from-purple-500 to-pink-600"
    }
  ];

  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-white">
      {/* Clean background like Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean header like Hero */}
        <div className="text-center mb-12 md:mb-20">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-slate-700">Processus simple</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>

          {/* Clean typography like Hero */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            Votre Lavage Auto à Domicile en 3 Étapes Simples
          </h2>
        </div>



        {/* Clean process steps like Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col relative z-10" style={{backgroundColor: 'white', opacity: 1}}>

                {/* Step icon and number */}
                <div className="flex items-center justify-center mb-6">
                    <div className="relative w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                </div>
                  
                  {/* Step title */}
                  <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Step subtitle */}
                  <p className="text-sm text-blue-600 text-center mb-4 font-semibold">
                    {step.subtitle}
                  </p>
                  
                  {/* Step description */}
                  <p className="text-slate-600 text-center leading-relaxed mb-6">
                    {step.description}
                    {step.number === "1" && (
                      <span className="block mt-2 font-bold text-green-600">
                        Créneau garanti sous 72 h
                      </span>
                    )}
                  </p>
                  
                  {/* Step features */}
                  <div className="space-y-3 flex-1">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 flex-1">{feature}</span>
                      </div>
                    ))}
                  </div>
            </div>
          ))}
        </div>

        {/* Clean CTA Section like Hero */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg">
              
              {/* CTA badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
                <Sparkles className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-slate-700">Prêt à commencer ?</span>
              </div>
              
              {/* CTA Title */}
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                <span className="text-blue-600">
                  Réservez votre créneau maintenant
                </span>
              </h3>
              
              {/* CTA Description */}
              <p className="text-slate-600 mb-8 text-lg">
                <span className="font-semibold text-slate-900">Service 5 étoiles</span>, résultat garanti 🚀
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={handleBooking}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
              >
                  <span>🚀 Réserver maintenant</span>
                  <ArrowRight className="w-5 h-5" />
              </button>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: CheckCircle, text: "Résultat garanti", color: "text-green-500" },
                  { icon: Clock, text: "Service rapide", color: "text-blue-500" },
                  { icon: Star, text: "5 étoiles", color: "text-yellow-500" }
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