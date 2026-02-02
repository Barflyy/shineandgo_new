'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Check, Send, Phone, Clock, Sparkles } from 'lucide-react'

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [showWidget, setShowWidget] = useState(true)
    const [hasInteracted, setHasInteracted] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState<Array<{ text: React.ReactNode; isUser: boolean; time: string }>>([])
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Get current hour for dynamic messaging
    const currentHour = new Date().getHours()
    const isBusinessHours = currentHour >= 8 && currentHour < 19
    const greeting = currentHour < 12 ? "Bonjour" : currentHour < 18 ? "Bonjour" : "Bonsoir"

    // Chat flow simulation with more engaging messages
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    text: `${greeting} ! 👋 Je suis Nathan de Shine&Go.`,
                    isUser: false,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ])

            setIsTyping(true)
            const typingTimer = setTimeout(() => {
                setIsTyping(false)
                setMessages(prev => [
                    ...prev,
                    {
                        text: <>J'ai encore <span className="font-bold text-green-700">2 créneaux dispo</span> cette semaine. Votre voiture a besoin d'un coup de frais ? 🚗✨</>,
                        isUser: false,
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }
                ])
            }, 1500)

            return () => clearTimeout(typingTimer)
        }
    }, [isOpen, greeting])

    const handleOpen = () => {
        setIsOpen(!isOpen)
        setHasInteracted(true)
    }

    const handleSendMessage = () => {
        const message = encodeURIComponent(`${greeting} Nathan ! Je souhaite un devis pour un lavage voiture à domicile. 🚗`)
        window.open(`https://wa.me/32472303701?text=${message}`, '_blank')
        setIsOpen(false)
    }

    if (!showWidget) return null

    return (
        <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end font-sans">
            {/* Chat Popup */}
            <div
                className={`mb-4 w-[calc(100vw-32px)] md:w-[380px] transform transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="bg-[#E5DDD5] dark:bg-slate-900 rounded-[1.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[600px] border border-white/20">

                    {/* Header aka "WhatsApp Top Bar" */}
                    <div className="bg-[#075E54] p-4 flex items-center gap-3 shadow-md z-10">
                        <div className="relative">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20">
                                <span className="text-xl">🏎️</span>
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075E54] rounded-full animate-pulse"></span>
                        </div>
                        <div className="flex-1 text-white">
                            <h4 className="font-semibold text-base leading-tight">Nathan - Shine&Go</h4>
                            <p className="text-green-100 text-[11px] font-medium leading-tight opacity-90 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                {isBusinessHours ? "En ligne • Répond en 2 min" : "Répond demain matin"}
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Body with "WhatsApp Pattern" background */}
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto min-h-[250px] relative">
                        {/* Doodle Background Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                            style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}>
                        </div>

                        {/* Date Label */}
                        <div className="flex justify-center mb-4 relative z-10">
                            <span className="bg-[#E1F3FB] dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-[10px] font-medium px-2 py-1 rounded shadow-sm">
                                Aujourd'hui
                            </span>
                        </div>

                        {/* Messages */}
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up md:max-w-[85%] relative z-10`}>
                                <div className={`
                                    rounded-lg p-2 px-3 shadow-sm text-[15px] leading-relaxed relative
                                    ${msg.isUser
                                        ? 'bg-[#DCF8C6] text-gray-900 rounded-tr-none'
                                        : 'bg-white text-gray-900 rounded-tl-none'}
                                `}>
                                    {msg.text}
                                    <div className="text-[10px] text-gray-400 mt-1 flex items-center justify-end gap-1">
                                        {msg.time}
                                        <Check className="w-3 h-3 text-blue-400" />
                                    </div>

                                    {/* Triangle Bubble Tip */}
                                    <div className={`absolute top-0 w-0 h-0 border-[6px] border-transparent 
                                        ${msg.isUser
                                            ? 'right-[-6px] border-t-[#DCF8C6]'
                                            : 'left-[-6px] border-t-white'}
                                    `}></div>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start animate-fade-in-up relative z-10">
                                <div className="bg-white rounded-lg p-3 rounded-tl-none shadow-sm flex gap-1 items-center h-[34px]">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area (Fake) */}
                    <div className="bg-[#F0F2F5] dark:bg-slate-900 p-2 px-3 flex items-center gap-2 relative z-20">
                        <button className="p-2 text-gray-500 hover:text-gray-600 transition-colors hidden sm:block">
                            <span className="text-xl">😃</span>
                        </button>
                        <button
                            onClick={handleSendMessage}
                            className="flex-1 bg-white dark:bg-slate-800 h-10 rounded-full px-4 text-sm text-gray-500 dark:text-gray-400 flex items-center text-left hover:bg-gray-50 transition-colors border border-transparent focus:border-green-500 outline-none"
                        >
                            Écrire un message...
                        </button>
                        <button
                            onClick={handleSendMessage}
                            className="w-10 h-10 bg-[#00A884] hover:bg-[#008f6f] rounded-full flex items-center justify-center text-white shadow-sm transition-all hover:scale-105 active:scale-95"
                        >
                            <Send className="w-5 h-5 ml-0.5" />
                        </button>
                    </div>

                    {/* Big CTA with Call Option */}
                    <div className="bg-white dark:bg-slate-800 p-3 pt-2 border-t border-gray-100 dark:border-gray-700 relative z-20 space-y-3">
                        {/* Urgency badge */}
                        <div className="flex items-center justify-center gap-2 text-[11px] text-amber-700 bg-amber-50 py-1.5 px-3 rounded-lg">
                            <Clock className="w-3 h-3" />
                            <span className="font-medium">Devis gratuit en 2 min • Dès 80€</span>
                        </div>

                        <button
                            onClick={handleSendMessage}
                            className="w-full py-3.5 bg-[#25D366] hover:bg-[#1fa851] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/20 active:scale-[0.98]"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Demander mon devis gratuit
                        </button>

                        {/* Alternative Call Option */}
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-[11px] text-gray-400">Pas de WhatsApp ?</span>
                            <a
                                href="tel:+32472303701"
                                className="text-[11px] font-bold text-gray-600 dark:text-gray-300 hover:text-[#075E54] dark:hover:text-[#25D366] transition-colors flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md"
                            >
                                <Phone className="w-3 h-3" />
                                Appeler le 0472 30 37 01
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Button Container */}
            <div className="flex items-center gap-4">
                {/* Desktop Label */}
                {!isOpen && (
                    <div
                        onClick={handleOpen}
                        className="hidden md:flex items-center gap-3 animate-fade-in-right cursor-pointer group"
                    >
                        <div className="bg-white dark:bg-slate-900 px-5 py-2.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-800 relative transition-transform group-hover:-translate-x-1">
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 whitespace-nowrap flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Devis gratuit en 2 min 💬
                            </p>
                        </div>
                    </div>
                )}

                {/* Main Button */}
                <button
                    onClick={handleOpen}
                    className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] z-50 ${isOpen
                        ? 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rotate-90 scale-90'
                        : 'bg-[#25D366] hover:bg-[#20bd5a] text-white hover:scale-110'
                        }`}
                    aria-label="Chat WhatsApp"
                >
                    {/* Ripple Effect */}
                    {!isOpen && !hasInteracted && (
                        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-75 animate-ping"></span>
                    )}

                    {isOpen ? (
                        <X className="w-6 h-6 md:w-7 md:h-7" />
                    ) : (
                        <MessageCircle className="w-8 h-8 md:w-9 md:h-9 fill-current" />
                    )}

                    {/* Notification Badge */}
                    {!isOpen && !hasInteracted && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-slate-950 shadow-sm animate-bounce">
                            1
                        </span>
                    )}
                </button>
            </div>
        </div>
    )
}
