'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Menu,
    X,
    Sparkles,
    ArrowRight,
} from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleBooking = () => {
        window.open('https://wa.me/32472303701?text=Bonjour Nathan ! Je souhaite réserver un lavage voiture à domicile. 🚗', '_blank');
    };

    const navLinks = [
        { name: 'Intérieur', href: '/lavage-interieur-voiture', price: '80€' },
        { name: 'Extérieur', href: '/lavage-exterieur-voiture', price: '80€' },
        { name: 'Complet', href: '/lavage-complet-voiture', price: '150€' },
        { name: 'Tarifs', href: '/prix-lavage-voiture-domicile', price: null },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-900/5'
                    : 'bg-white/60 backdrop-blur-sm'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 md:h-18">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="relative">
                                <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <Sparkles className="w-4.5 h-4.5 text-white" />
                                </div>
                            </div>
                            <span className="font-display text-lg font-bold text-slate-900">
                                Shine&Go
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors relative group text-sm rounded-lg hover:bg-slate-50"
                                >
                                    {link.name}
                                    {link.price && (
                                        <span className="ml-1.5 text-xs text-slate-400 font-normal">
                                            dès {link.price}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Desktop */}
                        <div className="hidden md:flex items-center gap-3">
                            <a
                                href="tel:+32472303701"
                                className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="font-medium text-sm">0472 30 37 01</span>
                            </a>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleBooking}
                                className="px-5 py-2.5 bg-slate-900 text-white font-semibold text-sm rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
                            >
                                Réserver
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu - Full Screen */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed right-0 top-0 bottom-0 w-full max-w-sm z-50 bg-white shadow-2xl md:hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
                                <span className="font-display text-lg font-bold text-slate-900">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="p-5 space-y-1">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                                        >
                                            <span>Lavage {link.name}</span>
                                            {link.price && (
                                                <span className="text-sm text-slate-400 font-normal">
                                                    dès {link.price}
                                                </span>
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom CTA */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white to-transparent">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        handleBooking();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
                                >
                                    Réserver maintenant
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                                <a
                                    href="tel:+32472303701"
                                    className="flex items-center justify-center gap-2 mt-3 py-3 text-slate-600 font-medium"
                                >
                                    <Phone className="w-4 h-4" />
                                    0472 30 37 01
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
