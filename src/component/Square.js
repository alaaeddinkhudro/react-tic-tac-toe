import React, { useState } from 'react'

const Square = ({onClick, index, value}) => {

  return ( <button className = "square" onClick={()=> onClick(index)}>
      {value}
    </button>
  )
}

export default Square