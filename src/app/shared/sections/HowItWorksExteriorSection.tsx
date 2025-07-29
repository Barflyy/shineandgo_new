export default function HowItWorksExteriorSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Un lavage extérieur de voiture simple et rapide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              💡 Fini les files au car wash : Shine&Go, c'est un nettoyage voiture à domicile sans perte de temps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Vous remplissez notre formulaire en ligne ou nous contactez sur WhatsApp
              </h3>
              <p className="text-gray-600">
                Demande simple et rapide en 2 minutes maximum
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Nous confirmons votre devis sous 24h avec un créneau
              </h3>
              <p className="text-gray-600">
                Devis personnalisé selon l'état de votre véhicule
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Nous intervenons chez vous avec tout le matériel professionnel
              </h3>
              <p className="text-gray-600">
                Intervention à domicile avec équipement premium
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Inclus dans le service :
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Déplacement gratuit ≤ 25 km</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Matériel professionnel et produits premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Intervention en 30-45 min selon le véhicule</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Paiement après validation du résultat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Garantie satisfaction ou retouche offerte</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Protection hydrophobe incluse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 