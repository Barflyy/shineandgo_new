import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Lavage à Domicile vs Station de Lavage : Comparatif Honnête 2026 | Shine&Go`,
  description: `Faut-il choisir la facilité de la station ou la qualité du domicile ? Avantages et inconvénients des deux méthodes.`,
  openGraph: {
    type: 'article',
    publishedTime: '2026-Avr-22', // Approx date conv
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Lavage à Domicile vs Station de Lavage : Comparatif Honnête 2026",
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
            "name": "Est-ce plus cher à domicile ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "À l'unité oui, mais la durabilité est supérieure. Une voiture bien lavée à la main reste propre plus longtemps grâce aux cires de protection."
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
          { label: 'Lavage à Domicile vs Station de Lavage ' }
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
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 22 Avr 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 6 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Lavage à Domicile vs Station de Lavage : Comparatif Honnête 2026
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Le match : David contre Goliath. La station automatique contre l'artisan à domicile. Qui gagne ?"
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2>1. La Qualité du Résultat</h2>
            <div dangerouslySetInnerHTML={{ __html: `<strong>Station :</strong> Correct de loin, mais loin d'être parfait. Les jantes sont souvent mal faites, les insectes restent. <br><strong>Domicile :</strong> Zéro défaut. Le technicien vérifie chaque cm² à la main.` }} />
          </section>
          

          <section className="mb-12">
            <h2>2. Risques pour la Voiture</h2>
            <div dangerouslySetInnerHTML={{ __html: `<strong>Station :</strong> Les rouleaux rayent (micro-rayures tourbillons). Les brosses manuelles des stations sont pleines de sable des 4x4 précédents. <br><strong>Domicile :</strong> Microfibres propres, gants neufs, technique des 2 seaux. Risque nul.` }} />
          </section>
          

          <section className="mb-12">
            <h2>3. Écologie</h2>
            <div dangerouslySetInnerHTML={{ __html: `Contrairement aux idées reçues, le lavage pro à domicile (souvent sans eau ou vapeur) consomme 10x moins d'eau qu'une station haute pression mal utilisée.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <div dangerouslySetInnerHTML={{ __html: `La station, c'est le fast-food. Le domicile, c'est le restaurant gastronomique. À vous de choisir ce que votre voiture mérite aujourd'hui.` }} />
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Est-ce plus cher à domicile ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                À l'unité oui, mais la durabilité est supérieure. Une voiture bien lavée à la main reste propre plus longtemps grâce aux cires de protection.
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
