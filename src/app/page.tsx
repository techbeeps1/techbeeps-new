import { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_URL, COMPLETE_HOME_SCHEMA } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "TechBeeps Services | Custom Software, Web & Mobile App Development",
  description:
    "TechBeeps is a premier software development agency delivering high-performance web applications, iOS/Android mobile apps, cloud architectures, and AI solutions.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "TechBeeps Services | Custom Software, Web & Mobile App Development",
    description:
      "Transform your business with cutting-edge web development, mobile applications, cloud engineering, and AI digital transformation services.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: "/services-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TechBeeps Home Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBeeps Services | Software & App Development",
    description:
      "Premier software engineering, mobile apps, and AI digital transformation services.",
    images: ["/services-bg.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(COMPLETE_HOME_SCHEMA),
        }}
      />
      <HomeClient />
    </>
  );
}
