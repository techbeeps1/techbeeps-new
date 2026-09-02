import { BlogCardData } from "@/types/blog";
import BlogCard from "./BlogCard";
import GsapTextAnimation from "../GsapTextAnimation";

interface RelatedPostsProps {
  posts: BlogCardData[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#05010f] border-t border-white/10 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center md:text-left space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-[#7033FF] px-4 py-1.5 rounded-full border border-white/20 shadow-md">
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
