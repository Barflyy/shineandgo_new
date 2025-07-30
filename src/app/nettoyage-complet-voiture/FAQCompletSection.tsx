"use client";

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQCompletSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "Quel est le tarif d'un nettoyage intérieur et extérieur voiture ?",
      answer: "Nos tarifs varient selon le type de véhicule et l'état de saleté. À partir de 79€ pour une citadine, 89€ pour une berline, 99€ pour un break, 109€ pour un SUV/4x4, 119€ pour un monospace et 129€ pour un utilitaire. Devis gratuit et personnalisé disponible."
    },
    {
      question: "Combien de temps dure un lavage complet voiture ?",
      answer: "La durée varie selon le type de véhicule et l'état de saleté. En général, une intervention complète prend entre 60 et 90 minutes. Nous prenons le temps nécessaire pour un résultat showroom garanti."
    },
    {
      question: "Intervenez-vous sur tous types de véhicules (SUV, utilitaires, 7 places) ?",
      answer: "Oui, nous intervenons sur tous types de véhicules : citadines, berlines, breaks, SUV, 4x4, monospaces, utilitaires et véhicules 7 places. Nos tarifs s'adaptent au type de véhicule."
    },
    {
      question: "Quels produits utilisez-vous ?",
      answer: "Nous utilisons exclusivement des produits professionnels haut de gamme Koch-Chemie pour garantir un résultat optimal et protéger votre véhicule. Tous nos produits sont respectueux de l'environnement et de votre carrosserie."
    },
    {
      question: "Proposez-vous un lavage voiture à la main ou avec rouleaux ?",
      answer: "Nous utilisons exclusivement un lavage à la main pour préserver votre carrosserie et garantir un résultat optimal. Aucun rouleau ou machine automatique n'est utilisé, uniquement des techniques manuelles professionnelles."
    },
    {
      question: "Intervenez-vous dans toute la Wallonie ?",
      answer: "Oui, nous intervenons dans toute la Wallonie avec un déplacement gratuit jusqu'à 25 km. Au-delà, un supplément peut s'appliquer selon la distance. Contactez-nous pour vérifier la disponibilité dans votre zone."
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
    <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            FAQ – Nettoyage complet voiture
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Questions fréquentes sur notre service de nettoyage complet voiture à domicile
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20"
                
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {item.question}
                  </h3>
                  <span className="text-slate-400 text-2xl font-light">
                    {openItems.includes(index) ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div 
                  id={`faq-answer-${index}`}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 mt-2 shadow-lg relative z-20"
                  
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