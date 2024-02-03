import React from 'react'

const Tile = ({style,value,onClick,playerTurn}) => {

  let hoverclass=null;
  if(value==null && playerTurn!=null){
    hoverclass=`${playerTurn.toLowerCase()}-hover`
  }

  return (
    <div 
      onClick={onClick} 
      className={`w-[100px] h-[100px] text-3xl py-9 flex items-center justify-center text-current ${style} px-10 ${hoverclass}`}
    >
      <p>{value}</p>
    </div>
  )
}

export default Tile
