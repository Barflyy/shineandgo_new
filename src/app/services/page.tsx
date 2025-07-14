import type { Metadata } from 'next';
import { Sparkles, Star, Clock, MapPin, Shield, Award, Zap, Heart, Info, CheckCircle, Users, Phone, MessageCircle, Car, Home, Timer, ThumbsUp, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Services Nettoyage Auto Premium - Car Wash & Détailing | Shine&Go",
  description: "Découvrez nos services de nettoyage automobile premium : nettoyage intérieur/extérieur, traitement hydrophobe, protection plastiques. Service mobile à domicile dans toute la région. Devis gratuit.",
  keywords: [
    "services nettoyage auto",
    "car wash services",
    "détailing automobile",
    "nettoyage intérieur voiture",
    "nettoyage extérieur voiture",
    "traitement hydrophobe",
    "protection plastiques",
    "service mobile nettoyage",
    "nettoyage auto domicile",
    "car detailing services",
    "nettoyage professionnel voiture",
    "produits koch chemie",
    "protectorwax",
    "carpro perl"
  ],
  openGraph: {
    title: "Services Nettoyage Auto Premium - Car Wash & Détailing | Shine&Go",
    description: "Découvrez nos services de nettoyage automobile premium : nettoyage intérieur/extérieur, traitement hydrophobe, protection plastiques.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/services",
    siteName: "Shine&Go Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services Nettoyage Auto Premium - Car Wash & Détailing | Shine&Go",
    description: "Découvrez nos services de nettoyage automobile premium : nettoyage intérieur/extérieur, traitement hydrophobe, protection plastiques.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* FLYER CONTENT */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* 🎯 HEADER IMPACTANT */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full border border-orange-400/30 mb-4">
              <Timer className="w-4 h-4 mr-2 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">SERVICE EXPRESS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ⏱️ 90 minutes. 0 effort.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4">
              Une voiture comme neuve.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Marre de perdre du temps au car wash ? On vient à vous.
            </p>
          </div>

          {/* 🎯 POURQUOI NOUS CHOISIR - COMPACT */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                ✨ Pourquoi Shine&Go ?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Home className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-medium">On vient chez vous</p>
                  <p className="text-xs text-gray-400">0 déplacement</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-medium">Produits pros</p>
                  <p className="text-xs text-gray-400">Koch Chemie, CarPro</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-medium">Résultat visible</p>
                  <p className="text-xs text-gray-400">Jusque dans les détails</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <ThumbsUp className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-medium">Garantie totale</p>
                  <p className="text-xs text-gray-400">Satisfait ou remboursé</p>
                </div>
              </div>
            </div>
          </div>

          {/* 🎯 SERVICES PRINCIPAUX - COMPACT */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              🚗 Nos Services Premium
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center">
                <Sparkles className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Nettoyage Extérieur</h4>
                <p className="text-green-400 font-bold text-lg mb-3">À partir de 35€</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Lavage carrosserie pro</li>
                  <li>• Nettoyage vitres</li>
                  <li>• Décrassage jantes</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center">
                <Heart className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Nettoyage Intérieur</h4>
                <p className="text-green-400 font-bold text-lg mb-3">À partir de 30€</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Tableau de bord</li>
                  <li>• Sièges et moquettes</li>
                  <li>• Désinfection</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center">
                <Star className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Pack Complet</h4>
                <p className="text-green-400 font-bold text-lg mb-3">À partir de 65€</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Tout inclus</li>
                  <li>• Protections</li>
                  <li>• Garantie satisfaction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🎯 AVANT/APRÈS VISUEL */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white text-center mb-4">
                🚗 Le résultat parle de lui-même
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="relative">
                    <img 
                      src="/transformations/berline-familiale-sale-avant-nettoyage-herve.jpeg" 
                      alt="Voiture avant nettoyage" 
                      className="w-full h-48 object-cover rounded-lg border-2 border-red-400/30"
                    />
                    <div className="absolute top-2 left-2 bg-red-500/80 text-white px-2 py-1 rounded text-xs font-bold">
                      AVANT
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative">
                    <img 
                      src="/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg" 
                      alt="Voiture après nettoyage" 
                      className="w-full h-48 object-cover rounded-lg border-2 border-green-400/30"
                    />
                    <div className="absolute top-2 left-2 bg-green-500/80 text-white px-2 py-1 rounded text-xs font-bold">
                      APRÈS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🎯 CTA IMPACTANT */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Prêt à redonner l'éclat à votre véhicule ?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Contactez-nous pour un devis gratuit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  <span>Devis gratuit WhatsApp</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+32472303701"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-400/30 hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  <span>Appeler maintenant</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* 🎯 FOOTER COMPACT */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-gray-300 text-sm">
                © 2025 Shine&Go Premium - Service mobile de nettoyage automobile professionnel
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 