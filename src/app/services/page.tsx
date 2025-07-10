import { Metadata } from 'next';
import { Sparkles, Car, Star, Shield, Clock, MapPin, Phone, Mail, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: "Flyer Services - Shine&Go Premium | Nettoyage Auto & Detailing à Herve",
  description: "Flyer des services de nettoyage automobile premium : nettoyage classique et detailing premium. Service à domicile dans la région de Herve, Verviers, Dison, Spa.",
  openGraph: {
    title: "Flyer Services - Shine&Go Premium | Nettoyage Auto & Detailing",
    description: "Flyer des services de nettoyage automobile premium : nettoyage classique et detailing premium. Service à domicile.",
  },
};

const services = [
  {
    id: 'classique',
    name: 'NETTOYAGE CLASSIQUE',
    icon: Car,
    price: 'À partir de 35€',
    duration: '1h30 - 2h',
    features: [
      'Nettoyage extérieur complet',
      'Nettoyage intérieur (tableau de bord, sièges, sols)',
      'Aspiration complète',
      'Lavage des vitres',
      'Produits professionnels Koch Chemie',
      'Service à domicile inclus'
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'premium',
    name: 'DETAILING PREMIUM',
    icon: Sparkles,
    price: 'À partir de 80€',
    duration: '3h - 4h',
    features: [
      'Tout inclus dans le nettoyage classique',
      'Décontamination de la peinture',
      'Protection céramique (option)',
      'Nettoyage moteur (option)',
      'Polissage léger',
      'Cirage professionnel',
      'Protection des plastiques',
      'Traitement anti-odeurs'
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    borderColor: 'border-purple-200'
  }
];



export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      {/* Flyer Container */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header du Flyer */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SHINE&GO PREMIUM
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Service de Nettoyage Automobile à Domicile
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>5/5 Évaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Garantie Satisfait</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Service 7j/7</span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              NOS SERVICES PREMIUM
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`relative overflow-hidden rounded-2xl border-2 ${service.borderColor} ${service.bgColor} p-6`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-12 translate-x-12`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-2xl font-bold text-green-600">{service.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">{service.duration}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.color.replace('from-', 'text-').replace(' to-', '')}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Tarifs Table */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                TARIFS PAR TYPE DE VÉHICULE
              </h3>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="grid grid-cols-5 gap-4 text-center text-sm font-semibold text-gray-600 mb-4">
                  <div>Type</div>
                  <div>Citadine</div>
                  <div>Berline</div>
                  <div>SUV</div>
                  <div>Monospace</div>
                </div>
                
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div className="font-semibold text-gray-900">Classique</div>
                  <div className="bg-blue-100 text-blue-800 rounded-lg py-2 font-bold">35€</div>
                  <div className="bg-blue-100 text-blue-800 rounded-lg py-2 font-bold">45€</div>
                  <div className="bg-blue-100 text-blue-800 rounded-lg py-2 font-bold">55€</div>
                  <div className="bg-blue-100 text-blue-800 rounded-lg py-2 font-bold">50€</div>
                </div>
                
                <div className="grid grid-cols-5 gap-4 text-center mt-2">
                  <div className="font-semibold text-gray-900">Premium</div>
                  <div className="bg-purple-100 text-purple-800 rounded-lg py-2 font-bold">80€</div>
                  <div className="bg-purple-100 text-purple-800 rounded-lg py-2 font-bold">100€</div>
                  <div className="bg-purple-100 text-purple-800 rounded-lg py-2 font-bold">120€</div>
                  <div className="bg-purple-100 text-purple-800 rounded-lg py-2 font-bold">110€</div>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Produits Professionnels</h4>
                <p className="text-sm text-gray-600">Koch Chemie haut de gamme</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Service à Domicile</h4>
                <p className="text-sm text-gray-600">Intervention chez vous 7j/7</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Garantie Satisfait</h4>
                <p className="text-sm text-gray-600">100% satisfait ou remboursé</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">CONTACTEZ-NOUS</h3>
              <p className="text-gray-300 mb-6">
                Pour un devis gratuit et personnalisé
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">+32 472 30 37 01</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">contact@shinego.be</span>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                DEVIS GRATUIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 