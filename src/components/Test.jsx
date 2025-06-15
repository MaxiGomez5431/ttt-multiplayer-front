import React from 'react'
import Square from './Square'
import cross from '../assets/cross2.svg'
import circle from '../assets/circle2.svg'
import MovingBackground from './MovingBackground'

export default function Test() {

  return (
    
    <MovingBackground>
      
      <p className='text-2xl'>Tic Tac Toe!</p>
      <p className='text-3xl'>This is a example text</p>

      <section className="grid grid-cols-3">
        {Array(9).fill(null).map((_, index) => (
          <Square 
            key={index} 
            index={index}
          >
          </Square>
          
        ))}
      </section>

      <section className='flex m-2'>
        <Square isSelected={true} >{cross}</Square>
        <Square >{circle}</Square>
      </section>

      
      
    </MovingBackground>
  )
}