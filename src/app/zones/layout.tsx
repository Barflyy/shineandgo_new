import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Zones d\'intervention | Shine&Go',
    description: 'Découvrez nos zones d\'intervention pour le nettoyage de voiture à domicile en Wallonie.',
}

export default function ZonesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gray-50 min-h-screen">
            {children}
        </div>
    )
}
