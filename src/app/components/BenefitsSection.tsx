'use client';

import { Shield, Sparkles, Clock, Star, Zap, Car, Award, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: "Produits premium",
    description: "Finition parfaite avec produits professionnels Koch-Chemie & CarPro",
    features: ["Produits premium", "Finition parfaite", "Garantie qualité"]
  },
  {
    icon: Clock,
    title: "Service Express",
    description: "Intervention 45–90 min selon la formule choisie",
    features: ["Gain de temps", "Planning flexible", "Service rapide"]
  },
  {
    icon: Shield,
    title: "Satisfaction Garantie",
    description: "100 % satisfait ou ré-intervention gratuite sous 48 h",
    features: ["100% satisfait", "Ré-intervention gratuite", "Confiance totale"]
  }
];

export default function BenefitsSection() {
  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full">
      {/* Clean background like Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Clean header like Hero */}
        <div className="text-center mb-12 md:mb-20">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-semibold text-slate-700">Nos avantages</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>
          
          {/* Clean typography like Hero */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            <span className="block">
              Pourquoi choisir notre
            </span>
            <span className="block text-blue-600">
              service de valeting mobile
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            <strong className="text-slate-900">Lavage voiture professionnel</strong> chez vous • <strong className="text-slate-900">Produits Koch-Chemie & CarPro</strong>
            <br />
            <strong className="text-blue-600">Finition showroom garantie</strong>
          </p>
        </div>

        {/* Clean service cards like Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 md:mb-16">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              {/* Simple badge */}
              <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-xl text-xs font-semibold mb-4">
                ⚡ POPULAIRE
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    Nettoyage Auto Complet
                  </h3>
                </div>
                
                <div className="space-y-3 text-slate-700 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-slate-900">Intérieur</strong> : aspiration, plastiques, vitres</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-slate-900">Extérieur</strong> : mousse active + rinçage haute pression</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-slate-900">Protection rapide</strong> : Koch-Chemie & CarPro</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 font-medium">À partir de</span>
                  <span className="text-2xl font-black text-green-600">79€</span>
                </div>
              </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              {/* Simple badge */}
              <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-xl text-xs font-semibold mb-4">
                🏆 PREMIUM
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    Service Mobile Expert
                  </h3>
                </div>
                
                <div className="space-y-3 text-slate-700 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-slate-900">Matériel pro embarqué</strong> : karcher, aspirateur, produits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-slate-900">Accès à l'eau + prise 230 V</strong> à prévoir</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong className="text-slate-900">Déplacement gratuit</strong> ≤ 25 km en Wallonie</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 font-medium">Service inclus</span>
                  <span className="text-lg font-black text-blue-600">GRATUIT</span>
                </div>
              </div>
          </div>
        </div>

        {/* Clean benefits grid like Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Simple icon container */}
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Feature list */}
                <div className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-semibold text-slate-700 text-left">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean CTA section like Hero */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg max-w-5xl mx-auto">
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Que vous souhaitiez un <strong className="text-slate-900">nettoyage ponctuel</strong> ou un entretien régulier, notre équipe se déplace rapidement partout en <strong className="text-blue-600">Wallonie</strong> pour redonner à votre véhicule son <strong className="text-slate-900">éclat showroom</strong>.
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={handleBooking}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-6 sm:mb-8 text-sm sm:text-base"
              >
                  <span>🚗 Réserver maintenant</span>
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {[
                  { icon: Award, text: "Produits Koch Chemie", color: "text-blue-500" },
                  { icon: Shield, text: "Garantie satisfaction", color: "text-green-500" },
                  { icon: Clock, text: "Service en 90 min", color: "text-purple-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white border border-slate-200 px-3 sm:px-4 py-2 rounded-xl shadow-lg">
                    <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
} 