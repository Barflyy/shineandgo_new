"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function ModernFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Combien de temps dure un nettoyage complet ?",
      answer: "Un service complet (intérieur + extérieur) prend environ 90 minutes. Le nettoyage intérieur seul prend 45 minutes, et l'extérieur environ 50 minutes. Nous ne préciptons jamais le travail pour garantir un résultat impeccable."
    },
    {
      question: "Quels produits utilisez-vous ?",
      answer: "Nous utilisons exclusivement des produits professionnels Koch-Chemie et CarPro, reconnus dans le monde du detailing. Ces produits sont sans danger pour votre véhicule, l'environnement et offrent des résultats durables."
    },
    {
      question: "Faut-il être présent pendant le service ?",
      answer: "Non, ce n'est pas nécessaire ! C'est tout l'avantage du service mobile. Vous pouvez vaquer à vos occupations pendant que nous nous occupons de votre véhicule. Nous faisons juste une inspection finale ensemble à la fin."
    },
    {
      question: "Quelle est votre zone d'intervention ?",
      answer: "Nous intervenons dans un rayon de 25km autour de Herve, couvrant Liège, Verviers, Battice, Soumagne et environs. Le déplacement est gratuit dans cette zone. Au-delà, un supplément peut s'appliquer."
    },
    {
      question: "Comment se passe le paiement ?",
      answer: "Nous acceptons le paiement en espèces, par carte bancaire ou virement. Le paiement se fait après le service, une fois que vous avez validé le résultat. C'est notre garantie de satisfaction !"
    },
    {
      question: "Que se passe-t-il s'il pleut ?",
      answer: "Pour le nettoyage extérieur, nous préférons reporter si la météo est défavorable. Pour l'intérieur, aucun problème ! Nous vous contactons toujours la veille pour confirmer ou reprogrammer si nécessaire."
    }
  ]

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Questions fréquentes</span>
          </div>
          
          <h2 className="text-fluid-4xl font-display font-bold text-dark-900 mb-6">
            Vous avez des questions ?
            <span className="block text-dark-600">Nous avons les réponses</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="group rounded-2xl border-2 border-dark-200 bg-white overflow-hidden transition-all duration-300 hover:border-brand-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors"
              >
                <span className="text-lg font-semibold text-dark-900 group-hover:text-brand-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 text-dark-600 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === idx 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-dark-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-dark-600 mb-6">Vous ne trouvez pas la réponse à votre question ?</p>
          <a
            href="https://wa.me/32472303701"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Contactez-nous sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

