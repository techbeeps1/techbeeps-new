import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getService, getAllServices } from "@/lib/services";
import ServiceTemplate from "@/app/components/services/ServiceTemplate";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

import {
  createBreadcrumbsSchema,
  createServiceSchema,
  SITE_URL,
} from "@/lib/seo-config";

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | TechBeeps",
    };
  }

  const rawTitle = service.seo?.title || service.title;
  const title = rawTitle.includes("TechBeeps")
    ? rawTitle.replace(/\s*\|\s*TechBeeps(\s*Services)?/gi, "").trim()
    : rawTitle;
  const description = service.seo?.description || service.hero.desc;
  const canonicalUrl = `${SITE_URL}/services/${slug}`;
  const ogImage = service.hero.bgImage
    ? `${SITE_URL}${service.hero.bgImage}`
    : `${SITE_URL}/services-bg.jpg`;

  return {
    title,
    description,
    keywords: service.seo?.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = createServiceSchema({
    title: service.title,
    description: service.hero.desc,
    slug: service.slug,
    image: service.hero.bgImage,
  });

  const breadcrumbSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: service.title, item: `/services/${service.slug}` },
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ServiceTemplate service={service} />
    </>
  );
}
