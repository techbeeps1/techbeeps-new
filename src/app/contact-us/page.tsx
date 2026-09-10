import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";
import {
  SITE_URL,
  createBreadcrumbsSchema,
  ORGANIZATION_SCHEMA,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free IT & Software Consultation",
  description:
    "Get in touch with TechBeeps Services for custom web development, mobile apps, AI solutions, and digital transformation. Request a free estimate today.",
  alternates: {
    canonical: `${SITE_URL}/contact-us`,
  },
  openGraph: {
    title: "Contact Us | Get a Free IT & Software Consultation | TechBeeps",
    description:
      "Get in touch with TechBeeps Services for custom web development, mobile apps, AI solutions, and digital transformation. Request a free estimate today.",
    url: `${SITE_URL}/contact-us`,
    type: "website",
    images: [
      {
        url: "/services-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Contact TechBeeps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TechBeeps Services",
    description:
      "Connect with our engineers and digital strategists for your next project.",
    images: ["/services-bg.jpg"],
  },
};

export default function ContactUsPage() {
  const contactSchema = {
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact-us#webpage`,
    url: `${SITE_URL}/contact-us`,
    name: "Contact TechBeeps Services",
    description:
      "Contact TechBeeps Services for software development, AI solutions, and mobile app development.",
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact-us" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [contactSchema, breadcrumbsSchema],
          }),
        }}
      />
      <ContactUsClient />
    </>
  );
}
