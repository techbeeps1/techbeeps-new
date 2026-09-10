export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  quote: string;
  image: string;
  stars: number;
  datePublished: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Evan",
    handle: "United States",
    quote:
      "This seller is a master at his craft. I am a professional artist of 13 years and finding someone at this level is rare. I was very impressed with the communication, process, and ability to produce results to my liking. I would 1000% recommend TechBeeps to my friends, and I would buy from them again. Top of the line work!",
    image: "/female.avif",
    stars: 5,
    datePublished: "2024-03-15",
  },
  {
    id: 2,
    name: "Jane",
    handle: "South Africa",
    quote:
      "What really made TechBeeps Services stand out was how they mixed their deep technical skills with a genuine personal touch. Seamless communication and quality delivery throughout the project.",
    image: "/female.avif",
    stars: 5,
    datePublished: "2024-04-10",
  },
  {
    id: 3,
    name: "Karine Pinas",
    handle: "Netherlands",
    quote:
      "Yaseen and the TechBeeps team exceeded our expectations. All tasks were completed on time with outstanding professionalism and efficiency. I really enjoyed the collaboration.",
    image: "/KarinePinas.png",
    stars: 5,
    datePublished: "2024-05-22",
  },
  {
    id: 4,
    name: "Bedros Der Garabedian",
    handle: "Netherlands",
    quote:
      "TechBeeps Services provided exceptional service! I was truly impressed with the quick turnaround time and the outstanding results. They have a professional, knowledgeable, and experienced team that goes above and beyond.",
    image: "/male.jpg",
    stars: 5,
    datePublished: "2024-06-18",
  },
  {
    id: 5,
    name: "Carin Elvhammar",
    handle: "Norrlandsgruppen [Sweden]",
    quote:
      "Great to work with as we’ve done several times now. Always great job on our WordPress websites and digital infrastructure. Highly recommended partner for any modern business!",
    image: "/female.avif",
    stars: 5,
    datePublished: "2024-08-04",
  },
  {
    id: 6,
    name: "ZPE",
    handle: "Teamzpe [United Kingdom]",
    quote:
      "Their communication is better than a majority of the sellers we have encountered. TechBeeps is our go-to developer team for future projects involving PHP, Javascript, React, and custom web development.",
    image: "/female.avif",
    stars: 5,
    datePublished: "2024-09-12",
  },
  {
    id: 7,
    name: "John Rotgers",
    handle: "Netherlands",
    quote:
      "After five years of working with Techbeeps, I can say without hesitation that they are one of the best decisions we've made for our digital presence. Over the course of our partnership, we've collaborated on dozens of WordPress websites, and every single time, they have delivered.",
    image: "/john.png",
    stars: 5,
    datePublished: "2024-11-29",
  },
];
