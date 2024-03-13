import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { BiMessageAltAdd } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const MobileNav = () => {
  return (
    <div className="w-[100vw] h-16 bg-[#662C91] fixed bottom-0 md:hidden">
      <div className="h-full px-6">
        <ul className="flex justify-between items-center h-full">
          <li className="text-[#9F9BB2]">
            <IoHome size={30} />
          </li>
          <li className="text-white hover:text-[#9F9BB2]">
            <FaUserFriends size={30} />
          </li>
          <li className="text-white hover:text-[#9F9BB2]">
            <BiMessageAltAdd size={35} />
          </li>
          <li className="text-white hover:text-[#9F9BB2]">
            <MdOutlineEmail size={30} />
          </li>
          <li className="text-white hover:text-[#9F9BB2]">
            <FaRegBell size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
