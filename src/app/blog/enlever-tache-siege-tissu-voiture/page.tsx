import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Enlever une Tache sur Siège Tissu : 7 Méthodes Selon le Type de Tache | Shine&Go`,
  description: `Café, gras, sang, vomi... Chaque tache a sa solution. Découvrez comment nettoyer vos sièges en tissu sans faire d'auréoles.`,
  openGraph: {
    type: 'article',
    publishedTime: '2024-01-20',
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Enlever une Tache sur Siège Tissu : 7 Méthodes Selon le Type de Tache",
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
        "datePublished": "2024-01-10",
        "image": "https://shineandgo.be/images/blog/enlever-tache-siege-tissu-voiture.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Peut-on utiliser un nettoyeur vapeur ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, la vapeur aide à dissoudre la tache, mais il faut essuyer immédiatement la saleté décollée avec une microfibre."
            }
          }, {
            "@type": "Question",
            "name": "Comment sécher rapidement ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Laissez les vitres entrouvertes, mettez le chauffage au sol si vous roulez, ou garez-vous au soleil. Un intérieur humide sentira le moisi."
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
          { label: 'Enlever une Tache sur Siège Tissu ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Tutoriel</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 10 Fev 2024</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 15 min de lecture</span>
          </div>

          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-8 text-balance">
            Enlever une Tache sur Siège Tissu : 7 Méthodes Selon le Type de Tache
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Une maladresse est vite arrivée. Pas de panique, la plupart des taches partent si on agit vite et avec le bon produit. Voici votre guide de survie."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">La Règle d'Or : Pas d'Auréoles</h2>
            <div dangerouslySetInnerHTML={{ __html: `Ne mouillez jamais uniquement la tache. Il faut toujours nettoyer la zone entière (toute l'assise par exemple) pour éviter qu'une auréole de propreté ne se forme au séchage.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Taches de Gras / Nourriture</h2>
            <div dangerouslySetInnerHTML={{ __html: `Saupoudrez de terre de Sommières ou de talc pour absorber le gras. Laissez agir 2h, aspirez. Terminez avec un mélange eau chaude + cristaux de soude.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Taches de Café / Boissons</h2>
            <div dangerouslySetInnerHTML={{ __html: `Épongez immédiatement le liquide. Utilisez du vinaigre blanc dilué de moitié. Tamponnez, ne frottez pas frénétiquement pour ne pas abîmer la fibre.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Taches de Vomi (Enfants/Animaux)</h2>
            <div dangerouslySetInnerHTML={{ __html: `Enlevez le gros. Utilisez de l'eau gazeuse pour décoller. Puis nettoyez avec un produit enzymatique (destructeur d'odeur) est impératif pour ne pas garder de souvenirs olfactifs.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <p>Si la tache persiste malgré tout, l'injection-extraction (shampouineuse pro) reste la solution ultime.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Peut-on utiliser un nettoyeur vapeur ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Oui, la vapeur aide à dissoudre la tache, mais il faut essuyer immédiatement la saleté décollée avec une microfibre.
              </div>
            </details>
            

            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Comment sécher rapidement ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Laissez les vitres entrouvertes, mettez le chauffage au sol si vous roulez, ou garez-vous au soleil. Un intérieur humide sentira le moisi.
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
                  href="/#devis"
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
          </div>

        </div>
      </article>
    </main>
  )
}
