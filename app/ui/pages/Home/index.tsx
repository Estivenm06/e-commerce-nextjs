"use client";

import { useStoreContext } from "../../../context/context";
import { SkeletonImage } from "./skeletonImage";

const HomePage = () => {
  const { products, loading } = useStoreContext();

  return (
    <main>
      <section className="flex flex-col-reverse md:flex-row md:justify-between items-center max-w-screen-xl mx-auto px-4 sm:px-10 py-10 gap-10">
        {/* Left Content */}
        <div className="w-full md:w-[125%] flex flex-col gap-5 text-[#353535]">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We are Ɲova
            <br />
            <span className="text-2xl md:text-4xl font-semibold">
              Style Your Own Way with Ɲova
            </span>
          </h1>
          <p className="text-justify text-base md:text-lg">
            Step into the world of Ɲova, where you can style your own way. We
            offer a carefully selected collection of [mention product
            categories, e.g., clothing, accessories, technology and some
            others.] to help you create a style that is all your own.
          </p>
          <button className="border-2 px-5 py-2 rounded-lg border-stone-400 font-bold cursor-pointer hover:bg-[#353535] hover:text-white transition-all duration-200 ease-in w-fit">
            Shop now
          </button>
        </div>
        {/* Right Image */}
        {(loading && products.length < 0) || products[0] === undefined ? (
          <SkeletonImage />
        ) : (
          <div className="w-full md:w-[75%] flex justify-center items-center">
            <img
              src={products[0].image}
              alt={products[0].title}
              className="max-w-[250px] md:max-w-[300px] h-auto rounded-lg shadow-lg shadow-[#353535] ring-2 ring-stone-200"
            />
          </div>
        )}
      </section>
    </main>
  );
};

export { HomePage };
