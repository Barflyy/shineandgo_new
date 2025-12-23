import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Poils de Chien dans la Voiture : Comment S'en Débarrasser Définitivement | Shine&Go`,
  description: `Votre chien laisse des souvenirs partout ? Voici les techniques des pros pour retirer les poils incrustés dans la moquette et les sièges.`,
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
        "headline": "Poils de Chien dans la Voiture : Comment S'en Débarrasser Définitivement",
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
        "datePublished": "2026-01-15",
        "image": "https://shineandgo.be/images/blog/nettoyer-voiture-poils-chien.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Existe-t-il des aspirateurs spéciaux ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les turbobrosses rotatives aident, mais rien ne vaut l'huile de coude et une brosse caoutchouc."
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
          { label: 'Poils de Chien dans la Voiture ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="badge-category">Tutoriel</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 15 Mar 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 6 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Poils de Chien dans la Voiture : Comment S'en Débarrasser Définitivement
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "On les adore, mais leurs poils qui se tissent dans la moquette du coffre sont un cauchemar à aspirer. Voici comment gagner la guerre contre les poils."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2>Pourquoi l'aspirateur ne suffit pas ?</h2>
            <div dangerouslySetInnerHTML={{ __html: `Les poils de chien (surtout courts type Jack Russell ou Dalmatien) ont des écailles qui s'accrochent aux fibres textiles comme du velcro. L'aspirateur tire dessus mais ne les décroche pas.` }} />
          </section>
          

          <section className="mb-12">
            <h2>L'Arme Secrète : L'Action Mécanique</h2>
            <div dangerouslySetInnerHTML={{ __html: `Il faut 'brosser' pour décrocher. Utilisez une brosse en caoutchouc (type brosse de vaisselle ou brosse spéciale animaux) ou une pierre ponce pour tissu. Le gant de vaisselle en latex fonctionne aussi très bien par frottement électrostatique.` }} />
          </section>
          

          <section className="mb-12">
            <h2>La Technique</h2>
            <div dangerouslySetInnerHTML={{ __html: `Brossez la zone pour regrouper les poils en 'boudins', puis aspirez ces boudins. Répétez l'opération. C'est physique, mais efficace.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <p>Pensez aux housses de protection pour la prochaine balade en forêt !</p>
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Existe-t-il des aspirateurs spéciaux ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Les turbobrosses rotatives aident, mais rien ne vaut l'huile de coude et une brosse caoutchouc.
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
