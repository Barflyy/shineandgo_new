'use client';

import { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Fonction pour scroll doux vers un élément ou une position
    const smoothScrollTo = (target: string | HTMLElement | number, duration: number = 800) => {
      let targetPosition: number;
      
      if (typeof target === 'number') {
        // Si c'est un nombre, c'est une position directe
        targetPosition = target;
      } else {
        // Sinon, c'est un élément ou un sélecteur
        const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
        if (!targetElement) return;
        targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      }
      
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      
      requestAnimationFrame(animation);
    };
    
    // Fonction d'easing pour une animation fluide
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };
    
    // Intercepter les clics sur les liens d'ancrage
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          finalSmoothScrollTo(`#${targetId}`);
        }
      }
    };
    
    // Intercepter les clics sur les boutons avec data-scroll-to
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-scroll-to]') as HTMLElement;
      
      if (button) {
        e.preventDefault();
        const targetId = button.getAttribute('data-scroll-to');
        if (targetId) {
          finalSmoothScrollTo(`#${targetId}`);
        }
      }
    };
    
    // Ajouter les event listeners
    document.addEventListener('click', handleAnchorClick);
    document.addEventListener('click', handleButtonClick);
    
    // Optimisation du scroll restoration pour les navigateurs modernes
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Restaurer la position de scroll après navigation
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.pageYOffset.toString());
    };
    
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        const position = parseInt(savedPosition, 10);
        if (position > 0) {
          // Scroll doux vers la position sauvegardée
          setTimeout(() => {
            finalSmoothScrollTo(position, 600);
          }, 100);
        }
        sessionStorage.removeItem('scrollPosition');
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Restaurer la position après le chargement de la page
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', restoreScrollPosition);
    } else {
      restoreScrollPosition();
    }
    
    // Optimisation pour les appareils tactiles
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Créer une version optimisée pour les appareils tactiles
    const createTouchOptimizedScroll = (originalScroll: typeof smoothScrollTo) => {
      return (target: string | HTMLElement | number, duration: number = 400) => {
        originalScroll(target, Math.min(duration, 400));
      };
    };
    
    // Utiliser la version optimisée si c'est un appareil tactile
    const finalSmoothScrollTo = isTouchDevice ? createTouchOptimizedScroll(smoothScrollTo) : smoothScrollTo;
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('click', handleButtonClick);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  return <>{children}</>;
}

// Hook personnalisé pour le scroll doux
export function useSmoothScroll() {
  const scrollTo = (target: string | HTMLElement | number, duration: number = 800) => {
    let targetPosition: number;
    
    if (typeof target === 'number') {
      // Si c'est un nombre, c'est une position directe
      targetPosition = target;
    } else {
      // Sinon, c'est un élément ou un sélecteur
      const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
      if (!targetElement) return;
      targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    }
    
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
    
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };
    
    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    
    requestAnimationFrame(animation);
  };
  
  return { scrollTo };
} 