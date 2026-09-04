"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { BlogCardData } from "@/types/blog";

export interface BlogCardProps {
  post: BlogCardData;
}
export default function BlogCard({ post }: BlogCardProps) {
  const {
    slug,
    title,
    formattedDate,
    authorName,
    authorAvatar,
    category,
    featuredImage,
    featuredImageAlt,
  } = post;

  return (
    <article className="group rounded-[20px] bg-[#120D25] shadow-[0_12px_35px_rgba(0,0,0,0.45)] flex flex-col justify-between overflow-hidden h-full">      
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0518]">
        <Link href={`/blog/${slug}`} className="block w-full h-full relative overflow-hidden" tabIndex={-1} aria-hidden="true">
          <Image
            src={featuredImage}
            alt={featuredImageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover h-full w-full pointer-events-none absolute top-0 left-0 bottom-0 right-0 z-1 translate-x-1/2 scale-x-[2] opacity-0 blur-[10px] group-hover:blur-[0px] transition-all duration-500 ease group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100"
          />
          <Image
            src={featuredImage}
            alt={featuredImageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover h-full w-full pointer-events-none blur-[0px] group-hover:opacity-0 group-hover:blur-[10px] group-hover:-translate-x-1/2 group-hover:scale-x-[2] transition-all duration-500 ease"
          />
        </Link>
      </div>      
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="space-y-3.5">         
          <div className="flex items-center gap-3 flex-wrap">
            {category && (
              <span className="inline-block text-xs font-semibold text-white bg-white/10 px-3.5 py-1 rounded-full">
                {category}
              </span>
            )}
            {formattedDate && (
              <span className="text-xs text-gray-400 font-normal">
                {formattedDate}
              </span>
            )}
          </div>          
          <h3 className="text-lg sm:text-xl font-bold leading-snug line-clamp-2">
            <Link
              href={`/blog/${slug}`}
              className="text-white inline bg-[position:0_95%] bg-no-repeat bg-[size:0%_2px] no-underline outline-none! transition-all duration-400 ease-in-out hover:text-primary hover:bg-[size:100%_2px] hover:bg-[image:linear-gradient(180deg,#7033FF_0%,#7033FF_100%)]"
            >
              {title}
            </Link>
          </h3>
        </div>        
        <div className="pt-4 flex items-center justify-between gap-3 mt-auto">         
          <Link
            href={`/blog/${slug}`}
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
          >
            <span>Read More</span>
            <FaArrowRight className="w-3.5 h-3.5 -rotate-45 duration-500 group-hover/btn:rotate-0" />
          </Link>          
          <div className="flex items-center gap-2 text-xs text-gray-400">
            {authorAvatar ? (
              <Image
                src={authorAvatar}
                alt={authorName}
                width={20}
                height={20}
                className="rounded-full object-cover"
              />
            ) : (
              <FaUserCircle className="w-4 h-4 text-gray-400" />
            )}
            <span className="truncate max-w-[120px] font-medium">{authorName}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
