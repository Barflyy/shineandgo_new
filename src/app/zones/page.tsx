'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Phone,
    Star,
    MapPin,
    ArrowRight,
    MessageCircle,
    CalendarCheck,
    Zap,
    BadgeCheck,
    ThumbsUp
} from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
    const handleBooking = () => {
        window.open('https://wa.me/32472303701?text=Bonjour Nathan ! Je souhaite réserver un lavage voiture à domicile. 🚗', '_blank');
    };

    return (
        <section className="relative min-h-[70svh] flex flex-col justify-center bg-gradient-to-b from-white via-sky-50/30 to-white pt-16 pb-8 sm:pt-24 sm:pb-12 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-sky-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-emerald-50/40 to-transparent rounded-full blur-2xl" />
            </div>

            <div className="relative container mx-auto px-5 z-10 flex-1 flex flex-col justify-center">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm">
                            <MapPin className="w-4 h-4 text-sky-500" />
                            <span className="text-xs font-semibold text-slate-700">Déplacement gratuit • Province de Liège</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center mb-6"
                    >
                        <h1 className="font-display text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
                            Zones{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                                    d'intervention
                                </span>
                                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-sky-200 to-emerald-200 -z-10 -rotate-1 rounded" />
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
                            Shine&Go se déplace <strong className="text-slate-900">gratuitement</strong> à votre domicile ou sur votre lieu de travail partout en province de Liège.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-3 mb-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleBooking}
                            className="w-full sm:w-auto sm:mx-auto group relative overflow-hidden px-8 py-5 bg-slate-900 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-slate-900/25 transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                <CalendarCheck className="w-5 h-5" />
                                Réserver mon lavage
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>

                        <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                            <a
                                href="https://wa.me/32472303701"
                                className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            <a
                                href="tel:+32472303701"
                                className="flex items-center gap-1.5 hover:text-sky-600 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                0472 30 37 01
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// ZONES SECTION
// ============================================
function ZonesSection() {
    // Villes avec pages dédiées (performantes)
    const villesAvecPages = [
        { name: 'Herve', href: '/lavage-voiture-herve', region: 'Plateau de Herve' },
        { name: 'Battice', href: '/lavage-voiture-battice', region: 'Plateau de Herve' },
        { name: 'Soumagne', href: '/lavage-voiture-soumagne', region: 'Plateau de Herve' },
        { name: 'Melen', href: '/lavage-voiture-melen', region: 'Plateau de Herve' },
        { name: 'Verviers', href: '/lavage-voiture-verviers', region: 'Région de Verviers' },
        { name: 'Heusy', href: '/lavage-voiture-heusy', region: 'Région de Verviers' },
        { name: 'Dison', href: '/lavage-voiture-dison', region: 'Région de Verviers' },
        { name: 'Theux', href: '/lavage-voiture-theux', region: 'Région de Verviers' },
        { name: 'Spa', href: '/lavage-voiture-spa', region: 'Région de Verviers' },
        { name: 'Malmedy', href: '/lavage-voiture-malmedy', region: 'Région de Verviers' },
        { name: 'Liège', href: '/lavage-voiture-liege', region: 'Grand Liège' },
        { name: 'Ans', href: '/lavage-voiture-ans', region: 'Grand Liège' },
        { name: 'Saint-Nicolas', href: '/lavage-voiture-saint-nicolas', region: 'Grand Liège' },
        { name: 'Seraing', href: '/lavage-voiture-seraing', region: 'Grand Liège' },
        { name: 'Hermalle', href: '/lavage-voiture-hermalle', region: 'Basse-Meuse' },
    ];

    // Autres villes couvertes (sans page dédiée)
    const autresVilles = [
        'Aubel', 'Thimister', 'Clermont', 'Charneux', 'Xhendelesse', 'Bolland', 'Olne',
        'Ensival', 'Lambermont', 'Pepinster', 'Jalhay', 'Sart', 'Limbourg', 'Stavelot', 'Francorchamps',
        'Chaudfontaine', 'Embourg', 'Fléron', 'Beyne-Heusay', 'Herstal', 'Rocourt', 'Boncelles', 'Trooz',
        'Visé', 'Argenteau', 'Oupeye', 'Dalhem', 'Warsage', 'Bassenge', 'Blegny', 'Saive'
    ];

    const regions = [
        {
            title: "Plateau de Herve",
            villes: villesAvecPages.filter(v => v.region === 'Plateau de Herve')
        },
        {
            title: "Région de Verviers",
            villes: villesAvecPages.filter(v => v.region === 'Région de Verviers')
        },
        {
            title: "Grand Liège",
            villes: villesAvecPages.filter(v => v.region === 'Grand Liège')
        },
        {
            title: "Basse-Meuse",
            villes: villesAvecPages.filter(v => v.region === 'Basse-Meuse')
        },
    ];

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <span className="inline-block px-3 py-1 text-xs font-bold text-sky-600 bg-sky-50 rounded-full mb-3 uppercase tracking-wider">
                        Nos zones principales
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                        Villes desservies
                    </h2>
                    <p className="text-slate-600 max-w-md mx-auto">
                        Cliquez sur une ville pour plus d'informations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {regions.map((region, idx) => (
                        <motion.div
                            key={region.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
                        >
                            <h3 className="font-display text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-sky-500" />
                                {region.title}
                            </h3>
                            <ul className="space-y-2">
                                {region.villes.map((ville) => (
                                    <li key={ville.name}>
                                        <Link
                                            href={ville.href}
                                            className="text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-2 text-sm group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-sky-500 transition-colors"></span>
                                            {ville.name}
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Autres villes couvertes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 p-8"
                >
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-4 text-center">
                        Autres communes couvertes
                    </h3>
                    <p className="text-slate-500 text-sm text-center mb-6">
                        Nous intervenons également dans ces localités. Contactez-nous pour vérifier.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {autresVilles.map((ville) => (
                            <span
                                key={ville}
                                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600"
                            >
                                {ville}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// FINAL CTA SECTION
// ============================================
function CTASection() {
    const handleBooking = () => {
        window.open('https://wa.me/32472303701?text=Bonjour Nathan ! Je souhaite réserver un lavage voiture à domicile. 🚗', '_blank');
    };

    return (
        <section className="relative py-16 sm:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-slate-900 to-emerald-900/30" />
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto px-5 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                        <span className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="text-sm text-white/90">Créneaux disponibles cette semaine</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Votre localité n'est pas dans la liste ?
                    </h2>

                    <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                        Contactez-nous pour vérifier si nous intervenons chez vous.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleBooking}
                            className="group px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3"
                        >
                            <CalendarCheck className="w-5 h-5" />
                            Réserver maintenant
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.a
                            href="tel:+32472303701"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                        >
                            <Phone className="w-5 h-5" />
                            0472 30 37 01
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// MAIN PAGE
// ============================================
export default function ZonesPage() {
    return (
        <div className="bg-white -mt-16 md:-mt-20">
            <HeroSection />
            <ZonesSection />
            <CTASection />
        </div>
    );
}
