import Link from 'next/link';

interface CityBreadcrumbsProps {
  cityName: string;
  citySlug: string;
}

export default function CityBreadcrumbs({ cityName, citySlug }: CityBreadcrumbsProps) {
  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        <li>
          <Link 
            href="/" 
            className="hover:text-white transition-colors duration-200"
          >
            Accueil
          </Link>
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <Link 
            href="/zone-intervention" 
            className="hover:text-white transition-colors duration-200"
          >
            Zones d'intervention
          </Link>
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-white font-medium">
            Nettoyage auto {cityName}
          </span>
        </li>
      </ol>
    </nav>
  );
} 