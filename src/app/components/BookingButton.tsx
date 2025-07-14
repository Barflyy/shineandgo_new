"use client";

import React from 'react';
import { Sparkles, Gift } from 'lucide-react';

const BookingButton = () => {
  const handleBookingClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg mr-3">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-bold text-xl text-white">Prêt à briller ?</h3>
      </div>
      <div className="mb-6">
        <div className="inline-flex items-center bg-emerald-500/20 px-3 py-2 rounded-full border border-emerald-400/30 mb-3">
          <Gift className="w-4 h-4 mr-2 text-emerald-300" />
          <span className="text-emerald-200 text-sm font-medium">ProtectorWax + CarPro Perl offerts</span>
        </div>
        <p className="text-emerald-300 font-semibold text-sm">Valeur : 40 €</p>
      </div>
      <button 
        onClick={handleBookingClick}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 border-2 border-emerald-400/30 min-h-[44px] min-w-[44px]"
        aria-label="Réserver un nettoyage voiture à domicile"
      >
        ✨ Réserver un lavage voiture
      </button>
    </div>
  );
};

export default BookingButton; 