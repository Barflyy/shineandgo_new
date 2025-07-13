"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { generateFAQStructuredData } from './structured-data';
import Breadcrumbs from '../components/Breadcrumbs';

const FAQItem = ({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-white/20 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
    >
      <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="pb-6">
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Générer les données structurées FAQ
  const faqStructuredData = generateFAQStructuredData();

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Combien coûte un nettoyage automobile complet ?",
      answer: "Le prix d'un nettoyage automobile complet varie entre 45€ et 85€ selon la taille du véhicule et les options choisies. Nos tarifs sont transparents et incluent tous les produits professionnels Koch Chemie, le traitement hydrophobe ProtectorWax et la protection plastiques CarPro Perl. Contactez-nous pour un devis personnalisé gratuit."
    },
    {
      question: "Combien de temps dure un nettoyage automobile ?",
      answer: "Un nettoyage automobile complet prend généralement entre 2h et 3h selon la taille du véhicule et son état. Notre équipe mobile se déplace chez vous et effectue un travail soigneux pour garantir un résultat showroom. Nous respectons vos horaires et vous pouvez vaquer à vos occupations pendant le nettoyage."
    },
    {
      question: "Quels produits utilisez-vous pour le nettoyage ?",
      answer: "Nous utilisons exclusivement des produits professionnels Koch Chemie, leader allemand du nettoyage automobile. Notre gamme inclut le ProtectorWax pour la protection hydrophobe, CarPro Perl pour les plastiques, et des nettoyants spécialisés pour chaque surface. Tous nos produits sont respectueux de l'environnement et de votre véhicule."
    },
    {
      question: "Proposez-vous une garantie sur vos services ?",
      answer: "Oui, nous offrons une garantie satisfaction totale sur tous nos services. Si vous n'êtes pas entièrement satisfait du résultat, nous effectuons une retouche gratuite. Notre objectif est votre satisfaction à 100%. Nous utilisons des produits de qualité et des techniques professionnelles pour garantir un résultat durable."
    },
    {
      question: "Dans quelles villes intervenez-vous ?",
      answer: "Nous intervenons dans toute la région de Liège, notamment Herve, Verviers, Dison, Spa, Huy, Aubel, Aywaille, Liège et leurs environs. Notre service mobile nous permet de nous déplacer dans un rayon de 25km autour de Herve. Contactez-nous pour vérifier la disponibilité dans votre commune."
    },
    {
      question: "Quels sont vos horaires d'intervention ?",
      answer: "Nous intervenons 7 jours sur 7, de 8h à 20h, pour s'adapter à vos horaires. Notre service mobile nous permet de nous déplacer chez vous à l'heure qui vous convient. Nous respectons vos contraintes et nous adaptons à votre planning."
    },
    {
      question: "Comment réserver un créneau de nettoyage ?",
      answer: "Vous pouvez réserver un créneau de plusieurs façons : par téléphone au 0472 30 37 01, par WhatsApp, ou via notre système de réservation en ligne. Nous vous proposons un devis gratuit et nous nous adaptons à vos disponibilités. La réservation se fait généralement 24h à l'avance."
    },
    {
      question: "Que comprend un nettoyage automobile complet ?",
      answer: "Un nettoyage complet comprend : nettoyage extérieur (carrosserie, vitres, jantes), nettoyage intérieur (tableau de bord, sièges, moquettes), traitement hydrophobe ProtectorWax, protection plastiques CarPro Perl, et finition showroom. Nous nous occupons de tous les détails pour un résultat exceptionnel."
    },
    {
      question: "Les produits utilisés sont-ils sans danger ?",
      answer: "Absolument. Tous nos produits Koch Chemie sont respectueux de l'environnement et sans danger pour votre véhicule. Ils sont testés et approuvés par les fabricants automobiles. Nous n'utilisons aucun produit agressif qui pourrait endommager la peinture ou les matériaux de votre voiture."
    },
    {
      question: "Proposez-vous des services pour les utilitaires ?",
      answer: "Oui, nous nettoyons tous types de véhicules : voitures particulières, utilitaires, fourgons, et même les véhicules de collection. Nos tarifs s'adaptent à la taille du véhicule. Nous avons l'expérience nécessaire pour traiter tous types de véhicules avec le même professionnalisme."
    }
  ];

  return (
    <div className="min-h-screen text-white bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      
      {/* Données structurées FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />

      {/* Header */}
      <header className="relative z-10 bg-slate-800/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                <span className="text-white font-bold text-xl">✨</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Shine&Go Premium</h1>
                <p className="text-gray-300 text-sm">Nettoyage Auto Professionnel</p>
              </div>
            </div>
            <a
              href="/"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <Breadcrumbs items={[{ label: 'FAQ' }]} />
            
            {/* Page Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
                <span className="text-blue-300 text-sm font-medium">FAQ</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Questions Fréquentes
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Trouvez rapidement les réponses à toutes vos questions sur nos services de nettoyage automobile premium.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12">
              <div className="space-y-0">
                {faqData.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems.includes(index)}
                    onToggle={() => toggleItem(index)}
                  />
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Prêt à redonner l'éclat à votre véhicule ?
                </h2>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                  Contactez-nous dès maintenant pour un devis personnalisé et profitez de nos services premium.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto"
                    className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 hover:scale-105 hover:border-emerald-400/50"
                  >
                    <span className="relative z-10">Devis gratuit WhatsApp</span>
                  </a>
                  <a
                    href="tel:+32472303701"
                    className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-400/30 hover:scale-105 hover:border-cyan-400/50"
                  >
                    <span className="relative z-10">Appeler maintenant</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-800/80 backdrop-blur-xl text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">© 2025 Shine&Go Premium - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
} 