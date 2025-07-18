'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Car, Users, Sparkles, Zap, Truck, Clock, Shield, Award, Heart, MapPin, TrendingUp } from 'lucide-react';


export default function SocialProof() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full">
      {/* Clean, minimal background like Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Clean header like Hero */}
        <div className="text-center mb-12 md:mb-20">
          {/* Simple social proof badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-semibold text-slate-700">🚀 Service rapide</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>

          {/* Clean typography like Hero */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            <span className="block">
              30+ interventions
            </span>
            <span className="block text-blue-600">
              réalisées avec succès
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            <strong className="text-slate-900">Lavage auto mobile</strong> • <strong className="text-blue-600">Résultat garanti</strong>
          </p>
        </div>

        {/* Clean statistics grid like Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16 lg:mb-20">
          {[
            { 
              icon: Star, 
              value: 4.9, 
              suffix: '/5', 
              label: 'Premiers avis Google', 
              sublabel: 'Note moyenne',
              color: 'text-yellow-500',
              isDecimal: true
            },
            { 
              icon: Users, 
              value: 100, 
              suffix: '%', 
              label: 'Clients satisfaits', 
              sublabel: 'Taux de satisfaction',
              color: 'text-green-500',
              isDecimal: false
            },
            { 
              icon: Car, 
              value: 30, 
              suffix: '+', 
              label: 'Nettoyages réalisés', 
              sublabel: 'Lavage auto mobile',
              color: 'text-blue-600',
              isDecimal: false
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                
                <div className="text-center">
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 ${stat.color}`} />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-2">
                    {stat.isDecimal ? stat.value.toFixed(1) : stat.value}
                    <span className="text-lg sm:text-xl font-bold text-slate-600">{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sublabel}</div>
                </div>
            </div>
          ))}
        </div>

        {/* Clean recognition section like Hero */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 lg:p-12 shadow-lg">
            
            <div className="text-center">
              {/* Recognition badge */}
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold mb-6 shadow-lg">
                <Award className="w-4 h-4" />
                <span>Excellence reconnue</span>
              </div>
              
              {/* Achievement metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-500 mb-2">100%</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700">Clients satisfaits</div>
                  <div className="text-xs text-slate-500">Taux de satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-2">90</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700">Durée max d'un service</div>
                  <div className="text-xs text-slate-500">Temps de service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-500 mb-2">25</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700">Zone de déplacement gratuit</div>
                  <div className="text-xs text-slate-500">km autour de Herve</div>
                </div>
              </div>
              
              {/* Achievement description */}
              <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Notre jeune entreprise mise sur des produits premium et un service client exemplaire pour devenir la référence du valeting mobile en Wallonie.
              </p>
            </div>
            </div>
        </div>

        {/* Clean trust indicators like Hero */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
          {[
            { icon: Shield, text: "Garantie 100% satisfaction", color: "text-green-500" },
            { icon: Award, text: "Qualité premium – Koch-Chemie & CarPro", color: "text-blue-600" }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl px-3 sm:px-4 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2">
                  <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
} 