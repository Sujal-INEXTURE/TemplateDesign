import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const PBProduct = (props) => {
  const { title, description, icon, cardData } = props;

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
    <div className="w-full my-7">
      {/* Header with controls */}
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center">
          <Icon
            icon={icon}
            width="28"
            height="28"
            className="text-primary-color"
          />
          <div className="flex flex-col ml-4">
            <h1 className="text-2xl font-bold ">{title}</h1>
            {description && (
              <p className="text-text-color text-sm font-semibold">{description}</p>
            )}
          </div>
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
        {cardData.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-center" // ✅ Added flex, items-center, justify-center
          >
            <div className="w-[250px] h-full border bg-white shadow-md rounded-lg  flex flex-col relative hover:border-primary-color transition-all duration-300 ease-in-out">
              {/* Product Image */}
              <img
                src={item.src}
                alt={`${item.category}-image`}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                {/* Category */}
                <p className="text-text-color text-sm font-bold">
                  {item.category}
                </p>
                {/* Product Name */}
                <p className="font-bold text-xl">{item.title}</p>

                {/* Star */}
                <div className="flex items-center mt-2 mb-3">
                  {Array.from({ length: Math.floor(item.star) }, (_, i) => (
                    <Icon
                      icon="mdi:star"
                      key={i}
                      className="text-yellow-400 text-base"
                    />
                  ))}
                  {item.star % 1 !== 0 && (
                    <Icon
                      icon="mdi:star-half-full"
                      className="text-yellow-400 text-base"
                    />
                  )}
                  {Array.from({ length: 5 - Math.ceil(item.star) }, (_, i) => (
                    <Icon
                      icon="mdi:star-outline"
                      key={`empty-${i}`}
                      className="text-yellow-400 text-base"
                    />
                  ))}
                  <p className="text-sm font-bold text-text-color">
                    {item.star} <span>({item.review})</span>
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <p
                      className={`${
                        item.instock && "text-red-500"
                      } font-semibold`}
                    >
                      ${item.price}
                    </p>
                    <span className="line-through text-text-color text-md">
                      ${item.oldprice}
                    </span>
                  </div>

                  {item.instock ? (
                    <>
                      <p className="text-primary-color uppercase"> in stock</p>
                    </>
                  ) : (
                    <button className="bg-primary-color text-white px-3 py-1 rounded-md text-sm">
                      + Add
                    </button>
                  )}
                </div>
                <div>
                  {item.instock && (
                    // <div className="w-full ">
                    <button className="w-full bg-primary-color p-2 mt-4 rounded-2xl text-center text-white font-medium">
                      Add to cart
                    </button>
                    // </div>
                  )}
                </div>
              </div>

              {/* Discount and Sale Chips */}
              <div className="absolute top-2 left-2">
                <div className="flex flex-col gap-2">
                  {item.sale && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                      Sale
                    </span>
                  )}
                  {item.discount && (
                    <span className="bg-primary-color text-white px-2 py-1 rounded-md text-xs">
                      {item.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PBProduct;
