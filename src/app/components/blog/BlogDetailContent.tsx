import { IoPricetagOutline } from "react-icons/io5";
interface BlogDetailContentProps {
  contentHtml: string;
  tags?: string[];
}

function sanitizeContentHtml(rawHtml: string = ""): string {
  if (!rawHtml) return "";

  let clean = rawHtml
    .replace(/\\&#8217;/g, "'")
    .replace(/\\&#8216;/g, "'")
    .replace(/\\&#8220;/g, '"')
    .replace(/\\&#8221;/g, '"')
    .replace(/\\&#039;/g, "'")
    .replace(/\\&quot;/g, "")
    .replace(/&quot;/g, "")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\/g, "")    
    .replace(/https?:\/\/(www\.)?techbeeps\.co\.in\/contacts?\/?/gi, "/contact-us");
  
  clean = clean.replace(
    /<pre[^>]*class="[^"]*(?:wp-block-pullquote|is-style-solid-color|wp-block-preformatted)[^"]*"[^>]*>[\s\S]*?<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/pre>/gi,
    (match, href, innerText) => {
      const cleanText = innerText.replace(/<[^>]*>/g, "").trim();
      return `
      <div class="my-10 p-6 sm:p-8 rounded-[24px] bg-gradient-to-r from-[#291D58] via-[#1B1238] to-[#120D25] border border-primary/40 shadow-[0_15px_40px_rgba(133,76,255,0.25)] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden not-prose">
        <div class="space-y-2 text-center sm:text-left relative z-10">
          <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
            TechBeeps Solutions
          </span>
          <h4 class="text-lg sm:text-xl font-bold text-white tracking-tight">
            ${cleanText}
          </h4>
          <p class="text-xs sm:text-sm text-gray-300">
            Build high-performance web applications, AI tools, and custom digital platforms with TechBeeps.
          </p>
        </div>
        <a href="${href}" class="relative z-10 shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
          <span>Get Started Now &rarr;</span>
        </a>
      </div>`;
    }
  );

  clean = clean.replace(/style="[^"]*background-color:\s*#[0-9a-fA-F]+[^"]*"/gi, "");
  clean = clean.replace(/style="[^"]*padding-left:\s*\d+px;?[^"]*"/gi, "");

  return clean;
}

export default function BlogDetailContent({
  contentHtml,
  tags = [],
}: BlogDetailContentProps) {
  const sanitizedHtml = sanitizeContentHtml(contentHtml);

  return (
    <div className="space-y-12">      
      <div
        className="blog-content-body max-w-none text-gray-200 text-base sm:text-lg leading-[1.85] space-y-6
          [&>p]:text-gray-300 [&>p]:leading-[1.9] [&>p]:mb-6
          [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:lg:text-4xl [&>h2]:font-bold [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:text-white [&>h2]:bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_45%,#BE9FFF_100%)] [&>h2]:bg-clip-text [&>h2]:text-transparent [&>h2]:tracking-tight
          [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-white [&>h3]:tracking-tight
          [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:text-[#BE9FFF]
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:my-6 [&>ul]:text-gray-300
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-3 [&>ol]:my-6 [&>ol]:text-gray-300
          [&>li]:leading-relaxed
          [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-3 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-200 [&>blockquote]:bg-primary/10 [&>blockquote]:rounded-r-2xl [&>blockquote]:shadow-sm
          [&>pre:not(.not-prose)]:bg-[#0c0721] [&>pre:not(.not-prose)]:border [&>pre:not(.not-prose)]:border-white/15 [&>pre:not(.not-prose)]:p-6 [&>pre:not(.not-prose)]:rounded-2xl [&>pre:not(.not-prose)]:overflow-x-auto [&>pre:not(.not-prose)]:my-8 [&>pre:not(.not-prose)]:text-sm [&>pre:not(.not-prose)]:font-mono [&>pre:not(.not-prose)]:text-[#BE9FFF] [&>pre:not(.not-prose)]:shadow-inner
          [&>code]:bg-white/10 [&>code]:text-primary [&>code]:px-2 [&>code]:py-0.5 [&>code]:rounded-md [&>code]:text-sm [&>code]:font-mono
          [&>img]:rounded-2xl [&>img]:my-8 [&>img]:w-full [&>img]:h-auto [&>img]:border [&>img]:border-white/10 [&>img]:shadow-xl
          [&_figure]:my-8 [&_figure>img]:rounded-2xl [&_figure>img]:w-full [&_figure>img]:border [&_figure>img]:border-white/10 [&_figure>img]:shadow-xl
          [&_figcaption]:text-center [&_figcaption]:text-xs [&_figcaption]:text-gray-400 [&_figcaption]:mt-3
          [&>a]:text-primary [&>a]:underline [&>a]:decoration-primary/50 hover:[&>a]:decoration-primary transition-colors
          [&>table]:w-full [&>table]:my-8 [&>table]:border-collapse [&>table]:border [&>table]:border-white/10 [&>table]:rounded-xl [&>table]:overflow-hidden
          [&_th]:bg-white/10 [&_th]:p-3.5 [&_th]:text-left [&_th]:border [&_th]:border-white/10 [&_th]:font-semibold [&_th]:text-white
          [&_td]:p-3.5 [&_td]:border [&_td]:border-white/10 [&_td]:text-gray-300
          [&_.wp-block-button]:my-8 [&_.wp-block-button]:text-center
          [&_.wp-block-button__link]:inline-flex [&_.wp-block-button__link]:items-center [&_.wp-block-button__link]:gap-2 [&_.wp-block-button__link]:px-6 [&_.wp-block-button__link]:py-3.5 [&_.wp-block-button__link]:rounded-full [&_.wp-block-button__link]:bg-primary [&_.wp-block-button__link]:text-white [&_.wp-block-button__link]:font-semibold [&_.wp-block-button__link]:no-underline [&_.wp-block-button__link]:shadow-lg [&_.wp-block-button__link]:hover:scale-105 [&_.wp-block-button__link]:transition-all
          [&_.wp-block-columns]:grid [&_.wp-block-columns]:grid-cols-1 [&_.wp-block-columns]:sm:grid-cols-2 [&_.wp-block-columns]:gap-6 [&_.wp-block-columns]:my-10 [&_.wp-block-columns]:items-stretch
          [&_.wp-block-column]:w-full [&_.wp-block-column]:min-w-0 [&_.wp-block-column]:flex [&_.wp-block-column]:flex-col
          [&_.wp-block-column_figure]:my-0 [&_.wp-block-column_figure]:h-full [&_.wp-block-column_figure]:flex [&_.wp-block-column_figure]:flex-col
          [&_.wp-block-column_img]:w-full [&_.wp-block-column_img]:h-full [&_.wp-block-column_img]:object-cover [&_.wp-block-column_img]:rounded-2xl [&_.wp-block-column_img]:my-0 [&_.wp-block-column_img]:aspect-[3/2]
          [&_.wp-block-gallery]:grid [&_.wp-block-gallery]:grid-cols-1 [&_.wp-block-gallery]:sm:grid-cols-2 [&_.wp-block-gallery]:gap-6 [&_.wp-block-gallery]:my-10
          [&_.wp-block-gallery_figure]:my-0
          [&_.wp-block-gallery_img]:w-full [&_.wp-block-gallery_img]:h-full [&_.wp-block-gallery_img]:object-cover [&_.wp-block-gallery_img]:rounded-2xl [&_.wp-block-gallery_img]:my-0"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />      
      {tags && tags.length > 0 && (
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
            <IoPricetagOutline className="w-4 h-4 text-primary" />
            <span>Article Tags</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-primary/20 text-gray-300 hover:text-white border border-white/10 hover:border-primary/40 text-xs sm:text-sm font-medium transition-all duration-300 cursor-default"
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
