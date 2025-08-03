"use client";
import React from "react";
import Link from "next/link";
import { Label } from "@ui5/webcomponents-react";

import { useStoreContext } from "../../../context/context";

const LoginPage = () => {
  const { onSubmit } = useStoreContext();
  return (
    <article className="flex items-center justify-center">
      <div className="mb-2 flex flex-col items-center justify-center bg-[#333533] text-white md:p-15 rounded-lg shadow-xl border-5 border-gray-100 px-4 sm:px-10 py-10 max-w-[500px]">
        <div className="mb-4 text-center space-y-2">
          <p className="text-md">Please enter your credentials to log in.</p>
        </div>
        {/* Add login form components here */}
        <form
          className="flex flex-col space-y-2 bg-[#444444] w-full rounded-md p-2 mb-4"
          onSubmit={onSubmit}
        >
          <Label
            for="username"
            className="text-white cursor-pointer text-center text-lg w-fit mx-auto"
          >
            Username
          </Label>
          <input
            type="Text"
            id="username"
            name="username"
            className="w-full bg-white px-2 py-1 rounded-md placeholder:text-gray-500 text-black"
            placeholder="Enter your username"
          />

          <Label
            for="password"
            className="text-white cursor-pointer text-center text-lg w-fit mx-auto"
          >
            Password
          </Label>
          <input
            type="Password"
            id="password"
            name="password"
            className="w-full bg-white px-2 py-1 rounded-md placeholder:text-gray-500 text-black"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="text-[#333533] w-2/4 mx-auto bg-white px-4 py-1 rounded-sm font-semibold cursor-pointer hover:bg-gray-200 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <p>
          Here are accounts for try{" "}
          <Link
            href="/accounts"
            className="text-blue-500 hover:underline hover:text-[#0072BB]"
          >
            Click here
          </Link>
          .
        </p>
      </div>
    </article>
  );
};

export { LoginPage };
