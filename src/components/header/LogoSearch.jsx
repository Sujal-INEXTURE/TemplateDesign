import React from "react";
import Logo from "../../assets/logo/logo.svg";

const LogoSearch = () => {
  return (
    <div className="flex items-center w-full gap-4 ">
      <img src={Logo} alt="logo" className="src" />
      <form className="max-w-lg w-full">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-4 text-sm text-gray-900 border rounded-lg 
              focus:outline-none focus:ring-4 focus:ring-border-color 
             placeholder:font-bold transition duration-300 ease-in-out"
            placeholder="Search for products"
            required
          />
          <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogoSearch;
