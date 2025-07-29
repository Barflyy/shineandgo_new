export default function ServicesPricingExteriorSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quel est le tarif d'un nettoyage extérieur voiture ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tarifs transparents selon le type de véhicule et l'état de saleté. Devis gratuit et personnalisé.
            </p>
          </div>

          {/* Niveaux de saleté */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Niveaux de saleté :
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🟢</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Léger</h4>
                <p className="text-gray-600">Poussière et saletés légères</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🟡</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Moyen</h4>
                <p className="text-gray-600">Traces d'insectes, film routier</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🔴</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Encrassé</h4>
                <p className="text-gray-600">Boue, résidus tenaces, véhicule négligé</p>
              </div>
            </div>
          </div>

          {/* Tarifs par type de véhicule */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tarifs par type de véhicule :
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚗</div>
                  <h4 className="text-xl font-bold text-gray-900">Citadine</h4>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">49 €</div>
                  <div className="text-sm text-gray-500">à partir de</div>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Lavage extérieur complet à la main</li>
                  <li>• Prélavage mousse active</li>
                  <li>• Nettoyage des jantes et passages de roues</li>
                  <li>• Vitres extérieures sans traces</li>
                  <li>• Finition hydrophobe CarPro Perl</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚙</div>
                  <h4 className="text-xl font-bold text-gray-900">Berline</h4>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">54 €</div>
                  <div className="text-sm text-gray-500">à partir de</div>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Lavage extérieur complet à la main</li>
                  <li>• Prélavage mousse active</li>
                  <li>• Nettoyage des jantes et passages de roues</li>
                  <li>• Vitres extérieures sans traces</li>
                  <li>• Finition hydrophobe CarPro Perl</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚗</div>
                  <h4 className="text-xl font-bold text-gray-900">Break</h4>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">59 €</div>
                  <div className="text-sm text-gray-500">à partir de</div>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Lavage extérieur complet à la main</li>
                  <li>• Prélavage mousse active</li>
                  <li>• Nettoyage des jantes et passages de roues</li>
                  <li>• Vitres extérieures sans traces</li>
                  <li>• Finition hydrophobe CarPro Perl</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚐</div>
                  <h4 className="text-xl font-bold text-gray-900">SUV / 4x4</h4>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">64 €</div>
                  <div className="text-sm text-gray-500">à partir de</div>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Lavage extérieur complet à la main</li>
                  <li>• Prélavage mousse active</li>
                  <li>• Nettoyage des jantes et passages de roues</li>
                  <li>• Vitres extérieures sans traces</li>
                  <li>• Finition hydrophobe CarPro Perl</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚐</div>
                  <h4 className="text-xl font-bold text-gray-900">Monospace</h4>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">69 €</div>
                  <div className="text-sm text-gray-500">à partir de</div>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Lavage extérieur complet à la main</li>
                  <li>• Prélavage mousse active</li>
                  <li>• Nettoyage des jantes et passages de roues</li>
                  <li>• Vitres extérieures sans traces</li>
                  <li>• Finition hydrophobe CarPro Perl</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚚</div>
                  <h4 className="text-xl font-bold text-gray-900">Utilitaire</h4>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">74 €</div>
                  <div className="text-sm text-gray-500">à partir de</div>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Lavage extérieur complet à la main</li>
                  <li>• Prélavage mousse active</li>
                  <li>• Nettoyage des jantes et passages de roues</li>
                  <li>• Vitres extérieures sans traces</li>
                  <li>• Finition hydrophobe CarPro Perl</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call-to-action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6 md:p-8 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Demander mon tarif personnalisé (gratuit)
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nos tarifs incluent : lavage extérieur complet à la main, prélavage mousse active, nettoyage jantes, vitres extérieures, finition hydrophobe. Devis gratuit et personnalisé selon l'état de votre véhicule.
              </p>
              <a
                href="https://tally.so/r/w5POJQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                📲 Demander mon tarif personnalisé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 