import React from "react";
import { IoTime } from "react-icons/io5";
//OfferBanner component is  responsible for displaying offer banners
const OfferBanner = () => {
  return (
    <div className="flex relative sm:flex-row flex-col bg-orange-200 sm:h-12 ps-5 gap-x-4 sm:py-0 sm:gap-y-0 gap-y-1 py-1 justify-start items-center">
      <div className=" bg-orange-300/90  px-3 py-1 flex items-center gap-x-1  rounded-3xl">
        <IoTime />
        <span className=" font-medium text-xs sm:text-base">
          One-Time Offer
        </span>
      </div>
      <div className="flex flex-row gap-x-2">
        <span className=" font-semibold sm:text-base text-xs ">
          Your AI Storyboarding Bundle Discount expires in
        </span>
        <span className=" text-pink-500 sm:text-base text-xs bg-white/40 px-1 rounded-sm">
          5:01
        </span>
      </div>
      <div className=" bg-pink-500/65 py-1 px-2 sm:text-base text-xs rounded-md">
        Claim Discount
      </div>
    </div>
  );
};

export default OfferBanner;
