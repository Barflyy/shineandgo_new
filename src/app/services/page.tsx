import type { Metadata } from 'next';
import { Sparkles, Star, Clock, MapPin, Shield, Award, Zap, Heart, Info, CheckCircle, Users, Phone, MessageCircle } from 'lucide-react';

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
  const services = [
    {
      title: "Nettoyage Extérieur Complet",
      description: "Notre service de nettoyage extérieur comprend un lavage soigneux de la carrosserie, des vitres, des jantes et des passages de roues. Nous utilisons des techniques professionnelles pour éliminer la saleté, les taches et les résidus sans endommager la peinture.",
      features: [
        "Lavage carrosserie avec produits professionnels",
        "Nettoyage des vitres intérieures et extérieures",
        "Décrassage des jantes et passages de roues",
        "Séchage professionnel avec chiffons microfibres",
        "Inspection qualité avant livraison"
      ],
      icon: Sparkles,
      price: "À partir de 35€"
    },
    {
      title: "Nettoyage Intérieur Premium",
      description: "Le nettoyage intérieur premium inclut le nettoyage complet de l'habitacle : tableau de bord, sièges, moquettes, coffre et tous les détails. Nous utilisons des produits spécialisés pour chaque type de surface.",
      features: [
        "Nettoyage tableau de bord et console centrale",
        "Aspiration et nettoyage des sièges",
        "Nettoyage des moquettes et tapis",
        "Désinfection des surfaces tactiles",
        "Traitement anti-odeurs"
      ],
      icon: Heart,
      price: "À partir de 30€"
    },
    {
      title: "Traitement Hydrophobe ProtectorWax",
      description: "Le traitement ProtectorWax crée une barrière invisible qui repousse l'eau et protège votre carrosserie. Cette protection durable facilite l'entretien futur et préserve l'éclat de votre véhicule.",
      features: [
        "Application ProtectorWax professionnelle",
        "Protection durable 3-6 mois",
        "Effet hydrophobe immédiat",
        "Facilite l'entretien futur",
        "Préserve l'éclat de la peinture"
      ],
      icon: Shield,
      price: "Inclus dans le pack complet"
    },
    {
      title: "Protection Plastiques CarPro Perl",
      description: "CarPro Perl protège et fait briller tous les plastiques de votre véhicule : pare-chocs, baguettes, rétroviseurs. Cette protection UV prévient le vieillissement et maintient l'aspect neuf.",
      features: [
        "Protection UV des plastiques",
        "Brillance durable des surfaces",
        "Prévention du vieillissement",
        "Application sur tous les plastiques",
        "Résultat showroom garanti"
      ],
      icon: Award,
      price: "Inclus dans le pack complet"
    },
    {
      title: "Pack Complet Premium",
      description: "Notre pack complet inclut tous les services : nettoyage extérieur et intérieur, traitement ProtectorWax, protection CarPro Perl, et finition showroom. Le résultat optimal pour votre véhicule.",
      features: [
        "Nettoyage extérieur complet",
        "Nettoyage intérieur premium",
        "Traitement ProtectorWax",
        "Protection CarPro Perl",
        "Finition showroom",
        "Garantie satisfaction"
      ],
      icon: Star,
      price: "À partir de 65€"
    },
    {
      title: "Service Mobile à Domicile",
      description: "Notre équipe se déplace chez vous avec tout le matériel professionnel nécessaire. Vous n'avez plus besoin de vous déplacer, nous intervenons à l'heure qui vous convient.",
      features: [
        "Intervention à domicile",
        "Matériel professionnel complet",
        "Horaires flexibles 7j/7",
        "Pas de déplacement nécessaire",
        "Service adapté à vos contraintes"
      ],
      icon: MapPin,
      price: "Inclus dans tous nos services"
    }
  ];

  const avantages = [
    {
      title: "Produits Professionnels Koch Chemie",
      description: "Nous utilisons exclusivement les produits Koch Chemie, leader allemand du nettoyage automobile. Ces produits sont testés et approuvés par les fabricants automobiles.",
      icon: CheckCircle
    },
    {
      title: "Techniques Professionnelles",
      description: "Notre équipe est formée aux techniques les plus avancées du nettoyage automobile. Chaque intervention suit un protocole rigoureux pour garantir un résultat optimal.",
      icon: Award
    },
    {
      title: "Garantie Satisfaction",
      description: "Nous offrons une garantie satisfaction totale sur tous nos services. Si vous n'êtes pas entièrement satisfait, nous effectuons une retouche gratuite.",
      icon: Shield
    },
    {
      title: "Service Personnalisé",
      description: "Chaque véhicule est unique. Nous adaptons nos services et produits aux spécificités de votre véhicule pour un résultat sur mesure.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen text-white bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Header */}
      <header className="relative z-10 bg-slate-800/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                <span className="text-white font-bold text-xl">✨</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Shine&Go Premium</h1>
                <p className="text-gray-300 text-sm">Nettoyage Auto Professionnel</p>
              </div>
            </div>
            <a
              href="/"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Nos Services</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Services de Nettoyage Auto Premium
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                Découvrez notre gamme complète de services de nettoyage automobile professionnel. 
                De la carrosserie à l'habitacle, en passant par les traitements de protection, 
                nous redonnons l'éclat à votre véhicule avec des produits haut de gamme et des techniques professionnelles.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    {/* Contenu */}
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-blue-300" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-green-400 font-semibold">{service.price}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Avantages Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                  Pourquoi Choisir Shine&Go ?
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Notre expertise et notre engagement qualité font la différence
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {avantages.map((avantage, index) => {
                  const IconComponent = avantage.icon;
                  return (
                    <div key={index} className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-green-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                            {avantage.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {avantage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Prêt à redonner l'éclat à votre véhicule ?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Contactez-nous dès maintenant pour un devis personnalisé et profitez de nos services premium.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto"
                    className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 hover:scale-105 hover:border-emerald-400/50"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
                    <span className="relative z-10">Devis gratuit WhatsApp</span>
                  </a>
                  <a
                    href="tel:+32472303701"
                    className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-400/30 hover:scale-105 hover:border-cyan-400/50"
                  >
                    <Phone className="w-5 h-5 mr-3 relative z-10" />
                    <span className="relative z-10">Appeler maintenant</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-800/80 backdrop-blur-xl text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">© 2025 Shine&Go Premium - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
} 