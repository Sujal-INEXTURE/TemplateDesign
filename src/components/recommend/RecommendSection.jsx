import React from "react";
import { recommendData } from "./recommend";
import { Icon } from "@iconify/react/dist/iconify.js";

const RecommendSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {recommendData.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 hover:cursor-pointer"
            />
            <div
              className="absolute bottom-0 w-full p-3 px-4 flex items-center text-white text-md font-semibold"
              style={{ backgroundColor: item.color }}
            >
              {item.title}{" "}
              <Icon
                icon="mdi:keyboard-arrow-right"
                width="24"
                height="24"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendSection;
