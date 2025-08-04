"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@ui5/webcomponents-icons/dist/cart.js";
import "@ui5/webcomponents-icons-tnt/dist/user.js";
import { Icon } from "@ui5/webcomponents-react";

import { useStoreContext } from "../../context/context";

const Header = () => {
  const { user, token, logout } = useStoreContext();
  const pathName = usePathname();
  const currentPath = usePathname();
  const [initialUser, setInitialUser] = React.useState<{
    username: string;
    token: string;
  } | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      const parsedUser: { username: string; token: string } =
        JSON.parse(localUser);
      setInitialUser({
        username: parsedUser.username,
        token: parsedUser.token,
      });
    }
    if (pathName === "/login" && user && token) {
      window.location.href = "/";
    }
  }, [pathName, user, token]);

  return (
    <nav className="flex flex-col flex-wrap justify-between items-center w-full max-w-screen-xl mx-auto min-h-25 px-4 sm:px-10 py-4 gap-8 sm:flex-row">
      {/* Left Navigation */}
      <ul className="flex flex-wrap items-center gap-4 md:gap-6">
        <li>
          <Link
            href="/"
            className={`text-[#353535] px-3 py-2 rounded-lg font-semibold text-lg sm:text-xl ${
              currentPath === "/"
                ? "bg-[#474448] text-white"
                : "ring-1 ring-stone-500 hover:bg-[#f5f5f5] transition-all duration-200 ease-in"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className={`text-[#353535] px-3 py-2 rounded-lg font-semibold text-lg sm:text-xl ${
              currentPath === "/shop"
                ? "bg-[#474448] text-white"
                : "ring-1 ring-stone-500 hover:bg-[#f5f5f5] transition-all duration-200 ease-in"
            }`}
          >
            Shop
          </Link>
        </li>
      </ul>
      {/* Right Actions */}
      <ul className="flex flex-wrap items-center gap-4 md:gap-5">
        {initialUser === null ? (
          <li>
            <Link
              href="/login"
              className="text-md sm:text-lg py-2 px-4 rounded-lg text-white bg-[#474448] font-semibold hover:ring-1 hover:ring-stone-500 cursor-pointer hover:bg-white hover:text-[#353535] transition-all duration-200 ease-in"
            >
              Log in
            </Link>
          </li>
        ) : (
          <>
            <li className="flex items-center gap-1">
              <Icon
                name="tnt/user"
                className="flex items-center mx-auto justify-center w-fit h-4"
                mode="Decorative"
              />
              <p className="capitalize font-semibold">{initialUser.username}</p>
            </li>
            <li>
              <Link href="/cart" onClick={() => console.log("Cart clicked")}>
                <Icon
                  name="cart"
                  className="cursor-pointer flex items-center mx-auto justify-center w-fit h-5 hover:scale-115 transition-transform duration-200 ease-out"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md sm:text-lg py-2 px-4 rounded-lg text-white bg-[#474448] font-semibold hover:ring-1 hover:ring-stone-500 cursor-pointer hover:bg-white hover:text-[#353535] transition-all duration-200 ease-in"
                onClick={() => logout()}
              >
                Log out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export { Header };
