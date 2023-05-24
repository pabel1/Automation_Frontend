import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

const SideBar = () => {
  return (
    <div className="w-[15%] transition-all duration-1000 bg-gray-50 shadow-md p-4 pl-0 rounded-md">
      {/* <div className="flex items-center">
      <img src={logo} className="w-28" alt="" />
    </div> */}
      <div>
        {data?.map((item, index) => (
          <div
            key={index}
            className="group my-6 rounded-r-md px-4 py-2 hover:bg-blue-100 transition-all duration-500"
          >
            <Link
              title={item?.title}
              to={item?.link}
              className="w-fit flex items-center gap-2 text-sm font-normal text-gray-500 group-hover:text-blue-500 transition-all duration-500"
            >
              <item.icon className="text-base " />
              {item?.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
