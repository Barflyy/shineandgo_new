'use client';

import { useEffect } from 'react';

export default function CriticalCSS() {
  useEffect(() => {
    // Injection des CSS critiques pour éviter le blocage de rendu
    const criticalCSS = `
      /* CSS critique pour le rendu initial */
      body {
        font-family: var(--font-inter), Inter, system-ui, sans-serif;
        background-color: #ffffff;
        color: #1E293B;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .font-inter {
        font-family: var(--font-inter), Inter, system-ui, sans-serif;
      }
      
      .font-display {
        font-family: var(--font-display), 'Space Grotesk', Inter, system-ui, sans-serif;
      }
      
      /* Styles critiques pour le hero */
      .text-hero-title {
        font-size: clamp(1.75rem, 1rem + 2vw, 3rem);
        line-height: 1.1;
        letter-spacing: -0.02em;
        font-weight: 700;
        color: #1E293B;
      }
      
      .text-hero-subtitle {
        font-size: clamp(1rem, 0.75rem + 0.8vw, 1.5rem);
        line-height: 1.4;
        color: #475569;
      }
      
      /* Container critique */
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      @media (min-width: 640px) {
        .container {
          padding: 0 1.5rem;
        }
      }
      
      @media (min-width: 768px) {
        .container {
          padding: 0 2rem;
        }
      }
      
      @media (min-width: 1024px) {
        .container {
          padding: 0 2.5rem;
        }
      }
      
      /* Optimisations de performance */
      .will-change-transform {
        will-change: transform;
      }
      
      .touch-optimized {
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
      }
      
      /* Styles pour éviter le layout shift */
      .min-h-svh {
        min-height: 100svh;
      }
      
      /* Optimisations pour les images */
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
    `;

    // Créer et injecter le style critique
    const style = document.createElement('style');
    style.id = 'critical-css';
    style.textContent = criticalCSS;
    
    // Insérer dans le head pour priorité maximale
    const head = document.head;
    const firstChild = head.firstChild;
    head.insertBefore(style, firstChild);

    // Nettoyer lors du démontage
    return () => {
      const existingStyle = document.getElementById('critical-css');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return null;
} 