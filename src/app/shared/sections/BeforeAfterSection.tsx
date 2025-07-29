export default function BeforeAfterSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
            Avant/Après : La transformation
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            Chaque véhicule est traité avec le même soin, quel que soit son état initial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 mb-16">
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">🚗 AVANT</h3>
              <p className="text-slate-600">Carrosserie terne, traces d'insectes, jantes encrassées</p>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-xl">•</span>
                <span className="text-slate-700">Carrosserie terne et sans éclat</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-xl">•</span>
                <span className="text-slate-700">Traces d'insectes collées</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-xl">•</span>
                <span className="text-slate-700">Jantes encrassées</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-xl">•</span>
                <span className="text-slate-700">Vitres sales et ternes</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 text-xl">•</span>
                <span className="text-slate-700">Résidus de route</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">✨ APRÈS</h3>
              <p className="text-slate-600">Peinture brillante, vitres nettes, jantes impeccables</p>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-slate-700">Peinture brillante et éclatante</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-slate-700">Vitres nettes et transparentes</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-slate-700">Jantes impeccables</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-slate-700">Protection hydrophobe appliquée</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-slate-700">Aspect showroom garanti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 