import { ServiceData } from "@/types/service";
import aiSolutionsData from "@/data/services/ai-solutions.json";
import mobileAppData from "@/data/services/mobile-app-development.json";
import uiUxData from "@/data/services/ui-ux-design.json";
import webDevData from "@/data/services/web-development.json";
import shopifyData from "@/data/services/shopify-development.json";
import pythonData from "@/data/services/python-development.json";
import laravelData from "@/data/services/laravel-development.json";
import wordPresData from "@/data/services/wordpress-development.json";

const servicesMap: Record<string, ServiceData> = {
  "ai-solutions": aiSolutionsData as ServiceData,
  "mobile-app-development": mobileAppData as ServiceData,
  "ui-ux-design": uiUxData as ServiceData,
  "web-development": webDevData as ServiceData,
  "shopify-development": shopifyData as ServiceData,
  "python-development": pythonData as ServiceData,
  "laravel-development": laravelData as ServiceData,
  "wordpress-development": wordPresData as ServiceData,

};

/**
 * Retrieve service data by slug. Returns null if not found.
 */
export function getServiceBySlug(slug: string): ServiceData | null {
  return servicesMap[slug] || null;
}

/**
 * Alias for getServiceBySlug.
 */
export function getService(slug: string): ServiceData | null {
  return getServiceBySlug(slug);
}

/**
 * Retrieve all registered services.
 */
export function getAllServices(): ServiceData[] {
  return Object.values(servicesMap);
}

/**
 * Retrieve all registered service slugs.
 */
export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesMap);
}
