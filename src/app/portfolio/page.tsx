import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import {
  SITE_URL,
  createBreadcrumbsSchema,
  ORGANIZATION_SCHEMA,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies - Featured Tech Projects",
  description:
    "Explore TechBeeps's portfolio of enterprise CRM solutions, Next.js web applications, mobile apps, and custom Shopify & WordPress platforms.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: "Portfolio & Case Studies | Featured Tech Projects | TechBeeps",
    description:
      "Explore TechBeeps's portfolio of enterprise CRM solutions, Next.js web applications, mobile apps, and custom Shopify & WordPress platforms.",
    url: `${SITE_URL}/portfolio`,
    type: "website",
    images: [
      {
        url: "/services-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TechBeeps Featured Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | TechBeeps Services",
    description:
      "Explore our featured digital milestones, web apps, and mobile solutions.",
    images: ["/services-bg.jpg"],
  },
};

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/portfolio#webpage`,
    url: `${SITE_URL}/portfolio`,
    name: "TechBeeps Featured Projects & Case Studies",
    description:
      "Case studies and live project portfolio developed by TechBeeps Services.",
    publisher: ORGANIZATION_SCHEMA,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "CreativeWork",
          position: 1,
          name: "My Mind And Me",
          description: "Full Stack Next.js Web Development",
          image: `${SITE_URL}/my-mind.jpg`,
        },
        {
          "@type": "CreativeWork",
          position: 2,
          name: "Merger Lawyer",
          description: "Next.js Legal Tech Solution",
          image: `${SITE_URL}/merger-lawyer.jpg`,
        },
        {
          "@type": "CreativeWork",
          position: 3,
          name: "Ananta Mobile App Development",
          description: "iOS & Android Cross-Platform Application",
          image: `${SITE_URL}/ananta-img.jpg`,
        },
        {
          "@type": "CreativeWork",
          position: 4,
          name: "Techbeeps CRM",
          description: "Enterprise Custom CRM Platform",
          image: `${SITE_URL}/crm-img.jpg`,
        },
        {
          "@type": "CreativeWork",
          position: 5,
          name: "Staging Optimalrating",
          description: "React.js & MEAN Stack Application",
          image: `${SITE_URL}/optimal-img.jpg`,
        },
        {
          "@type": "CreativeWork",
          position: 6,
          name: "eCommerce Marketplace",
          description: "Custom Shopify Multi-Vendor Store",
          image: `${SITE_URL}/indeshop-img.jpg`,
        },
      ],
    },
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Portfolio", item: "/portfolio" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <PortfolioClient />
    </>
  );
}
