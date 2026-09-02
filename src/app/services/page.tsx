import { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { getAllServices } from "@/lib/services";
import {
  SITE_URL,
  createBreadcrumbsSchema,
  ORGANIZATION_SCHEMA,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Our Services - Software, Web & Mobile App Development",
  description:
    "Explore TechBeeps's suite of 21+ engineering services including AI Solutions, UI/UX Design, Next.js Web Development, Mobile Apps, Cloud Migration, and E-Commerce.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Our Services | Software, Web & Mobile App Development | TechBeeps",
    description:
      "Explore TechBeeps's suite of 21+ engineering services including AI Solutions, UI/UX Design, Next.js Web Development, Mobile Apps, Cloud Migration, and E-Commerce.",
    url: `${SITE_URL}/services`,
    type: "website",
    images: [
      {
        url: "/services-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TechBeeps All Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | TechBeeps Services",
    description:
      "21+ professional software engineering and digital transformation services.",
    images: ["/services-bg.jpg"],
  },
};

export default function ServicesPage() {
  const allServices = getAllServices();

  const servicesCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/services#webpage`,
    url: `${SITE_URL}/services`,
    name: "TechBeeps Engineering & Software Services",
    description:
      "Comprehensive list of digital transformation and development services offered by TechBeeps Services.",
    publisher: ORGANIZATION_SCHEMA,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/services/${service.slug}`,
        name: service.title,
        description: service.hero.desc,
      })),
    },
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesCollectionSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <ServicesClient />
    </>
  );
}
