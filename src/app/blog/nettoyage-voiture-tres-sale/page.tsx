import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Voiture Très Sale ? Notre Nettoyage Extrême en Détail | Shine&Go`,
  description: `Boue, déchets, moisissures... Votre voiture est dans un état critique ? Pas de jugement, juste des solutions radicales.`,
  openGraph: {
    type: 'article',
    publishedTime: '2024-Avr-18', // Approx date conv
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Voiture Très Sale ? Notre Nettoyage Extrême en Détail",
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
            "name": "Prenez-vous un supplément ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, si l'état nécessite le double du temps prévu, un supplément 'voiture très sale' est appliqué sur devis."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
        "@context": "https://schema.org",
        "@type": "AutoWash",
        "name": "Shine&Go - Lavage voiture Tres sale",
        "description": "Service de nettoyage et detailing automobile à domicile à Tres sale.",
        "url": "https://shineandgo.be/nettoyage-voiture-tres-sale",
        "telephone": "+32472303701",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tres sale",
            "addressRegion": "Liège",
            "addressCountry": "BE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.6386",
            "longitude": "5.7942"
        },
        "provider": {
            "@type": "LocalBusiness",
            "name": "Shine&Go",
            "image": "/transformations/optimized/webp/apres01.webp"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        }
    },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Tres sale",
                "item": "https://shineandgo.be/nettoyage-voiture-tres-sale"
            }
        ]
    }
]) }}
      />

      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' }, 
          { label: 'Voiture Très Sale ? Notre Nettoyage Extrême en Détail' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Solutions</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 18 Avr 2024</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min de lecture</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Blog : Votre service mobile de lavage auto premium</h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Vie de famille, chantiers, animaux... Parfois, on se laisse déborder et la voiture devient un dépotoir. Nous avons l'habitude, et rien ne nous fait peur."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Le 'Disaster Detail' : Notre Spécialité</h2>
            <div dangerouslySetInnerHTML={{ __html: `Nous procédons par étapes : évacuation des déchets, démontage des sièges si nécessaire, aspiration gros débit, shampoing mousse active, et désinfection finale.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ne le faites pas vous-même</h2>
            <div dangerouslySetInnerHTML={{ __html: `Avec un aspirateur domestique et une éponge, vous allez juste étaler la crasse et boucher votre appareil. Il faut du matériel industriel pour les cas extrêmes.` }} />
          </section>
          

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pas de Honte</h2>
            <div dangerouslySetInnerHTML={{ __html: `Nos techniciens sont pros. Nous sommes là pour résoudre un problème, pas pour juger l'état de votre véhicule. Confidentialité assurée.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <div dangerouslySetInnerHTML={{ __html: `Offrez un nouveau départ à votre voiture (et à vous-même).` }} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Prenez-vous un supplément ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Oui, si l'état nécessite le double du temps prévu, un supplément 'voiture très sale' est appliqué sur devis.
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
