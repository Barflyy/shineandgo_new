import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Nettoyage Sièges Voiture Pro : Tissu, Cuir, Alcantara | Shine&Go`,
  description: `Tache de café, auréoles d'eau, cuir terne ? Chaque matière demande une technique. Ne gâchez pas vos sièges avec de l'eau savonneuse.`,
  openGraph: {
    type: 'article',
    publishedTime: '2024-Mai-02', // Approx date conv
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Nettoyage Sièges Voiture Pro : Tissu, Cuir, Alcantara",
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
        "datePublished": "2024-04-15", // Generic date for schema or parse correctly
        "image": "https://shineandgo.be/images/blog/default-blog.jpg" // Placeholder if specific img not generated
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Combien de temps de séchage ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pour le tissu injecté-comprimé, comptez 2 à 4h de séchage (fenêtres ouvertes ou chauffage)."
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
          { label: 'Nettoyage Sièges Voiture Pro ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Service</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 02 Mai 2024</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min de lecture</span>
          </div>

          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-8 text-balance">
            Nettoyage Sièges Voiture Pro : Tissu, Cuir, Alcantara
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Les sièges sont la partie la plus sollicitée. Ils absorbent transpiration, renversement de liquides et poussières."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sièges Tissu : L'Injection-Extraction</h2>
            <div dangerouslySetInnerHTML={{ __html: `C'est la seule méthode valable. On injecte une solution nettoyante chaude dans la fibre et on l'aspire immédiatement. L'eau ressort noire : c'est la crasse de 5 ans qui part.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sièges Cuir : Douceur et Nutrition</h2>
            <div dangerouslySetInnerHTML={{ __html: `Le cuir se nettoie à la brosse douce, pas à l'eau. Il doit ensuite être nourri pour rester souple et ne pas craqueler.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Alcantara : Prudence</h2>
            <div dangerouslySetInnerHTML={{ __html: `L'Alcantara bouloche si on frotte trop. Il faut un nettoyant spécifique et une technique de tamponnage.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <div dangerouslySetInnerHTML={{ __html: `Vos sièges méritent mieux qu'une bombe mousse de supermarché.` }} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Combien de temps de séchage ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Pour le tissu injecté-comprimé, comptez 2 à 4h de séchage (fenêtres ouvertes ou chauffage).
              </div>
            </details>
            
          </div>

          {/* CTA FINAL */}
          <div className="mt-20 p-8 sm:p-12 bg-gray-900 rounded-3xl text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'un résultat professionnel ?</h2>
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
            
            {/* Maillage Interne Contextuel - Strategy Link */}
            <div className="mt-8 pt-8 border-t border-gray-700/50 text-sm text-gray-400">
                <p>
                    Besoin d'un service spécifique ? Découvrez notre <Link href="/nettoyage-interieur-voiture" className="text-blue-400 hover:text-blue-300">nettoyage intérieur</Link>, 
                    notre <Link href="/nettoyage-exterieur-voiture" className="text-blue-400 hover:text-blue-300">lavage extérieur</Link> 
                    ou consultez nos zones d'intervention à <Link href="/nettoyage-voiture-liege" className="text-blue-400 hover:text-blue-300">Liège</Link> et <Link href="/nettoyage-voiture-verviers" className="text-blue-400 hover:text-blue-300">Verviers</Link>.
                </p>
            </div>
          </div>

        </div>
      </article>
    </main>
  )
}
