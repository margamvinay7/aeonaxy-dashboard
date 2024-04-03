import React, { useState } from "react";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { VscKebabVertical } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Nature1 from "../assets/nature1.jpg";
import { MdMessage } from "react-icons/md";
import OfferBanner from "../components/OfferBanner";
import Header from "../components/Header";
import CreateStoryboard from "../components/CreateStoryboard";

const Dashboard = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    <div>
      <OfferBanner />
      <Header />
      <div className=" bg-neutral-200/50 min-h-[calc(100vh-136px)] p-8  ">
        <div className="flex flex-row justify-between items-center sm:mb-10 sm:mt-5 mb-5 ">
          <div className="flex flex-row gap-x-4 items-center">
            <div className=" rounded-full border-2 h-8  bg-gradient-to-tr from-orange-200/50 to-orange-300 font-semibold border-black w-8 flex justify-center items-center pb-1 text-xl">
              A
            </div>
            <div className="font-bold sm:text-lg text-sm ">
              Adam Cooper Team
            </div>
          </div>
          <div className="bg-black text-white sm:text-base text-[12px] py-1 px-4 rounded-md">
            New Project
          </div>
        </div>

        <div className="bg-white p-6 md:px-8 sm:mb-5 ">
          <div className="flex flex-row justify-between sm:mb-0 mb-5">
            <div className=" flex flex-row items-center gap-x-4">
              <span>
                <HiOutlineFolderOpen
                  style={{
                    color: "black",
                    width: 30,
                    height: 30,
                  }}
                />
              </span>
              <div className="flex flex-col mb-5">
                <span className="font-medium sm:text-base text-sm">
                  Default Project
                </span>
                <span className=" text-[10px] text-slate-500">
                  1 storyboard
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-x-6">
              <VscKebabVertical
                style={{
                  color: "black",
                }}
              />
              <FaAngleDown
                style={{
                  color: "black",
                }}
              />
            </div>
          </div>

          <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            <div className="bg-white/85   md:w-[25vw] ">
              <img
                src={Nature1}
                alt="unplash images"
                height="5%"
                width="100%"
              />
              <div className=" border-2 border-neutral-300/60 rounded-sm p-4 border-t-0">
                <h1 className="font-semibold text-black sm:text-base text-sm">
                  AI Character Demo Stroyboard
                </h1>
                <span className="text-slate-400 sm:text-base text-sm">
                  Updated 02 Apr 24
                </span>
              </div>
            </div>
            <div
              className=" bg-neutral-200/50  rounded-md flex justify-center sm:h-auto h-44 items-center"
              onClick={togglePopup}
            >
              <CiCirclePlus
                style={{
                  color: "rgb(208 208 208)",

                  width: 60,
                  height: 60,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && <CreateStoryboard togglePopup={togglePopup} />}

      <div className=" fixed right-4 bottom-3  bg-black/80 p-2 rounded-full">
        <MdMessage
          style={{
            color: "white",
            height: 20,
            width: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
