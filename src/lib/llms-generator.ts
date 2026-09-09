import { getAllServices } from "@/lib/services";
import { getAllTeamMembers } from "@/lib/team";
import { getBlogPosts, normalizePostForCard } from "@/lib/wordpress";
import { portfolioProjects } from "@/data/portfolio";
import { SITE_URL, SITE_NAME, ORGANIZATION_SCHEMA } from "@/lib/seo-config";

/**
 * Generates the standard dynamic llms.txt index according to llmstxt.org specification.
 */
export async function generateLlmsTxt(): Promise<string> {
  const services = getAllServices();
  const teamMembers = getAllTeamMembers();

  // Dynamically fetch recent blog posts from WordPress
  let recentPosts: Array<{ title: string; slug: string; excerpt: string }> = [];
  try {
    const { posts } = await getBlogPosts({ page: 1, perPage: 15 });
    recentPosts = posts.map((p) => {
      const card = normalizePostForCard(p);
      return {
        title: card.title,
        slug: card.slug,
        excerpt: card.excerpt,
      };
    });
  } catch (err) {
    console.error("Failed to fetch dynamic blog posts for llms.txt:", err);
  }

  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> TechBeeps Services is an IT and custom software engineering company delivering full-cycle web development, mobile applications, UI/UX design, cloud architecture, and AI digital transformation services.`,
    "",
    `TechBeeps partners with startups, scale-ups, and global enterprises to build scalable software solutions, modern web platforms (Next.js, React, Node.js, Python, Laravel, WordPress, Shopify), and AI-driven automation systems.`,
    "",
    "## Core Pages",
    "",
    `- [Homepage](${SITE_URL}/): Official website of TechBeeps Services.`,
    `- [About Us](${SITE_URL}/about-us): Company overview, technology mission, leadership, and core values.`,
    `- [Services](${SITE_URL}/services): Overview of end-to-end technology solutions, development, and consulting offerings.`,
    `- [Portfolio](${SITE_URL}/portfolio): Case studies, client projects, and verified production deployments.`,
    `- [Hire Dedicated Developers](${SITE_URL}/hire-developer): Flexible dedicated developers and engineering team augmentation.`,
    `- [Our Team](${SITE_URL}/our-team): Meet the leadership team, architects, and engineering talent behind TechBeeps.`,
    `- [Tech Insights & Blog](${SITE_URL}/blog): In-depth technical articles, engineering tutorials, and industry insights.`,
    `- [Contact Us](${SITE_URL}/contact-us): Connect with TechBeeps for project estimates, partnerships, and consultations.`,
    "",
    "## Services & Solutions",
    "",
  ];

  // Dynamic Services
  services.forEach((service) => {
    const desc =
      service.seo?.description ||
      service.hero?.desc?.slice(0, 160) ||
      "Professional software and web development services.";
    // Clean description to a single line
    const cleanDesc = desc.replace(/\r?\n|\r/g, " ").trim();
    lines.push(`- [${service.title}](${SITE_URL}/services/${service.slug}): ${cleanDesc}`);
  });

  lines.push("");
  lines.push("## Dedicated Engineering Roles For Hire");
  lines.push("");
  lines.push(`- [Hire Next.js / React Developers](${SITE_URL}/hire-developer): Dedicated frontend & full-stack engineers for high-performance web applications.`);
  lines.push(`- [Hire Python & AI Engineers](${SITE_URL}/hire-developer): Specialists in AI agent building, LLM integration, automation, and backend APIs.`);
  lines.push(`- [Hire Mobile App Developers](${SITE_URL}/hire-developer): Native iOS, Android, and cross-platform Flutter/React Native developers.`);
  lines.push(`- [Hire Node.js / Laravel Developers](${SITE_URL}/hire-developer): Backend specialists for enterprise APIs, microservices, and database design.`);
  lines.push(`- [Hire Shopify & eCommerce Developers](${SITE_URL}/hire-developer): Custom Shopify themes, apps, headless commerce, and scalable store setups.`);
  lines.push(`- [Hire WordPress / PHP Developers](${SITE_URL}/hire-developer): Custom plugin and theme development, speed optimization, and CMS maintenance.`);

  // Dynamic Recent Blog Posts
  if (recentPosts.length > 0) {
    lines.push("");
    lines.push("## Recent Articles & Technical Insights");
    lines.push("");
    recentPosts.forEach((post) => {
      const cleanExcerpt = post.excerpt.replace(/\r?\n|\r/g, " ").trim();
      lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${cleanExcerpt}`);
    });
  }

  // Dynamic Portfolio / Projects
  if (portfolioProjects.length > 0) {
    lines.push("");
    lines.push("## Featured Case Studies & Client Work");
    lines.push("");
    portfolioProjects.slice(0, 10).forEach((proj) => {
      const link = proj.link && proj.link.startsWith("http") ? proj.link : `${SITE_URL}/portfolio`;
      const desc = proj.description || proj.category;
      lines.push(`- [${proj.title}](${link}): ${proj.category} - ${desc} (Tags: ${proj.tags.join(", ")})`);
    });
  }

  // Dynamic Leadership & Team
  if (teamMembers.length > 0) {
    lines.push("");
    lines.push("## Leadership & Engineering Team");
    lines.push("");
    teamMembers.forEach((member) => {
      const shortBio = member.bio.slice(0, 150).trim() + "...";
      lines.push(`- [${member.name} - ${member.role}](${SITE_URL}/our-team/${member.slug}): ${shortBio}`);
    });
  }

  // Documentation and Policies
  lines.push("");
  lines.push("## Optional & Extended Resources");
  lines.push("");
  lines.push(`- [Full LLMs Context](${SITE_URL}/llms-full.txt): Comprehensive deep-dive documentation formatted for AI assistants and LLMs.`);
  lines.push(`- [XML Sitemap](${SITE_URL}/sitemap.xml): Complete XML sitemap indexing all live routes and articles.`);
  lines.push(`- [Privacy Policy](${SITE_URL}/privacy-policy): TechBeeps data privacy and client information policies.`);
  lines.push(`- [Terms & Conditions](${SITE_URL}/terms-and-conditions): Terms of service, engagement models, and legal agreements.`);

  // Contact Details
  lines.push("");
  lines.push("## Contact & Company Information");
  lines.push("");
  lines.push(`- Legal Name: ${ORGANIZATION_SCHEMA.name}`);
  lines.push(`- Official Website: ${SITE_URL}`);
  lines.push(`- Email: ${ORGANIZATION_SCHEMA.email}`);
  lines.push(`- Phone: ${ORGANIZATION_SCHEMA.telephone}`);
  lines.push(
    `- Headquarters: ${ORGANIZATION_SCHEMA.address.streetAddress}, ${ORGANIZATION_SCHEMA.address.addressLocality}, ${ORGANIZATION_SCHEMA.address.addressRegion} ${ORGANIZATION_SCHEMA.address.postalCode}, ${ORGANIZATION_SCHEMA.address.addressCountry}`
  );
  lines.push(`- Social Profiles: ${ORGANIZATION_SCHEMA.sameAs.join(", ")}`);

  return lines.join("\n") + "\n";
}

/**
 * Generates extended llms-full.txt document with in-depth service offerings,
 * FAQs, team experience, and tech stacks.
 */
export async function generateLlmsFullTxt(): Promise<string> {
  const baseContent = await generateLlmsTxt();
  const services = getAllServices();
  const teamMembers = getAllTeamMembers();

  const lines: string[] = [
    baseContent,
    "",
    "---",
    "",
    "# Detailed Services Catalog & Technical Capabilities",
    "",
  ];

  services.forEach((service) => {
    lines.push(`## ${service.title}`);
    lines.push(`URL: ${SITE_URL}/services/${service.slug}`);
    if (service.hero?.desc) {
      lines.push("");
      lines.push(service.hero.desc);
    }

    if (service.offeringsSection?.items && service.offeringsSection.items.length > 0) {
      lines.push("");
      lines.push(`### Key Offerings for ${service.title}`);
      service.offeringsSection.items.forEach((item) => {
        lines.push(`- **${item.title}**: ${item.desc}`);
        if (item.points && item.points.length > 0) {
          item.points.forEach((pt) => lines.push(`  - ${pt}`));
        }
      });
    }

    if (service.promiseSection?.bullets && service.promiseSection.bullets.length > 0) {
      lines.push("");
      lines.push(`### Why Choose TechBeeps for ${service.title}`);
      service.promiseSection.bullets.forEach((bullet) => {
        lines.push(`- ${bullet}`);
      });
    }

    if (service.faqSection?.faqs && service.faqSection.faqs.length > 0) {
      lines.push("");
      lines.push(`### Frequently Asked Questions about ${service.title}`);
      service.faqSection.faqs.forEach((faq) => {
        lines.push(`- **Q: ${faq.question}**`);
        lines.push(`  A: ${faq.answer}`);
      });
    }

    lines.push("");
    lines.push("---");
    lines.push("");
  });

  lines.push("# Detailed Team Background & Expertise");
  lines.push("");

  teamMembers.forEach((member) => {
    lines.push(`## ${member.name} - ${member.role} (${member.department})`);
    lines.push(`Profile URL: ${SITE_URL}/our-team/${member.slug}`);
    lines.push(`Location: ${member.location || "Jaipur, India"} | Experience: ${member.experience || "N/A"}`);
    lines.push(`Skills: ${member.skills.join(", ")}`);
    lines.push("");
    lines.push(member.bio);

    if (member.details?.overview) {
      lines.push("");
      lines.push(member.details.overview);
    }

    if (member.details?.keyResponsibilities && member.details.keyResponsibilities.length > 0) {
      lines.push("");
      lines.push("Key Responsibilities:");
      member.details.keyResponsibilities.forEach((resp) => lines.push(`- ${resp}`));
    }

    lines.push("");
    lines.push("---");
    lines.push("");
  });

  return lines.join("\n") + "\n";
}
