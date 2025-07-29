import Link from 'next/link';

export default function HeroServer() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-hero-bg via-white to-surface-light">
      {/* Background elements - style Shine&Go */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes - couleurs du site */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-shine-blue-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-shine-blue-light/10 to-accent/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-surface-cta/20 to-accent/5 rounded-full blur-2xl"></div>
        
        {/* Subtle grid pattern - style Shine&Go */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main container - optimisé mobile */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="w-full py-20 sm:py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Text content - centré mobile */}
            <div className="text-center lg:text-left space-y-8 sm:space-y-10">
              
              {/* Rating badge - style Shine&Go */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-surface-cta to-surface-light backdrop-blur-sm border border-shine-blue-light/50 rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-shine-blue-dark">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">4,9/5</span>
                  <span className="text-shine-blue-primary">sur Google</span>
                </div>
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                <span className="text-text-primary">Premium</span>
              </div>

              {/* Main headline - typographie Shine&Go */}
              <div className="space-y-4 sm:space-y-5">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  <span className="text-text-primary">
                    Lavage auto
                  </span>
                  <br />
                  <span className="text-shine-blue-primary">
                    à domicile
                  </span>
                  <br />
                  <span className="text-text-primary">en Wallonie</span>
                </h1>
              </div>

              {/* Subtitle - style Shine&Go */}
              <div>
                <p className="text-lg sm:text-xl lg:text-xl text-text-primary font-light leading-relaxed">
                  <span className="font-medium">Finition showroom</span> garantie en{' '}
                  <span className="font-semibold text-accent">90 min</span>
                </p>
              </div>

              {/* CTA button - style Shine&Go */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-green-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50 text-base sm:text-lg"
                  aria-label="Réserver maintenant"
                >
                  <span className="flex items-center space-x-3 sm:space-x-4">
                    <span className="text-xl sm:text-2xl">🚗</span>
                    <span>Réserver maintenant</span>
                  </span>
                </Link>
              </div>

              {/* Features list - style Shine&Go */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 text-text-primary">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Résultat showroom</span>
                </div>
                <div className="flex items-center space-x-2 text-text-primary">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Service à domicile</span>
                </div>
                <div className="flex items-center space-x-2 text-text-primary">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Produits premium</span>
                </div>
              </div>
            </div>

            {/* Image section - responsive */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">🚗✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 