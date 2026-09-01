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

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | TechBeeps",
    };
  }

  return {
    title: service.seo?.title || `${service.title} | TechBeeps`,
    description: service.seo?.description || service.hero.desc,
    keywords: service.seo?.keywords,
    openGraph: {
      title: service.seo?.title || `${service.title} | TechBeeps`,
      description: service.seo?.description || service.hero.desc,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}
