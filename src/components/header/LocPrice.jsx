import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const LocPrice = () => {
  return (
    <div className="flex items-center justify-end gap-4 w-full sm:mt-2 md:mt-2">
      {/* Location */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <Icon icon="ph:map-pin" className="group-hover:text-primary-color" />
        <span className="text-sm text-text-color font-bold group-hover:text-primary-color">
          Set A Location
        </span>
      </div>

      {/* Register */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="text-sm text-text-color font-bold group-hover:text-primary-color">
          Register
        </span>
      </div>

      {/* Cart */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <Icon
          icon="famicons:cart-outline"
          className="group-hover:text-primary-color"
        />
        <span className="text-sm text-text-color font-bold group-hover:text-primary-color">
          $93.55
        </span>
      </div>

      {/* Sign In */}
      <button className="p-3 rounded-md bg-black text-white text-sm font-bold hover:bg-primary-color transition-colors duration-200">
        Sign In
      </button>
    </div>
  );
};

export default LocPrice;
