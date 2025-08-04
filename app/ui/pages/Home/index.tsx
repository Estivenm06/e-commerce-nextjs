"use client";
import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import { useStoreContext } from "../../../context/context";
import { SkeletonImage } from "./skeletonImage";

const HomePage = () => {
  const { principalProduct, loading } = useStoreContext();

  return (
    <section className="w-full flex  flex-col-reverse md:flex-row md:justify-between items-center max-w-screen-xl px-4 sm:px-10 py-10 lg:p-0 gap-10 mx-auto">
      {/* Left Content */}
      <div className="w-full md:w-[125%] flex flex-col gap-5 text-[#353535]">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
          We are Ɲova
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            Style Your Own Way with Ɲova
          </span>
        </h1>
        <p className="text-justify text-base md:text-lg lg:text-xl">
          Step into the world of Ɲova, where you can style your own way. We
          offer a carefully selected collection of [mention product categories,
          e.g., clothing, accessories, technology and some others.] to help you
          create a style that is all your own.
        </p>
        <Link href={'/shop'} className="border-2 px-5 py-2 lg:px-7 rounded-lg border-[#353535] font-bold cursor-pointer hover:bg-[#353535] hover:text-white transition-all duration-200 ease-in w-fit">
          Shop now
        </Link>
      </div>
      {/* Right Image */}
      {loading && principalProduct === undefined ? (
        <SkeletonImage />
      ) : (
        <div className="w-full md:w-[75%] flex justify-center items-center ">
          <Image
            width={400}
            height={400}
            src={principalProduct.image}
            alt={principalProduct.title}
            className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px] h-auto shadow-sm rounded-xl"
          />
        </div>
      )}
    </section>
  );
};

export { HomePage };
