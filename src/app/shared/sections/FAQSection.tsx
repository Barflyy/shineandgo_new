'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "Quel est le tarif d'un nettoyage intérieur et extérieur voiture ?",
      answer: "Nos tarifs varient selon le type de véhicule : Citadine 79€, Berline 89€, Break 99€, SUV/4x4 109€, Monospace 119€, Utilitaire 129€. Tous nos tarifs incluent le nettoyage complet intérieur et extérieur avec produits professionnels."
    },
    {
      question: "Combien de temps dure un lavage complet voiture ?",
      answer: "La durée varie selon le type de véhicule et l'état de saleté : 60 minutes pour une citadine légèrement sale, jusqu'à 90 minutes pour un SUV très encrassé. Nous vous donnons une estimation précise lors du devis."
    },
    {
      question: "Intervenez-vous sur tous types de véhicules (SUV, utilitaires, 7 places) ?",
      answer: "Oui, nous intervenons sur tous types de véhicules : citadines, berlines, breaks, SUV, 4x4, monospaces, utilitaires et véhicules 7 places. Chaque véhicule est traité avec le même soin professionnel."
    },
    {
      question: "Quels produits utilisez-vous ?",
      answer: "Nous utilisons exclusivement des produits professionnels Koch-Chemie et CarPro, reconnus dans l'industrie automobile. Ces produits sont efficaces, respectueux des surfaces et offrent une protection durable."
    },
    {
      question: "Proposez-vous un lavage voiture à la main ou avec rouleaux ?",
      answer: "Nous réalisons un lavage voiture à la main avec des techniques professionnelles. Chaque surface est traitée individuellement pour un résultat optimal et pour préserver votre carrosserie des micro-rayures."
    },
    {
      question: "Intervenez-vous dans toute la Wallonie ?",
      answer: "Nous intervenons dans un rayon de 25 km autour de Herve. Le déplacement est gratuit dans cette zone. Au-delà, nous facturons 0,60€/km aller-retour."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq-section" className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            FAQ – Nettoyage complet voiture
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            Réponses aux questions les plus fréquentes sur notre service de nettoyage complet.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 relative z-10"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 pr-4">
                    {item.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${openItems.includes(index) ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div 
                  id={`faq-answer-${index}`}
                  className="bg-white border border-slate-200 rounded-b-xl p-6 mt-1 relative z-10"
                >
                  <p className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 