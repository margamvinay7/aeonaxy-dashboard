import React, { useState } from "react";
import { IoTime } from "react-icons/io5";
import { TbCircleLetterB } from "react-icons/tb";
import { VscBold } from "react-icons/vsc";
import { SlEnergy } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { VscKebabVertical } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import Nature1 from "./nature1.jpg";

const DemoComponent = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    <div>
      <div className="flex sm:flex-row flex-col bg-orange-200 sm:h-12 ps-5 gap-x-4 sm:py-0 sm:gap-y-0 gap-y-1 py-1 justify-start items-center">
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

      <div className="flex sm:flex-row flex-col relative justify-between   ps-2 sm:items-center">
        <div className="flex flex-row p-5 ps-4 items-center    ">
          <div className="bg-black rounded-full md:hidden me-2 md:w-12 md:h-12 p-1  flex flex-row justify-center items-center">
            <VscBold
              style={{
                color: "white",
                height: 30,
                width: 30,
              }}
            />
          </div>
          <div className="bg-black hidden   rounded-full md:w-12 md:h-12 p-1  md:flex flex-row justify-center items-center">
            <VscBold
              style={{
                color: "white",
                height: 60,
                width: 80,
              }}
            />
          </div>
          <div className=" ps-8 font-bold md:text-2xl text-xl  ">
            Project Dashboard
          </div>
        </div>

        <div className="mb-3 sm:mb-0 flex flex-row gap-x-3  ">
          <div className="flex flex-row items-center bg-white h-8 sm:h-12 sm:w-72  border  border-slate-400 rounded-sm ">
            <CiSearch
              style={{
                color: "rgb(148 163 184)",
                height: 30,
                width: 30,
              }}
            />
            <input
              placeholder="Search my storyboards"
              className=" text-[10px] sm:text-base sm:h-12 p-2 outline-none border-y-[1px] border-slate-400 "
            />
          </div>
          <div className=" font-semibold border-sky-300 border-2 flex flex-row bg-sky-200/50 py-1 px-2 sm:h-12 h-8 justify-center items-center rounded-sm gap-x-2">
            <div className="border-[3px] border-sky-200 rounded-full sm:text-base text-xs  border-r-sky-400/70 border-t-sky-400/70 w-5 h-5   sm:w-7 sm:h-7 flex items-center justify-center">
              4
            </div>
            <div className="text-[9px] sm:text-base"> Quick Start</div>
          </div>
          <div className=" rounded-full border-2 sm:h-12 sm:w-12 w-8 h-8  bg-gradient-to-tr from-orange-200 to-orange-300 font-semibold border-black  flex justify-center items-center pb-1 text-xl sm:text-3xl">
            A
          </div>
          <div className=" bg-black p-2 ms-[0.13rem] sm:ms-0 sm:p-2 pe-0 w-10 flex justify-center items-center rounded-tl-full rounded-bl-full">
            <SlEnergy
              style={{
                color: "white",
                height: 20,
                width: 20,
              }}
            />
          </div>
        </div>
      </div>

      <div className=" bg-neutral-200/70 min-h-[calc(100vh-136px)] p-8  ">
        <div className="flex flex-row justify-between items-center sm:mb-10 sm:mt-5 mb-5 ">
          <div className="flex flex-row gap-x-4 items-center">
            <div className=" rounded-full border-2 h-8  bg-gradient-to-tr from-orange-200 to-orange-300 font-semibold border-black w-8 flex justify-center items-center pb-1 text-xl">
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

        <div className="bg-white p-8 ">
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
              <div className="flex flex-col">
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
            <div className="bg-white/85 border-2 border-neutral-500/60  md:w-[25vw] ">
              <img src={Nature1} height="5%" width="100%" />
              <div className="m-4">
                <h1 className="font-semibold text-black sm:text-base text-sm">
                  AI Character Demo Stroyboard
                </h1>
                <span className="text-slate-400 sm:text-base text-sm">
                  Updated 02 Apr 24
                </span>
              </div>
            </div>
            <div
              className=" bg-neutral-200/90 flex justify-center sm:h-auto h-44 items-center"
              onClick={togglePopup}
            >
              <CiCirclePlus
                style={{
                  color: "rgb(148 163 184)",
                  width: 60,
                  height: 60,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white sm:w-[30vw] w-[90vw] rounded-md ">
            <div className="p-9">
              <div className="flex flex-row justify-between mb-7 items-center  ">
                <span className="text-black   font-bold text-2xl">
                  New Storyboard
                </span>{" "}
                <div className="bg-neutral-200/30 p-2 rounded-full">
                  <button
                    onClick={togglePopup}
                    className="w-5 h-5 flex items-center justify-center"
                  >
                    <AiOutlineClose
                      style={{
                        color: "black",
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="font-medium">
                  Storyboard Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border mt-1 outline-none rounded-sm p-2 border-slate-400 "
                  placeholder="e.g. Default Project Storyboard"
                />
              </div>

              <div className="flex flex-col mt-3">
                <label htmlFor="frame" className="font-medium">
                  Frame Size
                </label>
                <div className="flex mt-1 flex-row items-center p-2 px-3 bg-white  justify-between  border  border-slate-400 rounded-sm ">
                  <input
                    className=" outline-none"
                    value="Landscape (16:9)"
                    id="frame"
                  />
                  <FaAngleDown
                    style={{
                      color: "black",
                      height: 10,
                      width: 10,
                    }}
                  />
                </div>
              </div>
            </div>

            <hr className=" w-full px-0 border border-slate-400/50" />
            <div className="flex flex-row items-center justify-between p-9 py-7">
              <div className="flex flex-row items-center gap-x-2">
                <div className=" -rotate-90">
                  <BsMouse
                    style={{
                      color: "black",
                      height: 20,
                      width: 20,
                    }}
                  />
                </div>
                <div className="font-medium sm:text-base text-sm">
                  AI Assistant
                </div>
              </div>

              <button className="text-white sm:text-base text-sm bg-slate-400/40 p-2 sm:px-4 px-2 rounded-md">
                Create Storyboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoComponent;
