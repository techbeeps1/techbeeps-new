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
} from "@/lib/wordpress";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoArrowBackOutline,
  IoChevronForwardOutline,
  IoCheckmarkCircle,
  IoSparklesOutline,
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

      {/* Hero / Header Section with Integrated Featured Banner */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 bg-[#05010f] text-white overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] lg:w-[1000px] h-[550px] bg-primary/20 blur-[170px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-[#504CFF]/20 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 -right-32 w-[450px] h-[450px] bg-primary/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Top Navigation & Breadcrumb Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-primary/30 border border-white/10 hover:border-primary/50 text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md shadow-sm group"
            >
              <IoArrowBackOutline className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Articles</span>
            </Link>

            <nav
              aria-label="Breadcrumbs"
              className="hidden sm:flex items-center flex-wrap gap-2 text-xs md:text-sm text-gray-400"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <IoChevronForwardOutline className="w-3 h-3 text-gray-600" />
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <IoChevronForwardOutline className="w-3 h-3 text-gray-600" />
              <span className="text-primary font-medium truncate max-w-[200px] lg:max-w-xs">
                {normalized.category || "Article"}
              </span>
            </nav>
          </div>

          {/* Article Header Box */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Category & Meta Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {normalized.category && (
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-[#7033FF] px-4 py-1.5 rounded-full shadow-lg border border-white/20 backdrop-blur-md">
                  {normalized.category}
                </span>
              )}

              {normalized.readingTime && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-200 bg-white/[0.08] border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                  <IoTimeOutline className="w-3.5 h-3.5 text-primary" />
                  {normalized.readingTime}
                </span>
              )}

              {normalized.formattedDate && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-200 bg-white/[0.08] border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                  <IoCalendarOutline className="w-3.5 h-3.5 text-primary" />
                  {normalized.formattedDate}
                </span>
              )}
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.2] tracking-tight bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_45%,#FFFFFF_60%,#BE9FFF_100%)] bg-clip-text text-transparent">
              <GsapTextAnimation mainText={normalized.title} mainClass="flex flex-wrap justify-center" />
            </h1>

            {/* Author Row */}
            <div className="pt-2 flex items-center justify-center gap-3">
              {normalized.authorAvatar ? (
                <Image
                  src={normalized.authorAvatar}
                  alt={normalized.authorName}
                  width={40}
                  height={40}
                  className="rounded-full border border-white/20 object-cover shadow-sm"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#504CFF] border border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  {normalized.authorName.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="text-left">
                <span className="text-sm font-semibold text-white block">
                  {normalized.authorName}
                </span>
                <span className="text-xs text-gray-400 block">
                  TechBeeps Engineering Team
                </span>
              </div>
            </div>
          </div>

          {/* Featured Hero Banner Showcase */}
          {normalized.featuredImage && (
            <div className="relative mt-12 sm:mt-16 w-full max-w-5xl mx-auto">
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-primary/40 via-[#504CFF]/30 to-primary/40 rounded-[28px] sm:rounded-[36px] blur-2xl opacity-60 pointer-events-none" />

              {/* Main Image Frame */}
              <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)] bg-[#0c0721]">
                <Image
                  src={normalized.featuredImage}
                  alt={normalized.featuredImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05010f]/60 via-transparent to-black/20" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Layout & Sticky Sidebar */}
      <section className="py-12 lg:py-20 bg-[#05010f] text-white relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Article Body & Social Sharing */}
            <main className="lg:col-span-8 space-y-12">
              <BlogDetailContent
                contentHtml={post.content.rendered}
                tags={normalized.tags}
              />

              {/* Author Bio Box */}
              <div className="p-6 sm:p-8 rounded-[24px] bg-[linear-gradient(180deg,#120D25_0%,#181033_100%)] border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-lg">
                {normalized.authorAvatar ? (
                  <Image
                    src={normalized.authorAvatar}
                    alt={normalized.authorName}
                    width={64}
                    height={64}
                    className="rounded-2xl border border-white/20 object-cover shrink-0 shadow-md"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[#504CFF] border border-white/20 flex items-center justify-center text-xl font-bold text-white shrink-0 shadow-md">
                    {normalized.authorName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="space-y-2 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-lg font-bold text-white">
                      {normalized.authorName}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/20 px-2.5 py-0.5 rounded-full border border-primary/30">
                      Author
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    TechBeeps Insights publishes in-depth engineering breakdowns, AI strategies, and modern cloud & software architecture solutions.
                  </p>
                </div>
              </div>

              {/* Social Share Bar */}
              <BlogShareBar title={normalized.title} url={currentUrl} />

              {/* Back to Blog Button */}
              <div className="pt-2">
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
              <div className="sticky top-28 space-y-8">
                {/* Project Consultation CTA Card */}
                <div className="p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-[#291D58] to-[#120D25] border border-primary/40 backdrop-blur-xl shadow-[0_15px_40px_rgba(133,76,255,0.25)] space-y-5 relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/35 rounded-full blur-[50px] pointer-events-none" />

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-white bg-primary px-3 py-1 rounded-full shadow">
                    HAVE A PROJECT IN MIND?
                  </span>

                  <h4 className="text-xl font-bold leading-snug text-white">
                    Let’s Build Scalable Digital Solutions Together
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Partner with TechBeeps for custom web apps, AI integrations, mobile platforms, and high-performance digital products.
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                    <li className="flex items-center gap-2.5">
                      <IoCheckmarkCircle className="text-primary w-4 h-4 shrink-0" />
                      <span>Free Architectural Consultation</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <IoCheckmarkCircle className="text-primary w-4 h-4 shrink-0" />
                      <span>Dedicated Full-Stack Team</span>
                    </li>
                    <li className="flex items-center gap-2.5">
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

                {/* Tech Highlights / Why TechBeeps Box */}
                <div className="p-6 rounded-[24px] bg-white/[0.04] border border-white/10 backdrop-blur-xl space-y-3.5">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <IoSparklesOutline className="w-4 h-4" />
                    <span>TechBeeps Ecosystem</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Explore our modern tech stack, custom AI integrations, and full-cycle product engineering services.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs text-[#BE9FFF] hover:text-white font-semibold transition-colors"
                  >
                    <span>View all services & solutions &rarr;</span>
                  </Link>
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
