import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="flex items-center hover:text-white transition-colors duration-300"
      >
        <Home className="w-4 h-4 mr-1" />
        Accueil
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-white transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

// Fonction utilitaire pour générer les breadcrumbs selon la page
export const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) return [];
  
  const breadcrumbs: BreadcrumbItem[] = [];
  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    if (segment === 'zone-intervention') {
      breadcrumbs.push({
        label: 'Zones d\'intervention',
        href: currentPath
      });
    } else if (segment === 'services') {
      breadcrumbs.push({
        label: 'Services',
        href: currentPath
      });
    } else if (segment === 'faq') {
      breadcrumbs.push({
        label: 'FAQ'
      });
    } else if (segments[index - 1] === 'zone-intervention') {
      // Page de ville
      const cityName = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        label: `Nettoyage auto ${cityName}`
      });
    }
  });
  
  return breadcrumbs;
}; 