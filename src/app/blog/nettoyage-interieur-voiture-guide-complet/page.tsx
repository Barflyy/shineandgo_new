import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'Nettoyage Intérieur Voiture : Le Guide Complet 2024 | Shine&Go',
    description: 'Guide expert : Comment nettoyer l\'intérieur de sa voiture comme un pro ? Tableau de bord, sièges, tapis... Toutes les étapes et astuces de detailing.',
    openGraph: {
        type: 'article',
        publishedTime: '2024-01-15',
        authors: ['Shine&Go'],
    }
}

export default function ArticleNettoyageInterieur() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Nettoyage Intérieur Voiture : Le Guide Complet 2024",
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
                "datePublished": "2024-01-15",
                "dateModified": "2024-01-15",
                "image": "https://shineandgo.be/images/blog/nettoyage-interieur.webp"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "À quelle fréquence faut-il nettoyer l'intérieur de sa voiture ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pour un entretien optimal, une aspiration rapide tous les 15 jours et un nettoyage complet (shampooing, plastiques) tous les 3 à 6 mois sont recommandés."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Comment enlever les mauvaises odeurs ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Commencez par enlever la source (déchets, tapis humides). Saupoudrez du bicarbonate de soude sur les sièges et tapis, laissez agir une nuit puis aspirez. Pour les odeurs tenaces (tabac), un traitement à l'ozone est nécessaire."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Peut-on utiliser du produit vaisselle pour les sièges ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "À éviter. Le produit vaisselle mousse beaucoup et est difficile à rincer, ce qui peut laisser des auréoles et attirer la saleté. Préférez un nettoyant textile spécifique voiture (APC)."
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
                    { label: 'Guide Nettoyage Intérieur' }
                ]}
            />

            <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">

                {/* Header Article */}
                <header className="mb-12 text-center md:text-left">
                    <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
                    </Link>

                    <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Guide</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 15 Jan 2024</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min de lecture</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-8">
                        Nettoyage Intérieur Voiture : Le Guide Complet 2024
                    </h1>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <p className="text-xl text-blue-900 italic">
                            "Une voiture propre, c'est comme une maison rangée : on s'y sent tout de suite mieux et plus en sécurité."
                        </p>
                    </div>
                </header>

                {/* Contenu */}
                <div className="prose prose-lg prose-blue max-w-none text-gray-700">

                    <p className="lead text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                        Vous passez des heures dans votre voiture chaque semaine. Pourtant, son intérieur est souvent négligé jusqu'à ce que la poussière, les miettes et les taches deviennent insupportables. Dans ce guide complet, nous vous dévoilons les techniques des professionnels du detailing pour transformer votre habitacle.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Pourquoi nettoyer régulièrement l'intérieur ?</h2>
                    <p>Au-delà de l'esthétique, un habitacle propre est crucial pour :</p>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                            <span><strong>Votre santé :</strong> Éliminer acariens, bactéries et moisissures qui se logent dans les tissus et l'aération.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                            <span><strong>La sécurité :</strong> Des vitres propres sans film gras améliorent considérablement la visibilité, surtout de nuit.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                            <span><strong>La valeur de revente :</strong> Un intérieur impeccable rassure les acheteurs sur l'entretien général du véhicule.</span>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Le Matériel Nécessaire</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4 text-blue-900">Les Indispensables</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Aspirateur puissant avec embout fin</li>
                                <li>Microfibres de qualité (plusieurs)</li>
                                <li>Nettoyant multi-surfaces (APC)</li>
                                <li>Produit vitres (sans ammoniaque)</li>
                                <li>Pinceaux à poils doux</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4 text-blue-900">Le "Plus" Pro</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Injecteur-extracteur (pour les sièges)</li>
                                <li>Nettoyant vapeur</li>
                                <li>Dressing plastiques (finition mate)</li>
                                <li>Compresseur à air (soufflette)</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Nettoyage Étape par Étape</h2>

                    <div className="space-y-12">
                        <section>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">1. Le grand débarras</h3>
                            <p>Commencez par vider entièrement la voiture. Jetez les déchets, sortez les tapis de sol, videz le coffre et la boîte à gants. C'est le moment de retrouver ces pièces de monnaie perdues sous les sièges !</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">2. Dépoussiérage des plastiques</h3>
                            <p>Avant d'aspirer, faites tomber la poussière. Utilisez un pinceau et un nettoyant APC (All Purpose Cleaner) dilué pour agiter la saleté dans les grilles d'aération, les boutons, et les joints. Essuyez immédiatement avec une microfibre.</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">3. L'aspiration méthodique</h3>
                            <p>Aspirez de haut en bas. Commencez par les sièges (n'oubliez pas les coutures), puis passez aux moquettes. Avancez et reculez les sièges pour accéder aux zones cachées. Utilisez un embout brosse pour décoller les poils et poussières incrustés.</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">4. Le nettoyage des sièges</h3>
                            <div className="pl-6 border-l-2 border-gray-200">
                                <p className="mb-2"><strong>Pour le tissu :</strong> Vaporisez votre nettoyant, brossez doucement, puis essuyez avec une microfibre propre (ou aspirez l'excédent si vous avez un injecteur-extracteur).</p>
                                <p><strong>Pour le cuir :</strong> Utilisez un nettoyant spécifique cuir et une brosse à poils très souples. Ne mouillez pas trop. Appliquez ensuite un lait nourrissant.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">5. La touche finale : les vitres</h3>
                            <p>C'est l'étape souvent ratée. Utilisez deux microfibres : une humide avec le produit pour nettoyer, et une sèche pour essuyer sans laisser de traces. N'oubliez pas le haut de la vitre en la baissant un peu !</p>
                        </section>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">3 Erreurs à Éviter Absolument</h2>
                    <div className="space-y-4 mb-12">
                        <div className="flex gap-4 items-start bg-red-50 p-4 rounded-xl">
                            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-red-900">Utiliser des produits trop gras (silicone)</h3>
                                <p className="text-sm text-red-800">Évitez les sprays "brillant plastique" bon marché. Ils rendent le tableau de bord gras, collant, et créent des reflets dangereux dans le pare-brise.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-red-50 p-4 rounded-xl">
                            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-red-900">Mouiller excessivement le ciel de toit</h3>
                                <p className="text-sm text-red-800">Le tissu du plafond est collé fragilement. Trop d'eau ou de frottement peut le décoller définitivement.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-red-50 p-4 rounded-xl">
                            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-red-900">Négliger le séchage</h3>
                                <p className="text-sm text-red-800">Si vous nettoyez vos sièges à l'eau, laissez la voiture aérée et sécher complètement pour éviter les odeurs de moisi.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">FAQ - Questions Fréquentes</h2>
                    <div className="space-y-6">
                        <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
                            <summary className="font-medium text-gray-900 flex justify-between items-center">
                                Quelle est la différence entre un nettoyage classique et un detailing ?
                                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                                Le nettoyage classique (type car-wash) vise la rapidité et le superficiel. Le detailing est une rénovation minutieuse qui vise à restaurer l'état neuf du véhicule dans les moindres détails (grilles d'aération, rails de sièges, détachage profond...).
                            </div>
                        </details>
                        <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
                            <summary className="font-medium text-gray-900 flex justify-between items-center">
                                Comment enlever des poils de chien incrustés ?
                                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                                L'aspirateur ne suffit souvent pas. Utilisez une brosse en caoutchouc électrostatique ou une pierre ponce spéciale tissus pour regrouper les poils avant d'aspirer.
                            </div>
                        </details>
                    </div>

                    {/* CTA FINAL */}
                    <div className="mt-20 p-8 sm:p-12 bg-gray-900 rounded-3xl text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pas le temps ou pas le matériel ?</h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Confiez-nous votre véhicule. Nos experts Shine&Go interviennent à domicile avec tout le matériel professionnel nécessaire.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#tarifs"
                                    className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-900/50"
                                >
                                    Voir nos offres Detailing
                                </Link>
                                <a
                                    href="https://wa.me/32472303701"
                                    className="px-8 py-4 bg-transparent border border-gray-500 text-white font-medium rounded-full hover:bg-white/10 transition-all"
                                >
                                    Devis WhatsApp rapide
                                </a>
                            </div>
                        </div>
                        {/* Décoration background */}
                        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
                    </div>

                </div>
            </article>
        </main>
    )
}
