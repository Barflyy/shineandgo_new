import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
}

export function Card({ children, className, alt = false }: CardProps) {
  return (
    <div
      className={cn(
        // Base styling with enhanced glassmorphism
        'relative overflow-hidden rounded-3xl transition-all duration-300',
        // Enhanced glassmorphism background
        'bg-white/80 backdrop-blur-md',
        // Enhanced borders and shadows
        'border border-white/50 shadow-xl hover:shadow-2xl',
        // Ring effects for depth
        'ring-1 ring-white/30 hover:ring-white/50',
        // Enhanced hover effects
        'hover:bg-white/90 hover:scale-[1.02]',
        // Transform effects
        'hover:-translate-y-1',
        // Alternative styling
        alt && 'bg-gradient-to-br from-white/85 via-white/80 to-gray-50/70',
        className
      )}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8">
        {children}
      </div>
      
      {/* Subtle highlight on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
} 