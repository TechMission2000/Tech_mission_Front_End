"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  totalPosts: number;
  postsPerPage?: number;
  onPageChange: (page: number, currentPosts: number[]) => void;
}

export default function BlogPagination({
  totalPosts,
  postsPerPage = 6,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page, [(page - 1) * postsPerPage, page * postsPerPage]);
    }
  };

  return (
    <div className="flex justify-center items-center gap-3">
      {/* Prev button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-md border transition ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-blue-600 border-gray-300 hover:bg-gray-50"
        }`}
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-10 h-10 rounded-md font-semibold transition ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-md border transition ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-blue-600 border-gray-300 hover:bg-gray-50"
        }`}
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
