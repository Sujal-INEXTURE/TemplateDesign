import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { menuOptions } from "./menuData";

const Menu = () => {
  return (
    <>
      <div className="border">
        <div className="container mx-auto py-2 px-36 ">
          <div className="flex md:flex-wrap items-center w-full gap-5">
            <button className="bg-primary-color flex items-center gap-3 text-white px-4 py-2 rounded-md mr-4">
              <Icon
                icon="ri:menu-2-line"
                width="15"
                height="15"
                className="text-gray-200"
              />
              <span className="text-md font-bold">All Categories</span>
            </button>

            {menuOptions.map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <p className="hover:text-primary-color flex items-center font-medium">
                  {item.name}
                  {item?.options && item?.options?.length > 0 && (
                    <Icon
                      icon="solar:alt-arrow-down-outline"
                      width="15"
                      height="15"
                      className="ml-2"
                    />
                  )}
                </p>

                {/* Dropdown if options exist */}
                {item.options && (
                  <div
                    className="absolute left-0 top-full mt-3 bg-white shadow-md rounded-md z-50 min-w-[200px] opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out 
                    translate-y-2 group-hover:translate-y-0"
                  >
                    <ul className="flex flex-col py-2 px-4">
                      {item.options.map((opt, idx) => (
                        <li key={idx}>
                          <a
                            href={opt.link}
                            className="block py-1 px-2 text-gray-700 hover:text-primary-color hover:bg-gray-100 rounded"
                          >
                            {opt.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
