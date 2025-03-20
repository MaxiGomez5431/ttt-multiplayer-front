import React from "react"

export default function PlayAgain ({winner, handleClick}) {
  return (
    <section className='bg-black/50 w-full h-lvh absolute flex justify-center items-center'>
      <div className='bg-blue-600 w-40 h-40 flex justify-center items-center flex-col'>
        
        {
          winner === "tie"  
          ? <p className="text-xl text-white">It's a tie!</p>
          : <p className="text-xl text-white">{winner} wins!</p>
        }

        <button 
          onClick={handleClick}
          className='bg-green-400 p-2 m-1 rounded hover:bg-green-500 cursor-pointer'
        >
          Play again
        </button>

      </div>
    </section>
  )
}