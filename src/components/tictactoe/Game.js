import React, { useState } from "react";
import Board from "./Board";
import { helpers } from "../../helpers";
import "./Gamestyle.css"

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  const winner = helpers(board);
  const handleClick = (index) => {
    const boardCoppy = [...board];
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = x ? "X" : "O";
    setBoard(boardCoppy);
    setX(!x);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setX(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Board cells={board} onClick={handleClick}></Board>
      <h1 className="">
        {winner ? `Người chiến thắng là ${winner}` : ' ' }
      </h1>
      <button class="mt-[15px] relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={handleReset}>
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Reset Game
        </span>
      </button>
    </div>
  );
}
