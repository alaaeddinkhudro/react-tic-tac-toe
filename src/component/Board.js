import React,{ useEffect, useState } from 'react'
import Square from './Square';

const Board = () => {
    const status = 'Next player: X';
    const [round , setReound] = useState('X');
    const [squaresStatus , setSquaresStatus] = useState(Array(9).fill(null));
    const renderSquare = (i) => {
        return <Square onClick={handelSquareClick} index={i} value={squaresStatus[i]}/> ;
    }
  

    const handelSquareClick = (index) => {
        setReound(round === 'X'? 'O':'X')

        let newSquaresStatus = {...squaresStatus}
        newSquaresStatus[index] = round
        setSquaresStatus({...newSquaresStatus})
    }

    return ( <div>
        <div className = "status" > 
            { status } 
        </div> 
        <div className = "board-row" > 
            { renderSquare(0)} 
            { renderSquare(1)} 
            { renderSquare(2)} 
        </div> 
        <div className = "board-row" > 
            {renderSquare(3)} 
            {renderSquare(4)} 
            {renderSquare(5)} 
        </div> 
        <div className = "board-row" > 
            {renderSquare(6)} 
            {renderSquare(7)} 
            {renderSquare(8)} 
        </div>
    </div>
    )
}

export default Board