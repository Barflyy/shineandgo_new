import { Metadata } from 'next'

export const metadata: Metadata = {
  other: {
    'google-site-verification': 'votre-code-de-verification-google',
  },
}

export default function VerificationPage() {
  return (
    <div>
      <h1>Page de vérification Google Search Console</h1>
      <p>Cette page est utilisée pour la vérification de votre site dans Google Search Console.</p>
      <p>Remplacez "votre-code-de-verification-google" par votre code réel.</p>
    </div>
  )
} 