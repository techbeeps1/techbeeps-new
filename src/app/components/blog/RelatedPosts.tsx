import { BlogCardData } from "@/types/blog";
import BlogCard from "./BlogCard";
import GsapTextAnimation from "../GsapTextAnimation";

interface RelatedPostsProps {
  posts: BlogCardData[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 border-t border-white/10 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center md:text-left space-y-3">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            CONTINUE READING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold leading-tight text-white">
            <GsapTextAnimation mainText={"Related Articles & <br/> Tech Insights"} mainClass="flex flex-wrap" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id || post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
