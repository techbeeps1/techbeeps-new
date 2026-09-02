import { Metadata } from "next";
import OurTeamClient from "./OurTeamClient";
import { getAllTeamMembers } from "@/lib/team";
import {
  SITE_URL,
  createBreadcrumbsSchema,
  ORGANIZATION_SCHEMA,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Meet Our Team - Tech Leaders, Architects & Designers",
  description:
    "Meet the skilled software engineers, full-stack developers, cloud architects, and UI/UX designers powering digital innovation at TechBeeps Services.",
  alternates: {
    canonical: `${SITE_URL}/our-team`,
  },
  openGraph: {
    title: "Meet Our Team | Tech Leaders, Architects & Designers | TechBeeps",
    description:
      "Meet the skilled software engineers, full-stack developers, cloud architects, and UI/UX designers powering digital innovation at TechBeeps Services.",
    url: `${SITE_URL}/our-team`,
    type: "website",
    images: [
      {
        url: "/team-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TechBeeps Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | TechBeeps Services",
    description:
      "Meet the skilled engineering and leadership team at TechBeeps Services.",
    images: ["/team-hero-bg.jpg"],
  },
};

export default function OurTeamPage() {
  const teamMembers = getAllTeamMembers();

  const teamCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/our-team#webpage`,
    url: `${SITE_URL}/our-team`,
    name: "TechBeeps Engineering Team & Leadership",
    description:
      "Meet the leadership, software developers, and architects at TechBeeps Services.",
    publisher: ORGANIZATION_SCHEMA,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: teamMembers.map((member, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/our-team/${member.slug}`,
        name: member.name,
        description: member.role,
      })),
    },
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Our Team", item: "/our-team" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamCollectionSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <OurTeamClient />
    </>
  );
}
