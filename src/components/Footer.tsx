import Link from 'next/link'
import { Phone, Mail, MapPin, Star } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-12 sm:py-16 border-t border-gray-100 bg-white">
            <div className="container mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Shine<span className="text-blue-600">&</span>Go
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 text-pretty">
                            Service mobile de&nbsp;nettoyage et lavage automobile professionnel à&nbsp;domicile en&nbsp;Wallonie
                        </p>
                        <div className="flex items-center gap-1 text-sm">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                                ))}
                            </div>
                            <span className="text-gray-600 ml-1">4.9/5 Google</span>
                        </div>
                    </div>

                    {/* Services - Liens internes */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Nos services</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>
                                <Link href="/nettoyage-interieur-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Nettoyage intérieur voiture
                                </Link>
                            </li>
                            <li>
                                <Link href="/nettoyage-exterieur-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Lavage extérieur voiture
                                </Link>
                            </li>
                            <li>
                                <Link href="/nettoyage-complet-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Nettoyage complet voiture
                                </Link>
                            </li>
                            <li>
                                <Link href="/prix-nettoyage-voiture-domicile" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Prix et tarifs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Zones - SEO local */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Zones d'intervention</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>
                                <Link href="/nettoyage-voiture-herve" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Nettoyage voiture Herve
                                </Link>
                            </li>
                            <li>
                                <Link href="/nettoyage-voiture-verviers" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Lavage voiture Verviers
                                </Link>
                            </li>
                            <li>
                                <Link href="/nettoyage-voiture-liege" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Lavage voiture Liège
                                </Link>
                            </li>
                            <li>
                                <Link href="/nettoyage-voiture-battice" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Nettoyage voiture Battice
                                </Link>
                            </li>
                            <li>
                                <Link href="/nettoyage-voiture-soumagne" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Lavage voiture Soumagne
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base text-balance">Contact</h4>
                        <ul className="space-y-3 text-xs sm:text-sm">
                            <li className="flex items-center gap-2 text-gray-600">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <a
                                    href="tel:+32472303701"
                                    className="hover:text-gray-900 transition-colors"
                                    aria-label="Téléphone Shine&Go"
                                >
                                    0472 30 37 01
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <a
                                    href="mailto:contact@shineandgo.be"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    contact@shineandgo.be
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-gray-600">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span className="text-pretty">Service mobile<br />Herve, Wallonie, Belgique</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                    <div className="text-xs sm:text-sm text-gray-500">
                        © 2025 Shine&Go. Nettoyage voiture professionnel à domicile.
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                        <Link href="/mentions-legales" className="hover:text-gray-900 transition-colors">
                            Mentions légales
                        </Link>
                        <Link href="/politique-confidentialite" className="hover:text-gray-900 transition-colors">
                            Confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
