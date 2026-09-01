export interface ServiceCardItem {
  title: string;
  desc: string;
  icon?: string;
  image?: string;
  points?: string[];
}

export interface ServiceHero {
  title: string;
  desc: string;
  bgImage?: string;
  bgImageAlt?: string;
}

export interface ServiceOfferingsSection {
  title: string;
  desc?: string;
  items: ServiceCardItem[];
}

export interface ServicePromiseSection {
  title: string;
  desc?: string;
  bullets: string[];
  image: string;
  imageAlt?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceFaqSection {
  title?: string;
  faqs: ServiceFaq[];
}

export interface ServiceHireDeveloperSection {
  title: string;
  subtitle?: string;
  desc: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt?: string;
}

export interface ServiceSeo {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface ServiceData {
  slug: string;
  title: string;
  seo?: ServiceSeo;
  hero: ServiceHero;
  offeringsSection: ServiceOfferingsSection;
  promiseSection?: ServicePromiseSection;
  faqSection: ServiceFaqSection;
  hireDeveloperSection?: ServiceHireDeveloperSection;
}
