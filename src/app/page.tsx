import React from 'react';
import dynamic from 'next/dynamic';
import { Star, Clock, MapPin, Shield, Award, Zap, Heart, Info, ChevronLeft, ChevronRight, MessageCircle, Phone, Users, CheckCircle } from 'lucide-react';

// Import dynamique des composants client pour optimiser le FCP
const TransformationsSection = dynamic(() => import('./components/TransformationsSection'), {
  loading: () => <div className="h-64 bg-slate-800/50 rounded-xl animate-pulse" />
});

const Hero = dynamic(() => import('./components/Hero'), {
  loading: () => <div className="h-96 bg-slate-800/50 rounded-xl animate-pulse" />
});

const PricingTable = dynamic(() => import('./components/PricingTable'), {
  loading: () => <div className="h-96 bg-slate-800/50 rounded-xl animate-pulse" />
});

const Header = dynamic(() => import('./components/Header'), {
  loading: () => <div className="h-16 bg-slate-800/50 rounded-xl animate-pulse" />
});

const HowItWorks = dynamic(() => import('./components/HowItWorks'), {
  loading: () => <div className="h-96 bg-slate-800/50 rounded-xl animate-pulse" />
});

// Composant client pour les témoignages avec état
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'), {
  loading: () => <div className="h-96 bg-slate-800/50 rounded-xl animate-pulse" />
});

// Composant client pour les zones d'intervention
const ZonesInterventionSection = dynamic(() => import('./components/ZonesInterventionSection'), {
  loading: () => <div className="h-96 bg-slate-800/50 rounded-xl animate-pulse" />
});

// Composant client pour CalendlyPopup
const CalendlyPopupClient = dynamic(() => import('./components/CalendlyPopupClient'), {
  loading: () => <div className="h-16 w-16 bg-slate-800/50 rounded-full animate-pulse" />
});

// Composant client pour le bouton de réservation
const BookingButton = dynamic(() => import('./components/BookingButton'), {
  loading: () => <div className="h-48 bg-slate-800/50 rounded-xl animate-pulse" />
});

const PremiumCarCleaningLanding = () => {
  return (
    <div className="min-h-screen text-white bg-slate-900 relative overflow-hidden">
      {/* Global Background Effects - Optimisés pour prefers-reduced-motion */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      
      {/* Effets de fond conditionnels pour l'accessibilité - Utilisation de classes CSS */}
      
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bg-animation"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bg-animation" style={{animationDelay: '1s'}}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl bg-animation" style={{animationDelay: '0.5s'}}></div>
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Transformations Section */}
      <section id="transformations" className="py-8 md:py-12 lg:py-16 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TransformationsSection />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Section Pourquoi choisir Shine&Go */}
      <section className="py-8 md:py-12 lg:py-16 relative">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Excellence</span>
            </div>
            <h2 className="text-[clamp(1.2rem,4vw,1.75rem)] font-semibold text-balance break-words hyphens-auto bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              Pourquoi choisir notre service de lavage voiture à domicile ?
            </h2>
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-6 md:p-8 max-w-5xl mx-auto">
              <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-200 leading-relaxed">
                Fini les <span className="text-red-300 font-semibold">files d'attente au car wash</span>. <span className="text-emerald-300 font-semibold">Shine&Go</span> se déplace avec tout le nécessaire pour un <span className="text-emerald-300 font-semibold">nettoyage auto complet</span>, intérieur et extérieur, à domicile. Chaque <span className="text-emerald-300 font-semibold">lavage voiture</span> inclut des prestations soignées : <span className="text-green-300 font-medium">aspiration, plastiques, jantes, vitres, traitement hydrophobe et protection</span>. Notre objectif : vous offrir un <span className="text-emerald-300 font-semibold">lavage auto haut de gamme</span>, rapide et efficace, avec résultat <span className="text-yellow-300 font-semibold">"wow" garanti</span>.
              </p>
              
              {/* Maillage interne ajouté */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
                <p className="text-sm text-blue-200 break-words hyphens-auto">
                  <span className="font-semibold">Découvrez aussi notre service dans les villes voisines :</span>{' '}
                  <a href="/zone-intervention/liege" className="text-blue-300 hover:text-blue-200 underline transition-colors">Liège</a>,{' '}
                  <a href="/zone-intervention/verviers" className="text-blue-300 hover:text-blue-200 underline transition-colors">Verviers</a>,{' '}
                  <a href="/zone-intervention/spa" className="text-blue-300 hover:text-blue-200 underline transition-colors">Spa</a>,{' '}
                  <a href="/zone-intervention/huy" className="text-blue-300 hover:text-blue-200 underline transition-colors">Huy</a>{' '}
                  et <a href="/zone-intervention" className="text-blue-300 hover:text-blue-200 underline transition-colors">toutes nos zones d'intervention</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section id="services">
        <PricingTable />
      </section>

      {/* Section Témoignages - Composant client */}
      <TestimonialsSection />

      {/* Zones d'intervention Section - Composant client */}
      <ZonesInterventionSection />

      {/* Footer - Mobile-first */}
      <footer className="bg-slate-800/80 backdrop-blur-xl text-white pt-8 md:pt-12 pb-4 border-t border-white/10 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Bloc action */}
            <BookingButton />

            {/* Coordonnées */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-lg">📞</span>
                  <a href="tel:+32472303701" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Appeler le 0472 30 37 01">0472 30 37 01</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-lg">✉️</span>
                  <a href="mailto:nathangodfroid@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Envoyer un email à nathangodfroid@gmail.com">nathangodfroid@gmail.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-lg">🚐</span>
                  <span className="text-gray-300">Mobile 25 km autour de Herve</span>
                </li>
              </ul>
            </div>

            {/* Liens rapides */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Aller à la page d'accueil">Accueil</a></li>
                <li><a href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Voir comment ça marche">Comment ça marche</a></li>
                <li><a href="/#services" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Voir nos services">Nos services</a></li>
                <li><a href="/#transformations" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Voir les transformations avant/après">Avant/Après</a></li>
                <li><a href="/#temoignages" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Lire les avis clients">Avis clients</a></li>
              </ul>
            </div>

            {/* Légal */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Mentions légales</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-300">BE1014725710 – Shine & Go</li>
                <li><a href="/legal" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Lire les mentions légales">Mentions légales</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Lire la politique de confidentialité">Confidentialité & cookies</a></li>
                <li><a href="/cgv" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Lire les conditions générales">Conditions générales</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-xs mt-6 text-gray-400 border-t border-white/10 pt-4">
            © 2025 Shine & Go – Tous droits réservés
          </div>
        </div>
      </footer>

      {/* Calendly Popup en bas à droite - Composant client */}
      <CalendlyPopupClient />

    </div>
  );
};

export default PremiumCarCleaningLanding;