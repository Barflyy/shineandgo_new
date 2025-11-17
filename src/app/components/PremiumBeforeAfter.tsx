"use client"

import Image from "next/image"
import { ArrowRight, X, Sparkles } from "lucide-react"
import { useState } from "react"

export default function PremiumBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'click') return
    
    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    const position = ((x - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Résultat garanti</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Transformation
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              avant / après
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Redonnez à votre véhicule son éclat d'origine avec un résultat visible.
          </p>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="max-w-5xl mx-auto mb-16">
          <div 
            className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border-2 border-slate-200"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleMove}
            onClick={handleMove}
          >
            {/* After Image (Base) */}
            <div className="absolute inset-0">
              <Image
                src="/transformations/optimized/webp/apres01.webp"
                alt="Après nettoyage - Résultat showroom"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 right-6 backdrop-blur-xl bg-emerald-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Après</span>
              </div>
            </div>

            {/* Before Image (Sliding) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/transformations/optimized/webp/avant01.webp"
                alt="Avant nettoyage"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 left-6 backdrop-blur-xl bg-slate-900/90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <X className="w-4 h-4" />
                <span>Avant</span>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-slate-200">
                <ArrowRight className="w-5 h-5 text-slate-700 -ml-1" />
                <ArrowRight className="w-5 h-5 text-slate-700 rotate-180 -mr-1" />
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-slate-500 mt-4">
            ← Glissez le curseur pour comparer →
          </p>
        </div>

        {/* Side by Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Before Card */}
          <div className="group relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold shadow-lg">
                  <X className="w-4 h-4" />
                  <span>Avant</span>
                </div>
              </div>
              
              <div className="relative aspect-[4/3]">
                <Image
                  src="/transformations/optimized/webp/avant02.webp"
                  alt="Avant nettoyage détail"
                  fill
                  className="object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-6 bg-white">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Traces d'usage et saletés incrustées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Voile terne sur la carrosserie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Intérieur poussiéreux et négligé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="group relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  <span>Après</span>
                </div>
              </div>
              
              <div className="relative aspect-[4/3]">
                <Image
                  src="/transformations/optimized/webp/apres02.webp"
                  alt="Après nettoyage détail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-6 bg-white">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-medium">Finition showroom garantie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-medium">Protection hydrophobe appliquée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-medium">Intérieur impeccable et assaini</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

