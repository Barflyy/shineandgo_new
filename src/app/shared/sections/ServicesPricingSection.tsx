export default function ServicesPricingSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quel est le tarif d'un nettoyage intérieur voiture ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tarifs transparents selon le type de véhicule et l'état de saleté. Devis gratuit et personnalisé.
          </p>
        </div>

        {/* Catégories de saleté */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Niveaux de saleté
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🟢</div>
                <h4 className="text-xl font-bold text-gray-900">Léger</h4>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Poussière normale</li>
                <li>• Pas de taches importantes</li>
                <li>• Odeurs légères</li>
                <li>• Entretien régulier</li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🟡</div>
                <h4 className="text-xl font-bold text-gray-900">Moyen</h4>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Quelques taches</li>
                <li>• Odeurs persistantes</li>
                <li>• Poils d'animaux</li>
                <li>• Nettoyage occasionnel</li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🔴</div>
                <h4 className="text-xl font-bold text-gray-900">Encrassé</h4>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Taches importantes</li>
                <li>• Odeurs tenaces</li>
                <li>• Négligence prolongée</li>
                <li>• Préparation vente</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarifs par type de véhicule */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Tarifs par type de véhicule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🚗</div>
                <h4 className="text-xl font-bold text-gray-900">Citadine</h4>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">39 €</div>
                <div className="text-sm text-gray-500">à partir de</div>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Aspiration complète sièges & sols</li>
                <li>• Nettoyage tableau de bord et plastiques</li>
                <li>• Vitres intérieures sans traces</li>
                <li>• Protection UV avec CarPro Perl</li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🚙</div>
                <h4 className="text-xl font-bold text-gray-900">Berline</h4>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">44 €</div>
                <div className="text-sm text-gray-500">à partir de</div>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Aspiration complète sièges & sols</li>
                <li>• Nettoyage tableau de bord et plastiques</li>
                <li>• Vitres intérieures sans traces</li>
                <li>• Protection UV avec CarPro Perl</li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🚗</div>
                <h4 className="text-xl font-bold text-gray-900">Break</h4>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">49 €</div>
                <div className="text-sm text-gray-500">à partir de</div>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Aspiration complète sièges & sols</li>
                <li>• Nettoyage tableau de bord et plastiques</li>
                <li>• Vitres intérieures sans traces</li>
                <li>• Protection UV avec CarPro Perl</li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🚐</div>
                <h4 className="text-xl font-bold text-gray-900">SUV/4x4</h4>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">54 €</div>
                <div className="text-sm text-gray-500">à partir de</div>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Aspiration complète sièges & sols</li>
                <li>• Nettoyage tableau de bord et plastiques</li>
                <li>• Vitres intérieures sans traces</li>
                <li>• Protection UV avec CarPro Perl</li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🚐</div>
                <h4 className="text-xl font-bold text-gray-900">Monospace</h4>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">59 €</div>
                <div className="text-sm text-gray-500">à partir de</div>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Aspiration complète sièges & sols</li>
                <li>• Nettoyage tableau de bord et plastiques</li>
                <li>• Vitres intérieures sans traces</li>
                <li>• Protection UV avec CarPro Perl</li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🚚</div>
                <h4 className="text-xl font-bold text-gray-900">Utilitaire</h4>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">64 €</div>
                <div className="text-sm text-gray-500">à partir de</div>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Aspiration complète sièges & sols</li>
                <li>• Nettoyage tableau de bord et plastiques</li>
                <li>• Vitres intérieures sans traces</li>
                <li>• Protection UV avec CarPro Perl</li>
              </ul>
            </div>
          </div>
        </div>



        {/* Call-to-action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6 md:p-8 relative z-10" >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Demander mon tarif personnalisé (gratuit)
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos tarifs de nettoyage intérieur voiture incluent : aspiration complète de l'habitacle, nettoyage plastiques + dressing satiné, vitres intérieures, désodorisation. Options disponibles : shampooing tissus, traitement cuir, lavage intérieur & extérieur voiture.
            </p>
            <a
              href="https://tally.so/r/w5POJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Demander mon tarif personnalisé (gratuit)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 