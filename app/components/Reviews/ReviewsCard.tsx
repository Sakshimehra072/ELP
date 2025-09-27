"use client";
import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  item: {
    avatar: string;
    name: string;
    profession: string;
    comment: string;
    rating?: number;
  };
};

const ReviewsCard: React.FC<Props> = ({ item }) => {
  const [showMore, setShowMore] = useState(false);

  const words = (item.comment || "").trim().split(/\s+/);
  const isLong = words.length > 100;
  const visibleText = showMore
    ? item.comment
    : words.slice(0, 100).join(" ") + (isLong ? "..." : "");

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border border-[#00000015] dark:border-[#ffffff1d] rounded-xl p-5 shadow-lg">
      {/* Top Section */}
      <div className="flex items-center w-full">
        <Image
          src={item.avatar}
          width={60}
          height={60}
          className="w-[60px] h-[60px] rounded-full object-cover"
          alt={item.name ? `${item.name}'s avatar` : "review avatar"}
        />

        {/* Desktop */}
        <div className="hidden w-full justify-between 800px:flex pl-4">
          <div>
            <h5 className="text-[18px] font-semibold text-black dark:text-white">
              {item.name}
            </h5>
            <h6 className="text-[14px] text-[#000] dark:text-[#ffffffab]">
              {item.profession}
            </h6>
          </div>
          <Ratings rating={item.rating || 5} />
        </div>

        {/* Mobile */}
        <div className="flex w-full flex-col 800px:hidden pl-4">
          <h5 className="text-[18px] font-semibold text-black dark:text-white">
            {item.name}
          </h5>
          <h6 className="text-[14px] text-[#000] dark:text-[#ffffffab]">
            {item.profession}
          </h6>
          <Ratings rating={item.rating || 5} />
        </div>
      </div>

      {/* Comment */}
      <p className="pt-4 font-Poppins text-[15px] leading-relaxed text-black dark:text-white flex-1">
        {visibleText}
      </p>

      {isLong && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-3 hover:underline transition"
        >
          {showMore ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default ReviewsCard;
