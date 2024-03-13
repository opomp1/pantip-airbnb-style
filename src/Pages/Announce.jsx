import React from "react";
import Box from "../shared/Box";

const Announce = () => {
  const Content = (props) => {
    return (
      <div className="border-t border-gray-200 p-4 md:pl-8 bg-gray-100/20">
        {props.text}
      </div>
    );
  };
  return (
    <Box header={"Announce"}>
      <Content
        text={
          "🎧 Pantip Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 12มีนาคม 📊"
        }
      />
      <Content
        text={
          "Pantip Point 💰 มีนามีใจ...ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตามหาน้องเพี้ยนกัน ! 🧐🔎"
        }
      />
      <Content
        text={"Update : ระบบแจ้งเตือนกระทู้ที่ติดตามผ่านการใช้งานบน mobile"}
      />
    </Box>
  );
};

export default Announce;
