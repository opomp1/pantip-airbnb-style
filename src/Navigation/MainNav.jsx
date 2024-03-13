import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { BiMessageAltAdd } from "react-icons/bi";
const MainNav = () => {
  return (
    <div className="flex flex-col pt-5 pb-6 border-b w-[100vw] bg-white z-10 justify-center items-center gap-4">
      <div className="hidden md:grid grid-cols-3 px-16 w-full">
        {/* Logo */}
        <div className="w-20 h-20">
          {/* <h2 className="text-purple-500 flex items-center">Pantip</h2> */}
          <img src="/logo2.png" alt="Pantip Logo" className="" />
        </div>
        {/* Seach Box */}
        <div className="px-4 grow flex justify-center items-center">
          <ul className="flex flex-wrap justify-center md:gap-3 lg:gap-12">
            <li className="cursor-pointer font-semibold">หน้าแรก</li>
            <li className="cursor-pointer text-gray-400 font-semibold">
              My feed
            </li>
            {/* <li>Pantip Pick</li>
            <li>Pantip Hitz</li> */}
            <li className="cursor-pointer text-gray-400 font-semibold">
              Explore
            </li>
          </ul>
        </div>
        {/* Profile Setting*/}
        <div className="hidden md:flex text-xl items-center gap-12 justify-self-end">
          <div className="flex items-center gap-4 cursor-pointer">
            <BiMessageAltAdd />
            <h2>ตั้งกระทู้</h2>
          </div>
          <div className="hidden md:flex items-center bg-white border border-1 border-gray-200 rounded-full p-1 text-xl w-20 cursor-pointer justify-self-end hover:bg-slate-100">
            <div className="p-2">
              <IoMenu />
            </div>
            <div className="p-2">
              <CgProfile />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="border border-1 border-gray-200 rounded-full p-2 shadow-lg w-[80vw] max-w-[500px] flex justify-between items-center justify-self-center">
        <input
          type="text"
          placeholder="ค้นหาบน Pantip"
          className=" bg-transparent p-2 focus:outline-none grow"
        />
        <div className="rounded-full bg-[#662C91] p-4 cursor-pointer">
          <IoSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
