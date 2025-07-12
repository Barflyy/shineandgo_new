'use client';

import { Shield } from 'lucide-react';

export default function GuaranteeStripe() {
  return (
    <div className="bg-accent/10 py-4 text-center text-sm">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-lg">🛡️</span>
        <span>
          <strong>Garantie Wipe-&-Wow :</strong> pas de « wow » ? On revient ou on rembourse.
        </span>
      </div>
    </div>
  );
} 