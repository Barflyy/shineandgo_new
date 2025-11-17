import PremiumHome from "./components/PremiumHome"

export default function HomePage() {
  return (
    <>
      {/* Organization Schema pour la page d'accueil */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shine&Go",
            "url": "https://shineandgo.be",
            "logo": "https://shineandgo.be/transformations/optimized/webp/apres01.webp",
            "description": "Service mobile de lavage et nettoyage voiture à domicile en Wallonie. Produits professionnels Koch-Chemie, résultat showroom garanti.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "postalCode": "4650",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.6386",
              "longitude": "5.7942"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+32472303701",
              "contactType": "customer service",
              "areaServed": "BE",
              "availableLanguage": ["French"]
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Liège"
              },
              {
                "@type": "City",
                "name": "Herve"
              },
              {
                "@type": "City",
                "name": "Verviers"
              },
              {
                "@type": "City",
                "name": "Battice"
              },
              {
                "@type": "City",
                "name": "Soumagne"
              }
            ],
            "priceRange": "€€",
            "serviceType": ["Car Wash", "Car Detailing", "Mobile Car Cleaning"],
            "openingHours": "Mo-Su 08:00-20:00"
          })
        }}
      />
      <PremiumHome />
    </>
  );
}

