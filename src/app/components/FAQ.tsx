'use client';

import { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const faqData = [
  {
    question: "Quels sont les prix pour un lavage voiture à domicile ?",
    answer: (
      <>
        À partir de 39€ pour le <Link href="/nettoyage-interieur-voiture" className="text-blue-600 hover:text-blue-700 font-medium">nettoyage intérieur</Link>, 
        49€ pour le <Link href="/nettoyage-exterieur-voiture" className="text-blue-600 hover:text-blue-700 font-medium">nettoyage extérieur</Link>, 
        79€ pour le <Link href="/nettoyage-complet-voiture" className="text-blue-600 hover:text-blue-700 font-medium">nettoyage complet</Link>.
      </>
    )
  },
  {
    question: "Combien de temps dure un lavage voiture mobile ?",
    answer: "Entre 45 et 90 min selon la formule choisie."
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer: "Produits professionnels premium Koch Chemie et CarPro."
  },
  {
    question: "Dans quelles zones proposez-vous le service ?",
    answer: "Toute la Wallonie, déplacement gratuit ≤ 25 km à partir de Herve."
  },
  {
    question: "Y a-t-il une garantie sur le lavage voiture ?",
    answer: "Oui, résultat garanti ou ré-intervention gratuite."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <section id="faq-section" className="relative py-16 md:py-24 bg-white">
      {/* Clean background like Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean header like Hero */}
        <div className="text-center mb-12 md:mb-20">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">Questions fréquentes</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>
          
          {/* Clean typography like Hero */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            Questions fréquentes – lavage voiture à domicile
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tout savoir sur notre <span className="font-semibold text-slate-900">lavage voiture à domicile</span> et notre <span className="font-semibold text-slate-900">service mobile professionnel</span>
          </p>
        </div>

        {/* Clean FAQ Items like Hero */}
        <div className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 rounded-xl transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 text-lg pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <ChevronDown 
                    className={`w-4 h-4 text-white transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-slate-200 mb-4"></div>
                  <p className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clean CTA Section like Hero */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg">
              
              {/* Simple badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-lg mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">Une autre question ?</span>
              </div>
              
              {/* CTA Title */}
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                <span className="text-blue-600">
                  Votre voiture mérite le meilleur lavage auto
                </span>
              </h2>
              
              {/* CTA Description */}
              <p className="text-slate-600 mb-8 text-lg">
                Notre équipe est là pour répondre à toutes vos questions sur le <span className="font-semibold text-slate-900">nettoyage voiture</span> et nos services de <span className="font-semibold text-slate-900">car wash à domicile</span>.
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={handleBooking}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
              >
                <span>💬 Nous contacter</span>
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: HelpCircle, text: "Support réactif", color: "text-blue-500" },
                  { icon: CheckCircle, text: "Devis gratuit", color: "text-green-500" },
                  { icon: Sparkles, text: "Service premium", color: "text-yellow-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-lg">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 