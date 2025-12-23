import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Prix Detailing Voiture en Belgique : Tarifs 2026 & Ce Qui Est Inclus | Shine&Go`,
  description: `Combien coûte un detailing auto ? Comparatif des prix en Belgique pour le nettoyage intérieur, le polissage et la protection céramique.`,
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
        "headline": "Prix Detailing Voiture en Belgique : Tarifs 2026 & Ce Qui Est Inclus",
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
        "datePublished": "2026-01-02",
        "image": "https://shineandgo.be/images/blog/detailing-voiture-prix-belgique.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Pourquoi un acompte est-il souvent demandé ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le detailing bloque le professionnel pour une longue durée (souvent la demi-journée). L'acompte sécurise le créneau."
            }
          }, {
            "@type": "Question",
            "name": "Y a-t-il des suppléments ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, pour les poils de animaux (très longs à enlever), la moisissure extrême, ou les véhicules très grands (SUV/Van)."
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
          { label: 'Prix Detailing Voiture en Belgique ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="badge-category">Guide Prix</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 02 Fev 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 10 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Prix Detailing Voiture en Belgique : Tarifs 2026 & Ce Qui Est Inclus
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "On voit des lavages à 15€ et des prestations à 1500€. Pourquoi un tel écart ? Décryptage des tarifs du detailing en Belgique pour ne plus vous faire avoir."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2>Qu'est-ce que vous payez vraiment ?</h2>
            <div dangerouslySetInnerHTML={{ __html: `Dans le detailing, vous payez du temps et de l'expertise. Un lavage rapide prend 30 min. Un detailing complet peut prendre 1 à 3 jours. Les produits utilisés (céramique, polish) coûtent aussi beaucoup plus cher que du savon basique.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Tarifs Moyens Constatés (2026)</h2>
            <div dangerouslySetInnerHTML={{ __html: `<ul><li><strong>Nettoyage Intérieur Approfondi :</strong> 80€ - 150€</li><li><strong>Lavage Extérieur Détaillé :</strong> 60€ - 100€</li><li><strong>Polissage (Correction rénovation) :</strong> 300€ - 800€</li><li><strong>Protection Céramique :</strong> 500€ - 1500€</li></ul>` }} />
          </section>
          

          <section className="mb-12">
            <h2>Domicile vs Centre Fixe</h2>
            <div dangerouslySetInnerHTML={{ __html: `Les detaillers à domicile (comme Shine&Go) ont moins de frais de structure, ce qui permet souvent des tarifs plus compétitifs pour une qualité équivalente, avec le confort en plus pour vous.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Attention aux tarifs trop bas</h2>
            <div dangerouslySetInnerHTML={{ __html: `Un 'complet' à 30€ cache souvent un travail bâclé, des rayures ajoutées par des éponges sales, et des produits agressifs. Le bon marché coûte cher sur le long terme.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <p>Investir dans un bon detailing à la vente de votre véhicule peut vous faire gagner 500€ à 1000€ sur le prix final.</p>
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Pourquoi un acompte est-il souvent demandé ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Le detailing bloque le professionnel pour une longue durée (souvent la demi-journée). L'acompte sécurise le créneau.
              </div>
            </details>
            

            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Y a-t-il des suppléments ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Oui, pour les poils de animaux (très longs à enlever), la moisissure extrême, ou les véhicules très grands (SUV/Van).
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
