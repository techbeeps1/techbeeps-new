"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { BlogCardData } from "@/types/blog";
import Link from "next/link";
import { IoSparklesOutline } from "react-icons/io5";

export interface BlogGridProps {
  posts: BlogCardData[];
  emptyMessage?: string;
}
export default function BlogGrid({
  posts,
  emptyMessage = "No blog articles found at this time. Please check back soon!",
}: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-20 text-center space-y-6 max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto text-primary">
          <IoSparklesOutline className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Articles Coming Soon</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{emptyMessage}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-all duration-300 shadow-lg shadow-primary/30"
        >
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id || post.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: (index % 3) * 0.1,
          }}
        >
          <BlogCard post={post} />
        </motion.div>
      ))}
    </div>
  );
}
