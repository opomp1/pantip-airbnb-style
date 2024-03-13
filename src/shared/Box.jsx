import React from "react";

const Box = (props) => {
  return (
    <div
      className={`"border border-2 border-gray-200 rounded-lg w-[100%] ${props.className}"`}
    >
      <div className="bg-[#662C91] p-4  rounded-t-lg font-bold text-white text-center">
        {props.header}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Box;
