export default function FAQExteriorSection() {
  const faqs = [
    {
      question: "Quel est le tarif d'un nettoyage extérieur voiture ?",
      answer: "Nos tarifs varient selon le type de véhicule : Citadine à partir de 49€, Berline à partir de 54€, Break à partir de 59€, SUV/4x4 à partir de 64€, Monospace à partir de 69€, Utilitaire à partir de 74€. Le prix final dépend aussi du niveau de saleté de votre véhicule."
    },
    {
      question: "Faites-vous le lavage voiture intérieur extérieur à domicile ?",
      answer: "Oui, nous proposons le lavage complet intérieur et extérieur à domicile. Vous pouvez choisir le nettoyage extérieur seul ou le service complet selon vos besoins."
    },
    {
      question: "Utilisez-vous un lavage à la main ou au rouleau ?",
      answer: "Nous utilisons exclusivement le lavage à la main avec des produits professionnels. Cette méthode est plus douce pour votre carrosserie et évite les micro-rayures que peuvent causer les rouleaux automatiques."
    },
    {
      question: "Proposez-vous des protections longue durée (cire, céramique) ?",
      answer: "Oui, nous proposons des protections longue durée comme la cire et les revêtements céramiques. Ces options sont disponibles en supplément et offrent une protection durable contre les éléments extérieurs."
    },
    {
      question: "Combien de temps dure une intervention ?",
      answer: "Une intervention de nettoyage extérieur dure entre 30 et 45 minutes selon la taille du véhicule et son niveau de saleté. Nous nous adaptons à votre planning."
    },
    {
      question: "Intervenez-vous dans toute la Wallonie ?",
      answer: "Oui, nous intervenons dans toute la Wallonie avec un déplacement gratuit jusqu'à 25 km. Au-delà, un supplément de déplacement peut s'appliquer selon la distance."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              FAQ – Nettoyage extérieur voiture
            </h2>
            <p className="text-lg text-gray-600">
              Réponses aux questions les plus fréquentes sur notre service de nettoyage extérieur
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vous avez d'autres questions ?
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