import { ServiceData } from "@/types/service";
import aiSolutionsData from "@/data/services/ai-solutions.json";
import mobileAppData from "@/data/services/mobile-app-development.json";
import uiUxData from "@/data/services/ui-ux-design.json";
import webDevData from "@/data/services/web-development.json";
import shopifyData from "@/data/services/shopify-development.json";
import pythonData from "@/data/services/python-development.json";
import laravelData from "@/data/services/laravel-development.json";
import wordPresData from "@/data/services/wordpress-development.json";

// TechBeeps Services from HTML conversion
import accessibilityData from "@/data/services/accessibility-expertise.json";
import angularJsData from "@/data/services/angularjs-development.json";
import cloudServicesData from "@/data/services/cloud-services.json";
import devopsQaData from "@/data/services/devops-qa.json";
import ecommerceDevData from "@/data/services/ecommerce-development.json";
import landingPageData from "@/data/services/landing-page-design.json";
import magentoDevData from "@/data/services/magento-development.json";
import nodejsDevData from "@/data/services/nodejs-development.json";
import phpDevData from "@/data/services/php-development.json";
import prestashopDevData from "@/data/services/prestashop-development.json";
import responsiveWebData from "@/data/services/responsive-web-design.json";
import whatsappAutomationData from "@/data/services/whatsapp-automation.json";
import woocommerceDevData from "@/data/services/woocommerce-development.json";

const servicesMap: Record<string, ServiceData> = {
  // Existing Services
  "ai-solutions": aiSolutionsData as ServiceData,
  "mobile-app-development": mobileAppData as ServiceData,
  "ui-ux-design": uiUxData as ServiceData,
  "web-development": webDevData as ServiceData,
  "shopify-development": shopifyData as ServiceData,
  "python-development": pythonData as ServiceData,
  "laravel-development": laravelData as ServiceData,
  "wordpress-development": wordPresData as ServiceData,

  // New Services
  "accessibility-expertise": accessibilityData as ServiceData,
  "angularjs-development": angularJsData as ServiceData,
  "cloud-services": cloudServicesData as ServiceData,
  "devops-qa": devopsQaData as ServiceData,
  "ecommerce-development": ecommerceDevData as ServiceData,
  "landing-page-design": landingPageData as ServiceData,
  "magento-development": magentoDevData as ServiceData,
  "nodejs-development": nodejsDevData as ServiceData,
  "php-development": phpDevData as ServiceData,
  "prestashop-development": prestashopDevData as ServiceData,
  "responsive-web-design": responsiveWebData as ServiceData,
  "whatsapp-automation": whatsappAutomationData as ServiceData,
  "woocommerce-development": woocommerceDevData as ServiceData,
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
