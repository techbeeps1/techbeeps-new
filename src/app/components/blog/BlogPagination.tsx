"use client";

import Link from "next/link";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  basePath = "/blog",
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const createPageUrl = (pageNumber: number) => {
    if (pageNumber <= 1) {
      return basePath;
    }
    return `${basePath}?page=${pageNumber}`;
  };

  // Generate page numbers with ellipses
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Blog pagination navigation"
      className="flex items-center justify-center gap-2 sm:gap-3 pt-12 lg:pt-16"
    >
      {/* Previous Button */}
      {hasPrev ? (
        <Link
          href={createPageUrl(currentPage - 1)}
          aria-label="Go to previous page"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 text-gray-200 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-md"
        >
          <IoChevronBackOutline className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-gray-600 cursor-not-allowed text-xs sm:text-sm font-medium"
        >
          <IoChevronBackOutline className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-2">
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500 font-medium text-sm"
              >
                ...
              </span>
            );
          }

          const pageNum = Number(p);
          const isActive = pageNum === currentPage;

          return (
            <Link
              key={`page-${pageNum}`}
              href={createPageUrl(pageNum)}
              aria-current={isActive ? "page" : undefined}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                isActive
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/40 scale-105"
                  : "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/15 hover:border-white/20"
              }`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {hasNext ? (
        <Link
          href={createPageUrl(currentPage + 1)}
          aria-label="Go to next page"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 text-gray-200 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-md"
        >
          <span className="hidden sm:inline">Next</span>
          <IoChevronForwardOutline className="w-4 h-4" />
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-gray-600 cursor-not-allowed text-xs sm:text-sm font-medium"
        >
          <span className="hidden sm:inline">Next</span>
          <IoChevronForwardOutline className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
}
