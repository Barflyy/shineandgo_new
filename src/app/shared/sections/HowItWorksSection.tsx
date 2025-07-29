export default function HowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Un lavage intérieur de voiture simple et rapide
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            💡 Fini les files au car wash : Shine&Go, c'est un nettoyage voiture à domicile sans perte de temps.
          </p>
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              1️⃣ Vous remplissez notre formulaire en ligne
            </h3>
            <p className="text-gray-600">
              Remplissez notre formulaire en ligne ou contactez-nous par WhatsApp. Décrivez votre véhicule et l'état de votre habitacle.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              2️⃣ Nous confirmons votre devis sous 24h
            </h3>
            <p className="text-gray-600">
              Nous vous envoyons un devis personnalisé avec un créneau d'intervention qui vous convient. Pas de surprise, prix transparent.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              3️⃣ Nous intervenons directement chez vous ou sur votre lieu de travail
            </h3>
            <p className="text-gray-600">
              Nos experts arrivent chez vous avec tout le matériel professionnel. Vous payez seulement après validation du résultat.
            </p>
          </div>
        </div>

        {/* Détails du processus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 relative z-10" style={{backgroundColor: '#f9fafb', opacity: 1}}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Ce qui est inclus
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Déplacement gratuit dans un rayon de 25 km</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Matériel professionnel et produits premium</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Intervention en 45-60 minutes selon le véhicule</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Paiement après validation du résultat</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Garantie satisfaction ou retouche offerte</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 md:p-8 relative z-10" style={{backgroundColor: '#eff6ff', opacity: 1}}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Préparation de votre intervention
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">ℹ️</span>
                <span>Préparez un accès à l'eau et à l'électricité</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">ℹ️</span>
                <span>Retirez les objets personnels de votre véhicule</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">ℹ️</span>
                <span>Prévoyez 1h d'intervention en moyenne</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">ℹ️</span>
                <span>Vous pouvez rester dans la voiture si vous le souhaitez</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">ℹ️</span>
                <span>Intervention possible même par temps de pluie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6 md:p-8 relative z-10" style={{background: 'linear-gradient(to right, #eff6ff, #f0fdf4)', opacity: 1}}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Prêt à redonner vie à votre habitacle ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos experts sont disponibles 7j/7 pour intervenir chez vous. Recevez votre devis gratuit en moins de 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tally.so/r/w5POJQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                Devis gratuit
              </a>
              <a
                href="https://wa.me/32472303701"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 