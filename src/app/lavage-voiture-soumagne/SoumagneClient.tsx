'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Star, MapPin, ArrowRight, Check, MessageCircle, Droplets, Car, Zap, BadgeCheck, CalendarCheck, ThumbsUp, Shield } from 'lucide-react';

function HeroSection() {
    const handleBooking = () => { window.open('https://wa.me/32472303701?text=Bonjour Nathan ! Je souhaite réserver un lavage voiture à Soumagne. 🚗', '_blank'); };

    return (
        <section className="relative min-h-[100svh] flex flex-col justify-center bg-gradient-to-b from-white via-sky-50/30 to-white pt-16 pb-8 sm:pt-24 sm:pb-12 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-sky-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-emerald-50/40 to-transparent rounded-full blur-2xl" />
            </div>
            <div className="relative container mx-auto px-5 z-10 flex-1 flex flex-col justify-center">
                <div className="max-w-3xl mx-auto">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm">
                            <MapPin className="w-4 h-4 text-sky-500" />
                            <span className="text-xs font-semibold text-slate-700">Déplacement gratuit à Soumagne</span>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center mb-6">
                        <h1 className="font-display text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
                            Lavage voiture{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">à Soumagne</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-sky-200 to-emerald-200 -z-10 -rotate-1 rounded" />
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
                            Valeting professionnel au cœur de la <strong className="text-slate-900">campagne verdoyante</strong>. Chemins agricoles, poussière, pollen ? On remet votre voiture à neuf chez vous.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-3 mb-8">
                        <div className="flex justify-center mb-2">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 text-sm font-medium rounded-full border border-amber-200">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-amber-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                </span>
                                2 créneaux disponibles cette semaine
                            </span>
                        </div>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleBooking} className="w-full sm:w-auto sm:mx-auto group relative overflow-hidden px-8 py-5 bg-slate-900 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-slate-900/25 transition-all duration-300">
                            <span className="relative z-10 flex items-center justify-center gap-3"><CalendarCheck className="w-5 h-5" /> Réserver à Soumagne <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                        <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                            <a href="https://wa.me/32472303701" className="flex items-center gap-1.5 hover:text-green-600 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            <a href="tel:+32472303701" className="flex items-center gap-1.5 hover:text-sky-600 transition-colors"><Phone className="w-4 h-4" /> 0472 30 37 01</a>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
                        {[{ icon: Zap, text: 'Résultat en 90 min' }, { icon: BadgeCheck, text: 'Produits Pro' }, { icon: ThumbsUp, text: 'Satisfait ou refait' }].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-2 text-slate-600"><div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center"><Icon className="w-4 h-4 text-sky-600" /></div><span className="font-medium">{text}</span></div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function BenefitsSection() {
    const benefits = [
        { icon: Car, title: "Expert campagne", description: "Chemins agricoles, terre, herbe coupée... On connaît les défis des routes de Soumagne.", color: "sky" },
        { icon: Droplets, title: "Anti-pollen & résine", description: "Printemps/été à la campagne = pollen et résine d'arbre. On élimine tout en douceur.", color: "emerald" },
        { icon: Shield, title: "Traitement boue séchée", description: "Après les travaux de jardin ou les balades, on redonne l'éclat à votre carrosserie.", color: "violet" },
    ];
    const colorClasses = { sky: "bg-sky-50 text-sky-600 border-sky-100", emerald: "bg-emerald-50 text-emerald-600 border-emerald-100", violet: "bg-violet-50 text-violet-600 border-violet-100" };

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Pourquoi choisir Shine&Go à Soumagne ?</h2>
                </motion.div>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                            <div className={`w-12 h-12 rounded-xl ${colorClasses[benefit.color as keyof typeof colorClasses]} border flex items-center justify-center mb-4`}><benefit.icon className="w-6 h-6" /></div>
                            <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServicesSection() {
    const services = [
        { title: 'Intérieur', description: 'Aspiration, désinfection, traitement plastiques et cuirs', price: '80', priceNote: 'Citadine', icon: '🧹', features: ['Aspiration complète', 'Nettoyage plastiques', 'Vitres intérieures', 'Parfum longue durée'], href: '/lavage-interieur-voiture', accent: 'from-amber-400 to-orange-500' },
        { title: 'Extérieur', description: 'Lavage main, jantes, vitres, protection carrosserie', price: '80', priceNote: 'Citadine', icon: '🚗', features: ['Lavage main premium', 'Jantes & pneus', 'Vitres extérieures', 'Cire protection'], href: '/lavage-exterieur-voiture', accent: 'from-sky-400 to-blue-500' },
        { title: 'Complet', description: 'Intérieur + Extérieur pour un résultat showroom', price: '150', priceNote: 'Économie 10€', icon: '✨', features: ['Tout inclus', 'Meilleur rapport qualité/prix', '90 min intervention', 'Résultat showroom'], href: '/lavage-complet-voiture', accent: 'from-emerald-400 to-teal-500', popular: true },
    ];

    return (
        <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-sky-600 bg-sky-50 rounded-full mb-3 uppercase tracking-wider">Nos formules</span>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">Tarifs lavage voiture à Soumagne</h2>
                    <p className="text-slate-600 max-w-md mx-auto">Tarifs transparents, déplacement gratuit à Soumagne et environs.</p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    {services.map((service, index) => (
                        <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative group">
                            {service.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"><span className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg shadow-emerald-500/30 whitespace-nowrap">⭐ Le + populaire</span></div>}
                            <Link href={service.href} className="block h-full">
                                <div className={`h-full p-6 sm:p-7 rounded-2xl bg-white border-2 transition-all duration-300 ${service.popular ? 'border-emerald-200 shadow-xl shadow-emerald-500/10' : 'border-slate-100 hover:border-slate-200 hover:shadow-xl'}`}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center text-2xl shadow-lg`}>{service.icon}</div>
                                        <div className="text-right"><div className="flex items-baseline gap-0.5"><span className="text-3xl font-extrabold text-slate-900">{service.price}</span><span className="text-lg font-bold text-slate-400">€</span></div><span className={`text-xs font-medium ${service.popular ? 'text-emerald-600' : 'text-slate-500'}`}>{service.priceNote}</span></div>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Lavage {service.title}</h3>
                                    <p className="text-slate-600 text-sm mb-5">{service.description}</p>
                                    <ul className="space-y-2.5 mb-5">{service.features.map((feature) => (<li key={feature} className="flex items-center gap-2.5 text-sm text-slate-700"><Check className={`w-4 h-4 flex-shrink-0 ${service.popular ? 'text-emerald-500' : 'text-sky-500'}`} /><span>{feature}</span></li>))}</ul>
                                    <div className={`flex items-center gap-2 text-sm font-semibold ${service.popular ? 'text-emerald-600' : 'text-sky-600'} group-hover:gap-3 transition-all`}><span>Voir les détails</span><ArrowRight className="w-4 h-4" /></div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    const testimonials = [
        { name: 'Laurent P.', location: 'Soumagne', text: 'Les chemins agricoles avaient couvert ma voiture de poussière. Un vrai miracle, elle brille !', avatar: '👨' },
        { name: 'Christine D.', location: 'Melen', text: 'Après la tonte du jardin et le pollen du printemps, ma Golf était méconnaissable. Résultat bluffant.', avatar: '👩' },
        { name: 'Michel R.', location: 'Ayeneux', text: 'Idéal à la campagne où les stations de lavage sont loin. Service 5 étoiles à domicile !', avatar: '👨' },
    ];

    return (
        <section className="py-16 sm:py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
                    <div className="flex items-center justify-center gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-amber-400" />)}</div>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2">5.0 sur Google</h2>
                    <p className="text-slate-600">Ce que nos clients disent de nous à Soumagne</p>
                </motion.div>
                <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory sm:overflow-visible sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex-shrink-0 w-[85vw] sm:w-auto snap-center">
                            <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
                                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}</div>
                                <p className="text-slate-700 leading-relaxed mb-5">"{testimonial.text}"</p>
                                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">{testimonial.avatar}</div><div><p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p><p className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{testimonial.location}</p></div></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const faqs = [
        { question: "Ma voiture est couverte de terre agricole, c'est un problème ?", answer: "Au contraire, c'est notre quotidien à Soumagne ! On traite la boue séchée, la terre et les résidus de culture en douceur." },
        { question: "Traitez-vous le pollen et la résine d'arbre ?", answer: "Oui ! Le pollen et la résine sont courants en zone rurale. Nos produits Koch-Chemie les dissolvent sans abîmer la peinture." },
        { question: "Je suis isolé à la campagne, vous venez quand même ?", answer: "Melen, Ayeneux, Cerexhe... On couvre toute la commune de Soumagne, même les hameaux les plus reculés." },
        { question: "Ma voiture dort dehors, elle se salit vite...", answer: "On propose des traitements protecteurs longue durée pour espacer les lavages. Demandez-nous conseil !" }
    ];

    return (
        <section className="py-16 sm:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Questions fréquentes</h2>
                </motion.div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.details key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                            <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-slate-900 hover:bg-slate-50 transition-colors"><span>{faq.question}</span><span className="ml-4 flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-45 transition-transform"><span className="text-slate-500 text-lg leading-none">+</span></span></summary>
                            <div className="px-5 pb-5 text-slate-600 leading-relaxed">{faq.answer}</div>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    const handleBooking = () => { window.open('https://wa.me/32472303701?text=Bonjour Nathan ! Je souhaite réserver un lavage voiture à Soumagne. 🚗', '_blank'); };
    const zones = ['Herve', 'Melen', 'Liège', 'Fléron', 'Beyne-Heusay'];

    return (
        <section className="relative py-16 sm:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-slate-900 to-emerald-900/30" />
            <div className="absolute inset-0 opacity-30"><div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" /><div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" /></div>
            <div className="relative max-w-4xl mx-auto px-5 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                        <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span></span>
                        <span className="text-sm text-white/90">Créneaux disponibles cette semaine</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Prêt pour une voiture<br className="sm:hidden" /> comme neuve à Soumagne ?</h2>
                    <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">Réservez votre lavage en 2 minutes. On s'occupe du reste.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleBooking} className="group px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3"><CalendarCheck className="w-5 h-5" /> Réserver à Soumagne <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></motion.button>
                        <motion.a href="tel:+32472303701" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3"><Phone className="w-5 h-5" /> 0472 30 37 01</motion.a>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                        <p className="text-sm text-white/50 mb-4 flex items-center justify-center gap-2"><MapPin className="w-4 h-4" /> Zones proches de Soumagne</p>
                        <div className="flex flex-wrap justify-center gap-2">{zones.map((zone) => (<Link key={zone} href={`/lavage-voiture-${zone.toLowerCase().replace(/é/g, 'e')}`} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white/70 hover:text-white transition-all">{zone}</Link>))}</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function SoumagneClient() {
    return (
        <div className="bg-white -mt-16 md:-mt-20">
            <HeroSection />
            <BenefitsSection />
            <ServicesSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
