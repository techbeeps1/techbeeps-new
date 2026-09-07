export interface Project {
  title: string;
  category: string;
  tags: string[];
  image: string;
  link?: string;
  description?: string;
}

export const portfolioCategories = [
  "All",
  "App Development",
  "Next.js",
  "Web Development",
  "Shopify",
  "React.js",
  "Figma",
  "WordPress",
];

export const portfolioProjects: Project[] = [
  {
    title: "My Mind And Me",
    category: "Next.js",
    tags: ["Web Development", "Next.js"],
    image: "/my-mind.jpg",
    link: "",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Merger Lawyer",
    category: "Next.js",
    tags: ["Web Development", "Next.js"],
    image: "/merger-lawyer.jpg",
    link: "https://mergerlawyer.com/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Ananta Mobile App Development",
    category: "App Development",
    tags: ["App Development", "iOS & Android"],
    image: "/ananta-img.jpg",
    link: "",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Techbeeps CRM",
    category: "Web Development",
    tags: ["Web Development", "CRM"],
    image: "/crm-img.jpg",
    link: "",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Optimalrating",
    category: "React.js",
    tags: ["React.js", "Mean Stack"],
    image: "/optimal-img.jpg",
    link: "https://www.optimalrating.com/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "eCommerce Marketplace",
    category: "Shopify",
    tags: ["Shopify", "E-commerce"],
    image: "/indeshop-img.jpg",
    link: "https://www.indeshop.nl/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Anthology Magazine Website Development",
    category: "WordPress",
    tags: ["Web Development"],
    image: "/anthology.jpg",
    link: "https://anthology-magazine.com/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Charming Hotels USA",
    category: "WordPress",
    tags: ["Web Development"],
    image: "/charming-hotel.jpg",
    link: "https://charminghotelsusa.com/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Drinkhydrant Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/drink.jpg",
    link: "https://www.drinkhydrant.com/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Grass Florist",
    category: "WordPress",
    tags: ["Web Development"],
    image: "/grassflorist.jpg",
    link: "https://grassflorist.com/",
    description: "Custom tailored design and scalable code architectures.",
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
    link: "",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Nabox Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/nabox.jpg",
    link: "https://nabox.com.br/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Surf Style Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/surfstyle.jpg",
    link: "https://surfstyle.com/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "The Makeupbar Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/makeupbar.jpg",
    link: "https://the-makeupbar.com/",
    description: "Custom tailored design and scalable code architectures.",
  },
  {
    title: "Yesdarling Website",
    category: "Shopify",
    tags: ["Shopify"],
    image: "/yesdarling.jpg",
    link: "https://yesdarling.net/",
    description: "Custom tailored design and scalable code architectures.",
  },
];
