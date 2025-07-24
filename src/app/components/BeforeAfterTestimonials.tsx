'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Award, ArrowRight, Shield, Users, Sparkles, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function BeforeAfterTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Empêcher le scroll vertical pendant le glissement
  useEffect(() => {
    const preventScroll = (e: Event) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const preventSelection = (e: Event) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (isDragging) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('selectstart', preventSelection, { passive: false });
      document.addEventListener('dragstart', preventSelection, { passive: false });
      document.addEventListener('contextmenu', preventSelection, { passive: false });
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('selectstart', preventSelection);
      document.removeEventListener('dragstart', preventSelection);
      document.removeEventListener('contextmenu', preventSelection);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('selectstart', preventSelection);
      document.removeEventListener('dragstart', preventSelection);
      document.removeEventListener('contextmenu', preventSelection);
    };
  }, [isDragging]);

  const transformations = [
    {
      before: '/transformations/optimized/webp/berline-familiale-sale-avant-nettoyage-herve.webp',
      after: '/transformations/optimized/webp/berline-familiale-propre-apres-nettoyage-herve.webp',
      title: 'Berline familiale',
      location: 'Herve',
      description: 'Avant – nettoyage intérieur d\'une berline familiale à Herve',
      timeSpent: '90 min',
      gradient: 'from-blue-500 to-indigo-600',
      clientComment: "Résultat bluffant, même les grilles d'aération sont nickels !",
      clientName: "Marie D."
    },
    {
      before: '/transformations/optimized/webp/suv-premium-sale-avant-lavage-verviers.webp',
      after: '/transformations/optimized/webp/suv-premium-propre-apres-lavage-verviers.webp',
      title: 'SUV Premium',
      location: 'Verviers',
      description: 'Après – résultat showroom obtenu avec produits Koch-Chemie',
      timeSpent: '120 min',
      gradient: 'from-emerald-500 to-teal-600',
      clientComment: "Incroyable ! Ma voiture n'a jamais été aussi propre, même neuve !",
      clientName: "Pierre M."
    },
    {
      before: '/transformations/optimized/webp/voiture-sport-sale-avant-detailing-spa.webp',
      after: '/transformations/optimized/webp/voiture-sport-propre-apres-detailing-spa.webp',
      title: 'Voiture Sport',
      location: 'Spa',
      description: 'Finition detailing premium exclusive',
      timeSpent: '150 min',
      gradient: 'from-purple-500 to-pink-600',
      clientComment: "Travail exceptionnel ! Même les moindres détails sont parfaits.",
      clientName: "Sophie L."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Jonathan',
      location: 'Herve',
      rating: 5,
      text: 'Service exceptionnel ! Ma voiture n\'a jamais été aussi propre.',
      vehicle: 'Berline familiale',
      date: 'il y a 2 jours',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      name: 'Sophie',
      location: 'Verviers',
      rating: 5,
      text: 'Extérieur comme neuf, intérieur impeccable. Je recommande à 100 %.',
      vehicle: 'SUV Premium',
      date: 'il y a 1 semaine',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 3,
      name: 'Luc',
      location: 'Spa',
      rating: 5,
      text: 'Bluffé par l\'attention aux détails : même les joints sont nettoyés !',
      vehicle: 'Voiture sport',
      date: 'il y a 3 jours',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

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

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <section id="testimonials-section" className="relative py-16 md:py-24 bg-white">
      {/* Clean background like Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean header like Hero */}
        <div className="text-center mb-12 md:mb-20">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
            <Award className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-slate-700">Résultats garantis</span>
            <Sparkles className="w-4 h-4 text-blue-600" />
          </div>

          {/* Clean typography like Hero */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            <span className="block">
              Avant / Après
            </span>
            <span className="block text-blue-600">
              La Transformation
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez la différence avec notre service de valeting mobile professionnel : nettoyage intérieur et extérieur avec finition showroom.
          </p>
        </div>

        {/* Main Content Grid - Redesigned */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Clean Before/After Slider like Hero */}
          <div className="xl:col-span-3 group relative">
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">

              {/* Before/After Slider Container */}
              <div 
                ref={containerRef}
                className={`relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-100 cursor-ew-resize select-none ${isDragging ? 'touch-none' : ''}`}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={(e) => {
                  if (isDragging) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                {/* Image SALE (background) - AVANT */}
                <img
                  src={transformations[currentIndex].before}
                  alt="Avant après lavage voiture à domicile Shine&Go, nettoyage intérieur et extérieur"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Image PROPRE (foreground with clip) - APRÈS */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
                  }}
                >
                  <img
                    src={transformations[currentIndex].after}
                    alt="Avant après lavage voiture à domicile Shine&Go, nettoyage intérieur et extérieur"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                
                {/* Clean badge AVANT (SALE) */}
                <div className="absolute top-6 left-6">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    AVANT
                  </div>
                </div>

                {/* Clean badge APRÈS (PROPRE) */}
                <div className="absolute top-6 right-6">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    APRÈS
                  </div>
                </div>

                {/* Slider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Handle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl border-2 border-slate-300 cursor-ew-resize flex items-center justify-center hover:scale-110 transition-transform">
                    <div className="w-5 h-5 text-slate-400">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l2-2l2 2V5H8zm6 0v14l2-2l2 2V5h-4z"/>
                      </svg>
                    </div>
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

              </div>

            </div>

            {/* Clean dots */}
            <div className="flex justify-center gap-3 mt-6">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonials sidebar - Compact */}
          <div className="xl:col-span-2 flex flex-col">
            {/* Clean header testimonials */}
            <div className="text-center xl:text-left mb-6">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-4">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">Avis clients</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                <span className="text-blue-600">
                  Ils nous font confiance
                </span>
              </h3>
              <p className="text-slate-600 text-sm">
                Découvrez l'expérience de nos premiers clients
              </p>
            </div>

            {/* Clean testimonials cards */}
            <div className="space-y-4 flex-1">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">

                    {/* Content */}
                    <div>
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Testimonial text */}
                      <blockquote className="text-slate-700 text-sm leading-relaxed italic mb-3">
                        &quot;{testimonial.text}&quot;
                      </blockquote>

                      {/* Author info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                            <div className="text-xs text-slate-600">{testimonial.location}</div>
                          </div>
                        </div>
                        
                        <div className="text-xs text-slate-500">
                          Il y a {testimonial.date}
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Option viral Instagram */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-lg">
            {/* Badge viral */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                <span className="text-lg">📸</span>
                <span>Potentiel viral fort</span>
              </div>
            </div>
            
            {/* Contenu viral */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Partagez votre transformation sur Instagram
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                et bénéficiez de <strong className="text-green-600">5€ offerts</strong> sur votre prochaine prestation.
              </p>
              
              {/* Bouton viral */}
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <span>📸 Envoyer mes photos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <p className="text-xs text-slate-500 mt-3">
                * Offre valable pour tout client satisfait
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
} 