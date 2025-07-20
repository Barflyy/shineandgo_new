'use client';

import { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, CheckCircle } from 'lucide-react';

const faqData = [
  {
    question: "Quels sont les prix pour un nettoyage voiture à domicile ?",
    answer: "Nos tarifs démarrent à 39€ pour un nettoyage intérieur (citadine), 49€ pour un lavage extérieur, et 79€ pour le service complet intérieur + extérieur. Tous nos prix incluent les produits professionnels Koch Chemie et CarPro, l'équipement mobile et le déplacement."
  },
  {
    question: "Combien de temps dure un lavage auto mobile ?",
    answer: "Un nettoyage intérieur ou extérieur seul prend 45 minutes. Le service complet (intérieur + extérieur) dure 90 minutes maximum. Notre équipe mobile arrive avec tout l'équipement professionnel pour un service rapide et efficace."
  },
  {
    question: "Quels produits utilisez-vous pour le nettoyage automobile ?",
    answer: "Nous utilisons exclusivement des produits professionnels haut de gamme : Koch Chemie pour le lavage extérieur et CarPro Perl pour la protection des plastiques. Ces produits garantissent une finition showroom et une protection longue durée de votre véhicule."
  },
  {
    question: "Dans quelles zones proposez-vous le service mobile ?",
    answer: "Notre service de nettoyage voiture mobile couvre toute la Wallonie avec plus de 60 communes desservies. Nous intervenons dans un rayon de 30km autour de notre base. Contactez-nous pour vérifier la disponibilité dans votre zone."
  },
  {
    question: "Comment réserver un lavage auto à domicile ?",
    answer: "Très simple ! Contactez-nous par téléphone au +32 472 30 37 01, WhatsApp, ou via notre formulaire en ligne. Nous confirmons votre créneau immédiatement avec intervention sous 72h maximum. Paiement après service par CB, espèces ou virement."
  },
  {
    question: "Y a-t-il une garantie sur le nettoyage voiture ?",
    answer: "Absolument ! Nous garantissons 100% de satisfaction sur tous nos services. Si le résultat ne vous convient pas, nous revenons gratuitement sous 48h pour parfaire le travail. C'est notre engagement qualité sur chaque nettoyage automobile."
  },

  {
    question: "Quelle différence avec un lavage voiture classique ?",
    answer: "Notre nettoyage automobile mobile utilise des produits professionnels, technique 2 seaux, protection hydrophobe et traitement plastiques. Plus complet qu'un lavage classique, nous obtenons une finition niveau showroom avec protection longue durée."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
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
            <span className="block">
              Questions fréquentes
            </span>
            <span className="block text-blue-600">
              lavage auto mobile
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tout savoir sur notre <span className="font-semibold text-slate-900">nettoyage voiture à domicile</span> et notre <span className="font-semibold text-slate-900">service mobile professionnel</span>
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
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                <span className="text-blue-600">
                  Nous contacter
                </span>
              </h3>
              
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