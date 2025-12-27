"use client";

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQHerveSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

          const faqItems: FAQItem[] = [
          {
            question: "Quel est le tarif d'un nettoyage voiture à domicile à Herve ?",
            answer: "Nos tarifs varient selon le type de véhicule et le service choisi. À partir de 39€ pour un nettoyage intérieur citadine, 49€ pour un nettoyage extérieur citadine, et 79€ pour le Pack Sérénité (intérieur + extérieur). Devis gratuit et personnalisé disponible pour Herve et alentours."
          },
          {
            question: "Puis-je choisir uniquement l'intérieur ou l'extérieur ?",
            answer: "Absolument ! Nous proposons 3 formules : nettoyage intérieur uniquement, nettoyage extérieur uniquement, ou nettoyage complet (intérieur + extérieur). Vous choisissez selon vos besoins et votre budget. Découvrez nos services : nettoyage intérieur, nettoyage extérieur, ou nettoyage complet."
          },
          {
            question: "Combien de temps dure l'intervention ?",
            answer: "La durée varie selon le service choisi et le type de véhicule. Un nettoyage extérieur prend 30-45 minutes, un nettoyage intérieur 45-60 minutes, et un nettoyage complet 60-90 minutes. Nous prenons le temps nécessaire pour un résultat optimal."
          },
          {
            question: "Quels produits utilisez-vous ?",
            answer: "Nous utilisons exclusivement des produits professionnels haut de gamme : Koch-Chemie, CarPro et P&S. Tous nos produits sont respectueux de l'environnement et de votre carrosserie, garantissant un résultat optimal et une protection durable."
          },
          {
            question: "Intervenez-vous aussi à Battice et Thimister-Clermont ?",
            answer: "Oui, nous intervenons dans toutes les communes autour de Herve : Battice, Thimister-Clermont, Charneux, Olne, Aubel, Soumagne et toute la région de Verviers à Liège. Le déplacement est gratuit dans un rayon de 25 km autour de Herve."
          },
          {
            question: "Pouvez-vous nettoyer des utilitaires et SUV 7 places ?",
            answer: "Oui, nous intervenons sur tous types de véhicules : citadines, berlines, breaks, SUV, 4x4, monospaces, utilitaires et véhicules 7 places. Nos tarifs s'adaptent au type de véhicule et nous avons l'équipement nécessaire pour tous les formats."
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
    <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            FAQ locale – Shine&Go Herve
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Questions fréquentes sur notre service de nettoyage voiture à domicile à Herve
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
                  <div className="text-slate-700 leading-relaxed" 
                    dangerouslySetInnerHTML={{ 
                      __html: item.answer.replace(
                        /nettoyage intérieur|nettoyage extérieur|nettoyage complet/g,
                        (match) => {
                          const links: Record<string, string> = {
                            'nettoyage intérieur': '/lavage-interieur-voiture',
                            'nettoyage extérieur': '/nettoyage-exterieur-voiture',
                            'nettoyage complet': '/nettoyage-complet-voiture'
                          };
                          return `<a href="${links[match] || '#'}" class="text-blue-600 hover:text-blue-800 underline font-medium">${match}</a>`;
                        }
                      )
                    }} 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 