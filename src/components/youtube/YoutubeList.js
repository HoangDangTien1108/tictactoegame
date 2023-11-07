import React from "react";
import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "../../YoutubeData";

export default function YoutubeList(props) {
  return (
    <>
      <div className="flex w-[85%] gap-[40px] my-[30px] mx-auto">
        {props.children}
        {YoutubeData.map((item, index) => (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className={index === 1 ? "abc" : ""}
          />
        ))}
      </div>
    </>
  );
}
