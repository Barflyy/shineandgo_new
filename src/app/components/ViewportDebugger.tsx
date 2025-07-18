'use client';

import { useViewportHeight } from '../hooks/useViewportHeight';
import { useRef } from 'react';

export default function ViewportDebugger() {
  const { viewportInfo } = useViewportHeight();
  
  // Calculer les styles dynamiques pour le debug
  const getDynamicStyles = () => {
    const { availableHeight, width } = viewportInfo;
    
    const optimalHeight = 600;
    const optimalWidth = 375;
    
    const heightFactor = Math.max(0.6, Math.min(1.4, availableHeight / optimalHeight));
    const widthFactor = Math.max(0.7, Math.min(1.3, width / optimalWidth));
    const factor = (heightFactor * 0.7) + (widthFactor * 0.3);
    
    const heightRatio = availableHeight / optimalHeight;
    const spacingMultiplier = heightRatio > 1.2 ? 1.5 : heightRatio < 0.8 ? 0.6 : 1.0;
    const spacing = Math.max(0.25, Math.min(1.8, 1.0 * factor * spacingMultiplier)); // Optimisé pour 3 lignes
    
    // Calcul des marges proportionnelles optimisées pour 3 lignes
    let marginRatio;
    if (heightRatio < 0.8) {
      marginRatio = Math.max(0.02, Math.min(0.06, 0.04 * heightRatio));
    } else if (heightRatio > 1.3) {
      marginRatio = Math.max(0.06, Math.min(0.15, 0.10 * heightRatio));
    } else {
      marginRatio = Math.max(0.04, Math.min(0.10, 0.07 * heightRatio));
    }
    
    const topBottomMargin = availableHeight * marginRatio;
    
    return {
      heightFactor: heightFactor.toFixed(2),
      widthFactor: widthFactor.toFixed(2),
      combinedFactor: factor.toFixed(2),
      heightRatio: heightRatio.toFixed(2),
      spacingMultiplier: spacingMultiplier.toFixed(2),
      spacing: `${spacing.toFixed(2)}rem`,
      marginRatio: marginRatio.toFixed(3),
      topBottomMargin: `${topBottomMargin.toFixed(0)}px`,
      titleSize: `${Math.max(1.1, Math.min(3.0, 1.8 * factor)).toFixed(2)}rem`, // Optimisé pour 3 lignes
    };
  };

  const dynamicStyles = getDynamicStyles();

  // Ne montrer que en mode développement
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-[9999] bg-black/80 text-white p-2 text-xs font-mono">
      <div>Width: {viewportInfo.width}px</div>
      <div>Total Height: {viewportInfo.height}px</div>
      <div>Header Height: {viewportInfo.headerHeight}px</div>
      <div>Available Height: {viewportInfo.availableHeight}px</div>
      <div>Orientation: {viewportInfo.isPortrait ? 'Portrait' : 'Landscape'}</div>
      <div>Keyboard: {viewportInfo.hasKeyboard ? 'Open' : 'Closed'}</div>
      <div>Safe Areas: {viewportInfo.safeAreaTop}/{viewportInfo.safeAreaBottom}/{viewportInfo.safeAreaLeft}/{viewportInfo.safeAreaRight}</div>
      <div className="border-t border-white/20 mt-1 pt-1">
        <div>Height Factor: {dynamicStyles.heightFactor}</div>
        <div>Width Factor: {dynamicStyles.widthFactor}</div>
        <div>Combined Factor: {dynamicStyles.combinedFactor}</div>
        <div>Height Ratio: {dynamicStyles.heightRatio}</div>
        <div>Spacing Multiplier: {dynamicStyles.spacingMultiplier}</div>
        <div>Spacing: {dynamicStyles.spacing}</div>
        <div>Margin Ratio: {dynamicStyles.marginRatio}</div>
        <div>Top/Bottom Margin: {dynamicStyles.topBottomMargin}</div>
        <div>Title Size: {dynamicStyles.titleSize}</div>
      </div>
    </div>
  );
} 