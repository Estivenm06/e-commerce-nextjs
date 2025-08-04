"use client";
import React from "react";

import { useStoreContext } from "../../../context/context";
import { Modals } from "@ui5/webcomponents-react";

const AccountsPage = () => {
  const { users, loading, LoginUser } = useStoreContext();
  if (loading)
    return (
      <div className="border-5 w-20 h-20 mx-auto rounded-full animate-spin border-t-4 border-gray-500" />
    );

  return (
    <article className="flex items-center justify-center">
      <div className="w-full max-w-screen-xl flex flex-col justify-center items-center px-4 sm:px-10 lg:p-0 gap-10 mx-auto">
        <h1 className="text-3xl font-bold capitalize">Accounts</h1>
        <div className="w-full max-w-screen-xl flex flex-col gap-3 bg-white p-4 rounded-lg shadow-lg py-5">
          {users && users.length > 0 ? (
            users.map((user) => (
              <button
                key={user.id}
                className="cursor-pointer p-4 border border-gray-300 hover:bg-gray-100  rounded-md shadow-sm z-10 hover:scale-105 transition-all duration-200 ease-in-out"
                onClick={() => {
                  const { close } = Modals.showDialog({
                    headerText: `Account Details for ${user.username}`,
                    children: (
                      <div className="flex flex-col items-center max-w-[450px] mx-auto">
                        <p>Username: {user.username}</p>
                        <p>Password: {user.password}</p>
                      </div>
                    ),
                    footer: (
                      <div className="w-full flex justify-end items-center py-7 gap-4">
                        <button
                          className="bg-[#242423] text-white px-5 md:px-10 py-1.5 rounded font-semibold cursor-pointer hover:scale-105 transition-all ease"
                          onClick={() => {
                            LoginUser({
                              username: user.username,
                              password: user.password,
                            });
                            close();
                          }}
                        >
                          Log in Directly
                        </button>
                        <button
                          className="bg-[#f5cb5c] text-white px-5 md:px-10 py-1.5 rounded font-semibold cursor-pointer hover:scale-105 transition-all ease"
                          onClick={async () => {
                            await navigator.clipboard.writeText(user.password);
                            alert(
                              "Password copied to clipboard, now paste it in the password field."
                            );
                            close();
                          }}
                        >
                          Log in manually
                        </button>
                      </div>
                    ),
                  });
                }}
              >
                {user.username}
              </button>
            ))
          ) : (
            <p>No accounts found.</p>
          )}
        </div>
      </div>
    </article>
  );
};

export { AccountsPage };
