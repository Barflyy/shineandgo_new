import Link from 'next/link';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  className?: string;
}

export default function HeroSection({
  title = "Lavage voiture à domicile en Wallonie",
  subtitle = "Service mobile professionnel : intérieur & extérieur à la main avec produits Koch-Chemie et CarPro. Résultat showroom en 90 min, garantie satisfaction. Devis gratuit et 10 € offerts.",
  primaryCtaText = "Devis gratuit",
  primaryCtaLink = "https://tally.so/r/w5POJQ",
  secondaryCtaText = "WhatsApp",
  secondaryCtaLink = "https://wa.me/32472303701",
  className = ""
}: HeroSectionProps) {
  return (
    <section className={`snap-start min-h-svh w-full relative ${className}`}>
      <div className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              {primaryCtaText}
            </a>
            <a
              href={secondaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 