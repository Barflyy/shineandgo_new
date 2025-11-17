"use client"

import { useState, useEffect } from "react"
import { Clock, Users, Calendar, AlertCircle } from "lucide-react"

export default function UrgencyBanner() {
  const [remainingSlots, setRemainingSlots] = useState(4)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  // Simulate countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
            {/* Alert icon */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center animate-pulse">
                  <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  🔥 Places limitées cette semaine
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  Pour garantir un service de qualité, nous acceptons maximum 8 clients par semaine
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20r%C3%A9server%20une%20place"
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-4 rounded-xl bg-white text-red-600 font-bold text-base md:text-lg hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Réserver maintenant</span>
                </a>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {/* Remaining slots */}
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 border border-white/20">
                  <Users className="w-6 h-6 text-white flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white">{remainingSlots}</div>
                    <div className="text-xs md:text-sm text-white/80">places restantes</div>
                  </div>
                </div>

                {/* Countdown */}
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 border border-white/20">
                  <Clock className="w-6 h-6 text-white flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xl md:text-2xl font-bold text-white font-mono">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-xs md:text-sm text-white/80">avant prochaine dispo</div>
                  </div>
                </div>

                {/* This week */}
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 border border-white/20">
                  <Calendar className="w-6 h-6 text-white flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white">4/8</div>
                    <div className="text-xs md:text-sm text-white/80">réservés cette semaine</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-4 text-center">
              <p className="text-white/80 text-xs md:text-sm">
                ⚡ <span className="font-semibold">Réservation rapide :</span> Réponse en moins de 2h · Confirmation immédiate par WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

