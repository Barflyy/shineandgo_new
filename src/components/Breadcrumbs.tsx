import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbsProps {
    items: {
        label: string
        href?: string
    }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Fil d'ariane" className="py-4 bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-6">
                <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
                    <li>
                        <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
                            <Home className="w-4 h-4" />
                            <span className="sr-only">Accueil</span>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="font-medium text-gray-900" aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    )
}
