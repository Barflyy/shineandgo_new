"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift } from 'lucide-react';

export default function BookingButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const handleBookingClick = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center bg-emerald-500/20 px-3 py-2 rounded-full border border-emerald-400/30 mb-3"
        >
          <Gift className="w-4 h-4 mr-2 text-emerald-300" />
                      <span className="text-emerald-200 text-sm font-medium">Produits Koch Chemie + CarPro offerts</span>
        </motion.div>
        <p className="text-emerald-300 font-semibold text-sm">Valeur : 40 €</p>
      </div>
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        onClick={handleBookingClick}
        className="w-full inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] min-w-[44px]"
        aria-label="Réserver un nettoyage voiture à domicile"
      >
        Réserver maintenant
      </motion.button>
    </div>
  );
}; 