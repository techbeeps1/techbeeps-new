import { MetadataRoute } from "next";
import { getAllServices } from "@/lib/services";
import { getAllTeamMemberSlugs } from "@/lib/team";
import { getAllBlogPostSlugs } from "@/lib/wordpress";
import { SITE_URL } from "@/lib/seo-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/our-team`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Dynamic Service routes (21 services)
  const services = getAllServices();
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Team member routes
  const teamSlugs = getAllTeamMemberSlugs();
  const teamRoutes: MetadataRoute.Sitemap = teamSlugs.map((slug) => ({
    url: `${SITE_URL}/our-team/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Dynamic Blog routes from WordPress
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogSlugs = await getAllBlogPostSlugs();
    blogRoutes = blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.75,
    }));
  } catch (error) {
    console.error("Error generating blog routes for sitemap:", error);
  }

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes, ...blogRoutes];
}
