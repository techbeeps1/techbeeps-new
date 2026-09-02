import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";
import {
  SITE_URL,
  createBreadcrumbsSchema,
  ORGANIZATION_SCHEMA,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "About Us - Leading Software & Digital Engineering Agency",
  description:
    "Learn about TechBeeps Services, our mission, seasoned engineering team, and our decade-long commitment to delivering transformative web and mobile solutions.",
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: "About Us | Leading Software & Digital Engineering Agency | TechBeeps",
    description:
      "Learn about TechBeeps Services, our mission, seasoned engineering team, and our decade-long commitment to delivering transformative web and mobile solutions.",
    url: `${SITE_URL}/about-us`,
    type: "website",
    images: [
      {
        url: "/about-img.jpg",
        width: 1200,
        height: 630,
        alt: "About TechBeeps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About TechBeeps Services",
    description:
      "Learn about TechBeeps Services, our mission, and engineering philosophy.",
    images: ["/about-img.jpg"],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about-us#webpage`,
    url: `${SITE_URL}/about-us`,
    name: "About TechBeeps Services",
    description:
      "Learn about TechBeeps Services, our mission, seasoned engineering team, and our decade-long commitment to delivering transformative web and mobile solutions.",
    mainEntity: ORGANIZATION_SCHEMA,
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about-us" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <AboutUsClient />
    </>
  );
}
