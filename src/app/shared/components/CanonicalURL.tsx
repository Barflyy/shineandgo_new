'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';

interface CanonicalURLProps {
  path?: string;
}

export default function CanonicalURL({ path }: CanonicalURLProps) {
  const pathname = usePathname();
  const currentPath = path || pathname;
  
  // Construire l'URL canonique sans www
  const canonicalUrl = `https://shineandgo.be${currentPath}`;
  
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
} 