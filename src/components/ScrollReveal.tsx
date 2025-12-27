'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
    duration?: number
    once?: boolean
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 600,
    once = true
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (once && ref.current) {
                        observer.unobserve(ref.current)
                    }
                } else if (!once) {
                    setIsVisible(false)
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [once])

    const getTransform = () => {
        switch (direction) {
            case 'up':
                return 'translateY(40px)'
            case 'down':
                return 'translateY(-40px)'
            case 'left':
                return 'translateX(40px)'
            case 'right':
                return 'translateX(-40px)'
            case 'fade':
                return 'translateY(0)'
            default:
                return 'translateY(40px)'
        }
    }

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate(0)' : getTransform(),
                transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}
