export default function ContactCTASection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Prêt à retrouver une voiture comme neuve sans bouger de chez vous ?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            📲 Demandez votre devis gratuit et réservez votre créneau en 2 minutes.
          </p>
        </div>

        {/* Options de contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center relative z-10">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
            <p className="text-slate-600 mb-4">Réponse rapide 7j/7</p>
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Ouvrir WhatsApp
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center relative z-10">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Formulaire en ligne</h3>
            <p className="text-slate-600 mb-4">Devis gratuit en 2 minutes</p>
            <a
              href="https://tally.so/r/w5POJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Devis gratuit
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center relative z-10">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Téléphone</h3>
            <p className="text-slate-600 mb-4">Appel direct</p>
            <a
              href="tel:+32472303701"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Appeler
            </a>
          </div>
        </div>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center relative z-10">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold text-slate-900 mb-2">Rapide</h4>
            <p className="text-sm text-slate-600">Intervention sous 72h</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center relative z-10">
            <div className="text-3xl mb-3">🏠</div>
            <h4 className="font-semibold text-slate-900 mb-2">Mobile</h4>
            <p className="text-sm text-slate-600">Service à domicile</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center relative z-10">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-semibold text-slate-900 mb-2">Gratuit</h4>
            <p className="text-sm text-slate-600">Devis sans engagement</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center relative z-10">
            <div className="text-3xl mb-3">✅</div>
            <h4 className="font-semibold text-slate-900 mb-2">Garanti</h4>
            <p className="text-sm text-slate-600">Satisfaction assurée</p>
          </div>
        </div>

        {/* CTA principal */}
        <div className="text-center">
          <div className="bg-white border border-slate-200 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 md:p-12 max-w-4xl mx-auto relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Commencez dès aujourd'hui
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Plus de 500 clients nous font confiance pour le nettoyage extérieur de leur véhicule. 
              Rejoignez-les et retrouvez une voiture comme neuve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tally.so/r/w5POJQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                📋 Devis gratuit
              </a>
              <a
                href="https://wa.me/32472303701"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center mt-8">
          <p className="text-slate-600 text-sm">
            ⚡ Réponse sous 24h • 🏠 Service mobile • 💰 Devis gratuit • ✅ Satisfaction garantie
          </p>
        </div>
      </div>
    </section>
  );
} 