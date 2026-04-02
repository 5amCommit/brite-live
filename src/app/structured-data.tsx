export default function StructuredData() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "BRITE",
    url: "https://brite.live",
    logo: "https://brite.live/brand-assets/brite-logo-green.png",
    description:
      "Expert-guided bio-identical hormone replacement therapy backed by a world-class Medical Board of 18 physicians, pharmacists, and scientists.",
    foundingDate: "2009",
    telephone: "+1-888-471-0988",
    email: "info@brite.live",
    medicalSpecialty: "Endocrinology",
    sameAs: [
      "https://vimeo.com/brite",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hormone Therapy Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Compounded Bio-Identical Hormone Replacement Therapy (cBHRT)",
            description:
              "Personalized, organic-based bio-identical hormone formulations with advanced decision support and compliance tools.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}
