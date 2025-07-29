"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../components/ui/collapsible'
import { ChevronDown } from 'lucide-react'

export default function FAQCompletSection() {
  const faqs = [
    {
      question: "Quel est le tarif pour un lavage voiture complet à Verviers ?",
      answer: "Le tarif pour un nettoyage complet (intérieur + extérieur) varie selon le type de véhicule : Citadine à partir de 89 €, Berline à partir de 99 €, Break à partir de 104 €, SUV/4x4 à partir de 109 €, Monospace à partir de 114 €, et Utilitaire à partir de 129 €. Le prix final dépend de l'état de saleté du véhicule."
    },
    {
      question: "Puis-je réserver uniquement l'intérieur ou l'extérieur ?",
      answer: "Oui, absolument ! Nous proposons les trois options : nettoyage intérieur uniquement, nettoyage extérieur uniquement, ou nettoyage complet. Chaque prestation est tarifée séparément selon le type de véhicule et l'état de saleté."
    },
    {
      question: "Intervenez-vous aussi le week-end à Verviers ?",
      answer: "Oui, nous intervenons 7 jours sur 7, y compris les week-ends et jours fériés. Nous nous adaptons à vos disponibilités pour vous proposer un créneau qui vous convient, que ce soit à domicile ou sur votre lieu de travail."
    },
    {
      question: "Combien de temps dure le nettoyage ?",
      answer: "La durée varie selon le type de prestation et la taille du véhicule : nettoyage intérieur seul (45-60 min), nettoyage extérieur seul (45-60 min), ou nettoyage complet (75-90 min). Nous travaillons efficacement pour vous faire gagner du temps."
    },
    {
      question: "Proposez-vous le service pour SUV, utilitaires ou camionnettes ?",
      answer: "Oui, nous intervenons sur tous types de véhicules : citadines, berlines, breaks, SUV, 4x4, monospaces, utilitaires et camionnettes. Chaque type de véhicule a son tarif spécifique, et nous adaptons nos produits et techniques selon les surfaces."
    },
    {
      question: "Est-ce que vous vous déplacez à Ensival, Heusy et Stembert ?",
      answer: "Oui, nous intervenons dans tous les quartiers de Verviers (Ensival, Heusy, Stembert, Lambermont, Hodimont) ainsi que dans les communes voisines comme Pepinster, Dison, Theux, Limbourg, Dolhain et Chaineux. Déplacement gratuit dans un rayon de 25 km autour de Verviers."
    }
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            FAQ locale
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Réponses aux questions les plus fréquentes sur notre service de nettoyage voiture à domicile à Verviers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-20" style={{backgroundColor: 'white', opacity: 1}}>
                <CollapsibleTrigger className="flex w-full items-center justify-between p-6 text-left">
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-slate-500 transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              Vous avez d'autres questions ?
            </p>
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              📲 Contactez-nous directement
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 