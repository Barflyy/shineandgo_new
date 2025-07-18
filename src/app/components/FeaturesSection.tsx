'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Zap } from 'lucide-react';
import { useHydration } from '../hooks/useHydration';

interface FeaturesSectionProps {
  cityName: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ cityName }) => {
  const isHydrated = useHydration();

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Intervention rapide",
      description: `Sous 2h dans ${cityName} et environs`,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      delay: "0ms"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Produits professionnels",
      description: "Koch Chemie & équipements haut de gamme",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      delay: "100ms"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Service premium",
      description: "Satisfaction garantie 5/5 ⭐",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      delay: "200ms"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={isHydrated ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: isHydrated ? index * 0.1 : 0 }}
          viewport={{ once: true }}
          className={`group relative overflow-hidden bg-gradient-to-br ${feature.bgGradient} backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
        >
          {/* Background glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon with animated background */}
            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <div className="text-white">
                {feature.icon}
              </div>
            </div>
            
            {/* Text content */}
            <h4 className="text-white font-bold text-[clamp(1.25rem,1.1rem+1.3vw,1.375rem)] mb-2 group-hover:text-white transition-colors duration-300">
              {feature.title}
            </h4>
            <p className="text-white text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] leading-relaxed group-hover:text-white transition-colors duration-300">
              {feature.description}
            </p>
            
            {/* Hover effect line */}
            <div className={`w-0 h-0.5 bg-gradient-to-r ${feature.gradient} mt-3 group-hover:w-full transition-all duration-500`} />
          </div>
          
          {/* Corner accent */}
          <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-bl-2xl`} />
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesSection; 