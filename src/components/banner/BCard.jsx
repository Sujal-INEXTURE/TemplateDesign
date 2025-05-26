import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const BCard = () => {
  return (
    <div className="bg-white w-1/3 sm:hidden md:hidden lg:flex xl:flex rounded-md shadow-xl flex flex-col p-6 ">
      <Icon
        icon="weui:location-outlined"
        width="28"
        height="28"
        color="red"
        className="stroke-1"
      />
      <p className="text-2xl font-bold mt-3">
        Check what's in your local store
      </p>
      <span className="text-md font-semibold text-text-color">
        See delivery and collection options
      </span>
      <div className="grid grid-cols-10 items-center gap-4 w-full mt-4">
        {/* Search Input (col-span-8) */}
        <div className="col-span-7">
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-4 text-sm text-gray-900 border rounded-lg 
        focus:outline-none focus:ring-4 focus:ring-border-color 
        placeholder:font-bold transition duration-300 ease-in-out"
            placeholder="Enter Postcode"
            required
          />
        </div>

        {/* Button (col-span-2) */}
        <div className="col-span-3">
          <button className="bg-primary-color w-full font-bold text-white p-3 rounded-md transition duration-300 ease-in-out hover:bg-primary-color">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default BCard;
