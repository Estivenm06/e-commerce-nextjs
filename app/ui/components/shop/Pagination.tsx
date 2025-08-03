import React from "react";

import type { PaginationProps } from "../../../utils/types";

const Pagination = ({ page, pages, setPage }: PaginationProps) => {
  return (
    <article className="flex justify-center items-center space-x-5 px-7 py-3 bg-white shadow-md rounded-lg">
      {Array.from({ length: pages }, (_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          className={`px-5 py-1.5 rounded-lg shadow-md font-semibold  ${
            page === index + 1
              ? "bg-[#1b263b] text-[#fdfdff]"
              : "bg-gray-200 text-[#353535] cursor-pointer hover:bg hover:ring-2 hover:ring-white hover:scale-105  transition-all duration-300 "
          }`}
        >
          {index + 1}
        </button>
      ))}
    </article>
  );
};

export { Pagination };
