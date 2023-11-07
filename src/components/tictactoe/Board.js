import React from "react";
import Cell from "./Cell";

export default function Board(props) {
  return (
    <>
      <div className="sm:w-[500px] sm:h-[500px] h-[400px] w-[100%] border border-gray-300 mx-auto sm:mt-[50px] mt-[10px] grid grid-cols-3 grid-rows-3 mb-[20px]">
        {props.cells.map((item, index) => {
          return (
            <Cell
              key={index}
              value={item}
              onClick={() => {props.onClick(index)}}
              className={item === 'X' ? 'is-X' : item === 'O' ? 'is-O' : ''}
            />
          );
        })}
      </div>
    </>
  );
}
