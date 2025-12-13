import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Politique de Confidentialité | Shine&Go',
    description: 'Politique de confidentialité et protection des données personnelles de Shine&Go.',
    robots: {
        index: false,
        follow: true,
    }
}

export default function PolitiqueConfidentialitePage() {
    return (
        <main className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-4xl font-light text-gray-900 mb-8">Politique de Confidentialité</h1>

            <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                    Chez Shine&Go, nous accordons une grande importance à la confidentialité de vos données. Cette politique détaille comment nous traitons les informations que nous recueillons.
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Collecte des données</h2>
                    <p>
                        Nous collectons uniquement les données nécessaires à la prestation de nos services :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Nom et prénom</li>
                        <li>Adresse (pour l'intervention à domicile)</li>
                        <li>Numéro de téléphone</li>
                        <li>Adresse email</li>
                        <li>Type de véhicule</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Utilisation des données</h2>
                    <p>
                        Vos données sont utilisées exclusivement pour :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Planifier et effectuer les prestations de nettoyage</li>
                        <li>Vous contacter pour confirmation ou en cas d'imprévu</li>
                        <li>La facturation</li>
                    </ul>
                    <p>
                        Nous ne vendons ni ne louons jamais vos données à des tiers.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Vos droits</h2>
                    <p>
                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                        Pour exercer ce droit, contactez-nous à : contact@shineandgo.be
                    </p>
                </section>
            </div>
        </main>
    )
}
