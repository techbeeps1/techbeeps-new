import { testimonials } from "@/data/testimonials";

export const SITE_URL = "https://techbeeps.com";
export const SITE_NAME = "TechBeeps Services";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/services-bg.jpg`;

/**
 * Structured Review Schema built from client testimonials
 */
export const REVIEWS_SCHEMA = testimonials.map((t) => ({
  "@type": "Review",
  author: {
    "@type": "Person",
    name: t.name,
  },
  datePublished: t.datePublished,
  reviewBody: t.quote,
  reviewRating: {
    "@type": "Rating",
    ratingValue: t.stars.toString(),
    bestRating: "5",
    worstRating: "1",
  },
}));

/**
 * Aggregate Rating Schema for rich snippets in search results
 */
export const AGGREGATE_RATING_SCHEMA = {
  "@type": "AggregateRating",
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  ratingCount: testimonials.length.toString(),
  reviewCount: testimonials.length.toString(),
};

/**
 * LocalBusiness / ProfessionalService / Organization Schema
 * Provides rich business signals, physical & geo address, service catalog, and review ratings.
 */
export const LOCAL_BUSINESS_SCHEMA = {
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": "https://techbeeps.com/#organization",
  name: "TechBeeps Services",
  alternateName: [
    "TechBeeps",
    "TechBeeps IT Solutions",
    "TechBeeps Software Development",
  ],
  legalName: "TechBeeps Services",
  url: "https://techbeeps.com/",
  logo: {
    "@type": "ImageObject",
    "@id": "https://techbeeps.com/#logo",
    url: "https://techbeeps.com/techbeepsLogo.svg",
    contentUrl: "https://techbeeps.com/techbeepsLogo.svg",
    caption: "TechBeeps Services Logo",
  },
  image: {
    "@type": "ImageObject",
    url: "https://techbeeps.com/services-bg.jpg",
  },
  description:
    "TechBeeps is a leading IT and custom software development agency offering high-performance web applications, mobile apps, SaaS platforms, MVP development, UI/UX design, cloud engineering, and AI digital transformation services.",
  email: "tech.beeps@outlook.com",
  telephone: "+91-141-452-3119",
  priceRange: "$$",
  currenciesAccepted: "USD, EUR, GBP, INR, CAD, AUD",
  paymentAccepted: "Credit Card, Bank Wire Transfer, Stripe, PayPal",
  address: {
    "@type": "PostalAddress",
    streetAddress: "207, Pinkcity-2, Main Kalwar Rd, Jhotwara",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9458,
    longitude: 75.7487,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Country", name: "Sweden" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    "https://www.facebook.com/techbeepss/",
    "https://x.com/techbeepss",
    "https://www.instagram.com/techbeeps/",
    "https://www.youtube.com/@techbeepss",
    "https://www.linkedin.com/company/techbeeps/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-141-452-3119",
      contactType: "customer support",
      email: "tech.beeps@outlook.com",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["US", "GB", "NL", "SE", "CA", "AU", "AE", "IN"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-811-226-9797",
      contactType: "sales",
      email: "tech.beeps@outlook.com",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software & Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Development",
          url: "https://techbeeps.com/services/web-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          url: "https://techbeeps.com/services/mobile-app-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Solutions & Automation",
          url: "https://techbeeps.com/services/ai-solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Development Services",
          url: "https://techbeeps.com/services/saas-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MVP Development Services",
          url: "https://techbeeps.com/services/mvp-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CMS Development Services",
          url: "https://techbeeps.com/services/cms-development",
        },
      },
    ],
  },
  aggregateRating: AGGREGATE_RATING_SCHEMA,
  review: REVIEWS_SCHEMA,
};

/**
 * Backward compatibility alias
 */
export const ORGANIZATION_SCHEMA = LOCAL_BUSINESS_SCHEMA;

export const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": "https://techbeeps.com/#website",
  url: "https://techbeeps.com/",
  name: "TechBeeps Services",
  description: "Next-Gen Software Development, Mobile Apps & AI Engineering",
  publisher: {
    "@id": "https://techbeeps.com/#organization",
  },
  inLanguage: "en-US",
};

export const HOME_PAGE_SCHEMA = {
  "@type": "WebPage",
  "@id": "https://techbeeps.com/#webpage",
  url: "https://techbeeps.com/",
  name: "TechBeeps Services | Custom Software, Web & Mobile App Development",
  isPartOf: {
    "@id": "https://techbeeps.com/#website",
  },
  about: {
    "@id": "https://techbeeps.com/#organization",
  },
  publisher: {
    "@id": "https://techbeeps.com/#organization",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://techbeeps.com/services-bg.jpg",
  },
  description:
    "TechBeeps is a premier software development agency delivering high-performance web applications, iOS and Android mobile apps, cloud architectures, SaaS platforms, and AI solutions.",
  inLanguage: "en-US",
};

/**
 * The complete single unified JSON-LD schema for the website root
 */
export const COMPLETE_HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [LOCAL_BUSINESS_SCHEMA, WEBSITE_SCHEMA, HOME_PAGE_SCHEMA],
};

export function createBreadcrumbsSchema(
  items: { name: string; item: string }[]
) {
  return {
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
      "Netherlands",
      "Sweden",
      "Canada",
      "Australia",
      "United Arab Emirates",
      "India",
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
