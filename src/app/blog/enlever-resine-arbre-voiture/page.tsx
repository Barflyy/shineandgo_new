import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Taches de Résine sur Voiture : Comment les Enlever Sans Abîmer la Peinture | Shine&Go`,
  description: `La résine de pin colle et durcit. Ne grattez surtout pas ! Voici comment la dissoudre en douceur pour sauver votre peinture.`,
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
        "headline": "Taches de Résine sur Voiture : Comment les Enlever Sans Abîmer la Peinture",
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
        "datePublished": "2026-01-05",
        "image": "https://shineandgo.be/images/blog/enlever-resine-arbre-voiture.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "L'alcool à brûler fonctionne-t-il ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui c'est efficace, mais attention aux vieux vernis ou aux plastiques qu'il peut blanchir. Rincez abondamment."
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
          { label: 'Taches de Résine sur Voiture ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="badge-category">Saisonnier</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 05 Avr 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Taches de Résine sur Voiture : Comment les Enlever Sans Abîmer la Peinture
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Vous vous êtes garé sous un pin pour l'ombre, et vous retrouvez votre capot constellé de gouttes de colle. La résine est acide et peut marquer le vernis à vie."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2>Ce qu'il ne faut JAMAIS faire</h2>
            <div dangerouslySetInnerHTML={{ __html: `Ne grattez pas avec l'ongle (risque de rayure). N'utilisez pas le côté vert de l'éponge (catastrophe assurée). N'attendez pas six mois (la résine va cuire).` }} />
          </section>
          

          <section className="mb-12">
            <h2>La Méthode Douce (Maison)</h2>
            <div dangerouslySetInnerHTML={{ __html: `L'eau très chaude aide à ramollir. L'huile alimentaire ou le beurre peuvent dissoudre la résine fraîche par action lipidique. Laissez poser, essuyez.` }} />
          </section>
          

          <section className="mb-12">
            <h2>La Méthode Radicale (Produits)</h2>
            <div dangerouslySetInnerHTML={{ __html: `Utilisez un dégoudronnant/dérésinant spécifique auto. Imbibez un coton, posez-le sur la goutte de résine 1 minute. La résine va fondre. Essuyez doucement.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <p>Après avoir enlevé la résine, pensez à remettre un peu de cire sur la zone car le produit aura tout enlevé.</p>
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                L'alcool à brûler fonctionne-t-il ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Oui c'est efficace, mais attention aux vieux vernis ou aux plastiques qu'il peut blanchir. Rincez abondamment.
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
