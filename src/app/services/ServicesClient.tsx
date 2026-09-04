"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import TestimonialSlider from "../components/TestimonialSlider";
import LogoMarquee from "../components/LogoMarquee";
import GsapTextAnimation from "../components/GsapTextAnimation";
import ContentSwipUp from "../components/ContentSwipUp";
import AppDevelopmentCard from "../components/AppDevelopmentCard";

const servicesData = [
  {
    title: "AI Solutions",
    desc: "Transform your business with intelligent AI agents, custom LLM integrations, and end-to-end process automation.",
    tags: ["AI Agents", "LLM Integration", "Automation"],
    image: "/ai_solution_card.png",
    url: "/services/ai-solutions",
  },
  {
    title: "UI/UX Design",
    desc: "At TechBeeps Services, we create stunning, intuitive, and user-focused designs that drive engagement.",
    tags: ["UI/UX", "Figma Design", "Prototyping"],
    image: "/ui_ux_card.png",
    url: "/services/ui-ux-design",
  },
  {
    title: "Web Development",
    desc: "Get the best online presence through our customized, high-performance web development solutions.",
    tags: ["Next.js", "React.js", "Full Stack"],
    image: "/web_dev_card.png",
    url: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    desc: "We offer full-cycle mobile app development services for iOS and Android with native performance.",
    tags: ["React Native", "Flutter", "iOS & Android"],
    image: "/mobile_app_dev_card.png",
    url: "/services/mobile-app-development",
  },
  {
    title: "Shopify Development",
    desc: "Upgrade your online store presence with high-converting custom Shopify development and Shopify Plus.",
    tags: ["E-Commerce", "Shopify Plus", "Custom Themes"],
    image: "/shopify_dev_card.png",
    url: "/services/shopify-development",
  },
  {
    title: "WordPress Development",
    desc: "Custom WordPress websites, bespoke theme architecture, and plugin development built for scale and security.",
    tags: ["WordPress", "Custom Themes", "Plugin Dev"],
    image: "/wordpress_dev_card.jpg",
    url: "/services/wordpress-development",
  },
  {
    title: "Laravel Development",
    desc: "Enterprise-grade PHP web applications, robust REST APIs, and scalable backend architectures built for performance.",
    tags: ["Laravel", "PHP MVC", "RESTful APIs"],
    image: "/laravel_dev_card.jpg",
    url: "/services/laravel-development",
  },
  {
    title: "Python Development",
    desc: "From web backends to AI-powered automation, we deliver tailored Python, Django, and FastAPI solutions.",
    tags: ["Python", "FastAPI", "Data Scraping"],
    image: "/python_dev_card.png",
    url: "/services/python-development",
  },
  {
    title: "Cloud Services & Migration",
    desc: "Strengthen your business with cloud architecture, zero-downtime migration, and AWS/Azure management.",
    tags: ["AWS", "Azure", "GCP", "Cloud Migration"],
    image: "/cloud_services_card.jpg",
    url: "/services/cloud-services",
  },
  {
    title: "DevOps & QA Services",
    desc: "Automate CI/CD pipelines, ensure zero-defect software releases, and manage resilient cloud infrastructure.",
    tags: ["CI/CD", "Automated QA", "Kubernetes", "Docker"],
    image: "/devops_qa_card.jpg",
    url: "/services/devops-qa",
  },
  {
    title: "WooCommerce Development",
    desc: "Custom WooCommerce online stores, tailored plugins, and high-conversion shopping cart experiences.",
    tags: ["WooCommerce", "WordPress", "E-Commerce"],
    image: "/woocommerce_dev_card.jpg",
    url: "/services/woocommerce-development",
  },
  {
    title: "Magento Development",
    desc: "Enterprise Adobe Commerce and Magento 2 store development, migration, and custom module architecture.",
    tags: ["Magento 2", "Adobe Commerce", "Enterprise B2B"],
    image: "/magento_dev_card.jpg",
    url: "/services/magento-development",
  },
  {
    title: "Node.js Development",
    desc: "High-throughput asynchronous backends, microservices, and real-time collaborative web applications.",
    tags: ["Node.js", "Microservices", "WebSockets"],
    image: "/nodejs_dev_card.jpg",
    url: "/services/nodejs-development",
  },
  {
    title: "PHP Development",
    desc: "Custom PHP 8+ web development, CMS solutions, and database optimization built for speed and security.",
    tags: ["PHP 8", "MySQL", "Web Applications"],
    image: "/php_dev_card.jpg",
    url: "/services/php-development",
  },
  {
    title: "PrestaShop Development",
    desc: "Custom PrestaShop store design, bespoke module development, and seamless checkout optimization.",
    tags: ["PrestaShop", "Module Dev", "Multi-Currency"],
    image: "/prestashop_card.jpg",
    url: "/services/prestashop-development",
  },
  {
    title: "AngularJS Development",
    desc: "Dynamic single-page applications (SPAs), component architecture, and legacy AngularJS migration services.",
    tags: ["AngularJS", "Single Page Apps", "TypeScript"],
    image: "/angular_dev_card.jpg",
    url: "/services/angularjs-development",
  },
  {
    title: "WhatsApp Automation",
    desc: "24/7 AI-powered customer support, order updates, and automated marketing via official WhatsApp Business API.",
    tags: ["WhatsApp API", "AI Chatbots", "CRM Sync"],
    image: "/whatsapp_automation_card.jpg",
    url: "/services/whatsapp-automation",
  },
  {
    title: "Accessibility Expertise",
    desc: "Ensure full WCAG 2.1 and ADA compliance, screen reader support, and inclusive digital experiences.",
    tags: ["WCAG 2.1", "ADA Compliance", "Screen Readers"],
    image: "/accessibility_card.jpg",
    url: "/services/accessibility-expertise",
  },
  {
    title: "Landing Page Design",
    desc: "High-impact, conversion-focused landing pages engineered for PPC campaigns, product launches, and lead gen.",
    tags: ["Landing Pages", "PPC Ads", "Conversion Rate"],
    image: "/landing_page_card.jpg",
    url: "/services/landing-page-design",
  },
  {
    title: "Ecommerce Website Development",
    desc: "Scalable multi-vendor platforms, custom shopping carts, and seamless payment gateway integrations.",
    tags: ["Multi-Vendor", "Payment Gateways", "Online Store"],
    image: "/ecommerce_card.png",
    url: "/services/ecommerce-development",
  },
  {
    title: "Responsive Web Design",
    desc: "Mobile-first, fluid grid web designs that deliver pixel-perfect experiences across all device screens.",
    tags: ["Mobile-First", "Fluid Layouts", "Cross-Device"],
    image: "/responsive_design_card.png",
    url: "/services/responsive-web-design",
  },
];

export default function ServicesClient() {
  return (
    <>
      <Header />      
      <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">       
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.jpg"
            alt="TechBeeps Services Hero Background"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0, 0, 0, 0.18)_20%,rgba(0,0,0,0)_54%,#000000_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/80 via-transparent to-[#05010f]/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 lg:bottom-10 -left-20 lg:-left-40 bg-[#504CFF] blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
          <div className="absolute top-0 lg:top-20 -right-20 lg:-right-20 bg-primary blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
        </div>       
        <div className="container relative z-10 px-4 mt-auto">
          <div className="backdrop-blur-[25px] rounded-[30px] p-6 md:p-8 lg:p-[40px] bg-[#868686]/10 ">
            <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[97px] text-white mb-4 lg:mb-6">
              <GsapTextAnimation mainText={"Innovative IT Solutions for <br/> Modern Businesses "} mainClass="flex flex-wrap " />
            </h1>
            <ContentSwipUp className="md:text-[20px]" top="100">
              We help businesses grow with AI-powered solutions, scalable web development, and high-performing e-commerce platforms.
            </ContentSwipUp>
          </div>
        </div>
      </section>     
      <section className="py-20 lg:py-[100px] bg-[#05010f] text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.2 }}
              >
                <AppDevelopmentCard
                  title={service.title}
                  desc={service.desc}
                  tags={service.tags}
                  image={service.image}
                  href={service.url}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialSlider />
      <LogoMarquee />
      <CallToAction />
      <Footer />
    </>
  );
}
