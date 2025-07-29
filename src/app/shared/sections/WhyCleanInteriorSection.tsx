export default function WhyCleanInteriorSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi un nettoyage intérieur est essentiel pour votre voiture ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Un nettoyage intérieur voiture régulier, réalisé à la main par des professionnels, permet de garder votre véhicule sain et esthétique.
          </p>
        </div>

        {/* Problèmes courants */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Les problèmes que nous résolvons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10 text-center">
              <div className="text-4xl mb-4">🧹</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Élimine les bactéries, poussières et allergènes</h4>
              <p className="text-gray-600">
                Un nettoyage professionnel élimine tous les contaminants qui s'accumulent dans votre habitacle.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Supprime les taches, poils d'animaux et mauvaises odeurs</h4>
              <p className="text-gray-600">
                Traitement spécialisé pour éliminer définitivement toutes les traces et odeurs tenaces.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Préserve la valeur de votre véhicule (revente)</h4>
              <p className="text-gray-600">
                Un intérieur propre maintient la valeur de revente de votre véhicule.
              </p>
            </div>
          </div>
        </div>

        {/* Bénéfices directs */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Les bénéfices d'un intérieur propre
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center relative z-10">
              <div className="text-4xl mb-4">😊</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Apporte un confort et un habitacle comme neuf</h4>
              <p className="text-blue-700">
                Retrouvez la fierté de conduire une voiture propre et bien entretenue.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center relative z-10">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Habitacle Sain</h4>
              <p className="text-blue-700">
                Air purifié, surfaces désinfectées, environnement agréable pour vous et vos passagers.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center relative z-10">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="text-xl font-bold text-green-900 mb-3">Valeur Préservée</h4>
              <p className="text-green-700">
                Protégez l'investissement de votre véhicule et maximisez sa valeur de revente.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center relative z-10">
              <div className="text-4xl mb-4">😊</div>
              <h4 className="text-xl font-bold text-purple-900 mb-3">Confort Quotidien</h4>
              <p className="text-purple-700">
                Retrouvez la fierté de conduire une voiture propre et bien entretenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 