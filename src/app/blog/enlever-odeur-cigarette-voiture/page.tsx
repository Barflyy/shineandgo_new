import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Comment Enlever l'Odeur de Cigarette dans une Voiture ? (Méthodes Pro) | Shine&Go`,
  description: `L'odeur de tabac dans une voiture est tenace. Découvrez nos méthodes professionnelles (ozone, nettoyage profond) pour éliminer définitivement l'odeur de cigarette.`,
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
        "headline": "Comment Enlever l'Odeur de Cigarette dans une Voiture ? (Méthodes Pro)",
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
        "datePublished": "2024-01-20",
        "image": "https://shineandgo.be/images/blog/enlever-odeur-cigarette-voiture.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Combien de temps dure un traitement à l'ozone ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le cycle machine dure environ 45min, mais il faut ensuite aérer le véhicule pendant 1h. Comptez une demi-journée pour la prestation complète (nettoyage + ozone)."
            }
          }, {
            "@type": "Question",
            "name": "L'odeur revient-elle après ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non, si le nettoyage a été fait correctement avant l'ozone, l'odeur est détruite définitivement. Sauf si vous recommencez à fumer dedans bien sûr !"
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
          { label: 'Comment Enlever l'Odeur de Cigarette dans une Voiture ? (Méthodes Pro)' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Problème</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 20 Jan 2024</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min de lecture</span>
          </div>

          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-8 text-balance">
            Comment Enlever l'Odeur de Cigarette dans une Voiture ? (Méthodes Pro)
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Rien de pire que d'acheter une voiture d'occasion qui sent le cendrier froid, ou de vouloir vendre la sienne avec cette odeur persistante. L'odeur de cigarette ne se cache pas, elle s'incruste. Voici comment s'en débarrasser pour de bon."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi l'odeur de tabac est si tenace ?</h2>
            <div dangerouslySetInnerHTML={{ __html: `La fumée de cigarette contient des milliers de particules microscopiques qui pénètrent partout : dans les tissus des sièges, la moquette, le ciel de toit (c'est souvent lui le coupable !), et même dans les conduits d'aération. Masquer l'odeur avec un 'sapin magique' ne fait que créer un mélange écœurant.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Méthode 1 : Le Grand Nettoyage (Indispensable)</h2>
            <div dangerouslySetInnerHTML={{ __html: `Avant tout traitement, il faut éliminer la source. Cela signifie vider TOUS les cendriers, nettoyer toutes les surfaces plastiques avec un APC (nettoyant tout usage) pour enlever le film de nicotine jaune/gras, et shampouiner les tissus. N'oubliez pas de nettoyer les vitres intérieures, souvent couvertes d'un film gras de fumée.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Méthode 2 : Le Traitement à l'Ozone (La Solution Pro)</h2>
            <div dangerouslySetInnerHTML={{ __html: `C'est l'arme fatale. Un générateur d'ozone est placé dans la voiture fermée pendant 30 à 60 minutes. L'ozone (O3) va oxyder les molécules responsables des odeurs et tuer les bactéries. C'est la seule méthode qui atteint les conduits d'aération et les fibres profondes. Chez Shine&Go, nous combinons toujours nettoyage manuel + ozone pour un résultat 100% garanti.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Méthode 3 : Les Solutions Maison (Efficacité Limitée)</h2>
            <div dangerouslySetInnerHTML={{ __html: `Le vinaigre blanc ou le café moulu peuvent absorber une partie des odeurs légères, mais ils ne viendront pas à bout d'une voiture de fumeur régulier. C'est souvent une perte de temps pour des odeurs incrustées depuis des années.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <p>Ne laissez pas une mauvaise odeur gâcher votre plaisir de conduire ou faire chuter le prix de revente de votre auto.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Combien de temps dure un traitement à l'ozone ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Le cycle machine dure environ 45min, mais il faut ensuite aérer le véhicule pendant 1h. Comptez une demi-journée pour la prestation complète (nettoyage + ozone).
              </div>
            </details>
            

            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                L'odeur revient-elle après ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Non, si le nettoyage a été fait correctement avant l'ozone, l'odeur est détruite définitivement. Sauf si vous recommencez à fumer dedans bien sûr !
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
