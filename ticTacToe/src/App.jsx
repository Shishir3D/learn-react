import { useState } from 'react';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <X value={squares[0]} />
        <X value={squares[1]} />
        <X value={squares[2]} />
      </div>
      <div className="board-row">
        <X value={squares[3]} />
        <X value={squares[4]} />
        <X value={squares[5]} />
      </div>
      <div className="board-row">
        <X value={squares[6]} />
        <X value={squares[7]} />
        <X value={squares[8]} />
      </div>
    </>
  );
}

function X({value}) {
  return (
    <>
      <button className="square relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
          {value}
        </span>
      </button>
    </>
  );
}
