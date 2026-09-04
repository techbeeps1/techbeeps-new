"use client";

import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLinkOutline, IoCheckmarkOutline } from "react-icons/io5";

interface BlogShareBarProps {
  title: string;
  url: string;
}

export default function BlogShareBar({ title, url }: BlogShareBarProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[linear-gradient(180deg,#120D25_58%,#291D58_100%)] border border-white/10 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold uppercase tracking-wider text-white">
          Share this article:
        </span>
      </div>

      <div className="flex items-center flex-wrap gap-2.5">       
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-black border border-white/10 hover:border-white/30 flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 shadow-sm"
        >
          <FaXTwitter className="w-4 h-4" />
        </a>       
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0077b5] border border-white/10 hover:border-white/30 flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 shadow-sm"
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>        
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1877f2] border border-white/10 hover:border-white/30 flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 shadow-sm"
        >
          <FaFacebookF className="w-4 h-4" />
        </a>        
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] border border-white/10 hover:border-white/30 flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 shadow-sm"
        >
          <FaWhatsapp className="w-4 h-4" />
        </a>        
        <button
          onClick={handleCopy}
          aria-label="Copy link to clipboard"
          className={`flex items-center gap-1.5 px-3.5 h-10 rounded-xl border transition-all duration-300 text-xs font-semibold cursor-pointer ${
            copied
              ? "bg-green-500/20 border-green-500/50 text-green-300"
              : "bg-white/10 hover:bg-primary border-white/10 hover:border-primary text-gray-200 hover:text-white"
          }`}
        >
          {copied ? (
            <>
              <IoCheckmarkOutline className="w-4 h-4" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <IoLinkOutline className="w-4 h-4" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
