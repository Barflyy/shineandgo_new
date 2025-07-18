import { useState, useEffect } from 'react';

export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Marquer comme hydraté après un court délai
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return isHydrated;
} 