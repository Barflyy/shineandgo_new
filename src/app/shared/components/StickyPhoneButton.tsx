'use client';

import { Phone } from 'lucide-react';

export default function StickyPhoneButton() {
  return (
    <a
      href="tel:+32472303701"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
      aria-label="Appeler Shine&Go"
    >
      <Phone className="w-6 h-6" />
      <span className="hidden md:inline font-semibold">Appelez-nous</span>
    </a>
  );
}

