import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Lavage Moteur Voiture : Est-ce Risqué ? | Shine&Go`,
  description: `Découvrez tout ce qu'il faut savoir sur lavage moteur voiture : est-ce risqué ?. Conseils d'experts Shine&Go.`,
  openGraph: {
    type: 'article',
    publishedTime: '2024-05-01',
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Lavage Moteur Voiture : Est-ce Risqué ?",
        "author": {
          "@type": "Organization",
          "name": "Shine & Go"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Shine & Go",
          "logo": {
            "@type": "ImageObject",
            "url": "https://shineandgo.be/logo.png"
          }
        },
        "datePublished": "2024-05-15",
        "image": "https://shineandgo.be/images/blog/default-blog.jpg"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Est-ce cher ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le prix dépend de l'état du véhicule, contactez-nous pour un devis."
            }
          }
        ]
      }
    ]
  }

  return (
    <main className="bg-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' }, 
          { label: 'Lavage Moteur Voiture ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        <header className="mb-12">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 font-medium">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Service</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 15 Juil 2024</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min de lecture</span>
          </div>

          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-8">
            Lavage Moteur Voiture : Est-ce Risqué ?
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-3xl mb-12">
            <p className="text-xl text-blue-900 italic font-medium leading-relaxed">
              "Le service de lavage moteur voiture : est-ce risqué ? est essentiel pour maintenir votre véhicule en bon état."
            </p>
          </div>
        </header>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="text-blue-600" /> Pourquoi est-ce important ?
            </h2>
            <p>Un entretien régulier prévient les dégradations irréversibles.</p>
          </section>
        
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="text-blue-600" /> Notre approche
            </h2>
            <p>Nous utilisons des techniques professionnelles adaptées à chaque cas.</p>
          </section>
        

          <div className="bg-gray-900 p-8 md:p-12 rounded-3xl text-white my-16">
            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
            <p className="text-gray-300 leading-relaxed">
               Faites confiance à des professionnels pour un résultat optimal.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">FAQ - Questions Fréquentes</h2>
          <div className="space-y-4">
            
            <details className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-blue-300 transition-colors">
              <summary className="font-bold text-gray-900 flex justify-between items-center list-none text-balance">
                Est-ce cher ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed border-t pt-4">
                Le prix dépend de l'état du véhicule, contactez-nous pour un devis.
              </div>
            </details>
        
          </div>

          <div className="mt-20 p-8 sm:p-16 bg-blue-600 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Besoin d'un résultat professionnel ?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Nos experts Shine&Go interviennent à domicile partout en province de Liège. Gagnez du temps et profitez d'un résultat showroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/#tarifs"
                  className="px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg text-lg"
                >
                  Voir nos tarifs
                </Link>
                <a
                  href="https://wa.me/32472303701"
                  className="px-10 py-5 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all text-lg flex items-center justify-center gap-2"
                >
                  Devis WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
