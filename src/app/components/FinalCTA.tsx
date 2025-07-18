'use client';

import { Phone, Calendar, Star, Zap, CheckCircle, ArrowRight, Timer, Sparkles, Award, Shield, Users, Clock, Gift } from 'lucide-react';

export default function FinalCTA() {
  const handleBooking = () => {
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
        

        
        {/* Clean section d'urgence (optionnelle ou simplifiée) - supprimée pour plus d'épuré */}

        {/* Enhanced Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-xl">

              {/* Content */}
              <div className="text-center">
                
                {/* Badge d'urgence */}
                <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-xl px-4 py-2 mb-6">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-700">⚡ Disponibilités limitées cette semaine</span>
                </div>

                {/* Titre principal */}
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                  <span className="text-blue-600">Prêt pour votre voiture</span>
                  <br />
                  <span>comme neuve ?</span>
                </h2>

                {/* Sous-titre rassurant */}
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  <span className="font-semibold text-slate-900">Service mobile professionnel</span> • <span className="font-semibold text-blue-600">Résultat garanti</span> • <span className="font-semibold text-slate-900">Disponible dès aujourd'hui</span>
                </p>

                {/* Clean CTA Button - Plus grand et impactant */}
                <button 
                  onClick={handleBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-6 transform hover:scale-105"
                >
                    <Calendar className="w-6 h-6" />
                    <span>Réserver maintenant – résultat en 90 min</span>
                    <ArrowRight className="w-6 h-6" />
                </button>

                {/* Garantie fusionnée juste en dessous */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-xl px-6 py-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-green-700">✅ Garantie 100 % satisfaction : nouvelle intervention ou remboursement.</span>
                  </div>
                </div>

                {/* Avantages rapides */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {[
                    { icon: Star, text: "Service 5 étoiles", color: "text-yellow-500" },
                    { icon: Clock, text: "Intervention rapide", color: "text-blue-500" },
                    { icon: Shield, text: "Produits premium", color: "text-purple-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/80 border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Numéro de téléphone en micro-texte */}
                <div className="text-center">
                  <p className="text-sm text-slate-500">
                    📞 Besoin d'aide ? <span className="font-semibold">0472 30 37 01</span>
                  </p>
                </div>
              </div>
            </div>
        </div>



      </div>

    </section>
  );
} 