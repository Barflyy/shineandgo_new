'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [showWidget, setShowWidget] = useState(false)

    useEffect(() => {
        // Show widget after 2 seconds - simplified timer
        const timer = setTimeout(() => setShowWidget(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    const handleSendMessage = () => {
        window.open('https://wa.me/32472303701?text=Bonjour, je souhaite réserver un lavage voiture à domicile', '_blank')
        setIsOpen(false)
    }

    if (!showWidget) return null

    return (
        <>
            {/* Chat Popup */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 md:right-8 z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 w-[300px] md:w-[340px]">
                        {/* Header */}
                        <div className="bg-green-500 p-4 rounded-t-2xl flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <span className="text-xl">🚗</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-white font-bold text-sm">Shine&Go</h4>
                                <p className="text-green-100 text-xs flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full"></span>
                                    En ligne
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 bg-gray-50 dark:bg-slate-950">
                            <div className="bg-white dark:bg-slate-900 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800">
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    👋 Besoin d'un devis rapide ? Écrivez-nous !
                                </p>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                            <button
                                onClick={handleSendMessage}
                                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Démarrer le chat
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
                aria-label="Chat WhatsApp"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}
            </button>
        </>
    )
}
