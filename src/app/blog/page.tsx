import type { Metadata } from 'next'
import BlogListing from '@/components/BlogListing'

export const metadata: Metadata = {
    title: 'Blog Shine&Go - Conseils Nettoyage Auto & Detailing Professionnel',
    description: 'Guides experts, tutoriels et comparatifs sur le nettoyage automobile, le detailing, et l\'entretien premium de votre véhicule à domicile en Belgique.',
}

export default function BlogPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-16">
            <BlogListing />
        </main>
    )
}
