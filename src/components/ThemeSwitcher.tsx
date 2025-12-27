'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<string | null>(null)

    useEffect(() => {
        // Init theme
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark')
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
        }
    }, [])

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    if (!theme) return null

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-full bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-amber-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
            aria-label="Changer de thème"
        >
            <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'dark' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
                <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'light' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
        </button>
    )
}
