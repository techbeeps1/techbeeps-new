import {
  WordPressPost,
  BlogListResponse,
  BlogCardData,
  WPTerm,
} from "@/types/blog";

const WP_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://techbeeps.co.in/wp-json/wp/v2";

/**
 * Strips HTML tags and decodes common HTML entities and escaped slashes
 */
export function stripHtml(html: string = ""): string {
  if (!html) return "";
  return html
    // Handle double-escaped WordPress quotes/entities first
    .replace(/\\&#8217;/g, "'")
    .replace(/\\&#8216;/g, "'")
    .replace(/\\&#8220;/g, '"')
    .replace(/\\&#8221;/g, '"')
    .replace(/\\&#039;/g, "'")
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    // Remove HTML tags
    .replace(/<[^>]*>/g, "")
    // Decode HTML entities
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/\[&hellip;\]/g, "")
    .replace(/&hellip;/g, "...")
    .replace(/&#8230;/g, "...")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&copy;/g, "©")
    .replace(/&reg;/g, "®")
    .replace(/\\/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Formats ISO date string into readable format (e.g. "Sep 02, 2026")
 */
export function formatPostDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/**
 * Calculates estimated reading time in minutes
 */
export function calculateReadingTime(content: string = ""): string {
  const plainText = stripHtml(content);
  const words = plainText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Extracts featured image source URL and alt text with fallbacks
 */
export function extractFeaturedMedia(post: WordPressPost): {
  url: string;
  alt: string;
} {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (media && media.source_url) {
    return {
      url: media.source_url,
      alt: media.alt_text || stripHtml(post.title?.rendered) || "Blog cover image",
    };
  }

  // Fallback branded illustrations based on post id
  const fallbackImages = [
    "/web_dev_card.png",
    "/ai_solution_card.png",
    "/shopify_dev_card.png",
    "/python_dev_card.png",
    "/cloud_services_card.jpg",
    "/wordpress_dev_card.jpg",
    "/laravel_dev_card.jpg",
    "/nodejs_dev_card.jpg",
  ];
  const selectedFallback =
    fallbackImages[Math.abs(post.id || 0) % fallbackImages.length];

  return {
    url: selectedFallback,
    alt: stripHtml(post.title?.rendered) || "TechBeeps Insight",
  };
}

/**
 * Extracts primary category from embedded terms
 */
export function extractCategory(post: WordPressPost): string {
  const terms = post._embedded?.["wp:term"]?.[0] as WPTerm[] | undefined;
  if (terms && terms.length > 0) {
    return terms[0].name;
  }
  return "Tech Insights";
}

/**
 * Extracts tags from embedded terms
 */
export function extractTags(post: WordPressPost): string[] {
  const terms = post._embedded?.["wp:term"]?.[1] as WPTerm[] | undefined;
  if (terms && terms.length > 0) {
    return terms.map((t) => t.name);
  }
  return [];
}

/**
 * Extracts author name and avatar
 */
export function extractAuthor(post: WordPressPost): {
  name: string;
  avatar?: string;
} {
  const author = post._embedded?.author?.[0];
  if (author) {
    const avatar =
      author.avatar_urls?.["96"] ||
      author.avatar_urls?.["48"] ||
      author.avatar_urls?.["24"];
    return {
      name: author.name || "TechBeeps Team",
      avatar,
    };
  }
  return {
    name: "TechBeeps Team",
  };
}

/**
 * Converts raw WordPress post into clean BlogCardData
 */
export function normalizePostForCard(post: WordPressPost): BlogCardData {
  const media = extractFeaturedMedia(post);
  const author = extractAuthor(post);
  const category = extractCategory(post);
  const tags = extractTags(post);

  const rawExcerpt = stripHtml(post.excerpt?.rendered || post.content?.rendered || "");
  let cleanExcerpt = rawExcerpt.replace(/\.\.\.$/, "").trim();
  if (cleanExcerpt.length > 140) {
    const truncated = cleanExcerpt.slice(0, 140);
    const lastSpace = truncated.lastIndexOf(" ");
    cleanExcerpt = (lastSpace > 100 ? truncated.slice(0, lastSpace) : truncated).trim() + "...";
  }

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title?.rendered) || "Untitled Post",
    excerpt: cleanExcerpt,
    date: post.date,
    formattedDate: formatPostDate(post.date),
    readingTime: calculateReadingTime(post.content?.rendered),
    authorName: author.name,
    authorAvatar: author.avatar,
    category,
    tags,
    featuredImage: media.url,
    featuredImageAlt: media.alt,
  };
}

/**
 * Fetch paginated blog posts with WordPress pagination headers
 */
export async function getBlogPosts({
  page = 1,
  perPage = 9,
  category,
}: {
  page?: number;
  perPage?: number;
  category?: string;
} = {}): Promise<BlogListResponse> {
  try {
    const url = new URL(`${WP_API_URL}/posts`);
    url.searchParams.set("per_page", perPage.toString());
    url.searchParams.set("page", page.toString());
    url.searchParams.set("_embed", "true");

    if (category) {
      url.searchParams.set("categories", category);
    }

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error(`WordPress API Error: ${res.status} ${res.statusText}`);
      return {
        posts: [],
        totalPosts: 0,
        totalPages: 0,
        currentPage: page,
      };
    }

    const totalPosts = parseInt(res.headers.get("X-WP-Total") || "0", 10);
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "0", 10);
    const posts: WordPressPost[] = await res.json();

    return {
      posts,
      totalPosts: isNaN(totalPosts) ? posts.length : totalPosts,
      totalPages: isNaN(totalPages) ? 1 : totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("Failed to fetch WordPress posts:", error);
    return {
      posts: [],
      totalPosts: 0,
      totalPages: 0,
      currentPage: page,
    };
  }
}

/**
 * Fetch single post by slug with _embed
 */
export async function getBlogPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const url = `${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=true`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`WordPress API Error for slug ${slug}: ${res.status}`);
      return null;
    }

    const posts: WordPressPost[] = await res.json();
    if (posts && posts.length > 0) {
      return posts[0];
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch post by slug (${slug}):`, error);
    return null;
  }
}

/**
 * Fetch related posts excluding the current post
 */
export async function getRelatedPosts(
  currentId: number,
  limit: number = 3
): Promise<BlogCardData[]> {
  try {
    const { posts } = await getBlogPosts({ page: 1, perPage: limit + 1 });
    return posts
      .filter((p) => p.id !== currentId)
      .slice(0, limit)
      .map(normalizePostForCard);
  } catch (error) {
    console.error("Failed to fetch related posts:", error);
    return [];
  }
}

/**
 * Fetch all post slugs for generateStaticParams
 */
export async function getAllBlogPostSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?per_page=100&_fields=slug`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const posts: Array<{ slug: string }> = await res.json();
    return posts.map((p) => p.slug);
  } catch (error) {
    console.error("Failed to fetch all post slugs:", error);
    return [];
  }
}
