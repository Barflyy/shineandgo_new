'use client'

import { useEffect, useState } from 'react'

interface Testimonial {
  _id: string
  clientName: string
  city: string
  service: string
  content: string
  rating: number
  date: string
}

// Données statiques pour les témoignages
const staticTestimonials: Testimonial[] = [
  {
    _id: '1',
    clientName: 'Marie Dubois',
    city: 'Liège',
    service: 'Lavage complet',
    content: 'Service exceptionnel ! Ma voiture n\'a jamais été aussi propre. L\'équipe est professionnelle et ponctuelle.',
    rating: 5,
    date: '2024-01-15'
  },
  {
    _id: '2',
    clientName: 'Pierre Martin',
    city: 'Verviers',
    service: 'Lavage extérieur',
    content: 'Très satisfait du résultat. Les produits utilisés sont de qualité et le service est rapide.',
    rating: 5,
    date: '2024-01-10'
  },
  {
    _id: '3',
    clientName: 'Sophie Lambert',
    city: 'Spa',
    service: 'Lavage intérieur',
    content: 'Parfait ! L\'intérieur de ma voiture est impeccable. Je recommande vivement.',
    rating: 5,
    date: '2024-01-08'
  },
  {
    _id: '4',
    clientName: 'Jean Dupont',
    city: 'Huy',
    service: 'Pack complet',
    content: 'Service de qualité professionnelle. Ma voiture brille comme au premier jour !',
    rating: 5,
    date: '2024-01-05'
  },
  {
    _id: '5',
    clientName: 'Claire Moreau',
    city: 'Herve',
    service: 'Lavage extérieur',
    content: 'Équipe très professionnelle. Résultat au-delà de mes attentes. Je recommande !',
    rating: 5,
    date: '2024-01-03'
  },
  {
    _id: '6',
    clientName: 'Thomas Bernard',
    city: 'Liège',
    service: 'Lavage complet',
    content: 'Excellent service ! Rapide, efficace et résultat showroom. Je reviendrai !',
    rating: 5,
    date: '2024-01-01'
  }
]

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuler un chargement
    const timer = setTimeout(() => {
      setTestimonials(staticTestimonials)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des témoignages...</p>
          </div>
        </div>
      </div>
    )
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Témoignages de nos clients
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-white rounded-lg shadow-lg overflow-hidden relative z-10" style={{backgroundColor: 'white', opacity: 1}}>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.city} • {testimonial.service}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                
                <p className="text-xs text-gray-500 mt-4">
                  {new Date(testimonial.date).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 