import React, { useState } from "react";

import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";

const DUMMY_DATA = [
  {
    id: 1,
    title: "คำถามเกี่ยวกับการเขียนโปรแกรมและเทคนิคที่ใช้ในการเรียนรู้",
    username: "สมาชิกหมายเลขที่ 569845",
    date: "18 ม.ค",
    comments: 12,
    shares: 5,
    image:
      "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
  },
  {
    id: 2,
    title: "ความรู้เกี่ยวกับการทำอาหารและเคล็ดลับในการปรุงอาหารที่อร่อย",
    username: "สมาชิกหมายเลขที่ 785432",
    date: "25 ก.พ.",
    comments: 8,
    shares: 3,
    image:
      "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202312/MIT_Food-Diabetes-01_0.jpg?itok=Mp8FVJkC",
  },
  {
    id: 3,
    title: "วิธีการดูแลสุขภาพใจและเคล็ดลับในการสร้างความสุขในชีวิตประจำวัน",
    username: "สมาชิกหมายเลขที่ 123456",
    date: "2 ม.ค.",
    comments: 20,
    shares: 10,
    image: "https://www.ohswa.or.th/images/content/original-1591331565923.jpg",
  },
  {
    id: 4,
    title:
      "เทคนิคในการทำงานที่มีประสิทธิภาพและวิธีการแก้ปัญหาในการทำงานที่บ้าน",
    username: "สมาชิกหมายเลขที่ 987654",
    date: "10 ม.ย.",
    comments: 15,
    shares: 6,
    image:
      "https://f.hubspotusercontent40.net/hubfs/9253440/Man%20has%20overwork%20and%20sitting%20with%20laptop%20and%20table%20lamp.%20Mental%20work%20with%20paper.%20Empty%20office.jpg",
  },
  {
    id: 5,
    title: "วิธีการปลูกต้นไม้ให้โตเร็วและเคล็ดลับในการดูแลสวน",
    username: "สมาชิกหมายเลขที่ 456123",
    date: "15 ม.ย.",
    comments: 18,
    shares: 7,
    image:
      "https://hallhunter.com/wp-content/uploads/2020/08/shutterstock_692043769.jpg",
  },
  {
    id: 6,
    title: "การดูแลสุขภาพร่างกายในช่วงหน้าหนาวและวิธีการป้องกันโรค",
    username: "สมาชิกหมายเลขที่ 789456",
    date: "20 พ.ค.",
    comments: 25,
    shares: 8,
    image:
      "https://images.squarespace-cdn.com/content/v1/54edef61e4b0d7bc3127841c/1555785791702-I1TM7QQGS4VUV4N4KI1G/barn-clouds-corn-235725.jpg",
  },
  {
    id: 7,
    title:
      "การทำงานที่บ้านในช่วงโควิด-19และเคล็ดลับในการรักษาความสุขในชีวิตประจำวัน",
    username: "สมาชิกหมายเลขที่ 654789",
    date: "3 ม.ย.",
    comments: 10,
    shares: 4,
    image:
      "https://www.bnhhospital.com/wp-content/uploads/2023/12/www.bnhhospital.com-covid-19-2.webp",
  },
  {
    id: 8,
    title:
      "แนวทางการเตรียมตัวสอบเรียนออนไลน์และวิธีการปรับตัวให้เข้ากับสถานการณ์",
    username: "สมาชิกหมายเลขที่ 321654",
    date: "8 ก.ค.",
    comments: 14,
    shares: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTxffkkthEOeVC0feuQoSe0CmyVM9CNYBZcsTLNxVbzcetVLvbOR40PHVqMO9bdl1eB8&usqp=CAU",
  },
  {
    id: 9,
    title:
      "การใช้เทคโนโลยีในการสอนออนไลน์และวิธีการทำให้การเรียนรู้มีประสิทธิภาพมากขึ้น",
    username: "สมาชิกหมายเลขที่ 987321",
    date: "17 ก.ค.",
    comments: 22,
    shares: 9,
    image:
      "https://www.thespark.org.uk/wp-content/uploads/2022/03/exam-stress-man-scaled.jpeg",
  },
  {
    id: 10,
    title: "วิธีการฝึกทำโยคะในบ้านและเคล็ดลับในการให้ความสำคัญกับสุขภาพจิต",
    username: "สมาชิกหมายเลขที่ 135792",
    date: "25 ก.ค.",
    comments: 16,
    shares: 5,
    image:
      "https://iso.500px.com/wp-content/uploads/2015/11/photo-128278505_1.jpg",
  },
];

const DUMMY_DATA_TWO = [
  {
    id: 11,
    title:
      "การแก้ปัญหาในการเรียนรู้ออนไลน์และวิธีการเตรียมตัวสอบอย่างมีประสิทธิภาพ",
    username: "สมาชิกหมายเลขที่ 246813",
    date: "3 ส.ค",
    comments: 19,
    shares: 7,
    image:
      "https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg",
  },
  {
    id: 12,
    title:
      "วิธีการเพิ่มพลังให้กับร่างกายในช่วงโควิด-19และเคล็ดลับในการรักษาสุขภาพที่ดี",
    username: "สมาชิกหมายเลขที่ 579624",
    date: "12 ส.ค",
    comments: 11,
    shares: 4,
    image: "https://wallpapersmug.com/large/b57166/minimal-mountains.jpg",
  },
  {
    id: 13,
    title: "เคล็ดลับในการทำงานที่บ้านและวิธีการเพิ่มประสิทธิภาพในการทำงาน",
    username: "สมาชิกหมายเลขที่ 369258",
    date: "21 ส.ค",
    comments: 13,
    shares: 6,
    image: "https://www.ohswa.or.th/images/content/original-1591331565923.jpg",
  },
  {
    id: 14,
    title:
      "การดูแลสุขภาพจิตในช่วงโควิด-19และวิธีการให้ความสำคัญกับความสุขในชีวิตประจำวัน",
    username: "สมาชิกหมายเลขที่ 159357",
    date: "30 ส.ค",
    comments: 17,
    shares: 8,
    image:
      "https://www.thespark.org.uk/wp-content/uploads/2022/03/exam-stress-man-scaled.jpeg",
  },
  {
    id: 15,
    title:
      "วิธีการเตรียมตัวสอบเรียนออนไลน์และการปรับตัวให้เข้ากับสถานการณ์ในช่วงโควิด-19",
    username: "สมาชิกหมายเลขที่ 753951",
    date: "6 ก.ย.",
    comments: 21,
    shares: 9,
    image:
      "https://www.thespark.org.uk/wp-content/uploads/2022/03/exam-stress-man-scaled.jpeg",
  },
  {
    id: 16,
    title:
      "การใช้งานโปรแกรม Microsoft Excel ในการวิเคราะห์ข้อมูลและเคล็ดลับในการใช้งาน",
    username: "สมาชิกหมายเลขที่ 456123",
    date: "15 ก.ย.",
    comments: 20,
    shares: 7,
    image:
      "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202312/MIT_Food-Diabetes-01_0.jpg?itok=Mp8FVJkC",
  },
  {
    id: 17,
    title:
      "การใช้เทคโนโลยีในการสอนออนไลน์และการปรับตัวให้เข้ากับสถานการณ์ในช่วงโควิด-19",
    username: "สมาชิกหมายเลขที่ 753951",
    date: "30 ก.ย",
    comments: 25,
    shares: 11,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/007/998/925/small/set-collection-mystical-celestial-dark-holy-simple-minimalism-tattoo-clipart-symbol-space-doodle-esoteric-elements-vintage-illustration-vector.jpg",
  },
  {
    id: 18,
    title:
      "วิธีการสร้างบรรยากาศที่เหมาะสมในการทำงานที่บ้านและการปรับตัวให้เข้ากับสถานการณ์ใหม่",
    username: "สมาชิกหมายเลขที่ 753951",
    date: "10 ต.ค",
    comments: 18,
    shares: 6,
    image: "https://www.bareo-isyss.com/images/decor-guide/Minimal_Style/1.jpg",
  },
  {
    id: 19,
    title: "เทคนิคในการเตรียมตัวสอบเรียนออนไลน์และการแก้ปัญหาในการเรียนรู้",
    username: "สมาชิกหมายเลขที่ 753951",
    date: "25 ต.ค",
    comments: 22,
    shares: 8,
    image:
      "https://preview.redd.it/minimal-aesthetic-wallpaper-v0-q4j3dajynnt81.png?auto=webp&s=9d607767a5c1831b7986c4c90676f0768e48125d",
  },
  {
    id: 20,
    title:
      "วิธีการใช้งานโปรแกรม Photoshop ในการแก้ไขรูปภาพและเคล็ดลับในการทำงานที่บ้าน",
    username: "สมาชิกหมายเลขที่ 753951",
    date: "5 พ.ศ.",
    comments: 15,
    shares: 5,
    image:
      "https://www.168tobedesign.co.th/wp-content/uploads/2022/06/LINE_ALBUM_Modern-minimal-%E0%B8%A5%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%9A_%E0%B9%92%E0%B9%92%E0%B9%90%E0%B9%96%E0%B9%92%E0%B9%90_1.jpg",
  },
];
const Realtime = () => {
  const [display, setDisplay] = useState(false);
  const displayHandler = () => {
    setDisplay(!display);
    console.log(display);
  };
  const Content = (props) => {
    return (
      <div className="flex bg-gray-100 p-2 h-32 w-full border">
        <div className="p-1 min-w-44 max-w-44">
          <img
            src={props.image}
            alt="Content Image"
            className="w-full h-full object-cover"
          />
        </div>
        <main className="flex flex-col justify-between grow p-1 text-xs sm:text-base">
          <div>
            <p>{props.title}</p>
          </div>
          <div className="flex justify-between w-full trucate">
            <div className="lg:flex gap-2 text-xs">
              <p className="hidden lg:flex">{props.username}</p>
              <p>{props.date}</p>
            </div>
            <div className="flex gap-2 text-xs">
              <div className="flex items-center">
                <IoChatboxEllipsesOutline />
                <span>{props.comments}</span>
              </div>
              <div className="flex items-center">
                <MdOutlineAddToPhotos />
                <span>{props.shares}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

  return (
    <div className="w-full">
      <header className="text-xl font-semibold pl-4">
        <h1>Pantip Realtime</h1>
        <p className="text-xs text-gray-400">
          กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
        </p>
      </header>
      <div className="p-4">
        <div className="grid lg:grid-cols-2 justify-evenly">
          {DUMMY_DATA.map((data) => (
            <Content
              key={data.id}
              image={data.image}
              title={data.title}
              username={data.username}
              date={data.date}
              comments={data.comments}
              shares={data.shares}
            />
          ))}

          {display &&
            DUMMY_DATA_TWO.map((data) => (
              <Content
                key={data.id}
                image={data.image}
                title={data.title}
                username={data.username}
                date={data.date}
                comments={data.comments}
                shares={data.shares}
              />
            ))}
        </div>

        <div
          onClick={displayHandler}
          className="toggle-button bg-[#662C91] p-4 text-white text-lg text-center rounded-b-md"
        >
          {display ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
        </div>
      </div>
    </div>
  );
};

export default Realtime;
