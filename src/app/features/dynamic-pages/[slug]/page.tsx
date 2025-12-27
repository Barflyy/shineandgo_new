'use client';

import { useEffect, useState, use } from 'react';

interface PageData {
  title: string;
  description: string;
  keywords: string;
  hero: {
    rating: string;
    ratingText: string;
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaIcon: string;
    features: string[];
  };
  sections: Array<{
    type: string;
    title: string;
    description: string;
    services?: Array<{
      name: string;
      description: string;
      icon: string;
    }>;
    pricing?: Array<{
      type: string;
      price: string;
      duration: string;
    }>;
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  }>;
  content: string;
}

export default function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPageData() {
      try {
        console.log('Chargement de la page:', slug);
        const apiUrl = `/api/pages/${slug}`;
        console.log('URL de l\'API:', apiUrl);
        
        const response = await fetch(apiUrl);
        console.log('Status de la réponse:', response.status);
        
        if (!response.ok) {
          console.error('Erreur HTTP:', response.status, response.statusText);
          if (response.status === 404) {
            setError('Page non trouvée');
          } else {
            setError('Erreur lors du chargement de la page');
          }
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log('Données reçues:', data);
        
        // Validation des données
        if (!data || !data.hero) {
          console.error('Données invalides:', data);
          setError('Structure de données invalide');
          setLoading(false);
          return;
        }

        setPageData(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement:', error);
        setError('Erreur lors du chargement de la page');
        setLoading(false);
      }
    }
    
    loadPageData();
  }, [slug]);

  const handleBooking = () => {
    window.open('https://calendly.com/nathangodfroid/lavage-voiture-shine-go', '_blank', 'noopener,noreferrer');
  };

  // Affichage de chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Affichage d'erreur
  if (error || !pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Page non trouvée</h1>
          <p className="text-slate-600">
            {error || "La page que vous recherchez n'existe pas."}
          </p>
        </div>
      </div>
    );
  }

  // Validation finale avant le rendu
  if (!pageData.hero) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Erreur de données</h1>
          <p className="text-slate-600">
            La structure des données de la page est invalide.
          </p>
        </div>
      </div>
    );
  }

  // Rendu de la page
  return (
    <div className="min-h-screen">
      {/* Header simplifié */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-blue-600">Shine&Go</div>
            <button 
              onClick={handleBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Réserver
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-white w-full">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
          
          {/* Container principal */}
          <div className="relative z-10 flex flex-col justify-center min-h-screen w-full max-w-none px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
            {/* Contenu centré */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  
                  {/* Badge Rating */}
                  <div className="inline-flex items-center bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200 mb-4 sm:mb-6">
                    <div className="flex items-center mr-3">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-slate-700 font-semibold text-sm sm:text-base">{pageData.hero.rating}</span>
                    </div>
                    <span className="text-slate-700 font-medium text-xs sm:text-sm">
                      {pageData.hero.ratingText}
                    </span>
                  </div>

                  {/* Badge Premium */}
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-green-600/10 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-600/20 mb-4 sm:mb-6">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-blue-600 font-medium text-sm">{pageData.hero.badge}</span>
                  </div>

                  {/* H1 + Punchline */}
                  <div className="space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-slate-900">
                      <span className="block">{pageData.hero.title}</span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-semibold">
                      {pageData.hero.subtitle}
                    </p>
                  </div>

                  {/* CTA Principal */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 w-full max-w-lg mx-auto">
                    <button 
                      onClick={handleBooking}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0"
                    >
                      <span className="text-lg">{pageData.hero.ctaIcon}</span>
                      <span className="truncate">{pageData.hero.ctaText}</span>
                    </button>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    {pageData.hero.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-slate-600">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections dynamiques */}
        {pageData.sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="w-full py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                  {section.description}
                </p>
              </div>

              {/* Services Section */}
              {section.type === 'services' && section.services && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg relative z-10" >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                      <p className="text-slate-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Pricing Section */}
              {section.type === 'pricing' && section.pricing && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pricing.map((price, priceIndex) => (
                    <div key={priceIndex} className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg text-center relative z-10" >
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{price.type}</h3>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{price.price}</div>
                      <p className="text-slate-600">{price.duration}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* FAQ Section */}
              {section.type === 'faq' && section.faqs && (
                <div className="max-w-4xl mx-auto space-y-4">
                  {section.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg relative z-10" >
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Content Section */}
        <section className="w-full py-12 sm:py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer simplifié */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Shine&Go. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
} 