import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { categoriesData } from "./categoriesData";

const Categories = () => {
  const scrollRef = useRef(null);
  const [direction, setDirection] = useState("right");

  const scrollByOneCard = () => {
    const container = scrollRef.current;
    const cardWidth = container.clientWidth / 8;

    // Scroll by card width in the current direction
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    // Detect end or start and reverse direction
    setTimeout(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - cardWidth) {
        setDirection("left");
      } else if (container.scrollLeft <= cardWidth) {
        setDirection("right");
      }
    }, 300); // allow scroll to complete
  };

  useEffect(() => {
    const interval = setInterval(scrollByOneCard, 2000);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="w-full  mt-7">
      {/* Header with controls */}
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center">
          <Icon
            icon="charm:stack"
            width="28"
            height="28"
            className="text-primary-color"
          />
          <h1 className="text-2xl font-bold ml-4">Shop by Categories</h1>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              scrollRef.current.scrollBy({
                left: -(scrollRef.current.clientWidth / 8),
                behavior: "smooth",
              });
              setDirection("left");
            }}
            className="p-2 bg-gray-200 rounded-full hover:bg-primary-color group transition"
          >
            <Icon
              icon="mdi:chevron-left"
              className="text-lg group-hover:text-white"
            />
          </button>
          <button
            onClick={() => {
              scrollRef.current.scrollBy({
                left: scrollRef.current.clientWidth / 8,
                behavior: "smooth",
              });
              setDirection("right");
            }}
            className="p-2 bg-gray-200 rounded-full hover:bg-primary-color group transition"
          >
            <Icon
              icon="mdi:chevron-right"
              className="text-lg group-hover:text-white"
            />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4   transition-all duration-300 ease-in-out"
      >
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className="h-[170px] flex items-center justify-center" // ✅ Added flex, items-center, justify-center
          >
            <div className="min-w-[150px] max-w-[150px] h-[150px] bg-white border rounded-lg shadow p-4 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1.5 hover:text-primary-color">
              <Icon
                icon={category.icon}
                width="45"
                height="45"
                className="text-text-color"
              />
              <span className="mt-2 text-sm font-semibold">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;
