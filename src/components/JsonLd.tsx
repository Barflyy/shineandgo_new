export default function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://shineandgo.be/#organization",
        "name": "Shine&Go",
        "alternateName": "Shine and Go",
        "description": "Lavage voiture à domicile en Wallonie. Nettoyage intérieur et extérieur professionnel avec produits Koch-Chemie. Service mobile dès 80€.",
        "url": "https://shineandgo.be",
        "telephone": "+32472303701",
        "email": "contact@shineandgo.be",
        "logo": {
            "@type": "ImageObject",
            "url": "https://shineandgo.be/logo.png",
            "width": 512,
            "height": 512
        },
        "image": "https://shineandgo.be/og-image.jpg",
        "priceRange": "€€",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Liège",
            "addressRegion": "Wallonie",
            "addressCountry": "BE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.6326,
            "longitude": 5.5797
        },
        "areaServed": [
            { "@type": "City", "name": "Herve" },
            { "@type": "City", "name": "Battice" },
            { "@type": "City", "name": "Liège" },
            { "@type": "City", "name": "Verviers" },
            { "@type": "City", "name": "Heusy" },
            { "@type": "City", "name": "Dison" },
            { "@type": "City", "name": "Spa" },
            { "@type": "City", "name": "Malmedy" },
            { "@type": "City", "name": "Seraing" },
            { "@type": "City", "name": "Theux" },
            { "@type": "City", "name": "Melen" },
            { "@type": "City", "name": "Ans" },
            { "@type": "City", "name": "Soumagne" },
            { "@type": "AdministrativeArea", "name": "Wallonie" }
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "19:00"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
        },
        "sameAs": [
            "https://www.facebook.com/shineandgo.be",
            "https://www.instagram.com/shineandgo.be"
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Lavage voiture à domicile",
        "serviceType": "Lavage automobile mobile",
        "provider": {
            "@type": "LocalBusiness",
            "@id": "https://shineandgo.be/#organization"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Wallonie, Belgique"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de lavage automobile",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Lavage Intérieur Voiture",
                        "description": "Lavage intérieur voiture professionnel : aspiration complète, nettoyage plastiques, vitres intérieures, parfum longue durée"
                    },
                    "price": "80",
                    "priceCurrency": "EUR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Lavage Extérieur Voiture",
                        "description": "Lavage extérieur voiture à la main : carrosserie, jantes et pneus, vitres, cire de protection"
                    },
                    "price": "80",
                    "priceCurrency": "EUR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Lavage Complet Voiture",
                        "description": "Lavage voiture complet à domicile : intérieur + extérieur pour un résultat showroom. Économie de 10€."
                    },
                    "price": "150",
                    "priceCurrency": "EUR"
                }
            ]
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Shine&Go",
        "url": "https://shineandgo.be"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Combien coûte un lavage voiture à domicile ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nos tarifs démarrent à 80€ pour un lavage extérieur, 80€ pour l'intérieur, et 150€ pour le lavage complet. Un supplément s'applique selon la taille du véhicule (SUV +20€, 7 places +30€)."
                }
            },
            {
                "@type": "Question",
                "name": "Comment fonctionne le lavage voiture à domicile ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vous réservez via WhatsApp ou par téléphone, on se déplace chez vous avec tout notre matériel professionnel. Vous n'avez rien à faire !"
                }
            },
            {
                "@type": "Question",
                "name": "Combien de temps dure une intervention ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Une intervention complète dure en moyenne 90 minutes. Nous prenons le temps nécessaire pour un résultat showroom garanti."
                }
            },
            {
                "@type": "Question",
                "name": "Quelle différence avec un car wash classique ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contrairement aux rouleaux qui rayent, nous lavons à la main avec la technique des 2 seaux. Résultat : pas de micro-rayures, finition parfaite et vous gagnez du temps."
                }
            },
            {
                "@type": "Question",
                "name": "Dans quelles zones intervenez-vous ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous intervenons dans toute la Wallonie : Liège, Verviers, Herve, Battice, Heusy, Dison, Spa, Malmedy, Seraing, Theux, Melen et environs. Déplacement gratuit jusqu'à 25 km."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
