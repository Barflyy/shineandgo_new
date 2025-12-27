'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

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
        <nav role="navigation" aria-label="Navigation principale" className={`fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ease-in-out ${scrolled ? 'py-3 shadow-sm' : 'py-5'
            } ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Shine<span className="text-blue-600">&</span>Go
                </Link>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <Link href="/#tarifs" className="hover:text-blue-600 transition-colors" aria-label="Voir nos tarifs">Tarifs</Link>
                        <Link href="/#services" className="hover:text-blue-600 transition-colors" aria-label="Découvrir nos services">Services</Link>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors" aria-label="Lire notre blog">Blog</Link>
                        <Link href="/#faq" className="hover:text-blue-600 transition-colors" aria-label="Questions fréquentes">FAQ</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeSwitcher />
                        <a
                            href="tel:+32472303701"
                            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
                            aria-label="Appeler Shine&Go au 0472 30 37 01"
                        >
                            0472 30 37 01
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeSwitcher />
                    <a
                        href="tel:+32472303701"
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full"
                    >
                        Appeler
                    </a>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    {/* Menu */}
                    <div className="fixed top-[60px] left-0 right-0 bottom-0 bg-white dark:bg-gray-950 z-50 md:hidden overflow-y-auto">
                        <div className="flex flex-col p-6 space-y-2">
                            <Link
                                href="/#tarifs"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center text-lg font-medium text-gray-900 dark:text-white py-4 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
                            >
                                💰 Tarifs
                            </Link>
                            <Link
                                href="/#services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center text-lg font-medium text-gray-900 dark:text-white py-4 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
                            >
                                ✨ Services
                            </Link>
                            <Link
                                href="/blog"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center text-lg font-medium text-gray-900 dark:text-white py-4 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
                            >
                                📖 Blog
                            </Link>
                            <Link
                                href="/#faq"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center text-lg font-medium text-gray-900 dark:text-white py-4 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
                            >
                                ❓ FAQ
                            </Link>
                            <Link
                                href="/zones"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center text-lg font-medium text-gray-900 dark:text-white py-4 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
                            >
                                📍 Zones
                            </Link>

                            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
                                <a
                                    href="tel:+32472303701"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white text-center rounded-xl font-semibold active:bg-gray-200 dark:active:bg-gray-800"
                                >
                                    📞 0472 30 37 01
                                </a>
                                <a
                                    href="https://wa.me/32472303701"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 text-white text-center rounded-xl font-semibold active:bg-green-600"
                                >
                                    💬 Réserver par WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    )
}
