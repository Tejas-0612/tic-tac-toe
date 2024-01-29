import React from 'react'
import { GameState } from '../Helper'

const PlayAgain = ({gameState,onReset}) => {
    console.log(gameState);
    if(gameState === GameState.inProgress){
        return;
    }
  return (
    <button 
        onClick={onReset}
        className='mt-8 p-5 bg-[#0074a6] text-white w-[100%] text-xl'>
        Play Again
    </button>
  );
}

export default PlayAgain
