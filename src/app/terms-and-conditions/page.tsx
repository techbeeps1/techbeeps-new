import { Metadata } from "next";
import TermsClient from "./TermsClient";
import {
  SITE_URL,
  createBreadcrumbsSchema,
  ORGANIZATION_SCHEMA,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review the terms, legal conditions, intellectual property rules, and service agreements governing TechBeeps software engineering and consulting services.",
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
  openGraph: {
    title: "Terms and Conditions | TechBeeps Services",
    description:
      "Review the terms, legal conditions, intellectual property rules, and service agreements governing TechBeeps software engineering and consulting services.",
    url: `${SITE_URL}/terms-and-conditions`,
    type: "website",
    images: [
      {
        url: "/services-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TechBeeps Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | TechBeeps Services",
    description:
      "Review the terms and conditions governing TechBeeps services and website.",
    images: ["/services-bg.jpg"],
  },
};

export default function TermsAndConditionsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/terms-and-conditions#webpage`,
    url: `${SITE_URL}/terms-and-conditions`,
    name: "TechBeeps Terms and Conditions",
    description:
      "Official Terms and Conditions of TechBeeps Services covering deliverables, client obligations, billing, and governing law.",
    publisher: ORGANIZATION_SCHEMA,
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Terms and Conditions", item: "/terms-and-conditions" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <TermsClient />
    </>
  );
}
