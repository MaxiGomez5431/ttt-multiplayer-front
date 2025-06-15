import React from "react"

export default function Square ({index, children, handleClick, isSelected}) {

  const selectedColor = isSelected ? '!bg-green-400' : ''

  return (
    <div 
      onClick={() => handleClick(index)}
      className={`bg-white text-2xl text-black rounded-xl
        shadow-[3px_2px_0px_#000] border-3  active:shadow-[0px_0px_0px_#000]
        flex justify-center items-center 
        w-20 h-20 m-1 cursor-pointer
        ${selectedColor}`}
    >
      {
        children &&
        <img src={children} alt="Tic-Tac-Toe game symbol" />
      }
      
    </div>
  )
}