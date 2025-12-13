import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mentions Légales | Shine&Go',
    description: 'Mentions légales et informations administratives de Shine&Go, service de nettoyage automobile à domicile.',
    robots: {
        index: false,
        follow: true,
    }
}

export default function MentionsLegalesPage() {
    return (
        <main className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-4xl font-light text-gray-900 mb-8">Mentions Légales</h1>

            <div className="prose prose-lg text-gray-600">
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
                    <p>
                        Le site Shine&Go est édité par Shine&Go.<br />
                        <strong>Siège social :</strong> Rue de la Station 15, 4650 Herve, Belgique<br />
                        <strong>Téléphone :</strong> +32 472 30 37 01<br />
                        <strong>Email :</strong> contact@shineandgo.be
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Hébergement</h2>
                    <p>
                        Ce site est hébergé par Vercel Inc.<br />
                        440 N Barranca Ave #4133<br />
                        Covina, CA 91723<br />
                        États-Unis
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation belge et internationale sur le droit d'auteur et la propriété intellectuelle.
                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Données personnelles</h2>
                    <p>
                        Les informations recueillies via le formulaire de contact ou par téléphone sont enregistrées dans un fichier informatisé par Shine&Go pour la gestion de notre clientèle.
                        Elles sont conservées pendant la durée nécessaire à la gestion de la relation commerciale.
                    </p>
                </section>
            </div>
        </main>
    )
}
