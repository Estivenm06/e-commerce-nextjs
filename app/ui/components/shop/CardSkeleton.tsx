import React from "react";

const SkeletonProduct = () => {
  return (
    <article className="w-70 h-fit flex flex-col shadow-sm rounded-lg animate-pulse">
      <div className="px-5 py-3 space-y-3">
        <div className="h-4 w-1/2 bg-gray-500 rounded animate-pulse" />
        <div className="h-4 w-1/4 bg-gray-500 rounded animate-pulse" />
      </div>

      <div className="w-full h-80 flex items-center justify-center p-5">
        <div className="w-full h-full bg-gray-500 rounded-md animate-pulse" />
      </div>
    </article>
  );
};

export { SkeletonProduct };
