import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

export interface AppDevelopmentCardProps {
  title?: string;
  category?: string;
  desc?: string;
  image?: string;
  tags?: string[];
  href?: string;
  className?: string;
}

export default function AppDevelopmentCard({
  title = "App Development Solutions",
  category = "Mobile & Web Engineering",
  desc = "At TechBeeps, we deliver full-cycle mobile & web app solutions designed for peak performance, high scalability, and intuitive user experiences.",
  image = "/mobile_app_dev_card.png",
  tags = ["React Native", "Flutter", "iOS & Android", "Next.js"],
  href = "/services/mobile-app-development",
  className = "",
}: AppDevelopmentCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#1f1647_0%,#0d0722_100%)] p-6 lg:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 hover:border-[#9795FF]/40 hover:shadow-[0_20px_50px_rgba(151,149,255,0.15)] flex flex-col sm:flex-row justify-between gap-6 items-center ${className}`}
    >
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-primary/20 rounded-full blur-[90px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
      <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#9795FF]/20 rounded-full blur-[90px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />

      {/* Text Content */}
      <div className="w-full sm:w-[55%] space-y-4 relative z-10">
        {category && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            {category}
          </span>
        )}

        <h3 className="text-[22px] lg:text-[28px] font-bold leading-snug bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_45%,#FFFFFF_60%,#BE9FFF_100%)] bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="text-gray-300 text-sm md:text-[15px] leading-[24px] font-normal">
          {desc}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/5 px-3 py-1 lg:px-4 lg:py-1.5 rounded-[8px] text-xs lg:text-sm text-gray-200 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Image Container */}
      <div className="w-full sm:w-[42%] flex justify-center items-center relative overflow-hidden py-4">
        <div
          className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3] flex items-center justify-center pointer-events-none"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-contain drop-shadow-[0_12px_30px_rgba(151,149,255,0.35)] mix-blend-screen"
            priority={false}
          />
        </div>
      </div>

      {/* Action Button */}
      {href && (
        <Link
          href={href}
          aria-label={`View details about ${title}`}
          className="w-11 h-11 lg:w-13 lg:h-13 backdrop-blur-md absolute bottom-5 right-5 lg:bottom-6 lg:right-6 cursor-pointer rounded-[12px] flex items-center justify-center bg-white/10 border border-white/15 transition-all duration-400 group-hover:bg-primary group-hover:border-primary group-hover:scale-105 z-20"
        >
          <IoArrowForwardOutline className="h-5 w-5 -rotate-45 transition-transform duration-400 group-hover:rotate-0 text-white" />
        </Link>
      )}
    </div>
  );
}
