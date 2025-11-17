import { notFound } from 'next/navigation';

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Rediriger vers la page d'accueil pour les pages dynamiques non gérées
  notFound();
} 