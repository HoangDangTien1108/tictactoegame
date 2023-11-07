import React from "react";

export default function YoutubeItem(props) {
  return (
    <div
      className={`Youtube-item flex flex-col justify-center ${props.className}`}
    >
      <div className="Youtube-image">
        <img src={props.image} alt="" className="rounded-[20px]" />
      </div>
      <div className="Youtube-footer flex gap-[20px] mt-[10px] items-start">
        <img
          src={props.avatar}
          alt=""
          className="Youtube-avatar w-[50px] h-[50px] rounded-[100px] object-cover"
        />
        <div className="Youtube-info flex flex-col">
          <h3 className="Youtube-title text-[16px]">
            {props.title || "khong con tien cho nua"}
          </h3>
          <h4 className="Youtube-author text-[16px] text-gray-400 mt-[10px]">
            {props.author || ""}
          </h4>
        </div>
      </div>
    </div>
  );
}
