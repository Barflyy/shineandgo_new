'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

// Import dynamique du Header pour éviter les problèmes de SSR
const Header = dynamic(() => import('./Header'), {
  ssr: false,
  loading: () => (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg border-b border-ui-border/70 pt-safe bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-18">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-shine-blue-dark">
            Shine&Go
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </header>
  ),
});

export default function HeaderWrapper() {
  const pathname = usePathname();
  
  // Déterminer si nous sommes sur une page spécifique
  const isNettoyageInterieurPage = pathname === '/nettoyage-interieur-voiture';
  const isNettoyageExterieurPage = pathname === '/nettoyage-exterieur-voiture';
  const isNettoyageCompletPage = pathname === '/nettoyage-complet-voiture';
  const isHomePage = pathname === '/';
  
  return <Header 
    isNettoyageInterieurPage={isNettoyageInterieurPage}
    isNettoyageExterieurPage={isNettoyageExterieurPage}
    isNettoyageCompletPage={isNettoyageCompletPage}
    isHomePage={isHomePage}
  />;
} 