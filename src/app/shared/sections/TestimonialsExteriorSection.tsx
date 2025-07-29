export default function TestimonialsExteriorSection() {
  return (
    <section id="testimonials-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Avis clients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ils nous font confiance
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
                <span className="ml-2 text-lg font-semibold text-gray-900">4.9</span>
                <span className="ml-1 text-gray-600">/5 sur Google</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-8 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">Il y a 1 semaine</span>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "Service exceptionnel ! Ma voiture brille comme neuve après leur passage. Professionnels et ponctuels, je recommande à 100%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold text-lg">M</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Marie D.</div>
                  <div className="text-gray-500">Liège</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-8 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">Il y a 2 semaines</span>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "Très pratique, ils se déplacent chez vous et le résultat est incroyable. Mes jantes n'avaient jamais été aussi propres !"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold text-lg">P</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Pierre L.</div>
                  <div className="text-gray-500">Verviers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              📲 Rejoignez nos 500+ clients satisfaits – Recevez votre devis gratuit aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/32472303701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                📱 WhatsApp
              </a>
              <a
                href="https://tally.so/r/w5POJQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                📋 Formulaire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 