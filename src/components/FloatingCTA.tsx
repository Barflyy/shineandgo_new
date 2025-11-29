'use client'

import { Phone, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 100px
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden animate-fade-in-up">
            <div className="flex gap-3">
                <a
                    href="tel:+32472303701"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl active:bg-gray-50 transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    Appeler
                </a>
                <a
                    href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 text-white font-bold rounded-xl active:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
                >
                    <Calendar className="w-5 h-5" />
                    Réserver
                </a>
            </div>
        </div>
    )
}
