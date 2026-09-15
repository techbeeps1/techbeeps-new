import { Metadata } from "next";
import NotFoundClient from "./components/NotFoundClient";
import { SITE_URL, createBreadcrumbsSchema } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "404 - Page Not Found | TechBeeps Services",
  description:
    "The page you are looking for does not exist or has been moved. Return to TechBeeps homepage or explore our software and AI services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const notFoundSchema = {
    "@type": "WebPage",
    "@id": `${SITE_URL}/404#webpage`,
    name: "404 - Page Not Found",
    description: "The requested page was not found on TechBeeps Services.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "404 Not Found", item: "/404" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [notFoundSchema, breadcrumbsSchema],
          }),
        }}
      />
      <NotFoundClient />
    </>
  );
}
