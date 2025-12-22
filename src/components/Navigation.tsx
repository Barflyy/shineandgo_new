'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [navVisible, setNavVisible] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setNavVisible(false)
            } else {
                setNavVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <nav role="navigation" aria-label="Navigation principale" className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-in-out ${scrolled ? 'py-3 shadow-sm' : 'py-5'
            } ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
                    Shine<span className="text-blue-600">&</span>Go
                </Link>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
                        <Link href="/#tarifs" className="hover:text-blue-600 transition-colors" aria-label="Voir nos tarifs">Tarifs</Link>
                        <Link href="/#services" className="hover:text-blue-600 transition-colors" aria-label="Découvrir nos services">Services</Link>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors" aria-label="Lire notre blog">Blog</Link>
                        <Link href="/#faq" className="hover:text-blue-600 transition-colors" aria-label="Questions fréquentes">FAQ</Link>
                    </div>
                    <a
                        href="tel:+32472303701"
                        className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
                        aria-label="Appeler Shine&Go au 0472 30 37 01"
                    >
                        0472 30 37 01
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <a
                        href="tel:+32472303701"
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full"
                    >
                        Appeler
                    </a>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-fade-in-up">
                    <Link href="/#tarifs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50">Tarifs</Link>
                    <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50">Services</Link>
                    <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50">Blog</Link>
                    <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50">FAQ</Link>
                    <a href="https://wa.me/32472303701" className="mt-2 w-full py-3 bg-gray-900 text-white text-center rounded-xl font-medium">
                        Réserver par WhatsApp
                    </a>
                </div>
            )}
        </nav>
    )
}
