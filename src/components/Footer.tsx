'use client';

import Link from 'next/link';
import {
    Phone,
    Sparkles,
    Clock,
    MapPin,
    ArrowRight,
    MessageCircle
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-slate-900 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold">Shine&Go</span>
                            </div>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Service de lavage voiture à domicile en Wallonie. Résultat showroom garanti avec des produits professionnels.
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://wa.me/32472303701"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300"
                                    aria-label="WhatsApp"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                                <a
                                    href="tel:+32472303701"
                                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-sky-500 flex items-center justify-center transition-all duration-300"
                                    aria-label="Téléphone"
                                >
                                    <Phone className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-sky-500 rounded-full" />
                                Nos Services
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Lavage Intérieur', href: '/lavage-interieur-voiture' },
                                    { name: 'Lavage Extérieur', href: '/lavage-exterieur-voiture' },
                                    { name: 'Lavage Complet', href: '/lavage-complet-voiture' },
                                    { name: 'Tarifs', href: '/prix-lavage-voiture-domicile' },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Zones Column */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-sky-500 rounded-full" />
                                Zones d'Intervention
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Herve', href: '/lavage-voiture-herve' },
                                    { name: 'Battice', href: '/lavage-voiture-battice' },
                                    { name: 'Liège', href: '/lavage-voiture-liege' },
                                    { name: 'Verviers', href: '/lavage-voiture-verviers' },
                                    { name: 'Toutes les zones', href: '/zones' },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                        >
                                            <MapPin className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-sky-500 rounded-full" />
                                Contact
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="tel:+32472303701"
                                        className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                            <Phone className="w-4 h-4 text-sky-400" />
                                        </div>
                                        <span>0472 30 37 01</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:contact@shineandgo.be"
                                        className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                            <span className="text-sky-400">@</span>
                                        </div>
                                        <span>contact@shineandgo.be</span>
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 text-slate-400">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-sky-400" />
                                    </div>
                                    <span>Lun-Sam: 8h-19h</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-slate-500">
                                © 2025 Shine&Go. Tous droits réservés.
                            </p>
                            <div className="flex items-center gap-6 text-sm">
                                <Link href="/mentions-legales" className="text-slate-500 hover:text-white transition-colors">
                                    Mentions légales
                                </Link>
                                <Link href="/politique-confidentialite" className="text-slate-500 hover:text-white transition-colors">
                                    Confidentialité
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
