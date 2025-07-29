export default function WhyCleanExteriorSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi un nettoyage extérieur est essentiel pour votre voiture ?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Un nettoyage extérieur voiture régulier, réalisé à la main par des professionnels, permet de protéger et d'embellir votre carrosserie.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Les problèmes que nous résolvons :
              </h3>
              
              <div className="space-y-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-blue-500 text-2xl mb-2">🚿</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Élimine la saleté, insectes et résidus de route</h4>
                    <p className="text-gray-600 text-sm">Un lavage professionnel supprime toutes les contaminations qui abîment votre peinture.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-green-500 text-2xl mb-2">🛡️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Protège la carrosserie des micro-rayures et de l'oxydation</h4>
                    <p className="text-gray-600 text-sm">Grâce à des techniques adaptées, nous préservons l'éclat de votre véhicule.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-yellow-500 text-2xl mb-2">💎</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Préserve la valeur de votre véhicule (revente)</h4>
                    <p className="text-gray-600 text-sm">Une peinture entretenue et brillante augmente la valeur de revente.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Les bénéfices d'un extérieur propre :
              </h3>
              
              <div className="space-y-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-blue-500 text-2xl mb-2">💎</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Aspect Showroom</h4>
                    <p className="text-gray-600 text-sm">Votre voiture retrouve sa brillance d'origine.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-green-500 text-2xl mb-2">🌿</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Protection durable</h4>
                    <p className="text-gray-600 text-sm">Application d'une protection hydrophobe pour éviter que la saleté n'adhère.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-yellow-500 text-2xl mb-2">😊</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fierté & confort visuel</h4>
                    <p className="text-gray-600 text-sm">Rien de plus agréable que de conduire un véhicule propre et impeccable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 