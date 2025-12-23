import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Moisissure dans la Voiture : Nettoyage & Désinfection Pro | Shine&Go`,
  description: `Danger santé ! La moisissure dans l'habitacle est toxique. Il ne faut pas juste essuyer, il faut tuer les spores. Protocole d'urgence.`,
  openGraph: {
    type: 'article',
    publishedTime: '2026-Mai-12', // Approx date conv
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Moisissure dans la Voiture : Nettoyage & Désinfection Pro",
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
            "name": "Est-ce dangereux pour les enfants ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, très. Les spores de moisissure peuvent causer des allergies et crises d'asthme sévères."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([{
        "@context": "https://schema.org",
        "@type": "AutoWash",
        "name": "Shine&Go - Lavage voiture Moisissure",
        "description": "Service de nettoyage et detailing automobile à domicile à Moisissure.",
        "url": "https://shineandgo.be/nettoyage-voiture-moisissure",
        "telephone": "+32472303701",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Moisissure",
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
                "name": "Moisissure",
                "item": "https://shineandgo.be/nettoyage-voiture-moisissure"
            }]) }}
      />

      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' }, 
          { label: 'Moisissure dans la Voiture ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="badge-category">Santé</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 12 Mai 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 6 min de lecture</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Esthétique automobile et lavage à domicile à Blog</h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Une fenêtre mal fermée, une infiltration d'eau, et au bout de 2 semaines, c'est le drame : des points blancs/verts partout. Ne respirez pas ça !"
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2>Identifier la Cause</h2>
            <div dangerouslySetInnerHTML={{ __html: `Inutile de nettoyer si l'eau rentre toujours. Nous vérifions les joints et les évacuations d'eau avant de commencer.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Protocole Anti-Fongique</h2>
            <div dangerouslySetInnerHTML={{ __html: `Aspiration avec filtre HEPA (pour ne pas rejeter les spores dans l'air), nettoyage vapeur haute température pour tuer le champignon, et traitement chimique fongicide.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Séchage Express</h2>
            <div dangerouslySetInnerHTML={{ __html: `La voiture doit être séchée agressivement (chauffage pro) pour empêcher le retour immédiat de la moisissure.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <div dangerouslySetInnerHTML={{ __html: `C'est une urgence sanitaire. N'attendez pas.` }} />
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Est-ce dangereux pour les enfants ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Oui, très. Les spores de moisissure peuvent causer des allergies et crises d'asthme sévères.
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
