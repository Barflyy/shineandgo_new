import Link from 'next/link'
import { ArrowLeft, Home, Search, MessageSquare } from 'lucide-react'

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
            <div className="max-w-2xl w-full text-center">
                {/* L'icône animée ou graphique */}
                <div className="relative mb-12 inline-block">
                    <div className="text-[12rem] font-black text-gray-50 opacity-50 select-none">404</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-blue-200">
                            <Search className="w-12 h-12 text-white -rotate-12" />
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    Oups ! Cette page s'est volatilisée.
                </h1>

                <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed">
                    Comme une tache de café sur un cuir crème, nous l'avons fait disparaître.
                    Mais ne vous inquiétez pas, nos experts sont là pour vous rediriger.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10"
                    >
                        <Home className="w-5 h-5" />
                        Retour à l'accueil
                    </Link>

                    <Link
                        href="/blog"
                        className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                    >
                        Voir nos conseils
                    </Link>
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="text-left">
                        <h3 className="font-bold text-gray-900 mb-2">Besoin d'aide ?</h3>
                        <p className="text-sm text-gray-500">Contactez-nous directement pour toute question.</p>
                        <a href="tel:+32472303701" className="text-blue-600 text-sm font-bold hover:underline">0472 30 37 01</a>
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold text-gray-900 mb-2">Zones d'intervention</h3>
                        <p className="text-sm text-gray-500">Nous couvrons toute la région de Liège et Verviers.</p>
                        <Link href="/zones" className="text-blue-600 text-sm font-bold hover:underline">Voir la carte</Link>
                    </div>
                    <div className="text-left text-balance">
                        <h3 className="font-bold text-gray-900 mb-2 text-pretty">Réservation Rapide</h3>
                        <p className="text-sm text-gray-500">Réservez votre nettoyage en 2 minutes via WhatsApp.</p>
                        <a href="https://wa.me/32472303701" className="text-blue-600 text-sm font-bold hover:underline">Démarrer une discussion</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
