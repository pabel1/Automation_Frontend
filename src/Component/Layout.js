import React from "react";
import Navbar from "./DashBoard/Navbar";
import SideBar from "./DashBoard/SideBar";

const Layout = ({ children }) => {
  return (
    <main className=" min-h-screen min-w-screen bg-gray-50 ">
      <div className="w-full min-h-screen flex">
        <SideBar />
        <div className="w-full h-full">
          <Navbar />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
