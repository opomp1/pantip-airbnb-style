import React, { useState } from "react";

import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdFamilyRestroom } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import { PiPlant } from "react-icons/pi";
import { GiMirrorMirror } from "react-icons/gi";
import { AiOutlinePicture } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";
import { IoMdPlanet } from "react-icons/io";
import { PiTelevisionDuotone } from "react-icons/pi";
import "./Room.css";
const RoomIcon = (props) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 p-0 rounded-full transition w-20 h-20">
      <span>{props.children}</span>
      <span className="flex flex-nowrap text-xs truncate">{props.text}</span>
    </div>
  );
};

const Room = () => {
  return (
    <div className="slider-container w-[100%] flex flex-wrap md:gap-2 justify-evenly">
      {/* <div
        className="slider gap-8"
        style={{ transform: `translateX(-${scrollPosition * 200}px)` }}
      > */}
      <RoomIcon text={"สยามสแควร์"}>
        <IoChatbubblesOutline size={35} />
      </RoomIcon>
      <RoomIcon text={"รวมมิคร"}>
        <FaRegStar size={35} />
      </RoomIcon>
      <RoomIcon text={"ก้นครัว"}>
        <ImSpoonKnife size={35} />
      </RoomIcon>
      <RoomIcon text={"ชานเรือน"}>
        <MdFamilyRestroom size={35} />
      </RoomIcon>
      <RoomIcon text={"ห้องสมุด"}>
        <IoBookOutline size={35} />
      </RoomIcon>
      <RoomIcon text={"เฉลิมกรุง"}>
        <IoMusicalNotesOutline size={35} />
      </RoomIcon>
      <RoomIcon text={"ไร้สังกัด"}>
        <FiCoffee size={35} />
      </RoomIcon>
      <RoomIcon text={"กรีนโซน"}>
        <PiPlant size={35} />
      </RoomIcon>
      <RoomIcon text={"โต๊ะเครื่องแป้ง"}>
        <GiMirrorMirror size={35} />
      </RoomIcon>
      <RoomIcon text={"แกลเลอรี่"}>
        <AiOutlinePicture size={35} />
      </RoomIcon>
      <RoomIcon text={"จตุจักร"}>
        <CiShop size={35} />
      </RoomIcon>
      <RoomIcon text={"ซิลิคอนวัลเลย์"}>
        <FaComputer size={35} />
      </RoomIcon>
      <RoomIcon text={"บลูแพลนเน็ต"}>
        <IoMdPlanet size={35} />
      </RoomIcon>
      <RoomIcon text={"การ์ตูน"}>
        <PiTelevisionDuotone size={35} />
      </RoomIcon>
      {/* <RoomIcon text={"หว้าเกอ"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"ดิโอลด์สยาม"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"กล้อง"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"แก็ตเจ็ด"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"หอศิลป์"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"ราชดำเนิน"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"ชายตา"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"ไกลบ้าน"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"เฉลิมไทย"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon>
        <RoomIcon text={"ถนนนักเขียน"}>
          <IoChatbubblesOutline size={35} />
        </RoomIcon> */}
      {/* </div> */}
      {/* <button className="arrow left" onClick={scrollLeft}>
        {"<"}
      </button>
      <button className="arrow right" onClick={scrollRight}>
        {">"}
      </button> */}
    </div>
  );
};

export default Room;
