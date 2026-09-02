export interface WPRenderedString {
  rendered: string;
  protected?: boolean;
}

export interface WPAuthor {
  id: number;
  name: string;
  url?: string;
  description?: string;
  link?: string;
  slug?: string;
  avatar_urls?: {
    [key: string]: string;
  };
}

export interface WPMediaSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface WPFeaturedMedia {
  id: number;
  date?: string;
  slug?: string;
  type?: string;
  link?: string;
  title?: WPRenderedString;
  author?: number;
  alt_text?: string;
  media_type?: string;
  mime_type?: string;
  source_url: string;
  media_details?: {
    width: number;
    height: number;
    file: string;
    sizes?: {
      thumbnail?: WPMediaSize;
      medium?: WPMediaSize;
      medium_large?: WPMediaSize;
      large?: WPMediaSize;
      full?: WPMediaSize;
      [key: string]: WPMediaSize | undefined;
    };
  };
}

export interface WPTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: "category" | "post_tag" | string;
}

export interface WPEmbedded {
  author?: WPAuthor[];
  "wp:featuredmedia"?: WPFeaturedMedia[];
  "wp:term"?: WPTerm[][];
}

export interface YoastHeadJson {
  title?: string;
  description?: string;
  robots?: {
    index?: string;
    follow?: string;
    [key: string]: string | undefined;
  };
  canonical?: string;
  og_locale?: string;
  og_type?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_site_name?: string;
  article_published_time?: string;
  article_modified_time?: string;
  author?: string;
  og_image?: Array<{
    url: string;
    width?: number;
    height?: number;
    type?: string;
  }>;
  twitter_card?: string;
  twitter_misc?: {
    [key: string]: string;
  };
}

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt?: string;
  guid?: WPRenderedString;
  modified: string;
  modified_gmt?: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRenderedString;
  content: WPRenderedString;
  excerpt: WPRenderedString;
  author: number;
  featured_media: number;
  comment_status?: string;
  ping_status?: string;
  sticky?: boolean;
  categories: number[];
  tags: number[];
  yoast_head?: string;
  yoast_head_json?: YoastHeadJson;
  _embedded?: WPEmbedded;
}

export interface BlogListResponse {
  posts: WordPressPost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
}

export interface BlogCardData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  formattedDate: string;
  readingTime: string;
  authorName: string;
  authorAvatar?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
}
