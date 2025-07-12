'use client';

import { useEffect } from 'react';

export default function CalendlyWidget() {
  useEffect(() => {
    // Charger le CSS Calendly
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      // Initialiser le widget badge une fois le script chargé
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1',
          text: 'Prendre un nettoyage',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Nettoyer les éléments lors du démontage du composant
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingLink) existingLink.remove();
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Prenez Rendez-vous
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Réservez votre créneau en quelques clics. Intervention garantie sous 24h.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 text-center">
            <p className="text-gray-300 text-base md:text-lg mb-6">
              Cliquez sur le badge ci-dessous pour planifier votre rendez-vous
            </p>
            {/* Le widget badge Calendly sera injecté ici automatiquement */}
          </div>
        </div>
      </div>
    </section>
  );
} 