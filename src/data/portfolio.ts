export type PortfolioCategory =
  | "All"
  | "App Development"
  | "Next.js"
  | "Web Development"
  | "Shopify"
  | "React.js"
  | "Figma"
  | "WordPress";

export interface Project {
  title: string;
  // Category can be a single category (e.g. "WordPress") or multiple categories (e.g. ["WordPress", "Web Development"])
  category: PortfolioCategory | string | (PortfolioCategory | string)[];
  tags?: string[];
  image: string;
  link?: string;
  description?: string;
}

export const portfolioCategories: string[] = [
  "All",
  "App Development",
  "Next.js",
  "Web Development",
  "Shopify",
  "React.js",
  "Figma",
  "WordPress",
  "Magento",
];

/**
 * Helper to check if a project matches the selected category filter.
 * Supports single category string ("WordPress") or array (["WordPress", "Web Development"]).
 * Case-insensitive comparison with whitespace trimming.
 */
export function isProjectInCategory(project: Project, categoryName: string): boolean {
  if (!categoryName || categoryName.trim().toLowerCase() === "all") return true;

  const target = categoryName.trim().toLowerCase();

  if (Array.isArray(project.category)) {
    return project.category.some(
      (cat) => typeof cat === "string" && cat.trim().toLowerCase() === target
    );
  }

  if (typeof project.category === "string") {
    return project.category.trim().toLowerCase() === target;
  }

  return false;
}

export const portfolioProjects: Project[] = [
  {
    title: "My Mind And Me",
    category: "Next.js",
    tags: ["Web Development", "Next.js"],
    image: "/my-mind.jpg",
    link: "",
    description: "A mental health platform offering assessment tools and innovative approaches to help people better understand and improve their mental well-being.",
  },
  {
    title: "Merger Lawyer",
    category: "Next.js",
    tags: ["Web Development", "Next.js"],
    image: "/merger-lawyer.jpg",

    description: "A boutique M&A law firm helping founders and private companies navigate acquisitions, sales, and complex business transactions.",
  },
  {
    title: "Ananta Mobile App Development",
    category: "App Development",
    tags: ["App Development", "iOS & Android"],
    image: "/ananta-img.jpg",

    description: "Next.Js based web application which offers free assesment for those who want to seek Ayurverdic treatments.",
  },
  {
    title: "Techbeeps CRM",
    category: "Web Development",
    tags: ["Web Development", "CRM"],
    image: "/crm-img.jpg",
    description: "This CRM project was developed to provide businesses with a centralized platform to manage customer relationships.",
  },

  {
    title: "Optimalrating",
    category: "React.js",
    tags: ["React.js", "Mean Stack"],
    image: "/optimal-img.jpg",
    link: "https://www.optimalrating.com/",
    description: "A rating platform that helps users evaluate and compare businesses or services through ratings and insights.",
  },
  {
    title: "eCommerce Marketplace",
    category: "Magento",
    tags: ["Magento", "E-commerce"],
    image: "/indeshop-img.jpg",
    link: "https://www.indeshop.nl/",
    description: "An online store specializing in original gifts, wallets, bags, accessories, watches, and lifestyle products.",
  },
  {
    title: "Anthology Magazine Website Development",
    category: "WordPress",
    tags: ["Web Development"],
    image: "/anthology.jpg",
    link: "https://anthology-magazine.com/",
    description: "Anthology is a modern, inspirational and beautifully designed magazine that features luxury goods and services such as exciting travel destinations",
  },
  {
    title: "Charming Hotels USA",
    category: "WordPress",
    tags: ["Web Development"],
    image: "/Charming-Hotel.jpg",
    link: "https://charminghotelsusa.com/",
    description: "We analyze every qualifying hotel, inn, resort, lodge and bed & breakfast in our United States dataset, then publish only the properties with a reason to be remembered.",
  },
  {
    title: "Drinkhydrant Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/drink.jpg",
    link: "https://www.drinkhydrant.com/",
    description: "Everyday for both of us was plagued by classic burnout—frequent headaches, lack of focus, and low energy.",
  },
  {
    title: "Grass Florist",
    category: "WordPress",
    tags: ["Web Development"],
    image: "/grassflorist.jpg",
    link: "https://grassflorist.com/",
    description: "At Grass Florist, we don’t just sell flowers; we create heartfelt experiences.",
  },
  {
    title: "Hamilton Weed Delivery",
    category: "WordPress",
    tags: ["Web Development"],
    image: "/hamilton.jpg",
    link: "https://hamiltonweeddelivery.co/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Magic Mushrooms",
    category: "WordPress",
    tags: ["Web Development"],
    image: "/magicmashrooms.jpg",

    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Nabox Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/nabox.jpg",
    link: "https://nabox.com.br/",
    description: "Nabox is a Brazilian e-commerce brand that sells glass food storage containers with hermetic (airtight) lids.",
  },
  {
    title: "Surf Style Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/surfstyle.jpg",
    link: "https://surfstyle.com/",
    description: "Surf Style is a story of enduring friendship. From five separate paths that converged over twenty years ago, grew a new brand rooted in family, loyalty, legacy and good waves. ",
  },
  {
    title: "The Makeupbar Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/makeupbar.jpg",
    link: "https://the-makeupbar.com/",
    description: "The Makeup Bar brings a touch of luxury to your beauty routine with its premium textures, authentic shades, and effortless application.",
  },
  {
    title: "Yesdarling Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/yesdarling.jpg",
    link: "https://yesdarling.net/",
    description: "Yes Darling – A premier beauty studio in Orange County offering tailored skincare and permanent-makeup services.",
  },
  {
    title: "Empowering Legal Solutions",
    category: "Figma",
    tags: ["Figma"],
    image: "/ELS-2.jpg",
    description: "A legal services website helping businesses navigate corporate transactions and achieve effective legal outcomes.",
  },
];
