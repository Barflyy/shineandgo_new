import { notFound } from 'next/navigation';

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Rediriger vers la page d'accueil pour les pages dynamiques non gérées
  notFound();
} 