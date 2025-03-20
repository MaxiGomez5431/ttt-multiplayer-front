import React from 'react'
import PlayAgain from './PlayAgain';
import Square from './Square';
import useGameLogic from '../hooks/useGameLogic';
import useConnection from '../hooks/useConnection';
import { TURNS } from '/public/constants';

export default function Game({socket}) {
  const {players} = useConnection({socket})
  const {win, board, turn, updateBoard, playAgain} = useGameLogic({socket, players})

  return (
    <div className='w-full min-h-lvh flex justify-center items-center bg-[#ffd879] flex-col'>
      
      <section className="grid grid-cols-3">
        {board.map((_, index) => (
          <Square 
            key={index} 
            index={index}
            handleClick={updateBoard}
          >
            {board[index]}
          </Square>
          
        ))}
      </section>

      <section className='flex m-2'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      {
        win && 
        <PlayAgain winner={win} handleClick={playAgain}/>
      }

      {
        players.length < 2 &&
        <div className='bg-black/50 w-full h-lvh absolute flex justify-center items-center'>
          <div className='bg-blue-600 w-auto p-2 flex justify-center items-center text-center flex-col'>
            <p className="text-xl text-white">Waiting for other player, share this link:</p>
            <p className="text-xl text-white">{window.location.href}</p>
          </div>
        </div>
      }

    </div>
  )
}