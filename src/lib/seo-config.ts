/**
 * TechBeeps Global SEO & Schema.org (JSON-LD) Configuration
 */

export const SITE_URL = "https://techbeeps.co.in";
export const SITE_NAME = "TechBeeps Services";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/services-bg.jpg`;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "TechBeeps Services",
  alternateName: "TechBeeps",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/tech-logo.png`,
    caption: "TechBeeps Services Logo",
  },
  image: `${SITE_URL}/services-bg.jpg`,
  description:
    "Leading IT & software development company offering bespoke web development, mobile app solutions, UI/UX design, cloud engineering, and AI digital transformation services.",
  email: "info@techbeeps.co.in",
  telephone: "+91-141-452-3119",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TechBeeps Innovation Park",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302020",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/techbeeps",
    "https://twitter.com/techbeeps",
    "https://wa.me/918112269797",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-141-452-3119",
      contactType: "customer service",
      email: "info@techbeeps.co.in",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["IN", "US", "GB", "AE", "CA", "AU"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-811-226-9797",
      contactType: "sales",
      email: "asif@techbeeps.com",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "TechBeeps Services",
  description: "Next-Gen Software Development, Mobile Apps & AI Engineering",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function createBreadcrumbsSchema(
  items: { name: string; item: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item}`,
    })),
  };
}

export function createServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    url: `${SITE_URL}/services/${service.slug}`,
    image: service.image ? `${SITE_URL}${service.image}` : DEFAULT_OG_IMAGE,
    areaServed: service.areaServed || [
      "United States",
      "United Kingdom",
      "India",
      "United Arab Emirates",
      "Canada",
      "Australia",
    ],
    termsOfService: `${SITE_URL}/terms-and-conditions`,
  };
}

export function createBlogPostSchema(post: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    headline: post.headline,
    description: post.description,
    image: post.image ? [post.image] : [DEFAULT_OG_IMAGE],
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: post.authorName || "TechBeeps Engineering Team",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function createPersonSchema(person: {
  name: string;
  jobTitle: string;
  slug: string;
  bio?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
    url: `${SITE_URL}/our-team/${person.slug}`,
    image: person.image ? `${SITE_URL}${person.image}` : undefined,
    description: person.bio,
  };
}
