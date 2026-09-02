import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import BlogDetailContent from "../../components/blog/BlogDetailContent";
import BlogShareBar from "../../components/blog/BlogShareBar";
import RelatedPosts from "../../components/blog/RelatedPosts";
import ButtonSwipUp from "../../components/ButtonSwipUp";
import GsapTextAnimation from "../../components/GsapTextAnimation";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getAllBlogPostSlugs,
  normalizePostForCard,
  stripHtml,
} from "@/lib/wordpress";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoArrowBackOutline,
  IoChevronForwardOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { BsArrowRightCircle } from "react-icons/bs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

import {
  SITE_URL,
  createBlogPostSchema,
  createBreadcrumbsSchema,
} from "@/lib/seo-config";

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | TechBeeps",
    };
  }

  const normalized = normalizePostForCard(post);
  const yoast = post.yoast_head_json;

  const pageTitle =
    yoast?.title || `${normalized.title} | TechBeeps Insights`;
  const pageDescription =
    yoast?.description || normalized.excerpt || "TechBeeps Engineering Article";
  const ogImage =
    yoast?.og_image?.[0]?.url || normalized.featuredImage;
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [normalized.authorName],
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: normalized.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const normalized = normalizePostForCard(post);
  const relatedPosts = await getRelatedPosts(post.id, 3);
  const currentUrl = `${SITE_URL}/blog/${slug}`;

  const articleSchema = createBlogPostSchema({
    headline: normalized.title,
    description: normalized.excerpt || normalized.title,
    slug: normalized.slug,
    datePublished: post.date,
    dateModified: post.modified,
    authorName: normalized.authorName,
    image: normalized.featuredImage,
  });

  const breadcrumbSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: normalized.title, item: `/blog/${normalized.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />

      {/* Hero / Header Section */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 bg-[#05010f] text-white overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/15 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#504CFF]/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <IoChevronForwardOutline className="w-3 h-3 text-gray-600" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <IoChevronForwardOutline className="w-3 h-3 text-gray-600" />
            <span className="text-primary font-medium truncate max-w-[200px] sm:max-w-md">
              {normalized.title}
            </span>
          </nav>

          {/* Article Header Box */}
          <div className="max-w-4xl space-y-6">
            {/* Category Badge */}
            {normalized.category && (
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/15 px-4 py-1.5 rounded-full border border-primary/30 backdrop-blur-md">
                {normalized.category}
              </span>
            )}

            {/* Article Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.2] bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_45%,#FFFFFF_60%,#BE9FFF_100%)] bg-clip-text text-transparent">
              <GsapTextAnimation mainText={normalized.title} mainClass="flex flex-wrap" />
            </h1>

            {/* Meta Details Row: Date, Reading Time */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-gray-300 border-t border-white/10">
              {/* Published Date */}
              {normalized.formattedDate && (
                <div className="flex items-center gap-2">
                  <IoCalendarOutline className="w-4 h-4 text-primary" />
                  <span>{normalized.formattedDate}</span>
                </div>
              )}

              {/* Reading Time */}
              {normalized.readingTime && (
                <div className="flex items-center gap-2">
                  <IoTimeOutline className="w-4 h-4 text-primary" />
                  <span>{normalized.readingTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Featured Banner & Sidebar */}
      <section className="py-12 lg:py-16 bg-[#05010f] text-white relative z-10">
        <div className="container mx-auto px-4">
          {/* Featured Image Hero Banner */}
          {normalized.featuredImage && (
            <div className="relative w-full aspect-[21/9] sm:aspect-[2.2/1] rounded-[24px] sm:rounded-[32px] overflow-hidden mb-16 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#0c0721]">
              <Image
                src={normalized.featuredImage}
                alt={normalized.featuredImageAlt}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05010f] via-transparent to-transparent opacity-60" />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Article Body & Sharing */}
            <main className="lg:col-span-8 space-y-12">
              <BlogDetailContent
                contentHtml={post.content.rendered}
                tags={normalized.tags}
              />

              {/* Social Share Bar */}
              <BlogShareBar title={normalized.title} url={currentUrl} />

              {/* Back to Blog Button */}
              <div className="pt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-primary border border-white/15 hover:border-primary text-sm font-semibold text-white transition-all duration-300 shadow-md backdrop-blur-md"
                >
                  <IoArrowBackOutline className="w-4 h-4" />
                  <span>Back to All Articles</span>
                </Link>
              </div>
            </main>

            {/* Right Column: Sticky Sidebar Widgets */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Project Consultation CTA Card */}
              <div className="p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-[#291D58] to-[#120D25] border border-primary/30 backdrop-blur-xl shadow-[0_15px_40px_rgba(133,76,255,0.2)] space-y-5 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/30 rounded-full blur-[50px] pointer-events-none" />

                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-white bg-primary px-3 py-1 rounded-full shadow">
                  HAVE A PROJECT IN MIND?
                </span>

                <h4 className="text-xl font-bold leading-snug text-white">
                  Let’s Build Scalable Digital Solutions Together
                </h4>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Partner with TechBeeps for custom web apps, AI integrations, mobile platforms, and high-performance digital products.
                </p>

                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircle className="text-primary w-4 h-4 shrink-0" />
                    <span>Free Architectural Consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircle className="text-primary w-4 h-4 shrink-0" />
                    <span>Dedicated Full-Stack Team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoCheckmarkCircle className="text-primary w-4 h-4 shrink-0" />
                    <span>Rapid Time to Market</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <ButtonSwipUp
                    className="w-full bg-white text-black hover:text-white font-semibold text-sm"
                    url="/contact-us"
                  >
                    <span>Get a Free Proposal</span>
                    <BsArrowRightCircle className="-rotate-45 h-4 w-4 duration-300 group-hover:rotate-0" />
                  </ButtonSwipUp>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <RelatedPosts posts={relatedPosts} />

      {/* Call To Action */}
      <CallToAction />

      <Footer />
    </>
  );
}
