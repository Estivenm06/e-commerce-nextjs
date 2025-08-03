"use client";
import React, { useState } from "react";
import { IllustratedMessage } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";

import { useStoreContext } from "../../../context/context";
import { SkeletonProduct } from "../../components/shop/CardSkeleton";
import { Pagination } from "../../components/shop/Pagination";
import { PaginationSkeleton } from "../../components/shop/PaginationSkeleton";
import { Filter } from "../../components/shop/Filter";
import { ProductsToShow } from "../../components/shop/ProductsToShow";

const ShopPage = () => {
  const [page, setPage] = useState(1);
  const { filteredProducts, loading } = useStoreContext();

  // Calculate pagination
  const items = 8;

  const totalProducts = filteredProducts.length;
  const startIndex = (page - 1) * items;
  const endIndex = startIndex + items;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  const pages = Math.ceil(totalProducts / items);

  let content;
  let pagination;
  if (filteredProducts.length <= 0 && !loading) {
    content = (
      <IllustratedMessage
        name="NoData"
        titleText="No products found"
        subtitleText="Please try adjusting your filters."
      />
    );
    pagination = <></>;
  } else if (loading || filteredProducts.length <= 0) {
    content = Array.from({ length: 8 }).map((_, index) => (
      <SkeletonProduct key={index + 1} />
    ));
    pagination = <PaginationSkeleton />;
  } else {
    content = <ProductsToShow products={productsToShow} />;
    pagination = <Pagination page={page} pages={pages} setPage={setPage} />;
  }

  return (
    <article className="flex flex-col py-4 w-full flex-1 max-w-screen-xl mx-auto px-4 sm:px-10">
      <section>
        <Filter />
      </section>
      <section className="flex flex-wrap justify-center items-center py-10 gap-5">
        {content}
      </section>
      <section className="flex justify-center items-center pb-5">
        {pagination}
      </section>
    </article>
  );
};

export { ShopPage };
