"use client";
import React from "react";

import { usePathname } from "next/navigation";
import { IllustratedMessage, Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";
import "@ui5/webcomponents-icons/dist/clear-all.js";

import { useStoreContext } from "../../../context/context";
import { TableCart } from "../../components/cart/Table";

const CartPage = () => {
  const { cart, token, loading, dispatch } = useStoreContext();
  const pathName = usePathname();
  if (loading)
    return (
      <div className="border-5 w-20 h-20 mx-auto rounded-full animate-spin border-t-4 border-gray-500" />
    );
  if (!cart) {
    return (
      <IllustratedMessage
        name="NoData"
        titleText="Cart not found"
        subtitleText="Please try again later."
      />
    );
  } else if (!cart.products || cart.products.length <= 0) {
    return (
      <IllustratedMessage
        name="NoData"
        titleText="Your cart is empty"
        subtitleText="Please add some products to your cart."
      />
    );
  }
  if (pathName === "/cart" && !token) {
    window.location.href = "/login";
    return;
  }

  return (
    <article className="w-full max-w-screen-xl flex flex-col justify-center items-center px-4 sm:px-10 lg:p-0 gap-10 mx-auto">
      <h1 className="text-3xl font-bold capitalize">{cart.username}'s Cart</h1>
      <div className="w-full max-w-screen-xl flex flex-col gap-4 p-4 rounded-xs shadow-lg pb-10">
        <div className="overflow-auto h-[500px] w-full tableScroll">
          <TableCart />
        </div>
        <div className="flex justify-end">
          <div className="flex gap-2 p-1.5">
          <button className="bg-[#242423] text-white px-5 md:px-10 py-1.5 rounded font-semibold cursor-pointer hover:scale-105 transition-all ease" onClick={() => dispatch({type: "CHECKOUT", payload: {}})}>
            Checkout
          </button>
          <button className="bg-[#f5cb5c] text-white px-5 py-1.5 rounded font-semibold cursor-pointer hover:scale-105 transition-all ease flex items-center gap-2" onClick={() => dispatch({type: "CLEAR_CART", payload: {}})}>
            <Icon name="clear-all" className="fill-white" />
            Clear
          </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export { CartPage };
