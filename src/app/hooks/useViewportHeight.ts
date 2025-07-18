import { useState, useEffect, useCallback } from 'react';

interface ViewportInfo {
  height: number;
  width: number;
  isPortrait: boolean;
  hasKeyboard: boolean;
  safeAreaTop: number;
  safeAreaBottom: number;
  safeAreaLeft: number;
  safeAreaRight: number;
  headerHeight: number;
  availableHeight: number;
}

export function useViewportHeight() {
  const [viewportInfo, setViewportInfo] = useState<ViewportInfo>({
    height: 0,
    width: 0,
    isPortrait: true,
    hasKeyboard: false,
    safeAreaTop: 0,
    safeAreaBottom: 0,
    safeAreaLeft: 0,
    safeAreaRight: 0,
    headerHeight: 0,
    availableHeight: 0,
  });

  const updateViewportInfo = useCallback(() => {
    // Détecter l'orientation
    const orientation = window.orientation;
    const isPortraitMode = orientation === 0 || orientation === 180;
    
    // Obtenir les dimensions du viewport
    const realHeight = window.innerHeight;
    const realWidth = window.innerWidth;
    const visualHeight = window.visualViewport?.height || realHeight;
    const visualWidth = window.visualViewport?.width || realWidth;
    
    // Détecter si le clavier virtuel est ouvert
    const hasKeyboard = visualHeight < realHeight;
    
    // Calculer les safe areas
    const safeAreaTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat') || '0');
    const safeAreaBottom = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sab') || '0');
    const safeAreaLeft = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sal') || '0');
    const safeAreaRight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sar') || '0');
    
    // Utiliser la plus petite hauteur pour éviter les problèmes avec les claviers virtuels
    const safeHeight = Math.min(realHeight, visualHeight);
    
    // Obtenir la hauteur du header depuis les variables CSS
    const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '56');
    
    // Ajouter la safe area top au header
    const totalHeaderHeight = headerHeight + safeAreaTop;
    
    // Calculer la hauteur disponible pour le Hero
    const availableHeight = safeHeight - totalHeaderHeight;
    
    setViewportInfo({
      height: safeHeight,
      width: Math.min(realWidth, visualWidth),
      isPortrait: isPortraitMode,
      hasKeyboard,
      safeAreaTop,
      safeAreaBottom,
      safeAreaLeft,
      safeAreaRight,
      headerHeight: totalHeaderHeight,
      availableHeight,
    });
  }, []);

  useEffect(() => {
    // Mise à jour initiale
    updateViewportInfo();

    // Écouter les changements de taille et d'orientation
    window.addEventListener('resize', updateViewportInfo);
    window.addEventListener('orientationchange', updateViewportInfo);
    
    // Écouter les changements du viewport visuel (claviers virtuels, etc.)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewportInfo);
      window.visualViewport.addEventListener('scroll', updateViewportInfo);
    }

    // Mise à jour périodique pour les cas edge
    const interval = setInterval(updateViewportInfo, 1000);

    return () => {
      window.removeEventListener('resize', updateViewportInfo);
      window.removeEventListener('orientationchange', updateViewportInfo);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateViewportInfo);
        window.visualViewport.removeEventListener('scroll', updateViewportInfo);
      }
      clearInterval(interval);
    };
  }, [updateViewportInfo]);

  // Fonction pour obtenir la hauteur CSS optimale
  const getOptimalHeight = useCallback(() => {
    const { height, hasKeyboard } = viewportInfo;
    
    if (hasKeyboard) {
      // Si le clavier est ouvert, utiliser la hauteur visuelle
      return `${height}px`;
    }
    
    // Sinon, utiliser les unités viewport modernes avec fallbacks
    return '100dvh';
  }, [viewportInfo]);

  // Fonction pour obtenir les styles CSS optimaux
  const getViewportStyles = useCallback(() => {
    const { availableHeight, safeAreaBottom, safeAreaLeft, safeAreaRight } = viewportInfo;
    
    return {
      height: `${availableHeight}px`,
      minHeight: `${availableHeight}px`,
      paddingBottom: safeAreaBottom > 0 ? `${safeAreaBottom}px` : undefined,
      paddingLeft: safeAreaLeft > 0 ? `${safeAreaLeft}px` : undefined,
      paddingRight: safeAreaRight > 0 ? `${safeAreaRight}px` : undefined,
    };
  }, [viewportInfo]);

  return {
    viewportInfo,
    getOptimalHeight,
    getViewportStyles,
    updateViewportInfo,
  };
} 