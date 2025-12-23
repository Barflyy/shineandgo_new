import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Station de Lavage vs Lavage à la Main : Le Comparatif | Shine&Go`,
  description: `Rouleaux, Karcher ou lavage main ? Quel est le meilleur choix pour votre peinture et votre portefeuille ? Comparatif sans filtre.`,
  openGraph: {
    type: 'article',
    publishedTime: '2026-01-20',
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Station de Lavage vs Lavage à la Main : Le Comparatif",
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
        "datePublished": "2026-01-22",
        "image": "https://shineandgo.be/images/blog/lavage-auto-vs-lavage-main.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Le lavage sans eau est-il bon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pour une voiture peu sale (poussière), oui. Pour une voiture boueuse, c'est le carnage (rayures) assuré."
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
          { label: 'Station de Lavage vs Lavage à la Main ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="badge-category">Comparatif</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 22 Mar 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 9 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Station de Lavage vs Lavage à la Main : Le Comparatif
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "La facilité du tunnel de lavage est tentante. Mais à quel prix pour votre carrosserie ? Analysons les différentes options de lavage."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2>Les Rouleaux (Portique Automatique)</h2>
            <div dangerouslySetInnerHTML={{ __html: `Avantage : Rapide et pas fatiguant. Inconvénient majeur : Les micro-rayures. Les brosses, même 'douces', fouettent la carrosserie avec la saleté des voitures précédentes. À éviter si vous tenez à votre vernis.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Le Jet Haute Pression (Karcher)</h2>
            <div dangerouslySetInnerHTML={{ __html: `Avantage : Pas de contact, donc peu de rayures. Inconvénient : Ça ne lave pas vraiment. Ça enlève la boue, mais laisse le 'film routier' (la pellicule grise statique). En séchant, la voiture est toujours sale.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Le Lavage à la Main (Technique des 2 seaux)</h2>
            <div dangerouslySetInnerHTML={{ __html: `La seule vraie méthode qui lave à 100% sans rayer. Un gant microfibre, un shampoing lubrifiant, et une action mécanique douce. C'est plus long, mais le résultat est incomparable.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <p>Pour une voiture 'utilitaire', les rouleaux suffisent. Pour une belle voiture, le lavage main est impératif.</p>
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Le lavage sans eau est-il bon ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Pour une voiture peu sale (poussière), oui. Pour une voiture boueuse, c'est le carnage (rayures) assuré.
              </div>
            </details>
            
          </div>

          {/* CTA FINAL */}
          <div className="mt-20 p-8 sm:p-12 bg-gray-900 rounded-3xl text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2>Besoin d'un résultat professionnel ?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Nos experts Shine&Go interviennent partout en province de Liège. Évitez les efforts, on s'occupe de tout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#tarifs"
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-900/50"
                >
                  Voir nos tarifs
                </Link>
                <a
                  href="https://wa.me/32472303701"
                  className="px-8 py-4 bg-transparent border border-gray-500 text-white font-medium rounded-full hover:bg-white/10 transition-all"
                >
                  Devis WhatsApp 
                </a>
              </div>
            
          </div>
          
          </div></div></article>
    </main>
  )
}
