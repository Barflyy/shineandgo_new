import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Nettoyer et Entretenir ses Sièges en Cuir : Guide Expert | Shine&Go`,
  description: `Le cuir demande un entretien spécifique. Apprenez à nettoyer, nourrir et protéger vos sièges auto en cuir pour éviter craquelures et décoloration.`,
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
        "headline": "Nettoyer et Entretenir ses Sièges en Cuir : Guide Expert",
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
        "datePublished": "2024-01-25",
        "image": "https://shineandgo.be/images/blog/nettoyer-siege-cuir-voiture.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "À quelle fréquence faut-il entretenir le cuir ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un nettoyage léger et un soin nourrissant tous les 3 à 6 mois sont idéaux."
            }
          }, {
            "@type": "Question",
            "name": "Peut-on utiliser de la crème Nivea ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non ! Ces crèmes bouchent les pores du cuir automobile et peuvent le faire pourrir ou devenir collant à la longue."
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
          { label: 'Nettoyer et Entretenir ses Sièges en Cuir ' }
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
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 25 Jan 2024</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min de lecture</span>
          </div>

          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-8 text-balance">
            Nettoyer et Entretenir ses Sièges en Cuir : Guide Expert
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Le cuir est une matière noble et vivante. Sans entretien, il sèche, se ternit et finit par craquer. Heureusement, avec les bons gestes, vous pouvez garder vos sièges comme neufs pendant des décennies."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vrai Cuir ou Simili ? Le Test</h2>
            <div dangerouslySetInnerHTML={{ __html: `Avant de commencer, vérifiez. Pressez le doigt sur le siège : le vrai cuir crée des ridules comme la peau, le simili reste lisse. Le vrai cuir absorbe aussi l'eau (test de la goutte), le simili est imperméable.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Les Ennemis de vos Sièges</h2>
            <div dangerouslySetInnerHTML={{ __html: `Le soleil (UV) qui décolore, les frottements (jeans) qui usent, et surtout la saleté qui agit comme un abrasif dans les pores du cuir. C'est pour cela qu'il faut nettoyer avant de nourrir.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Étape 1 : Le Nettoyage Doux</h2>
            <div dangerouslySetInnerHTML={{ __html: `Utilisez un nettoyant cuir spécialisé (jamais de produits ménagers !). Appliquez avec une brosse à poils de soie très douce en faisant des mouvements circulaires sans appuyer fort. Essuyez la crasse avec une microfibre propre. Vous serez surpris de la couleur de la microfibre !` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Étape 2 : La Nourriture (Hydratation)</h2>
            <div dangerouslySetInnerHTML={{ __html: `Une fois propre et sec, le cuir a besoin d'être nourri. Appliquez une lotion ou un lait cuir avec un tampon applicateur. Laissez pénétrer quelques minutes puis essuyez l'excédent (le 'buffing') pour un fini mat et non gras.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <p>Un siège en cuir bien entretenu ne doit pas briller (signe de gras/crasse), il doit être mat et souple au toucher.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                À quelle fréquence faut-il entretenir le cuir ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Un nettoyage léger et un soin nourrissant tous les 3 à 6 mois sont idéaux.
              </div>
            </details>
            

            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Peut-on utiliser de la crème Nivea ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Non ! Ces crèmes bouchent les pores du cuir automobile et peuvent le faire pourrir ou devenir collant à la longue.
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
          </div>

        </div>
      </article>
    </main>
  )
}
