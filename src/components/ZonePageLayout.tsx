'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Check,
    Star,
    Clock,
    Sparkles,
    Phone,
    MapPin,
    Shield,
    CalendarCheck,
    MessageCircle,
    Car,
    Armchair
} from 'lucide-react';

interface NearbyZone {
    name: string;
    href: string;
}

interface Testimonial {
    name: string;
    location: string;
    text: string;
}

interface FAQ {
    q: string;
    a: string;
}

interface ZonePageProps {
    zoneName: string;
    zoneDescription: string;
    localContext: string;
    nearbyZones: NearbyZone[];
    testimonials?: Testimonial[];
    faqs?: FAQ[];
}

export default function ZonePageLayout({
    zoneName,
    zoneDescription,
    localContext,
    nearbyZones,
    testimonials,
    faqs
}: ZonePageProps) {
    const handleBooking = () => {
        window.open('https://wa.me/32472303701?text=Bonjour Nathan ! Je souhaite réserver un lavage voiture à domicile. 🚗', '_blank');
    };

    const defaultTestimonials: Testimonial[] = testimonials || [
        { name: 'Client satisfait', location: zoneName, text: 'Service impeccable, résultat showroom. Je recommande !' },
        { name: 'Client régulier', location: zoneName, text: 'Très pratique de faire venir le lavage à domicile. Gain de temps énorme.' },
        { name: 'Nouveau client', location: zoneName, text: 'Première expérience et déjà conquis. Voiture comme neuve.' },
    ];

    const defaultFaqs: FAQ[] = faqs || [
        { q: 'Combien de temps dure l\'intervention ?', a: 'Comptez 90 min pour un lavage complet. Nous prenons le temps nécessaire pour un résultat parfait.' },
        { q: 'Et s\'il pleut ?', a: 'Pour l\'extérieur, nous devrons reporter si vous n\'avez pas d\'abri (carport/garage). Pour l\'intérieur, pas de souci.' },
        { q: 'Besoin d\'eau ou d\'électricité ?', a: 'Idéalement oui, une prise et un robinet à moins de 25m. Sinon, prévenez-nous.' },
        { q: 'Comment payer ?', a: 'Paiement après validation du résultat. Espèces, Payconiq ou virement.' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO */}
            <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-sky-50 to-transparent rounded-full blur-3xl opacity-60" />
                </div>

                <div className="relative container mx-auto px-5">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="flex justify-center mb-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                                <MapPin className="w-4 h-4 text-sky-500" />
                                <span className="text-xs font-semibold text-slate-700">Déplacement gratuit à {zoneName}</span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
                        >
                            Lavage voiture{' '}
                            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                                à {zoneName}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed"
                        >
                            {zoneDescription}
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
                        >
                            <button
                                onClick={handleBooking}
                                className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                            >
                                <CalendarCheck className="w-5 h-5" />
                                Réserver à {zoneName}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="tel:+32472303701"
                                className="px-6 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                0472 30 37 01
                            </a>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4 text-sm text-slate-500"
                        >
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-500" /> Lavage main
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-500" /> Déplacement gratuit
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-500" /> Dès 80€
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* LOCAL CONTEXT */}
            <section className="container mx-auto px-5 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-100"
                >
                    <h2 className="font-display text-xl font-bold text-slate-900 mb-4 text-center">
                        Expert en lavage voiture à {zoneName}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-center">
                        {localContext}
                    </p>
                </motion.div>
            </section>

            {/* PRICING */}
            <section className="container mx-auto px-5 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                        Tarifs à {zoneName}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {/* Intérieur */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 border border-slate-100"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                                <Armchair className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Intérieur</h3>
                                <p className="text-sm text-slate-500">Aspiration, plastiques, vitres</p>
                            </div>
                        </div>
                        <div className="text-3xl font-extrabold text-slate-900 mb-4">80€</div>
                        <ul className="space-y-2 mb-6 text-sm text-slate-600">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Aspiration complète</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Nettoyage plastiques</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Désodorisation</li>
                        </ul>
                        <Link href="/lavage-interieur-voiture" className="block w-full py-3 text-center bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors">
                            En savoir plus
                        </Link>
                    </motion.div>

                    {/* Complet */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900 rounded-2xl p-6 relative"
                    >
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">⭐ Populaire</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Complet</h3>
                                <p className="text-sm text-slate-400">Intérieur + Extérieur</p>
                            </div>
                        </div>
                        <div className="text-3xl font-extrabold text-white mb-1">150€</div>
                        <p className="text-sm text-emerald-400 mb-4">Économisez 10€</p>
                        <ul className="space-y-2 mb-6 text-sm text-slate-300">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Tout l'intérieur</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Tout l'extérieur</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Résultat showroom</li>
                        </ul>
                        <Link href="/lavage-complet-voiture" className="block w-full py-3 text-center bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                            Réserver le complet
                        </Link>
                    </motion.div>

                    {/* Extérieur */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 border border-slate-100"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                                <Car className="w-5 h-5 text-sky-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Extérieur</h3>
                                <p className="text-sm text-slate-500">Lavage main, jantes, cire</p>
                            </div>
                        </div>
                        <div className="text-3xl font-extrabold text-slate-900 mb-4">80€</div>
                        <ul className="space-y-2 mb-6 text-sm text-slate-600">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-500" /> Lavage main 2 seaux</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-500" /> Jantes & pneus</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-500" /> Cire hydrophobe</li>
                        </ul>
                        <Link href="/lavage-exterieur-voiture" className="block w-full py-3 text-center bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors">
                            En savoir plus
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="container mx-auto px-5 pb-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {[
                        { icon: Shield, title: 'Satisfait ou refait', desc: 'Garantie sur chaque prestation', color: 'sky' },
                        { icon: Sparkles, title: 'Produits premium', desc: 'Koch-Chemie exclusivement', color: 'emerald' },
                        { icon: Clock, title: 'Intervention rapide', desc: '90 min en moyenne', color: 'violet' },
                        { icon: MapPin, title: 'À domicile', desc: `On vient à ${zoneName}`, color: 'amber' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-5 border border-slate-100 text-center"
                        >
                            <div className={`w-10 h-10 bg-${item.color}-50 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                            </div>
                            <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h3>
                            <p className="text-xs text-slate-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* NEARBY ZONES */}
            <section className="container mx-auto px-5 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 max-w-3xl mx-auto"
                >
                    <h2 className="font-display text-xl font-bold text-slate-900 mb-4 text-center">
                        Zones proches de {zoneName}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {nearbyZones.map((zone) => (
                            <Link
                                key={zone.name}
                                href={zone.href}
                                className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full hover:bg-slate-100 transition-colors text-sm font-medium border border-slate-100"
                            >
                                {zone.name}
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link href="/zones" className="text-sm text-sky-600 font-medium hover:underline inline-flex items-center gap-1">
                            Voir toutes les zones <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* TESTIMONIALS */}
            <section className="container mx-auto px-5 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                    </div>
                    <h2 className="font-display text-xl font-bold text-slate-900">Avis clients à {zoneName}</h2>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {defaultTestimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-xl p-5 border border-slate-100"
                        >
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">"{item.text}"</p>
                            <div className="text-xs">
                                <span className="font-semibold text-slate-900">{item.name}</span>
                                <span className="text-slate-400"> · {item.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-5 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="font-display text-xl font-bold text-slate-900 mb-6 text-center">
                        Questions fréquentes
                    </h2>
                    <div className="space-y-3">
                        {defaultFaqs.map((item, i) => (
                            <details key={i} className="group bg-white rounded-xl border border-slate-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-4 cursor-pointer list-none font-medium text-slate-900 hover:bg-slate-50 transition-colors text-sm">
                                    <span>{item.q}</span>
                                    <span className="ml-4 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition-transform text-xs">
                                        +
                                    </span>
                                </summary>
                                <div className="px-4 pb-4 text-slate-600 text-sm">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* FINAL CTA */}
            <section className="container mx-auto px-5 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-slate-900 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 to-emerald-900/20" />
                    <div className="relative z-10">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                            Prêt pour une voiture comme neuve à {zoneName} ?
                        </h2>
                        <p className="text-slate-300 mb-8">
                            Réservez votre lavage en 2 minutes. On s'occupe du reste.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={handleBooking}
                                className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                            >
                                Réserver à {zoneName}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="https://wa.me/32472303701"
                                className="px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
