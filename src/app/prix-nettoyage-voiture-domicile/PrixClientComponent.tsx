'use client';

export default function PrixClientComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-4">
            Prix Nettoyage Voiture Premium
          </h1>
          <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto">
            Tarifs 2025 transparents · Tout compris · Zéro surprise
          </p>
        </div>

        {/* Tableaux Prix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          
          {/* Intérieur Premium */}
          <div className="bg-white rounded-2xl border-2 border-dark-200 shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold mb-6 text-dark-900">Intérieur Premium</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">Citadine/Compacte</span>
                <span className="font-bold text-xl text-dark-900">65€</span>
              </div>
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">Berline</span>
                <span className="font-bold text-xl text-dark-900">75€</span>
              </div>
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">Break</span>
                <span className="font-bold text-xl text-dark-900">85€</span>
              </div>
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">SUV/4x4</span>
                <span className="font-bold text-xl text-dark-900">95€</span>
              </div>
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">Monospace</span>
                <span className="font-bold text-xl text-dark-900">110€</span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="text-dark-700">Utilitaire</span>
                <span className="font-bold text-xl text-dark-900">125€</span>
              </div>
            </div>
            <p className="text-sm text-dark-600 mt-4">45-60 min selon véhicule</p>
            <a
              href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage intérieur premium"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all"
            >
              Réserver
            </a>
          </div>

          {/* Extérieur Showroom */}
          <div className="bg-white rounded-2xl border-2 border-dark-200 shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold mb-6 text-dark-900">Extérieur Showroom</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">Citadine/Compacte</span>
                <span className="font-bold text-xl text-dark-900">85€</span>
              </div>
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">Berline</span>
                <span className="font-bold text-xl text-dark-900">95€</span>
              </div>
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">Break</span>
                <span className="font-bold text-xl text-dark-900">105€</span>
              </div>
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">SUV/4x4</span>
                <span className="font-bold text-xl text-dark-900">115€</span>
              </div>
              <div className="flex justify-between items-center border-b border-dark-200 pb-3">
                <span className="text-dark-700">Monospace</span>
                <span className="font-bold text-xl text-dark-900">130€</span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="text-dark-700">Utilitaire</span>
                <span className="font-bold text-xl text-dark-900">145€</span>
              </div>
            </div>
            <p className="text-sm text-dark-600 mt-4">50-70 min selon véhicule</p>
            <a
              href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage extérieur showroom"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all"
            >
              Réserver
            </a>
          </div>

          {/* Formule Complète - POPULAIRE */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl border-2 border-orange-400 shadow-2xl p-6 md:p-8 relative hover:shadow-3xl transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              Le plus populaire
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-4">Formule Complète</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center border-b border-white/30 pb-3">
                <span>Citadine/Compacte</span>
                <span className="font-bold text-xl">120€</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/30 pb-3">
                <span>Berline</span>
                <span className="font-bold text-xl">140€</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/30 pb-3">
                <span>Break</span>
                <span className="font-bold text-xl">160€</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/30 pb-3">
                <span>SUV/4x4</span>
                <span className="font-bold text-xl">170€</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/30 pb-3">
                <span>Monospace</span>
                <span className="font-bold text-xl">190€</span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span>Utilitaire</span>
                <span className="font-bold text-xl">220€</span>
              </div>
            </div>
            <p className="text-sm text-white/90 mt-4">90-120 min selon véhicule</p>
            <a
              href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver la formule complète"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-orange-600 font-semibold hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all"
            >
              Réserver
            </a>
          </div>
        </div>

        {/* Ce qui est inclus */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-dark-200 p-8 md:p-12 mb-16 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-dark-900">
            Prix tout compris · Zéro surprise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold mb-2 text-dark-900">Déplacement</h3>
              <p className="text-sm text-dark-600">Gratuit 25km autour Herve</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold mb-2 text-dark-900">Produits Premium</h3>
              <p className="text-sm text-dark-600">Koch-Chemie & CarPro</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold mb-2 text-dark-900">Garantie 7j</h3>
              <p className="text-sm text-dark-600">Satisfaction garantie</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold mb-2 text-dark-900">Service Mobile</h3>
              <p className="text-sm text-dark-600">On vient chez vous</p>
            </div>
          </div>
        </div>

        {/* Comparaison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-dark-900">
            Pourquoi nos tarifs ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border-2 border-dark-200 shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-dark-200">
                  <th className="p-4 text-left text-sm font-bold text-dark-900">Critère</th>
                  <th className="p-4 text-center text-sm font-bold text-dark-900">Shine&Go</th>
                  <th className="p-4 text-center text-sm font-bold text-dark-900">Station Auto</th>
                  <th className="p-4 text-center text-sm font-bold text-dark-900">Garagiste</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dark-200">
                  <td className="p-4 font-bold text-dark-900">Prix moyen</td>
                  <td className="p-4 text-center text-blue-600 font-bold">65-170€</td>
                  <td className="p-4 text-center text-dark-700">15-30€</td>
                  <td className="p-4 text-center text-dark-700">120-250€</td>
                </tr>
                <tr className="border-b border-dark-200">
                  <td className="p-4 font-bold text-dark-900">Qualité</td>
                  <td className="p-4 text-center">✅ Premium pro</td>
                  <td className="p-4 text-center">⚠️ Basique</td>
                  <td className="p-4 text-center">✅ Premium</td>
                </tr>
                <tr className="border-b border-dark-200">
                  <td className="p-4 font-bold text-dark-900">Temps perdu</td>
                  <td className="p-4 text-center">✅ 0 min</td>
                  <td className="p-4 text-center text-dark-700">30-60 min</td>
                  <td className="p-4 text-center">⚠️ 3-5h</td>
                </tr>
                <tr className="border-b border-dark-200">
                  <td className="p-4 font-bold text-dark-900">Produits</td>
                  <td className="p-4 text-center">✅ Koch-Chemie</td>
                  <td className="p-4 text-center">⚠️ Industriels</td>
                  <td className="p-4 text-center text-dark-700">Variable</td>
                </tr>
                <tr className="border-b border-dark-200">
                  <td className="p-4 font-bold text-dark-900">Risque rayures</td>
                  <td className="p-4 text-center">✅ Aucun</td>
                  <td className="p-4 text-center">❌ Élevé</td>
                  <td className="p-4 text-center">✅ Aucun</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt pour un nettoyage premium ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Devis gratuit en 2 minutes sur WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage voiture"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all"
            >
              💬 Devis WhatsApp
            </a>
            <a 
              href="tel:+32472303701"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all"
            >
              📞 0472 30 37 01
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

