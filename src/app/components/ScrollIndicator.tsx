'use client';

import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    // Handle keyboard navigation for scroll-snap
    const handleKeyDown = (e: KeyboardEvent) => {
      const sections = document.querySelectorAll('.snap-start');
      const currentSection = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSection < sections.length - 1) {
          sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        sections[0].scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        sections[sections.length - 1].scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Initial calculation
    updateScrollProgress();

    // Add scroll listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    // Add keyboard listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div 
      id="scroll-progress"
      className="fixed top-0 left-0 w-full h-0.5 bg-blue-600 z-50 origin-left"
      style={{ 
        transform: `scaleX(${scrollProgress})`,
        transformOrigin: 'left'
      }}
      aria-hidden="true"
    />
  );
} 