import React, { useRef, useState } from "react";
// import Box from "../shared/Box";

const Highlight = () => {
  const Content = (props) => {
    return (
      <div className="border bg-gray-200/50 rounded-lg cursor-pointer hover:scale-110 transition">
        <div className="h-3/4">
          <img
            src={props.img}
            alt="Image"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="p-2 ">{props.description}</div>
      </div>
    );
  };

  return (
    <div>
      <header className="text-xl font-semibold pl-4">
        <h1>Highlight</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 justify-evenly p-4">
        <Content
          img="/1.jpg"
          description="ชวนร่วมสนุก ลุ้นรับเซรั่มใหม่ ล่าสุดจากไบโอเดอร์มา💚"
        />
        <Content
          img="/2.jpg"
          description="🎧PANTIP PODCAST🎧 3 อันดับกระทู้ฮิตบนพันทิป"
        />
        <Content
          img="/3.jpg"
          description="🚩 กิจกรรมเกมเก่ามาเล่าใหม่ “เกมกดพกพาในตำนาน ยุค 90” 🚩"
        />
        <Content
          img="/4.jpg"
          description="ข่าวดีเพื่อนๆสามารถสร้างรายได้พร้อมกับใช้งาน Pantip ได้แล้วนะ"
        />
      </div>
    </div>
  );
};

export default Highlight;
