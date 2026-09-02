import { WPTerm } from "@/types/blog";
import Link from "next/link";
import { IoPricetagOutline } from "react-icons/io5";

interface BlogDetailContentProps {
  contentHtml: string;
  tags?: string[];
}

export default function BlogDetailContent({
  contentHtml,
  tags = [],
}: BlogDetailContentProps) {
  return (
    <div className="space-y-12">
      {/* WordPress HTML Article Body */}
      <div
        className="blog-content-body max-w-none text-gray-200 text-base sm:text-lg leading-[1.8] space-y-6
          [&>p]:text-gray-300 [&>p]:leading-[1.85] [&>p]:mb-6
          [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:lg:text-4xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-white [&>h2]:bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_45%,#BE9FFF_100%)] [&>h2]:bg-clip-text [&>h2]:text-transparent
          [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-semibold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-white
          [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:text-primary
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:my-6 [&>ul]:text-gray-300
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-3 [&>ol]:my-6 [&>ol]:text-gray-300
          [&>li]:leading-relaxed
          [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-300 [&>blockquote]:bg-primary/5 [&>blockquote]:rounded-r-2xl
          [&>pre]:bg-[#080415] [&>pre]:border [&>pre]:border-white/10 [&>pre]:p-6 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:my-8 [&>pre]:text-sm [&>pre]:font-mono [&>pre]:text-[#BE9FFF]
          [&>code]:bg-white/10 [&>code]:text-primary [&>code]:px-2 [&>code]:py-0.5 [&>code]:rounded-md [&>code]:text-sm [&>code]:font-mono
          [&>img]:rounded-2xl [&>img]:my-8 [&>img]:w-full [&>img]:h-auto [&>img]:border [&>img]:border-white/10
          [&_figure]:my-8 [&_figure>img]:rounded-2xl [&_figure>img]:w-full [&_figure>img]:border [&_figure>img]:border-white/10
          [&_figcaption]:text-center [&_figcaption]:text-xs [&_figcaption]:text-gray-400 [&_figcaption]:mt-3
          [&>a]:text-primary [&>a]:underline [&>a]:decoration-primary/50 hover:[&>a]:decoration-primary transition-colors
          [&>table]:w-full [&>table]:my-8 [&>table]:border-collapse [&>table]:border [&>table]:border-white/10
          [&_th]:bg-white/10 [&_th]:p-3 [&_th]:text-left [&_th]:border [&_th]:border-white/10 [&_th]:font-semibold [&_th]:text-white
          [&_td]:p-3 [&_td]:border [&_td]:border-white/10 [&_td]:text-gray-300"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Article Tags Footer */}
      {tags && tags.length > 0 && (
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
            <IoPricetagOutline className="w-4 h-4 text-primary" />
            <span>Article Tags</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-primary/20 text-gray-300 hover:text-white border border-white/10 hover:border-primary/40 text-xs sm:text-sm font-medium transition-all duration-300 cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
