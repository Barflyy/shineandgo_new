'use client';

import { MessageCircle, Phone, Users, Star, CheckCircle, Gift } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative -mt-8 md:-mt-12 overflow-hidden pb-16 md:pb-24">
      {/* Image de fallback en arrière-plan */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
      
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center', filter: 'blur(2px)' }}
        onError={(e) => {
          console.log('Erreur de chargement vidéo:', e);
        }}
        poster="/transformations/optimized/berline-familiale-propre-apres-nettoyage-herve.jpeg"
        aria-label="Gouttes d'eau qui perlent sur carrosserie traitée ProtectorWax"
        title="Détail automobile - Gouttes d'eau qui perlent sur carrosserie traitée ProtectorWax"
      >
        <source src="/videos/IMG_1114.MOV" type="video/mp4" />
        <source src="/videos/IMG_1114.MOV" type="video/quicktime" />
        <img src="/transformations/optimized/berline-familiale-propre-apres-nettoyage-herve.jpeg" alt="Gouttes d'eau qui perlent sur carrosserie traitée ProtectorWax" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Overlay pour assurer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black/65 z-10"></div>

      {/* Dégradé de transition en bas */}
      {/* (supprimé à la demande de l'utilisateur) */}

      <div className="container mx-auto px-4 text-center relative z-20 flex flex-col justify-center min-h-screen">
        <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white">
          Votre voiture showroom en 90 min,<br />
          sans lever le petit doigt !
        </h1>

        {/* Badge bonus */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-emerald-500/20 px-6 py-3 rounded-full border shadow-inner" style={{ borderColor: '#FFCC66' }}>
            <Gift className="w-5 h-5 md:w-6 md:h-6 mr-3" style={{ color: '#FFCC66' }} />
            <span className="text-base md:text-lg font-medium" style={{ color: '#FFCC66' }}>40 € de traitements PRO offerts : ProtectorWax (Koch-Chemie) + CarPro Perl</span>
          </div>
        </div>

        {/* Benefits list */}
        <div className="hidden md:flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <div className="flex items-center justify-center space-x-3 text-base md:text-lg text-gray-300">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0" />
            <span>100 % mobile</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-base md:text-lg text-gray-300">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0" />
            <span>90 min chrono</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-base md:text-lg text-gray-300">
            <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" />
            <span>5/5</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-base md:text-lg text-gray-300">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0" />
            <span>Pas de WOW ? Retouche gratuite</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                });
              }
            }}
            className="bg-green-500 hover:bg-green-600 px-10 md:px-12 py-5 md:py-6 rounded-xl font-bold text-xl md:text-2xl transition-all duration-300 flex items-center justify-center space-x-4 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
            <span>Oui, je veux ma voiture showroom !</span>
          </button>
        </div>

        {/* Texte de rareté */}
        <div className="text-center">
          <div className="inline-flex items-center bg-red-500/20 px-6 py-3 rounded-full border border-red-500/30">
            <span className="text-red-300 text-base md:text-lg font-medium">Service artisanal : 3 véhicules max/jour • Les créneaux visibles dans l'agenda sont les seuls disponibles.</span>
          </div>
        </div>
      </div>
    </section>
  );
} 