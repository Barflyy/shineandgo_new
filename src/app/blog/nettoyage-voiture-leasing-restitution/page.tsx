import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Nettoyage Voiture Leasing : Évitez les Pénalités de Restitution | Shine&Go`,
  description: `Rendre un leasing peut coûter cher en frais de remise en état. Un nettoyage pro coûte 10x moins cher que la facture du loueur.`,
  openGraph: {
    type: 'article',
    publishedTime: '2026-Avr-25', // Approx date conv
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Nettoyage Voiture Leasing : Évitez les Pénalités de Restitution",
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
            "name": "Pouvez-vous effacer les rayures profondes ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non, si la peinture manque, il faut un carrossier. Mais nous pouvons effacer toutes les rayures de surface et les transferts de peinture."
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
        "name": "Shine&Go - Lavage voiture Leasing restitution",
        "description": "Service de nettoyage et detailing automobile à domicile à Leasing restitution.",
        "url": "https://shineandgo.be/nettoyage-voiture-leasing-restitution",
        "telephone": "+32472303701",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Leasing restitution",
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
                "name": "Leasing restitution",
                "item": "https://shineandgo.be/nettoyage-voiture-leasing-restitution"
            }]) }}
      />

      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' }, 
          { label: 'Nettoyage Voiture Leasing ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="badge-category">Leasing</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 25 Avr 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min de lecture</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Lavage et nettoyage de voiture professionnel à Blog</h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "L'expert du leasing ne vous ratera pas. La moindre tache sur un siège ou rayure superficielle sera facturée au prix fort du constructeur."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">
          
          {/* Sections dynamiques */}
          
          <section className="mb-12">
            <h2>Ce que regarde l'expert</h2>
            <div dangerouslySetInnerHTML={{ __html: `Il a une grille stricte : propreté des sièges, odeurs, rayures pare-chocs, état des jantes. Si c'est sale, il note 'à remplacer' ou 'nettoyage approfondi' facturé 300€.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Notre Pack Restitution</h2>
            <div dangerouslySetInnerHTML={{ __html: `Nous connaissons les critères de restitution ALD, Arval, KBC, etc. Nous remettons le véhicule dans l'état exact attendu pour que le PV de restitution soit vierge.` }} />
          </section>
          

          <section className="mb-12">
            <h2>Calcul Rentable</h2>
            <div dangerouslySetInnerHTML={{ __html: `Un forfait nettoyage à 150€ vs une facture de frais de dépréciation à 800€. Le calcul est vite fait.` }} />
          </section>
          

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
             <div dangerouslySetInnerHTML={{ __html: `Prenez rendez-vous 1 semaine avant la restitution pour rouler l'esprit tranquille.` }} />
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">
            
            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Pouvez-vous effacer les rayures profondes ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                Non, si la peinture manque, il faut un carrossier. Mais nous pouvons effacer toutes les rayures de surface et les transferts de peinture.
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
