import { BUSINESS, DEVELOPER } from "@/lib/constants";
import { TEAM } from "@/lib/content";

export function DentistJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clinicasorrir.com.br";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: baseUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-22.9068", // DEMO - trocar pelas coordenadas reais
      longitude: "-43.1729",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    image: `${baseUrl}/og-image.jpg`, // Adicionar imagem OG depois
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "4", // DEMO
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Odontológicos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Limpeza Dental",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clareamento Dental",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Implante Dentário",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aparelho Ortodôntico",
          },
        },
      ],
    },
    founder: {
      "@type": "Person",
      name: TEAM[0].name,
      jobTitle: TEAM[0].role,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clinicasorrir.com.br";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    name: BUSINESS.name,
    image: `${baseUrl}/og-image.jpg`,
    description: BUSINESS.description,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "BR",
    },
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
