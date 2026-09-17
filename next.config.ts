import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "techbeeps.co.in",
      },
      {
        protocol: "https",
        hostname: "www.techbeeps.co.in",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
  async redirects() {
    return [
      // About
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      // Contact
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      // Career / Hire Developer
      {
        source: "/career",
        destination: "/hire-developer",
        permanent: true,
      },
      // Team
      {
        source: "/techbeeps-team",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/team/yaseen-ahmad",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/team/preetom-mondal",
        destination: "/our-team",
        permanent: true,
      },
      // Services
      {
        source: "/web-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/cms-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/wix-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/squarespace-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/opencart-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/digital-marketing",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/bubble-io-development",
        destination: "/services",
        permanent: true,
      },
      // Portfolio / Case Studies / Products / Projects / Blog posts
      {
        source: "/case-studies-page",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/case-studies/customer-relationship-management-development",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/case-studies/the-course-hunt-course-discovery-platform-development",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/unveiling-the-5-winning-factors-for-successful-web-development",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/product-category/products",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/product-category/products/recurring-subscription-monthly",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/projects/toronto-weed-delivery",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio-category/wordpress",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio-category/web-design",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio-category/figma",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio-category/next-js",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio-category/app-development",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/yesdarling-website",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/empowering-legal-solutions",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/grass-florist",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/legal-mystery",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/ecommerce-marketplace",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/lorenzolawfirm",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/techbeeps-crm",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
