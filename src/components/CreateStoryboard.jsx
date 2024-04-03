import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgToggleOn } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";

const CreateStoryboard = ({ togglePopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white md:w-[30vw] sm:w-[50vw] w-[90vw] rounded-md ">
        <div className="p-9 py-7">
          <div className="flex flex-row justify-between mb-5 items-center  ">
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
            <div className="flex mt-1 flex-row items-center cursor-pointer p-2 px-3 bg-white  justify-between  border  border-slate-400 rounded-sm ">
              <input
                className=" outline-none cursor-pointer"
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
            <div>
              <CgToggleOn
                style={{
                  color: "black",
                  height: 30,
                  width: 30,
                }}
              />
            </div>
            <div className="font-medium sm:text-base text-sm">AI Assistant</div>
          </div>

          <button className="text-white sm:text-base text-sm bg-slate-400/40 p-2 sm:px-4 px-2 rounded-md">
            Create Storyboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateStoryboard;
