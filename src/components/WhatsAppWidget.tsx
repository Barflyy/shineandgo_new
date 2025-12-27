'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Check } from 'lucide-react'

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [showWidget, setShowWidget] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)

    useEffect(() => {
        // Show widget after 2 seconds
        const timer = setTimeout(() => setShowWidget(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    const handleOpen = () => {
        setIsOpen(!isOpen)
        setHasInteracted(true)
    }

    const handleSendMessage = () => {
        window.open('https://wa.me/32472303701?text=Bonjour, je souhaite réserver un lavage voiture à domicile', '_blank')
        setIsOpen(false)
    }

    if (!showWidget) return null

    return (
        <div className="fixed bottom-6 right-4 md:right-8 z-50 flex flex-col items-end">
            {/* Chat Popup */}
            <div
                className={`mb-4 w-[320px] md:w-[360px] transform transition-all duration-500 origin-bottom-right ${isOpen
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-90 pointer-events-none'
                    }`}
            >
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                                <span className="text-2xl">✨</span>
                            </div>
                            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-green-500 rounded-full animate-pulse"></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-white font-bold text-lg leading-tight">Shine&Go</h4>
                            <p className="text-green-100 text-xs font-medium flex items-center gap-1.5 pt-0.5">
                                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                                Réponse ultra-rapide
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="p-6 bg-gray-50 dark:bg-slate-950/50 space-y-4">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl rounded-tl-none p-4 shadow-sm border border-gray-100 dark:border-gray-800 max-w-[90%]">
                            <p className="text-gray-700 dark:text-gray-200 text-[15px] leading-relaxed">
                                👋 Bonjour ! Envie d'une voiture comme neuve ?
                            </p>
                            <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 block font-medium uppercase tracking-wider">Shine&Go • Maintenant</span>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-2xl rounded-tl-none p-4 shadow-sm border border-gray-100 dark:border-gray-800 max-w-[95%] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <p className="text-gray-700 dark:text-gray-200 text-[15px] leading-relaxed">
                                Envoyez-nous <span className="font-bold text-green-600 dark:text-green-400">votre ville</span> pour recevoir un devis gratuit en 2 minutes ! 🚗💨
                            </p>
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 space-y-3">
                        <button
                            onClick={handleSendMessage}
                            className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(34,197,94,0.6)] hover:-translate-y-1 active:scale-[0.98]"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Démarrer sur WhatsApp
                        </button>
                        <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 font-medium uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> Gratuit</span>
                            <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> Sans engagement</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Button Container */}
            <div className="flex items-center gap-4">
                {/* Desktop Label */}
                {!isOpen && (
                    <div className="hidden md:flex items-center gap-3 animate-fade-in-right">
                        <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 pointer-events-none relative">
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-100 whitespace-nowrap">
                                Un devis gratuit ? 👋
                            </p>
                            {/* Decorative arrow */}
                            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-900 border-r border-t border-gray-100 dark:border-gray-800 rotate-45"></div>
                        </div>
                    </div>
                )}

                {/* Main Button */}
                <button
                    onClick={handleOpen}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl group ${isOpen
                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rotate-90'
                            : 'bg-green-500 hover:bg-green-600 text-white hover:scale-110 active:scale-95'
                        }`}
                    aria-label="Chat WhatsApp"
                >
                    {/* Ring animation */}
                    {!isOpen && !hasInteracted && (
                        <>
                            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>
                            <span className="absolute inset-[-8px] rounded-full border-2 border-green-500/30 animate-pulse"></span>
                        </>
                    )}

                    {isOpen ? (
                        <X className="w-7 h-7 md:w-8 md:h-8" />
                    ) : (
                        <MessageCircle className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                    )}

                    {/* Notification Badge */}
                    {!isOpen && !hasInteracted && (
                        <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white dark:border-slate-950 shadow-lg animate-bounce">
                            1
                        </span>
                    )}
                </button>
            </div>
        </div>
    )
}
