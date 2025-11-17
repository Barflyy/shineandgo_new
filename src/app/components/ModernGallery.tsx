"use client"

import Image from "next/image"
import { useState } from "react"
import { X, Sparkles } from "lucide-react"

export default function ModernGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const transformations = [
    {
      before: "/transformations/optimized/webp/avant01.webp",
      after: "/transformations/optimized/webp/apres01.webp",
      title: "Intérieur complet",
      type: "SUV Premium"
    },
    {
      before: "/transformations/optimized/webp/avant02.webp",
      after: "/transformations/optimized/webp/apres02.webp",
      title: "Extérieur showroom",
      type: "Berline Sport"
    }
  ]

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-b from-dark-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Transformations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4 md:mb-6 px-2">
            Des résultats qui
            <span className="block mt-1 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              parlent d'eux-mêmes
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-dark-600 max-w-2xl mx-auto px-4">
            Chaque véhicule retrouve son éclat d'origine. Voyez la différence par vous-même.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(idx)}
            >
              <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-200">
                {/* Before/After split view */}
                <div className="relative w-full h-full">
                  {/* After (base) */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.after}
                      alt={`${item.title} - Après`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Before (reveal on hover) */}
                  <div className="absolute inset-0 transition-all duration-500 group-hover:clip-path-none" style={{
                    clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)'
                  }}>
                    <Image
                      src={item.before}
                      alt={`${item.title} - Avant`}
                      fill
                      className="object-cover grayscale-[30%]"
                    />
                  </div>

                  {/* Labels */}
                  <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl bg-dark-900/80 backdrop-blur-xl text-white text-xs sm:text-sm font-semibold">
                    <X className="w-3 h-3 sm:w-4 sm:h-4 inline mr-0.5 sm:mr-1" />
                    Avant
                  </div>
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl bg-emerald-500/90 backdrop-blur-xl text-white text-xs sm:text-sm font-semibold">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 inline mr-0.5 sm:mr-1" />
                    Après
                  </div>

                  {/* Center divider */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-white shadow-lg -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-dark-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-dark-900/90 to-transparent">
                    <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">{item.title}</h3>
                    <p className="text-white/70 text-xs sm:text-sm">{item.type}</p>
                  </div>
                </div>

                {/* Hover instruction */}
                <div className="absolute inset-x-0 bottom-14 sm:bottom-16 md:bottom-20 text-center opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 backdrop-blur-xl text-dark-900 text-xs sm:text-sm font-medium shadow-lg">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Cliquez pour agrandir</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
          {[
            { value: "100%", label: "Satisfaction clients" },
            { value: "90min", label: "Temps moyen" },
            { value: "30+", label: "Ce mois-ci" },
            { value: "4.9/5", label: "Note moyenne" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-dark-600 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox (simplified) */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors touch-manipulation"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="max-w-6xl w-full">
            <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src={transformations[selectedImage].after}
                alt="Transformation"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

