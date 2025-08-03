import React from "react";

const PaginationSkeleton = () => {
  return (
    <article className="flex justify-center items-center space-x-5 px-7 py-3 shadow-md rounded-xl animate-pulse">
      {Array.from({ length: 2 }, (_, index) => (
        <button
          key={index}
          className={`px-6 py-4 rounded-lg shadow-md animate-pulse bg-gray-500`}
        >
        </button>
      ))}
    </article>
  );
};

export { PaginationSkeleton };
