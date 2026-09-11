import { addressLine, site } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: site.legalName,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    image: `${site.url}/logo.jpg`,
    logo: `${site.url}/logo.jpg`,
    slogan: site.tagline,
    description:
      "Community-hospital oncology implementation and optimization on Meditech Expanse and Epic.",
    disambiguatingDescription:
      "Oncology EMR consulting firm in Bedford, Massachusetts. Not affiliated with Cohesys Inc., the medical-device company behind BoneTape (cohesys.com).",
    areaServed: "US",
    knowsAbout: [
      "Meditech Expanse oncology",
      "Epic Beacon",
      "Oncology pharmacy EHR",
      "Infusion nursing documentation",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      contactType: "sales",
      availableLanguage: "English",
    },
  };
}

export { addressLine };
