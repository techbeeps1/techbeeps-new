"use client";

import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline, IoTimeOutline, IoCalendarOutline } from "react-icons/io5";
import { BlogCardData } from "@/types/blog";

export interface BlogCardProps {
  post: BlogCardData;
}

export default function BlogCard({ post }: BlogCardProps) {
  const {
    slug,
    title,
    excerpt,
    formattedDate,
    readingTime,
    authorName,
    authorAvatar,
    category,
    featuredImage,
    featuredImageAlt,
  } = post;

  return (
    <article className="group relative rounded-[22px] bg-[linear-gradient(180deg,#120D25_58%,#291D58_100%)] border border-white/10 hover:border-[#9795FF]/50 shadow-[0_15px_45px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(133,76,255,0.2)] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Top Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0518]">
        <Image
          src={featuredImage}
          alt={featuredImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120D25] via-transparent to-black/20" />

        {/* Category Badge Floating Top Left */}
        {category && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-white/15">
              {category}
            </span>
          </div>
        )}

        {/* Reading Time Floating Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <IoTimeOutline className="w-3.5 h-3.5 text-primary" />
            {readingTime}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          {/* Published Date */}
          {formattedDate && (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <IoCalendarOutline className="w-3.5 h-3.5 text-primary/80" />
              <span>{formattedDate}</span>
            </div>
          )}

          {/* Title with Gradient Effect */}
          <h2 className="text-xl lg:text-[22px] font-bold leading-snug bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_45%,#FFFFFF_60%,#BE9FFF_100%)] bg-clip-text text-transparent group-hover:brightness-125 transition-all line-clamp-2">
            <Link href={`/blog/${slug}`} className="hover:underline focus:outline-none">
              {title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="text-gray-300 text-sm leading-[22px] line-clamp-3 font-normal">
            {excerpt}
          </p>
        </div>

        {/* Card Footer: Author & Action Link */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
          {/* Author Info */}
          <div className="flex items-center gap-2.5">
            {authorAvatar ? (
              <Image
                src={authorAvatar}
                alt={authorName}
                width={32}
                height={32}
                className="rounded-full border border-white/20 object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-bold text-primary">
                {authorName.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors truncate max-w-[140px]">
              {authorName}
            </span>
          </div>

          {/* Glassmorphic Arrow Button */}
          <Link
            href={`/blog/${slug}`}
            aria-label={`Read article: ${title}`}
            className="w-10 h-10 rounded-[10px] backdrop-blur-md bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(133,76,255,0.6)] shrink-0"
          >
            <IoArrowForwardOutline className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </Link>
        </div>
      </div>
    </article>
  );
}
