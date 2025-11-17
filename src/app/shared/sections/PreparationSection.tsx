export default function PreparationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Préparation de votre intervention
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quelques points à prévoir pour une intervention optimale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Accès à l'eau
              </h3>
              <p className="text-gray-600">
                Prévoir un accès à l'eau et à l'électricité pour notre matériel professionnel
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Objets personnels
              </h3>
              <p className="text-gray-600">
                Retirer les objets personnels extérieurs (porte-vélo, aimants, etc.)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🌧️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Conditions météo
              </h3>
              <p className="text-gray-600">
                Intervention possible même par temps de pluie (abri souhaité)
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Informations importantes
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-xl">ℹ️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Prévoir un accès à l'eau et à l'électricité</h4>
                  <p className="text-gray-600 text-sm">Notre matériel professionnel nécessite un accès à l'eau et à l'électricité pour fonctionner de manière optimale.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-xl">ℹ️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Retirer les objets personnels extérieurs</h4>
                  <p className="text-gray-600 text-sm">Porte-vélo, aimants, autocollants, etc. doivent être retirés avant notre intervention pour un nettoyage optimal.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-xl">ℹ️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Intervention possible même par temps de pluie</h4>
                  <p className="text-gray-600 text-sm">Un abri est souhaité mais nous pouvons intervenir même par temps de pluie grâce à notre équipement adapté.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 