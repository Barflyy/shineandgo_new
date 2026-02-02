'use client';

import { Phone, CalendarCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function StickyMobileBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBooking = () => {
        window.open('https://wa.me/32472303701?text=Bonjour Nathan ! Je souhaite réserver un lavage voiture à domicile. 🚗', '_blank');
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Bonjour Nathan ! Je souhaite un devis pour un lavage voiture à domicile. 🚗');
        window.open(`https://wa.me/32472303701?text=${message}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-4 py-3 pb-safe md:hidden shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)]"
                >
                    {/* Urgency text */}
                    <p className="text-center text-xs text-slate-500 mb-2 font-medium">
                        ⚡ Créneaux disponibles cette semaine
                    </p>
                    <div className="flex gap-2">
                        <a
                            href="tel:+32472303701"
                            className="flex items-center justify-center px-4 py-3.5 bg-slate-100 text-slate-700 font-bold rounded-xl active:bg-slate-200 transition-colors"
                            aria-label="Appeler"
                        >
                            <Phone className="w-5 h-5" />
                        </a>
                        <button
                            onClick={handleWhatsApp}
                            className="flex items-center justify-center gap-2 px-4 py-3.5 bg-[#25D366] text-white font-bold rounded-xl active:bg-[#1fa851] transition-colors"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm">Devis</span>
                        </button>
                        <button
                            onClick={handleBooking}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 active:scale-[0.98] transition-all group"
                        >
                            <CalendarCheck className="w-5 h-5" />
                            <span>Réserver</span>
                            <ArrowRight className="w-4 h-4 opacity-70 group-active:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
