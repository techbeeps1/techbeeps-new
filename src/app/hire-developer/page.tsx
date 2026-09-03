import { Metadata } from "next";
import HireDeveloperClient from "@/app/hire-developer/HireDeveloperClient";
import {
  SITE_URL,
  createBreadcrumbsSchema,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Hire Dedicated Developers | Expert Web, App & AI Talent - TechBeeps",
  description:
    "Hire vetted, top-tier developers from TechBeeps for AI solutions, full-stack web, mobile apps, PHP, Next.js, and custom software. Flexible engagement models with rapid onboarding.",
  alternates: {
    canonical: `${SITE_URL}/hire-developer`,
  },
  openGraph: {
    title: "Hire Dedicated Developers | Expert Web, App & AI Talent - TechBeeps",
    description:
      "Scale your engineering team with dedicated developers from TechBeeps. From AI automation to robust web & mobile development, get expert talent tailored to your vision.",
    url: `${SITE_URL}/hire-developer`,
    type: "website",
    images: [
      {
        url: "/Migration.jpg",
        width: 1200,
        height: 630,
        alt: "Hire Dedicated Developers - TechBeeps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Developers - TechBeeps Services",
    description:
      "Scale your team with top 1% vetted developers for AI, web, mobile, and cloud software development.",
    images: ["/Migration.jpg"],
  },
};

export default function HireDeveloperPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/hire-developer#service`,
    url: `${SITE_URL}/hire-developer`,
    name: "Hire Dedicated Developers - TechBeeps Services",
    description:
      "Hire skilled, vetted software developers for AI solutions, full-stack web development, mobile applications, and enterprise IT projects.",
    provider: {
      "@type": "Organization",
      name: "TechBeeps Services",
      url: SITE_URL,
      logo: `${SITE_URL}/techbeepsLogo.svg`,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Developer Hiring Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hire AI & Machine Learning Developers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hire Full-Stack Web Developers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hire Dedicated Mobile App Developers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hire PHP & CMS Developers",
          },
        },
      ],
    },
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Hire Developer", item: "/hire-developer" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <HireDeveloperClient />
    </>
  );
}
