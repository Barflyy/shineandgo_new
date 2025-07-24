'use client';

import { useState, useRef, useEffect } from 'react';

export default function HeroBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    updateSliderPositionTouch(e);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      updateSliderPositionTouch(e);
    }
  };

  const updateSliderPosition = (e: React.MouseEvent | MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const updateSliderPositionTouch = (e: React.TouchEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Fonctions pour bloquer les interactions indésirables
  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  const preventSelection = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isDragging) {
      // Bloquer le scroll et la sélection
      document.addEventListener('scroll', preventScroll, { passive: false });
      document.addEventListener('selectstart', preventSelection);
      document.addEventListener('dragstart', preventSelection);
      document.addEventListener('contextmenu', preventSelection);
      
      // Ajouter les événements de glissement
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
      
      // Ajouter des styles pour bloquer les interactions
      document.body.style.userSelect = 'none';
      document.body.style.pointerEvents = 'none';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restaurer les interactions
        document.removeEventListener('scroll', preventScroll);
        document.removeEventListener('selectstart', preventSelection);
        document.removeEventListener('dragstart', preventSelection);
        document.removeEventListener('contextmenu', preventSelection);
        
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
        
        // Restaurer les styles
        document.body.style.userSelect = '';
        document.body.style.pointerEvents = '';
        document.body.style.overflow = '';
      };
    }
  }, [isDragging]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 bg-slate-900">
      
      {/* Container principal avec événements */}
      <div 
        ref={containerRef}
        className="relative w-full h-full cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        style={{ 
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
      >
        
        {/* Avant - Voiture sale (côté gauche) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
                      <img 
              src="/transformations/berline-familiale-sale-avant-nettoyage-herve.jpeg" 
              alt="Lavage voiture professionnel à domicile en Wallonie, résultat showroom"
              className="w-full h-full object-cover"
            />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2">AVANT</h3>
            <p className="text-sm opacity-80">AVANT</p>
          </div>
        </div>
        
        {/* Après - Voiture propre (côté droit avec clip-path) */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-hidden"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
          }}
        >
          <img 
            src="/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg" 
            alt="Avant après lavage voiture à domicile Shine&Go, nettoyage intérieur et extérieur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2">APRÈS</h3>
            <p className="text-sm opacity-80">APRÈS</p>
          </div>
        </div>
        
        {/* Curseur de slider */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Bouton de slider */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl border-2 border-blue-500 flex items-center justify-center hover:scale-110 transition-transform">
            <div className="w-5 h-5 text-blue-500">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l2-2l2 2V5H8zm6 0v14l2-2l2 2V5h-4z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Labels AVANT/APRÈS */}
        <div className="absolute top-4 left-4">
          <div className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
            AVANT
          </div>
        </div>
        
        <div className="absolute top-4 right-4">
          <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
            APRÈS
          </div>
        </div>
        
        {/* Indicateur de glissement */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l2-2l2 2V5H8zm6 0v14l2-2l2 2V5h-4z"/>
            </svg>
            Glissez pour comparer
          </div>
        </div>
        
        {/* Overlay avec effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse pointer-events-none"></div>
      </div>
    </div>
  );
} 