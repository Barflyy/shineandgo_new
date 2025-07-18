'use client';

import { useEffect, useState } from 'react';

interface CalendlyPopupProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export default function CalendlyPopup({ url, children, className = "" }: CalendlyPopupProps) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Charger Calendly si pas déjà chargé
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsCalendlyLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsCalendlyLoaded(true);
    }
  }, []);

  const handleCalendlyClick = () => {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <button 
      onClick={handleCalendlyClick}
      className={className}
      disabled={!isCalendlyLoaded}
    >
      {children}
    </button>
  );
} 