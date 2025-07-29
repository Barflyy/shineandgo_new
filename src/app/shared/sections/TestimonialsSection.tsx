interface TestimonialsSectionProps {
  serviceType?: 'interieur' | 'exterieur' | 'complet' | 'home';
}

export default function TestimonialsSection({ serviceType = 'home' }: TestimonialsSectionProps) {
  // Avis pour le nettoyage intérieur
  const interieurTestimonials = [
    {
      stars: "★★★★★",
      time: "Il y a 2 semaines",
      text: "Service exceptionnel ! L'intérieur de ma voiture est impeccable, plus d'odeurs et tout est désinfecté. Professionnels et ponctuels, je recommande à 100%.",
      name: "Claire M.",
      city: "Liège",
      initial: "C",
      color: "blue"
    },
    {
      stars: "★★★★★",
      time: "Il y a 1 mois",
      text: "Très pratique, ils se déplacent chez vous et le résultat est incroyable. L'aspiration était parfaite et les plastiques brillent comme neufs !",
      name: "Marc D.",
      city: "Verviers",
      initial: "M",
      color: "green"
    },
    {
      stars: "★★★★★",
      time: "Il y a 3 semaines",
      text: "Parfait pour préparer la vente de ma voiture. L'intérieur était négligé, maintenant il a l'air d'un véhicule de showroom. Service mobile très pratique.",
      name: "Isabelle R.",
      city: "Herve",
      initial: "I",
      color: "purple"
    },
    {
      stars: "★★★★★",
      time: "Il y a 2 mois",
      text: "Équipe ponctuelle et professionnelle. Mon break familial était plein de poussières et de poils d'animaux. Maintenant c'est propre et frais. Je recommande !",
      name: "François L.",
      city: "Soumagne",
      initial: "F",
      color: "orange"
    },
    {
      stars: "★★★★★",
      time: "Il y a 1 semaine",
      text: "Résultat impressionnant sur mon SUV. L'intérieur était sale avec des taches, maintenant tout est impeccable. Très satisfait !",
      name: "Nathalie B.",
      city: "Battice",
      initial: "N",
      color: "red"
    },
    {
      stars: "★★★★★",
      time: "Il y a 3 jours",
      text: "Service rapide et efficace. Mon utilitaire était plein de déchets de chantier. Maintenant l'habitacle est comme neuf. Excellent rapport qualité-prix.",
      name: "David P.",
      city: "Spa",
      initial: "D",
      color: "indigo"
    }
  ];

  // Avis pour le nettoyage extérieur
  const exterieurTestimonials = [
    {
      stars: "★★★★★",
      time: "Il y a 2 semaines",
      text: "Service exceptionnel ! Ma voiture brille comme neuve après leur passage. Professionnels et ponctuels, je recommande à 100%.",
      name: "Marie D.",
      city: "Liège",
      initial: "M",
      color: "blue"
    },
    {
      stars: "★★★★★",
      time: "Il y a 1 mois",
      text: "Très pratique, ils se déplacent chez vous et le résultat est incroyable. Mes jantes n'avaient jamais été aussi propres !",
      name: "Pierre L.",
      city: "Verviers",
      initial: "P",
      color: "green"
    },
    {
      stars: "★★★★★",
      time: "Il y a 3 semaines",
      text: "Parfait pour préparer la vente de ma voiture. L'extérieur était négligé, maintenant il a l'air d'un véhicule de showroom. Service mobile très pratique.",
      name: "Sophie M.",
      city: "Herve",
      initial: "S",
      color: "purple"
    },
    {
      stars: "★★★★★",
      time: "Il y a 2 mois",
      text: "Équipe ponctuelle et professionnelle. Mon break familial était plein de traces d'insectes. Maintenant c'est propre et brillant. Je recommande !",
      name: "Laurent B.",
      city: "Soumagne",
      initial: "L",
      color: "orange"
    },
    {
      stars: "★★★★★",
      time: "Il y a 1 semaine",
      text: "Résultat impressionnant sur mon SUV. La protection hydrophobe fonctionne parfaitement, la pluie glisse sur la carrosserie. Très satisfait !",
      name: "Thomas R.",
      city: "Battice",
      initial: "T",
      color: "red"
    },
    {
      stars: "★★★★★",
      time: "Il y a 3 jours",
      text: "Service rapide et efficace. Mon utilitaire était couvert de boue après des travaux. Maintenant il brille comme au premier jour. Excellent rapport qualité-prix.",
      name: "Antoine M.",
      city: "Spa",
      initial: "A",
      color: "indigo"
    }
  ];

  // Avis pour le nettoyage complet
  const completTestimonials = [
    {
      stars: "★★★★★",
      time: "Il y a 2 semaines",
      text: "Mon SUV n'avait jamais été aussi propre. L'intérieur est impeccable et l'extérieur brille comme au premier jour. Service super pratique et pro !",
      name: "Julie K.",
      city: "Liège",
      initial: "J",
      color: "blue"
    },
    {
      stars: "★★★★★",
      time: "Il y a 1 mois",
      text: "Nettoyage complet parfait, ponctuels et très soignés. L'intérieur et l'extérieur sont comme neufs. Je recommande sans hésiter.",
      name: "Alexandre T.",
      city: "Verviers",
      initial: "A",
      color: "green"
    },
    {
      stars: "★★★★★",
      time: "Il y a 3 semaines",
      text: "Parfait pour préparer la vente de ma voiture. Intérieur et extérieur étaient négligés, maintenant c'est un véhicule de showroom. Service mobile très pratique.",
      name: "Caroline F.",
      city: "Herve",
      initial: "C",
      color: "purple"
    },
    {
      stars: "★★★★★",
      time: "Il y a 2 mois",
      text: "Équipe ponctuelle et professionnelle. Mon break familial était sale partout. Maintenant c'est propre et brillant de partout. Je recommande !",
      name: "Guillaume H.",
      city: "Soumagne",
      initial: "G",
      color: "orange"
    },
    {
      stars: "★★★★★",
      time: "Il y a 1 semaine",
      text: "Résultat impressionnant sur mon SUV. Intérieur frais et désinfecté, extérieur brillant avec protection hydrophobe. Très satisfait !",
      name: "Émilie V.",
      city: "Battice",
      initial: "É",
      color: "red"
    },
    {
      stars: "★★★★★",
      time: "Il y a 3 jours",
      text: "Service rapide et efficace. Mon utilitaire était sale partout après des travaux. Maintenant il est comme neuf. Excellent rapport qualité-prix.",
      name: "Raphaël S.",
      city: "Spa",
      initial: "R",
      color: "indigo"
    }
  ];

  // Avis pour la page d'accueil (mélange)
  const homeTestimonials = [
    {
      stars: "★★★★★",
      time: "Il y a 2 semaines",
      text: "Service exceptionnel ! Ma voiture brille comme neuve après leur passage. Professionnels et ponctuels, je recommande à 100%.",
      name: "Marie D.",
      city: "Liège",
      initial: "M",
      color: "blue"
    },
    {
      stars: "★★★★★",
      time: "Il y a 1 mois",
      text: "Très pratique, ils se déplacent chez vous et le résultat est incroyable. Mes jantes n'avaient jamais été aussi propres !",
      name: "Pierre L.",
      city: "Verviers",
      initial: "P",
      color: "green"
    },
    {
      stars: "★★★★★",
      time: "Il y a 3 semaines",
      text: "Parfait pour préparer la vente de ma voiture. L'extérieur était négligé, maintenant il a l'air d'un véhicule de showroom. Service mobile très pratique.",
      name: "Sophie M.",
      city: "Herve",
      initial: "S",
      color: "purple"
    },
    {
      stars: "★★★★★",
      time: "Il y a 2 mois",
      text: "Équipe ponctuelle et professionnelle. Mon break familial était plein de traces d'insectes. Maintenant c'est propre et brillant. Je recommande !",
      name: "Laurent B.",
      city: "Soumagne",
      initial: "L",
      color: "orange"
    },
    {
      stars: "★★★★★",
      time: "Il y a 1 semaine",
      text: "Résultat impressionnant sur mon SUV. La protection hydrophobe fonctionne parfaitement, la pluie glisse sur la carrosserie. Très satisfait !",
      name: "Thomas R.",
      city: "Battice",
      initial: "T",
      color: "red"
    },
    {
      stars: "★★★★★",
      time: "Il y a 3 jours",
      text: "Service rapide et efficace. Mon utilitaire était couvert de boue après des travaux. Maintenant il brille comme au premier jour. Excellent rapport qualité-prix.",
      name: "Antoine M.",
      city: "Spa",
      initial: "A",
      color: "indigo"
    }
  ];

  // Sélection des avis selon le service
  const getTestimonials = () => {
    switch (serviceType) {
      case 'interieur':
        return interieurTestimonials;
      case 'exterieur':
        return exterieurTestimonials;
      case 'complet':
        return completTestimonials;
      default:
        return homeTestimonials;
    }
  };

  const getServiceDescription = () => {
    switch (serviceType) {
      case 'interieur':
        return "Découvrez ce que nos clients disent de notre service de nettoyage intérieur.";
      case 'exterieur':
        return "Découvrez ce que nos clients disent de notre service de nettoyage extérieur.";
      case 'complet':
        return "Découvrez ce que nos clients disent de notre service de nettoyage complet.";
      default:
        return "Découvrez ce que nos clients disent de nos services de nettoyage.";
    }
  };

  const testimonials = getTestimonials();

  return (
    <section id="testimonials-section" className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Avis clients
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            {getServiceDescription()}
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="ml-2 text-lg font-semibold text-slate-900">4.9</span>
              <span className="ml-1 text-slate-600">/5 sur Google</span>
            </div>
          </div>
        </div>

        {/* Avis clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span>{testimonial.stars}</span>
                </div>
                <span className="ml-2 text-sm text-slate-500">{testimonial.time}</span>
              </div>
              <p className="text-slate-700 mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className={`w-10 h-10 bg-${testimonial.color}-100 rounded-full flex items-center justify-center mr-3`}>
                  <span className={`text-${testimonial.color}-600 font-semibold`}>{testimonial.initial}</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-700 mb-4">
            📲 Rejoignez nos 500+ clients satisfaits – Recevez votre devis gratuit aujourd'hui.
          </p>
          <a
            href="https://wa.me/32472303701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl"
          >
            📱 Recevoir mon devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
} 