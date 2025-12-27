'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400)
        }

        window.addEventListener('scroll', toggleVisibility, { passive: true })
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 left-4 md:left-8 z-40 w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            aria-label="Retour en haut de page"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    )
}
