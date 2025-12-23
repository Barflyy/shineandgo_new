import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Lavage SUV et 4x4 : Pourquoi un Nettoyage Spécialisé ? | Shine&Go`,
  description: `Les SUV et 4x4 sont grands, hauts et souvent plus sales (boue). Ils nécessitent un équipement et de l'huile de coude supplémentaires.`,
  openGraph: {
    type: 'article',
    publishedTime: '2026-Mai-08', // Approx date conv
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Lavage SUV et 4x4 : Pourquoi un Nettoyage Spécialisé ?",
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
        "datePublished": "2026-04-15", // Generic date for schema or parse correctly
        "image": "https://shineandgo.be/images/blog/default-blog.jpg" // Placeholder if specific img not generated
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Faites-vous les utilitaires ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, camionnettes et vans sont les bienvenus."
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
          { label: 'Lavage SUV et 4x4 ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="badge-category">Type de Véhicule</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 08 Mai 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 4 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Lavage SUV et 4x4 : Pourquoi un Nettoyage Spécialisé ?
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Posséder un SUV ou un Pick-up, c'est la liberté. Mais au moment du lavage, c'est la corvée. Le toit est inaccessible, les passages de roues sont énormes."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2>Lavage Châssis et Passages de Roues</h2>
            <div dangerouslySetInnerHTML={{ __html: `Sur un 4x4, la boue s'accumule dans les arches de roues et le châssis. C'est là que la rouille commence. Nous insistons lourdement sur ces zones.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Le Toit en Hauteur</h2>
            <div dangerouslySetInnerHTML={{ __html: `Souvent oublié en station car inaccessible. Nous utilisons des estrades pour nettoyer et protéger le toit et les barres de toit.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Tarification Adaptée</h2>
            <div dangerouslySetInnerHTML={{ __html: `Oui, c'est un peu plus cher qu'une Smart, car il y a 30% de surface en plus et souvent plus de contamination routière.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <div dangerouslySetInnerHTML={{ __html: `Roulez propre, même en tout-terrain.` }} />
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Faites-vous les utilitaires ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Oui, camionnettes et vans sont les bienvenus.
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
            
            {/* Maillage Interne Contextuel - Strategy Link */}
            <div className="mt-8 pt-8 border-t border-gray-700/50 text-sm text-gray-400">
                <p>
                    Besoin d'un service spécifique ? Découvrez notre <Link href="/nettoyage-interieur-voiture" className="text-blue-400 hover:text-blue-300">nettoyage intérieur</Link>, 
                    notre <Link href="/nettoyage-exterieur-voiture" className="text-blue-400 hover:text-blue-300">lavage extérieur</Link> 
                    ou consultez nos zones d'intervention à <Link href="/nettoyage-voiture-liege" className="text-blue-400 hover:text-blue-300">Liège</Link> et <Link href="/nettoyage-voiture-verviers" className="text-blue-400 hover:text-blue-300">Verviers</Link>.
                </p>
            </div>
          

        
      
          
      
          </div>
          
          </div></article>
    </main>
  )
}
