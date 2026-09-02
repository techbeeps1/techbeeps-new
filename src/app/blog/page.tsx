import { Metadata } from "next";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import LogoMarquee from "../components/LogoMarquee";
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import BlogPagination from "../components/blog/BlogPagination";
import { getBlogPosts, normalizePostForCard } from "@/lib/wordpress";

import {
  SITE_URL,
  createBreadcrumbsSchema,
  DEFAULT_OG_IMAGE,
} from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Blog & Tech Insights - Engineering Articles",
  description:
    "Explore the latest insights on AI Solutions, Cloud Architecture, Full Stack Web Development, Mobile Apps, and Modern Engineering from the TechBeeps team.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog & Tech Insights | TechBeeps Services",
    description:
      "Explore the latest insights on AI Solutions, Cloud Architecture, Full Stack Web Development, Mobile Apps, and Modern Engineering from the TechBeeps team.",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [
      {
        url: "/team-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "TechBeeps Blog and Engineering Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Tech Insights | TechBeeps Services",
    description:
      "Explore the latest insights on AI Solutions, Cloud Architecture, Full Stack Web Development, and Mobile Apps.",
    images: ["/team-hero-bg.jpg"],
  },
};

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedParams = await searchParams;
  const currentPage = Math.max(1, parseInt(resolvedParams.page || "1", 10));
  const perPage = 9;

  const { posts, totalPages, totalPosts } = await getBlogPosts({
    page: currentPage,
    perPage,
  });

  const cardsData = posts.map(normalizePostForCard);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "TechBeeps Insights",
    description:
      "Engineering and technology blog covering AI, Next.js, Cloud, and Mobile development.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <Header />

      {/* Hero Section */}
      <BlogHero />

      {/* Main Blog Grid Section */}
      <section className="py-20 lg:py-28 bg-[#05010f] text-white relative z-10 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#504CFF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Post count / active page info */}
          {totalPosts > 0 && (
            <div className="flex items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10 text-xs sm:text-sm text-gray-400">
              <span>
                Showing Page <strong className="text-white">{currentPage}</strong> of{" "}
                <strong className="text-white">{totalPages}</strong> ({totalPosts} total {totalPosts === 1 ? "article" : "articles"})
              </span>
            </div>
          )}

          {/* Blog Cards Grid */}
          <BlogGrid posts={cardsData} />

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/blog"
            />
          )}
        </div>
      </section>

      {/* LogoMarquee */}
      <LogoMarquee />

      {/* Call To Action */}
      <CallToAction />

      <Footer />
    </>
  );
}
