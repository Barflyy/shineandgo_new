'use client';

import { Star, CheckCircle, Calendar, Phone } from 'lucide-react';

export default function Hero() {
  const handleBooking = () => {
    console.log('🔍 DEBUG: handleBooking appelé');
    try {
      // Ouvrir directement dans un nouvel onglet
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
      console.log('🔍 DEBUG: Calendly ouvert dans nouvel onglet');
    } catch (error) {
      console.error('❌ DEBUG: Erreur ouverture Calendly:', error);
    }
  };

  const handlePhone = () => {
    console.log('🔍 DEBUG: handlePhone appelé');
    try {
      window.location.href = 'tel:+32472303701';
      console.log('🔍 DEBUG: Appel téléphonique lancé');
    } catch (error) {
      console.error('❌ DEBUG: Erreur appel téléphonique:', error);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white w-full">
      {/* Background épuré simple */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      {/* Container principal avec système de centrage universel */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen w-full max-w-none px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Spacer pour le header */}
        <div className="h-14 sm:h-16 md:h-20 flex-shrink-0"></div>
        
        {/* Contenu centré */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              
              {/* Titre principal épuré */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-slate-900">
                  <span className="block">Nettoyage voiture</span>
                  <span className="block text-blue-600">& lavage auto</span>
                  <span className="block">à domicile dès 39€</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Valeting mobile premium – produits Koch-Chemie & CarPro
                  <br className="hidden sm:block" />
                  Résultat showroom garanti • Matériel complet fourni
                </p>
              </div>

              {/* Garanties épurées */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-5xl mx-auto flex-wrap">
                <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium">Garantie 100% satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                  <span className="font-medium">Déplacement gratuit ≤ 25 km</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                  <span className="font-medium">Point d'eau + prise 230V</span>
                </div>
              </div>

              {/* CTAs épurés */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 w-full max-w-lg mx-auto">
                
                {/* CTA Principal */}
                <button 
                  onClick={handleBooking}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate">Réserver maintenant</span>
                </button>
                
                {/* CTA Secondaire */}
                <button 
                  onClick={handlePhone}
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-slate-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span className="truncate">+32 472 30 37 01</span>
                </button>
              </div>
              

            </div>
          </div>
        </div>
        
        {/* Spacer pour équilibrer */}
        <div className="h-6 sm:h-8 lg:h-12 flex-shrink-0"></div>
      </div>

    </section>
  );
} 