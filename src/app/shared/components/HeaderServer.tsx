import Link from 'next/link';

export default function HeaderServer() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg border-b border-ui-border/70 pt-safe bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0" aria-label="Retour à l'accueil - Shine&Go">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-shine-blue-dark break-words min-w-0">
              Shine&Go
            </div>
          </Link>

          {/* Desktop Navigation - Version statique */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              href="/nettoyage-interieur-voiture"
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words focus:outline-none focus:ring-2 focus:ring-shine-blue-primary focus:ring-offset-2 rounded-md"
            >
              Nettoyage Intérieur
            </Link>
            <Link
              href="/nettoyage-exterieur-voiture"
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words focus:outline-none focus:ring-2 focus:ring-shine-blue-primary focus:ring-offset-2 rounded-md"
            >
              Nettoyage Extérieur
            </Link>
            <Link
              href="/nettoyage-complet-voiture"
              className="text-shine-blue-dark hover:text-shine-blue-primary font-medium cursor-pointer break-words focus:outline-none focus:ring-2 focus:ring-shine-blue-primary focus:ring-offset-2 rounded-md"
            >
              Nettoyage Complet
            </Link>
            <Link
              href="https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              Réserver
            </Link>
          </nav>

          {/* Mobile Menu Button - Version statique */}
          <div className="lg:hidden">
            <Link
              href="https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
            >
              Réserver
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 