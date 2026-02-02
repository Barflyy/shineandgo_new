'use client';

import Link from 'next/link';
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
    MessageCircle
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Types
interface ServiceFeature {
    icon: string;
    title: string;
    desc: string;
}

interface ProcessStep {
    step: string;
    title: string;
    desc: string;
}

interface Testimonial {
    name: string;
    city: string;
    text: string;
}

interface FAQ {
    q: string;
    a: string;
}

interface ServicePageProps {
    // Hero
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    price: string;
    priceNote?: string;
    
    // Content
    features: ServiceFeature[];
    process?: ProcessStep[];
    benefits?: { icon: LucideIcon; title: string; desc: string }[];
    testimonials: Testimonial[];
    faqs: FAQ[];
    
    // Pricing
    showAlternativePricing?: boolean;
    alternativePrice?: string;
    alternativeTitle?: string;
    
    // CTA
    ctaText: string;
    ctaLink: string;
    
    // Colors
    accentColor?: 'sky' | 'emerald' | 'amber';
}

// Shared Components
function HeroBadge({ children, color = 'sky' }: { children: React.ReactNode; color?: string }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${color}-50 border border-${color}-100`}
        >
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 fill-amber-400 text-amber-400`} />
                ))}
            </div>
            <span className={`text-sm font-semibold text-${color}-700`}>{children}</span>
        </motion.div>
    );
}

function SectionHeader({ label, title, description }: { label: string; title: string; description?: string }) {
    return (
        <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-bold text-sky-600 bg-sky-50 rounded-full mb-3 uppercase tracking-wider">
                {label}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-slate-600 max-w-xl mx-auto">{description}</p>
            )}
        </div>
    );
}

function ZonesSection() {
    const zones = ['Herve', 'Battice', 'Liège', 'Verviers', 'Spa', 'Soumagne', 'Fléron', 'Seraing'];
    
    return (
        <section className="py-12 bg-white rounded-2xl border border-slate-100">
            <div className="text-center mb-8">
                <h2 className="font-display text-xl font-bold text-slate-900">Zones d'intervention</h2>
                <p className="text-sm text-slate-500 mt-1">Déplacement gratuit</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 px-6">
                {zones.map((zone) => (
                    <Link
                        key={zone}
                        href={`/lavage-voiture-${zone.toLowerCase().replace(/é/g, 'e')}`}
                        className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full hover:bg-slate-100 transition-colors text-sm font-medium border border-slate-100"
                    >
                        {zone}
                    </Link>
                ))}
            </div>
            <div className="text-center mt-6">
                <Link href="/zones" className="text-sm text-sky-600 font-medium hover:underline inline-flex items-center gap-1">
                    Voir toutes les zones <ArrowRight className="w-3 h-3" />
                </Link>
            </div>
        </section>
    );
}

export default function ServicePageLayout({
    badge,
    title,
    titleAccent,
    description,
    price,
    priceNote,
    features,
    process,
    benefits,
    testimonials,
    faqs,
    ctaText,
    ctaLink,
    accentColor = 'sky'
}: ServicePageProps) {
    const handleBooking = () => {
        window.open('https://wa.me/32472303701?text=Bonjour Nathan ! Je souhaite réserver un lavage voiture à domicile. 🚗', '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO */}
            <section className="relative bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 overflow-hidden">
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
                                <div className="flex -space-x-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <span className="text-xs font-semibold text-slate-700">{badge}</span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
                        >
                            {title}{' '}
                            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                                {titleAccent}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed"
                        >
                            {description}
                        </motion.p>

                        {/* Price & CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="text-center">
                                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">{price}</span>
                                {priceNote && (
                                    <span className="block text-sm text-slate-500 mt-1">{priceNote}</span>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleBooking}
                                    className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                                >
                                    <CalendarCheck className="w-5 h-5" />
                                    {ctaText}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>

                                <a
                                    href="https://wa.me/32472303701"
                                    className="px-6 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5 text-green-500" />
                                    WhatsApp
                                </a>
                            </div>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-500"
                        >
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-sky-500" /> 90 min
                            </span>
                            <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-sky-500" /> À domicile
                            </span>
                            <span className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-sky-500" /> Satisfait ou refait
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <div className="container mx-auto px-5 py-12 space-y-8">
                {/* Features */}
                <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100">
                    <SectionHeader label="Détails" title="Ce qui est inclus" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Process */}
                {process && (
                    <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100">
                        <SectionHeader label="Comment ça marche" title="Notre processus" />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {process.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                        {item.step}
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Benefits */}
                {benefits && (
                    <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100">
                        <SectionHeader label="Avantages" title="Pourquoi Shine&Go ?" />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {benefits.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Zones */}
                <ZonesSection />

                {/* Testimonials */}
                <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100">
                    <SectionHeader 
                        label="Avis clients" 
                        title="Ce qu'ils en disent" 
                    />
                    <div className="grid sm:grid-cols-3 gap-4">
                        {testimonials.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-5 bg-slate-50 rounded-xl"
                            >
                                <div className="flex gap-0.5 mb-3">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mb-4">"{item.text}"</p>
                                <div className="text-sm">
                                    <span className="font-semibold text-slate-900">{item.name}</span>
                                    <span className="text-slate-400"> · {item.city}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100">
                    <SectionHeader label="FAQ" title="Questions fréquentes" />
                    <div className="max-w-2xl mx-auto space-y-3">
                        {faqs.map((item, i) => (
                            <motion.details
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group bg-slate-50 rounded-xl overflow-hidden"
                            >
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-slate-900 hover:bg-slate-100 transition-colors">
                                    <span>{item.q}</span>
                                    <span className="ml-4 flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center group-open:rotate-45 transition-transform text-slate-500">
                                        +
                                    </span>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                                    {item.a}
                                </div>
                            </motion.details>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative bg-slate-900 rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 to-emerald-900/20" />
                    <div className="relative z-10">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                            Prêt pour une voiture comme neuve ?
                        </h2>
                        <p className="text-slate-300 mb-8 max-w-md mx-auto">
                            Réservez votre lavage en 2 minutes. On s'occupe du reste.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleBooking}
                                className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                            >
                                Réserver maintenant
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <a
                                href="tel:+32472303701"
                                className="px-8 py-4 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                0472 30 37 01
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
