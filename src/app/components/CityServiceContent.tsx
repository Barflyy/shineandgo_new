import { Sparkles, Heart, Clock, Shield, Zap, Star, Users, Car, CheckCircle } from 'lucide-react';
import React from 'react';

interface CityServiceContentProps {
  city: string;
  region: string;
  villages: string[];
  nearbyCities: string[];
}

const CityServiceContent: React.FC<CityServiceContentProps> = ({ city, region, villages }) => {
  return (
    <section className="relative mb-8">
      {/* Badge Premium */}
      <div className="absolute right-6 -top-6 z-10">
        <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wider border border-white/20">
          Premium
        </span>
      </div>
      <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6 md:p-10 flex flex-col gap-8">
        {/* Titre principal */}
        <div className="flex items-center gap-4 mb-2">
          <Sparkles className="w-8 h-8 text-blue-400 bg-blue-900/30 rounded-xl p-1" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Nettoyage voiture à {city} <span className="text-blue-400">à domicile</span>
          </h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          Vous habitez à <span className="font-semibold text-white">{city}</span>, {region}, ou dans les villages voisins comme <span className="font-semibold text-white">{villages.slice(0,3).join(', ')}</span> ?<br />
          Découvrez l&apos;expérience <span className="text-blue-400 font-semibold">Shine&Go Premium</span> : un service de lavage automobile à domicile qui sublime votre véhicule sans effort.
        </p>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-5 flex flex-col gap-4 border border-white/10">
            <div className="flex items-center gap-3 mb-1">
              <Clock className="w-6 h-6 text-purple-400 bg-purple-900/30 rounded-lg p-1" />
              <span className="font-bold text-white">Service à domicile</span>
            </div>
            <p className="text-gray-300 text-sm">Nous venons chez vous à {city}</p>
            <div className="flex items-center gap-3 mb-1">
              <Shield className="w-6 h-6 text-blue-400 bg-blue-900/30 rounded-lg p-1" />
              <span className="font-bold text-white">Produits haut de gamme</span>
            </div>
            <p className="text-gray-300 text-sm">Koch Chemie, CarPro, équipements pros</p>
            <div className="flex items-center gap-3 mb-1">
              <Zap className="w-6 h-6 text-green-400 bg-green-900/30 rounded-lg p-1" />
              <span className="font-bold text-white">Branchement requis</span>
            </div>
            <p className="text-gray-300 text-sm">Branchement d&apos;eau et électricité requis</p>
          </div>
          <div className="bg-white/10 rounded-xl p-5 flex flex-col gap-4 border border-white/10">
            <div className="flex items-center gap-3 mb-1">
              <Heart className="w-6 h-6 text-pink-400 bg-pink-900/30 rounded-lg p-1" />
              <span className="font-bold text-white">Service complet</span>
            </div>
            <p className="text-gray-300 text-sm">Intérieur, extérieur ou prestation globale</p>
            <div className="flex items-center gap-3 mb-1">
              <Star className="w-6 h-6 text-yellow-400 bg-yellow-900/30 rounded-lg p-1" />
              <span className="font-bold text-white">Satisfaction garantie</span>
            </div>
            <p className="text-gray-300 text-sm">Résultat professionnel, clients ravis</p>
            <div className="flex items-center gap-3 mb-1">
              <Users className="w-6 h-6 text-cyan-400 bg-cyan-900/30 rounded-lg p-1" />
              <span className="font-bold text-white">+50 clients locaux</span>
            </div>
            <p className="text-gray-300 text-sm">Déjà conquis à {city} et environs</p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 via-white/20 to-purple-500/30" />
          <Car className="w-6 h-6 text-blue-400" />
          <div className="flex-1 h-px bg-gradient-to-l from-blue-500/30 via-white/20 to-purple-500/30" />
        </div>

        {/* Prestations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-5 border border-white/10 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-bold text-white">Nettoyage intérieur</span>
            </div>
            <ul className="list-disc list-inside text-gray-300 text-sm ml-2">
              <li>Moquettes traitées en profondeur</li>
              <li>Tableau de bord & console nettoyés</li>
              <li>Vitres intérieures dégraissées</li>
              <li>Protection UV des plastiques</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-5 border border-white/10 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="font-bold text-white">Lavage extérieur</span>
            </div>
            <ul className="list-disc list-inside text-gray-300 text-sm ml-2">
              <li>Pré-lavage + lavage principal</li>
              <li>Jantes & pneus nettoyés</li>
              <li>Cirage & protection carrosserie</li>
              <li>Traitement vitres extérieures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityServiceContent; 