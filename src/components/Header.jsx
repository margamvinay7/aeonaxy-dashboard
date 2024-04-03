import React from "react";
import { VscBold } from "react-icons/vsc";
import { SlEnergy } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col relative justify-between   ps-2 sm:items-center">
      <div className="flex flex-row p-4 ps-4 items-center    ">
        <div className="bg-black rounded-full md:hidden me-2 sm:me-0 md:w-12 md:h-12 p-1  flex flex-row justify-center items-center">
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
        <div className="flex flex-row items-center bg-white h-8 sm:h-11 sm:w-80  ps-3  border  border-slate-400 rounded-sm ">
          <CiSearch
            style={{
              color: "rgb(148 163 184)",
              height: 20,
              width: 20,
            }}
          />
          <input
            placeholder="Search my storyboards"
            className=" text-[10px] sm:text-base sm:h-11 h-8 p-2 outline-none border-y-[1px] border-slate-400 "
          />
        </div>
        <div className=" font-semibold border-sky-200 border-2 flex flex-row bg-sky-100/50 py-1 px-2 sm:h-11 h-8 justify-center items-center rounded-md gap-x-2">
          <div className="border-[3px] border-sky-200 rounded-full sm:text-base text-xs  border-r-sky-400/70 border-t-sky-400/70 w-5 h-5   sm:w-7 sm:h-7 flex items-center justify-center">
            4
          </div>
          <div className="text-[9px] sm:text-sm md:text-base md:px-2">
            Quick Start
          </div>
        </div>
        <div className=" rounded-full border-2 sm:h-12 sm:w-12 w-8 h-8  bg-gradient-to-tr from-orange-200/50 to-orange-300 font-semibold border-black  flex justify-center items-center pb-1 text-xl sm:text-3xl">
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
  );
};

export default Header;
