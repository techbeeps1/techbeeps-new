import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";
import {
  SITE_URL,
  createBreadcrumbsSchema,
  ORGANIZATION_SCHEMA,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the TechBeeps Services Privacy Policy. Understand how we collect, store, safeguard, and process your personal and client data under strict data privacy laws.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | TechBeeps Services",
    description:
      "Understand how TechBeeps collects, stores, safeguards, and processes your personal and client data under strict data privacy laws.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    images: [
      {
        url: "/services-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TechBeeps Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TechBeeps Services",
    description:
      "Understand how TechBeeps safeguards your data and privacy.",
    images: ["/services-bg.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/privacy-policy#webpage`,
    url: `${SITE_URL}/privacy-policy`,
    name: "TechBeeps Privacy Policy",
    description:
      "Official Privacy Policy of TechBeeps Services outlining data protection, cookies, user rights, and security policies.",
    publisher: ORGANIZATION_SCHEMA,
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <PrivacyClient />
    </>
  );
}
