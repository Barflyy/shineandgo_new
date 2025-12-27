'use client'

import { Phone, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <>
            {/* Mobile Bottom Bar */}
            <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] md:hidden transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className="flex gap-3">
                    <a
                        href="tel:+32472303701"
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-2xl active:scale-95 transition-all"
                    >
                        <Phone className="w-5 h-5" />
                        Appeler
                    </a>
                    <a
                        href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un lavage"
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white font-bold rounded-2xl active:scale-95 transition-all shadow-lg shadow-blue-600/30 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <Calendar className="w-5 h-5" />
                        Réserver
                    </a>
                </div>
            </div>

            {/* Desktop Floating Button */}
            <div className={`fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-4 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <a
                    href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un lavage"
                    className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-100 text-gray-900 font-bold rounded-full shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-1 transition-all group"
                >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/40 group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <span>Réserver un lavage</span>
                    <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </a>
            </div>
        </>
    )
}
