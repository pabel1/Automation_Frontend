import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-end gap-2  p-4">
      <div className=" relative">
        <IoIosNotificationsOutline className="text-2xl text-gray-500" />
        <span className="w-5 h-5 flex justify-center items-center text-white absolute bottom-[50%] left-[50%] text-[9px] rounded-full bg-red-500 border border-white">
          10
        </span>
      </div>
      <div className=" rounded-md flex items-center justify-between gap-2 px-4 py-1 relative cursor-pointer">
        <img
          className="w-7 h-7 object-cover rounded-full"
          src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"
          alt=""
        />
        <h1 className="text-sm font-normal">Rick Adam</h1>
        <RxCaretDown
          className={` text-lg transition-all duration-500 cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default Navbar;
