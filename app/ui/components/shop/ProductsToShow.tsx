import React from "react";

import Image from "next/image";
import { Modals } from "@ui5/webcomponents-react";
import type { ProductsType } from "../../../utils/types";
import { ProductCard } from "./Card";
import { useStoreContext } from "../../../context/context";

const ProductsToShow = ({ products }: { products: ProductsType[] }) => {
  const { token, dispatch } = useStoreContext();

  return (
    <>
      {products.map((product) => (
        <button
          key={product.id}
          className="flex flex-wrap justify-center items-center hover:scale-105 transition-transform duration-200"
          onClick={() => {
            const { close } = Modals.showDialog({
              headerText: product.title,
              children: (
                <div className="flex flex-col items-center max-w-[450px] mx-auto">
                  <Image
                    width={200}
                    height={200}
                    src={product.image}
                    alt={product.title}
                    className="w-80 h-80 object-contain p-5 mx-auto select-none"
                  />
                  <h2 className="text-xl font-semibold mt-4">
                    ${product.price}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Description: {product.description}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Category: {product.category}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Rate: {product.rating.rate} ⭐ ({product.rating.count}{" "}
                    reviews)
                  </p>
                </div>
              ),
              footer: (
                <div className="w-full flex justify-end items-center py-7 gap-3">
                  {token && (
                    <button
                      className="bg-green-500 hover:bg-green-700 rounded-md px-5 py-2 text-white font-semibold cursor-pointer transition-colors duration-200"
                      onClick={() =>
                        dispatch({ type: "ADD_PRODUCT", payload: product })
                      }
                    >
                      Buy
                    </button>
                  )}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 rounded-md px-5 py-2 text-white font-semibold cursor-pointer transition-colors duration-200"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
              ),
            });
          }}
        >
          <ProductCard key={product.id} product={product} />
        </button>
      ))}
    </>
  );
};

export { ProductsToShow };
