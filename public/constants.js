import circle from '../src/assets/circle2.svg'
import cross from '../src/assets/cross2.svg'

export const TURNS = {
  x: cross,
  o: circle
}

export const winCombinations = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];