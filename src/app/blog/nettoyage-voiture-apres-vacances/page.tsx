import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Lavage Voiture Retour de Vacances (Sable, Sel, Insectes) | Shine&Go`,
  description: `Sable de plage, sel marin ou moustiques écrasés ? Nos conseils pour nettoyer votre voiture après un long voyage.`,
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-01',
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Lavage Voiture Retour de Vacances (Sable, Sel, Insectes)",
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
        "datePublished": "2026-05-15",
        "image": "https://shineandgo.be/images/blog/default-blog.jpg"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Le sel est-il dangereux ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, il favorise la rouille, un rinçage du châssis est indispensable."
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
        "name": "Shine&Go - Lavage voiture Apres vacances",
        "description": "Service de nettoyage et detailing automobile à domicile à Apres vacances.",
        "url": "https://shineandgo.be/lavage-voiture-apres-vacances",
        "telephone": "+32472303701",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Apres vacances",
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
                "name": "Apres vacances",
                "item": "https://shineandgo.be/lavage-voiture-apres-vacances"
            }]) }}
      />

      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' }, 
          { label: 'Retour de Vacances' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        <header className="mb-12">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 font-medium">
            <span className="badge-category">Besoin</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 24 Juin 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 6 min de lecture</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Esthétique automobile et lavage à domicile à Blog</h1>

          <div className="quote-box">
            <p className="quote-text">
              "Les vacances laissent des souvenirs, mais aussi beaucoup de saleté. Le sable et le sel peuvent être corrosifs s'ils ne sont pas retirés rapidement."
            </p>
          </div>
        </header>

        <div className="prose-shineandgo">
          
          <section className="mb-12">
            <h2>Extraction du Sable</h2>
            <p>Le sable s'incruste partout. Nous utilisons des brosses vibrantes pour le faire remonter des fibres de moquette.</p>
          </section>
        
          <section className="mb-12">
            <h2>Décontamination des Insectes</h2>
            <p>Les moustiques séchés peuvent attaquer le vernis. Nous utilisons des agents enzymatiques pour les dissoudre sans frotter.</p>
          </section>
        

          <div className="cta-block my-12">
            <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400"><Check className="w-6 h-6" /> En conclusion</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
               Repartez sur une base saine pour la rentrée.
            </p>
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-4">
            
            <details className="faq-accordion">
              <summary>
                Le sel est-il dangereux ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="faq-accordion-content mt-4">
                Oui, il favorise la rouille, un rinçage du châssis est indispensable.
              </div>
            </details>
        
          </div>

          <div className="cta-block-light mt-16">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <span className="badge glass text-white font-semibold mb-6">
                SERVICE À DOMICILE
              </span>
              <h2 className="cta-title text-white">Envie d'un résultat professionnel ?</h2>
              <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                Nos experts interviennent chez vous avec tout le matériel pro. Gagnez du temps et profitez d'une voiture impeccable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#tarifs"
                  className="btn btn-large bg-white text-blue-600 font-bold hover:bg-gray-100 shadow-xl"
                >
                  Voir les tarifs <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/32472303701"
                  className="btn btn-large bg-blue-900 text-white hover:bg-blue-800"
                >
                  WhatsApp Pro
                </a>
              </div>
              <div className="mt-8 text-blue-200 text-sm font-medium">
                Intervention : <Link href="/lavage-voiture-liege" className="text-white underline hover:text-blue-100">Liège</Link>, <Link href="/lavage-voiture-herve" className="text-white underline hover:text-blue-100">Herve</Link>, <Link href="/lavage-voiture-verviers" className="text-white underline hover:text-blue-100">Verviers</Link>, <Link href="/lavage-voiture-soumagne" className="text-white underline hover:text-blue-100">Soumagne</Link>, <Link href="/lavage-voiture-fleron" className="text-white underline hover:text-blue-100">Fléron</Link>, <Link href="/lavage-voiture-vise" className="text-white underline hover:text-blue-100">Visé</Link>
              </div>
            
          </div>
          
          </div></div></div></article>
    </main>
  )
}
