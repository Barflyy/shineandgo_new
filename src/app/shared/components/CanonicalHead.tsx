'use client';

import { usePathname } from 'next/navigation';
import { generateCanonicalUrl } from '../utils/canonical';

interface CanonicalHeadProps {
  path?: string;
}

export default function CanonicalHead({ path }: CanonicalHeadProps) {
  const pathname = usePathname();
  const currentPath = path || pathname;
  const canonicalUrl = generateCanonicalUrl(currentPath);
  
  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      {/* Meta tags pour éviter la duplication */}
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:url" content={canonicalUrl} />
    </>
  );
} 