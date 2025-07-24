import React from "react";

const SkeletonImage = () => {
  return (
    <div className="w-full md:w-[75%] flex justify-center items-center">
      <div className="w-[250px] md:w-[300px] h-[360] md:h-[410px] bg-stone-300 rounded-lg shadow-lg ring-2 ring-stone-200 animate-pulse"></div>
    </div>
  );
};

export { SkeletonImage };
