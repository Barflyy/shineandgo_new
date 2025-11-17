interface ServiceAreasSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ServiceAreasSection({
  title = "Zones desservies",
  subtitle = "Service mobile à domicile dans un rayon de 25 km autour de Herve. Déplacement gratuit, puis 0,60 €/km A/R.",
  className = ""
}: ServiceAreasSectionProps) {
  const mainCities = [
    "Liège", "Verviers", "Herve", "Soumagne", "Battice", 
    "Spa", "Chaudfontaine", "Fléron", "Aubel", "Welkenraedt", "Pepinster"
  ];

  const postalCodes = [
    "4650 - Herve", "4000 - Liège", "4800 - Verviers", "4630 - Soumagne",
    "4651 - Battice", "4900 - Spa", "4050 - Chaudfontaine", "4623 - Fléron",
    "4880 - Aubel", "4840 - Welkenraedt", "4860 - Pepinster"
  ];

  return (
    <section className={`w-full py-12 md:py-16 lg:py-20 container-mobile ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative z-10" >
            <div className="h-full flex flex-col p-4 sm:p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Villes principales</h3>
              <ul className="text-gray-600 space-y-2 flex-grow">
                {mainCities.map((city, index) => (
                  <li key={index}>• {city}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative z-10" >
            <div className="h-full flex flex-col p-4 sm:p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Codes postaux</h3>
              <ul className="text-gray-600 space-y-2 flex-grow">
                {postalCodes.map((postalCode, index) => (
                  <li key={index}>• {postalCode}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative z-10" >
            <div className="h-full flex flex-col p-4 sm:p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service mobile</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Intervention à domicile en 90 min selon la formule choisie.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Déplacement gratuit :</strong> 25 km autour de Herve<br/>
                  <strong>Au-delà :</strong> 0,60 €/km aller-retour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 