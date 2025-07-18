'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone, Clock } from 'lucide-react';

const faqs = [
  {
    question: "Quels sont les prix pour un nettoyage voiture à domicile ?",
    answer: "Nos forfaits commencent à 39 € (intérieur « Fraîcheur »), 49 € (extérieur « Brillance ») et 79 € (pack « Sérénité »). Les tarifs varient selon le type de véhicule (citadine, berline, SUV, utilitaire, etc.)."
  },
  {
    question: "Combien de temps dure une intervention ?",
    answer: "Entre 45 minutes et 90 minutes, selon le forfait choisi."
  },
  {
    question: "Quels produits utilisez-vous pour le nettoyage automobile ?",
    answer: "Uniquement des produits premium : gamme Koch-Chemie pour le lavage et la protection, CarPro Perl pour les plastiques et joints."
  },
  {
    question: "Dans quelles zones proposez-vous le service mobile ?",
    answer: "Déplacement gratuit dans un rayon de 25 km autour de Herve. Au-delà : 0,60 €/km aller-retour, calculé via Google Maps."
  },
  {
    question: "Comment réserver un lavage auto à domicile ?",
    answer: "Contactez-nous par WhatsApp, téléphone ou via le formulaire en ligne ; confirmation immédiate avec créneau sous 72 h."
  },
  {
    question: "Y a-t-il une garantie sur le nettoyage voiture ?",
    answer: "Oui : 100 % satisfait ou nouvelle intervention gratuite sous 48 h, voire remboursement si nécessaire."
  },
  {
    question: "Faut-il un point d'eau ou de l'électricité pour le service ?",
    answer: "Oui : prévoyez un robinet extérieur et une prise 230 V à moins de 25 m du véhicule. Nous fournissons tout le reste du matériel."
  },
  {
    question: "Quelle différence avec un lavage voiture classique ?",
    answer: "Pas de file d'attente ni de déplacement ; service personnalisé, produits haut de gamme, finition showroom directement chez vous."
  }
];

export default function FAQSection() {
  // Explicitly initialize to null to ensure no FAQ is open by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Ensure no FAQ is open by default
  const isOpen = (index: number) => {
    return openIndex === index;
  };

  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-faq-bg to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-faq-text">
            Questions fréquentes
          </h2>
          <p className="text-lg text-faq-text/70 max-w-2xl mx-auto">
            Tout savoir sur notre service de valeting mobile à domicile
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-ui-border shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface-light/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                aria-expanded={isOpen(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-faq-text pr-4">
                  {faq.question}
                </h3>
                {isOpen(index) ? (
                  <ChevronUp className="w-5 h-5 text-faq-text/60 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-faq-text/60 flex-shrink-0" />
                )}
              </button>
              
              {isOpen(index) && (
                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-300 ease-in-out max-h-96 opacity-100"
                >
                  <div className="px-6 pb-4">
                    <p className="text-faq-text/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-ui-border p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-faq-text mb-4">
              Une autre question ?
            </h3>
            <p className="text-faq-text/70 mb-6 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              Notre équipe vous répond 7 j/7 de 8 h à 20 h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleBooking}
                className="bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent px-7 py-4 rounded-xl font-semibold text-lg text-white shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Nous contacter
              </button>
              <a 
                href="tel:0472303701"
                className="bg-slate-100 hover:bg-slate-200 px-7 py-4 rounded-xl font-semibold text-lg text-slate-700 shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0472 30 37 01
              </a>
            </div>
            <p className="text-sm text-faq-text/60 mt-4">
              Support réactif, devis gratuit, service premium
            </p>
          </div>
        </div>

      </div>
    </section>
  );
} 